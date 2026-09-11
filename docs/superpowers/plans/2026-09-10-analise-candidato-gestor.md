# Análise de Candidatos pelo Gestor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evoluir `#gestorCandidatePanel` para a experiência completa de análise da candidatura pelo gestor (header, perfil, resumo do processo, 6 ações com formulário, histórico), sem substituir a ficha de entrevista.

**Architecture:** Dialog amplo de coluna única no Portal do Gestor. Leitura deriva das fontes já existentes (candidato, entrevistas, testes, fit, scorecard). Decisões passam por `#gestorCandidateDecisionDialog` e gravam em `candidate.gestorNotes` + timeline. Pendências de agendamento/avaliação adicional entram via seeds derivados em `buildPendencies()` lendo flags no candidato.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `<dialog>`, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-10-analise-candidato-gestor-design.md`

## Global Constraints

- Só Portal do Gestor; **não** criar item de sidebar nem usar `#candidateDialog` como decisão.
- Parecer de entrevista **não** é preenchido nesta tela (só leitura de resumo).
- `recomendar_avanco` **não** move `candidate.stage`.
- Reprovação efetiva só se `companyGestorPermissions.gestorPodeReprovarDireto === true`.
- Pretensão salarial só se `gestorVeFaixaSalarial === true`.
- Commits só se o usuário pedir.
- Após editar código: `graphify update .` (e `graphify query` / `explain` antes de explorar amplo).
- Cache final: bump único `gestor-analise-210` (ou superior) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.
- Datas relativas a `TODAY_KEY` (`"2026-08-27"`).
- Anti-redundância: estender `#gestorCandidatePanel`; uma fonte de histórico (`gestorNotes` / timeline).

## Estrutura de arquivos

- Modify: `index.html` — shell do `#gestorCandidatePanel` (sem abas); novo `#gestorCandidateDecisionDialog`; cache.
- Modify: `app.js` — helpers de leitura, `renderGestorCandidatePanel`, decision dialog, `runGestorCandidateAction` / commit, seeds, hooks em `buildPendencies`.
- Modify: `styles.css` — layout do painel de análise e chips/blocos.
- Reference: `renderGestorCandidatePanel` (~L18428), `runGestorCandidateAction` (~L18617), `openHiringRequestDecisionDialog` (~L17668), `buildPendencies` (~L4644), `gestorFitSummary` / `gestorTestSummary` / `gestorRhEvalSummary` (~L18160), `pushGestorNote` (~L18598), `dismissCandidate` (~L13110).

---

### Task 1: Helpers de leitura + modelo de decisão

**Files:**
- Modify: `app.js` (perto de `gestorFitSummary` / `pushGestorNote`)

**Interfaces:**
- Consumes: `candidates`, `interviews`, `assignmentsForCandidate`, `fitAssignmentsForCandidate`, `scorecards` / avaliações existentes, `companyGestorPermissions`, `TODAY_KEY`, `currentManagerName`, `managerAnalyses`
- Produces:
  - `gestorCandidateDaysInProcess(candidate) → number`
  - `gestorCandidateTags(candidate) → string[]`
  - `gestorCandidateResponsible(candidate) → string`
  - `gestorCandidateProfileBlocks(candidate) → { key, label, value, hidden? }[]`
  - `gestorProcessSummaryRows(candidate) → { key, label, value, state: "ok"|"pending"|"na" }[]`
  - `GESTOR_DECISION_ACTIONS` map de actionId → `{ title, eyebrow, fields[] }`
  - `pushGestorDecision(candidate, partial)` — grava note tipada com `action`, `at`, `by`, `stage`, `justification`, extras

- [ ] **Step 1: Orientar no grafo**

Run: `graphify query "gestorCandidatePanel gestorNotes fit scorecard pendencies"`  
Expected: nós do painel gestor e artefatos relacionados.

- [ ] **Step 2: Implementar helpers de tempo / tags / responsável**

