# Proposta de contratação (fluxo completo) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evoluir o modal de Proposta do dossiê para o fluxo completo (cadastro, aprovação RH, documento, envio, aceite/recusa, versões) com resumo na Pipeline.

**Architecture:** Abordagem 2 — `#offerDialog` = resumo + ações + histórico/versões; `#offerFormDialog` = editor completo. Uma proposta ativa em `candidate.proposal`; arquivadas em `candidate.proposalVersions[]`. Helpers de status/ações; documento HTML stub; diálogo de recusa.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `<dialog>`, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-04-proposta-contratacao-design.md`

## Global Constraints

- Modal no dossiê + chip na Pipeline; sem hub Propostas na nav.
- Aprovação só RH (Larissa) na sessão.
- 1 proposta ativa; nova versão arquiva a anterior.
- Aceite **não** dispara contratação.
- Gerar documento = HTML stub (padrão `openCandidateResume`).
- Commits só se o usuário pedir.
- Após editar código: `graphify update .`
- Cache final: bump único `proposta-166` (ou superior) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.
- Sem backend; tudo em memória.
- Datas relativas a `TODAY_KEY` (`"2026-08-27"`).

## Estrutura de arquivos

- Modify: `index.html` — `#offerDialog` (toolbar, versões), `#offerFormDialog` (campos completos), `#offerRefuseDialog`, cache.
- Modify: `app.js` — modelo/normalize/seeds, status machine, render, ações, Pipeline chip, Pendências/Timeline.
- Modify: `styles.css` — resumo em grade, toolbar, chips Pipeline, diálogo recusa.
- Reference: `renderOfferDialog` / `openOfferDialog` / `openOfferForm` (~L10376+), submit `#offerForm` (~L14292), `#offerSend` (~L14339), `data-offer-status` (~L14993), `offerStatusLabel`, `benefitsCatalog`, `buildPendencies` proposta, pipeline card (~L9364).

---

### Task 1: Modelo + normalize + labels + seeds

**Files:**
- Modify: `app.js` (após `benefitsCatalog` / perto de `offerStatusLabel`; migrar seed da Maria Eduarda ~L554)

**Interfaces:**
- Produces:
  - `OFFER_STATUSES` (array)
  - `offerStatusLabel(status)` → PT (atualizar: vista→visualizada, novos status)
  - `proposalSalary(proposal)` → number (lê `salary` ou `amount`)
  - `ensureProposalShape(proposal, candidate)` → proposal normalizado
  - `ensureCandidateProposal(candidate)` → garante `proposalVersions[]` + normaliza ativa
  - `createEmptyProposal(candidate, partial)` → rascunho
  - `refreshProposalExpiry(proposal)` → mutates status se validade passou
  - `nextProposalId` (number)

- [ ] **Step 1: Constantes e labels**

```javascript
const OFFER_STATUSES = [
  "rascunho",
  "aguardando_aprovacao",
  "aprovada",
  "enviada",
  "visualizada",
  "aceita",
  "recusada",
  "expirada",
  "cancelada",
];

let nextProposalId = 1;

function offerStatusLabel(status) {
  return (
    {
      rascunho: "Rascunho",
      aguardando_aprovacao: "Aguardando aprovação",
      aprovada: "Aprovada",
      enviada: "Enviada",
      visualizada: "Visualizada",
      vista: "Visualizada", // legado
      aceita: "Aceita",
      recusada: "Recusada",
      expirada: "Expirada",
      cancelada: "Cancelada",
    }[status] || status || ""
  );
}

function proposalSalary(proposal) {
  if (!proposal) return null;
  if (proposal.salary != null && proposal.salary !== "") return Number(proposal.salary);
  if (proposal.amount != null && proposal.amount !== "") return Number(proposal.amount);
  return null;
}
```

- [ ] **Step 2: Normalize + empty + expiry**

