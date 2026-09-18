### Task 5: Density polish + hub motion + cache + graphify

**Files:**
- Modify: `styles.css` (welcome margins, list padding if needed, short content transition)
- Modify: `index.html` cache `?v=` → `nav-hubs-380` (current may be `nav-hubs-360` or other — set both CSS and JS to `nav-hubs-380`)
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

In `index.html`, set both stylesheet and script to `?v=nav-hubs-380`.

- [ ] **Step 4: Full QA checklist** (document results in report)

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

If graphify CLI fails, note in report; do not block on dated backup folders.

- [ ] **Step 6: Commit**

```bash
git add index.html styles.css
# add graphify-out only if update produced meaningful tracked changes (prefer graph.json / labels if present)
git commit -m "style: workspace density, motion, cache; refresh graphify"
```

Optional cleanup: remove unused `.pendencias-hub-tabs` alias CSS if no HTML still uses that class (grep first). Only if safe.
