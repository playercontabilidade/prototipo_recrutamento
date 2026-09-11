# Fit Cultural — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prototipar configuração, aplicação e análise completa do Fit Cultural (perfil global, banco, modelos, envios, resultado, comparar e reaproveitar).

**Architecture:** Nova página `#fitCulturalPage` em Seleção com abas Perfil · Banco · Modelos · Aplicados. Dados em memória (`culturalProfile`, `fitQuestions[]`, `fitModels[]`, `fitAssignments[]`). Modal de detalhe espelha o padrão de Testes. Dossiê e portal consomem assignments reais; o stub `candidate.fitCultural` (score digitado) deixa de ser o caminho principal.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `<dialog>`, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-04-fit-cultural-design.md`

## Global Constraints

- Nav própria **Fit Cultural** (não misturar com catálogo de Testes).
- Perfil cultural **global** da empresa; modelos só escolhem perguntas/ordem/vagas/validade.
- Abas: Perfil · Banco · Modelos · Aplicados.
- MVP inclui Comparar candidatos e Reaproveitar resultado válido.
- Modal: não duplicar nas ações o que as abas já fazem (Respostas / Resultado).
- Commits só se o usuário pedir.
- Após editar código: `graphify update .`
- Cache final: `fit-cultural-160` (ou bump único na última task) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.

## Estrutura de arquivos

- Modify: `index.html` — nav, `#fitCulturalPage` (4 painéis), `#fitAssignmentDetailDialog`, `#fitCompareDialog`, dossiê Fit, portal Fit, cache.
- Modify: `app.js` — seeds, helpers, renders, ações, `showPage`/`pageByHash`, dossiê, portal; remover/neutralizar fluxo “digitar %”.
- Modify: `styles.css` — página Fit, pilares, banco, modelos, aplicados, modal, comparar, dossiê.
- Reference: padrão Testes (`#tecnicosPage` hub tabs, `#candidateTestDetailDialog`, `assignmentActionsFor`), stub Fit (`candidateFitDefaults` ~L607, `renderCandidateDetails` fit block ~L6947, ação `Aplicar Fit Cultural` ~L7862).

---

### Task 1: Modelo de dados + seeds + cálculo de aderência

**Files:**
- Modify: `app.js` (após bloco de testes / assignments)

**Interfaces:**
- Produces:
  - `culturalProfile = { pillars: [...] }`
  - `fitQuestions[]`, `fitModels[]`, `fitAssignments[]`
  - `nextFitQuestionId`, `nextFitModelId`, `nextFitAssignmentId`, `nextFitPillarId`
  - `fitImportanceLabel(v)`, `fitQuestionTypeLabel(v)`, `fitStatusClass(status)`
  - `getFitQuestionById(id)`, `getFitModelById(id)`, `getFitAssignmentById(id)`
  - `fitAssignmentsForCandidate(candidate)`
  - `computeFitAdherence(assignment)` → mutates `adherencePct`, `pillarScores`, `strengths`, `gaps`
  - `refreshFitAssignmentStatuses()`
  - `findReusableFitAssignment(candidateId, modelId)` → assignment Concluído dentro da validade ou `null`

- [ ] **Step 1: Seeds de perfil (4 pilares)**

```javascript
let nextFitPillarId = 5;
const culturalProfile = {
  pillars: [
    { id: 1, name: "Colaboração", description: "Trabalha bem em equipe e compartilha conhecimento.", weightPct: 30, importance: "alta" },
    { id: 2, name: "Adaptabilidade", description: "Lida bem com mudança e ambiguidade.", weightPct: 25, importance: "alta" },
    { id: 3, name: "Comunicação", description: "Clareza e escuta ativa.", weightPct: 25, importance: "media" },
    { id: 4, name: "Ownership", description: "Assume responsabilidade pelos resultados.", weightPct: 20, importance: "media" },
  ],
};
```

