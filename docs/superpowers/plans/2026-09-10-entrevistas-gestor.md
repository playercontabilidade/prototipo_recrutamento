# Entrevistas do Gestor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Dar ao gestor um hub “Minhas entrevistas” no portal, com contexto pré-entrevista e ficha/condução estendida (pontos +/−, competências, recomendações), reusando a condução existente.

**Architecture:** Nova vista `homeFilter === "entrevistas"` em `#gestorPage`. Nav Entrevistas no modo gestor aponta para o hub (não `renderAgenda`). Detalhe pré estende `#interviewDetailDialog` quando `workspaceRole === "gestor"`. Durante/finalizar estende `#interviewConductDialog` / `conductDraft` (positives, attentionPoints, competencyScores, novas recommendations).

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-10-entrevistas-gestor-design.md`

## Global Constraints

- **Não** item novo na sidebar; **não** nova modal de condução só-gestor.
- Modo gestor: nav Entrevistas → hub portal; modo RH: `#entrevistasPage` intacta.
- Reusar `isGestorInterview`, `openInterviewConduct`, `ensureConductDraft`, `finalizeConductInterview`.
- Commits só se o usuário pedir.
- Antes de explorar amplo: `graphify query`. Após editar código: `graphify update .`.
- Cache final: `entrevistas-gestor-240` (ou superior) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.
- Datas relativas a `TODAY_KEY` (`"2026-08-27"`).

## Estrutura de arquivos

- Modify: `app.js` — buckets, hub render, nav/hash, detalhe contexto gestor, `conductDraft` + finish UI, seeds, histórico
- Modify: `index.html` — shell hub em `#gestorPage`; campos condução (+/−, competências, novos radios); cache
- Modify: `styles.css` — hub/cards/contexto (mínimo, reusar pendências/condução)
- Reference: `isGestorInterview` (~L17478), `myGestorUpcomingInterviews`, `ensureConductDraft` (~L8820), `renderConductWorkspace` / `showConductFinishView` / `finalizeConductInterview` (~L9017–9300), `renderInterviewDetail` (~L8688), `gestorNavKeyFromState` / `gestorHashFromState` (~L4800), `renderGestorPortal` (~L20212), `renderGestorPendenciasHub` (padrão de abas/cards)

---

### Task 1: Helpers de bucket + seeds + nav gestor → hub

**Files:**
- Modify: `app.js` — perto de `isGestorInterview` / `gestorViewState` / `showPage`

**Interfaces:**
- Consumes: `interviews`, `isGestorInterview`, `TODAY_KEY`, `workspaceRole`
- Produces:
  - `gestorViewState.entrevistasBucket` (`today` default)
  - `myGestorInterviews() → item[]`
  - `gestorInterviewBucket(item) → "today"|"upcoming"|"awaiting_finish"|"done"|"cancelled"`
  - `countGestorInterviewBuckets(list?) → { today, upcoming, awaiting_finish, done, cancelled }`
  - Nav/hash: `entrevistas` → `homeFilter=entrevistas` em modo gestor

- [ ] **Step 1: Orientar**

Run: `graphify query "isGestorInterview gestorNavKeyFromState showPage entrevistas"`

- [ ] **Step 2: State + helpers**

```javascript
// em gestorViewState:
entrevistasBucket: "today", // today | upcoming | awaiting_finish | done | cancelled

function myGestorInterviews() {
  return interviews.filter((item) => isGestorInterview(item));
}

function gestorInterviewBucket(item) {
  const day = String(item.at || "").slice(0, 10);
  const status = item.status || "";
  if (status === "Cancelada" || status === "Não compareceu") return "cancelled";
  const draft = item.conductDraft;
  const finalized = Boolean(draft?.finalizedAt);
  const needsFinish =
    (status === "Realizada" && !finalized && (item.sheetId || draft)) ||
    (Boolean(item.startedAt) && !finalized && status !== "Cancelada" && status !== "Não compareceu");
  if (needsFinish) return "awaiting_finish";
  if (status === "Realizada" && finalized) return "done";
  if (day === TODAY_KEY) return "today";
  if (day > TODAY_KEY) return "upcoming";
  if (day < TODAY_KEY && !finalized && status !== "Realizada") return "awaiting_finish";
  return "done";
}
```

