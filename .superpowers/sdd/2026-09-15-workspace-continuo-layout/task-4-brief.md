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

Note: After Task 1, these IDs may already be aliased to chip styles. Prefer simplifying: either keep thin margin overrides only, or rely solely on `.workspace-filter-chips` now that HTML has that class. Do not break RH Pendências.

- [ ] **Step 3: QA Gestor**

Switch papel Gestor → Recrutamento Pendências / Entrevistas buckets. Chips behave; counts update.

- [ ] **Step 4: Commit**

```bash
git add index.html styles.css
git commit -m "feat: align Gestor buckets with workspace chips"
```
