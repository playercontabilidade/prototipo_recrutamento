# Timeline da candidatura — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir o Histórico genérico do dossiê por uma Timeline tipada (filtro, expandir, deep-links) alimentada por agregação dos módulos + log `candidate.timeline[]`.

**Architecture:** `buildCandidateTimeline(candidate)` normaliza eventos de entrevistas, testes, fit, score, proposta/desfecho e legado `history`/`activities`, unindo a `candidate.timeline[]`. A aba do dossiê passa a chamar-se Timeline; `pushTimelineEvent` registra ações RH. Deep-links reutilizam modais existentes.

**Tech Stack:** HTML5, CSS, JavaScript vanilla, `node --check app.js`.

**Spec:** `docs/superpowers/specs/2026-09-04-timeline-candidatura-design.md`

## Global Constraints

- Substituir aba **Histórico** do dossiê (rótulo **Timeline**; manter `data-candidate-tab="history"` / `data-candidate-panel="history"`).
- Híbrido: derived + logged; não criar nav própria.
- Tipos: `entrada` · `etapa` · `entrevista` · `reagendamento` · `ausencia` · `teste` · `fit` · `avaliacao` · `comentario` · `comunicacao` · `proposta` · `rejeicao` · `desistencia` · `contratacao` · `banco`.
- Portal `candidateApplicationTimeline` (stepper de etapas) **não** é esta feature — não reutilizar o nome de função; usar `buildCandidateTimeline`.
- Commits só se o usuário pedir.
- Após editar código: `graphify update .`
- Cache final: `timeline-160` (ou bump único) em CSS/JS no `index.html`.
- Verificação: `node --check app.js` + roteiro manual da spec.

## Estrutura de arquivos

- Modify: `index.html` — rótulo aba Timeline; markup filtro + host `#candidateTimeline` (ou reutilizar `#candidateHistory`); cache.
- Modify: `app.js` — modelo, builder, push, render, hooks em `updateCandidateStage` / comentário / desfecho / entrevista; seeds em ≥1 candidato.
- Modify: `styles.css` — timeline vertical, chips filtro, card expandido.
- Reference: `renderCandidateDetails` (~L8973 history), `updateCandidateStage` (~L8580), `openInterviewDetail`, `openCandidateTestDetail`, `openFitAssignmentDetail`, `openScoreEvaluationDetail`, `ensureCandidateComments`.

---

### Task 1: Modelo + labels + pushTimelineEvent

**Files:**
- Modify: `app.js` (bloco próximo a helpers de candidato / fit)

**Interfaces:**
- Produces:
  - `TIMELINE_TYPES` (array)
  - `timelineTypeLabel(type)` → string PT
  - `nextTimelineEventId` (number)
  - `ensureCandidateTimeline(candidate)` → garante `candidate.timeline = []`
  - `pushTimelineEvent(candidate, partial)` → event com id, source:`logged`, unshift em `timeline`
  - `formatTimelineAt(iso)` → string exibição

- [ ] **Step 1: Constantes e labels**

```javascript
const TIMELINE_TYPES = [
  "entrada", "etapa", "entrevista", "reagendamento", "ausencia",
  "teste", "fit", "avaliacao", "comentario", "comunicacao",
  "proposta", "rejeicao", "desistencia", "contratacao", "banco",
];

function timelineTypeLabel(type) {
  return ({
    entrada: "Entrada na vaga",
    etapa: "Mudança de etapa",
    entrevista: "Entrevista",
    reagendamento: "Reagendamento",
    ausencia: "Ausência",
    teste: "Teste",
    fit: "Fit Cultural",
    avaliacao: "Avaliação",
    comentario: "Comentário",
    comunicacao: "Comunicação",
    proposta: "Proposta",
    rejeicao: "Rejeição",
    desistencia: "Desistência",
    contratacao: "Contratação",
    banco: "Banco de Talentos",
  })[type] || type;
}
```

- [ ] **Step 2: push + format**

```javascript
let nextTimelineEventId = 1;

function ensureCandidateTimeline(candidate) {
  if (!candidate) return null;
  if (!Array.isArray(candidate.timeline)) candidate.timeline = [];
  return candidate.timeline;
}

function pushTimelineEvent(candidate, partial = {}) {
  ensureCandidateTimeline(candidate);
  const event = {
    id: partial.id ?? nextTimelineEventId++,
    type: partial.type || "comentario",
    at: partial.at || `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`,
    actor: partial.actor || "Larissa Dias",
    title: partial.title || timelineTypeLabel(partial.type),
    description: partial.description || "",
    fromStage: partial.fromStage ?? null,
    toStage: partial.toStage ?? null,
    reason: partial.reason ?? null,
    related: partial.related || null,
    attachments: partial.attachments || [],
    source: "logged",
  };
  candidate.timeline.unshift(event);
  return event;
}

function formatTimelineAt(value) {
  if (!value) return "—";
  if (/agora|hoje|ontem|há /i.test(String(value)) && !String(value).includes("T")) return String(value);
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  return `${dd}/${mm}/${date.getFullYear()} ${hh}:${mi}`;
}
```

