# Condução de Entrevista Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Entregar modal ampla de condução ao vivo (perguntas da ficha, respostas, autosave, lateral CV/notas) e wizard de finalização a partir do detalhe da entrevista.

**Architecture:** Uma `#interviewConductDialog` com vista `conduct` e vista `finish`. `runInterviewDetailAction("start")` abre a condução; `complete` passa pelo wizard. Rascunho em `interview.conductDraft`. Perguntas via `getSheetTemplateById(item.sheetId)`.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `<dialog>`, Node.js apenas para `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-03-conducao-entrevista-design.md`

## Global Constraints

- Entrada só pelo `#interviewDetailDialog` (Iniciar / Continuar / Finalizar) — sem item de nav.
- Modal ampla (largura ~min(1100px, …)), não fullscreen page.
- Perguntas da ficha vinculada (`sheetId` → `interviewSheetTemplates`).
- Lateral MVP: currículo + anotações (sem tags/evals ricos).
- Protótipos: saída acidental, recovery de rascunho, obrigatórias pendentes, confirmação de finalização.
- Cache final: `conducao-entrevista-134` em CSS e JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.
- Após editar código: `graphify update .`
- Commits só se o usuário pedir.

## Estrutura de arquivos

- Modify: `index.html` — `#interviewConductDialog`, confirms, cache bust; labels do detalhe se preciso.
- Modify: `app.js` — draft helpers, open/render conduct, finish wizard, wire `start`/`complete`.
- Modify: `styles.css` — layout condução (header / main / side / finish).
- Reference: `runInterviewDetailAction` (~L3741), `renderInterviewDetail`, `openCandidateResume`, `getSheetTemplateById`, `pipelineStages`, `.interview-detail-dialog`.

---

### Task 1: Shell HTML da modal + confirms

**Files:**
- Modify: `index.html` (após `#interviewDetailDialog` ~L1821)
- Modify: `index.html` cache → `conducao-entrevista-134` (pode ficar para Task 6 se preferir bump único no fim; neste plano bump na Task 6)

**Interfaces:**
- Produces: `#interviewConductDialog`, views `#conductWorkspaceView` / `#conductFinishView`
- Produces: `#conductExitDialog`, `#conductPendingDialog`, `#conductConfirmFinishDialog` (ou seções hidden equivalentes)

- [ ] **Step 1: Baseline**

Confirmar que não existe `#interviewConductDialog`. Expected: gap existe.

- [ ] **Step 2: Markup da modal**

