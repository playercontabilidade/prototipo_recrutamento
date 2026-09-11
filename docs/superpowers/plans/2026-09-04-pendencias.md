# Pendências (inbox de ação) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Página própria **Pendências** na nav com 4 buckets (Minhas · Equipe · Vencidas · Próximas), filtro por tipo, cards com CTAs e `buildPendencies()` derivado (+ seeds) para os 10 tipos da spec.

**Architecture:** `buildPendencies()` agrega candidatos, entrevistas, scoreEvaluations, jobs, propostas e talentos em `pendingItem[]`. A UI `#pendenciasPage` filtra por bucket/tipo e dispara ações nos fluxos existentes (`openCandidate`, `openInterviewDetail`, `openScoreEvaluationDetail`, etc.). Sem fila persistida: “Resolver” = toast + navegar ao subject.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-04-pendencias-design.md`

## Global Constraints

- Nav própria `data-page="pendencias"` → `#pendenciasPage`; Pipeline **não** é removido.
- Sessão RH fixa: `CURRENT_RH_USER = "Larissa Dias"` (Minhas = assignee igual; Equipe = demais).
- 4 buckets · 10 tipos · ações rápidas nos fluxos existentes.
- Derivado por regras + `pendingSeeds[]` para cobrir tipos/buckets sem regra real.
- Commits só se o usuário pedir.
- Após editar código: `graphify update .`
- Cache final: bump único `pendencias-161` (ou superior) em CSS/JS no `index.html` (hoje: `timeline-160`).
- Verificação: `node --check app.js` + roteiro manual da spec.
- Sem backend; tudo em memória.
- Datas relativas a `TODAY_KEY` (`"2026-08-27"`).

## Estrutura de arquivos

- Modify: `index.html` — item nav Pendências + `#pendenciasPage` (abas, chips host, lista, empty) + cache.
- Modify: `app.js` — constantes, `buildPendencies`, seeds, render, `showPage`/maps, handlers de ação.
- Modify: `styles.css` — layout da página, cards, urgência, chips de tipo.
- Reference: `showPage` (~L12925), `pageNames`/`pageByHash`/`hashByPage` (~L3250), `slaStatus`/`daysInStage` (~L3323), `scoreEvaluations` / `openScoreEvaluationDetail`, `openInterviewDetail`, `openCandidate`, `dismissCandidate`, `showToast`, hub Results/Fit (abas `talent-tabs`).

---

### Task 1: Modelo + helpers + `buildPendencies()` + seeds

**Files:**
- Modify: `app.js` (bloco novo após helpers SLA / antes de renders de página; seeds perto de `scoreEvaluations` ou após `ensureJobDefaults`)

**Interfaces:**
- Produces:
  - `CURRENT_RH_USER = "Larissa Dias"`
  - `PENDING_TYPES` (array dos 10)
  - `pendingTypeLabel(type)` → string PT
  - `pendingSeeds[]` (itens manuais opcionais)
  - `isPendingMine(item)` → boolean
  - `isPendingOverdue(item)` → boolean
  - `isPendingDueSoon(item, withinDays = 3)` → boolean
  - `buildPendencies()` → `pendingItem[]` (derived + seeds, dedupe por `id`)
  - `getPendenciesForBucket(bucket)` → filtrados
  - `countPendenciesByBucket()` → `{ mine, team, overdue, dueSoon }`

- [ ] **Step 1: Constantes e labels**

```javascript
const CURRENT_RH_USER = "Larissa Dias";

const PENDING_TYPES = [
  "curriculo",
  "entrevista_resultado",
  "ficha",
  "avaliacao",
  "parado",
  "sla",
  "vaga_aprovacao",
  "proposta_aprovacao",
  "retorno",
  "banco_revisao",
];

function pendingTypeLabel(type) {
  return (
    {
      curriculo: "Currículo / triagem",
      entrevista_resultado: "Resultado de entrevista",
      ficha: "Ficha de condução",
      avaliacao: "Avaliação (score)",
      parado: "Candidato parado",
      sla: "SLA estourado",
      vaga_aprovacao: "Aprovação de vaga",
      proposta_aprovacao: "Aprovação de proposta",
      retorno: "Aguardando retorno",
      banco_revisao: "Revisão no banco",
    }[type] || type
  );
}
```

