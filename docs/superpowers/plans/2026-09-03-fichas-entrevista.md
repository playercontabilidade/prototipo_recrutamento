# Fichas de Entrevista Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Entregar catálogo completo de modelos de ficha de entrevista (listagem, editor, preview, vínculo a vagas) na Seleção e alimentar o select `#interviewSheet` do agendamento.

**Architecture:** Nova página irmã de Técnicos (`data-page="fichas"`). Fonte única `interviewSheetTemplates[]` substitui o stub `interviewSheets`. UI espelha o padrão lista/editor/preview de testes técnicos, com tipos de pergunta da ficha e multi-select de vagas. Preenchimento de respostas/parecer fica fora desta onda.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `<dialog>`, Node.js apenas para `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-03-fichas-entrevista-design.md`

## Global Constraints

- Hub: menu **Seleção → Fichas de entrevista** (não Configurações).
- Categorias: `RH` | `Técnica` | `Gestores` (coluna Tipo = categoria).
- Tipos de pergunta: `short_text` | `long_text` | `yes_no` | `single` | `scale` | `score`.
- Excluir só se `active === false` e nenhuma entrevista referencia o template (`sheetId` / `sheet`).
- `#interviewSheet` lista apenas templates com `active: true`.
- Preview inclui bloco fixo “Observações do avaliador” (não é pergunta editável).
- Sem scorecard preenchido / export PDF.
- Cache final: `fichas-entrevista-130` em CSS e JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.
- Após editar código: `graphify update .`

## Estrutura de arquivos

- Modify: `index.html` — nav Seleção, `#fichasPage` (lista + editor), dialog preview, cache bust.
- Modify: `app.js` — `interviewSheetTemplates[]`, helpers, CRUD, roteamento `showPage`/`pageNames`, substituir `interviewSheets` / `fillInterviewSheetOptions`.
- Modify: `styles.css` — layout da página/fichas (reusar classes de testes quando possível).
- Reference: `#tecnicosPage`, `createTest` / `openTestEditor` / `renderTests` / `openTestPreview`.

---

### Task 1: Nav, página shell e roteamento

**Files:**
- Modify: `index.html` (~L214–230 grupo Seleção; após `#tecnicosPage`)
- Modify: `app.js` (`pageNames`, `pageByHash`, `hashByPage`, `showPage`, `ID_ALIASES`, const da página)

**Interfaces:**
- Produces: `fichasPage` element ref; page key `"fichas"`; hash `#fichas`
- Produces: `showPage` branch `page === "fichas"` → `renderSheetTemplates()` ou editor
- Consumes: padrão `tecnicos` / `showPage`

- [ ] **Step 1: Baseline (red)**

Confirmar que não existe `data-page="fichas"` nem `#fichasPage`.  
Expected: gaps existem.

- [ ] **Step 2: Nav + shell HTML**

No grupo Seleção, após Técnicos:

```html
<a href="#fichas" class="nav-item" data-page="fichas" title="Fichas de entrevista">
  <span aria-hidden="true"><svg class="ui-icon"><use href="#i-clipboard" /></svg></span>
  <span class="nav-label">Fichas</span>
  <span class="nav-count" id="sheetsNavCount">0</span>
</a>
```

Criar `#fichasPage` (hidden) com:

- `#sheetsListView` — header “Fichas de entrevista”, botão `#newSheetButton`, tabela/lista `#sheetList`, empty `#sheetEmpty`
- `#sheetsEditorView` (hidden) — back `#sheetEditorBack`, título, form fields, `#sheetQuestionList`, `#addSheetQuestionButton`, `#saveSheetButton`, `#previewSheetButton`

Colunas da lista (header ou cards): Nome · Tipo · Vagas · Perguntas · Status · Última alteração · Ações.

- [ ] **Step 3: Roteamento JS**

```js
const fichasPage = document.querySelector("#fichasPage");
// pageNames.fichas = "Fichas de entrevista"
// pageByHash.fichas = "fichas"
// hashByPage.fichas = "fichas"
// ID_ALIASES.fichasPage = "fichasPage"
```

Em `showPage`:

```js
fichasPage.hidden = page !== "fichas";
if (page === "fichas") {
  if (options.sheetId) openSheetEditor(options.sheetId);
  else showSheetList();
}
```