```javascript
function gestorCandidateDaysInProcess(candidate) {
  const start = String(candidate.appliedAt || candidate.createdAt || candidate.stageEnteredAt || TODAY_KEY).slice(0, 10);
  const base = new Date(`${TODAY_KEY}T12:00:00`);
  const at = new Date(`${start}T12:00:00`);
  return Math.max(0, Math.round((base - at) / 86400000));
}

function gestorCandidateTags(candidate) {
  const tags = [];
  if (candidate.tags?.length) return candidate.tags.slice();
  if (candidate.alert) tags.push("Atenção");
  if (candidateHasPendingGestorAnalysis(candidate)) tags.push("Análise gestor");
  if (candidate.score != null && candidate.score >= 80) tags.push("Alto score");
  return tags;
}

function gestorCandidateResponsible(candidate) {
  return candidate.owner || candidate.recruiter || "RH Portal";
}
```

- [ ] **Step 3: Perfil e resumo do processo**

```javascript
function gestorCandidateProfileBlocks(candidate) {
  const showSalary = companyGestorPermissions.gestorVeFaixaSalarial;
  return [
    { key: "curriculo", label: "Currículo", value: candidate.resumeName || "Disponível para preview" },
    { key: "experiencias", label: "Experiências", value: candidate.experience || candidate.experiences || "—" },
    { key: "formacao", label: "Formação", value: candidate.education || "—" },
    { key: "competencias", label: "Competências", value: (candidate.skills || []).join(", ") || candidate.competencies || "—" },
    { key: "conhecimentos", label: "Conhecimentos", value: candidate.knowledge || "—" },
    { key: "disponibilidade", label: "Disponibilidade", value: candidate.availability || "—" },
    {
      key: "pretensao",
      label: "Pretensão salarial",
      value: candidate.salaryExpectation != null ? `R$ ${candidate.salaryExpectation}` : "—",
      hidden: !showSalary,
    },
  ].filter((row) => !row.hidden);
}

function emptyProcessValue(raw) {
  if (!raw || raw === "—") return { value: "Não aplicado", state: "na" };
  return { value: String(raw), state: "ok" };
}

function gestorProcessSummaryRows(candidate) {
  const interviewsFor = interviews.filter(
    (item) => item.candidateId === candidate.id || normalize(item.name || item.candidate || "") === normalize(candidate.name),
  );
  const interviewSummary = interviewsFor.length
    ? interviewsFor
        .slice(0, 3)
        .map((item) => `${item.type || "Entrevista"} · ${item.status || "—"}${item.result || item.opinion ? ` · ${item.result || item.opinion}` : ""}`)
        .join("; ")
    : "";
  const scorecardEval =
    typeof evaluationsForCandidate === "function"
      ? evaluationsForCandidate(candidate)?.[0]
      : null;
  const overall =
    scorecardEval && typeof computeOverallScore === "function"
      ? computeOverallScore(scorecardEval)
      : candidate.score;
  const behavioral =
    typeof assignmentsForCandidate === "function"
      ? (assignmentsForCandidate(candidate, "behavioral") || [])[0]
      : null;
  const competency =
    typeof assignmentsForCandidate === "function"
      ? (assignmentsForCandidate(candidate, "competency") || [])[0]
      : null;

  const rows = [
    { key: "triagem", label: "Triagem do RH", ...emptyProcessValue(gestorRhEvalSummary(candidate)) },
    { key: "entrevistas", label: "Entrevistas / pareceres", ...emptyProcessValue(interviewSummary) },
    { key: "tecnico", label: "Teste técnico", ...emptyProcessValue(gestorTestSummary(candidate)) },
    {
      key: "comportamental",
      label: "Teste comportamental",
      ...emptyProcessValue(behavioral ? (behavioral.score != null ? `${behavioral.score}%` : behavioral.status) : "—"),
    },
    { key: "fit", label: "Fit Cultural", ...emptyProcessValue(gestorFitSummary(candidate)) },
    {
      key: "competencias",
      label: "Avaliação por competências",
      ...emptyProcessValue(competency ? (competency.score != null ? `${competency.score}%` : competency.status) : "—"),
    },
    {
      key: "scorecard",
      label: "Scorecard",
      ...emptyProcessValue(scorecardEval ? scorecardEval.status || "Em preenchimento" : "—"),
    },
    {
      key: "score",
      label: "Score geral",
      ...emptyProcessValue(overall != null ? String(overall) : "—"),
    },
  ];
  return rows.map((row) => {
    if (row.state === "ok" && /pendente|aguardando/i.test(row.value)) return { ...row, state: "pending" };
    return row;
  });
}
```

