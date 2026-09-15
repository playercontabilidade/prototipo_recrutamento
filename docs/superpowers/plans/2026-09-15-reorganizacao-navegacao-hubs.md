# Reorganização navegação e hubs — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unificar Pipeline/Pendências/Vagas/Talentos em Recrutamento; Entrevistas/Instrumentos/Resultados em Seleção; criar Contratação; reorganizar Início, Gestor e Candidato conforme a spec.

**Architecture:** Manter páginas/seções existentes como painéis; novos shells `#recrutamentoPage` / `#selecaoHubPage` (estender) / `#contratacaoPage` com abas underline. Routing `#hub/aba` via parse em `showPage` + redirects em `pageByHash`. Sem telas paralelas.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `node --check app.js`, `graphify update .`

**Spec:** `docs/superpowers/specs/2026-09-15-reorganizacao-navegacao-hubs-design.md`

## Global Constraints

- Anti-redundância: hubs com abas; não criar segundo Pipeline/Talentos/Análises.
- Hash único: `#<hub>/<aba>` (ex. `#recrutamento/pendencias`); redirects dos hashes antigos.
- Commits só se o usuário pedir.
- Após editar código: `graphify update .`
- Cache-bust final único (ex. `nav-hubs-360`) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.
- Sem backend; `TODAY_KEY = "2026-08-27"`; `CURRENT_RH_USER = "Larissa Dias"`.
- Topbar branca; não reintroduzir topbar navy.

## Estrutura de arquivos

- Modify: `index.html` — sidebar RH/Gestor/Candidato; shells hubs; Início; Contratação; cache `?v=`
- Modify: `app.js` — `pageNames` / `pageByHash` / `hashByPage` / `showPage` / parsers; tabs; dashboard; Contratação modal; gestor; candidato
- Modify: `styles.css` — Início blocos; hubs; Contratação KPIs/lista/modal
- Reference: `showPage` ~L19553; `renderSelecaoHub` ~L19693; `renderDashboard` ~L12453; `syncResultadosHubTab` ~L8144; `renderPreAdmissions` ~L15476; `setCandidatePortalView` ~L27705; `renderGestorPortal` ~L22579

---

### Task 1: Routing `#hub/aba` + maps + redirects

**Files:**
- Modify: `app.js` — `pageByHash`, `hashByPage`, `pageNames`, helpers `parseAppHash`, `showPage` hash write

**Interfaces:**
- Produces: `parseAppHash(hash) → { page, tab, filtro? }`; `hubHash(page, tab)`; redirects: `pipeline→recrutamento/pipeline`, `pendencias→recrutamento/pendencias`, `vagas→recrutamento/vagas`, `talentos→recrutamento/talentos`, `entrevistas`(RH)→`selecao/entrevistas`, bare `selecao`→`selecao/instrumentos`, `resultados`→`selecao/resultados` (exceto preadmissao/encerrados→`contratacao`), `relatorios`→`dashboard`
- Consumes: `history.replaceState`, `window.location.hash`

- [ ] **Step 1:** Add `parseAppHash` / `hubHash` near `pageByHash` (~L5025)

```js
function parseAppHash(hash = window.location.hash) {
  const raw = String(hash || "").replace(/^#/, "").trim();
  const [path, query = ""] = raw.split("?");
  const [hub, tab] = path.split("/");
  const params = Object.fromEntries(new URLSearchParams(query));
  return { hub: hub || "", tab: tab || "", filtro: params.filtro || "" };
}

function hubHash(hub, tab, filtro) {
  let h = tab ? `${hub}/${tab}` : hub;
  if (filtro) h += `?filtro=${encodeURIComponent(filtro)}`;
  return h;
}
```

- [ ] **Step 2:** Extend `pageByHash` / `hashByPage` / `pageNames` with `recrutamento`, `contratacao`; map legacy keys to hub pages + default tabs in `showPage` entry.

- [ ] **Step 3:** In `hashchange` / boot, call `parseAppHash` before `showPage`.

- [ ] **Step 4:** `node --check app.js` — Expected: no syntax errors.

---