Stubs temporários (se ainda não existirem):

```js
function showSheetList() {
  document.querySelector("#sheetsListView").hidden = false;
  document.querySelector("#sheetsEditorView").hidden = true;
  renderSheetTemplates();
}
function renderSheetTemplates() {}
function openSheetEditor() {}
```

- [ ] **Step 4: Verificar**

Abrir app → clique **Fichas** → página vazia visível, hash `#fichas`.  
Run: `node --check app.js`  
Expected: exit 0.

- [ ] **Step 5: Commit** (se o usuário pedir commit)

```bash
git add index.html app.js
git commit -m "feat(fichas): adiciona nav e shell da página Fichas de entrevista"
```

---

### Task 2: Modelo, seeds e helpers

**Files:**
- Modify: `app.js` (substituir `interviewSheets` ~L2966; seeds próximos a `tests[]`)

**Interfaces:**
- Produces: `interviewSheetTemplates: SheetTemplate[]`
- Produces: `nextSheetId`, `nextSheetQuestionId`, `editingSheetId`
- Produces: `SHEET_CATEGORIES = ["RH","Técnica","Gestores"]`
- Produces: `sheetQuestionTypeLabel(type): string`
- Produces: `normalizeInterviewSheetRef(interview): void` (migra `sheet` string → `sheetId`+`sheet`)
- Produces: `getActiveSheetTemplates(): SheetTemplate[]`
- Produces: `sheetTemplateInUse(id): boolean`
- Consumes: `interviews`, `jobs`, `TODAY_KEY`

- [ ] **Step 1: Baseline**

`interviewSheets` é `string[]` de 3 rótulos; entrevistas usam `sheet` string.

- [ ] **Step 2: Definir seeds**

```js
const SHEET_CATEGORIES = ["RH", "Técnica", "Gestores"];
let nextSheetId = 4;
let nextSheetQuestionId = 40;
let editingSheetId = null;

const interviewSheetTemplates = [
  {
    id: 1,
    name: "Ficha RH padrão",
    description: "Roteiro comportamental Player (referência SIL).",
    category: "RH",
    active: true,
    updatedAt: "2026-08-27",
    jobIds: [],
    questions: [
      { id: 1, type: "long_text", prompt: "Como conheceu a Player?", required: true, order: 1 },
      { id: 2, type: "long_text", prompt: "O que te levou a encaminhar seu currículo?", required: true, order: 2 },
      { id: 3, type: "long_text", prompt: "O que você tem buscado?", required: true, order: 3 },
      { id: 4, type: "long_text", prompt: "Breve relato da sua experiência", required: true, order: 4 },
      { id: 5, type: "short_text", prompt: "Cite 3 características que te definem", required: true, order: 5 },
      { id: 6, type: "short_text", prompt: "Cite 3 pontos de melhoria", required: true, order: 6 },
      { id: 7, type: "long_text", prompt: "Cite 3 pontos primordiais para atuar no cargo", required: true, order: 7 },
      { id: 8, type: "long_text", prompt: "Qual maior desafio profissional que você já enfrentou?", required: true, order: 8 },
      { id: 9, type: "long_text", prompt: "O que te faz sair de uma empresa?", required: false, order: 9 },
      { id: 10, type: "long_text", prompt: "O que te faz permanecer?", required: false, order: 10 },
      { id: 11, type: "long_text", prompt: "Como você se vê daqui 5 anos profissionalmente?", required: true, order: 11 },
      { id: 12, type: "short_text", prompt: "Pretensão salarial", required: true, order: 12 },
      { id: 13, type: "yes_no", prompt: "Benefícios da empresa estão claros?", required: false, order: 13 },
    ],
  },
  {
    id: 2,
    name: "Ficha técnica",
    description: "Perguntas técnicas + escala de domínio.",
    category: "Técnica",
    active: true,
    updatedAt: "2026-08-26",
    jobIds: [],
    questions: [
      { id: 20, type: "long_text", prompt: "Descreva um problema técnico recente que resolveu", required: true, order: 1 },
      { id: 21, type: "scale", prompt: "Domínio da ferramenta principal da vaga", required: true, order: 2, options: ["1", "2", "3", "4", "5"] },
      { id: 22, type: "score", prompt: "Nota geral técnica (0–10)", required: true, order: 3 },
      { id: 23, type: "single", prompt: "Nível de senioridade percebido", required: true, order: 4, options: ["Júnior", "Pleno", "Sênior"] },
    ],
  },
  {
    id: 3,
    name: "Ficha gestores",
    description: "Alinhamento com o gestor da área.",
    category: "Gestores",
    active: true,
    updatedAt: "2026-08-25",
    jobIds: [],
    questions: [
      { id: 30, type: "long_text", prompt: "Expectativa do gestor para os 90 dias", required: true, order: 1 },
      { id: 31, type: "yes_no", prompt: "Candidato atende o perfil da equipe?", required: true, order: 2 },
      { id: 32, type: "score", prompt: "Nota do gestor (0–10)", required: true, order: 3 },
    ],
  },
];
```