Ajuste nomes (`evaluationsForCandidate`, campos do candidato) ao que o arquivo já expõe — se a função de avaliações tiver outro nome, use o helper existente de scorecard/resultados.

- [ ] **Step 4: Catálogo de ações + `pushGestorDecision`**

```javascript
const GESTOR_DECISION_ACTIONS = {
  entrevistar: {
    title: "Quero entrevistar",
    eyebrow: "ANÁLISE DO GESTOR",
    fields: [{ name: "observation", label: "Observação", type: "textarea", required: false }],
  },
  avancar: {
    title: "Recomendar avanço",
    eyebrow: "ANÁLISE DO GESTOR",
    fields: [
      { name: "nextStage", label: "Próxima etapa sugerida", type: "select", required: true, optionsFrom: "stages" },
      { name: "justification", label: "Justificativa", type: "textarea", required: true },
    ],
  },
  reprovar: {
    title: "Recomendar reprovação",
    eyebrow: "ANÁLISE DO GESTOR",
    fields: [
      { name: "reason", label: "Motivo", type: "select", required: true, optionsFrom: "rejectReasons" },
      { name: "justification", label: "Justificativa", type: "textarea", required: true },
    ],
  },
  avaliacao_adicional: {
    title: "Solicitar avaliação adicional",
    eyebrow: "ANÁLISE DO GESTOR",
    fields: [
      {
        name: "evaluationType",
        label: "Tipo",
        type: "select",
        required: true,
        options: [
          { value: "tecnico", label: "Teste técnico" },
          { value: "comportamental", label: "Avaliação comportamental" },
          { value: "fit", label: "Fit Cultural" },
          { value: "outra", label: "Outra avaliação" },
        ],
      },
      { name: "reason", label: "Motivo", type: "text", required: true },
      { name: "observation", label: "Observação", type: "textarea", required: false },
    ],
  },
  banco: {
    title: "Enviar para Banco de Talentos",
    eyebrow: "ANÁLISE DO GESTOR",
    fields: [
      { name: "reason", label: "Motivo", type: "text", required: true },
      { name: "talentArea", label: "Área / cargo de interesse", type: "text", required: true },
      { name: "observation", label: "Observação", type: "textarea", required: false },
    ],
  },
  manter: {
    title: "Manter em análise",
    eyebrow: "ANÁLISE DO GESTOR",
    fields: [{ name: "observation", label: "Observação", type: "textarea", required: true }],
  },
};

function pushGestorDecision(candidate, partial) {
  const entry = {
    type: partial.actionLabel || partial.action,
    action: partial.action,
    text: partial.justification || partial.observation || partial.reason || "",
    justification: partial.justification || partial.observation || "",
    at: `${TODAY_KEY}T12:00:00`,
    by: currentManagerName,
    stage: candidate.stage || "",
    meta: partial.meta || {},
  };
  ensureCandidateGestorNotes(candidate).unshift(entry);
  if (!candidate.history) candidate.history = [];
  candidate.history.unshift([entry.type, `${entry.text} · ${entry.by} · agora`]);
  if (typeof pushTimelineEvent === "function") {
    pushTimelineEvent(candidate, {
      type: "comentario",
      title: entry.type,
      description: entry.text,
      actor: entry.by,
    });
  }
  return entry;
}
```

- [ ] **Step 5: Verificar sintaxe**

Run: `node --check app.js`  
Expected: exit 0.

---

### Task 2: Shell HTML do painel + mini-dialog

**Files:**
- Modify: `index.html` (`#gestorCandidatePanel` ~L3267; inserir dialog após ele ou perto de `#hiringRequestDecisionDialog`)

**Interfaces:**
- Consumes: estrutura atual do painel
- Produces: hosts `#gestorCandHeader`, `#gestorCandProfile`, `#gestorCandProcess`, `#gestorCandHistory`, `#gestorCandActions`; dialog `#gestorCandidateDecisionDialog` com `#gestorCandidateDecisionFields`

