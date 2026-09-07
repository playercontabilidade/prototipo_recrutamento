# Acompanhamento da vaga (Portal do Gestor) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** No Portal do Gestor, permitir abrir uma vaga e acompanhar seleção (resumo, funil, candidatos, sobre a vaga) e decidir no painel `#gestorCandidatePanel`, sem usar o dossiê RH.

**Architecture:** Vista `home` / `job` dentro de `#gestorPage`. Aba Andamento (métricas + funil filtrável + tabela) e aba Sobre. Ações abrem `#gestorCandidatePanel` (artefatos leitura + parecer/recomendações). Flags em `companyGestorPermissions`.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `<dialog>`, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-07-acompanhamento-vaga-gestor-design.md`

## Global Constraints

- Superfície só no Portal do Gestor (`#gestorPage`); sem hub RH novo.
- Decisão do candidato no `#gestorCandidatePanel` — **não** usar `#candidateDialog`.
- `gestorPodeReprovarDireto` default `false`; `gestorVeFaixaSalarial` default `true`.
- Solicitar entrevista = stub (histórico + toast), não abre agendador RH completo.
- Commits só se o usuário pedir.
- Após editar código: `graphify update .`
- Cache final: bump único `gestor-vaga-170` (ou superior) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.
- Sem backend; tudo em memória.
- Datas relativas a `TODAY_KEY` (`"2026-08-27"`).

## Estrutura de arquivos

- Modify: `index.html` — envolver home atual; adicionar `#gestorJobView`; dialog `#gestorCandidatePanel`; toggles de demo; cache.
- Modify: `app.js` — `companyGestorPermissions`, helpers SLA/funil/rows, `renderGestorPortal` / `renderGestorJobView` / painel, handlers (hoje `data-open-job` vai para job board RH — **trocar**).
- Modify: `styles.css` — layout detalhe, funil, tabela, painel.
- Reference: `renderGestorPortal` (~L14310), click `#gestorPage` (~L15601), `ensureJobDefaults` (~L334), `currentManagerName` (~L3036), `openCandidateResume` / fit / assignments existentes.

---

### Task 1: Permissões + helpers + seeds de vaga

**Files:**
- Modify: `app.js` (perto de `currentManagerName` / `ensureJobDefaults`)

**Interfaces:**
- Produces:
  - `companyGestorPermissions` `{ gestorPodeReprovarDireto: false, gestorVeFaixaSalarial: true }`
  - `gestorViewState` `{ mode: "home"|"job", jobId: number|null, funnelStage: "all"|string, tab: "andamento"|"sobre" }`
  - `myGestorJobs()` → jobs onde `manager === currentManagerName || requester === currentManagerName`
  - `jobDaysOpen(job)` → number
  - `jobSlaLabel(job)` → `"no prazo"|"em atenção"|"atrasado"`
  - `GESTOR_FUNNEL_STAGES` array de `{ id, label, match: (candidate) => boolean }`
  - `gestorJobCandidates(job)` → candidates da vaga (`jobId` ou `vacancy === title`)
  - `gestorFunnelCounts(job)` → `{ [stageId]: number, all: number }`
  - `gestorCandidateRow(candidate)` → objeto para a tabela

- [ ] **Step 1: Estado e permissões**

```javascript
const companyGestorPermissions = {
  gestorPodeReprovarDireto: false,
  gestorVeFaixaSalarial: true,
};

const gestorViewState = {
  mode: "home", // "home" | "job"
  jobId: null,
  funnelStage: "all",
  tab: "andamento", // "andamento" | "sobre"
};
```

- [ ] **Step 2: Helpers de vaga / SLA / funil**

```javascript
function myGestorJobs() {
  return jobs.filter(
    (job) => job.manager === currentManagerName || job.requester === currentManagerName,
  );
}

function jobDaysOpen(job) {
  const opened = String(job.openedAt || job.publishedAt || TODAY_KEY).slice(0, 10);
  const a = new Date(`${opened}T12:00:00`);
  const b = new Date(`${TODAY_KEY}T12:00:00`);
  return Math.max(0, Math.round((b - a) / 86400000));
}

function jobSlaLabel(job) {
  const target = Number(job.slaTargetDays) || 30;
  const days = jobDaysOpen(job);
  if (days >= target) return "atrasado";
  if (days >= Math.floor(target * 0.8)) return "em atenção";
  return "no prazo";
}

const GESTOR_FUNNEL_STAGES = [
  { id: "inscritos", label: "Inscritos", match: (c) => /triagem|inscrit|candidat/i.test(c.stage || "") || true },
  // Implementar match real por stage do pipeline; "inscritos" = todos da vaga; demais = subsets exclusivos na ordem do funil.
];
```

