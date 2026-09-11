# Solicitação de Entrevista pelo Gestor — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Permitir que o gestor solicite ao RH uma entrevista (formulário tipado), o RH proponha horário via Pendências, e o gestor confirme — virando entrevista `Agendada` — com toggle de permissão para agendar direto.

**Architecture:** Nova coleção mutável `interviewRequests[]` (irmã de `hiringRequests`). Dialog no `#gestorCandidatePanel` substitui o stub `entrevistar`. RH age em `buildPendencies()` (tipo `entrevista_solicitacao_gestor`). Gestor acompanha/confirma/cancela via `buildGestorPendencies()` (tipo `gestor_entrevista_solicitacao`). Confirmar cria registro via `normalizeInterviewRecord` + `interviews.push`.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-10-solicitacao-entrevista-gestor-design.md`

## Global Constraints

- **Não** novo item de sidebar; **não** embutir `#pendenciasPage` no modo gestor.
- Entrada gestor **só** no `#gestorCandidatePanel` (sem atalho na tabela nesta onda).
- Uma solicitação **aberta** por candidato+vaga (`RH analisando` | `Aguardando agenda`); bloquear duplicata com toast.
- Submit grava status **`RH analisando`** (não ficar parado em `Solicitada`).
- Toggle `gestorPodeAgendarEntrevista` default **false**; solicitar sempre disponível.
- Commits só se o usuário pedir.
- Antes de explorar amplo: `graphify query` / `explain` / `path`. Após editar código: `graphify update .`.
- Cache final: `entrevista-solicitacao-gestor-230` (ou superior) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.
- Datas relativas a `TODAY_KEY` (`"2026-08-27"`).

## Estrutura de arquivos

- Modify: `app.js` — modelo `interviewRequests`, CRUD/helpers, seeds, permissão, dialogs, pendências RH/gestor, CTAs, wire stub `entrevistar`
- Modify: `index.html` — dialogs (solicitação gestor + propor horário RH + confirmar/detalhe), toggle demo, cache
- Modify: `styles.css` — estilos mínimos do dialog (reusar form-field / dialog-actions)
- Reference: `blankHiringRequest` (~L3597), `makePendingItem` / `buildPendencies` / `runPendenciaAction` (~L4618+), `normalizeInterviewRecord` / create interview (~L14641), `GESTOR_DECISION_ACTIONS` / `applyGestorCandidateDecision` (~L19222), `buildGestorPendencies` / `runGestorPendenciaAction`, `#gestorPerm*` toggles

---

### Task 1: Modelo `interviewRequests` + permissão + seeds

**Files:**
- Modify: `app.js` (perto de `hiringRequests` / `companyGestorPermissions`)

**Interfaces:**
- Consumes: `currentManagerName`, `TODAY_KEY`, `candidates`, `myGestorJobs` (para seeds)
- Produces:
  - `companyGestorPermissions.gestorPodeAgendarEntrevista` (boolean, default `false`)
  - `blankInterviewRequest(partial) → interviewRequest`
  - `let interviewRequests = [...]`
  - `findOpenInterviewRequest(candidateId, vacancy?) → item|null`
  - `interviewRequestIsOpen(status) → boolean`

- [ ] **Step 1: Orientar**

Run: `graphify query "hiringRequests companyGestorPermissions blankHiringRequest"`

- [ ] **Step 2: Permissão**

Em `companyGestorPermissions`:

```javascript
gestorPodeAgendarEntrevista: false,
```

- [ ] **Step 3: Factory + helpers**

```javascript
function interviewRequestIsOpen(status) {
  return status === "Solicitada" || status === "RH analisando" || status === "Aguardando agenda";
}

function blankInterviewRequest(partial = {}) {
  const id = partial.id || Date.now();
  return {
    id,
    candidateId: partial.candidateId ?? null,
    jobId: partial.jobId ?? null,
    vacancy: partial.vacancy || "",
    reason: partial.reason || "",
    interviewType: partial.interviewType || "",
    desiredParticipants: partial.desiredParticipants || [],
    suggestedSlots: partial.suggestedSlots || [],
    note: partial.note || "",
    status: partial.status || "RH analisando",
    requester: partial.requester || currentManagerName,
    createdAt: partial.createdAt || TODAY_KEY,
    updatedAt: partial.updatedAt || TODAY_KEY,
    rhProposedSlot: partial.rhProposedSlot || null,
    interviewId: partial.interviewId ?? null,
    cancelReason: partial.cancelReason || "",
  };
}

function findOpenInterviewRequest(candidateId, vacancy) {
  return (
    interviewRequests.find(
      (row) =>
        Number(row.candidateId) === Number(candidateId) &&
        interviewRequestIsOpen(row.status) &&
        (!vacancy || normalize(row.vacancy) === normalize(vacancy)),
    ) || null
  );
}
```