- [ ] **Step 2: Helpers de prazo / ownership**

```javascript
function pendingDueDay(item) {
  if (!item?.dueAt) return null;
  return String(item.dueAt).slice(0, 10);
}

function isPendingMine(item) {
  const assignee = (item?.assignee || "").trim() || CURRENT_RH_USER;
  return assignee === CURRENT_RH_USER;
}

function isPendingOverdue(item) {
  if (item?.type === "sla") return true;
  const day = pendingDueDay(item);
  if (!day) return false;
  return day < TODAY_KEY;
}

function isPendingDueSoon(item, withinDays = 3) {
  if (isPendingOverdue(item)) return false;
  const day = pendingDueDay(item);
  if (!day) return false;
  const base = new Date(`${TODAY_KEY}T12:00:00`);
  const due = new Date(`${day}T12:00:00`);
  const diff = Math.round((due - base) / 86400000);
  return diff >= 0 && diff <= withinDays;
}

function makePendingItem(partial) {
  return {
    id: partial.id,
    type: partial.type,
    title: partial.title || pendingTypeLabel(partial.type),
    description: partial.description || "",
    assignee: partial.assignee || CURRENT_RH_USER,
    dueAt: partial.dueAt ?? null,
    createdAt: partial.createdAt || null,
    subject: partial.subject || null,
    primaryAction: partial.primaryAction || "abrir_candidatura",
    secondaryActions: partial.secondaryActions || [],
  };
}
```

- [ ] **Step 3: Seeds explícitos (cobertura de tipos/buckets)**

```javascript
const pendingSeeds = [
  // Equipe + dueSoon
  makePendingItem({
    id: "seed-curriculo-equipe",
    type: "curriculo",
    title: "Analisar currículo — equipe",
    description: "Triagem aguardando parecer do gestor.",
    assignee: "Camila Monteiro",
    dueAt: "2026-08-29T18:00:00",
    subject: { kind: "candidate", id: 107 },
    primaryAction: "analisar",
    secondaryActions: ["aprovar", "reprovar"],
  }),
  // Minhas + overdue (além de SLA derivado)
  makePendingItem({
    id: "seed-ficha-vencida",
    type: "ficha",
    title: "Completar ficha de condução",
    description: "Perguntas em aberto na condução.",
    assignee: CURRENT_RH_USER,
    dueAt: "2026-08-25T12:00:00",
    subject: { kind: "interview", id: 604 },
    primaryAction: "abrir_entrevista",
    secondaryActions: ["resolver"],
  }),
  // entrevista_resultado se não houver Realizada no seed atual
  makePendingItem({
    id: "seed-entrevista-resultado",
    type: "entrevista_resultado",
    title: "Registrar resultado da entrevista",
    description: "Entrevista realizada — falta resultado.",
    assignee: "Mariana Costa",
    dueAt: "2026-08-28T17:00:00",
    subject: { kind: "interview", id: 605 },
    primaryAction: "abrir_entrevista",
    secondaryActions: ["reagendar"],
  }),
  makePendingItem({
    id: "seed-banco-revisao",
    type: "banco_revisao",
    title: "Revisar talento bloqueado",
    description: "Perfil aguardando revisão no banco.",
    assignee: CURRENT_RH_USER,
    dueAt: "2026-08-30T12:00:00",
    subject: { kind: "talent", id: null }, // preencher com id real de talent status bloqueados na implementação
    primaryAction: "resolver",
    secondaryActions: [],
  }),
];
```

Na implementação: resolver `subject.id` do banco com o primeiro `talents` com `status === "bloqueados"` (ou ajustar seed). Remover seeds se a regra derivada já cobrir o mesmo `id`.

- [ ] **Step 4: `buildPendencies()` — regras de derivação**

Ordem sugerida (push em array `items`, depois concat `pendingSeeds` sem ids duplicados):

