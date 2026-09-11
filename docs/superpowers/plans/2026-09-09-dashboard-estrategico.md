# Dashboard estratégico (Indicadores → Painel) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar a aba Painel em dashboard estratégico com 8 cards, 12 indicadores, filtros, export stub e drawer de drill-down (ex.: ver os N candidatos de “desistências”).

**Architecture:** Uma view `#painelPage` alimentada por `getStrategicAnalytics(filters)`; clique abre `#analyticsDrillDrawer` com `items[]`. Aba Relatórios some da nav e redireciona para `painel`. Reusar seeds `jobs` / `candidates` / `results` / `interviews`, enriquecendo outcomes/motivos.

**Tech Stack:** `index.html`, `app.js`, `styles.css` (protótipo estático)

**Spec:** `docs/superpowers/specs/2026-09-09-dashboard-estrategico-design.md`

## Global Constraints

- Só hub Indicadores → Painel; sem novo item na sidebar
- Início (`#dashboardPage`) não vira segundo dashboard estratégico
- Export = stub
- Modo RH
- Antes de explorar: `graphify query` / `explain`
- Após código: `graphify update .`
- Commits só se o usuário pedir

## File map

| File | Responsibility |
|------|----------------|
| `index.html` | Reestruturar `#painelPage`; drawer; nav sem Relatórios |
| `app.js` | Seeds; filtros state; `getStrategicAnalytics`; `renderAnalytics`; drawer; redirect `relatorios`; export stub |
| `styles.css` | Cards, grade indicadores, filtros, drawer, mobile |
| Spec/plan | Já nesta entrega |

---

### Task 1: Shell HTML + redirect Relatórios + seeds

**Files:**
- Modify: `index.html` (`#painelPage`, nav tabs, drawer markup)
- Modify: `app.js` (redirect `relatorios` → `painel`; enrich seeds)

**Interfaces:**
- Produces: hosts `#analyticsFilters`, `#analyticsCards`, `#analyticsIndicators`, `#analyticsDrillDrawer`, `#analyticsExportPdf`, `#analyticsExportExcel`
- Produces: seed fields `outcome`, `dismissReason`, `withdrawReason`, `unit` (onde faltar)

- [ ] **Step 1: Orientar**

```bash
graphify query "painelPage renderAnalytics renderReports indicadores"
```

- [ ] **Step 2: Nav Indicadores**

Em ambas as navs do hub (painel e qualquer cópia), deixar só:

```html
<button type="button" class="is-active" data-go-page="painel">Painel</button>
<button type="button" data-go-page="analisesGestores">Análises de gestores …</button>
```

Remover botão Relatórios.

- [ ] **Step 3: Reestruturar `#painelPage`**

Substituir KPIs/funil estáticos por:

```html
<header>… título + Exportar PDF + Exportar Excel</header>
<nav class="indicadores-tabs">…</nav>
<form id="analyticsFiltersForm" class="analytics-filters">…8 filtros… Aplicar / Limpar</form>
<div id="analyticsCards" class="analytics-kpis" aria-label="Cards estratégicos"></div>
<div id="analyticsIndicators" class="analytics-indicators-grid"></div>
```

Manter `#relatoriosPage` hidden no DOM **ou** esvaziar; não exibir na nav.

- [ ] **Step 4: Drawer markup**

```html
<dialog class="analytics-drill-drawer" id="analyticsDrillDrawer">
  <header>
    <div>
      <p class="eyebrow" id="analyticsDrillEyebrow">Indicador</p>
      <h2 id="analyticsDrillTitle">—</h2>
      <p id="analyticsDrillMeta" class="panel-note"></p>
    </div>
    <button type="button" id="closeAnalyticsDrill" aria-label="Fechar">×</button>
  </header>
  <div class="analytics-drill-tabs" id="analyticsDrillTabs" hidden>…</div>
  <div id="analyticsDrillList" class="analytics-drill-list"></div>
  <p id="analyticsDrillEmpty" class="candidate-empty" hidden>Nenhum registro neste recorte.</p>
</dialog>
```

Preferir `<dialog>` lateral (CSS) alinhado a outros dialogs do projeto.

- [ ] **Step 5: Redirect**

Em `goToPage` / hash map: se `page === "relatorios"` → tratar como `painel` e chamar `renderAnalytics()`.

- [ ] **Step 6: Seeds**

Garantir ≥10–15 resultados/candidatos com:

- `outcome: "reprovado" | "desistiu"` **ou** `results[].status` + `motivo` tipado
- `dismissReason` / `withdrawReason` em amostra
- Entrevistas com status compareceu / não compareceu
- `unit` (ex.: “Palmas”, “Remote”) em jobs ou candidates

- [ ] **Step 7: Smoke**

Abrir Indicadores → só 2 abas; `#relatorios` cai no Painel; drawer markup existe (ainda vazio).

---

### Task 2: `getStrategicAnalytics` + render cards/indicadores