### Task 2: Sidebar RH + shell Recrutamento

**Files:**
- Modify: `index.html` — nav RH; `#recrutamentoPage` with tabs wrapping existing sections OR show/hide existing pages under hub chrome
- Modify: `app.js` — `showPage("recrutamento")` shows hub chrome + activates child page render by tab
- Modify: `styles.css` — hub header + `talent-tabs` reuse

**Interfaces:**
- Consumes: `parseAppHash`, `renderPipeline`, `renderPendenciasPage`, `renderJobs`, `renderTalents`
- Produces: `recrutamentoTab` state (`pipeline|pendencias|vagas|talentos`); `setRecrutamentoTab(tab)`

- [ ] **Step 1:** Replace RH Recrutamento nav items with single `data-page="recrutamento"`; keep Início; remove Análise/Relatórios group.

- [ ] **Step 2:** Add hub chrome (title + tabs). Preferred: keep `#pipelinePage`, `#pendenciasPage`, `#jobsPage`, `#talentosPage` in DOM; hub only toggles which is visible + shared tab bar fixed above content (or duplicate tab bar inside each — prefer **one** tab bar in `#recrutamentoPage` that then unhides the matching legacy page).

- [ ] **Step 3:** Wire tab clicks → `showPage("recrutamento", { tab })` → `hubHash("recrutamento", tab)`.

- [ ] **Step 4:** Manual: open `#pipeline` lands on Recrutamento/Pipeline; sidebar shows only Recrutamento active.

---

### Task 3: Shell Seleção (Entrevistas | Instrumentos | Resultados)

**Files:**
- Modify: `index.html` — RH Seleção: one `data-page="selecao"`; hub tabs; strip Resultados tabs pré-admissão/encerrados later in Task 5
- Modify: `app.js` — extend `showPage("selecao")` beyond `renderSelecaoHub`; tabs `entrevistas|instrumentos|resultados`

**Interfaces:**
- Consumes: `renderAgenda`, `renderSelecaoHub`, `syncResultadosHubTab`
- Produces: `selecaoTab` state; bare `#selecao` → instrumentos

- [ ] **Step 1:** Sidebar Seleção = um item; remove Entrevistas/Instrumentos/Resultados soltos.

- [ ] **Step 2:** Hub tabs; Instrumentos content = current `#selecaoPage` body; Entrevistas = `#entrevistasPage`; Resultados = `#resultadosPage` (scorecards+avaliações only after Task 5).

- [ ] **Step 3:** Invert Instrumentos presentation: Avaliados before Catálogos (reorder hub cards / `testsHubTab` / fit tabs defaults — Avaliados first in UI lists).

- [ ] **Step 4:** Manual: `#entrevistas` → Seleção/Entrevistas; `#selecao` → Instrumentos.

---

### Task 4: Início RH (KPIs + Pendências de hoje + Currículos + Histórico)

**Files:**
- Modify: `index.html` — `#dashboardPage` structure
- Modify: `app.js` — `renderDashboard`
- Modify: `styles.css` — `dash-pendencias` / timeline inspired by Impostograma (tokens do portal RH)

**Interfaces:**
- Consumes: `buildPendencies`, interview/test data for `TODAY_KEY`, talent pool without job, activity timeline source already on dashboard
- Produces: KPI cards → `goToPage` / drill; currículos inbox list

- [ ] **Step 1:** KPI row: Vagas abertas, Entrevistas, Candidatos, Reprovações (derive from existing data; click → recrutamento/selecao/drill).

- [ ] **Step 2:** Block “Pendências de hoje” with interviews+tests for today in same segment.

- [ ] **Step 3:** Block “Currículos” = talents/candidates without job assignment (inbox).

- [ ] **Step 4:** “Histórico recente” timeline + candidaturas/processos atalhos no mesmo segmento; move “Atividades recentes” here if elsewhere.

- [ ] **Step 5:** Manual: dashboard shows 4 blocks; Relatórios not in sidebar.

---

### Task 5: Contratação + limpar Resultados