- [ ] **Step 1: Substituir corpo do `#gestorCandidatePanel`**

Remover tabs Artefatos | Parecer e textarea fixa. Deixar:

```html
<dialog class="stack-dialog gestor-candidate-panel gestor-analysis-panel" id="gestorCandidatePanel">
  <header class="stack-dialog-header gestor-analysis-header">
    <div>
      <span class="eyebrow">ANÁLISE DO GESTOR</span>
      <h2 id="gestorCandTitle">Candidato</h2>
      <p id="gestorCandMeta" class="panel-note"></p>
      <div id="gestorCandHeaderChips" class="gestor-analysis-chips"></div>
    </div>
    <button class="icon-button" type="button" id="closeGestorCandidatePanel" aria-label="Fechar">×</button>
  </header>
  <p id="gestorCandAnalysisBanner" class="gestor-analysis-banner" hidden></p>
  <div class="gestor-analysis-body">
    <section class="gestor-analysis-section" id="gestorCandProfile"></section>
    <section class="gestor-analysis-section" id="gestorCandProcess"></section>
    <section class="gestor-analysis-section" id="gestorCandHistory"></section>
  </div>
  <footer class="dialog-actions gestor-analysis-actions" id="gestorCandActions"></footer>
</dialog>
```

- [ ] **Step 2: Adicionar `#gestorCandidateDecisionDialog`**

Espelhar `#hiringRequestDecisionDialog`:

```html
<dialog class="stack-dialog" id="gestorCandidateDecisionDialog">
  <form id="gestorCandidateDecisionForm">
    <header class="stack-dialog-header">
      <div>
        <span class="eyebrow" id="gestorCandidateDecisionEyebrow">ANÁLISE DO GESTOR</span>
        <h2 id="gestorCandidateDecisionTitle">Decisão</h2>
        <p id="gestorCandidateDecisionSubtitle">Registre a decisão desta análise.</p>
      </div>
      <button class="icon-button" type="button" id="closeGestorCandidateDecisionDialog" aria-label="Fechar">×</button>
    </header>
    <div class="talent-edit-fields" id="gestorCandidateDecisionFields"></div>
    <footer class="dialog-actions">
      <button class="dialog-text-button" type="button" id="gestorCandidateDecisionCancel">Cancelar</button>
      <button class="primary-button" type="submit" id="gestorCandidateDecisionSubmit">Confirmar</button>
    </footer>
  </form>
</dialog>
```

- [ ] **Step 3: Smoke visual**

Abrir `index.html` no browser (ou validar que os ids existem).  
Expected: dialogs presentes no DOM; sem tabs antigas.

---

### Task 3: Render do conteúdo de leitura + histórico

**Files:**
- Modify: `app.js` — `renderGestorCandidatePanel`
- Modify: `styles.css` — classes `.gestor-analysis-*`

**Interfaces:**
- Consumes: helpers da Task 1; `#gestorCand*` hosts
- Produces: painel preenchido; histórico a partir de `ensureCandidateGestorNotes(candidate)`

- [ ] **Step 1: Reescrever `renderGestorCandidatePanel`**

- Header: nome; meta `vaga · etapa`; chips (etapa, tempo `Xd no processo`, tags, score, responsável).
- Banner de `managerAnalyses` pendente (manter lógica atual).
- `#gestorCandProfile`: título “Currículo e perfil” + grid de fatos; botão currículo chama `openCandidateResume`.
- `#gestorCandProcess`: título “Resumo do processo” + linhas label/valor com classe `is-pending` / `is-na`.
- `#gestorCandHistory`: lista cronológica; vazio → “Nenhuma decisão registrada.”
- Remover dependência de `gestorViewState.candTab` / panes antigas (ou no-op se ainda referenciadas).
- Footer de ações fica na Task 4 (pode deixar placeholder vazio ou botões sem wiring completo).

- [ ] **Step 2: CSS**