- [ ] **Step 2: Seeds de banco (~8 perguntas) + 2 modelos**

- Perguntas Likert/single ligadas aos pilares, com `options[].score` 0–4 ou 0–100 consistentes.
- Modelos: “Fit Cultural — núcleo” (todas as perguntas) e “Fit Cultural — enxuto” (subconjunto); `validityDays: 90`; vagas seed (ex. títulos existentes em `jobs`).

- [ ] **Step 3: Seeds de `fitAssignments` (status variados)**

Incluir ≥1 Não iniciado, ≥1 Em andamento, ≥2 Concluído (candidatos diferentes, mesmo modelo) para comparar; um Concluído recente para reaproveitar.

- [ ] **Step 4: Helpers de cálculo**

```javascript
function computeFitAdherence(assignment) {
  const model = getFitModelById(assignment.modelId);
  const pillars = culturalProfile.pillars;
  // Para cada pilar: média ponderada das perguntas daquele pilar usando options.score e question.weight
  // adherencePct = soma(pillarPct * weightPct) / 100
  // strengths = pilares com pct >= 75; gaps = pilares com pct < 60 (ou top/bottom)
  assignment.pillarScores = /* ... */;
  assignment.adherencePct = /* ... */;
  assignment.strengths = /* ... */;
  assignment.gaps = /* ... */;
  return assignment;
}

function findReusableFitAssignment(candidateId, modelId) {
  const model = getFitModelById(modelId);
  if (!model) return null;
  const validMs = (model.validityDays || 90) * 86400000;
  const now = new Date(`${TODAY_KEY}T18:00:00`).getTime();
  return (
    fitAssignments
      .filter(
        (a) =>
          a.candidateId === candidateId &&
          a.modelId === modelId &&
          a.status === "Concluído" &&
          a.completedAt &&
          now - new Date(a.completedAt).getTime() <= validMs,
      )
      .sort((a, b) => String(b.completedAt).localeCompare(String(a.completedAt)))[0] || null
  );
}
```

- [ ] **Step 5: Verificar**

Run: `node --check app.js`  
Expected: exit 0

---

### Task 2: Nav + casca da página (4 abas)

**Files:**
- Modify: `index.html` (nav Seleção, `#fitCulturalPage`)
- Modify: `app.js` (`pageNames`, `pageByHash`, `hashByPage`, `showPage`, `fitHubTab`)
- Modify: `styles.css` (layout básico da página)

**Interfaces:**
- Produces: `fitHubTab` (`perfil`|`banco`|`modelos`|`aplicados`), `setFitHubTab(tab)`, `syncFitHubTab()`, `renderFitCulturalPage()`

- [ ] **Step 1: Nav**

Após o item Testes:

```html
<a href="#fit-cultural" class="nav-item" data-page="fit-cultural" title="Fit Cultural">
  <span class="nav-icon" aria-hidden="true"><svg class="ui-icon"><use href="#i-users" /></svg></span>
  <span class="nav-label">Fit Cultural</span>
  <span class="nav-count" id="fitNavCount">0</span>
</a>
```

- [ ] **Step 2: Página com tabs**

`#fitCulturalPage` hidden, header “Fit Cultural”, `nav.talent-tabs` com `data-fit-hub-tab`, painéis `#fitPerfilPanel` `#fitBancoPanel` `#fitModelosPanel` `#fitAplicadosPanel` (conteúdo placeholder mínimo).

- [ ] **Step 3: Roteamento**

```javascript
pageNames["fit-cultural"] = "Fit Cultural";
pageByHash["fit-cultural"] = "fit-cultural";
hashByPage["fit-cultural"] = "fit-cultural";
// showPage: fitCulturalPage.hidden = page !== "fit-cultural";
// if (page === "fit-cultural") renderFitCulturalPage();
```

- [ ] **Step 4: Verificar manual**

Ctrl+F5 → nav Fit Cultural → 4 abas alternam painéis.  
`node --check app.js`