```javascript
function createEmptyProposal(candidate, partial = {}) {
  const now = `${TODAY_KEY}T12:00:00`;
  return {
    id: partial.id ?? nextProposalId++,
    version: partial.version ?? 1,
    status: partial.status || "rascunho",
    role: partial.role || candidate?.vacancy || "",
    salary: partial.salary ?? partial.amount ?? null,
    benefits: Array.isArray(partial.benefits) ? partial.benefits.slice() : [],
    workSchedule: partial.workSchedule || "40h semanais",
    workModel: partial.workModel || "Presencial",
    location: partial.location || "",
    admissionDate: partial.admissionDate || null,
    validUntil: partial.validUntil || null,
    notes: partial.notes || "",
    contract: partial.contract || "CLT",
    documentGeneratedAt: partial.documentGeneratedAt || null,
    pendingPdf: partial.pendingPdf || "",
    sends: Array.isArray(partial.sends) ? partial.sends.slice() : [],
    refusalReason: partial.refusalReason || null,
    refusalNote: partial.refusalNote || null,
    approvedAt: partial.approvedAt || null,
    sentAt: partial.sentAt || null,
    viewedAt: partial.viewedAt || null,
    decidedAt: partial.decidedAt || null,
    cancelledAt: partial.cancelledAt || null,
    createdAt: partial.createdAt || now,
    updatedAt: partial.updatedAt || now,
  };
}

function refreshProposalExpiry(proposal) {
  if (!proposal?.validUntil) return proposal;
  if (!["enviada", "visualizada", "vista"].includes(proposal.status)) return proposal;
  if (String(proposal.validUntil).slice(0, 10) < TODAY_KEY) {
    proposal.status = "expirada";
    proposal.decidedAt = proposal.decidedAt || `${TODAY_KEY}T12:00:00`;
  }
  return proposal;
}

function ensureProposalShape(proposal, candidate) {
  if (!proposal) return null;
  if (proposal.status === "vista") proposal.status = "visualizada";
  if (proposal.salary == null && proposal.amount != null) proposal.salary = Number(proposal.amount);
  const shaped = createEmptyProposal(candidate, proposal);
  Object.assign(proposal, shaped);
  refreshProposalExpiry(proposal);
  return proposal;
}

function ensureCandidateProposal(candidate) {
  if (!candidate) return null;
  if (!Array.isArray(candidate.proposalVersions)) candidate.proposalVersions = [];
  if (candidate.proposal) ensureProposalShape(candidate.proposal, candidate);
  candidate.proposalVersions.forEach((item) => ensureProposalShape(item, candidate));
  return candidate.proposal;
}
```

Rodar `candidates.forEach(ensureCandidateProposal)` após defaults dos candidatos (ou no boot do bloco de propostas).

- [ ] **Step 3: Atualizar seed Maria Eduarda (id com stage Proposta)**

```javascript
proposal: {
  id: 1,
  version: 1,
  status: "enviada",
  role: "Analista de Departamento Pessoal",
  salary: 2000,
  amount: 2000, // compat
  benefits: ["Vale refeição", "Plano de saúde"],
  workSchedule: "44h semanais",
  workModel: "Presencial",
  location: "Palmas - TO",
  admissionDate: "2026-09-15",
  validUntil: "2026-09-10",
  notes: "Proposta comercial seed.",
  contract: "CLT",
  documentGeneratedAt: "2026-08-27T09:00:00",
  pendingPdf: "",
  sends: [/* manter send existente com salary/amount */],
  // … timestamps
}
```

Incluir ≥1 seed em `aguardando_aprovacao` **ou** documentar que o fluxo se demonstra criando no UI; preferir enriquecer a seed existente + opcional segunda candidata com `rascunho` se houver slot fácil.

- [ ] **Step 4: `node --check app.js`** — Expected: OK.

- [ ] **Step 5: Commit** — só se pedido.

---

### Task 2: HTML — resumo, editor completo, diálogo de recusa

**Files:**
- Modify: `index.html` (`#offerDialog`, `#offerFormDialog`, novo `#offerRefuseDialog`, cache)

**Interfaces:**
- Produces: ids DOM consumidos na Task 3–4

- [ ] **Step 1: Reestruturar `#offerDialog`**

Manter header + status pill. Substituir corpo por:

```html
<div class="offer-summary" id="offerSummary"></div>
<div class="offer-actions" id="offerActions" role="toolbar" aria-label="Ações da proposta"></div>
<div class="offer-candidate-actions" id="offerCandidateActions" hidden>
  <span>Simular resposta do candidato</span>
  <div>
    <button class="secondary-button" type="button" data-offer-status="visualizada">Vista</button>
    <button class="secondary-button" type="button" data-offer-status="aceita">Aceitar</button>
    <button class="secondary-button" type="button" data-offer-status="recusada">Recusar</button>
  </div>
</div>
<div class="offer-history" id="offerHistory"></div>
<div class="offer-versions" id="offerVersions"></div>
<label class="form-field" id="offerMessageField">
  <span>Mensagem ao enviar</span>
  <textarea id="offerMessage" rows="3" placeholder="Mensagem"></textarea>
</label>
<div class="offer-footer-links">
  <button class="secondary-button" type="button" id="offerClose">Fechar</button>
</div>
```

Remover daqui o botão único `#offerSend` / attach da UI antiga **ou** mover “Enviar candidato” para a toolbar `#offerActions` (recomendado). Manter `#offerAttachPdf` só se ainda útil; spec prioriza Gerar documento — attach pode ficar secundário no editor ou sumir do resumo.

- [ ] **Step 2: Expandir `#offerFormDialog`**

```html
<label class="form-field"><span>Cargo</span><input id="offerRole" required /></label>
<label class="form-field"><span>Salário (R$)</span><input id="offerSalary" type="number" min="0" step="0.01" required /></label>
<label class="form-field"><span>Benefícios</span>
  <div class="offer-benefits-list" id="offerBenefitsList"></div>
</label>
<label class="form-field"><span>Jornada</span><input id="offerWorkSchedule" placeholder="40h semanais" /></label>
<label class="form-field"><span>Modelo de trabalho</span>
  <select id="offerWorkModel">…</select>
</label>
<label class="form-field"><span>Local</span><input id="offerLocation" /></label>
<label class="form-field"><span>Data de admissão</span><input id="offerAdmissionDate" type="date" /></label>
<label class="form-field"><span>Validade</span><input id="offerValidUntil" type="date" /></label>
<label class="form-field"><span>Observações</span><textarea id="offerNotes" rows="3"></textarea></label>
<!-- opcional: contract select se ainda usado no hire -->
```

Trocar `#offerAmount` → `#offerSalary` (atualizar todos os listeners).

- [ ] **Step 3: `#offerRefuseDialog`**

```html
<dialog class="stack-dialog" id="offerRefuseDialog">
  <form id="offerRefuseForm">
    <header class="stack-dialog-header">
      <h2>Registrar recusa</h2>
      <button class="icon-button" type="button" id="closeOfferRefuse" aria-label="Fechar">×</button>
    </header>
    <p id="offerRefuseCandidateLabel" class="panel-note"></p>
    <label class="form-field">
      <span>Motivo</span>
      <input id="offerRefuseReason" required maxlength="200" />
    </label>
    <label class="form-field">
      <span>Observação</span>
      <textarea id="offerRefuseNote" rows="4"></textarea>
    </label>
    <div class="dialog-actions">
      <button class="secondary-button" type="button" id="cancelOfferRefuse">Cancelar</button>
      <button class="primary-button" type="submit">Confirmar recusa</button>
    </div>
  </form>
</dialog>
```

Incluir em `closeOverlayDialogs`.

- [ ] **Step 4: Cache** → `proposta-166` em CSS/JS.

- [ ] **Step 5: Commit** — só se pedido.

---

### Task 3: Render resumo + editor + ações disponíveis

**Files:**
- Modify: `app.js` — `renderOfferDialog`, `openOfferForm`, `offerActionsForStatus`, submit do form

**Interfaces:**
- Consumes: Task 1 helpers
- Produces:
  - `offerActionsForStatus(status)` → `[{ id, label, primary? }]`
  - `renderOfferDialog(candidate)` atualizado
  - `openOfferForm(candidate)` preenche campos novos + checkboxes benefícios
  - `saveOfferForm(candidate)` → grava rascunho/atualiza

- [ ] **Step 1: Matriz de ações**

