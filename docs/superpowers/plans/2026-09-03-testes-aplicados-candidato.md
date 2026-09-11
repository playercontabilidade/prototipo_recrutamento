# Testes Aplicados ao Candidato — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Padronizar gestão de testes aplicados (catálogo tipado + hub + dossiê + modal com ciclo completo de status/ações).

**Architecture:** `tests[]` ganha `type`. Nova lista canônica `candidateTestAssignments[]` substitui `candidateTestMap` para o ciclo de vida. Hub `#appliedTestsPage` e dossiê compartilham render/ações; `#candidateTestDetailDialog` cobre respostas, avaliação escrita, PDF e resultado. Portal reutiliza assignments.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `<dialog>`, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-03-testes-aplicados-candidato-design.md`

## Global Constraints

- Catálogo e aplicados **separados** (nav: Técnicos = catálogo; novo item Testes aplicados).
- Tipos: `technical` | `behavioral` | `competency` — abas no hub e no dossiê.
- Status: Não enviado | Enviado | Não iniciado | Em andamento | Concluído | Expirado | Avaliado | Cancelado.
- PDF e avaliação em modo demonstrativo (sem backend).
- Commits só se o usuário pedir.
- Após editar código: `graphify update .`
- Cache final: `testes-aplicados-150` (ou bump único na última task) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual do aceite da spec.

## Estrutura de arquivos

- Modify: `index.html` — nav hub, `#appliedTestsPage`, dossiê tabs, `#candidateTestDetailDialog` (+ dialogs prazo/aplicar se preciso), cache.
- Modify: `app.js` — model, helpers, render hub/dossiê/modal, actions, portal bridge, catalog type.
- Modify: `styles.css` — hub, tabs, assignment rows, detail dialog.
- Reference: `tests[]` (~L1297), `candidateTestMap` (~L1370), `testsForCandidate` (~L6090), `renderCandidateDetails` tests block (~L6193), `goToPage` / `pages`, aplicar-teste action (~L7158).

---

### Task 1: Modelo de dados + seeds tipados

**Files:**
- Modify: `app.js` (`tests[]`, `candidateTestMap` → `candidateTestAssignments`)

**Interfaces:**
- Produces: `TEST_TYPES`, `testTypeLabel(type)`, `normalizeTestRecord(test)`, `candidateTestAssignments[]`, `getAssignmentById(id)`, `assignmentsForCandidate(candidate, type?)`, `getCatalogTestsByType(type)`, `nextAssignmentId`

- [ ] **Step 1: Constantes e normalização de catálogo**

```javascript
const TEST_TYPES = [
  { id: "technical", label: "Técnico" },
  { id: "behavioral", label: "Comportamental" },
  { id: "competency", label: "Competências" },
];
function testTypeLabel(type) {
  return TEST_TYPES.find((t) => t.id === type)?.label || type || "Técnico";
}
function normalizeTestRecord(test) {
  if (!test.type) test.type = test.title?.toLowerCase().includes("comportamental") ? "behavioral" : "technical";
  if (test.active == null) test.active = true;
  return test;
}
tests.forEach(normalizeTestRecord);
```

- [ ] **Step 2: Tipar seeds existentes + adicionar 1 de competências**

- id 1 → `type: "technical"`
- id 2 → `type: "behavioral"`
- Novo id 3: título “Avaliação por competências — núcleo”, `type: "competency"`, 2–3 perguntas (single + text), `minScore: 70`, `active: true`
- `nextTestId = 4`, `nextQuestionId` atualizado

- [ ] **Step 3: Criar `candidateTestAssignments` a partir do map antigo**

Migrar `candidateTestMap` para array de assignments com campos da spec (`sentAt`, `dueAt`, `status` mapeado: Pendente→Enviado, Concluído→Concluído/Avaliado se score, etc.), `link`, `answers: []`, `writtenScores: []`, `type` do catálogo.

- [ ] **Step 4: Helpers + adaptar `testsForCandidate`**