**Files:**
- Modify: `index.html` — `#contratacaoPage`; nav item; move/adapt preadmissao+encerrados panels; modal dialog
- Modify: `app.js` — `showPage("contratacao")`, `renderContratacao`, modal open on row click, disable row expand
- Modify: `styles.css` — KPIs + list + modal

**Interfaces:**
- Consumes: `renderPreAdmissions`, `renderResults` / encerrados filters, `startPreAdmission` doc request actions
- Produces: `contratacaoFiltro` (`pre-admissao|encerrados|contratados|…`); `openContratacaoCandidateModal(id)`

- [ ] **Step 1:** Add sidebar Contratação; page with KPIs + filter chips + unified list host.

- [ ] **Step 2:** Migrate preadmissao/encerrados out of Resultados hub tabs; Resultados keeps Scorecards + Avaliações only.

- [ ] **Step 3:** Modal: candidate info + document request; remove inline expand for this flow.

- [ ] **Step 4:** Redirect `#resultados` with preadmissao/encerrados → `#contratacao?filtro=…`.

- [ ] **Step 5:** Manual: click pré-admissão opens modal, not expand.

---

### Task 6: Gestor Recrutamento hub

**Files:**
- Modify: `index.html` — gestor nav: Início · Recrutamento · Seleção(Entrevistas)
- Modify: `app.js` — `gestorNavKeyFromState`, `gestorHashFromState`, `renderGestorPortal` tabs Pendências|Minhas vagas under Recrutamento item

**Interfaces:**
- Consumes: existing `gestorViewState.homeFilter`
- Produces: single nav `data-gestor-nav="recrutamento"` with internal tabs; entrevistas only under Seleção

- [ ] **Step 1:** Collapse Pendências+Vagas nav into Recrutamento; keep Entrevistas in Seleção.

- [ ] **Step 2:** Internal tabs switch `analises` / `vagas` filters.

- [ ] **Step 3:** Manual: `#gestor-pendencias` opens Recrutamento/Pendências.

---

### Task 7: Candidato Início + Meu processo

**Files:**
- Modify: `index.html` — candidate sidebar
- Modify: `app.js` — `setCandidatePortalView`; home render; `processo` unified view
- Modify: `styles.css` — pendências block + history segment

**Interfaces:**
- Consumes: existing home/apps/interviews/tests/offer/pre-admission renders
- Produces: nav views `home|jobs|processo|profile`; `processo` substeps interviews+tests together

- [ ] **Step 1:** Sidebar: Início, Vagas, Meu processo, Perfil only.

- [ ] **Step 2:** Home: Pendências + Histórico com Minhas candidaturas.

- [ ] **Step 3:** Meu processo hosts interviews+avaliacoes then offer/pre-admission.

- [ ] **Step 4:** Manual: old nav targets still reachable via processo substeps.

---

### Task 8: Nova vaga — criar Cargo/Depto inline

**Files:**
- Modify: `index.html` — new job fields (+ “Criar…” controls)
- Modify: `app.js` — handlers push into departments/roles catalogs then select

- [ ] **Step 1:** Inline create department/role beside selects; keep Settings CRUD.

- [ ] **Step 2:** Manual: create dept in Nova vaga appears in select + Settings list.

---

### Task 9: QA, cache-bust, graphify

**Files:**
- Modify: `index.html` — `?v=nav-hubs-360` (or next free)
- Run: `node --check app.js`; `graphify update .`

- [ ] **Step 1:** Full manual checklist from spec success criteria.

- [ ] **Step 2:** Bump cache; graphify update; report leftovers.

---

## Spec coverage (self-review)

| Spec requirement | Task |
|------------------|------|
| RH sidebar A + Talentos aba | 2 |
| Seleção 3 abas + Instrumentos ordem | 3 |
| Relatórios fora / KPIs Início | 2, 4 |
| Contratação + modal | 5 |
| Scorecard isolado some; Resultados fica | 5 |
| Cargo/Depto inline + Settings | 8 |
| Currículos inbox | 4 |
| Gestor A | 6 |
| Candidato A | 7 |
| Hash `#hub/aba` + redirects | 1 |
| Abas in-page (não menu Impostograma topo) | 2–5 |