```javascript
function offerActionsForStatus(status) {
  const s = status === "vista" ? "visualizada" : status;
  const actions = [];
  if (!s) return [{ id: "criar", label: "Criar proposta", primary: true }];
  if (s === "rascunho") {
    actions.push(
      { id: "editar", label: "Editar", primary: true },
      { id: "enviar_aprovacao", label: "Enviar para aprovação" },
      { id: "cancelar", label: "Cancelar" },
    );
  }
  if (s === "aguardando_aprovacao") {
    actions.push(
      { id: "aprovar", label: "Aprovar", primary: true },
      { id: "reprovar", label: "Reprovar" },
      { id: "cancelar", label: "Cancelar" },
    );
  }
  if (s === "aprovada") {
    actions.push(
      { id: "editar", label: "Editar" },
      { id: "gerar_documento", label: "Gerar documento" },
      { id: "visualizar", label: "Visualizar" },
      { id: "enviar_candidato", label: "Enviar candidato", primary: true },
      { id: "cancelar", label: "Cancelar" },
    );
  }
  if (s === "enviada" || s === "visualizada") {
    actions.push(
      { id: "visualizar", label: "Visualizar" },
      { id: "reenviar", label: "Reenviar", primary: true },
      { id: "aceitar", label: "Registrar aceite" },
      { id: "recusar", label: "Registrar recusa" },
      { id: "cancelar", label: "Cancelar" },
    );
  }
  if (["aceita", "recusada", "expirada", "cancelada"].includes(s)) {
    actions.push(
      { id: "visualizar", label: "Visualizar" },
      { id: "nova_versao", label: "Criar nova versão", primary: true },
    );
  }
  return actions;
}
```

- [ ] **Step 2: `renderOfferDialog`**

- Sem proposta: empty + botão Criar.
- Com proposta: grade (cargo, salário formatado, benefícios, jornada, modelo, local, admissão, validade, obs).
- `#offerActions` com botões `data-offer-action="{id}"`.
- Simular resposta: visível só se status `enviada` ou `visualizada` (Aceitar/Recusar nos botões de simulação podem chamar as mesmas actions; **Recusar** da simulação → diálogo de recusa).
- Histórico `sends`; bloco versões arquivadas.
- Campo mensagem: mostrar quando ação de envio/reenvio faz sentido (`aprovada`/`enviada`/`visualizada`).

- [ ] **Step 3: Form open/save**

```javascript
function openOfferForm(candidate) {
  ensureCandidateProposal(candidate);
  const offer = candidate.proposal || createEmptyProposal(candidate);
  document.querySelector("#offerRole").value = offer.role || candidate.vacancy || "";
  document.querySelector("#offerSalary").value = proposalSalary(offer) ?? "";
  // … demais campos
  const host = document.querySelector("#offerBenefitsList");
  const activeBenefits = benefitsCatalog.filter((b) => b.active !== false);
  host.innerHTML = activeBenefits
    .map((b) => {
      const checked = (offer.benefits || []).includes(b.name) ? "checked" : "";
      return `<label class="offer-benefit-item"><input type="checkbox" value="${escapeHtml(b.name)}" ${checked} /> ${escapeHtml(b.name)}</label>`;
    })
    .join("");
  offerFormDialog.showModal();
}
```

No submit: validar cargo + salário; se não existe `proposal`, `createEmptyProposal` com `status: rascunho`; senão atualizar campos mantendo status (se estava aprovada e editou, manter `aprovada` per spec); `updatedAt`; `renderOfferDialog` + `renderPipeline` + toast.

- [ ] **Step 4: `node --check app.js`**

- [ ] **Step 5: Commit** — só se pedido.

---

### Task 4: Handlers de ações + documento + recusa + timeline

**Files:**
- Modify: `app.js` — `runOfferAction`, listeners, `openOfferDocument`, refuse dialog
- Modify: incluir `offerRefuseDialog` em `closeOverlayDialogs`

**Interfaces:**
- Consumes: actions da Task 3
- Produces:
  - `runOfferAction(candidate, actionId)`
  - `archiveProposalVersion(candidate)` 
  - `openOfferDocument(candidate)`
  - `openOfferRefuseDialog(candidate)`

- [ ] **Step 1: Arquivar / nova versão**

```javascript
function archiveProposalVersion(candidate) {
  ensureCandidateProposal(candidate);
  if (!candidate.proposal) return;
  candidate.proposalVersions.unshift({ ...candidate.proposal, benefits: (candidate.proposal.benefits || []).slice(), sends: (candidate.proposal.sends || []).slice() });
  const nextVersion = (candidate.proposal.version || 1) + 1;
  candidate.proposal = createEmptyProposal(candidate, {
    version: nextVersion,
    role: candidate.proposal.role,
    salary: proposalSalary(candidate.proposal),
    benefits: candidate.proposal.benefits,
    workSchedule: candidate.proposal.workSchedule,
    workModel: candidate.proposal.workModel,
    location: candidate.proposal.location,
    // status rascunho limpo de envios/decisão
  });
}
```