```javascript
function assignmentsForCandidate(candidate, type) {
  return candidateTestAssignments.filter(
    (a) => a.candidateId === candidate.id && a.status !== "Cancelado" && (!type || a.type === type),
  );
}
function testsForCandidate(candidate) {
  return assignmentsForCandidate(candidate).map((a) => {
    const catalog = tests.find((t) => t.id === a.testId);
    return { ...a, id: a.testId, test: catalog || { id: a.testId, title: "Teste" }, status: a.status, score: a.score };
  });
}
```

Manter `candidateTestMap` só se algum caller legado exigir; preferir deletar e corrigir callers.

- [ ] **Step 5: Verificar**

Run: `node --check app.js`  
Expected: exit 0

---

### Task 2: Catálogo — tipo no editor e listagem

**Files:**
- Modify: `index.html` (`#testsEditorView` — select tipo)
- Modify: `app.js` (create/save/render test cards, filter chips opcional)
- Modify: `styles.css` (chip de tipo no card)

**Interfaces:**
- Consumes: `TEST_TYPES`, `normalizeTestRecord`
- Produces: `#testTypeSelect` no editor; cards mostram tipo

- [ ] **Step 1: HTML select no editor**

Após descrição do teste:

```html
<label class="form-field">
  <span>Tipo</span>
  <select id="testTypeSelect">
    <option value="technical">Técnico</option>
    <option value="behavioral">Comportamental</option>
    <option value="competency">Competências</option>
  </select>
</label>
```

- [ ] **Step 2: Wire open/save/create**

Em `openTestEditor` / `createTest` / `saveCurrentTest`: ler/gravar `test.type` via `#testTypeSelect`.

- [ ] **Step 3: Card do catálogo**

Em `testTemplate`, exibir badge `testTypeLabel(test.type)`.

- [ ] **Step 4: Verificar**

`node --check app.js` + abrir Técnicos e ver tipos nos cards.

---

### Task 3: Hub HTML — página Testes aplicados + nav

**Files:**
- Modify: `index.html` (nav Seleção + `#appliedTestsPage`)
- Modify: `app.js` (`pages`, `goToPage`)

**Interfaces:**
- Produces: `data-page="testes-aplicados"`, `#appliedTestsPage`, tabs `#appliedTestTypeTabs`, filters, `#appliedTestsList`, `#appliedTestsEmpty`

- [ ] **Step 1: Nav item** após Técnicos / antes de Fichas

```html
<a href="#testes-aplicados" class="nav-item" data-page="testes-aplicados" title="Testes aplicados">
  ...
  <span class="nav-label">Testes aplicados</span>
  <span class="nav-count" id="appliedTestsNavCount">0</span>
</a>
```

- [ ] **Step 2: Página** (espelhar estrutura de fichas/testes)

Heading “Testes aplicados”, abas Técnico | Comportamental | Competências, busca + filtro status, lista, empty state com CTA “Aplicar no dossiê” ou “Ver candidatos”.

- [ ] **Step 3: Registrar page em `goToPage`**

`appliedTestsPage` hidden toggle como `fichasPage`.

- [ ] **Step 4: Verificar**

Navegar para a página sem JS de lista ainda (empty ok). `node --check app.js`.

---

### Task 4: Render hub + dossiê (lista padronizada)

**Files:**
- Modify: `index.html` (dossiê `#candidateTests` — tabs)
- Modify: `app.js` (`renderAppliedTestsPage`, `renderCandidateTestsPanel`)
- Modify: `styles.css`

**Interfaces:**
- Consumes: `assignmentsForCandidate`, `candidateTestAssignments`
- Produces: `renderAssignmentRow(assignment)`, `openCandidateTestDetail(id)`, state `appliedTestsTypeFilter`, `candidateTestsTypeTab`

- [ ] **Step 1: Row template**

Colunas: Teste · Tipo · Data envio · Prazo · Status · Nota · Resultado; clique → `openCandidateTestDetail`.

- [ ] **Step 2: Hub render + filtros**