```html
<dialog class="interview-conduct-dialog stack-dialog" id="interviewConductDialog">
  <div class="interview-conduct-sheet">
    <div id="conductWorkspaceView">
      <header class="conduct-header">
        <div>
          <span class="eyebrow">CONDUÇÃO</span>
          <h2 id="conductCandidateName">Candidato</h2>
          <p class="panel-note" id="conductMetaLine"></p>
        </div>
        <div class="conduct-header-actions">
          <button type="button" class="secondary-button" id="conductOpenResume">Currículo</button>
          <button type="button" class="secondary-button" id="conductShowHistory">Histórico</button>
          <button type="button" class="icon-button" id="conductCloseBtn" aria-label="Fechar">×</button>
        </div>
      </header>
      <div class="conduct-layout">
        <section class="conduct-main">
          <div class="conduct-progress">
            <div class="conduct-progress-bar"><span id="conductProgressFill"></span></div>
            <p id="conductProgressLabel">0 / 0</p>
            <p id="conductAutosaveLabel" class="panel-note">Salvo automaticamente</p>
          </div>
          <article class="conduct-question-card">
            <div class="conduct-question-meta">
              <span id="conductQuestionIndex">Pergunta 1</span>
              <span id="conductRequiredBadge" hidden>Obrigatória</span>
            </div>
            <h3 id="conductQuestionPrompt">Pergunta</h3>
            <p class="panel-note" id="conductQuestionType"></p>
            <div id="conductAnswerHost"></div>
          </article>
          <div class="conduct-nav">
            <button type="button" class="secondary-button" id="conductPrevQuestion">Anterior</button>
            <button type="button" class="secondary-button" id="conductNextQuestion">Próxima</button>
          </div>
        </section>
        <aside class="conduct-side">
          <section>
            <h3>Currículo</h3>
            <button type="button" class="secondary-button" id="conductSideResume">Abrir currículo</button>
          </section>
          <section>
            <h3>Anotações</h3>
            <textarea id="conductNotes" rows="8" placeholder="Notas da entrevista"></textarea>
          </section>
        </aside>
      </div>
      <footer class="conduct-footer">
        <button type="button" class="secondary-button" id="conductSaveDraft">Salvar rascunho</button>
        <button type="button" class="primary-button" id="conductFinishBtn">Finalizar entrevista</button>
      </footer>
    </div>

    <div id="conductFinishView" hidden>
      <header class="conduct-header">
        <div>
          <span class="eyebrow">FINALIZAÇÃO</span>
          <h2>Encerrar entrevista</h2>
          <p class="panel-note" id="conductFinishCandidate"></p>
        </div>
        <button type="button" class="secondary-button" id="conductFinishBack">Voltar às perguntas</button>
      </header>
      <div class="conduct-finish-form">
        <label class="form-field"><span>Nota (0–10)</span><input id="conductScore" type="number" min="0" max="10" step="1" /></label>
        <label class="form-field"><span>Parecer</span><textarea id="conductOpinion" rows="4"></textarea></label>
        <fieldset class="conduct-reco">
          <legend>Recomendação</legend>
          <label><input type="radio" name="conductReco" value="advance" checked /> Avançar</label>
          <label><input type="radio" name="conductReco" value="reject" /> Reprovar</label>
          <label><input type="radio" name="conductReco" value="talent_bank" /> Banco de Talentos</label>
          <label><input type="radio" name="conductReco" value="evaluate_later" /> Avaliar posteriormente</label>
        </fieldset>
        <label class="form-field"><span>Próxima etapa</span><select id="conductNextStage"></select></label>
      </div>
      <footer class="conduct-footer">
        <button type="button" class="secondary-button" id="conductFinishCancel">Cancelar</button>
        <button type="button" class="primary-button" id="conductFinishConfirm">Confirmar finalização</button>
      </footer>
    </div>
  </div>
</dialog>

<dialog class="stack-dialog" id="conductExitDialog">
  <form method="dialog" class="stack-dialog-form">
    <h2>Sair da condução?</h2>
    <p>Há um rascunho. Você pode continuar depois pelo detalhe da entrevista.</p>
    <footer>
      <button value="cancel" class="secondary-button">Continuar conduzindo</button>
      <button value="exit" class="primary-button" id="conductExitConfirm">Sair</button>
    </footer>
  </form>
</dialog>

<dialog class="stack-dialog" id="conductPendingDialog">
  <form method="dialog" class="stack-dialog-form">
    <h2>Perguntas obrigatórias pendentes</h2>
    <ul id="conductPendingList"></ul>
    <footer>
      <button value="ok" class="primary-button">Voltar às perguntas</button>
    </footer>
  </form>
</dialog>
```

Ajuste `Histórico`: `#conductShowHistory` pode abrir toast com 3–5 linhas de `candidate.history` ou focar aba interviews do dossiê se já aberto — no Step 3 da Task 3 implementar toast resumido (mais simples).

- [ ] **Step 3: Verificar**

Abrir HTML: ids presentes; dialog ainda sem wiring.  
Expected: markup ok.

- [ ] **Step 4: Commit** (se pedido)

```bash
git commit -m "feat(conducao): shell HTML da modal de condução"
```

---

### Task 2: Modelo de rascunho e helpers

