# Entrevistas — Ciclo de Vida Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prototipar o ciclo completo de entrevistas (formulário, status, ações RH, pedido de reagendamento no portal, conflito e badge atrasada) sobre as superfícies já existentes.

**Architecture:** Manter `interviews[]` como fonte única. Expandir `#interviewDialog` (create/edit/reschedule), `#interviewDetailDialog` (ações por status), aba Entrevistas do dossiê e `renderCandidateInterviews` no portal. Helpers de domínio centralizam status ativo, overlap/conflito e badge Atrasada; mutações sempre re-renderizam agenda + detalhe + dossiê + portal.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `<dialog>`, Node.js apenas para `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-03-entrevistas-ciclo-vida-design.md`

## Global Constraints

- Sem telas novas de navegação; expandir dialogs e views existentes.
- Modalidade = Presencial | Videochamada | Telefone; natureza via etapa do pipeline.
- Status canônicos: Agendada | Aguardando confirmação | Confirmada | Reagendamento solicitado | Cancelada | Não compareceu | Realizada.
- Convite ligado → status inicial/pós-reagendamento `Aguardando confirmação`; desligado → `Agendada`.
- Conflito (mesmo entrevistador ou mesmo candidato) alerta com “Agendar mesmo assim”.
- Atrasada é badge derivada, não status.
- Portal: confirmar + pedir reagendamento (motivo + mensagem); sem editar horário.
- Toasts demonstrativos (sem e-mail/calendário real).
- Cache final: `interview-lifecycle-122` em CSS e JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.

## Estrutura de arquivos

- Modify: `app.js` — modelo, helpers, seeds, formulário, detalhe, agenda, dossiê, portal.
- Modify: `index.html` — campos do formulário, ações do detalhe, dialogs de conflito/cancelamento/reagendamento portal, filtros, cache bust.
- Modify: `styles.css` — status, badge Atrasada, ações do detalhe, conflito.
- Verify: spec acima (aceite e roteiro de demo).

---

### Task 1: Modelo, helpers e migração de seeds

**Files:**
- Modify: `app.js` (~L1146–1220 seeds `interviews`)
- Modify: `app.js` (junto a `formatInterviewWhen` / helpers de entrevista ~L2864+)

**Interfaces:**
- Produces: `INTERVIEW_ACTIVE_STATUSES: string[]`
- Produces: `INTERVIEW_TERMINAL_STATUSES: string[]`
- Produces: `interviewIsActive(item): boolean`
- Produces: `interviewIsOverdue(item, nowIso?): boolean`
- Produces: `interviewInterval(item): { start: Date, end: Date }`
- Produces: `interviewsOverlap(a, b): boolean`
- Produces: `findInterviewConflicts(draft, { ignoreId? }): Interview[]`
- Produces: `normalizeInterviewRecord(item): Interview` (preenche defaults)
- Produces: `interviewSheets: string[]` (templates seed)
- Consumes: `interviews`, `TODAY_KEY`

- [ ] **Step 1: Registrar baseline (red)**

No app atual, anotar:

1. Seeds só têm `at` + `type` RH/Técnica; sem `modality`/`endAt`/`interviewers`.
2. Status `Concluída` ainda aparece em filtros HTML.
3. Não existe badge Atrasada nem detecção de conflito.

Expected: os três gaps existem antes desta task.

- [ ] **Step 2: Adicionar constantes e helpers**