| type | Fonte | assignee | dueAt | primaryAction |
|------|-------|----------|-------|---------------|
| curriculo | `candidates` stage Triagem + (`alert` ou history/activities com “aguardando”) | `candidate.owner` | `nextActionAt` ou `TODAY_KEY+2` | `analisar` |
| entrevista_resultado | `interviews` status `Realizada` **ou** seed; sem draft finalizado se houver campo | `item.owner` | `endAt` | `abrir_entrevista` |
| ficha | interview com `conductDraft` incompleto **ou** seed | owner | due seed | `abrir_entrevista` |
| avaliacao | `scoreEvaluations` status `Pendente`\|`Parcial`\|`Em revisão` | Larissa ou primeiro evaluator | `updatedAt`+2d ou createdAt | `preencher_avaliacao` |
| parado | `daysInStage(c) >= (slaDaysByStage[stage] \|\| default)` **e** não só SLA, **ou** `nextActionAt < TODAY` | owner | nextActionAt / stageEnteredAt | `abrir_candidatura` |
| sla | `slaStatus(c).overdue` | owner | stageEnteredAt | `abrir_candidatura` |
| vaga_aprovacao | `jobs` com status `Aguardando aprovação` (ex.: id 14) | `job.manager` | `hireBy` ou TODAY | `resolver` (abrir vaga / toast) |
| proposta_aprovacao | candidate com `proposal.status` in `enviada`\|`vista` | owner | último send.at | `abrir_candidatura` |
| retorno | history/activities texto “aguardando retorno” **ou** proposal enviada | owner | activity date / TODAY | `enviar_retorno` |
| banco_revisao | talents `bloqueados` **ou** seed | CURRENT_RH_USER | retainUntil slice ou TODAY+3 | `resolver` |

```javascript
function buildPendencies() {
  const items = [];
  const push = (partial) => {
    if (!partial?.id) return;
    items.push(makePendingItem(partial));
  };

  // ... regras acima, uma por bloco ...

  pendingSeeds.forEach((seed) => {
    if (!items.some((item) => item.id === seed.id)) items.push(seed);
  });

  return items.sort((a, b) => {
    const da = pendingDueDay(a) || "9999-99-99";
    const db = pendingDueDay(b) || "9999-99-99";
    return da.localeCompare(db);
  });
}

function getPendenciesForBucket(bucket, all = buildPendencies()) {
  if (bucket === "mine") return all.filter(isPendingMine);
  if (bucket === "team") return all.filter((item) => !isPendingMine(item));
  if (bucket === "overdue") return all.filter(isPendingOverdue);
  if (bucket === "dueSoon") return all.filter((item) => isPendingDueSoon(item));
  return all;
}

function countPendenciesByBucket(all = buildPendencies()) {
  return {
    mine: getPendenciesForBucket("mine", all).length,
    team: getPendenciesForBucket("team", all).length,
    overdue: getPendenciesForBucket("overdue", all).length,
    dueSoon: getPendenciesForBucket("dueSoon", all).length,
  };
}
```

- [ ] **Step 5: Smoke check em Node (sem DOM)**

Não há suite de testes no repo. Validar sintaxe e helpers com snippet temporário **ou** apenas `node --check app.js` após Task 3+ quando o arquivo fechar. Nesta task: após colar o bloco, garantir que não há referência a DOM; se `TODAY_KEY` / `candidates` já existem acima, ok.

Run: `node --check app.js`  
Expected: OK (se o restante do arquivo já está válido).

- [ ] **Step 6: Commit (só se o usuário pedir)** — pular por padrão.

---

### Task 2: Shell HTML — nav + `#pendenciasPage`

**Files:**
- Modify: `index.html` (nav grupo Operação, após Pipeline; seção página; cache attrs)
- Modify: `app.js` (`pageNames`, `pageByHash`, `hashByPage`, const `pendenciasPage`, `showPage`)

**Interfaces:**
- Consumes: nenhum JS de Task 1 obrigatório ainda
- Produces: DOM ids usáveis na Task 3

- [ ] **Step 1: Nav item**

Inserir após o link Pipeline (grupo Operação):

```html
<a href="#pendencias" class="nav-item" data-page="pendencias" title="Pendências">
  <span class="nav-icon" aria-hidden="true"><svg class="ui-icon"><use href="#i-bell" /></svg></span>
  <span class="nav-label">Pendências</span>
  <span class="nav-count" id="pendenciasNavCount">0</span>
</a>
```

- [ ] **Step 2: Página**

Colocar `#pendenciasPage` próximo a `#pipelinePage` / `#resultadosPage` (mesmo padrão `dashboard-page`):

