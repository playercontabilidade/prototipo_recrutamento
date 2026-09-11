# Onda 1 — Vagas, Status, Contratação e Portal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Entregar um fluxo consistente no qual o RH gerencia estados e contratações da vaga, enquanto a listagem, o modal e o portal do candidato reagem à mesma fonte de verdade.

**Architecture:** Manter a aplicação estática e o padrão atual de `app.js`, centralizando as decisões em três helpers de domínio: `jobIsVisibleInPortal(job)`, `jobAcceptsApplications(job)` e `jobCanHire(job)`. Métricas de posições derivam dos resultados contratados, preferindo `jobId`; renderizações e comandos revalidam as regras no momento da ação para evitar estados obsoletos.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `<dialog>`, Node.js apenas para verificação sintática.

**Spec:** `docs/superpowers/specs/2026-09-03-onda-1-vagas-status-portal-design.md`

## Global Constraints

- Demo estruturada para desenvolvimento real, não descartável.
- Sem dependências, build system ou telas novas.
- `archived` é booleano separado de `status`.
- Portal reage na lista, detalhe e candidatura; “Minhas candidaturas” fica fora da Onda 1.
- Cancelar e reprovar exigem motivo; pausar, reabrir, encerrar e arquivar aceitam apenas observação opcional.
- Contratar não redireciona para Resultados.
- CSS e JS terminam com cache key `job-mgmt-116`.
- Verificação automatizada disponível: `node --check app.js`; aceite funcional: roteiro manual de três atos.

## Estrutura de arquivos

- Modify: `app.js` — regras de domínio, métricas, comandos de status/contratação e renderizações do portal.
- Modify: `styles.css` — estados visuais do portal e acabamento responsivo do modal.
- Modify: `index.html` — somente atributos/hosts necessários e cache bust; não criar nova tela.
- Verify: `docs/superpowers/specs/2026-09-03-onda-1-vagas-status-portal-design.md` — fonte dos critérios de aceite.

---

### Task 1: Regras de domínio e identidade estável da vaga

**Files:**
- Modify: `app.js:2020-2120`
- Modify: `app.js:839-910` (seeds de resultados somente se necessário)

**Interfaces:**
- Produces: `jobIsVisibleInPortal(job): boolean`
- Produces: `jobAcceptsApplications(job): boolean`
- Produces: `jobCanHire(job): boolean`
- Produces: `jobHiredCandidates(job): Array<Result>`
- Produces: `jobFilledCount(job): number`
- Produces: `jobRemainingCount(job): number`
- Consumes: `jobs`, `results`, `job.archived`, `job.status`, `job.openings`

- [ ] **Step 1: Registrar os casos red antes da alteração**

No navegador atual, confirmar e anotar estes comportamentos incorretos:

1. Vaga Pausada aparece no portal com CTA “Candidatar-se” habilitado.
2. Vaga Aberta com `filled === openings` ainda permite abrir candidatura.
3. Um resultado com `jobId` e título antigo não entra em Preenchidas.

Expected: os três casos falham antes desta task.

- [ ] **Step 2: Implementar os helpers de domínio**

Adicionar junto às funções de posições:

```js
function jobIsVisibleInPortal(job) {
  return Boolean(job) &&
    !job.archived &&
    ["Aberta", "Pausada"].includes(job.status);
}

function jobAcceptsApplications(job) {
  return jobIsVisibleInPortal(job) &&
    job.status === "Aberta" &&
    jobRemainingCount(job) > 0;
}

function jobCanHire(job) {
  return Boolean(job) &&
    !job.archived &&
    ["Aberta", "Pausada"].includes(job.status) &&
    jobRemainingCount(job) > 0;
}
```

- [ ] **Step 3: Tornar Preenchidas estável por `jobId`**

Substituir a associação exclusiva por título:

```js
function jobHiredCandidates(job) {
  return results.filter((item) =>
    item.status === "contratados" &&
    (item.jobId === job.id ||
      (item.jobId == null && item.vacancy === job.title)),
  );
}
```