---

### Task 3: Aba Perfil (pilares)

**Files:**
- Modify: `index.html` (`#fitPerfilPanel`)
- Modify: `app.js` (`renderFitPerfil`, save/add/remove pillar)
- Modify: `styles.css`

**Interfaces:**
- Consumes: `culturalProfile`
- Produces: `renderFitPerfil()`, `saveFitPillarFromForm()`, `addFitPillar()`, `removeFitPillar(id)`

- [ ] **Step 1: UI lista editável**

Cards/linhas: nome, descrição, peso %, importância (select), botões salvar/remover; CTA “Novo pilar”; badge “Soma dos pesos: X%” com classe erro se ≠ 100.

- [ ] **Step 2: Wire events**

Delegação em `#fitPerfilPanel` para save/add/remove; toast se peso inválido.

- [ ] **Step 3: Verificar**

Editar peso → soma atualiza; adicionar pilar → aparece na lista.

---

### Task 4: Aba Banco (perguntas)

**Files:**
- Modify: `index.html` (`#fitBancoPanel` + editor simples / dialog se necessário)
- Modify: `app.js` (`renderFitBanco`, CRUD pergunta)
- Modify: `styles.css`

**Interfaces:**
- Consumes: `fitQuestions`, `culturalProfile.pillars`
- Produces: `renderFitBanco()`, `openFitQuestionEditor(id?)`, `saveFitQuestion()`, `duplicateFitQuestion(id)`

- [ ] **Step 1: Lista**

Colunas/cards: pergunta, pilar, tipo, peso, obrigatória, ativa; ações Editar / Duplicar.

- [ ] **Step 2: Editor**

Campos da spec; alternativas dinâmicas (label + score); tipo `likert|single|multiple`.

- [ ] **Step 3: Verificar**

Criar pergunta → conta da aba sobe; editar pilar/tipo → lista reflete.

---

### Task 5: Aba Modelos (criar / duplicar / editar)

**Files:**
- Modify: `index.html` (`#fitModelosPanel`, view lista + editor `#fitModelEditorView` opcional na mesma página)
- Modify: `app.js` (`renderFitModelos`, `openFitModelEditor`, `saveFitModel`, `duplicateFitModel`)
- Modify: `styles.css`

**Interfaces:**
- Consumes: `fitModels`, `fitQuestions`, `jobs` (títulos)
- Produces: `renderFitModelos()`, `openFitModelEditor(id, { duplicate? })`, `saveFitModel()`, `applyFitModelToCandidate(modelId, candidate)` (stub até Task 6 se preferir só UI aqui)

- [ ] **Step 1: Lista de modelos**

Nome, nº perguntas, validade, vagas vinculadas, ativo; ações Editar / Duplicar / Aplicar (Aplicar abre seletor de candidato ou exige dossiê aberto — preferir dossiê + toast “Abra um candidato” se nenhum selecionado; na Task 6 completar).

- [ ] **Step 2: Editor**

Nome; validade dias; multi-select vagas; checklist ordenável de perguntas do banco (botões subir/descer); salvar.

- [ ] **Step 3: Duplicar**

Copia registro com novo id e sufixo “ (cópia)”.

- [ ] **Step 4: Verificar**

Duplicar modelo → dois cards; editar ordem → persiste ao reabrir.

---

### Task 6: Aba Aplicados + aplicar / reenviar

**Files:**
- Modify: `index.html` (`#fitAplicadosPanel` tabela + filtros)
- Modify: `app.js` (lista, `createFitAssignment`, `resendFitAssignment`, integração ação dossiê parcial)
- Modify: `styles.css`

**Interfaces:**
- Consumes: `fitAssignments`, `fitModels`, `candidates`
- Produces: `renderFitAplicados()`, `createFitAssignment({ candidateId, modelId, reuse? })`, `resendFitAssignment(id)`, `openFitAssignmentDetail(id)` (stub modal até Task 7)