```html
<section class="dashboard-page pendencias-page" id="pendenciasPage" hidden>
  <header class="dashboard-welcome">
    <div>
      <h1>Pendências</h1>
      <p class="panel-note">Tudo que precisa de ação do RH e da equipe.</p>
    </div>
  </header>

  <nav class="page-menu talent-tabs pendencias-hub-tabs" role="tablist" aria-label="Buckets de pendências">
    <button type="button" role="tab" data-pendencias-bucket="mine" aria-selected="true">
      Minhas
      <span class="talent-tab-count" id="pendenciasMineCount">0</span>
    </button>
    <button type="button" role="tab" data-pendencias-bucket="team" aria-selected="false">
      Equipe
      <span class="talent-tab-count" id="pendenciasTeamCount">0</span>
    </button>
    <button type="button" role="tab" data-pendencias-bucket="overdue" aria-selected="false">
      Vencidas
      <span class="talent-tab-count" id="pendenciasOverdueCount">0</span>
    </button>
    <button type="button" role="tab" data-pendencias-bucket="dueSoon" aria-selected="false">
      Próximas do vencimento
      <span class="talent-tab-count" id="pendenciasDueSoonCount">0</span>
    </button>
  </nav>

  <div class="pendencias-type-filters" id="pendenciasTypeFilters" role="toolbar" aria-label="Filtrar por tipo"></div>

  <div class="pendencias-list" id="pendenciasList"></div>

  <div class="empty-state" id="pendenciasEmpty" hidden>
    <h3>Nada por aqui</h3>
    <p>Nenhuma pendência neste bucket com o filtro atual.</p>
    <button class="secondary-button" type="button" id="pendenciasClearFilter">Limpar filtro de tipo</button>
  </div>
</section>
```

- [ ] **Step 3: Wire routing**

```javascript
const pendenciasPage = document.querySelector("#pendenciasPage");

// pageNames
pendencias: "Pendências",

// pageByHash
pendencias: "pendencias",

// hashByPage
pendencias: "pendencias",

// em showPage:
if (pendenciasPage) pendenciasPage.hidden = page !== "pendencias";
if (page === "pendencias") renderPendenciasPage();
```

Declarar stub `function renderPendenciasPage() {}` se ainda não existir, para não quebrar.

- [ ] **Step 4: Cache**

Atualizar `styles.css?v=` e `app.js?v=` para `pendencias-161`.

- [ ] **Step 5: Verificar** — abrir `#pendencias` (após Task 3 o conteúdo aparece). Por agora: `node --check app.js`.

---

### Task 3: Render — buckets, chips, cards, contagens

**Files:**
- Modify: `app.js` — `renderPendenciasPage`, state de UI
- Modify: `styles.css` — classes mínimas para lista legível (pode completar na Task 5)

**Interfaces:**
- Consumes: `buildPendencies`, `getPendenciesForBucket`, `countPendenciesByBucket`, `pendingTypeLabel`, `isPendingOverdue`, `isPendingDueSoon`
- Produces: `pendenciasBucket`, `pendenciasTypeFilter`, `renderPendenciasPage()`, `syncPendenciasNavCount()`

- [ ] **Step 1: State**

```javascript
let pendenciasBucket = "mine"; // mine | team | overdue | dueSoon
let pendenciasTypeFilter = "all";
```

- [ ] **Step 2: Formatação de prazo no card**

```javascript
function formatPendingDue(item) {
  const day = pendingDueDay(item);
  if (!day) return "Sem prazo";
  if (isPendingOverdue(item)) return `Vencida · ${day.split("-").reverse().join("/")}`;
  if (isPendingDueSoon(item)) {
    const base = new Date(`${TODAY_KEY}T12:00:00`);
    const due = new Date(`${day}T12:00:00`);
    const diff = Math.round((due - base) / 86400000);
    if (diff === 0) return "Vence hoje";
    if (diff === 1) return "Vence amanhã";
    return `Em ${diff} dias`;
  }
  return day.split("-").reverse().join("/");
}
```

- [ ] **Step 3: `renderPendenciasPage`**