**Files:**
- Modify: `app.js` (próximo a helpers de ficha / entrevista)

**Interfaces:**
- Produces: `conductingInterviewId`, `conductViewMode` (`"workspace" | "finish"`), `conductDirty`
- Produces: `ensureConductDraft(item): Draft`
- Produces: `getConductSheet(item): SheetTemplate | null`
- Produces: `getConductQuestions(item): Question[]`
- Produces: `getConductAnswer(item, questionId)`, `setConductAnswer(item, questionId, value)`
- Produces: `conductProgress(item): { answered, total, requiredPending[] }`
- Produces: `autosaveConductDraft(item)`
- Consumes: `getSheetTemplateById`, `normalizeInterviewSheetRef`, `TODAY_KEY`

- [ ] **Step 1: Estado**

```js
let conductingInterviewId = null;
let conductViewMode = "workspace";
let conductDirty = false;
```

- [ ] **Step 2: Helpers**

```js
function getConductSheet(item) {
  if (!item) return null;
  normalizeInterviewSheetRef(item);
  return getSheetTemplateById(item.sheetId) || null;
}

function getConductQuestions(item) {
  const sheet = getConductSheet(item);
  return (sheet?.questions || []).slice().sort((a, b) => a.order - b.order);
}

function ensureConductDraft(item) {
  const sheet = getConductSheet(item);
  if (!item.conductDraft) {
    item.conductDraft = {
      sheetId: sheet?.id || item.sheetId || null,
      currentQuestionId: getConductQuestions(item)[0]?.id ?? null,
      answers: [],
      notes: "",
      score: null,
      opinion: "",
      recommendation: "advance",
      nextStage: "",
      updatedAt: `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`,
      finalizedAt: null,
    };
  }
  if (sheet && item.conductDraft.sheetId !== sheet.id) {
    item.conductDraft.sheetId = sheet.id;
  }
  return item.conductDraft;
}

function getConductAnswer(item, questionId) {
  const draft = ensureConductDraft(item);
  return draft.answers.find((entry) => entry.questionId === questionId)?.value ?? "";
}

function setConductAnswer(item, questionId, value) {
  const draft = ensureConductDraft(item);
  const existing = draft.answers.find((entry) => entry.questionId === questionId);
  const stamp = `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`;
  if (existing) {
    existing.value = value;
    existing.updatedAt = stamp;
  } else {
    draft.answers.push({ questionId, value, updatedAt: stamp });
  }
  draft.updatedAt = stamp;
  conductDirty = true;
}

function conductProgress(item) {
  const questions = getConductQuestions(item);
  const answered = questions.filter((q) => {
    const value = getConductAnswer(item, q.id);
    return String(value ?? "").trim() !== "";
  });
  const requiredPending = questions.filter((q) => {
    if (!q.required) return false;
    return String(getConductAnswer(item, q.id) ?? "").trim() === "";
  });
  return { answered: answered.length, total: questions.length, requiredPending };
}

function autosaveConductDraft(item) {
  const draft = ensureConductDraft(item);
  draft.notes = document.querySelector("#conductNotes")?.value ?? draft.notes;
  draft.updatedAt = `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`;
  const label = document.querySelector("#conductAutosaveLabel");
  if (label) label.textContent = `Salvo automaticamente · ${draft.updatedAt.slice(11, 16)}`;
  conductDirty = false;
}
```

- [ ] **Step 3: Verificar**

`node --check app.js`  
Expected: exit 0.

- [ ] **Step 4: Commit** (se pedido)

```bash
git commit -m "feat(conducao): helpers de rascunho e progresso"
```

---

### Task 3: Abrir / render condução (workspace)

**Files:**
- Modify: `app.js`
- Modify: `styles.css` (layout mínimo para ver a tela)