**Files:**
- Modify: `app.js` (substituir/expandir `renderAnalytics`; deprecar uso de `renderReports` na navegação)

**Interfaces:**
- Produces:

```js
function getAnalyticsFilterState() // from form
function getStrategicAnalytics(filters) → { cards, indicators, meta }
function renderAnalytics() // fills cards + indicators
```

- [ ] **Step 1: Estado de filtros**

```js
let analyticsFilters = {
  from: "2026-07-01",
  to: "2026-09-09",
  company: "all",
  unit: "all",
  department: "all",
  jobId: "all",
  recruiter: "all",
  manager: "all",
  origin: "all",
};
```

Ler/aplicar no form; Limpar restaura defaults.

- [ ] **Step 2: Pipeline de dados filtrados**

Helper `getAnalyticsUniverse(filters)` retorna `{ jobs, candidates, results, interviews }` já filtrados (best-effort com campos existentes; filtros sem dado = no-op com opção “all”).

- [ ] **Step 3: Cards**

Montar 8 cards com `id` estável:

`open_jobs | applicants | in_process | hires | rejections | withdrawals | avg_time_to_hire | hire_rate`

Cada um com `value`, `hint`, `items[]` (candidatos ou vagas).

Definições sugeridas (protótipo):

| id | value |
|----|--------|
| open_jobs | jobs status Aberta |
| applicants | inscritos no período (candidates+results entry) |
| in_process | candidates ativos no pipeline |
| hires | results contratados |
| rejections | reprovados / dispensados RH |
| withdrawals | desistências |
| avg_time_to_hire | média dias (seed/calculado) |
| hire_rate | hires / applicants % |

- [ ] **Step 4: Indicadores**

12 blocos em `#analyticsIndicators`, reusando charts existentes (`renderRankChart`, `renderOriginDonut`, funil) quando possível; novos para motivos, produtividade, comparecimento.

Cada bloco: `data-analytics-metric="id"` e, se fatia, `data-analytics-slice="…"`.

- [ ] **Step 5: Wire form**

Aplicar → `renderAnalytics()`; Limpar → defaults + render.

- [ ] **Step 6: Smoke**

Cards e indicadores populados; mudar período e Aplicar altera números.

---

### Task 3: Drawer drill-down + abrir dossiê/vaga

**Files:**
- Modify: `app.js` (`openAnalyticsDrill`, handlers)
- Modify: `styles.css` (drawer)

**Interfaces:**
- Consumes: `items[]` de cards/indicators
- Produces: `openAnalyticsDrill({ title, valueLabel, items, kind })`

- [ ] **Step 1: `openAnalyticsDrill`**

Preenche título (“Desistências”), meta (“15 candidatos · filtros…”), lista:

```html
<button type="button" data-drill-candidate="123">…</button>
<!-- ou data-drill-job="10" -->
```

Se `items.length === 0`, mostrar empty.

- [ ] **Step 2: Clique nos cards/indicadores**

```js
on("#analyticsCards", "click", (e) => {
  const card = e.target.closest("[data-analytics-metric]");
  if (!card) return;
  openAnalyticsDrill(resolveMetricDrill(card.dataset.analyticsMetric));
});
```

Mesmo para `#analyticsIndicators`. Funil: clique na etapa abre items daquela etapa.

- [ ] **Step 3: Linha → detalhe**

`data-drill-candidate` → `openCandidateDialog` / fluxo existente  
`data-drill-job` → abrir detalhe de vaga existente

- [ ] **Step 4: Fechar**

`#closeAnalyticsDrill`, click backdrop, Escape.

- [ ] **Step 5: Caso canônico**

Metric `withdrawals` com N seeds → drawer lista **exatamente N** nomes.

- [ ] **Step 6: Smoke**

Clicar desistências → ver lista → abrir um candidato.

---

### Task 4: Export stub + polish + graphify

**Files:**
- Modify: `app.js` (export handlers)
- Modify: `styles.css` (mobile cards/grid/drawer)
- Cleanup: `renderReports` unused paths / página relatorios

- [ ] **Step 1: Export**

PDF: toast “Exportação PDF (protótipo)”  
Excel/CSV: gerar Blob CSV das `items` do último drill **ou** dos cards filtrados e `URL.createObjectURL` download `indicadores.csv`

- [ ] **Step 2: CSS**

Grade responsiva; drawer ~420px desktop / full mobile; cards 2–4 colunas.

- [ ] **Step 3: QA regressão**

- Análises de gestores ainda funciona  
- Início inalterado em propósito  
- `#relatorios` → Painel  

- [ ] **Step 4:** `graphify update .`

---

## Spec coverage

| Spec | Task |
|------|------|
| Painel único + nav sem Relatórios | 1 |
| 8 cards + 12 indicadores + filtros | 2 |
| Drawer drill-down | 3 |
| Export stub + mobile | 4 |
| Redirect relatorios | 1 |