```js
const INTERVIEW_ACTIVE_STATUSES = [
  "Agendada",
  "Aguardando confirmação",
  "Confirmada",
  "Reagendamento solicitado",
];
const INTERVIEW_TERMINAL_STATUSES = ["Cancelada", "Não compareceu", "Realizada"];

const interviewSheets = [
  "Ficha RH padrão",
  "Ficha técnica",
  "Ficha gestores",
];

function interviewIsActive(item) {
  return Boolean(item) && !INTERVIEW_TERMINAL_STATUSES.includes(item.status);
}

function interviewInterval(item) {
  const start = new Date(item.at);
  const end = item.endAt
    ? new Date(item.endAt)
    : new Date(start.getTime() + (Number(item.duration) || 60) * 60000);
  return { start, end };
}

function interviewsOverlap(a, b) {
  const A = interviewInterval(a);
  const B = interviewInterval(b);
  return A.start < B.end && B.start < A.end;
}

function interviewIsOverdue(item, nowIso = `${TODAY_KEY}T18:00:00`) {
  if (!interviewIsActive(item)) return false;
  return interviewInterval(item).end < new Date(nowIso);
}

function findInterviewConflicts(draft, { ignoreId } = {}) {
  return interviews.filter((item) => {
    if (!interviewIsActive(item)) return false;
    if (ignoreId != null && item.id === ignoreId) return false;
    if (!interviewsOverlap(draft, item)) return false;
    const sameCandidate =
      draft.candidateId != null && item.candidateId === draft.candidateId;
    const draftInterviewers = draft.interviewers || [];
    const itemInterviewers = item.interviewers || [];
    const sameInterviewer = draftInterviewers.some((name) =>
      itemInterviewers.includes(name),
    );
    return sameCandidate || sameInterviewer;
  });
}

function normalizeInterviewRecord(item) {
  if (!item) return item;
  if (item.status === "Concluída") item.status = "Realizada";
  if (item.waiting && item.status === "Agendada") {
    item.status = "Aguardando confirmação";
  }
  if (!item.modality) {
    item.modality = item.meet || item.link ? "Videochamada" : "Presencial";
  }
  if (!item.endAt) {
    const start = new Date(item.at);
    item.endAt = new Date(
      start.getTime() + (Number(item.duration) || 60) * 60000,
    ).toISOString().slice(0, 19);
  }
  if (!Array.isArray(item.interviewers)) {
    item.interviewers = item.owner ? [item.owner] : ["Larissa Dias"];
  }
  if (!item.stage) item.stage = item.type || "Entrevista RH";
  if (item.inviteSent == null) item.inviteSent = Boolean(item.waiting);
  if (item.reminderSent == null) item.reminderSent = false;
  if (!item.sheet) item.sheet = interviewSheets[0];
  if (item.notes == null) item.notes = "";
  if (item.candidateInstructions == null) item.candidateInstructions = "";
  if (item.rescheduleRequest === undefined) item.rescheduleRequest = null;
  if (item.cancelReason == null) item.cancelReason = "";
  if (item.startedAt == null) item.startedAt = "";
  if (item.link == null) item.link = "";
  return item;
}
```

Após declarar `interviews`, rodar: `interviews.forEach(normalizeInterviewRecord)`.

- [ ] **Step 3: Ajustar seeds para o roteiro de demo**

Garantir pelo menos:

1. Duas entrevistas ativas com overlap potencial no mesmo entrevistador (para demo de conflito ao criar outra).
2. Uma `Confirmada` com `endAt` &lt; `TODAY_KEY`T18:00 → badge Atrasada.
3. Uma `Aguardando confirmação` ligada a candidato do portal.
4. Migrar qualquer `Concluída` → `Realizada`.

Exemplo mínimo a inserir/ajustar (ids livres):

```js
{
  id: 607,
  name: "Kemilly Cristyne Neves Tavares",
  vacancy: "Analista de Departamento Pessoal",
  candidateId: 104,
  stage: "Entrevista RH",
  modality: "Videochamada",
  at: "2026-08-26T09:00:00",
  endAt: "2026-08-26T10:00:00",
  interviewers: ["Larissa Dias"],
  link: "https://meet.google.com/demo-atrasada",
  meet: "Meet",
  location: "",
  sheet: "Ficha RH padrão",
  notes: "",
  candidateInstructions: "Entre 5 minutos antes.",
  status: "Confirmada",
  inviteSent: true,
  reminderSent: false,
  rescheduleRequest: null,
  cancelReason: "",
  startedAt: "",
  duration: 60,
}
```

- [ ] **Step 4: Verificar sintaxe**

Run: `node --check app.js`  
Expected: exit 0.

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat(entrevistas): normaliza modelo, helpers e seeds do ciclo de vida"
```

---

### Task 2: Formulário completo (create / edit / reschedule) + conflito

**Files:**
- Modify: `index.html` (`#interviewDialog` ~L1587–1660)
- Modify: `index.html` (novo `#interviewConflictDialog` e `#interviewCancelDialog` se ainda não existir cancel dialog)
- Modify: `app.js` (`openInterviewScheduler`, `submitInterview`, estado `interviewFormMode`)
- Modify: `styles.css` (campos condicionais / dialog conflito)

