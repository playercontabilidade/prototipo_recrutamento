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

**Note for implementer:** `styles.css` may already have uncommitted edits from prior hub work. Commit **only** `styles.css` for this task (do not stage `index.html` / `app.js`). Alias `.pendencias-hub-tabs` to chip styles temporarily so existing HTML does not keep solid green bars until Tasks 2–4 migrate markup.