Implementar matches **exclusivos** na ordem (cada candidato conta numa etapa do funil resumido), alinhados aos stages reais do seed (ex.: Triagem, Entrevista RH, Aguardando gestor, Finalista, Contratado). Documentar o mapa no comentário acima do array.

- [ ] **Step 3: Enriquecer `ensureJobDefaults` + 1 seed demo**

Garantir defaults: `slaTargetDays` (30), `recruiter` (fallback `Larissa Dias` ou manager RH), `profile` / `requirements` strings curtas se vazias, `processSteps` array se vazio, `history` já existe. Em pelo menos **uma** vaga de `Larissa Dias` (ex. id 18 Marketing), preencher profile/requirements/skills/salaryMin/salaryMax e candidatos em etapas variadas o suficiente para o funil não ficar zerado.

- [ ] **Step 4: Verificar sintaxe**

Run: `node --check app.js`  
Expected: exit 0

- [ ] **Step 5: Commit** — só se pedido.

---

### Task 2: HTML — home / job view / painel / toggles

**Files:**
- Modify: `index.html` (`#gestorPage` ~L1165; dialogs perto de `#managerAnalysisDialog`)

**Interfaces:**
- Produces: `#gestorHomeView`, `#gestorJobView`, `#gestorCandidatePanel`, toggles `#gestorPermRejectDirect`, `#gestorPermSeeSalary`

- [ ] **Step 1: Envolver home e adicionar job view**

Dentro de `#gestorPage`:

```html
<div id="gestorHomeView">
  <!-- hero + stats + grid atuais -->
  <div class="gestor-demo-perms" aria-label="Permissões de demo">
    <label class="test-switch">
      <input id="gestorPermRejectDirect" type="checkbox" />
      <span class="test-switch-track"></span>
      Gestor pode reprovar direto
    </label>
    <label class="test-switch">
      <input id="gestorPermSeeSalary" type="checkbox" checked />
      <span class="test-switch-track"></span>
      Ver faixa salarial
    </label>
  </div>
</div>

<section id="gestorJobView" class="gestor-job-view" hidden>
  <header class="gestor-job-header">
    <button type="button" class="secondary-button" id="gestorJobBack">Voltar</button>
    <div>
      <h1 id="gestorJobTitle">Vaga</h1>
      <p id="gestorJobMeta" class="panel-note"></p>
    </div>
    <span id="gestorJobSla" class="gestor-sla-pill"></span>
  </header>
  <div class="talent-tabs fit-hub-tabs" role="tablist">
    <button type="button" role="tab" data-gestor-job-tab="andamento" class="is-active" aria-selected="true">Andamento</button>
    <button type="button" role="tab" data-gestor-job-tab="sobre" aria-selected="false">Sobre a vaga</button>
  </div>
  <div id="gestorJobAndamento" class="gestor-job-pane">
    <div id="gestorJobSummary" class="gestor-job-summary"></div>
    <div id="gestorJobFunnel" class="gestor-job-funnel" role="group" aria-label="Funil"></div>
    <div id="gestorJobCandidates" class="gestor-job-candidates"></div>
  </div>
  <div id="gestorJobSobre" class="gestor-job-pane" hidden>
    <div id="gestorJobAbout" class="gestor-job-about"></div>
  </div>
</section>
```

- [ ] **Step 2: Dialog `#gestorCandidatePanel`**

