# Scorecard (Resultados) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prototipar Scorecard + avaliação híbrida + Score Geral no hub **Resultados**, com alertas de pendência, comparar candidatos e atalho no dossiê.

**Architecture:** Reforçar `#resultadosPage` com abas **Scorecards · Avaliações · Encerrados**. Encerrados preserva Contratados/Dispensados/Ocultados (deep-links do dashboard). Dados em memória (`scorecards[]`, `scoreEvaluations[]`). Notas auto vêm de Fit / testes / condução quando existirem; restantes manuais. Modal de composição + comparar espelham o padrão Fit/Testes.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `<dialog>`, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-04-scorecard-design.md`

## Global Constraints

- Scorecard = template do Score Geral com **6 blocos fixos**: `entrevista` · `fitCultural` · `tecnico` · `comportamental` · `competencias` · `gestor`.
- Notas **híbridas** (auto + manual); critérios `enabled: false` fora do geral e dos alertas.
- Soma dos pesos dos enabled = **100%** → **bloquear salvar** se ≠ 100.
- MVP: **um scorecard ativo por vaga**.
- Preservar listas Contratados/Dispensados/Ocultados via aba **Encerrados** + `resultTab` existente.
- Commits só se o usuário pedir.
- Após editar código: `graphify update .`
- Cache final: bump único `scorecard-160` (ou superior) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.
- Sem backend; tudo em memória.

## Estrutura de arquivos

- Modify: `index.html` — `#resultadosPage` (3 abas hub + painéis), dialogs scorecard/avaliação/comparar, bloco dossiê Score, cache.
- Modify: `app.js` — seeds, helpers auto/ponderação, renders, CRUD, `showPage`/`resultTab`, dossiê `candidateScore`.
- Modify: `styles.css` — hub Resultados scorecard, cards, modal composição, alertas, comparar.
- Reference: Fit hub (`syncFitHubTab`, `renderFitAplicados`, `#fitCompareDialog`); Testes (`assignment.type` technical|behavioral|competency, `adherencePct`); `renderResults` / `selectedResultTab`; dossiê `#candidateScore` / `#candidateFitContent`.

---

### Task 1: Modelo + seeds + cálculo + auto-fill

**Files:**
- Modify: `app.js` (após bloco Fit / assignments de teste)

**Interfaces:**
- Produces:
  - `SCORE_CRITERIA = ["entrevista","fitCultural","tecnico","comportamental","competencias","gestor"]`
  - `scoreCriterionLabel(key)` → string PT
  - `scorecards[]`, `scoreEvaluations[]`
  - `nextScorecardId`, `nextScoreEvaluationId`
  - `getScorecardById(id)`, `getScoreEvaluationById(id)`
  - `activeScorecardForVacancy(vacancyOrJobId)` → scorecard | null
  - `defaultScorecardCriteria()` → 6 critérios com pesos que somam 100
  - `scorecardWeightSum(scorecard)` → number
  - `computeOverallScore(evaluation, scorecard)` → number | null (mutates `evaluation.overallScore`)
  - `deriveEvaluationStatus(evaluation, scorecard)` → Pendente|Parcial|Completa|Em revisão
  - `autoScoreForCriterion(candidate, vacancy, key)` → `{ score, evaluator, source } | null`
  - `hydrateEvaluationScores(evaluation)` → preenche nulls com auto
  - `evaluationPendingCriteria(evaluation, scorecard)` → keys sem nota (enabled)
  - `evaluationsWithAlerts()` → evaluations status ≠ Completa

- [ ] **Step 1: Constantes + labels + default criteria**

```javascript
const SCORE_CRITERIA = ["entrevista", "fitCultural", "tecnico", "comportamental", "competencias", "gestor"];

function scoreCriterionLabel(key) {
  return (
    {
      entrevista: "Entrevista",
      fitCultural: "Fit Cultural",
      tecnico: "Técnico",
      comportamental: "Comportamental",
      competencias: "Competências",
      gestor: "Gestor",
    }[key] || key
  );
}

function defaultScorecardCriteria() {
  return [
    { key: "entrevista", enabled: true, weightPct: 20, minScore: 70, assigneeIds: [] },
    { key: "fitCultural", enabled: true, weightPct: 15, minScore: 70, assigneeIds: [] },
    { key: "tecnico", enabled: true, weightPct: 25, minScore: 70, assigneeIds: [] },
    { key: "comportamental", enabled: true, weightPct: 15, minScore: 60, assigneeIds: [] },
    { key: "competencias", enabled: true, weightPct: 15, minScore: 70, assigneeIds: [] },
    { key: "gestor", enabled: true, weightPct: 10, minScore: 70, assigneeIds: [] },
  ];
}
```