Manter `jobFilledCount` e `jobRemainingCount` derivados dessa função. Não restaurar `filledById`.

- [ ] **Step 4: Verificar sintaxe**

Run:

```powershell
node --check app.js
```

Expected: exit code `0`, sem saída.

- [ ] **Step 5: Commit**

```powershell
git add app.js
git commit -m "refactor: centralize job availability rules"
```

---

### Task 2: Contratação e métricas reativas no RH

**Files:**
- Modify: `app.js:4512-4522`
- Modify: `app.js:4668-4745`
- Modify: `app.js:2400-2575`
- Modify: `app.js:5700-5730`

**Interfaces:**
- Consumes: `jobCanHire(job)`, `jobHiredCandidates(job)`, `syncJobMetrics(job)`
- Produces: resultado contratado com `jobId: number`
- Produces: histórico de contratação com `{filled}/{openings}`

- [ ] **Step 1: Registrar o fluxo red**

No pipeline, tentar contratar:

1. candidato em vaga Encerrada/Cancelada/arquivada;
2. candidato em vaga sem posições;
3. candidato válido em vaga Aberta.

Expected antes da alteração: os bloqueios não seguem integralmente a matriz; a contratação válida pode depender do título e não grava `jobId`.

- [ ] **Step 2: Revalidar a vaga no início de `hireCandidate`**

Após localizar a vaga e validar proposta:

```js
if (!job) {
  showToast("Vaga não encontrada", "Não foi possível localizar a vaga deste candidato.");
  return;
}
if (!jobCanHire(job)) {
  const message = jobRemainingCount(job) <= 0
    ? "Todas as posições desta vaga já foram preenchidas."
    : "Esta vaga não permite concluir contratações no status atual.";
  showToast("Contratação indisponível", message);
  return;
}
```

- [ ] **Step 3: Gravar identidade estável e evitar duplicidade por vaga**

Definir duplicidade por e-mail **e vaga**, e incluir `jobId`:

```js
const exists = results.some((item) =>
  item.status === "contratados" &&
  normalize(item.email) === normalize(candidate.email) &&
  (item.jobId === job.id ||
    (item.jobId == null && item.vacancy === job.title)),
);

if (!exists) {
  results.unshift({
    id: Date.now(),
    jobId: job.id,
    name: candidate.name,
    email: candidate.email,
    vacancy: job.title,
    status: "contratados",
    proposal: candidate.proposal.amount,
    workModel: candidate.proposal.workModel,
    contract: candidate.proposal.contract,
  });
}
```

Depois, remover do pipeline, sincronizar, registrar histórico e manter a página atual.

- [ ] **Step 4: Preservar vínculos ao renomear**

No submit de edição:

```js
results.forEach((item) => {
  if (item.jobId == null && item.vacancy === previousTitle) {
    item.vacancy = title;
  }
});
```

Manter a propagação aos candidatos do pipeline. Bloquear `openings < jobFilledCount(job)` antes de alterar o objeto.

- [ ] **Step 5: Verificar o fluxo green**

No mesmo reload:

1. contratar candidato válido;
2. confirmar que o card some e a página continua no pipeline;
3. abrir a vaga e confirmar `filled/openings`, nome na lista de contratados e histórico;
4. confirmar bloqueio ao tentar ultrapassar o total;
5. confirmar que renomear não zera Preenchidas.

Expected: todas as verificações passam.

- [ ] **Step 6: Verificar sintaxe e commit**

```powershell
node --check app.js
git add app.js
git commit -m "feat: sync pipeline hiring with job positions"
```

---

### Task 3: Vitrine e detalhe do portal com estados explícitos

**Files:**
- Modify: `app.js:8480-8500`
- Modify: `app.js:8675-8800`
- Modify: `styles.css` (próximo aos blocos `.candidate-job-*` e `.candidate-detail-*`)