```javascript
function syncPendenciasNavCount(all = buildPendencies()) {
  const counts = countPendenciesByBucket(all);
  const el = document.querySelector("#pendenciasNavCount");
  if (el) el.textContent = String(counts.mine); // spec: contagem Minhas (ou Minhas+vencidas — usar Minhas)
}

function renderPendenciasTypeFilters(itemsInBucket) {
  const host = document.querySelector("#pendenciasTypeFilters");
  if (!host) return;
  const types = PENDING_TYPES.filter((type) => itemsInBucket.some((item) => item.type === type));
  const chips = [
    { id: "all", label: "Todos" },
    ...types.map((type) => ({ id: type, label: pendingTypeLabel(type) })),
  ];
  host.innerHTML = chips
    .map(
      (chip) =>
        `<button type="button" class="pendencias-type-chip${pendenciasTypeFilter === chip.id ? " is-active" : ""}" data-pendencias-type="${chip.id}">${escapeHtml(chip.label)}</button>`,
    )
    .join("");
}

function renderPendenciasPage() {
  const all = buildPendencies();
  const counts = countPendenciesByBucket(all);
  const setCount = (id, n) => {
    const el = document.querySelector(id);
    if (el) el.textContent = String(n);
  };
  setCount("#pendenciasMineCount", counts.mine);
  setCount("#pendenciasTeamCount", counts.team);
  setCount("#pendenciasOverdueCount", counts.overdue);
  setCount("#pendenciasDueSoonCount", counts.dueSoon);
  syncPendenciasNavCount(all);

  document.querySelectorAll("[data-pendencias-bucket]").forEach((btn) => {
    const on = btn.dataset.pendenciasBucket === pendenciasBucket;
    btn.setAttribute("aria-selected", on ? "true" : "false");
  });

  let list = getPendenciesForBucket(pendenciasBucket, all);
  renderPendenciasTypeFilters(list);
  if (pendenciasTypeFilter !== "all") {
    list = list.filter((item) => item.type === pendenciasTypeFilter);
  }

  const host = document.querySelector("#pendenciasList");
  const empty = document.querySelector("#pendenciasEmpty");
  if (!host) return;

  if (!list.length) {
    host.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  host.innerHTML = list
    .map((item) => {
      const urgent = isPendingOverdue(item) ? " is-overdue" : isPendingDueSoon(item) ? " is-duesoon" : "";
      const secondary = (item.secondaryActions || [])
        .map(
          (action) =>
            `<button type="button" class="secondary-button" data-pendencias-action="${action}" data-pendencias-id="${escapeHtml(item.id)}">${escapeHtml(pendingActionLabel(action))}</button>`,
        )
        .join("");
      return `<article class="pendencias-card${urgent}" data-pendencias-id="${escapeHtml(item.id)}">
        <div class="pendencias-card-main">
          <span class="pendencias-type-badge">${escapeHtml(pendingTypeLabel(item.type))}</span>
          <strong class="pendencias-card-title">${escapeHtml(item.title)}</strong>
          <p class="pendencias-card-desc">${escapeHtml(item.description)}</p>
          <div class="test-meta pendencias-card-meta">
            <span>${escapeHtml(item.assignee)}</span>
            <span class="pendencias-due">${escapeHtml(formatPendingDue(item))}</span>
          </div>
        </div>
        <div class="pendencias-card-actions">
          <button type="button" class="primary-button" data-pendencias-action="${escapeHtml(item.primaryAction)}" data-pendencias-id="${escapeHtml(item.id)}">${escapeHtml(pendingActionLabel(item.primaryAction))}</button>
          ${secondary}
        </div>
      </article>`;
    })
    .join("");
}

function pendingActionLabel(action) {
  return (
    {
      analisar: "Analisar",
      abrir_candidatura: "Abrir candidatura",
      preencher_avaliacao: "Preencher avaliação",
      abrir_entrevista: "Abrir entrevista",
      aprovar: "Aprovar",
      reprovar: "Reprovar",
      enviar_retorno: "Enviar retorno",
      reagendar: "Reagendar",
      resolver: "Resolver",
    }[action] || action
  );
}
```

- [ ] **Step 4: Chamar `syncPendenciasNavCount()` no boot** (junto a outros renders iniciais / após dados prontos).

- [ ] **Step 5: `node --check app.js`** — Expected: OK.

---

### Task 4: Handlers — abas, filtro, ações rápidas

**Files:**
- Modify: `app.js` — listeners em `#pendenciasPage` (e delegação)

**Interfaces:**
- Consumes: `renderPendenciasPage`, `buildPendencies`, subjects
- Produces: `runPendenciaAction(action, item)`, resolução de subject

- [ ] **Step 1: Resolver subject**

