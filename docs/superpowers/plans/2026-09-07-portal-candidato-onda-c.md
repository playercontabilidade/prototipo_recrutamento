# Portal candidato Onda C — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** No portal do candidato, permitir ver/aceitar/recusar proposta e enviar documentos de pré-admissão, reusando os dados do RH.

**Architecture:** Extender `#candidatePortal` com views `offer` e `pre-admission`; nav lateral condicional; mutar `candidate.proposal` e `preAdmissions[]` (mesma fonte do RH). Seeds no Levi para demo sem trocar usuário.

**Tech Stack:** `index.html`, `app.js`, `styles.css` (protótipo estático)

**Spec:** `docs/superpowers/specs/2026-09-07-portal-candidato-onda-c-design.md`

## Global Constraints

- Só `#candidatePortal` — sem item novo na sidebar RH
- Aceite não cria pré-admissão
- Upload = stub (`fileName` + status)
- Nav Proposta só se status ∈ {enviada, visualizada}
- Nav Pré-admissão só se status ∈ {em_andamento, pronta}
- Após mudanças de código: `graphify update .`
- Antes de explorar código: `graphify query` / `explain` (regra do repo)
- Commits só se o usuário pedir

## File map

| File | Responsibility |
|------|----------------|
| `index.html` | Nav items + views `#candidateOfferView` / `#candidatePreAdmissionView` + host de ações |
| `app.js` | Seeds Levi; helpers portal; `setCandidatePortalView`; renders; aceitar/recusar/visualizar; upload stub; home/app-detail CTAs |
| `styles.css` | Layout offer + tabela pré-admissão + mobile |
| Spec/plan docs | Já criados nesta entrega |

---

### Task 1: Seeds + helpers + shell das views

**Files:**
- Modify: `index.html` (nav + sections)
- Modify: `app.js` (seed Levi proposal + preAdmission; helpers; view routing)

**Interfaces:**
- Produces: `getPortalPipelineCandidate()`, `getPortalActiveProposal()`, `getPortalPreAdmission()`, `candidatePortalHasActiveOffer()`, `candidatePortalHasActivePreAdmission()`
- Produces: view ids `offer` | `pre-admission` em `setCandidatePortalView`

- [ ] **Step 1: Orientar**

```bash
graphify query "candidatePortal setCandidatePortalView proposal preAdmission"
```

- [ ] **Step 2: HTML — nav + views**

Em `#candidateSidebar` / nav do portal, após apps (ou junto às demais entradas), adicionar:

```html
<button type="button" class="nav-item" data-candidate-view="offer" id="candidateOfferNav" hidden>
  <span>Proposta</span>
  <span class="nav-count" id="candidateOfferNavCount" hidden>1</span>
</button>
<button type="button" class="nav-item" data-candidate-view="pre-admission" id="candidatePreAdmissionNav" hidden>
  <span>Pré-admissão</span>
  <span class="nav-count" id="candidatePreAdmissionNavCount" hidden>1</span>
</button>
```

No main do portal, adicionar sections:

```html
<section class="candidate-view" id="candidateOfferView" hidden>
  <div id="candidateOfferBody"></div>
</section>
<section class="candidate-view" id="candidatePreAdmissionView" hidden>
  <div id="candidatePreAdmissionBody"></div>
</section>
```

- [ ] **Step 3: Seed Levi**

Garantir candidato Levi (`email: leviluzbr@gmail.com`) com:

1. `proposal` status `enviada` (campos mínimos como Maria: salary, benefits, workModel, validUntil, documentGeneratedAt, sends)
2. `stage` alinhado à candidatura portal job 10 (`Coordenador(a) de RH`) **ou** `vacancy` + `jobId` coerente com a application do portal
3. Entrada em `preAdmissions` com `candidateId` do Levi, `status: "em_andamento"`, checklist mista Candidato/RH (copiar estrutura da Maria, nomes do Levi)

Se o push condicional do Levi (`if (!candidates.some(...))`) conflitar, aplicar `Object.assign` / ensure após o push para anexar proposal sempre.