**Interfaces:**
- Consumes: `jobIsVisibleInPortal(job)`, `jobAcceptsApplications(job)`
- Produces: `candidateJobAvailability(job, alreadyApplied): { label, message, disabled, tone }`

- [ ] **Step 1: Criar apresentação única do estado**

Adicionar antes das renderizações públicas:

```js
function candidateJobAvailability(job, alreadyApplied = false) {
  if (alreadyApplied) {
    return { label: "Já candidatado", message: "", disabled: true, tone: "applied" };
  }
  if (job.status === "Pausada") {
    return {
      label: "Candidatar-se",
      message: "Esta vaga está temporariamente pausada.",
      disabled: true,
      tone: "paused",
    };
  }
  if (jobRemainingCount(job) === 0) {
    return {
      label: "Candidatar-se",
      message: "Todas as posições desta vaga já foram preenchidas.",
      disabled: true,
      tone: "filled",
    };
  }
  return { label: "Candidatar-se", message: "", disabled: false, tone: "open" };
}
```

- [ ] **Step 2: Corrigir a vitrine**

Em `publicJobs`, substituir a condição de status por:

```js
if (!jobIsVisibleInPortal(job)) return false;
```

Vaga Aberta sem posições continua na lista; Encerrada, Cancelada, Rascunho, Aguardando aprovação e qualquer arquivada não entram.

- [ ] **Step 3: Renderizar badge e bloquear seleção em lote**

Para cada card:

```js
const availability = candidateJobAvailability(job, Boolean(candidateApplication));
const canSelect = jobAcceptsApplications(job) && !candidateApplication;
```

Renderizar badge `Pausada` ou `Vagas preenchidas` apenas nos tones `paused`/`filled`. Desabilitar o checkbox quando `!canSelect` e remover o id do `candidateSelectedJobs`.

- [ ] **Step 4: Corrigir detalhe e evitar fallback para outra vaga**

Em `renderCandidateJobDetail`, buscar somente pelo id selecionado. Se não existir ou não estiver visível:

```js
if (!job || !jobIsVisibleInPortal(job)) {
  selectedPublicJobId = null;
  setCandidatePortalView("jobs");
  showToast("Vaga indisponível", "Esta vaga não está mais disponível.");
  return;
}
```

Usar `candidateJobAvailability` no CTA:

```js
const availability = candidateJobAvailability(job, already);
```

Aplicar `disabled`, label e mensagem curta abaixo do botão. Não mostrar badge/mensagem de status se `already === true`.

- [ ] **Step 5: Adicionar estilos**

Adicionar classes:

```css
.candidate-job-availability {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0 9px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
}

.candidate-job-availability.is-paused {
  color: #8a5a12;
  background: #fff4d8;
}

.candidate-job-availability.is-filled {
  color: #536070;
  background: var(--surface-muted);
}

.candidate-job-unavailable-copy {
  margin: 8px 0 0;
  color: var(--ink-600);
  font-size: 12px;
  line-height: 1.45;
}

.candidate-apply-btn:disabled {
  cursor: not-allowed;
  opacity: 0.62;
}
```

- [ ] **Step 6: Verificar lista e detalhe**

Expected:

- Pausada: permanece na vitrine, badge + copy, sem candidatura/bulk.
- Aberta 0/N restante: permanece, badge “Vagas preenchidas”, CTA disabled.
- Aberta com posições: comportamento normal.
- Encerrada/Cancelada/arquivada: fora da vitrine.
- Já candidatado: “Já candidatado”, sem copy de pausada/esgotada.

- [ ] **Step 7: Sintaxe e commit**

```powershell
node --check app.js
git add app.js styles.css
git commit -m "feat: reflect job availability in candidate portal"
```

---

### Task 4: Guardas da candidatura simples e em lote

**Files:**
- Modify: `app.js:8650-8675`
- Modify: `app.js:9170-9445`
- Modify: `app.js:9605-9645`