```javascript
function findPendingItemById(id) {
  return buildPendencies().find((item) => String(item.id) === String(id)) || null;
}

function resolvePendingSubject(item) {
  if (!item?.subject) return null;
  const { kind, id } = item.subject;
  if (kind === "candidate") return { kind, entity: candidates.find((c) => c.id === Number(id)) };
  if (kind === "interview") return { kind, entity: interviews.find((i) => i.id === Number(id)) };
  if (kind === "score") return { kind, entity: getScoreEvaluationById(id) };
  if (kind === "job") return { kind, entity: jobs.find((j) => j.id === Number(id)) };
  if (kind === "talent") return { kind, entity: talents.find((t) => t.id === Number(id)) };
  return null;
}
```

- [ ] **Step 2: `runPendenciaAction`**

```javascript
function runPendenciaAction(action, item) {
  const resolved = resolvePendingSubject(item);
  if (item.subject && !resolved?.entity) {
    showToast("Registro não encontrado", "O assunto desta pendência não está mais disponível.");
    return;
  }

  switch (action) {
    case "analisar":
    case "abrir_candidatura": {
      const candidateId =
        resolved?.kind === "candidate"
          ? resolved.entity.id
          : resolved?.kind === "interview"
            ? resolved.entity.candidateId
            : resolved?.kind === "score"
              ? resolved.entity.candidateId
              : item.subject?.id;
      if (candidateId) openCandidate(candidateId);
      else showToast("Sem candidatura", "Não foi possível abrir o dossiê.");
      break;
    }
    case "preencher_avaliacao": {
      const evalId = resolved?.kind === "score" ? resolved.entity.id : item.subject?.id;
      if (evalId && typeof openScoreEvaluationDetail === "function") openScoreEvaluationDetail(evalId);
      else if (resolved?.entity?.candidateId) openCandidate(resolved.entity.candidateId);
      else showToast("Avaliação", "Abra o dossiê e use Avaliar Score.");
      break;
    }
    case "abrir_entrevista":
    case "reagendar": {
      const interview =
        resolved?.kind === "interview"
          ? resolved.entity
          : interviews.find((i) => i.id === Number(item.subject?.id));
      if (interview) openInterviewDetail(interview);
      else showToast("Entrevista não encontrada", "");
      break;
    }
    case "aprovar": {
      const candidate = resolved?.kind === "candidate" ? resolved.entity : null;
      if (candidate && typeof moveToTalentBank === "function") {
        // usar helper existente de banco se houver; senão toast + openCandidate
        openCandidate(candidate.id);
        showToast("Aprovar", "Confirme o envio ao banco no dossiê.");
      } else if (candidate) {
        openCandidate(candidate.id);
        showToast("Aprovar", "Confirme a ação no dossiê.");
      }
      break;
    }
    case "reprovar": {
      const candidate = resolved?.kind === "candidate" ? resolved.entity : null;
      if (candidate) {
        openCandidate(candidate.id);
        showToast("Reprovar", "Use Dispensar no dossiê para registrar o motivo.");
      }
      break;
    }
    case "enviar_retorno": {
      showToast("Retorno", "Fluxo de comunicação (protótipo) — candidatura aberta.");
      if (resolved?.kind === "candidate") openCandidate(resolved.entity.id);
      else if (resolved?.entity?.candidateId) openCandidate(resolved.entity.candidateId);
      break;
    }
    case "resolver": {
      showToast("Pendência", "Abrindo o registro relacionado.");
      if (resolved?.kind === "candidate") openCandidate(resolved.entity.id);
      else if (resolved?.kind === "interview") openInterviewDetail(resolved.entity);
      else if (resolved?.kind === "score") openScoreEvaluationDetail(resolved.entity.id);
      else if (resolved?.kind === "job") {
        showPage("jobs");
        // se existir openJobDetail(job), chamar
        if (typeof openJobDetail === "function") openJobDetail(resolved.entity);
      } else if (resolved?.kind === "talent") {
        showPage("talentos");
      }
      break;
    }
    default:
      showToast("Ação", action);
  }
}
```

Ajustar nomes reais (`openJobDetail`, `moveToTalentBank`) com `graphify query` / grep no momento da implementação — se não existirem, manter toast + navegação.

- [ ] **Step 3: Listeners**