```html
<dialog class="stack-dialog gestor-candidate-panel" id="gestorCandidatePanel">
  <header class="stack-dialog-header">
    <div>
      <h2 id="gestorCandTitle">Candidato</h2>
      <p id="gestorCandMeta" class="panel-note"></p>
    </div>
    <button class="icon-button" type="button" id="closeGestorCandidatePanel" aria-label="Fechar">×</button>
  </header>
  <div class="talent-tabs" role="tablist">
    <button type="button" role="tab" data-gestor-cand-tab="artefatos" class="is-active">Artefatos</button>
    <button type="button" role="tab" data-gestor-cand-tab="parecer">Parecer</button>
  </div>
  <div id="gestorCandArtefatos"></div>
  <div id="gestorCandParecer" hidden>
    <label class="form-field">
      <span>Parecer / comentário</span>
      <textarea id="gestorCandNote" rows="4" required></textarea>
    </label>
  </div>
  <footer class="dialog-actions" id="gestorCandActions"></footer>
</dialog>
```

- [ ] **Step 3: Cards de vaga usam `data-gestor-job-id`**

Em `renderGestorPortal`, trocar `data-open-job="${title}"` por `data-gestor-job-id="${job.id}"` (Task 3 fará o handler).

- [ ] **Step 4: Commit** — só se pedido.

---

### Task 3: Render detalhe — Andamento (resumo, funil, tabela)

**Files:**
- Modify: `app.js` (`renderGestorPortal`, novos `openGestorJob`, `renderGestorJobView`)
- Modify: `styles.css` (resumo, funil, tabela)

**Interfaces:**
- Consumes: helpers Task 1, markup Task 2
- Produces: `openGestorJob(jobId)`, `renderGestorJobView()`, `closeGestorJobView()`

- [ ] **Step 1: Navegação home ↔ job**

```javascript
function openGestorJob(jobId) {
  const job = jobs.find((item) => item.id === Number(jobId));
  if (!job || !myGestorJobs().some((item) => item.id === job.id)) {
    showToast("Vaga não encontrada", "Sem acesso ou vaga inexistente.");
    return;
  }
  gestorViewState.mode = "job";
  gestorViewState.jobId = job.id;
  gestorViewState.funnelStage = "all";
  gestorViewState.tab = "andamento";
  renderGestorPortal();
}

function closeGestorJobView() {
  gestorViewState.mode = "home";
  gestorViewState.jobId = null;
  renderGestorPortal();
}
```

Em `renderGestorPortal`: se `mode === "job"` renderiza job view e esconde home; senão o inverso. Usar `myGestorJobs()` nos stats/listas.

- [ ] **Step 2: Resumo + funil + tabela**

`renderGestorJobView()` preenche:
- Summary: cargo, openings, filled (`job.filled` / syncJobMetrics), remaining, openedAt, daysOpen, recruiter, status, SLA pill
- Funnel: botões `data-gestor-funnel="{id}"` com contagens; `all` + cada stage
- Tabela HTML com colunas da spec; menu `data-gestor-cand-action` por linha

Filtro: se `funnelStage !== "all"`, filtrar rows pelo match do stage.

- [ ] **Step 3: Handlers**

No click `#gestorPage`:
- `data-gestor-job-id` → `openGestorJob`
- **Remover** o caminho que faz `goToPage("jobs", { jobBoard: true })` para cards do gestor
- `#gestorJobBack` → `closeGestorJobView`
- `data-gestor-job-tab` → troca aba
- `data-gestor-funnel` → set funnelStage + re-render

- [ ] **Step 4: CSS mínimo** — grid de métricas, funil em linha, tabela scroll horizontal se preciso.

- [ ] **Step 5:** `node --check app.js`

- [ ] **Step 6: Commit** — só se pedido.

---

### Task 4: Aba Sobre a vaga

**Files:**
- Modify: `app.js` (`renderGestorJobAbout` ou branch em `renderGestorJobView`)
- Modify: `styles.css` se necessário

**Interfaces:**
- Consumes: `companyGestorPermissions.gestorVeFaixaSalarial`, campos do job

- [ ] **Step 1: Render Sobre**

Seções: Perfil solicitado · Requisitos · Competências (`skillsRequired` / `skillsNice`) · Faixa salarial (só se flag) · Etapas (`processSteps`) · Responsáveis (recruiter, manager, requester) · Histórico (`job.history`).

Se faixa oculta, não renderizar o bloco (nem placeholder “oculto”).

- [ ] **Step 2: Toggles de permissão na home**

Listeners em `#gestorPermRejectDirect` / `#gestorPermSeeSalary` atualizam `companyGestorPermissions` e, se job view aberta, re-render.