Filtrar por aba tipo + status + query; atualizar `#appliedTestsNavCount`.

- [ ] **Step 3: Dossiê**

Substituir bloco `#candidateTests` por tabs + lista + CTA Aplicar (já existe); `renderCandidateDetails` chama `renderCandidateTestsPanel(candidate)`.

- [ ] **Step 4: Verificar**

`node --check app.js`; abrir dossiê e hub com seeds.

---

### Task 5: Modal detalhe + ações operacionais

**Files:**
- Modify: `index.html` (`#candidateTestDetailDialog`, opcional `#candidateTestDueDialog`)
- Modify: `app.js` (open/render/actions)
- Modify: `styles.css`

**Interfaces:**
- Produces: `openCandidateTestDetail(id)`, `runAssignmentAction(id, action)`, actions: resend, copy-link, change-due, cancel, view-answers (aba), evaluate, pdf, result

- [ ] **Step 1: Markup dialog**

Header meta; tabs/sections Respostas | Avaliação | Resultado; footer ações.

- [ ] **Step 2: Aplicar / Reenviar / Copiar / Prazo / Cancelar**

```javascript
function applyCatalogTestToCandidate(candidate, testId, dueAt) { /* cria assignment Enviado */ }
function resendAssignment(a) { a.status = "Enviado"; a.sentAt = ...; /* novo link opcional */ }
```

Wire “Aplicar teste” do dossiê para picker filtrado pela aba de tipo.

- [ ] **Step 3: Expirado**

Helper `refreshAssignmentStatuses()` — se `dueAt < hoje` e status em Enviado/Não iniciado/Em andamento → Expirado; chamar no render.

- [ ] **Step 4: Verificar**

Fluxo aplicar → copiar link → alterar prazo → cancelar. `node --check app.js`.

---

### Task 6: Respostas, avaliação escrita, PDF, resultado

**Files:**
- Modify: `app.js`
- Modify: `styles.css` (se preciso)

**Interfaces:**
- Consumes: assignment + catalog questions
- Produces: `renderAssignmentAnswers`, `renderAssignmentEvaluation`, `saveWrittenEvaluation`, `downloadAssignmentPdf`, `computeAssignmentResult`

- [ ] **Step 1: Visualizar respostas**

Listar `answers` vs prompts; empty state se vazio. Seed 1 assignment Concluído com answers demo.

- [ ] **Step 2: Avaliar discursivas (`type === "text"`)**

Form nota+comentário; salvar → `writtenScores`, recalcular `score`, `result` (Aprovado se score ≥ minScore), status `Avaliado`.

- [ ] **Step 3: PDF mock**

Blob HTML com candidato, teste, status, nota, respostas — download `teste-{id}.html`.

- [ ] **Step 4: Consultar resultado**

Bloco Resultado na modal (nota, resultado, minScore).

- [ ] **Step 5: Verificar**

`node --check app.js`.

---

### Task 7: Portal bridge + cache + graphify

**Files:**
- Modify: `app.js` (portal lists from assignments)
- Modify: `index.html` cache bust
- Run: `graphify update .`

**Interfaces:**
- Portal ao iniciar teste: status `Em andamento`; ao concluir: `Concluído` (+ score se automático)

- [ ] **Step 1: Adaptar portal**

Onde monta lista de testes do candidato, preferir `candidateTestAssignments` filtrado por email/candidato.

- [ ] **Step 2: Cache**

`?v=testes-aplicados-150` em CSS e JS.

- [ ] **Step 3: graphify + check**

```bash
node --check app.js
graphify update .
```

- [ ] **Step 4: Aceite manual**

Percorrer checklist da spec.

---

## Spec coverage

| Spec | Task |
|------|------|
| Catálogo tipado + seed 3 tipos | 1–2 |
| Hub Testes aplicados | 3–4 |
| Dossiê abas + colunas | 4 |
| Status + ações | 5–6 |
| Modal respostas/avaliação/PDF/resultado | 5–6 |
| Portal | 7 |
| Cache | 7 |