**Interfaces:**
- Produces: `interviewFormMode: "create" | "edit" | "reschedule"`
- Produces: `pendingInterviewForceConflict: boolean`
- Produces: `editingInterviewId: number | null`
- Produces: `openInterviewScheduler(candidate, options?)`
- Produces: `openInterviewEditor(item, mode)`
- Produces: `readInterviewFormDraft(): object`
- Produces: `submitInterview(event)` (respeita modo + conflito)
- Consumes: helpers Task 1, `candidates`, `pipelineStages`, `managers`

- [ ] **Step 1: Redesenhar campos do `#interviewForm`**

Substituir o bloco atual de Tipo/duração única por:

- Candidato (`#interviewCandidateSelect` — visível em create avulso; hidden/readonly label se veio do dossiê)
- Vaga (`#interviewVacancy` readonly)
- Etapa (`#interviewStage` select com `pipelineStages`)
- Modalidade (`#interviewModality`: Presencial | Videochamada | Telefone)
- Data (picker existente)
- Horário início (`#interviewTimeStart` via time picker ou input) e fim (`#interviewTimeEnd`)
- Entrevistadores (checkboxes/chips a partir de `managers` + “Larissa Dias”)
- Local (`#interviewLocation` — wrap `#interviewLocationWrap`)
- Link (`#interviewLink` — wrap `#interviewLinkWrap`)
- Ficha (`#interviewSheet` select = `interviewSheets`)
- Observações RH (`#interviewNotes`)
- Instruções ao candidato (`#interviewCandidateInstructions`)
- Toggle Enviar convite (`#interviewSendInvite` — já existe; manter)
- Remover ou esconder “Permitir candidato escolher horário” desta onda (fora de escopo da spec) **ou** manter hidden.

Título dinâmico: `#interviewDialogTitle` = Agendar / Editar / Reagendar.

- [ ] **Step 2: Dialog de conflito**

```html
<dialog class="stack-dialog" id="interviewConflictDialog">
  <header>
    <h2>Conflito de horário</h2>
    <button type="button" id="closeInterviewConflict" aria-label="Fechar">×</button>
  </header>
  <p id="interviewConflictMessage">Há overlap com outra entrevista.</p>
  <ul id="interviewConflictList"></ul>
  <footer>
    <button type="button" class="secondary-button" id="cancelInterviewConflict">Voltar</button>
    <button type="button" class="primary-button" id="forceInterviewSave">Agendar mesmo assim</button>
  </footer>
</dialog>
```

- [ ] **Step 3: Implementar leitura/validação/submit**

```js
let interviewFormMode = "create";
let editingInterviewId = null;
let pendingInterviewForceConflict = false;
let interviewTimeEnd = "";

function syncInterviewModalityFields() {
  const modality = document.querySelector("#interviewModality")?.value;
  const locationWrap = document.querySelector("#interviewLocationWrap");
  const linkWrap = document.querySelector("#interviewLinkWrap");
  if (locationWrap) locationWrap.hidden = modality !== "Presencial";
  if (linkWrap) linkWrap.hidden = modality === "Presencial";
}

function readInterviewFormDraft() {
  const candidate =
    candidates.find((item) => item.id === selectedCandidateId) ||
    selectedActionCandidate;
  const start = `${interviewDate}T${interviewTime}:00`;
  const end = `${interviewDate}T${interviewTimeEnd || interviewTime}:00`;
  const interviewers = [
    ...document.querySelectorAll("[name='interviewInterviewer']:checked"),
  ].map((input) => input.value);
  return {
    candidateId: candidate?.id,
    name: candidate?.name,
    vacancy: candidate?.vacancy,
    stage: document.querySelector("#interviewStage")?.value || candidate?.stage,
    modality: document.querySelector("#interviewModality")?.value,
    at: start,
    endAt: end,
    interviewers,
    location: document.querySelector("#interviewLocation")?.value.trim() || "",
    link: document.querySelector("#interviewLink")?.value.trim() || "",
    sheet: document.querySelector("#interviewSheet")?.value || interviewSheets[0],
    notes: document.querySelector("#interviewNotes")?.value.trim() || "",
    candidateInstructions:
      document.querySelector("#interviewCandidateInstructions")?.value.trim() ||
      "",
    sendInvite: Boolean(document.querySelector("#interviewSendInvite")?.checked),
  };
}

function openInterviewEditor(item, mode = "edit") {
  interviewFormMode = mode;
  editingInterviewId = item.id;
  selectedCandidateId = item.candidateId;
  selectedActionCandidate =
    candidates.find((entry) => entry.id === item.candidateId) || null;
  // popular campos a partir de item; setar interviewDate/Time/TimeEnd
  pendingInterviewForceConflict = false;
  syncInterviewModalityFields();
  document.querySelector("#interviewDialogTitle").textContent =
    mode === "reschedule" ? "Reagendar entrevista" : "Editar entrevista";
  interviewDialog.showModal();
}
```