**Interfaces:**
- Consumes: `jobAcceptsApplications(job)`
- Produces: `getCandidateBulkApplyJobs()` e `getCandidateApplyJobs()` contendo apenas vagas elegíveis
- Produces: revalidação atômica em `submitCandidateApplication()`

- [ ] **Step 1: Filtrar seleções obsoletas**

Nos dois getters, manter somente vagas que passam:

```js
job && jobAcceptsApplications(job) && !appliedJobIds.has(job.id)
```

Em `renderCandidateJobList`, remover de `candidateSelectedJobs` toda vaga inelegível.

- [ ] **Step 2: Bloquear abertura da candidatura**

Em `openCandidateApplyView`:

```js
if (!jobAcceptsApplications(job)) {
  const availability = candidateJobAvailability(job, false);
  showToast("Candidatura indisponível", availability.message);
  renderCandidateJobDetail();
  return;
}
```

`openCandidateBulkApplyView` usa somente `getCandidateBulkApplyJobs()` já filtrado.

- [ ] **Step 3: Revalidar no submit**

Antes de gravar qualquer candidatura:

```js
const requestedJobs = candidateApplyJobIds
  .map((jobId) => jobs.find((job) => job.id === jobId))
  .filter(Boolean);
const unavailableJobs = requestedJobs.filter((job) => !jobAcceptsApplications(job));

if (unavailableJobs.length) {
  candidateApplyJobIds = requestedJobs
    .filter(jobAcceptsApplications)
    .map((job) => job.id);
  showToast(
    "Vaga indisponível",
    unavailableJobs.length === 1
      ? `${unavailableJobs[0].title} não aceita mais candidaturas.`
      : `${unavailableJobs.length} vagas não aceitam mais candidaturas.`,
  );
  setCandidatePortalView(candidateApplyJobIds.length ? "apply" : "jobs");
  return;
}
```

Não criar candidaturas parciais silenciosamente no mesmo clique.

- [ ] **Step 4: Verificar corrida de estado**

1. Abrir formulário de uma vaga Aberta.
2. Pelo RH, pausar/encerrar a vaga.
3. Voltar e tentar confirmar.

Expected: nenhuma candidatura criada; toast; retorno ao detalhe/lista adequado.

Repetir com bulk de duas vagas, tornando uma inelegível antes do submit.

Expected: nenhuma candidatura criada no clique; seleção é recalculada e o usuário confirma novamente apenas as elegíveis.

- [ ] **Step 5: Sintaxe e commit**

```powershell
node --check app.js
git add app.js
git commit -m "fix: revalidate candidate applications against job state"
```

---

### Task 5: Modal, status e acabamento integrado

**Files:**
- Modify: `app.js:2120-2575`
- Modify: `app.js:5590-5685`
- Modify: `styles.css:1100-1325`
- Modify: `index.html:1900-2007`

**Interfaces:**
- Consumes: helpers e métricas das Tasks 1–2
- Produces: modal que atualiza no lugar para pausar/reabrir/encerrar e fecha para cancelar/arquivar

- [ ] **Step 1: Conferir o rascunho existente contra a matriz**

Para cada status, comparar `jobPrimaryActions` e `jobMoreActionGroups` com a spec:

- Rascunho: Candidatos, Editar; enviar aprovação/publicar/duplicar.
- Aguardando: Candidatos, Editar; aprovar/reprovar.
- Aberta: Candidatos, Editar, Compartilhar; pausar + gestão + encerrar/cancelar.
- Pausada: Candidatos, Editar, Compartilhar; reabrir/duplicar/encerrar/cancelar.
- Encerrada: Candidatos, Compartilhar, Contratados; reabrir/duplicar/arquivar.
- Cancelada: Candidatos; duplicar/arquivar.
- Arquivada: Desarquivar, Ver histórico.

Remover somente divergências; não criar ações além da spec.