- [ ] **Step 2: Seeds**

- ≥1 scorecard ativo vinculado a uma vaga seed existente (título de `jobs` / candidatos).
- ≥1 scorecard inativo ou segunda vaga opcional.
- Avaliações: ≥1 Completa, ≥1 Parcial (com `score: null` em gestor), ≥1 Pendente.
- `scores[]` com mix `auto`/`manual`.

- [ ] **Step 3: Auto-fill helpers**

```javascript
function autoScoreForCriterion(candidate, vacancy, key) {
  if (!candidate) return null;
  if (key === "fitCultural") {
    const done = fitAssignmentsForCandidate(candidate)
      .filter((a) => a.status === "Concluído" && a.adherencePct != null)
      .sort((a, b) => String(b.completedAt || "").localeCompare(String(a.completedAt || "")))[0];
    if (!done) return null;
    return { score: done.adherencePct, source: "auto", evaluator: "Fit Cultural" };
  }
  if (key === "tecnico" || key === "comportamental" || key === "competencias") {
    const typeMap = { tecnico: "technical", comportamental: "behavioral", competencias: "competency" };
    const type = typeMap[key];
    const done = testAssignments
      .filter(
        (a) =>
          a.candidateId === candidate.id &&
          (a.type || assignmentCatalog(a)?.type) === type &&
          a.status === "Concluído" &&
          a.score != null,
      )
      .sort((a, b) => String(b.completedAt || b.sentAt || "").localeCompare(String(a.completedAt || a.sentAt || "")))[0];
    // Se o campo de nota no assignment for outro (ex. pct), adaptar ao nome real no app.js
    if (!done) return null;
    const score = Number(done.score ?? done.pct ?? done.resultPct);
    if (!Number.isFinite(score)) return null;
    return { score, source: "auto", evaluator: "Testes" };
  }
  if (key === "entrevista") {
    // Usar nota de condução se existir no modelo de entrevistas do protótipo (ex. interview.score 0–10 → *10)
    // Se não houver API clara: return null (manual)
    return null;
  }
  // gestor: null (manual)
  return null;
}
```

**Importante:** no Step 3, inspecionar no `app.js` o campo real de nota do assignment de teste e da condução (`conductScore` / drafts) e mapear de forma determinística (documentar o mapeamento num comentário de uma linha acima da função).

- [ ] **Step 4: Overall + status**

```javascript
function computeOverallScore(evaluation, scorecard) {
  const card = scorecard || getScorecardById(evaluation.scorecardId);
  if (!card) {
    evaluation.overallScore = null;
    return null;
  }
  let weighted = 0;
  let weightSum = 0;
  for (const criterion of card.criteria.filter((c) => c.enabled)) {
    const row = evaluation.scores.find((s) => s.criterionKey === criterion.key);
    if (row?.score == null) continue;
    weighted += Number(row.score) * Number(criterion.weightPct);
    weightSum += Number(criterion.weightPct);
  }
  evaluation.overallScore = weightSum > 0 ? Math.round(weighted / weightSum) : null;
  return evaluation.overallScore;
}

function deriveEvaluationStatus(evaluation, scorecard) {
  if (evaluation.status === "Em revisão") return "Em revisão";
  const card = scorecard || getScorecardById(evaluation.scorecardId);
  const enabled = (card?.criteria || []).filter((c) => c.enabled);
  const filled = enabled.filter((c) => evaluation.scores.some((s) => s.criterionKey === c.key && s.score != null));
  if (filled.length === 0) return "Pendente";
  if (filled.length < enabled.length) return "Parcial";
  return "Completa";
}
```

- [ ] **Step 5: Verificar**

Run: `node --check app.js`  
Expected: exit 0

---

### Task 2: Casca do hub Resultados (3 abas)

**Files:**
- Modify: `index.html` (`#resultadosPage`)
- Modify: `app.js` (`resultadosHubTab`, `showPage`, `renderResults` wiring)
- Modify: `styles.css` (layout hub)

**Interfaces:**
- Produces: `resultadosHubTab` (`scorecards`|`avaliacoes`|`encerrados`), `setResultadosHubTab(tab)`, `syncResultadosHubTab()`, `renderResultadosPage()`
- Preserves: `selectedResultTab`, `renderResults()` quando hub = encerrados; `goToPage("resultados", { resultTab })` seleciona Encerrados + tab interna

- [ ] **Step 1: HTML — header + hub tabs + painéis**