- [ ] **Step 1: Tabela Aplicados**

Colunas: Modelo · Candidato · Vaga · Envio · Prazo · Status · Aderência · Ações (abrir).

- [ ] **Step 2: `createFitAssignment`**

```javascript
function createFitAssignment({ candidateId, modelId, reuseFromId = null }) {
  const model = getFitModelById(modelId);
  const candidate = candidates.find((c) => c.id === candidateId);
  if (!model || !candidate) return null;
  if (!culturalProfile.pillars.length) {
    showToast("Perfil incompleto", "Cadastre pilares antes de aplicar.");
    return null;
  }
  if (reuseFromId) {
    const src = getFitAssignmentById(reuseFromId);
    // clona scores/answers/status Concluído, marca reusedFromId
  }
  const id = nextFitAssignmentId++;
  const row = {
    id,
    candidateId,
    vacancy: candidate.vacancy,
    modelId,
    sentAt: `${TODAY_KEY}T09:00:00`,
    dueAt: /* TODAY + validityDays */,
    status: reuseFromId ? "Concluído" : "Não iniciado",
    link: `https://portalrh.local/fit/${id}`,
    answers: reuseFromId ? [...(getFitAssignmentById(reuseFromId).answers || [])] : [],
    adherencePct: null,
    pillarScores: [],
    strengths: [],
    gaps: [],
    reusedFromId,
    completedAt: reuseFromId ? `${TODAY_KEY}T10:00:00` : null,
  };
  if (reuseFromId) computeFitAdherence(row);
  fitAssignments.unshift(row);
  return row;
}
```

- [ ] **Step 3: Wire filtros status + busca**

- [ ] **Step 4: Verificar**

Aplicar (via botão temporário ou dossiê) → linha Não iniciado; Reenviar em Expirado → Não iniciado + novo link.

---

### Task 7: Modal de detalhe (Respostas / Resultado)

**Files:**
- Modify: `index.html` (`#fitAssignmentDetailDialog` no padrão interview/test detail)
- Modify: `app.js` (`openFitAssignmentDetail`, `fitAssignmentActionsFor`, `runFitAssignmentAction`)
- Modify: `styles.css`

**Interfaces:**
- Consumes: assignment + model + questions + profile
- Produces: `openFitAssignmentDetail(id, panel?)`, `fitAssignmentActionsFor(a)`, `runFitAssignmentAction(action)`

- [ ] **Step 1: Markup do modal**

Header (eyebrow Fit, título modelo, meta candidato/vaga, badges status/aderência); metrics envio/prazo/link; tabs Respostas | Resultado; footer toolbar.

- [ ] **Step 2: Ações**

Primary: Reenviar (se Não iniciado/Expirado) ou nenhuma se Concluído.  
Secondary: Copiar link.  
Mais ações: Alterar prazo (dialog simples reuso), Cancelar, Gerar PDF mock opcional — **sem** “Visualizar respostas/resultado”.

- [ ] **Step 3: Painel Resultado**

Aderência geral; barras por pilar (esperado = weight visual vs candidato); listas pontos fortes / divergências.

- [ ] **Step 4: Verificar**

Abrir Concluído → Resultado preenchido; menu sem itens duplicados das abas.

---

### Task 8: Dossiê — substituir stub

**Files:**
- Modify: `app.js` (`renderCandidateDetails` bloco Fit; ação Aplicar Fit Cultural)
- Modify: `index.html` (CTA dossiê se necessário)

**Interfaces:**
- Consumes: `fitAssignmentsForCandidate`, `fitModels`
- Produces: render lista no `#candidateFitContent`; `#candidateFit` mostra última aderência ou “—”

- [ ] **Step 1: Render dossiê**

Lista de envios do candidato (status, %, modelo) + botão abrir detalhe; CTA Aplicar (escolhe modelo ativo; se `findReusableFitAssignment` → confirmar reaproveitar).