- [ ] **Step 4: Seeds (≥2)**

Incluir pelo menos:

1. Candidato das vagas de Larissa Dias, `status: "RH analisando"`, com motivo/tipo/slots sugeridos.
2. Outro (ou o mesmo se já fechado o anterior — preferir **outro** candidato), `status: "Aguardando agenda"`, com `rhProposedSlot: { date, time, modality, proposedBy: "Camila Monteiro" }`.

IDs estáveis numéricos (ex. 1, 2).

- [ ] **Step 5: `node --check app.js`**

Expected: exit 0.

---

### Task 2: Dialog gestor — solicitar entrevista

**Files:**
- Modify: `index.html` — `<dialog id="gestorInterviewRequestDialog">` + toggle `#gestorPermScheduleInterview`
- Modify: `app.js` — open/submit/wire decisão `entrevistar`
- Modify: `styles.css` — só se necessário (gap no form)

**Interfaces:**
- Consumes: `blankInterviewRequest`, `findOpenInterviewRequest`, `interviewRequests`
- Produces: `openGestorInterviewRequestDialog(candidate)`, `submitGestorInterviewRequest(event)`, CTA “Agendar entrevista” quando permissão on

- [ ] **Step 1: HTML dialog**

Campos (candidato/vaga readonly; demais editáveis):

- Motivo (obrigatório, select ou text)
- Tipo de entrevista (obrigatório: RH / Técnica / Gestor / Painel)
- Participantes desejados (text, CSV ou chips simples)
- Sugestões: 1–3 pares data+hora (inputs)
- Observação (textarea)
- Actions: Cancelar · Solicitar entrevista

Toggle demo junto aos `#gestorPerm*`:

```html
<label class="test-switch">
  <input id="gestorPermScheduleInterview" type="checkbox" />
  <span class="test-switch-track"></span>
  <span>Pode agendar entrevista direto</span>
</label>
```

- [ ] **Step 2: Open + submit**

```javascript
function openGestorInterviewRequestDialog(candidate) {
  if (!candidate) return;
  if (findOpenInterviewRequest(candidate.id, candidate.vacancy)) {
    showToast("Já existe solicitação aberta", candidate.name);
    return;
  }
  // preencher readonly + limpar campos; showModal()
}

function submitGestorInterviewRequest(/* form values */) {
  // validar reason + interviewType
  // push blankInterviewRequest({ status: "RH analisando", ... })
  // history/activity no candidato (opcional curto)
  // fechar dialog; toast; renderGestorCandidatePanel + renderPendenciasPage + renderGestorPortal
}
```

- [ ] **Step 3: Substituir stub**

Em `applyGestorCandidateDecision` / toolbar:

- Ação `entrevistar` (e alias `solicitar_entrevista`) → `openGestorInterviewRequestDialog(candidate)` **em vez de** só setar `gestorWantsInterview`.
- Remover dependência de pendência só em `gestorWantsInterview` **ou** manter flag espelhada ao criar request (preferir: pendência lê `interviewRequests`, não a flag).
- Se `gestorPodeAgendarEntrevista`: botão outline “Agendar entrevista” no painel → `openInterviewEditor` com candidato pré-selecionado (modo create). Se a API atual exigir entrevista existente, usar o mesmo entry point que “Nova entrevista” do RH com candidato preenchido — reutilizar helper existente se houver; senão chamar `openInterviewEditor(null|"new")` e pré-setar picker (inspecionar `openInterviewEditor`).

- [ ] **Step 4: Toggle listener**

Espelhar padrão de `#gestorPermRejectDirect`: atualiza `companyGestorPermissions.gestorPodeAgendarEntrevista` e re-render do painel se aberto.