**Interfaces:**
- Produces: `openInterviewConduct(item)`, `closeInterviewConduct({ force? })`
- Produces: `renderConductWorkspace()`, `renderConductAnswerControl(question, value)`
- Produces: `syncConductDetailCtas()` dentro / após `renderInterviewDetail`
- Consumes: `openCandidateResume`, `ensureConductDraft`, `getConductQuestions`

- [ ] **Step 1: `openInterviewConduct` / close**

```js
function openInterviewConduct(item) {
  if (!item) return;
  const sheet = getConductSheet(item);
  if (!sheet || !getConductQuestions(item).length) {
    showToast("Ficha necessária", "Vincule uma ficha com perguntas antes de conduzir.");
    return;
  }
  conductingInterviewId = item.id;
  conductViewMode = "workspace";
  if (!item.startedAt) {
    item.startedAt = `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`;
    interviewActivity(item, "Iniciou a entrevista");
  }
  ensureConductDraft(item);
  renderConductWorkspace();
  document.querySelector("#interviewDetailDialog")?.close();
  document.querySelector("#interviewConductDialog")?.showModal();
}

function requestCloseInterviewConduct() {
  const item = interviews.find((entry) => entry.id === conductingInterviewId);
  if (item && (conductDirty || ensureConductDraft(item).answers.length || ensureConductDraft(item).notes)) {
    document.querySelector("#conductExitDialog")?.showModal();
    return;
  }
  closeInterviewConduct({ force: true });
}

function closeInterviewConduct({ force = false } = {}) {
  if (!force) {
    requestCloseInterviewConduct();
    return;
  }
  const item = interviews.find((entry) => entry.id === conductingInterviewId);
  if (item) autosaveConductDraft(item);
  document.querySelector("#interviewConductDialog")?.close();
  conductingInterviewId = null;
  conductViewMode = "workspace";
  conductDirty = false;
  if (item) {
    selectedInterviewDetailId = item.id;
    openInterviewDetail(item);
  }
}
```

- [ ] **Step 2: Render answer control + workspace**

Espelhar tipos da ficha (`short_text`, `long_text`, `yes_no`, `single`, `scale`, `score`) em `#conductAnswerHost` com inputs reais (`data-conduct-answer`).

`renderConductWorkspace()` preenche header (`#conductCandidateName`, `#conductMetaLine` com vaga · etapa · horário · entrevistadores · ficha), progresso, pergunta atual via `draft.currentQuestionId`, notas, mostra `#conductWorkspaceView` / esconde finish.

- [ ] **Step 3: Wire detalhe**

Em `runInterviewDetailAction`:

```js
} else if (action === "start") {
  openInterviewConduct(item);
  return;
} else if (action === "complete") {
  openInterviewConduct(item);
  showConductFinishView();
  return;
}
```

Em `renderInterviewDetail`, labels:

- start → `item.conductDraft && !item.conductDraft.finalizedAt && item.startedAt` ? **"Continuar entrevista"** : **"Iniciar entrevista"**
- complete → **"Finalizar entrevista"** (abre condução já em finish se houver draft; senão workspace→finish)

Primary action: se `startedAt` e não realizada → preferir Continuar / Finalizar conforme estado atual do primary chain.

- [ ] **Step 4: Listeners workspace**

- Prev/next: sync answer from DOM → muda `currentQuestionId` → render  
- Answer input: `setConductAnswer` + debounce `autosaveConductDraft` (300ms `setTimeout`)  
- Notes input: dirty + autosave  
- Save draft button: `autosaveConductDraft` + toast  
- Resume buttons: `openCandidateResume(candidate)`  
- History: toast com 3 entradas de `candidate.history`  
- Close / cancel exit / confirm exit  
- Finish button → Task 4 `showConductFinishView` (stub ok se chamar função definida na Task 4; implementar stub temporário que só troca view)

- [ ] **Step 5: Verificar manual**

Detalhe → Iniciar → modal com perguntas da ficha RH; responder; fechar → confirm; Continuar recupera texto.

`node --check app.js`