Vincular `jobIds` reais: após carregar `jobs`, em init ou no seed, setar 1–2 ids existentes (ex. primeira vaga aberta) nos templates 1 e 2.

- [ ] **Step 3: Helpers**

```js
function sheetQuestionTypeLabel(type) {
  return {
    short_text: "Texto curto",
    long_text: "Texto longo",
    yes_no: "Sim/Não",
    single: "Múltipla escolha",
    scale: "Escala",
    score: "Nota",
  }[type] || type;
}

function getActiveSheetTemplates() {
  return interviewSheetTemplates.filter((item) => item.active);
}

function sheetTemplateInUse(id) {
  return interviews.some(
    (item) => item.sheetId === id || item.sheet === interviewSheetTemplates.find((t) => t.id === id)?.name,
  );
}

function normalizeInterviewSheetRef(item) {
  if (item.sheetId) {
    const tpl = interviewSheetTemplates.find((t) => t.id === item.sheetId);
    if (tpl) item.sheet = tpl.name;
    return;
  }
  const byName = interviewSheetTemplates.find((t) => t.name === item.sheet);
  if (byName) {
    item.sheetId = byName.id;
    item.sheet = byName.name;
    return;
  }
  const fallback = interviewSheetTemplates[0];
  if (fallback) {
    item.sheetId = fallback.id;
    item.sheet = fallback.name;
  }
}

interviews.forEach(normalizeInterviewSheetRef);
```

Remover `const interviewSheets = [...]` (ou deixar deprecated apontando nomes ativos só se necessário durante migração — preferir remover).

- [ ] **Step 4: Verificar**

`node --check app.js`  
No console do browser (opcional): `interviewSheetTemplates.length === 3`.

- [ ] **Step 5: Commit** (se pedido)

```bash
git commit -m "feat(fichas): seeds e helpers de modelos de ficha"
```

---

### Task 3: Listagem e ações de linha

**Files:**
- Modify: `app.js` (`renderSheetTemplates`, handlers)
- Modify: `index.html` (empty state CTAs se faltarem)

**Interfaces:**
- Produces: `renderSheetTemplates(): void`
- Produces: `duplicateSheetTemplate(id): void`
- Produces: `setSheetTemplateActive(id, active): void`
- Produces: `deleteSheetTemplate(id): void`
- Consumes: `interviewSheetTemplates`, `jobs`, `sheetTemplateInUse`

- [ ] **Step 1: `renderSheetTemplates`**

```js
function renderSheetTemplates() {
  const list = document.querySelector("#sheetList");
  const empty = document.querySelector("#sheetEmpty");
  const count = document.querySelector("#sheetsNavCount");
  if (count) count.textContent = String(interviewSheetTemplates.length);
  if (!list) return;
  if (!interviewSheetTemplates.length) {
    list.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  list.innerHTML = interviewSheetTemplates
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"))
    .map((item) => sheetTemplateRow(item))
    .join("");
}

function sheetTemplateRow(item) {
  const jobsLabel =
    (item.jobIds || [])
      .map((id) => jobs.find((j) => j.id === id)?.title)
      .filter(Boolean)
      .join(", ") || "—";
  return `
    <article class="sheet-row" data-sheet-id="${item.id}">
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <p class="panel-note">${escapeHtml(item.description || "")}</p>
      </div>
      <span>${escapeHtml(item.category)}</span>
      <span title="${escapeHtml(jobsLabel)}">${(item.jobIds || []).length}</span>
      <span>${item.questions.length}</span>
      <span>${item.active ? "Ativo" : "Inativo"}</span>
      <span>${escapeHtml(item.updatedAt || "—")}</span>
      <div class="sheet-row-actions">
        <button type="button" data-sheet-action="preview">Visualizar</button>
        <button type="button" data-sheet-action="edit">Editar</button>
        <button type="button" data-sheet-action="duplicate">Duplicar</button>
        <button type="button" data-sheet-action="${item.active ? "inactivate" : "reactivate"}">
          ${item.active ? "Inativar" : "Reativar"}
        </button>
        <button type="button" data-sheet-action="delete" ${item.active || sheetTemplateInUse(item.id) ? "disabled" : ""}>Excluir</button>
      </div>
    </article>`;
}
```

