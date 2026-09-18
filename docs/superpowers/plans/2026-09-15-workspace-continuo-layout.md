# Workspace Contínuo (layout RH) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Flatten the RH chrome so hubs stay underline-only and 3rd-level buckets (Pendências, Talentos, Gestor) become toolbar chips — continuous workspace, no segmented green bars.

**Architecture:** Keep existing hubs, hashes, and JS data attributes (`data-recrutamento-tab`, `data-pendencias-bucket`, `data-talent-tab`). Replace visual contract only: retire `.pendencias-hub-tabs` segmented styles; introduce shared `.workspace-filter-chips` (outline chips, soft active fill); move 3rd-level controls into toolbars beside search/filters. No new pages or sidebar items.

**Tech Stack:** Vanilla HTML/CSS/JS (`index.html`, `styles.css`, `app.js`); cache-bust `?v=` on CSS/JS; graphify update after code changes.

**Spec:** `docs/superpowers/specs/2026-09-15-workspace-continuo-layout-design.md`

## Global Constraints

- Max **2** visible nav levels; 3rd level = chips only
- Preserve hashes / hubs / `data-page` wiring
- Labels unchanged: Pipeline · Pendências · Vagas · Talentos; buckets Minhas/Equipe/…; Aprovados/Bloqueados/Removidos
- Green = active underline / CTA only; no solid green segmented bars
- Chip radius 6–8px (not extreme pills); outline default; soft fill when active
- No new sidebar items, no kanban redesign, no tipography/brand change
- Prefer reusing handlers: keep `data-pendencias-bucket` and `data-talent-tab`
- Manual visual QA (no automated UI test suite in this prototype)
- After code edits: `graphify update .`

---

## File map

| File | Responsibility |
|------|----------------|
| `styles.css` | Kill segmented `.pendencias-hub-tabs`; add `.workspace-filter-chips`; tighten `.hub-chrome-tabs` / list density; optional short transitions |
| `index.html` | Markup: move bucket/talent lists into chip toolbars; bump `?v=` |
| `app.js` | Only if selectors break; ideally **zero** logic change (attrs stay) |

---

### Task 1: Shared chip styles + retire segmented chrome

**Files:**
- Modify: `styles.css` (block ~19022–19109 and nearby gestor overrides ~21010+)
- Test: hard-refresh visual check after Task 2–3 (this task alone may look half-broken until markup moves)

**Interfaces:**
- Consumes: existing tokens `--brand-*`, `--border`, `--ink-*`, `--surface`, `--radius-sm`
- Produces: class `.workspace-filter-chips` (and optional `.workspace-filter-chips button` / `.workspace-chip-count`) used by Tasks 2–4

- [ ] **Step 1: Replace segmented `.pendencias-hub-tabs` rules with chip contract**

In `styles.css`, rewrite the block starting at the comment `/* Submenu (buckets): estilo segmentado Impostograma` so those selectors **stop** looking like a green segmented control. Prefer migrating callers to `.workspace-filter-chips` and making `.pendencias-hub-tabs` either an alias or deleted after HTML updates.

Add (exact contract):