- [ ] **Step 3: Verificar**

Run: `node --check app.js`  
Expected: exit 0

---

### Task 2: buildCandidateTimeline (agregador)

**Files:**
- Modify: `app.js`

**Interfaces:**
- Consumes: interviews, candidateTestAssignments, fitAssignments, scoreEvaluations, history, activities, timeline
- Produces: `buildCandidateTimeline(candidate)` → `timelineEvent[]` sorted desc by `at`

- [ ] **Step 1: Derived helpers**

Para cada fonte, mapear para o shape do evento com `source: "derived"` e `id` estável tipo `derived-interview-${id}`:

| Fonte | type | related |
|-------|------|---------|
| interviews (status Realizada / Agendada / Confirmada / …) | entrevista (ou reagendamento/ausencia se status/texto indicar) | `{ kind:"interview", id }` |
| test assignments (não cancelados) | teste | `{ kind:"test", id }` |
| fit assignments | fit | `{ kind:"fit", id }` |
| scoreEvaluations do candidate+vacancy | avaliacao | `{ kind:"score", id }` |
| proposal presente | proposta | null ou message |
| lastAction reject / dismiss flows se refletidos em history | rejeicao / desistencia / contratacao / banco | — |
| history tuples | etapa / comentario / entrada (heurística por prefixo do title) | null |
| activities | comentario (se não duplicar history recente) | null |

- [ ] **Step 2: Merge**

```javascript
function buildCandidateTimeline(candidate) {
  if (!candidate) return [];
  ensureCandidateTimeline(candidate);
  const events = [];
  // 1) logged
  events.push(...candidate.timeline.map((e) => ({ ...e, source: e.source || "logged" })));
  // 2) derived interviews/tests/fit/score/...
  // 3) legacy history/activities → only if no near-duplicate
  const dedupe = new Map();
  for (const event of events) {
    const key = event.related
      ? `${event.type}:${event.related.kind}:${event.related.id}`
      : `${event.type}:${event.at}:${event.title}`;
    if (!dedupe.has(key)) dedupe.set(key, event);
  }
  return [...dedupe.values()].sort((a, b) => String(b.at).localeCompare(String(a.at)));
}
```

**Importante:** inspecionar status reais de `interviews` e campos de proposta/`dismissCandidate`/`hireCandidate`/`approveCandidateToTalentBank` para mapear tipos corretamente (não inventar campos).

- [ ] **Step 3: Verificar**

Run: `node --check app.js`

---

### Task 3: Seeds timeline no candidato rico

**Files:**
- Modify: `app.js` (objeto do candidato — preferir **Guilherme id 106** ou outro com entrevistas/testes/fit/score)

**Interfaces:**
- Produces: `candidate.timeline` seed com ≥6 tipos logged + derivados cobrindo o resto

- [ ] **Step 1: Adicionar `timeline: [...]`** no seed escolhido (entrada, comunicacao com attachment mock, etc.) sem remover history existente.

- [ ] **Step 2: Verificar** mentalmente: `buildCandidateTimeline` desse id retorna ≥10 eventos mistos.

Run: `node --check app.js`

---

### Task 4: UI da aba Timeline (markup + render)

**Files:**
- Modify: `index.html` (aba + painel)
- Modify: `app.js` (`renderCandidateTimeline`, estado filtro/expand)
- Modify: `styles.css`

**Interfaces:**
- Produces:
  - `candidateTimelineFilter` (string `"all"` | type)
  - `candidateTimelineExpandedIds` (Set)
  - `renderCandidateTimeline(candidate)`
  - substitui o bloco que fazia `candidateHistory.innerHTML = history.map...` em `renderCandidateDetails`

- [ ] **Step 1: HTML**

```html
<button type="button" data-candidate-tab="history">Timeline</button>
...
<section class="candidate-dossier-panel" data-candidate-panel="history" hidden>
  <div class="candidate-dossier-section-head">
    <h3>Timeline</h3>
  </div>
  <div class="timeline-filters" id="candidateTimelineFilters" role="tablist" aria-label="Filtrar eventos"></div>
  <div class="candidate-timeline" id="candidateTimeline"></div>
  <div class="empty-state" id="candidateTimelineEmpty" hidden>
    <h3>Nenhum evento</h3>
    <p>Nada neste filtro para esta candidatura.</p>
  </div>
</section>
```

Remover o `#candidateHistory` antigo **ou** torná-lo alias: preferir `#candidateTimeline` e atualizar `pageIds`/mapa se existir `candidateHistory` key.

- [ ] **Step 2: Render**