- [ ] **Step 2: Handlers de ação**

```js
document.querySelector("#fichasPage")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sheet-action]");
  if (!button) return;
  const row = button.closest("[data-sheet-id]");
  const id = Number(row?.dataset.sheetId);
  const action = button.dataset.sheetAction;
  if (action === "edit") openSheetEditor(id);
  if (action === "preview") openSheetPreview(id);
  if (action === "duplicate") {
    duplicateSheetTemplate(id);
    renderSheetTemplates();
  }
  if (action === "inactivate") {
    setSheetTemplateActive(id, false);
    renderSheetTemplates();
  }
  if (action === "reactivate") {
    setSheetTemplateActive(id, true);
    renderSheetTemplates();
  }
  if (action === "delete") {
    deleteSheetTemplate(id);
    renderSheetTemplates();
  }
});

function duplicateSheetTemplate(id) {
  const source = interviewSheetTemplates.find((item) => item.id === id);
  if (!source) return;
  const copy = structuredClone(source);
  copy.id = nextSheetId++;
  copy.name = `${source.name} (cópia)`;
  copy.active = true;
  copy.updatedAt = TODAY_KEY;
  copy.questions = copy.questions.map((q) => ({ ...q, id: nextSheetQuestionId++ }));
  interviewSheetTemplates.push(copy);
  showToast("Ficha duplicada", copy.name);
}

function setSheetTemplateActive(id, active) {
  const item = interviewSheetTemplates.find((entry) => entry.id === id);
  if (!item) return;
  item.active = active;
  item.updatedAt = TODAY_KEY;
  showToast(active ? "Ficha reativada" : "Ficha inativada", item.name);
}

function deleteSheetTemplate(id) {
  const item = interviewSheetTemplates.find((entry) => entry.id === id);
  if (!item) return;
  if (item.active || sheetTemplateInUse(id)) {
    showToast("Não é possível excluir", "Inative a ficha e garanta que nenhuma entrevista a usa.");
    return;
  }
  const index = interviewSheetTemplates.findIndex((entry) => entry.id === id);
  interviewSheetTemplates.splice(index, 1);
  showToast("Ficha excluída", item.name);
}
```

`#newSheetButton` → `createSheetTemplate()`.

- [ ] **Step 3: Verificar manual**

Fichas → 3 linhas; Duplicar → 4; Inativar → Excluir habilitado se sem uso.

- [ ] **Step 4: Commit** (se pedido)

```bash
git commit -m "feat(fichas): listagem e ações de modelos"
```

---

### Task 4: Editor (metadados, vagas, perguntas)

**Files:**
- Modify: `index.html` (`#sheetsEditorView` fields)
- Modify: `app.js` (create/open/save/render questions)

**Interfaces:**
- Produces: `createSheetTemplate(): void`
- Produces: `openSheetEditor(id, isNew?): void`
- Produces: `saveCurrentSheet(): void`
- Produces: `renderSheetQuestions(): void`
- Produces: `addSheetQuestion()`, `duplicateSheetQuestion(qid)`, `moveSheetQuestion(qid, delta)`, `removeSheetQuestion(qid)`
- Consumes: `jobs`, `SHEET_CATEGORIES`

- [ ] **Step 1: Campos HTML do editor**

