# Central de Pendências do Gestor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar a nav Pendências do Portal do gestor num hub tipado (resumo + lista + CTAs) que agrega ações pendentes derivadas dos outros fluxos, sem criar solicitações.

**Architecture:** Nova `buildGestorPendencies()` (irmã de `buildPendencies`) com escopo do gestor. A vista `homeFilter === "analises"` no `#gestorPage` deixa de listar só `managerAnalyses` e passa a renderizar resumo + filtros + cards. CTAs deep-linkam para painel de análise, entrevista/ficha, solicitação ou vaga. Home/KPI leem a mesma fonte.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-10-central-pendencias-gestor-design.md`

## Global Constraints

- Só Portal do gestor; **não** novo item de sidebar; **não** embutir `#pendenciasPage` no modo gestor.
- Não cria solicitações nesta tela.
- Itens **derivados** — sem “marcar concluída” manual; somem ao concluir na origem.
- CTAs abrem fluxos existentes (`#gestorCandidatePanel`, entrevista/ficha, solicitação, vaga) — não dossiê RH `#candidateDialog` para decisão.
- Commits só se o usuário pedir.
- Após editar código: `graphify update .` (e `graphify query` antes de explorar amplo).
- Cache final: `gestor-pendencias-220` (ou superior) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.
- Datas relativas a `TODAY_KEY` (`"2026-08-27"`).

## Estrutura de arquivos

- Modify: `app.js` — `buildGestorPendencies`, prioridade, render hub, CTAs, nav count, home metrics
- Modify: `index.html` — toolbar/resumo/filtros da vista Pendências; cache
- Modify: `styles.css` — cards, badges de prioridade, resumo
- Reference: `buildPendencies` (~L4664), `myGestorPendencies` (~L17024), `myGestorAwaitingActions` (~L17043), `renderGestorPortal` analises (~L19527), `syncGestorNavCounts` (~L4433), `myGestorApprovalRequests`, `openGestorCandidatePanel` / `openGestorAnalysis`

---

### Task 1: Modelo `buildGestorPendencies` + prioridade

**Files:**
- Modify: `app.js` (perto de `buildPendencies` / `myGestorPendencies`)

**Interfaces:**
- Consumes: `managerAnalyses`, `interviews`, `hiringRequests`, `candidates`, `myGestorJobs`, `approvalPersona`, `TODAY_KEY`, `currentManagerName`, flags `gestorWantsInterview` / `gestorExtraEvaluation` quando existirem
- Produces:
  - `GESTOR_PENDING_TYPES` / labels
  - `gestorPendingPriority(dueAt, opts) → "overdue"|"today"|"soon"|"normal"`
  - `buildGestorPendencies() → item[]`
  - `gestorPendenciesByBucket(bucket, list?)`
  - `countGestorPendencies(list?) → { overdue, today, soon, total }`

- [ ] **Step 1: Orientar**

Run: `graphify query "buildPendencies myGestorPendencies managerAnalyses hiringRequests"`  

- [ ] **Step 2: Prioridade**

```javascript
function gestorPendingPriority(dueAt, options = {}) {
  if (options.forceOverdue) return "overdue";
  const day = dueAt ? String(dueAt).slice(0, 10) : "";
  if (!day) return options.defaultPriority || "normal";
  if (day < TODAY_KEY) return "overdue";
  if (day === TODAY_KEY) return "today";
  const base = new Date(`${TODAY_KEY}T12:00:00`);
  const due = new Date(`${day}T12:00:00`);
  const diff = Math.round((due - base) / 86400000);
  if (diff >= 0 && diff <= 3) return "soon";
  return "normal";
}

function gestorPendingPriorityLabel(priority) {
  return { overdue: "Vencida", today: "Hoje", soon: "Próxima", normal: "Normal" }[priority] || "Normal";
}
```

- [ ] **Step 3: `buildGestorPendencies`**

Empurrar itens com `makePendingItem`-like shape + `group`, `priority`, `origin`, `status`, `subjectLabel`:

1. **Candidatos / análise:** `managerAnalyses` pending do `currentManagerName` → type `gestor_analise`, action `analisar_candidato`
2. **Avaliação adicional:** candidatos das vagas do gestor com `gestorExtraEvaluation` → type `gestor_aval_extra`
3. **Entrevistas próximas:** `myGestorUpcomingInterviews` / entrevistas do gestor com `at` >= hoje (ou nas próximas 72h) → `gestor_entrevista`
4. **Ficha / parecer:** reusar lógica de `myGestorFichaPendencies` → `gestor_ficha` / `gestor_parecer`, action `continuar_ficha`
5. **Solicitação aprovação:** `myGestorApprovalRequests()` (persona) → `gestor_sol_aprovacao`, action `abrir_solicitacao`
6. **Solicitação ajuste:** `hiringRequests` com status `Ajuste solicitado` e `requester === currentManagerName` → `gestor_sol_ajuste`, action `corrigir_solicitacao`
7. **Proposta:** se candidatura das vagas do gestor com proposta `aguardando_aprovacao` e gestor participa (seed flag ou manager da vaga) → `gestor_proposta`
8. **SLA:** candidatos das vagas do gestor com SLA overdue / due soon → `gestor_sla`

Dedupe por `id`. Ordenar: overdue → today → soon → normal, depois `dueAt`.

- [ ] **Step 4: Buckets + counts**

```javascript
function gestorPendenciesByBucket(bucket, all = buildGestorPendencies()) {
  if (bucket === "overdue") return all.filter((i) => i.priority === "overdue");
  if (bucket === "today") return all.filter((i) => i.priority === "today");
  if (bucket === "soon") return all.filter((i) => i.priority === "soon");
  return all;
}

function countGestorPendencies(all = buildGestorPendencies()) {
  return {
    overdue: all.filter((i) => i.priority === "overdue").length,
    today: all.filter((i) => i.priority === "today").length,
    soon: all.filter((i) => i.priority === "soon").length,
    total: all.length,
  };
}
```

- [ ] **Step 5: `node --check app.js`**

Expected: exit 0.

---

### Task 2: Shell HTML da vista Pendências

**Files:**
- Modify: `index.html` — `#gestorAnalysisToolbar` / área lista quando Pendências

**Interfaces:**
- Produces: `#gestorPendenciasSummary`, `#gestorPendenciasExamples`, `#gestorPendenciasBuckets`, `#gestorPendenciasTypeFilter` (ou reusar toolbar existente)

- [ ] **Step 1: Expandir toolbar**

Substituir/estender `#gestorAnalysisToolbar` (hoje filtro de status de análise) por:

```html
<div class="gestor-pendencias-hub" id="gestorPendenciasHub" hidden>
  <div class="gestor-pendencias-summary" id="gestorPendenciasSummary"></div>
  <p class="gestor-pendencias-examples" id="gestorPendenciasExamples"></p>
  <div class="gestor-pendencias-filters">
    <div class="talent-tabs fit-hub-tabs" id="gestorPendenciasBuckets" role="tablist" aria-label="Prioridade">
      <button type="button" role="tab" data-gestor-pend-bucket="all" aria-selected="true">Todas</button>
      <button type="button" role="tab" data-gestor-pend-bucket="overdue">Atrasadas</button>
      <button type="button" role="tab" data-gestor-pend-bucket="today">Para hoje</button>
      <button type="button" role="tab" data-gestor-pend-bucket="soon">Próximas</button>
    </div>
    <select id="gestorPendenciasTypeFilter" aria-label="Filtrar por tipo">
      <option value="all">Todos os tipos</option>
      <option value="candidatos">Candidatos</option>
      <option value="entrevistas">Entrevistas</option>
      <option value="vagas">Vagas</option>
      <option value="outras">Outras</option>
    </select>
  </div>
</div>
```

Esconder o select antigo de status de análise **ou** removê-lo se só servia à lista antiga.

- [ ] **Step 2: State**

```javascript
// em gestorViewState:
pendenciasBucket: "all", // all | overdue | today | soon
pendenciasTypeGroup: "all",
```

- [ ] **Step 3: Smoke** — ids no DOM.

---

### Task 3: Render do hub + CTAs

**Files:**
- Modify: `app.js` — `renderGestorPortal` branch `analises`; novos `renderGestorPendenciasHub`, `runGestorPendenciaAction`
- Modify: `styles.css`

**Interfaces:**
- Consumes: `buildGestorPendencies`, buckets
- Produces: UI completa; navegação por ação

- [ ] **Step 1: `renderGestorPendenciasHub`**

- Mostrar `#gestorPendenciasHub`; atualizar título/nota: “Pendências” / “Tudo que depende da sua ação no recrutamento.”
- Summary: 4 métricas (Atrasadas, Para hoje, Próximas, Total)
- Examples line: até 4 frases agregadas por tipo (ex. “3 candidatos aguardando análise”)
- Filtrar por bucket + group
- Cards:

```html
<article class="gestor-pendencia-card is-{priority}" data-gestor-pend-id="{id}">
  <div>
    <span class="gestor-pendencia-priority">{label}</span>
    <span class="gestor-pendencia-type">{typeLabel}</span>
    <h3>{title}</h3>
    <p>{subjectLabel} · {origin}</p>
    <span>Criada {created} · Prazo {due} · {status}</span>
  </div>
  <button type="button" class="primary-button" data-gestor-pend-action="{primaryAction}" data-gestor-pend-id="{id}">…</button>
</article>
```

Empty: “Nada pendente para você.”

- [ ] **Step 2: Substituir bloco `if (filter === "analises")` em `renderGestorPortal`**

Chamar `renderGestorPendenciasHub()` em vez da lista `managerAnalyses`.

- [ ] **Step 3: `runGestorPendenciaAction(item, action)`**

| action | efeito |
|--------|--------|
| `analisar_candidato` | `openGestorAnalysis` / `openGestorCandidatePanel` |
| `continuar_ficha` / `abrir_entrevista` | abrir detalhe entrevista existente (mesmo helper RH/gestor já usado) |
| `abrir_solicitacao` | inbox approval + abrir form da request |
| `corrigir_solicitacao` | abrir form da request em modo edição |
| `abrir_vaga` | `openGestorJob` |
| `abrir_proposta` | deep-link proposta se existir helper |

- [ ] **Step 4: Event listeners**

Buckets, type filter, click CTA / card.

- [ ] **Step 5: CSS** — summary grid, priority badges (overdue vermelho suave, today âmbar, soon azul/cinza, normal muted), card row.

- [ ] **Step 6: `node --check app.js`**

---

### Task 4: Nav count + home alinhados

**Files:**
- Modify: `app.js` — `syncGestorNavCounts`, `collectGestorOverviewMetrics` / `renderGestorOverview`, `myGestorAwaitingActions` (opcional thin wrapper)

- [ ] **Step 1: Nav**

```javascript
function syncGestorNavCounts() {
  const counts = countGestorPendencies();
  const pendEl = document.querySelector("#gestorPendenciasNavCount");
  const vagasEl = document.querySelector("#gestorVagasNavCount");
  if (pendEl) pendEl.textContent = String(counts.total);
  if (vagasEl) vagasEl.textContent = String(myGestorJobs().length);
}
```

- [ ] **Step 2: Home**

- KPI “pendências vencidas” / due soon ← `countGestorPendencies`
- Painel “Aguardando sua ação”: preferir primeiros itens de `buildGestorPendencies()` (map para o shape do card da home) **ou** manter `myGestorAwaitingActions` alimentado a partir de `buildGestorPendencies` para uma fonte só
- Atalho “Ver pendências” → `homeFilter = "analises"`

- [ ] **Step 3: `node --check app.js`**

---

### Task 5: Seeds de cobertura + aceite

**Files:**
- Modify: `app.js` seeds se algum tipo do brief não aparecer
- Modify: `index.html` cache
- Spec status já APPROVED

- [ ] **Step 1: Garantir seeds**

Pelo menos um item demo por grupo (candidatos, entrevistas, vagas, outras) visível para Larissa Dias / persona aprovação. Ajustar dueAts relativos a `TODAY_KEY` para overdue/today/soon.

- [ ] **Step 2: Cache** `gestor-pendencias-220`

- [ ] **Step 3: Manual**

1. Pendências: resumo + lista tipada  
2. Analisar → concluir → some  
3. Ficha → finalizar → some  
4. Aprovação solicitação (persona) → some  
5. Home/KPI coerentes  
6. Hub RH intacto  

- [ ] **Step 4: `graphify update .`**

- [ ] **Step 5: Entrega** — o que existia vs muda; fluxo antes × agora; evitado (nav nova / página RH embutida).

---

## Spec coverage

| Spec | Task |
|------|------|
| Resumo 4 métricas + exemplos | 2, 3 |
| Tipos candidatos/entrevistas/vagas/outras | 1 |
| Card campos | 3 |
| Prioridade visual | 1, 3 |
| CTAs | 3 |
| Auto-conclusão derivada | 1 (natureza), 5 (teste) |
| Estender nav existente | 2, 3 |
| Home mesma fonte | 4 |
| Seeds + cache | 5 |

## Placeholder scan

Sem TBD. Se helper de abertura de entrevista tiver nome diferente, Task 3 deve usar o símbolo real do arquivo (`openInterviewDetail` / equivalente).