Cuidado: copiar campos **antes** de sobrescrever — usar `const prev = candidate.proposal` então arquivar `prev` e criar novo a partir de `prev`.

- [ ] **Step 2: `runOfferAction`**

Implementar cada `id` da matriz: mutação de status, timestamps, `pushTimelineEvent` tipo `proposta` (e `rejeicao` na recusa), toasts, `renderOfferDialog` + `renderPipeline` + `syncPendenciasNavCount` se existir.

- `gerar_documento` / `visualizar` → `openOfferDocument`
- `recusar` → `openOfferRefuseDialog` (não setar status até confirmar)
- `data-offer-status="visualizada"` → status visualizada
- `data-offer-status="aceita"` → `runOfferAction(..., "aceitar")`
- `data-offer-status="recusada"` → refuse dialog

- [ ] **Step 3: Documento stub**

```javascript
function openOfferDocument(candidate) {
  const offer = candidate?.proposal;
  if (!offer) return;
  if (!offer.documentGeneratedAt) {
    offer.documentGeneratedAt = `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`;
  }
  // HTML window como openCandidateResume com campos da proposta
}
```

- [ ] **Step 4: Wire listeners**

- `#offerActions` click → `data-offer-action`
- Remover/adaptar `#offerSend`, `#offerNew` (Nova proposta → `nova_versao` ou `criar`)
- `#offerRefuseForm` submit
- Atualizar `data-offer-status` handler legado (`vista` → `visualizada`)

- [ ] **Step 5: `node --check app.js`**

---

### Task 5: Pipeline chip + Pendências + CSS + QA

**Files:**
- Modify: `app.js` — pipeline card chip; `buildPendencies` regra `proposta_aprovacao` / `retorno` com novos status; `proposalSalary` em timeline
- Modify: `styles.css`
- Run: `graphify update .`

- [ ] **Step 1: Pipeline**

No card (~onde já existe `offerStatus`), usar:

```javascript
const offer = ensureCandidateProposal(candidate);
refreshProposalExpiry(offer);
// chip: `Proposta · ${offerStatusLabel(offer.status)}`
```

- [ ] **Step 2: Pendências**

`proposta_aprovacao`: status ∈ `aguardando_aprovacao` | `aprovada` (pendente envio) — ou manter `enviada`/`visualizada` como retorno.

Sugestão:
- `aguardando_aprovacao` → type `proposta_aprovacao`, primary `abrir_proposta`
- `enviada`/`visualizada` → type `retorno` (já coberto) ou `proposta_aprovacao` com enviar_retorno

Atualizar checagens `amount` → `proposalSalary`.

Deep-link `openPendingOffer` permanece.

- [ ] **Step 3: CSS**

```css
.offer-actions { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0; }
.offer-summary-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 16px; }
.offer-benefit-item { display: flex; gap: 8px; align-items: center; font-size: 12px; }
.offer-versions { margin-top: 12px; display: grid; gap: 8px; }
.pipeline-card .offer-status { /* já existe — garantir labels novos */ }
```

- [ ] **Step 4: `graphify update .` + QA manual (spec)**

1. Criar → rascunho  
2. Enviar aprovação → Aprovar → Gerar doc → Visualizar  
3. Enviar candidato → Vista → Aceitar  
4. Recusar com motivo → Nova versão  
5. Validade passada → Expirada  
6. Chip no Pipeline  
7. Pendência abre modal  

- [ ] **Step 5: Commit** — só se pedido.

---

## Spec coverage (self-review)

| Spec | Task |
|------|------|
| Cadastro completo | 2, 3 |
| Status machine | 1, 4 |
| Ações | 3, 4 |
| Recusa motivo+obs | 2, 4 |
| Documento stub | 4 |
| Versões | 4 |
| Pipeline chip | 5 |
| Pendências / timeline | 4, 5 |
| Seeds / migração | 1 |
| Out (hub, gestor, auto-hire) | respeitado |

## Placeholder scan

Nenhum TBD. Troca `offerAmount`→`offerSalary` deve atualizar **todos** os listeners (`grep offerAmount`).