```html
<label class="form-field"><span>Nome</span><input id="sheetNameInput" /></label>
<label class="form-field"><span>Descrição</span><textarea id="sheetDescriptionInput"></textarea></label>
<label class="form-field"><span>Categoria</span>
  <select id="sheetCategoryInput">
    <option>RH</option><option>Técnica</option><option>Gestores</option>
  </select>
</label>
<label class="form-field"><span>Status</span>
  <select id="sheetActiveInput"><option value="true">Ativo</option><option value="false">Inativo</option></select>
</label>
<fieldset class="sheet-jobs-fieldset">
  <legend>Vagas vinculadas</legend>
  <div id="sheetJobsChecklist"></div>
</fieldset>
```

- [ ] **Step 2: Open / save / create**

```js
function createSheetTemplate() {
  const item = {
    id: nextSheetId++,
    name: "Nova ficha de entrevista",
    description: "",
    category: "RH",
    active: true,
    updatedAt: TODAY_KEY,
    jobIds: [],
    questions: [],
  };
  interviewSheetTemplates.push(item);
  openSheetEditor(item.id, true);
}

function openSheetEditor(id) {
  const item = interviewSheetTemplates.find((entry) => entry.id === id);
  if (!item) return;
  editingSheetId = id;
  document.querySelector("#sheetsListView").hidden = true;
  document.querySelector("#sheetsEditorView").hidden = false;
  document.querySelector("#sheetEditorTitle").textContent = item.name;
  document.querySelector("#sheetNameInput").value = item.name;
  document.querySelector("#sheetDescriptionInput").value = item.description || "";
  document.querySelector("#sheetCategoryInput").value = item.category;
  document.querySelector("#sheetActiveInput").value = String(item.active);
  fillSheetJobsChecklist(item.jobIds || []);
  renderSheetQuestions();
}

function fillSheetJobsChecklist(selectedIds) {
  const host = document.querySelector("#sheetJobsChecklist");
  if (!host) return;
  host.innerHTML = jobs
    .map(
      (job) => `
      <label class="sheet-job-option">
        <input type="checkbox" value="${job.id}" ${selectedIds.includes(job.id) ? "checked" : ""} />
        <span>${escapeHtml(job.title)}</span>
      </label>`,
    )
    .join("");
}

function readSheetJobIds() {
  return [...document.querySelectorAll("#sheetJobsChecklist input:checked")].map((input) => Number(input.value));
}

function saveCurrentSheet() {
  const item = interviewSheetTemplates.find((entry) => entry.id === editingSheetId);
  if (!item) return;
  item.name = document.querySelector("#sheetNameInput").value.trim() || item.name;
  item.description = document.querySelector("#sheetDescriptionInput").value.trim();
  item.category = document.querySelector("#sheetCategoryInput").value;
  item.active = document.querySelector("#sheetActiveInput").value === "true";
  item.jobIds = readSheetJobIds();
  item.updatedAt = TODAY_KEY;
  item.questions = item.questions
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((q, index) => ({ ...q, order: index + 1 }));
  showToast("Ficha salva", item.name);
  showSheetList();
}
```

- [ ] **Step 3: Builder de perguntas**

Espelhar `renderTestQuestions`, com select de tipos da ficha:

```js
function renderSheetQuestions() {
  const item = interviewSheetTemplates.find((entry) => entry.id === editingSheetId);
  const host = document.querySelector("#sheetQuestionList");
  if (!item || !host) return;
  const sorted = item.questions.slice().sort((a, b) => a.order - b.order);
  host.innerHTML = sorted
    .map(
      (q, index) => `
      <article class="sheet-question-card" data-sheet-question-id="${q.id}">
        <header>
          <strong>#${index + 1}</strong>
          <label><input type="checkbox" data-sheet-q="required" ${q.required ? "checked" : ""} /> Obrigatória</label>
          <select data-sheet-q="type">
            ${["short_text","long_text","yes_no","single","scale","score"]
              .map((t) => `<option value="${t}" ${q.type === t ? "selected" : ""}>${sheetQuestionTypeLabel(t)}</option>`)
              .join("")}
          </select>
        </header>
        <textarea data-sheet-q="prompt">${escapeHtml(q.prompt || "")}</textarea>
        ${
          q.type === "single" || q.type === "scale"
            ? `<input data-sheet-q="options" value="${escapeHtml((q.options || []).join(" | "))}" placeholder="Opções separadas por |" />`
            : ""
        }
        <div class="sheet-question-actions">
          <button type="button" data-sheet-q-action="up">↑</button>
          <button type="button" data-sheet-q-action="down">↓</button>
          <button type="button" data-sheet-q-action="duplicate">Duplicar</button>
          <button type="button" data-sheet-q-action="remove">Excluir</button>
        </div>
      </article>`,
    )
    .join("") || `<p class="panel-note">Nenhuma pergunta ainda.</p>`;
}

function syncSheetQuestionsFromDom() {
  const item = interviewSheetTemplates.find((entry) => entry.id === editingSheetId);
  if (!item) return;
  document.querySelectorAll("#sheetQuestionList [data-sheet-question-id]").forEach((card) => {
    const id = Number(card.dataset.sheetQuestionId);
    const q = item.questions.find((entry) => entry.id === id);
    if (!q) return;
    q.required = Boolean(card.querySelector('[data-sheet-q="required"]')?.checked);
    q.type = card.querySelector('[data-sheet-q="type"]')?.value || q.type;
    q.prompt = card.querySelector('[data-sheet-q="prompt"]')?.value || "";
    const optionsInput = card.querySelector('[data-sheet-q="options"]');
    if (optionsInput) {
      q.options = optionsInput.value
        .split("|")
        .map((part) => part.trim())
        .filter(Boolean);
    }
  });
}

function addSheetQuestion() {
  const item = interviewSheetTemplates.find((entry) => entry.id === editingSheetId);
  if (!item) return;
  syncSheetQuestionsFromDom();
  item.questions.push({
    id: nextSheetQuestionId++,
    type: "long_text",
    prompt: "Nova pergunta",
    required: true,
    order: item.questions.length + 1,
    options: [],
  });
  renderSheetQuestions();
}
```

Listeners: change em type → `syncSheetQuestionsFromDom(); renderSheetQuestions()`; ações up/down/duplicate/remove; `#addSheetQuestionButton`; `#sheetEditorBack` → sync + `showSheetList()` (ou confirmar discard simples via save implícito no protótipo: sync antes de voltar sem persistir campos do form — preferir **salvar só no `#saveSheetButton`**, back descarta metadados não salvos mas mantém mutações in-memory de questions como Técnicos faz — **seguir o mesmo comportamento de `showTestList` / back dos testes**).

- [ ] **Step 4: Verificar**

Criar ficha → 2 perguntas → reordenar → salvar → listagem atualiza qtd/categoria/vagas.

- [ ] **Step 5: Commit** (se pedido)

```bash
git commit -m "feat(fichas): editor com perguntas e vínculo a vagas"
```

---

### Task 5: Preview estilo ficha

**Files:**
- Modify: `index.html` — `#sheetPreviewDialog`
- Modify: `app.js` — `openSheetPreview(id)`
- Modify: `styles.css` — `.sheet-preview-*`

**Interfaces:**
- Produces: `openSheetPreview(id): void`
- Consumes: template questions ordenadas

- [ ] **Step 1: Dialog HTML**

```html
<dialog class="stack-dialog sheet-preview-dialog" id="sheetPreviewDialog">
  <form method="dialog" class="stack-dialog-form">
    <header>
      <h2 id="sheetPreviewTitle">Ficha</h2>
      <button type="submit" class="icon-button" aria-label="Fechar">×</button>
    </header>
    <div id="sheetPreviewBody" class="sheet-preview-body"></div>
  </form>
</dialog>
```

- [ ] **Step 2: Render preview**

```js
function openSheetPreview(id) {
  const item = interviewSheetTemplates.find((entry) => entry.id === id);
  const body = document.querySelector("#sheetPreviewBody");
  const title = document.querySelector("#sheetPreviewTitle");
  const dialog = document.querySelector("#sheetPreviewDialog");
  if (!item || !body || !dialog) return;
  title.textContent = item.name;
  const questions = item.questions.slice().sort((a, b) => a.order - b.order);
  body.innerHTML = `
    <p class="sheet-preview-kicker">ENTREVISTA DE EMPREGO PLAYER · ${escapeHtml(item.category)}</p>
    <div class="sheet-preview-header">
      <span>NOME: _______________</span>
      <span>CARGO: _______________</span>
      <span>TELEFONE: _______________</span>
    </div>
    <ol class="sheet-preview-questions">
      ${questions
        .map(
          (q) => `
        <li>
          <strong>${escapeHtml(q.prompt)}</strong>
          <span class="panel-note">${sheetQuestionTypeLabel(q.type)}${q.required ? " · Obrigatória" : ""}</span>
          <div class="sheet-preview-answer-line" aria-hidden="true"></div>
        </li>`,
        )
        .join("")}
    </ol>
    <section class="sheet-preview-notes">
      <h3>Observações do avaliador</h3>
      <div class="sheet-preview-answer-line is-tall" aria-hidden="true"></div>
    </section>`;
  dialog.showModal();
}
```