```css
/* Workspace contínuo — 3º nível = chips (não barra segmentada) */
.workspace-filter-chips {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  width: auto;
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.workspace-filter-chips button {
  display: inline-flex;
  flex: 0 0 auto;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 0;
  padding: 0 12px;
  color: var(--ink-700);
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: none;
  transition: color 150ms ease, border-color 150ms ease, background 150ms ease;
}

.workspace-filter-chips button:hover {
  color: var(--ink-950);
  border-color: var(--navy-200, var(--border));
  background: var(--navy-50, rgb(245 246 247 / 70%));
}

.workspace-filter-chips button[aria-selected="true"],
.workspace-filter-chips button.is-active {
  color: var(--brand-700);
  border-color: color-mix(in srgb, var(--brand-500) 45%, var(--border));
  background: var(--brand-50, #eef8f0);
}

.workspace-filter-chips .talent-tab-count,
.workspace-filter-chips .workspace-chip-count {
  min-width: 1.4em;
  padding: 0 6px;
  border-radius: 999px;
  background: var(--surface-muted, var(--surface-soft));
  color: inherit;
  font-size: 11px;
  font-weight: 800;
}

.workspace-filter-chips button[aria-selected="true"] .talent-tab-count,
.workspace-filter-chips button[aria-selected="true"] .workspace-chip-count {
  background: color-mix(in srgb, var(--brand-500) 18%, transparent);
  color: var(--brand-800, var(--brand-700));
}

.workspace-filter-chips button[aria-selected="true"] .talent-tab-icon,
.workspace-filter-chips button[aria-selected="true"] .ui-icon {
  color: var(--brand-700);
}
```

Delete or neutralize conflicting rules that set `background: var(--brand-600)`, `color: #fff`, full-width `flex: 1 1 0`, and green box border on `.pendencias-hub-tabs` / `#gestorPendenciasBuckets` / `#gestorEntrevistasBuckets`. After Task 2–4, those IDs should also carry `.workspace-filter-chips`.

- [ ] **Step 2: Confirm hub underline stays the L2 pattern**

Ensure `.hub-chrome-tabs` / `.talent-tabs` still use underline (`border-bottom: 2px solid` on selected), **not** the chip styles. If any rule made hub tabs inherit segmented look, scope chips only under `.workspace-filter-chips`.

Optional tighten (keep subtle):

```css
.hub-chrome {
  margin: 0 0 8px;
}

.hub-chrome-tabs.talent-tabs {
  margin-bottom: 0;
  border-bottom-color: var(--border);
}

.hub-chrome-tabs.talent-tabs button {
  flex: 0 1 auto;
  min-height: 44px;
  padding: 10px 14px;
}
```

(Do not force equal `flex: 1` stretch if it makes hub feel like another segmented bar — auto width is preferred for continuous workspace.)

- [ ] **Step 3: Visual smoke (partial)**

Open app, hard-refresh. Hub Recrutamento tabs should still look underline. Pendências/Talentos may look wrong until Tasks 2–3 — that is OK if segmented green box is already gone.

- [ ] **Step 4: Commit**

```bash
git add styles.css
git commit -m "style: replace segmented bucket bars with workspace chip tokens"
```

---

### Task 2: Pendências RH — buckets as toolbar chips

**Files:**
- Modify: `index.html` (~795–826 `#pendenciasPage`)
- Modify: `styles.css` if `#pendenciasPage` needs a tools row layout
- Modify: `app.js` only if querySelector assumptions break (should not)

**Interfaces:**
- Consumes: `.workspace-filter-chips` from Task 1; existing `data-pendencias-bucket` + count IDs
- Produces: markup structure `#pendenciasPage` → tools row with chips + existing type bar

- [ ] **Step 1: Restructure markup**

Replace the standalone `<nav class="page-menu talent-tabs fit-hub-tabs pendencias-hub-tabs" …>` with a tools row **above** the list, chips first:

```html
<div class="pendencias-tools" aria-label="Filtros de pendências">
  <nav
    class="workspace-filter-chips"
    role="tablist"
    aria-label="Buckets de pendências"
  >
    <button type="button" role="tab" data-pendencias-bucket="mine" aria-selected="true">
      Minhas
      <span class="talent-tab-count" id="pendenciasMineCount">0</span>
    </button>
    <button type="button" role="tab" data-pendencias-bucket="team" aria-selected="false">
      Equipe
      <span class="talent-tab-count" id="pendenciasTeamCount">0</span>
    </button>
    <button type="button" role="tab" data-pendencias-bucket="overdue" aria-selected="false">
      Vencidas
      <span class="talent-tab-count" id="pendenciasOverdueCount">0</span>
    </button>
    <button type="button" role="tab" data-pendencias-bucket="dueSoon" aria-selected="false">
      Próximas do vencimento
      <span class="talent-tab-count" id="pendenciasDueSoonCount">0</span>
    </button>
  </nav>
</div>
```