Em `submitInterview`:

1. Validar início &lt; fim; local se Presencial; link se Videochamada; ≥1 entrevistador.
2. Se `!pendingInterviewForceConflict` e `findInterviewConflicts(draft, { ignoreId: editingInterviewId }).length` → abrir conflito e return.
3. Status: `draft.sendInvite ? "Aguardando confirmação" : "Agendada"` (create e reschedule). Edit sem mudar intervalo mantém status; se reschedule, limpar `rescheduleRequest`.
4. Create: `interviews.push(...)`; se candidato em Triagem → `updateCandidateStage(..., "Entrevista RH")`.
5. Edit/reschedule: Object.assign no item existente.
6. `interviewActivity` / history; `closeOverlayDialogs`; **não** fechar dossiê; `renderAgenda`; refresh detalhe/dossiê/portal; se dossiê aberto → `setCandidateDossierTab("interviews")`.

Force save: `pendingInterviewForceConflict = true` e re-chama submit.

- [ ] **Step 4: Verificar sintaxe + smoke manual**

Run: `node --check app.js`  
Manual: abrir dossiê → Agendar → modalidade Presencial esconde link; Videochamada exige link; overlap mostra conflito.

- [ ] **Step 5: Commit**

```bash
git add index.html app.js styles.css
git commit -m "feat(entrevistas): formulário completo com modos e conflito de horário"
```

---

### Task 3: Detalhe RH — ações e cancelamento com motivo

**Files:**
- Modify: `index.html` (`#interviewDetailDialog` footer ~L1573–1582; info dl)
- Modify: `index.html` (`#interviewCancelDialog` com motivo obrigatório)
- Modify: `app.js` (`renderInterviewDetail`, handler `data-interview-detail-action` ~L6608+)
- Modify: `styles.css` (grid de ações, badge)

**Interfaces:**
- Produces: `refreshInterviewSurfaces(item?)`
- Produces: `runInterviewDetailAction(action)`
- Produces: `openInterviewCancelDialog(item)`
- Consumes: helpers Task 1, `openInterviewEditor`

- [ ] **Step 1: Atualizar markup do detalhe**

Exibir: modalidade, etapa, intervalo, entrevistadores, local/link, ficha, observações, instruções, pedido de reagendamento (se houver), status + badge Atrasada.

Ações (`data-interview-detail-action`):

`edit` | `reschedule` | `cancel` | `confirm` | `copy-link` | `invite` | `reminder` | `no-show` | `start` | `complete`

Remover ou realocar “Gerar link do teste” para não poluir (pode ficar em Mais/secundário; não é foco desta onda).

- [ ] **Step 2: Habilitar ações por status**

