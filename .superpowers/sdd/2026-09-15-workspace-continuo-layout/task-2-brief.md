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

**Note:** Prefer not to stage unrelated `app.js` changes. Keep all `data-pendencias-bucket` and count element IDs identical. `.workspace-filter-chips` already exists from Task 1 (`f08b965`).