```css
.gestor-analysis-panel { width: min(920px, 96vw); max-height: 92vh; }
.gestor-analysis-body { overflow: auto; display: grid; gap: 18px; padding: 0 4px 8px; }
.gestor-analysis-section h3 { margin: 0 0 10px; font-size: 13px; }
.gestor-analysis-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
.gestor-analysis-chip {
  display: inline-flex; align-items: center;
  padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 600;
  background: var(--surface-muted); color: var(--ink-700); border: 1px solid var(--border);
}
.gestor-analysis-chip.is-score { background: var(--brand-50); color: var(--brand-700); border-color: var(--brand-200); }
.gestor-analysis-facts {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px;
}
.gestor-analysis-fact { display: grid; gap: 2px; }
.gestor-analysis-fact span { font-size: 10px; font-weight: 700; text-transform: uppercase; color: var(--ink-500); }
.gestor-analysis-fact strong { font-size: 13px; font-weight: 600; color: var(--ink-950); }
.gestor-analysis-process-row {
  display: grid; grid-template-columns: 180px 1fr; gap: 8px;
  padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 13px;
}
.gestor-analysis-process-row.is-na strong { color: var(--ink-500); font-weight: 500; }
.gestor-analysis-process-row.is-pending strong { color: rgb(146 64 14); }
.gestor-analysis-history { list-style: none; margin: 0; padding: 0; display: grid; gap: 8px; }
.gestor-analysis-history li { display: grid; gap: 2px; padding: 8px 10px; background: var(--surface-soft); border-radius: 8px; }
.gestor-analysis-actions { flex-wrap: wrap; gap: 8px; justify-content: flex-start; }
```

Alinhar tokens ao CSS existente se `--border` / nomes diferirem.

- [ ] **Step 3: Ajustar handlers de tab antigos**

Qualquer `data-gestor-cand-tab` / foco em `#gestorCandNote`: remover ou redirecionar para abrir o painel scroll. `openGestorCandidatePanel(..., { focus: "parecer" })` → scroll para `#gestorCandActions` ou abre decisão se analysis pendente.

- [ ] **Step 4: `node --check app.js`**

Expected: exit 0.

---

### Task 4: Mini-dialog e as 6 ações

**Files:**
- Modify: `app.js` — decision state, open/close/commit, `runGestorCandidateAction`, footer buttons
- Modify: `index.html` — already has dialog (Task 2)

**Interfaces:**
- Consumes: `GESTOR_DECISION_ACTIONS`, `pushGestorDecision`, `dismissCandidate`
- Produces:
  - `gestorCandidateDecisionState = { candidateId, action }`
  - `openGestorCandidateDecisionDialog(candidate, actionId)`
  - `closeGestorCandidateDecisionDialog()`
  - `commitGestorCandidateDecision(formData)`

- [ ] **Step 1: Estado + open/close/render fields**

Padrão idêntico a `openHiringRequestDecisionDialog`: montar fields no `#gestorCandidateDecisionFields` conforme `GESTOR_DECISION_ACTIONS[actionId]`.

Para `optionsFrom: "stages"`: opções a partir de `pipelineStages` / stages ativos do protótipo (nomes exibidos).  
Para `rejectReasons`: catálogo `rejectionReasons` se existir; senão lista fixa `["Perfil técnico", "Fit cultural", "Expectativa salarial", "Outro"]`.

Título de reprovação no botão/footer: se `gestorPodeReprovarDireto` usar “Reprovar” / título “Reprovar candidato”; senão “Recomendar reprovação”.

- [ ] **Step 2: Footer do painel**

```javascript
actions.innerHTML = `
  <div class="gestor-panel-actions-secondary">
    <button type="button" class="secondary-button" data-gestor-panel-action="entrevistar">Quero entrevistar</button>
    <button type="button" class="secondary-button" data-gestor-panel-action="avancar">Recomendar avanço</button>
    <button type="button" class="secondary-button" data-gestor-panel-action="avaliacao_adicional">Avaliação adicional</button>
    <button type="button" class="secondary-button" data-gestor-panel-action="banco">Banco de Talentos</button>
    <button type="button" class="secondary-button" data-gestor-panel-action="manter">Manter em análise</button>
    <button type="button" class="dialog-text-button is-danger" data-gestor-panel-action="reprovar">${
      companyGestorPermissions.gestorPodeReprovarDireto ? "Reprovar" : "Recomendar reprovação"
    }</button>
  </div>
  <button type="button" class="secondary-button" data-gestor-panel-action="close">Fechar</button>