Ajustar edge cases para não classificar canceladas como awaiting. Contagens por bucket.

- [ ] **Step 3: Seeds (≥1 por estado relevante)**

Garantir entrevistas do escopo Larissa com: Hoje; Próxima; Reagendada; Cancelada; Não compareceu; rascunho (`conductDraft` sem `finalizedAt`); concluída (`finalizedAt` + Realizada). Preferir mutar/estender seeds existentes de `interviews` com `owner`/`interviewers` incluindo `currentManagerName`.

- [ ] **Step 4: Nav / showPage**

Quando `workspaceRole === "gestor"` e `data-page="entrevistas"` (ou hash `#entrevistas`):

```javascript
gestorViewState.homeFilter = "entrevistas";
goToPage("gestor"); // ou showPage("gestor") + syncGestorSidebarChrome
```

Atualizar `gestorNavKeyFromState` / `gestorHashFromState` para `entrevistas` → `"entrevistas"` / `"gestor-entrevistas"`. Highlight nav Entrevistas quando hub ativo.

- [ ] **Step 5: `node --check app.js`**

Expected: exit 0.

---

### Task 2: Shell HTML + `renderGestorEntrevistasHub`

**Files:**
- Modify: `index.html` — `#gestorEntrevistasHub` (abas + host lista) dentro de `#gestorListView`
- Modify: `app.js` — `renderGestorEntrevistasHub`, branch em `renderGestorPortal`
- Modify: `styles.css` — reusar `.pendencias-list` / `.pendencias-card` ou classes `gestor-entrevistas-*`

**Interfaces:**
- Consumes: Task 1 helpers
- Produces: UI lista com buckets + cards + CTA Abrir

- [ ] **Step 1: HTML**

```html
<div class="gestor-entrevistas-hub pendencias-page" id="gestorEntrevistasHub" hidden>
  <nav class="page-menu talent-tabs fit-hub-tabs pendencias-hub-tabs" id="gestorEntrevistasBuckets" role="tablist">
    <button type="button" role="tab" data-gestor-iv-bucket="today" aria-selected="true">
      Hoje <span class="talent-tab-count" id="gestorIvCountToday">0</span>
    </button>
    <!-- upcoming, awaiting_finish, done, cancelled -->
  </nav>
</div>
```

Título/nota via `#gestorHomePanelTitle` / note: “Minhas entrevistas” / “Suas entrevistas no recrutamento.”

- [ ] **Step 2: Render cards**

Campos: candidato, vaga, data, horário, tipo, entrevistadores, status, ficha (`sheet` / template name).  
CTA: `data-gestor-iv-open="{id}"` → `openInterviewDetail(item)` (ou helper que seta contexto gestor).

Lista: filtrar `myGestorInterviews()` pelo bucket ativo; padrão visual pendências.

- [ ] **Step 3: Wire `renderGestorPortal`**

`filter === "entrevistas"` → esconder pendências hub / vagas tabs; mostrar `#gestorEntrevistasHub`; `renderGestorEntrevistasHub()`; flush panel se necessário.

Click: `[data-gestor-iv-bucket]`, `[data-gestor-iv-open]`.

- [ ] **Step 4: `node --check app.js`**

Expected: exit 0.

---

### Task 3: Detalhe pré-entrevista (contexto gestor)

**Files:**
- Modify: `app.js` — `renderInterviewDetail` / `openInterviewDetail`
- Modify: `index.html` — container `#interviewDetailGestorContext` (ou injetar via JS)

**Interfaces:**
- Consumes: candidato, job, interviews do candidato, fit/teste summaries, `item.link`
- Produces: bloco contexto + CTAs quando `workspaceRole === "gestor"`

- [ ] **Step 1: Bloco contexto**

Se gestor, renderizar seção com botões/links:

| Ação | Handler |
|------|---------|
| Abrir candidato | `openGestorCandidatePanel(candidateId)` |
| Currículo | `openCandidateResume(candidate)` |
| Requisitos da vaga | texto de `job.skillsRequired` / `details` no próprio detalhe |
| Entrevistas anteriores | lista curta `interviews` do mesmo `candidateId` excl. atual |
| Fit / Teste / Avaliações | deep-link painel gestor grupos ou toasts com summary existente |
| Abrir link reunião | `window.open(item.link)` se houver; senão disabled |

- [ ] **Step 2: CTAs ciclo**

Manter Iniciar / Continuar → `openInterviewConduct`. Garantir visíveis para gestor no detalhe.

- [ ] **Step 3: Smoke**

Do hub → Abrir → ver contexto → Continuar ficha.

- [ ] **Step 4: `node --check app.js`**

Expected: exit 0.

---

### Task 4: Estender condução — +/−, competências, recomendações

**Files:**
- Modify: `app.js` — `ensureConductDraft`, `renderConductWorkspace`, `showConductFinishView`, `persistConductFinishFields`, `finalizeConductInterview`
- Modify: `index.html` — lateral +/−; finish: competências host + radios `new_evaluation` / `await_decision` (mapear `evaluate_later` → `await_decision` ou alias)

**Interfaces:**
- Consumes: `conductDraft`
- Produces: draft com `positives[]`, `attentionPoints[]`, `competencyScores[]`; recommendations alinhadas à spec

- [ ] **Step 1: Draft defaults**

Em `ensureConductDraft`:

```javascript
if (!Array.isArray(item.conductDraft.positives)) item.conductDraft.positives = [];
if (!Array.isArray(item.conductDraft.attentionPoints)) item.conductDraft.attentionPoints = [];
if (!Array.isArray(item.conductDraft.competencyScores)) item.conductDraft.competencyScores = [];
```

- [ ] **Step 2: UI lateral**

Listas editáveis (input + add / chips removíveis) para positivos e atenção; persistir em autosave.

- [ ] **Step 3: Finalização**

- Pré-preencher parecer com join de +/− se `opinion` vazio  
- Competências: se ficha tiver critérios/competências **ou** skills da vaga (fallback), inputs 0–10 → `competencyScores`  
- Radios: `advance` | `reject` | `talent_bank` | `new_evaluation` | `await_decision` (manter compat com `evaluate_later` lendo ambos)  
- `finalizeConductInterview`:  
  - `new_evaluation` → flag/`gestorExtraEvaluation` ou history “Nova avaliação”  
  - `await_decision` → history “Aguardar decisão”  
  - Push history rico: entrevista + nota + parecer + recomendação + entrevistador + timestamp  

- [ ] **Step 4: Obrigatórias**

Não relaxar `conductProgress` / `showConductFinishView` pending dialog.

- [ ] **Step 5: `node --check app.js`**

Expected: exit 0.

---

### Task 5: Cache + aceite + graphify

**Files:**
- Modify: `index.html` — `?v=entrevistas-gestor-240`
- Modify: plan/spec checkboxes se desejado (opcional)

- [ ] **Step 1: Cache bump** CSS + JS

- [ ] **Step 2: `node --check app.js` + `graphify update .`**

- [ ] **Step 3: Aceite manual (spec)**

1. Gestor → Entrevistas → buckets  
2. Pré-contexto + link  
3. Rascunho +/− · autosave  
4. Finalizar bloqueado sem obrigatória  
5. Finalizar ok → histórico + bucket Realizadas  
6. Seeds cancelada / não compareceu / reagendada  
7. RH → agenda intacta  

---

## Spec coverage (self-review)

| Spec | Task |
|------|------|
| Hub buckets + cards | T1–T2 |
| Nav gestor → hub | T1 |
| Antes da entrevista | T3 |
| Durante +/− · autosave · rascunho | T4 (base já existe) |
| Finalização competências + recomendações | T4 |
| Bloqueio obrigatórias + histórico | T4 |
| Estados seeds | T1 |
| Sem sidebar / sem 2ª condução / RH intacta | Constraints |

**Placeholders:** nenhum.  
**Nomes:** `gestorInterviewBucket`, `renderGestorEntrevistasHub`, `positives`, `attentionPoints`, `new_evaluation`, `await_decision`.