- [ ] **Step 6: Commit** (se pedido)

```bash
git commit -m "feat(conducao): workspace de perguntas com autosave"
```

---

### Task 4: Finalização + efeitos de recomendação

**Files:**
- Modify: `app.js`

**Interfaces:**
- Produces: `showConductFinishView()`, `fillConductNextStageOptions()`, `finalizeConductInterview()`
- Consumes: `conductProgress`, `pipelineStages`, `approveCandidateToTalentBank` / `dismissCandidate` / `updateCandidateStage` se existirem

- [ ] **Step 1: Show finish view**

```js
function showConductFinishView() {
  const item = interviews.find((entry) => entry.id === conductingInterviewId);
  if (!item) return;
  autosaveConductDraft(item);
  const { requiredPending } = conductProgress(item);
  if (requiredPending.length) {
    const list = document.querySelector("#conductPendingList");
    if (list) {
      list.innerHTML = requiredPending
        .map((q) => `<li><button type="button" data-conduct-goto="${q.id}">${escapeHtml(q.prompt)}</button></li>`)
        .join("");
    }
    document.querySelector("#conductPendingDialog")?.showModal();
    return;
  }
  conductViewMode = "finish";
  const draft = ensureConductDraft(item);
  document.querySelector("#conductWorkspaceView").hidden = true;
  document.querySelector("#conductFinishView").hidden = false;
  document.querySelector("#conductFinishCandidate").textContent = `${item.name} · ${item.vacancy}`;
  document.querySelector("#conductScore").value = draft.score ?? "";
  document.querySelector("#conductOpinion").value = draft.opinion || "";
  document.querySelectorAll("[name='conductReco']").forEach((input) => {
    input.checked = input.value === (draft.recommendation || "advance");
  });
  fillConductNextStageOptions(draft.nextStage || item.stage);
}

function fillConductNextStageOptions(selected) {
  const select = document.querySelector("#conductNextStage");
  if (!select) return;
  const value = selected || pipelineStages[0];
  select.innerHTML = pipelineStages
    .map((stage) => `<option value="${escapeHtml(stage)}"${stage === value ? " selected" : ""}>${escapeHtml(stage)}</option>`)
    .join("");
}
```

Pending list click `data-conduct-goto` → set `currentQuestionId`, close pending dialog, ensure workspace view, render.

- [ ] **Step 2: Finalize**

```js
function finalizeConductInterview() {
  const item = interviews.find((entry) => entry.id === conductingInterviewId);
  if (!item) return;
  const draft = ensureConductDraft(item);
  draft.score = Number(document.querySelector("#conductScore")?.value);
  draft.opinion = document.querySelector("#conductOpinion")?.value.trim() || "";
  draft.recommendation =
    document.querySelector("[name='conductReco']:checked")?.value || "advance";
  draft.nextStage = document.querySelector("#conductNextStage")?.value || "";
  draft.finalizedAt = `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`;
  draft.updatedAt = draft.finalizedAt;

  item.status = "Realizada";
  interviewActivity(
    item,
    `Finalizou · nota ${draft.score ?? "—"} · ${draft.recommendation}`,
  );

  const candidate = candidates.find((entry) => entry.id === item.candidateId);
  if (candidate) {
    if (draft.recommendation === "advance" && draft.nextStage) {
      updateCandidateStage(candidate, draft.nextStage);
    } else if (draft.recommendation === "talent_bank" && typeof approveCandidateToTalentBank === "function") {
      approveCandidateToTalentBank(candidate);
    } else if (draft.recommendation === "reject" && typeof dismissCandidate === "function") {
      dismissCandidate(candidate, "Perfil incompatível", draft.opinion || "Reprovado na entrevista");
    } else if (draft.recommendation === "evaluate_later") {
      candidate.history?.unshift?.(["Avaliar depois", draft.opinion || "Pendente de decisão"]);
    }
  }

  conductingInterviewId = null;
  conductDirty = false;
  document.querySelector("#interviewConductDialog")?.close();
  refreshInterviewSurfaces(item);
  showToast("Entrevista finalizada", `${item.name} · Realizada`);
}
```