- [ ] **Step 4: Helpers**

```js
function getPortalPipelineCandidate() {
  return findCandidateByEmail(candidatePortalUser.email);
}

function getPortalActiveProposal() {
  const candidate = getPortalPipelineCandidate();
  if (!candidate) return null;
  ensureCandidateProposal(candidate);
  const offer = candidate.proposal;
  if (!offer) return null;
  refreshProposalExpiry(offer);
  return offer;
}

function candidatePortalHasActiveOffer() {
  const status = getPortalActiveProposal()?.status;
  return status === "enviada" || status === "visualizada";
}

function getPortalPreAdmission() {
  const candidate = getPortalPipelineCandidate();
  if (!candidate) return null;
  return (
    preAdmissions.find(
      (item) =>
        item.candidateId === candidate.id &&
        (item.status === "em_andamento" || item.status === "pronta"),
    ) || null
  );
}

function candidatePortalHasActivePreAdmission() {
  return Boolean(getPortalPreAdmission());
}
```

- [ ] **Step 5: Wiring em `setCandidatePortalView`**

Incluir cases `offer` / `pre-admission` que chamam `renderCandidateOffer()` / `renderCandidatePreAdmission()` (stubs que preenchem “Carregando…” até Task 2/3).

Atualizar visibilidade da nav:

```js
function syncCandidateOfferPreAdNav() {
  const offerNav = document.querySelector("#candidateOfferNav");
  const preNav = document.querySelector("#candidatePreAdmissionNav");
  if (offerNav) offerNav.hidden = !candidatePortalHasActiveOffer();
  if (preNav) preNav.hidden = !candidatePortalHasActivePreAdmission();
}
```

Chamar `syncCandidateOfferPreAdNav` em `openCandidatePortal` e após mutações de proposta/pré-admissão.

- [ ] **Step 6: Smoke**

Ctrl+F5 → portal → nav mostra Proposta e Pré-admissão (com seeds). Abrir cada view (mesmo vazia/stub).

---

### Task 2: View proposta — visualizar, aceitar, recusar

**Files:**
- Modify: `app.js` (`renderCandidateOffer`, mark viewed, accept, refuse)
- Modify: `styles.css` (layout offer)
- Optionally reuse: `#offerRefuseDialog` / handlers existentes

**Interfaces:**
- Consumes: helpers Task 1; `offerDetailsMarkup`, `runOfferAction` / lógica de `aceitar`/`recusar`, `offerStatusLabel`
- Produces: `renderCandidateOffer()`, `markPortalOfferViewed()`, handlers de botão

- [ ] **Step 1: `markPortalOfferViewed`**

Na primeira render/entrada da view, se `status === "enviada"`:

```js
function markPortalOfferViewed() {
  const candidate = getPortalPipelineCandidate();
  const offer = getPortalActiveProposal();
  if (!candidate || !offer || offer.status !== "enviada") return;
  offer.status = "visualizada";
  offer.viewedAt = offer.viewedAt || `${TODAY_KEY}T12:00:00`;
  candidate.history.unshift(["Proposta visualizada", `${candidatePortalUser.name} · agora`]);
  // espelhar toast/timeline leve se o RH já faz no botão simular vista
}
```

- [ ] **Step 2: `renderCandidateOffer`**

Montar `#candidateOfferBody` com:

- título + chip status (`offerStatusLabel`)
- `offerDetailsMarkup(offer)`
- botão Ver documento se `documentGeneratedAt` (abrir stub existente ou `window.open`/dialog de preview já usado no RH)
- se `enviada`|`visualizada`: botões Aceitar / Recusar
- se estado final: mensagem só leitura + `refusalReason` se houver

- [ ] **Step 3: Aceitar**

Reusar caminho RH: localizar candidato e executar a mesma mutação de `runOfferAction(candidate, "aceitar")` **ou** duplicar o mínimo:

```js
offer.status = "aceita";
offer.decidedAt = `${TODAY_KEY}T12:00:00`;
```