- [ ] **Step 2: Confirmar comportamento dos dialogs**

No submit de `#jobStatusForm`:

- reprovar/cancelar retornam sem motivo;
- pausar/reabrir/encerrar/arquivar aceitam observação vazia;
- pausar/reabrir/encerrar mantêm `#jobDetailDialog` aberto e re-renderizam;
- cancelar/arquivar fecham o detalhe;
- botão de cancelar/reprovar recebe `.is-danger`.

Garantir:

```js
if (!dialog.open) dialog.showModal();
```

- [ ] **Step 3: Conferir layout e acessibilidade**

- Toolbar e menu ficam fora do elemento com scroll.
- `aria-expanded` acompanha o menu.
- clique fora e fechamento do dialog fecham o menu.
- foco visível permanece nos botões.
- em até 720px posições, resumo e histórico ficam em uma coluna.

- [ ] **Step 4: Verificar posições e histórico**

Confirmar:

- barra usa `filled/openings` e fica verde em 100%;
- alerta aparece somente em Aberta com zero restantes;
- contratados ficam ocultos quando vazios;
- ajuste de posições fica oculto em Encerrada, Cancelada ou arquivada;
- não permite salvar total abaixo de Preenchidas.

- [ ] **Step 5: Sintaxe e commit**

```powershell
node --check app.js
git add app.js index.html styles.css
git commit -m "feat: finalize job status management modal"
```

---

### Task 6: Cache, roteiro de aceite e Graphify

**Files:**
- Modify: `index.html:17`
- Modify: `index.html:2753`
- Update generated: `graphify-out/*`

**Interfaces:**
- Consumes: implementação completa das Tasks 1–5
- Produces: protótipo verificável em `job-mgmt-116`

- [ ] **Step 1: Atualizar cache**

```html
<link rel="stylesheet" href="./styles.css?v=job-mgmt-116" />
<script src="./app.js?v=job-mgmt-116"></script>
```

- [ ] **Step 2: Rodar verificações estáticas**

```powershell
node --check app.js
```

Expected: exit code `0`.

No editor, confirmar zero erros de HTML, CSS e JavaScript.

- [ ] **Step 3: Executar Ato 1 — modal**

Abrir vaga Aberta e verificar:

- números e progresso;
- primárias corretas;
- Mais ações agrupado e sem recorte;
- pausar e reabrir atualizam no lugar;
- cancelar exige motivo;
- arquivar remove da lista padrão e aparece com “Mostrar arquivadas”.

- [ ] **Step 4: Executar Ato 2 — contratação**

Contratar até N/N:

- permanece no pipeline;
- listagem mostra N/N;
- modal mostra contratado + histórico;
- alerta oferece “Encerrar agora”;
- nova contratação é bloqueada.

- [ ] **Step 5: Executar Ato 3 — portal**

- Aberta N/N: visível, badge “Vagas preenchidas”, CTA disabled + copy.
- Pausada com vaga: visível, badge “Pausada”, CTA disabled + copy.
- Reaberta com vaga: CTA volta.
- Encerrada/Cancelada/arquivada: fora da vitrine.
- seleção e submit em lote não aceitam vaga inelegível.

- [ ] **Step 6: Atualizar o grafo**

```powershell
graphify update .
```

Se `graphify-out/graph.json` ainda não existir:

```powershell
graphify .
```

Expected: `graphify-out/graph.json` criado/atualizado sem erro.

- [ ] **Step 7: Commit final de integração**

```powershell
git add index.html graphify-out
git commit -m "chore: finalize onda 1 integration"
```

## Definition of Done

- Todos os critérios de `Success Criteria` da spec passam no mesmo reload.
- Nenhum status oferece ação inválida.
- Pipeline, aba Vagas e portal usam regras coerentes.
- Sem regressão em rascunho, aprovação, publicar e reprovar.
- `node --check app.js` passa.
- Cache é `job-mgmt-116`.
- Graphify está atualizado.