Keep `#pendenciasTypeBar` / `#pendenciasList` / empty state as-is below. Remove classes `talent-tabs fit-hub-tabs pendencias-hub-tabs` from this nav.

- [ ] **Step 2: Tools row CSS**

```css
.pendencias-tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 12px;
  margin: 0 0 12px;
}
```

Tighten welcome on this page if still oversized (`margin-bottom` ~16px max).

- [ ] **Step 3: Verify JS still updates counts/selection**

In browser: open `#recrutamento/pendencias`, click Minhas / Equipe / Vencidas / Próximas. Counts still update; list filters; type chips still work. No console errors.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: Pendências buckets as workspace filter chips"
```

---

### Task 3: Talentos — listas as chips in talent toolbar

**Files:**
- Modify: `index.html` (`#talentosPage` ~987–1057)
- Modify: `styles.css` (`.talent-toolbar` alignment with chips)

**Interfaces:**
- Consumes: `.workspace-filter-chips`; `data-talent-tab` handlers in `app.js` (~17782)
- Produces: chips inside `.talent-toolbar` before search

- [ ] **Step 1: Move tablist into toolbar**

Remove the standalone nav above the toolbar. Put chips as first child of `.analytics-toolbar.talent-toolbar`:

```html
<div class="analytics-toolbar talent-toolbar" aria-label="Busca e filtros do banco">
  <nav class="workspace-filter-chips" role="tablist" aria-label="Listas do banco de talentos">
    <button type="button" role="tab" id="tabAprovados" aria-selected="true" aria-controls="talentList" data-talent-tab="aprovados">
      <span class="talent-tab-icon" aria-hidden="true"><svg class="ui-icon"><use href="#i-check-circle" /></svg></span>
      Aprovados
      <span class="talent-tab-count" id="aprovadosCount">17</span>
    </button>
    <button type="button" role="tab" id="tabBloqueados" aria-selected="false" aria-controls="talentList" data-talent-tab="bloqueados">
      <span class="talent-tab-icon" aria-hidden="true"><svg class="ui-icon"><use href="#i-ban" /></svg></span>
      Bloqueados
      <span class="talent-tab-count" id="bloqueadosCount">5</span>
    </button>
    <button type="button" role="tab" id="tabRemovidos" aria-selected="false" aria-controls="talentList" data-talent-tab="removidos">
      <span class="talent-tab-icon" aria-hidden="true"><svg class="ui-icon"><use href="#i-trash" /></svg></span>
      Removidos
      <span class="talent-tab-count" id="removidosCount">0</span>
    </button>
  </nav>
  <!-- existing search / Filtros / Só válidos unchanged -->
</div>
```

Keep all IDs and `data-talent-tab` values identical.

- [ ] **Step 2: Toolbar CSS**

```css
.talent-toolbar .workspace-filter-chips {
  flex: 1 1 100%;
}

@media (min-width: 900px) {
  .talent-toolbar .workspace-filter-chips {
    flex: 0 1 auto;
  }
}
```

Optional: shrink `.talent-tab-icon` inside chips to 18×18 so row stays compact.

- [ ] **Step 3: QA**

`#recrutamento/talentos`: switch Aprovados/Bloqueados/Removidos; search placeholder updates if JS does that; Convidar still works. No second full-width bar above search.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: Talentos listas as chips in toolbar"
```

---

### Task 4: Gestor — same chip contract on shared bucket navs

**Files:**
- Modify: `index.html` (`#gestorPendenciasBuckets`, `#gestorEntrevistasBuckets` ~1391–1420)
- Modify: `styles.css` — remove leftover segmented rules targeting these IDs