Botão `#previewSheetButton` no editor: `syncSheetQuestionsFromDom(); openSheetPreview(editingSheetId)`.

- [ ] **Step 3: CSS mínimo**

Linhas de resposta, tipografia de ficha, ol numerada — sem card-soup; herdar tokens do app.

- [ ] **Step 4: Verificar**

Visualizar seed RH → perguntas do PDF + bloco observações.

- [ ] **Step 5: Commit** (se pedido)

```bash
git commit -m "feat(fichas): pré-visualização estilo ficha"
```

---

### Task 6: Integrar agendamento + estilos + cache

**Files:**
- Modify: `app.js` — `fillInterviewSheetOptions`
- Modify: `app.js` — persist `sheetId` ao salvar entrevista
- Modify: `styles.css` — list/editor layout (grid da listagem)
- Modify: `index.html` — `?v=fichas-entrevista-130`

**Interfaces:**
- Produces: `fillInterviewSheetOptions(selectedIdOrName)` usando templates ativos
- Consumes: `getActiveSheetTemplates`, save interview payload

- [ ] **Step 1: Substituir fill**

```js
function fillInterviewSheetOptions(selected) {
  const select = document.querySelector("#interviewSheet");
  if (!select) return;
  const active = getActiveSheetTemplates();
  const selectedId =
    typeof selected === "number"
      ? selected
      : active.find((item) => item.name === selected || item.id === Number(selected))?.id || active[0]?.id;
  select.innerHTML = active
    .map(
      (sheet) =>
        `<option value="${sheet.id}"${sheet.id === selectedId ? " selected" : ""}>${escapeHtml(sheet.name)}</option>`,
    )
    .join("");
}
```

Ao salvar entrevista (`saveInterview` / equivalente):

```js
sheetId: Number(document.querySelector("#interviewSheet").value),
sheet: interviewSheetTemplates.find((t) => t.id === Number(...))?.name || "",
```

No detalhe, exibir `item.sheet` (nome).

Inativar ficha não remove de entrevistas antigas; select de **novas** só mostra ativos.

- [ ] **Step 2: CSS listagem**

`.sheet-row` grid alinhado às colunas; reutilizar `.test-*` onde couber; responsivo.

- [ ] **Step 3: Cache**

```html
<link rel="stylesheet" href="./styles.css?v=fichas-entrevista-130" />
<script src="./app.js?v=fichas-entrevista-130"></script>
```

- [ ] **Step 4: Verificação final**

```bash
node --check app.js
graphify update .
```

Roteiro manual:

1. Menu Seleção → Fichas → 3 seeds  
2. Editar RH → add pergunta → preview com observações  
3. Inativar “Ficha gestores” → Nova entrevista → select sem gestores  
4. Duplicar → excluir cópia inativa  
5. Vincular vaga no editor → coluna Vagas atualiza  

- [ ] **Step 5: Commit** (se pedido)

```bash
git commit -m "feat(fichas): integra select do agendamento e fecha catálogo"
```

---

## Spec coverage check

| Requisito da spec | Task |
|-------------------|------|
| Hub Seleção / nav | 1 |
| Modelo + seeds PDF/RH/Técnica/Gestores | 2 |
| Listagem 6 colunas + ações | 3 |
| Editor + 6 tipos + ordem + obrigatoriedade + vagas | 4 |
| Preview + observações avaliador | 5 |
| `#interviewSheet` ativos + cache | 6 |
| Sem preenchimento scorecard | (out — nenhuma task) |

## Placeholder scan

Nenhum TBD/TODO residual nas steps; commits opcionais (“se o usuário pedir”) alinhados à regra do repo.