```javascript
document.querySelector("#pendenciasPage")?.addEventListener("click", (event) => {
  const bucketBtn = event.target.closest("[data-pendencias-bucket]");
  if (bucketBtn) {
    pendenciasBucket = bucketBtn.dataset.pendenciasBucket;
    pendenciasTypeFilter = "all";
    renderPendenciasPage();
    return;
  }
  const typeBtn = event.target.closest("[data-pendencias-type]");
  if (typeBtn) {
    pendenciasTypeFilter = typeBtn.dataset.pendenciasType || "all";
    renderPendenciasPage();
    return;
  }
  if (event.target.closest("#pendenciasClearFilter")) {
    pendenciasTypeFilter = "all";
    renderPendenciasPage();
    return;
  }
  const actionBtn = event.target.closest("[data-pendencias-action]");
  if (actionBtn) {
    const item = findPendingItemById(actionBtn.dataset.pendenciasId);
    if (!item) {
      showToast("Registro não encontrado", "");
      return;
    }
    runPendenciaAction(actionBtn.dataset.pendenciasAction, item);
  }
});
```

- [ ] **Step 4: `node --check app.js`** — Expected: OK.

- [ ] **Step 5: Commit** — só se pedido.

---

### Task 5: CSS + polimento + QA manual + graphify

**Files:**
- Modify: `styles.css`
- Modify: `index.html` (cache se ainda não bumpado)
- Run: `graphify update .`

- [ ] **Step 1: Estilos** (espelhar cards de score/fit — sem card-spam visual; lista com espaçamento claro)

```css
.pendencias-page .pendencias-type-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.75rem 0 1rem;
}

.pendencias-type-chip {
  border: 1px solid var(--border, #d8dde6);
  background: transparent;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  cursor: pointer;
  font: inherit;
}

.pendencias-type-chip.is-active {
  border-color: var(--accent, #2563eb);
  background: color-mix(in srgb, var(--accent, #2563eb) 12%, transparent);
}

.pendencias-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pendencias-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.1rem;
  border: 1px solid var(--border, #d8dde6);
  border-radius: 12px;
  background: var(--surface, #fff);
}

.pendencias-card.is-overdue {
  border-color: color-mix(in srgb, #dc2626 45%, var(--border, #d8dde6));
}

.pendencias-card.is-duesoon {
  border-color: color-mix(in srgb, #d97706 40%, var(--border, #d8dde6));
}

.pendencias-type-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  opacity: 0.8;
}

.pendencias-card-title {
  display: block;
  margin-bottom: 0.25rem;
}

.pendencias-card-desc {
  margin: 0 0 0.5rem;
  opacity: 0.85;
  font-size: 0.9rem;
}

.pendencias-card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-start;
}

.pendencias-due {
  font-weight: 600;
}

@media (max-width: 720px) {
  .pendencias-card {
    flex-direction: column;
  }
}
```

Reusar variáveis CSS já existentes no projeto se os fallbacks diferirem — alinhar ao `--` real do `styles.css`.

- [ ] **Step 2: `graphify update .`**

- [ ] **Step 3: QA manual (spec)**

1. Nav **Pendências** → contagem > 0  
2. 4 abas com contagens distintas quando seeds cobrem  
3. Tipos variados; filtro chip  
4. CTA abre dossiê / entrevista / score  
5. Item SLA ou seed vencido em **Vencidas**  
6. Item dueSoon em **Próximas**  
7. **Minhas** = Larissa; **Equipe** = outros  
8. Empty + Limpar filtro  
9. Ctrl+F5 com cache `pendencias-161`

- [ ] **Step 4: Commit** — só se pedido.

---

## Spec coverage (self-review)

| Spec | Task |
|------|------|
| Nav + contagem | 2, 3 |
| 4 buckets | 2, 3 |
| Filtro tipo | 3, 4 |
| Cards + CTAs | 3, 4 |
| `buildPendencies` 10 tipos | 1 |
| Ações mapeadas | 4 |
| Seeds / buckets | 1 |
| Empty / subject missing | 3, 4 |
| Cache / Pipeline intacto | 2, Global |
| Out: persona, fila, push, backend | respeitado |

## Placeholder scan

Nenhum TBD. Nomes de helpers de vaga/banco (`openJobDetail`, etc.) devem ser confirmados via grep na Task 4 — fallback toast+navegação já especificado.