**Interfaces:**
- Consumes: `.workspace-filter-chips`
- Produces: gestor buckets visually aligned with RH

- [ ] **Step 1: Swap classes on gestor bucket navs**

Change:

`class="talent-tabs fit-hub-tabs pendencias-hub-tabs"`

to:

`class="workspace-filter-chips"`

on `#gestorPendenciasBuckets` and `#gestorEntrevistasBuckets`. Keep button `data-*` attributes and IDs unchanged.

Leave `#gestorVagasHubTabs` and other hub/section underlines as `.talent-tabs` (L2), not chips — only true 3rd-level buckets become chips.

- [ ] **Step 2: Purge dead CSS**

Remove remaining rules that style `#gestorPendenciasBuckets` / `#gestorEntrevistasBuckets` as segmented green bars (duplicates under ~21010). Ensure no `color: #fff` + `background: var(--brand-600)` remains for these.

- [ ] **Step 3: QA Gestor**

Switch papel Gestor → Recrutamento Pendências / Entrevistas buckets. Chips behave; counts update.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: align Gestor buckets with workspace chips"
```

---

### Task 5: Density polish + hub motion + cache + graphify

**Files:**
- Modify: `styles.css` (welcome margins, list padding if needed, short content transition)
- Modify: `index.html` cache `?v=nav-hubs-371` → next (`nav-hubs-380` or higher)
- Run: `graphify update .`

**Interfaces:**
- Consumes: completed Tasks 1–4
- Produces: shippable visual wave + updated graph

- [ ] **Step 1: Density**

- `#pendenciasPage` / `#talentosPage` `.dashboard-welcome`: reduce bottom margin to ~12–16px; keep title operational (no hero)
- Ensure no gray box wraps hub chrome
- List cards: avoid extra outer chrome; hairline dividers OK

- [ ] **Step 2: Motion (hub content only)**

```css
.dashboard-page:not([hidden]) {
  animation: workspace-pane-in 180ms ease-out;
}

@keyframes workspace-pane-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .dashboard-page:not([hidden]) { animation: none; }
}
```

Do not add bounce or decorative motion.

- [ ] **Step 3: Cache-bust**

In `index.html`, replace both:

`styles.css?v=nav-hubs-371` and `app.js?v=nav-hubs-371`

with e.g. `?v=nav-hubs-380` (or current+1 if already bumped mid-plan).

- [ ] **Step 4: Full QA checklist**

| Check | Expected |
|-------|----------|
| Recrutamento hub tabs | Underline only; not green solid bar |
| Pendências buckets | Chips in tools row; filter works |
| Talentos listas | Chips in toolbar; filter works |
| Gestor buckets | Same chip look |
| Sidebar / hashes | Unchanged |
| Início KPIs | Still only on dashboard |
| Hard-refresh | New CSS/JS loads |

- [ ] **Step 5: graphify update**

```bash
graphify update .
```

- [ ] **Step 6: Commit**

```bash
git add index.html styles.css graphify-out
git commit -m "style: workspace density, motion, cache; refresh graphify"
```

---

## Spec coverage (self-review)

| Spec requirement | Task |
|------------------|------|
| Hub underline L2; no segmented L2 | 1, 5 |
| Pendências buckets → chips | 2 |
| Talentos A/B/R → chips in toolbar | 3 |
| Remove gray/green chrome boxes | 1–4 |
| Gestor share chrome | 4 |
| KPIs stay on Início | 5 (no change to dashboard KPI placement) |
| Motion 150–200ms pane | 5 |
| Hashes/JS attrs intact | 2–4 |
| No new IA/screens | all |
| Cache + graphify | 5 |

**Out of scope (explicit):** drawer evolution, kanban redesign, candidato portal full restyle, brand/font change.

**Placeholder scan:** none intentional.  
**Type/attr consistency:** `data-pendencias-bucket`, `data-talent-tab`, count element IDs unchanged across tasks.