Se `dismissCandidate` / `approveCandidateToTalentBank` assinaturas diferirem, adaptar ao código real (grep antes de colar).

- [ ] **Step 3: Listeners finish**

Back → workspace; Cancel → workspace; Confirm → `finalizeConductInterview`; Finish btn → `showConductFinishView`.

- [ ] **Step 4: Verificar**

Responder obrigatórias → Finalizar → preencher parecer → Confirmar → status Realizada; testar bloqueio com obrigatória vazia.

- [ ] **Step 5: Commit** (se pedido)

```bash
git commit -m "feat(conducao): wizard de finalização e recomendações"
```

---

### Task 5: CSS da modal ampla

**Files:**
- Modify: `styles.css`

**Interfaces:**
- Produces: `.interview-conduct-dialog` width `min(1100px, calc(100% - 24px))`, grid header/main/side/footer

- [ ] **Step 1: Estilos**

```css
.interview-conduct-dialog.stack-dialog {
  width: min(1100px, calc(100% - 24px));
  max-height: min(94vh, 860px);
  padding: 0;
}
.interview-conduct-sheet {
  display: grid;
  max-height: min(94vh, 860px);
}
.conduct-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 16px;
  padding: 0 22px 12px;
  overflow: auto;
}
.conduct-header,
.conduct-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 22px;
}
.conduct-footer {
  border-top: 1px solid var(--border);
}
.conduct-progress-bar {
  height: 6px;
  border-radius: 999px;
  background: var(--surface-soft);
  overflow: hidden;
}
.conduct-progress-bar > span {
  display: block;
  height: 100%;
  background: var(--brand-500);
}
.conduct-side {
  display: grid;
  gap: 14px;
  align-content: start;
}
@media (max-width: 860px) {
  .conduct-layout { grid-template-columns: 1fr; }
}
```

Completar tipografia/espaco da question card e finish form no mesmo bloco.

- [ ] **Step 2: Verificar visual**

Modal legível desktop; lateral empilha no mobile.

- [ ] **Step 3: Commit** (se pedido)

```bash
git commit -m "style(conducao): layout da modal ampla"
```

---

### Task 6: Cache, graphify e aceite

**Files:**
- Modify: `index.html` (`?v=conducao-entrevista-134`)
- Modify: spec checkboxes opcional

- [ ] **Step 1: Cache bump**

```html
<link rel="stylesheet" href="./styles.css?v=conducao-entrevista-134" />
<script src="./app.js?v=conducao-entrevista-134"></script>
```

- [ ] **Step 2: Verificação**

```bash
node --check app.js
graphify update .
```

Roteiro:

1. Entrevista com ficha → Iniciar → responde 2 perguntas → fecha → confirma saída → Continuar recupera  
2. Tentar Finalizar com obrigatória vazia → lista pendentes → ir à pergunta  
3. Completar obrigatórias → Finalizar → nota/parecer/Avançar → Realizada  
4. Abrir Currículo pela condução  

- [ ] **Step 3: Commit** (se pedido)

```bash
git commit -m "feat(conducao): fecha condução ao vivo com cache bump"
```

---

## Spec coverage

| Aceite | Task |
|--------|------|
| Iniciar abre modal | 3 |
| Perguntas da ficha + nav + progresso | 3 |
| Autosave + Continuar | 2–3 |
| Lateral CV + notas | 1, 3 |
| Saída acidental | 3 |
| Obrigatórias pendentes | 4 |
| Wizard finalização | 4 |
| Cache | 6 |

## Placeholder scan

Sem TBD; commits opcionais; assinaturas de `dismissCandidate` / talent bank devem ser conferidas no código na Task 4.