```js
function refreshInterviewSurfaces(item) {
  renderAgenda();
  if (item && selectedInterviewDetailId === item.id) renderInterviewDetail();
  const candidate = candidates.find((entry) => entry.id === selectedCandidateId);
  if (candidateDialog?.open && candidate) renderCandidateDetails(candidate);
  if (typeof renderCandidateInterviews === "function") renderCandidateInterviews();
}

function runInterviewDetailAction(action) {
  const item = interviews.find((entry) => entry.id === selectedInterviewDetailId);
  if (!item) return;
  if (action === "edit") return openInterviewEditor(item, "edit");
  if (action === "reschedule") return openInterviewEditor(item, "reschedule");
  if (action === "cancel") return openInterviewCancelDialog(item);
  if (action === "confirm") {
    item.status = "Confirmada";
    interviewActivity(item, "Confirmou a entrevista manualmente");
  } else if (action === "copy-link") {
    const url = item.link || `${location.origin}${location.pathname}#entrevista-${item.id}`;
    navigator.clipboard?.writeText(url).catch(() => {});
    showToast("Link copiado", url);
    return;
  } else if (action === "invite") {
    item.inviteSent = true;
    if (item.status === "Agendada") item.status = "Aguardando confirmação";
    interviewActivity(item, "Enviou convite da entrevista");
    showToast("Convite", "Convite demonstrativo enviado.");
  } else if (action === "reminder") {
    item.reminderSent = true;
    interviewActivity(item, "Enviou lembrete da entrevista");
    showToast("Lembrete", "Lembrete demonstrativo enviado.");
  } else if (action === "no-show") {
    item.status = "Não compareceu";
    interviewActivity(item, "Registrou não comparecimento");
  } else if (action === "start") {
    item.startedAt = `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`;
    interviewActivity(item, "Iniciou a entrevista");
  } else if (action === "complete") {
    item.status = "Realizada";
    interviewActivity(item, "Finalizou a entrevista");
  }
  refreshInterviewSurfaces(item);
}
```

Cancel dialog: motivo obrigatório → `item.cancelReason = reason`; `item.status = "Cancelada"`.

Disable rules: terminais desabilitam mutações; `confirm` só se Aguardando/Agendada; `copy-link` se houver link ou fallback.

- [ ] **Step 3: Verificar**

Run: `node --check app.js`  
Manual: confirmar, cancelar com motivo, iniciar/finalizar, copiar link, convite muda Agendada → Aguardando confirmação.

- [ ] **Step 4: Commit**

```bash
git add index.html app.js styles.css
git commit -m "feat(entrevistas): ações do detalhe e cancelamento com motivo"
```

---

### Task 4: Agenda, filtros e dossiê (Próximas / Encerradas)

**Files:**
- Modify: `app.js` (`getFilteredInterviews`, `interviewTemplate`, `renderAgenda`, agrupamento em `renderCandidateDetails`)
- Modify: `index.html` (options de status no filtro ~L1208)
- Modify: `styles.css` (badge `.interview-overdue-badge`, status classes)

**Interfaces:**
- Produces: atualização visual de lista/agenda/dossiê
- Consumes: `interviewIsOverdue`, status canônicos

- [ ] **Step 1: Filtros e labels**

Trocar option `Concluída` por `Realizada`; adicionar `Aguardando confirmação`, `Confirmada`, `Reagendamento solicitado`, `Não compareceu`.

Em cards: mostrar modalidade + intervalo + status + badge Atrasada quando `interviewIsOverdue(item)`.

- [ ] **Step 2: Dossiê — grupos**

```js
const interviewGroups = {
  Próximas: candidateInterviews.filter((item) => interviewIsActive(item)),
  Encerradas: candidateInterviews.filter((item) => !interviewIsActive(item)),
};
```

Clique `data-open-interview` já abre detalhe — manter.

- [ ] **Step 3: Verificar**

Manual: seed atrasada mostra badge; filtros novos funcionam; dossiê lista Próximas/Encerradas.

- [ ] **Step 4: Commit**

```bash
git add index.html app.js styles.css
git commit -m "feat(entrevistas): agenda, filtros e grupos do dossiê"
```

---

### Task 5: Portal do candidato — confirmar e pedir reagendamento

**Files:**
- Modify: `app.js` (`renderCandidateInterviews` ~L8647+)
- Modify: `index.html` (dialog `#candidateRescheduleDialog` com motivo + mensagem; markup dos cards se necessário)
- Modify: `styles.css` (ações do card portal)