Não chamar `startPreAdmission`. Atualizar home/nav (`syncCandidateOfferPreAdNav`, `renderCandidateHome` se necessário).

- [ ] **Step 4: Recusar**

Abrir `#offerRefuseDialog` com contexto do candidato portal, ou prompt/dialog portal que seta `refusalReason` e chama lógica de recusa existente. Garantir que o pipeline/RH veem `recusada`.

- [ ] **Step 5: CSS**

Estilos `.candidate-offer-*` alinhados ao portal (sem cards desnecessários; grid de resumo como offer RH). Mobile: botões empilhados.

- [ ] **Step 6: Smoke**

Abrir Proposta → status vira visualizada no RH (`#offerDialog`). Aceitar em um reload fresco / Recusar com motivo. Nav some após decisão.

---

### Task 3: View pré-admissão + upload stub

**Files:**
- Modify: `app.js` (`renderCandidatePreAdmission`, upload handler)
- Modify: `styles.css` (tabela checklist)
- Modify: `index.html` se precisar `<input type="file" hidden id="candidatePreAdFileInput">`

**Interfaces:**
- Consumes: `getPortalPreAdmission()`
- Produces: `renderCandidatePreAdmission()`, `submitPortalPreAdDocument(itemId, fileName)`

- [ ] **Step 1: Render tabela**

Colunas: Documento | Responsável | Prazo | Status | Arquivo | Ação  
Linhas de `pre.checklist`.  
Ação Enviar só se `owner === "Candidato"` && status ∈ {Pendente, Rejeitado} (opcional: Enviado).  
Itens RH: ação "—".

Cabeçalho com role, company, plannedDate, status do preAdmission.  
Lista `pendencies` abertas abaixo.

- [ ] **Step 2: Upload stub**

```js
function submitPortalPreAdDocument(itemId, fileName) {
  const pre = getPortalPreAdmission();
  const item = pre?.checklist?.find((row) => row.id === itemId);
  if (!item || item.owner !== "Candidato") return;
  item.fileName = fileName || `documento-${itemId}.pdf`;
  item.status = "Enviado";
  renderCandidatePreAdmission();
  showToast("Documento enviado", item.name);
}
```

Wire input file + `data-pread-item` no botão Enviar.

- [ ] **Step 3: Smoke RH**

Enviar doc no portal → abrir Resultados → Pré-admissão do Levi → item `Enviado` com `fileName`.

---

### Task 4: Home + app-detail + polish mobile

**Files:**
- Modify: `app.js` (`renderCandidateHome`, `renderCandidateAppDetail`, next-actions)
- Modify: `styles.css` se faltar mobile

**Interfaces:**
- Consumes: helpers Task 1–3
- Produces: CTAs `data-candidate-next-action="offer"|"pre-admission"`

- [ ] **Step 1: Home pendências/ações**

Se `candidatePortalHasActiveOffer()`, incluir item “Responder proposta”.  
Se `candidatePortalHasActivePreAdmission()`, incluir “Enviar documentos”.

- [ ] **Step 2: `app-detail`**

Se a candidatura corresponder ao job da proposal/preAdmission do Levi, bloco com status + botão Abrir.

- [ ] **Step 3: `handleCandidateNextAction`**

Já redireciona por `data-candidate-next-action` — garantir que `offer` e `pre-admission` estão no switch de views.

- [ ] **Step 4: Smoke ponta a ponta**

1. Portal home → CTA proposta → aceitar  
2. (Com seed pré-admissão) home → documentos → enviar  
3. Mobile (~375px): nav, offer, pre-admission legíveis  
4. `graphify update .`

---

## Spec coverage check

| Spec | Task |
|------|------|
| Views dedicadas + nav C | 1 |
| Proposta resumo/aceitar/recusar/visualizada | 2 |
| Pré-admissão tabela + upload candidato | 3 |
| Home / app-detail / mobile | 4 |
| Seeds Levi | 1 |
| Out: sem criar pré-ad no aceite | 2 (explícito) |