`;
```

- [ ] **Step 3: `commitGestorCandidateDecision`**

```javascript
function commitGestorCandidateDecision(data) {
  const candidate = candidates.find((c) => c.id === gestorCandidateDecisionState.candidateId);
  const action = gestorCandidateDecisionState.action;
  if (!candidate || !action) return false;
  const labels = {
    entrevistar: "Quero entrevistar",
    avancar: "Recomendação: avanço",
    reprovar: companyGestorPermissions.gestorPodeReprovarDireto ? "Reprovação do gestor" : "Recomendação: reprovação",
    avaliacao_adicional: "Solicitação: avaliação adicional",
    banco: "Recomendação: Banco de Talentos",
    manter: "Manter em análise",
  };
  pushGestorDecision(candidate, {
    action,
    actionLabel: labels[action],
    justification: data.justification || data.observation || data.reason || "",
    observation: data.observation,
    reason: data.reason,
    meta: {
      nextStage: data.nextStage || "",
      evaluationType: data.evaluationType || "",
      talentArea: data.talentArea || "",
    },
  });

  if (action === "entrevistar") {
    candidate.gestorWantsInterview = true;
    candidate.gestorInterviewNote = data.observation || "";
  }
  if (action === "avaliacao_adicional") {
    candidate.gestorExtraEvaluation = {
      type: data.evaluationType,
      reason: data.reason,
      observation: data.observation || "",
      at: TODAY_KEY,
      by: currentManagerName,
    };
  }
  if (action === "reprovar" && companyGestorPermissions.gestorPodeReprovarDireto) {
    dismissCandidate(candidate, data.reason || "Reprovado pelo gestor", data.justification || "", { stay: true });
    closeGestorCandidateDecisionDialog();
    document.querySelector("#gestorCandidatePanel")?.close();
    renderGestorPortal();
    showToast("Candidato reprovado", candidate.name);
    return true;
  }
  if (action === "manter") {
    closeGestorCandidateDecisionDialog();
    document.querySelector("#gestorCandidatePanel")?.close();
    showToast("Mantido em análise", candidate.name);
    renderGestorPortal();
    return true;
  }

  closeGestorCandidateDecisionDialog();
  renderGestorCandidatePanel(candidate);
  renderGestorPortal();
  if (typeof renderPendencias === "function") renderPendencias();
  showToast("Decisão registrada", labels[action]);
  return true;
}
```

- [ ] **Step 4: Wire events**

- Click `data-gestor-panel-action` nos 6 ids → `openGestorCandidateDecisionDialog` (exceto `curriculo` / `close`).
- Submit `#gestorCandidateDecisionForm` → validar required → `commitGestorCandidateDecision`.
- Cancel / backdrop / X → close.
- Remover fluxo antigo que usava só `#gestorCandNote` para avanço/reprovação/banco/entrevista **ou** redirecionar esses actionIds antigos para o novo dialog (`solicitar_entrevista` → `entrevistar`, etc.) para não quebrar deep-links.

- [ ] **Step 5: `node --check app.js`**

Expected: exit 0.

---

### Task 5: Pendências derivadas + seeds de demo

**Files:**
- Modify: `app.js` — `buildPendencies`, seeds de 1–2 candidatos “ricos” usados pelo gestor

**Interfaces:**
- Consumes: `candidate.gestorWantsInterview`, `candidate.gestorExtraEvaluation`
- Produces: itens `type: "entrevista"` / avaliação na inbox de Pendências

- [ ] **Step 1: Em `buildPendencies`, após loops existentes**