**Interfaces:**
- Produces: `confirmCandidateInterview(id)`
- Produces: `requestCandidateReschedule(id, reason, message)`
- Consumes: `interviews`, `candidatePortalUser`, `refreshInterviewSurfaces`

- [ ] **Step 1: Render do card**

Para cada entrevista do e-mail/candidato portal:

- Status + badge atrasada se aplicável
- Data/hora, modalidade, local ou link, instruções
- Botão Confirmar se `status === "Aguardando confirmação"`
- Botão Pedir reagendamento se `interviewIsActive(item)`

- [ ] **Step 2: Ações**

```js
function confirmCandidateInterview(id) {
  const item = interviews.find((entry) => entry.id === id);
  if (!item || item.status !== "Aguardando confirmação") return;
  item.status = "Confirmada";
  interviewActivity(item, "Candidato confirmou a entrevista");
  refreshInterviewSurfaces(item);
  showToast("Entrevista confirmada", "Sua presença foi confirmada.");
}

function requestCandidateReschedule(id, reason, message) {
  const item = interviews.find((entry) => entry.id === id);
  if (!item || !interviewIsActive(item)) return;
  item.status = "Reagendamento solicitado";
  item.rescheduleRequest = {
    reason,
    message,
    at: `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`,
  };
  interviewActivity(item, `Candidato pediu reagendamento: ${reason}`);
  refreshInterviewSurfaces(item);
  showToast("Reagendamento", "Pedido enviado ao RH.");
}
```

Dialog portal: motivo obrigatório + mensagem opcional → chama `requestCandidateReschedule`.

No detalhe RH, se `rescheduleRequest`, mostrar bloco destacado com reason/message e CTA Reagendar.

- [ ] **Step 3: Verificar**

Manual: portal confirma → Confirmada na agenda RH; portal pede reagendamento → status + bloco no detalhe; RH reagenda limpa pedido.

- [ ] **Step 4: Commit**

```bash
git add index.html app.js styles.css
git commit -m "feat(entrevistas): confirmação e reagendamento no portal do candidato"
```

---

### Task 6: Cache, aceite do roteiro e Graphify

**Files:**
- Modify: `index.html` (cache `?v=interview-lifecycle-122` em CSS e JS)
- Verify: roteiro da spec
- Run: `graphify . --code-only` (após mudanças em `app.js`)

- [ ] **Step 1: Bump de cache**

```html
<link rel="stylesheet" href="./styles.css?v=interview-lifecycle-122" />
...
<script src="./app.js?v=interview-lifecycle-122"></script>
```

- [ ] **Step 2: Roteiro de aceite (spec)**

Percorrer e marcar:

1. Conflito → alerta → forçar.  
2. Cancelamento com motivo.  
3. Reagendamento RH.  
4. Pedido do candidato no portal.  
5. Badge Atrasada sem mudar status.  
6. Formulário: modalidade controla Local/Link; convite define status inicial.  
7. Dossiê e agenda sincronizados.

Run: `node --check app.js`  
Expected: exit 0.

- [ ] **Step 3: Atualizar grafo**

Run: `graphify . --code-only`  
Expected: `graph.json` atualizado sem erro.

- [ ] **Step 4: Commit final**

```bash
git add index.html app.js styles.css graphify-out/graph.json graphify-out/manifest.json
git commit -m "feat(entrevistas): fecha ciclo de vida com cache e aceite do roteiro"
```

---

## Spec coverage (self-review)

| Requisito da spec | Task |
|-------------------|------|
| Modelo + status canônicos | 1 |
| Badge Atrasada derivada | 1, 4 |
| Formulário completo + modalidade | 2 |
| create/edit/reschedule + conflito | 2 |
| Ações do detalhe RH | 3 |
| Cancelar com motivo | 3 |
| Agenda/filtros/dossiê Próximas/Encerradas | 4 |
| Portal confirmar + pedir reagendamento | 5 |
| Seeds/roteiro demo + cache | 1, 6 |
| Sem e-mail real / sem slots auto | respeitado (fora) |

## Placeholder scan

Nenhum TBD/TODO. Assinaturas nomeadas de ponta a ponta (`refreshInterviewSurfaces`, `findInterviewConflicts`, `openInterviewEditor`).