```html
<header class="dashboard-welcome">
  <div>
    <h1>Resultados</h1>
    <p class="panel-note">Scorecards, avaliações e composição do Score Geral.</p>
  </div>
  <button class="primary-button" id="resultadosPrimaryBtn" type="button" data-resultados-action="hub-primary">
    Novo scorecard
  </button>
</header>

<nav class="page-menu talent-tabs resultados-hub-tabs" role="tablist" aria-label="Resultados">
  <button type="button" role="tab" data-resultados-hub-tab="scorecards" aria-selected="true">
    Scorecards <span class="talent-tab-count" id="scorecardsTabCount">0</span>
  </button>
  <button type="button" role="tab" data-resultados-hub-tab="avaliacoes" aria-selected="false">
    Avaliações <span class="talent-tab-count" id="avaliacoesTabCount">0</span>
  </button>
  <button type="button" role="tab" data-resultados-hub-tab="encerrados" aria-selected="false">
    Encerrados <span class="talent-tab-count" id="encerradosTabCount">0</span>
  </button>
</nav>

<div id="resultadosAlertBanner" class="resultados-alert-banner" hidden></div>

<div id="scorecardsPanel"></div>
<div id="avaliacoesPanel" hidden></div>
<div id="encerradosPanel" hidden>
  <!-- mover para cá: talent-tabs contratados/dispensados/ocultados + search + resultList + resultEmpty -->
</div>
```

- [ ] **Step 2: JS sync**

```javascript
let resultadosHubTab = "scorecards";

function syncResultadosHubTab() {
  document.querySelectorAll("[data-resultados-hub-tab]").forEach((btn) => {
    btn.setAttribute("aria-selected", btn.dataset.resultadosHubTab === resultadosHubTab ? "true" : "false");
  });
  document.querySelector("#scorecardsPanel").hidden = resultadosHubTab !== "scorecards";
  document.querySelector("#avaliacoesPanel").hidden = resultadosHubTab !== "avaliacoes";
  document.querySelector("#encerradosPanel").hidden = resultadosHubTab !== "encerrados";
  const primary = document.querySelector("#resultadosPrimaryBtn");
  if (primary) {
    primary.hidden = resultadosHubTab === "encerrados";
    primary.textContent =
      resultadosHubTab === "scorecards" ? "Novo scorecard" : "Comparar selecionados";
    primary.dataset.resultadosHubAction = resultadosHubTab;
  }
  renderResultadosPage();
}

function renderResultadosPage() {
  // contagens + banner
  if (resultadosHubTab === "scorecards") renderScorecardsPanel();
  else if (resultadosHubTab === "avaliacoes") renderAvaliacoesPanel();
  else renderResults();
}
```

- [ ] **Step 3: showPage**

Quando `options.resultTab` ∈ {contratados, dispensados, ocultados}: `resultadosHubTab = "encerrados"`; `selectedResultTab = options.resultTab`.  
Quando `page === "resultados"` sem resultTab: chamar `syncResultadosHubTab()` (não só `renderResults()`).

- [ ] **Step 4: Verificar**

Ctrl+F5 → Resultados → 3 abas; Encerrados ainda lista contratados; metric dashboard “contratados” continua abrindo Encerrados.  
`node --check app.js`

---

### Task 3: Aba Scorecards (lista + editor)

**Files:**
- Modify: `index.html` (painel + `#scorecardEditorDialog` ou view inline)
- Modify: `app.js`
- Modify: `styles.css`

**Interfaces:**
- Consumes: `scorecards`, `defaultScorecardCriteria`, `scorecardWeightSum`
- Produces: `renderScorecardsPanel()`, `openScorecardEditor(id|null, { duplicate? })`, `saveScorecardFromEditor()`, `duplicateScorecard(id)`, `linkScorecardToVacancy(id, vacancy)`

- [ ] **Step 1: Lista**

Cards: nome, vaga, resumo pesos (chips dos 6), ativo/inativo, ações Editar · Duplicar · Vincular.

- [ ] **Step 2: Editor**

Campos: nome; select vaga (títulos de `jobs`); tabela dos 6 critérios: checkbox enabled, weightPct, minScore, responsáveis (texto livre ou multi-select seed).  
Ao salvar: se `scorecardWeightSum !== 100` → toast + **não salvar**.  
Vínculo: se outro scorecard ativo na mesma vaga → desativar o anterior (ou toast de confirmação via `confirm`).

- [ ] **Step 3: Wire primary “Novo scorecard”**

Delegação em `#resultadosPage` → `openScorecardEditor(null)`.

- [ ] **Step 4: Verificar**