- [ ] **Step 3:** `node --check app.js`

- [ ] **Step 4: Commit** — só se pedido.

---

### Task 5: Painel do candidato + ações

**Files:**
- Modify: `app.js` (`openGestorCandidatePanel`, `runGestorCandidateAction`, handlers)
- Modify: `styles.css` (painel)

**Interfaces:**
- Consumes: candidate, job, permissions
- Produces: `openGestorCandidatePanel(candidateId, { focus })`, `runGestorCandidateAction(candidate, actionId)`

- [ ] **Step 1: Abrir painel**

```javascript
function openGestorCandidatePanel(candidateId, options = {}) {
  const candidate = candidates.find((item) => item.id === Number(candidateId));
  if (!candidate) {
    showToast("Candidato não encontrado", "");
    return;
  }
  // preencher título/meta; render artefatos (currículo stub, fit resumo, teste, entrevistas da vaga, avaliação RH se houver)
  // render footer actions
  document.querySelector("#gestorCandidatePanel")?.showModal();
  if (options.focus === "parecer") { /* selecionar aba parecer */ }
}
```

Artefatos: botões/links que chamam `openCandidateResume(candidate)` se existir; caso contrário toast “Currículo indisponível”. Fit/teste: textos derivados dos assignments/seeds já no app (sem inventar backend).

- [ ] **Step 2: `runGestorCandidateAction`**

| actionId | Efeito |
|----------|--------|
| `abrir` | já aberto |
| `curriculo` | preview stub |
| `comentar` / `parecer` | exige texto em `#gestorCandNote`; push `candidate.history` |
| `solicitar_entrevista` | history + toast “Solicitação de entrevista enviada ao RH” |
| `recomendar_avanco` / `recomendar_banco` | history + toast |
| `recomendar_reprovacao` | history + toast; se `gestorPodeReprovarDireto` → set stage/status reprovado como o fluxo RH do protótipo já faz |

Não chamar `openCandidate` (dossiê RH) a partir dessas ações.

- [ ] **Step 3: Wire da tabela e da home**

- Linha / “Abrir candidato” → `openGestorCandidatePanel`
- Home “Ver candidato” nas minhas vagas → **também** `openGestorCandidatePanel` (deixar de abrir dossiê RH)
- Close X / backdrop → `close()`
- `display:flex` só em `[open]` se customizar layout do dialog

- [ ] **Step 4:** `node --check app.js`

- [ ] **Step 5: Commit** — só se pedido.

---

### Task 6: CSS polish + cache + QA

**Files:**
- Modify: `styles.css`, `index.html` (cache `gestor-vaga-170`)
- Modify: `app.js` se gaps do QA

- [ ] **Step 1: Polir** — header job, SLA pills (`no prazo` / `em atenção` / `atrasado`), empty states, painel max-height scroll body.

- [ ] **Step 2: Cache bump** em `styles.css` e `app.js` no `index.html`.

- [ ] **Step 3: QA manual**

1. Portal Gestor → card Minhas vagas → detalhe (não vai para job board RH)  
2. Resumo + SLA coerentes  
3. Funil filtra tabela  
4. Sobre: faixa some com toggle off  
5. Abrir candidato → parecer → recomendar reprovação (flag off = só recomenda; on = reprova)  
6. Voltar à home  
7. `node --check app.js` + `graphify update .`

- [ ] **Step 4: Commit** — só se pedido.

---

## Spec coverage (self-review)

| Spec | Task |
|------|------|
| Home → detalhe full-page | 2, 3 |
| Abas Andamento / Sobre | 2, 3, 4 |
| Resumo + SLA | 1, 3 |
| Funil filtrável | 1, 3 |
| Tabela candidatos | 3 |
| Painel análise gestor | 2, 5 |
| Flags permissão | 1, 4, 5 |
| Stub solicitar entrevista | 5 |
| Não usar dossiê RH | 3, 5 |
| Seeds / myGestorJobs união | 1, 3 |
| Cache + QA | 6 |
| Out (hub RH, backend) | respeitado |

## Placeholder scan

Nenhum TBD. Mapa de stages do funil deve ser preenchido na Task 1 com stages reais do seed (grep `stage:` / pipeline columns em `app.js`).