```javascript
function renderCandidateTimeline(candidate) {
  const host = document.querySelector("#candidateTimeline");
  const empty = document.querySelector("#candidateTimelineEmpty");
  const filtersHost = document.querySelector("#candidateTimelineFilters");
  if (!host) return;
  const all = buildCandidateTimeline(candidate);
  const presentTypes = [...new Set(all.map((e) => e.type))];
  // render chips: Todos + presentTypes
  const filtered = candidateTimelineFilter === "all"
    ? all
    : all.filter((e) => e.type === candidateTimelineFilter);
  host.innerHTML = filtered.map((event) => timelineEventCardMarkup(event)).join("");
  if (empty) empty.hidden = filtered.length !== 0;
}

function timelineEventCardMarkup(event) {
  const open = candidateTimelineExpandedIds.has(String(event.id));
  // card with data-timeline-id, expand button, details, CTAs by related.kind
}
```

- [ ] **Step 3: Wire em renderCandidateDetails**

Trocar o preenchimento de `#candidateHistory` por `renderCandidateTimeline(candidate)`.

- [ ] **Step 4: Verificar**

Ctrl+F5 → dossiê → Timeline lista eventos.  
`node --check app.js`

---

### Task 5: Filtro + expandir + deep-links

**Files:**
- Modify: `app.js` (listeners)
- Modify: `styles.css`

**Interfaces:**
- Produces: `openTimelineRelated(event)`, handlers click em `#candidateTimeline` / filters

- [ ] **Step 1: Deep-link**

```javascript
function openTimelineRelated(event) {
  const related = event?.related;
  if (!related) {
    showToast("Timeline", "Sem registro vinculado.");
    return;
  }
  if (related.kind === "interview") {
    openInterviewDetail?.(related.id) || showToast("Entrevista", "Não encontrada.");
    return;
  }
  if (related.kind === "test") {
    openCandidateTestDetail(related.id);
    return;
  }
  if (related.kind === "fit") {
    openFitAssignmentDetail(related.id);
    return;
  }
  if (related.kind === "score") {
    openScoreEvaluationDetail(related.id);
    return;
  }
  if (related.kind === "message" || related.kind === "file") {
    showToast(related.kind === "file" ? "Anexo" : "Comunicação", event.attachments?.[0]?.name || event.description || "Stub do protótipo.");
  }
}
```

Usar os nomes **reais** das funções no `app.js` (ajustar se `openInterviewDetail` tiver outra assinatura).

- [ ] **Step 2: Delegation**

- click filter chip → set filter + re-render  
- click expand → toggle Set  
- click `[data-timeline-open]` → `openTimelineRelated`

- [ ] **Step 3: Verificar**

Filtrar Fit; expandir etapa; abrir entrevista e score a partir do card.

---

### Task 6: Hooks pushTimelineEvent nas ações RH

**Files:**
- Modify: `app.js`

**Interfaces:**
- Consome `pushTimelineEvent`

- [ ] **Step 1: updateCandidateStage**

Após unshift history/activities:

```javascript
pushTimelineEvent(candidate, {
  type: "etapa",
  title: `Etapa: ${stage}`,
  description: `Movido de ${previousStage}`,
  fromStage: previousStage,
  toStage: stage,
  reason: meta.reason || null,
  actor: "Larissa Dias",
});
```

- [ ] **Step 2: Comentário**

Onde `ensureCandidateComments` / submit do commentForm adiciona comentário → `type: "comentario"`.

- [ ] **Step 3: Desfechos**

Em `dismissCandidate` / rejeição → `rejeicao`; desistência → `desistencia`; `hireCandidate` → `contratacao`; `approveCandidateToTalentBank` → `banco`. Incluir `reason` quando o fluxo já captura motivo.

- [ ] **Step 4: Entrevista**

No fluxo de reagendamento / não comparecimento / finalizar condução (onde já muta status) → `reagendamento` / `ausencia` / `entrevista` logged **ou** confiar no derived se o status já basta — preferir derived para entrevista seed e logged só se a ação não criar interview row visível.

- [ ] **Step 5: Verificar**

Mover etapa no dossiê → Timeline mostra evento novo sem F5 da página (re-render details).  
`node --check app.js`

---

### Task 7: Estilos + cache + aceite

**Files:**
- Modify: `styles.css`, `index.html` (`?v=timeline-160`)

- [ ] **Step 1: CSS**

Timeline vertical (linha + nós), chips filtro, card expandido, meta chips, empty state. Alinhar tokens existentes.

- [ ] **Step 2: Cache bump** `timeline-160`

- [ ] **Step 3: Roteiro manual da spec**

1. Dossiê seed → Timeline rica  
2. Filtros  
3. Expandir com from/to/motivo  
4. Deep-links entrevista + teste/fit/score  
5. Mover etapa + comentar  
6. Empty de filtro  

- [ ] **Step 4:** `graphify update .` e `node --check app.js`

---

## Spec coverage (self-review)

| Spec | Task |
|------|------|
| Aba Timeline no dossiê | 4 |
| Tipos + modelo | 1 |
| build híbrido | 2 |
| push em ações RH | 6 |
| Filtro / expandir / deep-links | 5 |
| Seeds | 3 |
| Cache / aceite | 7 |
| Portal / nav global | Out |

## Placeholder scan

Nenhum TBD. Assinaturas de open* devem ser confirmadas na Task 5 Step 1 contra `app.js`.
