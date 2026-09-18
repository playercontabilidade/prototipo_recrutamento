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

Keep all IDs and `data-talent-tab` values identical. Remove the old standalone `nav.page-menu.talent-tabs.pendencias-hub-tabs` above the toolbar.

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

`#recrutamento/talentos`: switch Aprovados/Bloqueados/Removidos; search still works; Convidar still works. No second full-width bar above search.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: Talentos listas as chips in toolbar"
```

**Note:** Do not stage unrelated `app.js`. Do not change `data-talent-tab` handlers unless broken.