- [ ] **Step 5: `node --check app.js`**

Expected: exit 0.

---

### Task 3: Pendência RH — propor horário / cancelar

**Files:**
- Modify: `app.js` — `PENDING_TYPES`, `pendingTypeLabel`, `buildPendencies`, `runPendenciaAction`, `pendingActionLabel`
- Modify: `index.html` — `<dialog id="rhInterviewRequestDialog">` (detalhe + propor slot)

**Interfaces:**
- Consumes: `interviewRequests`, `makePendingItem`
- Produces: tipo `entrevista_solicitacao_gestor`; actions `propor_horario_entrevista`, `cancelar_solicitacao_entrevista`, `abrir_solicitacao_entrevista`

- [ ] **Step 1: Tipo + build**

Adicionar `"entrevista_solicitacao_gestor"` a `PENDING_TYPES` e label `"Solicitação de entrevista (gestor)"`.

Em `buildPendencies()`:

```javascript
interviewRequests
  .filter((row) => row.status === "Solicitada" || row.status === "RH analisando")
  .forEach((row) => {
    const candidate = candidates.find((c) => c.id === Number(row.candidateId));
    items.push(
      makePendingItem({
        id: `ir-rh-${row.id}`,
        type: "entrevista_solicitacao_gestor",
        title: `Solicitação de entrevista — ${candidate?.name || row.vacancy}`,
        description: `${row.vacancy || "—"} · ${row.interviewType || "Entrevista"} · ${row.requester}`,
        assignee: CURRENT_RH_USER,
        dueAt: `${pendingAddDays(TODAY_KEY, 1)}T18:00:00`,
        createdAt: row.createdAt,
        subject: { kind: "interviewRequest", id: row.id },
        primaryAction: "propor_horario_entrevista",
        secondaryActions: ["cancelar_solicitacao_entrevista"],
      }),
    );
  });
```

- [ ] **Step 2: Dialog RH + actions**

Dialog mostra resumo do pedido (motivo, tipo, participantes, sugestões do gestor) + campos: data, hora, modalidade, local/link opcional.

```javascript
function proposeInterviewRequestSlot(request, slot) {
  request.rhProposedSlot = { ...slot, proposedBy: CURRENT_RH_USER };
  request.status = "Aguardando agenda";
  request.updatedAt = TODAY_KEY;
}

function cancelInterviewRequest(request, reason, by) {
  request.status = "Cancelada";
  request.cancelReason = reason || "";
  request.updatedAt = TODAY_KEY;
}
```

Em `runPendenciaAction`:

- `propor_horario_entrevista` / `abrir_solicitacao_entrevista` → abrir dialog RH
- `cancelar_solicitacao_entrevista` → cancelar + toast + `renderPendenciasPage`

- [ ] **Step 3: Smoke**

Modo RH → Pendências → chip do novo tipo → seed “RH analisando” visível.

- [ ] **Step 4: `node --check app.js`**

Expected: exit 0.

---

### Task 4: Pendência gestor — acompanhar / confirmar / cancelar

**Files:**
- Modify: `app.js` — `GESTOR_PENDING_TYPE_META`, `buildGestorPendencies`, `gestorPendingActionLabel`, `runGestorPendenciaAction`
- Modify: `index.html` — opcional `#gestorInterviewRequestConfirmDialog` (ou reusar dialog de detalhe)

**Interfaces:**
- Consumes: `interviewRequests`, `proposeInterviewRequestSlot` (já feito), `normalizeInterviewRecord`
- Produces: tipo `gestor_entrevista_solicitacao`; actions `confirmar_horario_entrevista`, `acompanhar_solicitacao_entrevista`, `cancelar_solicitacao_entrevista`

- [ ] **Step 1: Empurrar em `buildGestorPendencies`**

Para `requester === currentManagerName` e status aberto:

| Status | primaryAction | secondaryActions |
|--------|---------------|------------------|
| RH analisando | `acompanhar_solicitacao_entrevista` | `cancelar_solicitacao_entrevista` |
| Aguardando agenda | `confirmar_horario_entrevista` | `cancelar_solicitacao_entrevista` |

Labels: “Acompanhar”, “Confirmar horário”, “Cancelar”.