Criar scorecard com pesos 100%; tentativa com 90% bloqueia; duplicar gera cópia com nome “ (cópia)”.  
`node --check app.js`

---

### Task 4: Aba Avaliações (lista + alertas + seleção comparar)

**Files:**
- Modify: `index.html` / `app.js` / `styles.css`

**Interfaces:**
- Produces: `renderAvaliacoesPanel()`, `scoreCompareSelectedIds` (Set), `toggleScoreCompareSelection(id, checked)`, `renderResultadosAlertBanner()`

- [ ] **Step 1: Banner**

```javascript
function renderResultadosAlertBanner() {
  const host = document.querySelector("#resultadosAlertBanner");
  if (!host) return;
  const pending = scoreEvaluations.filter((e) => {
    const st = deriveEvaluationStatus(e);
    return st === "Pendente" || st === "Parcial";
  });
  if (!pending.length) {
    host.hidden = true;
    host.innerHTML = "";
    return;
  }
  host.hidden = false;
  host.innerHTML = `<strong>${pending.length}</strong> avaliação(ões) com critérios pendentes ou sem nota.`;
}
```

- [ ] **Step 2: Lista**

Linhas: candidato, vaga, scorecard, overall (ou —), status, chips dos `evaluationPendingCriteria`, checkbox `data-score-compare` só se Completa (ou permitir Parcial — **MVP: só Completa**), click abre detalhe.

- [ ] **Step 3: Primária Comparar**

Se hub = avaliacoes e seleção ∉ [2,3] → toast (não só disabled). Espelhar Fit.

- [ ] **Step 4: Verificar**

Seeds Parcial aparecem no banner e com chips; Completa selecionável.  
`node --check app.js`

---

### Task 5: Modal avaliação — composição, avaliar, revisar

**Files:**
- Modify: `index.html` (`#scoreEvaluationDialog`)
- Modify: `app.js`
- Modify: `styles.css`

**Interfaces:**
- Produces: `selectedScoreEvaluationId`, `openScoreEvaluationDetail(id)`, `saveScoreEvaluationFromDialog()`, `markScoreEvaluationReview(id)`, `refreshCriterionFromSource(evaluationId, key)`, `runScoreEvaluationAction(action)`

- [ ] **Step 1: Markup dialog**

Meta: candidato, vaga, scorecard, status, overall.  
Corpo: por critério enabled — label, peso, min, nota (input), fonte chip, comentário, avaliador, botão “Atualizar da fonte” se já houve auto, chip “abaixo do mínimo” se score < minScore, chip “sem nota” se null.  
Footer: primária Salvar / Concluir; Revisar; Mais ações se necessário.

- [ ] **Step 2: Abrir / salvar**

Ao abrir: `hydrateEvaluationScores` se scores vazios/null; `computeOverallScore`; `deriveEvaluationStatus`.  
Salvar: grava inputs; `source: manual` se usuário editou; recalcula overall/status; toast; re-render lista + dossiê se aberto.

- [ ] **Step 3: Revisar**

`status = "Em revisão"`; ao salvar completo de novo → Completa.

- [ ] **Step 4: Verificar**

Abrir Parcial → preencher Gestor → Completa; Revisar reabre edição.  
`node --check app.js`

---

### Task 6: Criar avaliação a partir do hub/dossiê + regras de vínculo

**Files:**
- Modify: `app.js` (dossiê em Task 8 também consome; aqui a API)

**Interfaces:**
- Produces: `ensureScoreEvaluation(candidateId, vacancy)` → evaluation (cria se não existir usando `activeScorecardForVacancy`), `openOrCreateScoreEvaluation(candidate, vacancy)`

- [ ] **Step 1: ensure**

```javascript
function ensureScoreEvaluation(candidateId, vacancy) {
  const existing = scoreEvaluations.find(
    (e) => e.candidateId === candidateId && normalize(e.vacancy) === normalize(vacancy),
  );
  if (existing) return existing;
  const card = activeScorecardForVacancy(vacancy);
  if (!card) {
    showToast("Scorecard", "Vincule um scorecard a esta vaga em Resultados.");
    return null;
  }
  const evaluation = {
    id: nextScoreEvaluationId++,
    candidateId,
    scorecardId: card.id,
    vacancy,
    status: "Pendente",
    scores: SCORE_CRITERIA.map((key) => ({
      criterionKey: key,
      score: null,
      source: null,
      comment: "",
      evaluator: "",
      updatedAt: null,
    })),
    overallScore: null,
    createdAt: `${TODAY_KEY}T10:00:00`,
    updatedAt: `${TODAY_KEY}T10:00:00`,
  };
  hydrateEvaluationScores(evaluation);
  evaluation.status = deriveEvaluationStatus(evaluation, card);
  computeOverallScore(evaluation, card);
  scoreEvaluations.push(evaluation);
  return evaluation;
}
```