- [ ] **Step 2: Remover caminho principal de digitar %**

Na ação `Aplicar Fit Cultural` / `aplicar-fit`: abrir seletor de modelo (não input numérico). Manter `candidate.fitCultural` sincronizado com último `adherencePct` para cards legados que ainda leem o campo.

```javascript
function syncCandidateFitScore(candidate) {
  const latest = fitAssignmentsForCandidate(candidate)
    .filter((a) => a.status === "Concluído" && a.adherencePct != null)
    .sort((a, b) => String(b.completedAt || "").localeCompare(String(a.completedAt || "")))[0];
  candidate.fitCultural = latest ? latest.adherencePct : candidate.fitCultural ?? null;
}
```

- [ ] **Step 3: Verificar**

Dossiê mostra envios seed; Aplicar cria assignment; header Fit atualiza após concluir.

---

### Task 9: Comparar + Reaproveitar

**Files:**
- Modify: `index.html` (`#fitCompareDialog`)
- Modify: `app.js` (`openFitCompare`, seleção multipla em Aplicados)
- Modify: `styles.css`

**Interfaces:**
- Produces: `openFitCompare(assignmentIds[])`, UI checkbox na tabela Aplicados + botão “Comparar selecionados”

- [ ] **Step 1: Seleção**

Checkboxes nas linhas Concluído; botão habilitado com 2–3 selecionados; toast se fora da faixa.

- [ ] **Step 2: Dialog comparar**

Tabela: candidato | aderência | uma coluna por pilar.

- [ ] **Step 3: Reaproveitar no fluxo Aplicar**

Se `findReusableFitAssignment` → dialog “Reaproveitar resultado válido?” (Sim / Novo envio).

- [ ] **Step 4: Verificar**

Comparar 2 seeds Concluído; reaplicar mesmo modelo → opção reaproveitar gera Concluído com `reusedFromId`.

---

### Task 10: Portal + cache + aceite

**Files:**
- Modify: `index.html` / `app.js` (portal: item Fit na jornada do candidato)
- Modify: `index.html` cache `?v=fit-cultural-160`
- Modify: `styles.css` se preciso

**Interfaces:**
- Consome assignment `Não iniciado`/`Em andamento` do candidato logado no portal
- Atualiza status e chama `computeFitAdherence` ao concluir

- [ ] **Step 1: Portal**

Na área de testes/avaliações do portal, listar Fit pendente; tela de perguntas (uma a uma ou lista); Ao concluir → `Concluído` + cálculo.

- [ ] **Step 2: `refreshFitAssignmentStatuses`**

Expirar por `dueAt` como nos testes.

- [ ] **Step 3: Cache bump + `graphify update .`**

- [ ] **Step 4: Aceite manual (spec)**

1. Nav + 4 abas com seeds  
2. Editar pilar; criar pergunta; duplicar modelo  
3. Aplicar no dossiê → Aplicados  
4. Portal responde → Concluído com %/pilares  
5. Modal resultado (fortes/gaps/esperado × candidato)  
6. Comparar 2 candidatos  
7. Reaproveitar  
8. Stub “digitar %” não é o fluxo principal  

Run: `node --check app.js`  
Expected: exit 0

---

## Spec coverage (self-review)

| Spec | Task |
|------|------|
| Nav própria | 2 |
| Perfil global + pesos | 1, 3 |
| Banco CRUD | 1, 4 |
| Modelos CRUD/duplicar/vagas/validade | 1, 5 |
| Aplicados + status + % + pilares | 1, 6, 7 |
| Ações aplicar/reenviar/visualizar | 6, 7, 8 |
| Comparar / Reaproveitar | 9 |
| Resultado completo | 7 |
| Dossiê | 8 |
| Portal | 10 |
| Modal sem duplicar abas | 7 |

## Placeholder scan

Nenhum TBD. Commits só sob pedido do usuário (steps de commit omitidos de propósito).