Group: `entrevistas`. Due: usar primeiro `suggestedSlots[0].date` ou `rhProposedSlot.date` ou `TODAY_KEY+2`.

- [ ] **Step 2: Confirmar → cria `interviews`**

```javascript
function confirmInterviewRequest(request) {
  const candidate = candidates.find((c) => c.id === Number(request.candidateId));
  const slot = request.rhProposedSlot;
  if (!candidate || !slot?.date) {
    showToast("Horário não disponível", "");
    return null;
  }
  const at = `${slot.date}T${slot.time || "10:00"}:00`;
  const nextId = Math.max(...interviews.map((item) => item.id), 600) + 1;
  const created = normalizeInterviewRecord({
    id: nextId,
    name: candidate.name,
    vacancy: request.vacancy || candidate.vacancy,
    candidateId: candidate.id,
    stage: request.interviewType || "Entrevista gestor",
    modality: slot.modality || "Presencial",
    at,
    endAt: "", // ou +1h se houver helper
    interviewers: request.desiredParticipants?.length
      ? request.desiredParticipants
      : [currentManagerName],
    location: slot.location || "",
    link: slot.link || "",
    notes: request.note || "",
    status: "Agendada",
    type: request.interviewType || "Entrevista",
    owner: currentManagerName,
  });
  interviews.push(created);
  request.status = "Agendada";
  request.interviewId = created.id;
  request.updatedAt = TODAY_KEY;
  // history/activity curto no candidato
  refreshInterviewSurfaces?.(created);
  return created;
}
```

Wire em `runGestorPendenciaAction` + labels.

- [ ] **Step 3: Acompanhar**

Abre dialog readonly com status + slot proposto (se houver) + ações contextuais (Confirmar se `Aguardando agenda`, Cancelar se aberto).

- [ ] **Step 4: `node --check app.js`**

Expected: exit 0.

---

### Task 5: Polish UI + cache + aceite

**Files:**
- Modify: `index.html` — cache `?v=entrevista-solicitacao-gestor-230`
- Modify: `styles.css` — ajustes mínimos
- Modify: `app.js` — garantir re-render cruzado (RH ↔ gestor) após cada mutação

**Interfaces:**
- Consumes: Tasks 1–4
- Produces: protótipo jogável ponta a ponta

- [ ] **Step 1: Após mutações**

Chamar, quando existirem: `renderPendenciasPage()`, `syncPendenciasNavCount()`, `renderGestorPortal()`, `syncGestorNavCounts()`, `renderGestorCandidatePanel(candidate)` se painel aberto.

- [ ] **Step 2: Cache**

```html
<link rel="stylesheet" href="./styles.css?v=entrevista-solicitacao-gestor-230" />
<script src="./app.js?v=entrevista-solicitacao-gestor-230"></script>
```

- [ ] **Step 3: `node --check app.js` + `graphify update .`**

- [ ] **Step 4: Aceite manual (spec)**

1. Gestor → painel → Solicitar → aparece Pendência RH  
2. RH → Propor horário → some da RH / aparece “Confirmar” no gestor  
3. Gestor → Confirmar → `Agendada` + entrevista na lista  
4. Cancelar nos dois estados abertos  
5. Segunda solicitação com aberta → toast  
6. Toggle agendar direto on/off  
7. Stub antigo não é mais só flag+toast  

---

## Spec coverage (self-review)

| Spec | Task |
|------|------|
| `interviewRequests` + status | T1 |
| Dialog solicitar (campos) | T2 |
| Entrada só painel; stub → dialog | T2 |
| Toggle agendar direto | T1+T2 |
| Pendência RH propor/cancelar | T3 |
| Pendência gestor acompanhar/confirmar/cancelar | T4 |
| Confirmar → `interviews` Agendada | T4 |
| Seeds + cache + aceite | T1+T5 |
| Sem sidebar nova / sem Realizada UI | Constraints |

**Placeholders:** nenhum.  
**Consistência de nomes:** `entrevista_solicitacao_gestor` (RH), `gestor_entrevista_solicitacao` (gestor), `propor_horario_entrevista`, `confirmar_horario_entrevista`, `cancelar_solicitacao_entrevista`, `acompanhar_solicitacao_entrevista`.