```javascript
candidates.forEach((candidate) => {
  if (candidate.gestorWantsInterview) {
    push({
      id: `derived-gestor-entrevista-${candidate.id}`,
      type: "entrevista",
      title: `Agendar entrevista (pedido do gestor) — ${candidate.name}`,
      description: candidate.gestorInterviewNote || `${candidate.vacancy} · ${candidate.stage}`,
      assignee: candidate.owner || CURRENT_RH_USER,
      dueAt: `${pendingAddDays(TODAY_KEY, 3)}T18:00:00`,
      subject: { kind: "candidate", id: candidate.id },
      primaryAction: "abrir_entrevista",
      secondaryActions: ["abrir_candidatura"],
    });
  }
  if (candidate.gestorExtraEvaluation) {
    const t = candidate.gestorExtraEvaluation.type || "outra";
    push({
      id: `derived-gestor-aval-${candidate.id}-${t}`,
      type: t === "fit" ? "fit" : "teste",
      title: `Avaliação adicional (${t}) — ${candidate.name}`,
      description: candidate.gestorExtraEvaluation.reason || candidate.vacancy,
      assignee: candidate.owner || CURRENT_RH_USER,
      dueAt: `${pendingAddDays(TODAY_KEY, 5)}T18:00:00`,
      subject: { kind: "candidate", id: candidate.id },
      primaryAction: "abrir_candidatura",
      secondaryActions: ["resolver"],
    });
  }
});
```

Use `type` já aceito pelo hub de pendências (conferir chips); se `fit`/`teste`/`entrevista` não existirem, mapear para o tipo mais próximo já suportado e documentar no toast.

- [ ] **Step 2: Seed de candidato para demo**

Escolher um candidato já da vaga da Larissa Dias (ex. Karen / outro em etapa de análise gestor) e garantir campos:

```javascript
// no seed do candidato escolhido (ou ensureDefaults):
experience: "…",
education: "…",
knowledge: "…",
availability: "Imediata",
salaryExpectation: 4500,
skills: ["…"],
// + assignments/fit/entrevistas já existentes quando possível
```

Garantir `managerAnalyses` pending apontando para esse candidato.

- [ ] **Step 3: Manual rápido**

Portal Gestor → Análises / vaga → abrir candidato → “Quero entrevistar” → Pendências deve listar o item (após re-render).

---

### Task 6: Polish CSS, cache, graphify, aceite

**Files:**
- Modify: `styles.css`, `index.html` (cache), `docs/superpowers/specs/2026-09-10-analise-candidato-gestor-design.md` (Status: APPROVED)
- Run: `graphify update .`

- [ ] **Step 1: Ajustes visuais**

Footer do painel sem cobrir conteúdo (evitar sticky problemático — mesmo aprendizado das solicitações). Mobile: dialog full-ish width.

- [ ] **Step 2: Cache**

```html
<link rel="stylesheet" href="./styles.css?v=gestor-analise-210" />
<script src="./app.js?v=gestor-analise-210"></script>
```

- [ ] **Step 3: Spec status**

Em `2026-09-10-analise-candidato-gestor-design.md`: `Status: APPROVED`.

- [ ] **Step 4: Verificação**

Run: `node --check app.js`  
Run: `graphify update .`  
Manual (spec Testing):

1. Header/perfil/resumo  
2. Entrada por Análises  
3. Seis ações + histórico  
4. Flag reprovação on/off  
5. Pretensão on/off  
6. Não abre ficha/dossiê RH como decisão  
7. Pedido de entrevista → pendência  

- [ ] **Step 5: Entrega ao usuário**

Informar: o que já existia vs o que mudou; fluxo antes × agora; o que foi evitado (nav nova / segundo parecer / ficha misturada).

---

## Spec coverage (self-review)

| Spec | Task |
|------|------|
| Header rico | 3 |
| Currículo e perfil + permissão salário | 1, 3 |
| Resumo do processo | 1, 3 |
| 6 ações com campos | 1, 4 |
| Histórico | 1, 3, 4 |
| Não substitui ficha | Global + 4 (só leitura entrevistas) |
| Extende painel, sem nav | Global, 2 |
| Pendência agendamento / avaliação | 5 |
| Flags empresa | 4, 5 |
| Seeds + cache | 5, 6 |

## Placeholder scan

Nenhum TBD / “implement later”. Nomes de helpers de scorecard podem precisar de alias ao implementar — Task 1 exige ajustar ao símbolo real do arquivo.