- [ ] **Step 2: Verificar**

Chamar mentalmente / via UI depois do dossiê: sem scorecard → toast; com scorecard → Parcial se Fit/testes existirem.  
`node --check app.js`

---

### Task 7: Comparar candidatos

**Files:**
- Modify: `index.html` (`#scoreCompareDialog`)
- Modify: `app.js`
- Modify: `styles.css`

**Interfaces:**
- Produces: `openScoreCompare(ids: number[])`

- [ ] **Step 1: Dialog**

Tabela: linhas = Score geral + 6 critérios; colunas = candidatos (mesma vaga). Mostrar — se critério disabled no scorecard.

- [ ] **Step 2: Guard**

Mesma vaga; 2–3 ids; senão toast.

- [ ] **Step 3: Verificar**

Selecionar 2 Completas → comparar.  
`node --check app.js`

---

### Task 8: Dossiê — Score Geral + alertas + CTA

**Files:**
- Modify: `index.html` (card `#candidateScoreContent` ou reforçar métrica + seção)
- Modify: `app.js` (`renderCandidateDetails`)
- Modify: `styles.css`

**Interfaces:**
- Consumes: `ensureScoreEvaluation`, `openScoreEvaluationDetail`
- Produces: render do bloco no dossiê; `#candidateScore` mostra `overallScore` ou “—” + badge pendência

- [ ] **Step 1: UI**

Seção “Score Geral”: overall, mini breakdown, chips sem nota, botões Avaliar / Revisar / Ver composição.  
Sem scorecard na vaga → empty + CTA “Ir a Resultados” / abrir editor (toast + `goToPage("resultados")` + hub scorecards).

- [ ] **Step 2: Wire**

```javascript
// em renderCandidateDetails:
const evaluation = scoreEvaluations.find(
  (e) => e.candidateId === candidate.id && normalize(e.vacancy) === normalize(candidate.role || candidate.vacancy),
);
document.querySelector("#candidateScore").textContent =
  evaluation?.overallScore != null ? `${evaluation.overallScore}%` : "—";
```

(Ajustar campo de vaga do candidato ao nome real no modelo.)

- [ ] **Step 3: Verificar**

Abrir candidato da seed Parcial → badge + CTA; Salvar no modal atualiza header Score.  
`node --check app.js`

---

### Task 9: Estilos + cache + aceite

**Files:**
- Modify: `styles.css`, `index.html` (cache `?v=scorecard-160`)

- [ ] **Step 1: CSS**

Banner alerta; cards scorecard; chips pendente/abaixo-mínimo; modal composição; tabela comparar; painel dossiê. Reutilizar tokens existentes (evitar look genérico novo).

- [ ] **Step 2: Cache bump**

`styles.css?v=scorecard-160` e `app.js?v=scorecard-160`.

- [ ] **Step 3: Roteiro manual da spec**

1. Resultados → 3 abas; Encerrados intacto  
2. CRUD scorecard; pesos ≠100 bloqueiam  
3. Dossiê Avaliar → auto + pendências  
4. Completar → Completa; composição  
5. Revisar + atualizar da fonte  
6. Banner + badge dossiê  
7. Comparar 2  
8. Critério desligado fora do geral/alertas  

- [ ] **Step 4: graphify update**

Run: `graphify update .`

- [ ] **Step 5: node --check**

Run: `node --check app.js`  
Expected: exit 0

---

## Spec coverage (self-review)

| Spec | Task |
|------|------|
| Hub Resultados Scorecards/Avaliações | 2–4 |
| Encerrados preservados (implícito p/ não quebrar app) | 2 |
| 6 blocos fixos, pesos, min, responsáveis | 1, 3 |
| Bloquear salvar ≠100% | 3 |
| 1 scorecard ativo/vaga | 3 |
| Avaliação híbrida auto/manual | 1, 5, 6 |
| Status + overall ponderado | 1, 5 |
| Alertas hub + dossiê | 4, 8 |
| Modal composição / avaliar / revisar / atualizar fonte | 5 |
| Comparar 2–3 mesma vaga | 4, 7 |
| Dossiê CTAs | 8 |
| Seeds + cache | 1, 9 |
| Out: critérios livres, portal candidato, PDF | — (não implementar) |

## Placeholder scan

Nenhum TBD. Campo exato de nota de teste/condução deve ser resolvido na Task 1 Step 3 inspecionando `app.js` (passo explícito).
