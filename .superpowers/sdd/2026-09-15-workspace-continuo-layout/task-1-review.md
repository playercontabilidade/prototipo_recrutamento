# Task 1 Review — Shared chip styles + retire segmented chrome

**Reviewer:** Task-scoped gate  
**Base:** `7595acb5db4562f50f97eceb77c8b24d04cf5672`  
**Head:** `11189e9` (`style: replace segmented bucket bars with workspace chip tokens`)  
**Sources:** `task-1-brief.md`, `task-1-report.md`, `git diff 7595acb..11189e9 -- styles.css` (review diff file path was not present in workspace)

---

## Verdict summary

| Gate | Result |
|------|--------|
| **Spec** | ✅ |
| **Quality** | Changes requested |

---

## Spec compliance

### Step 1 — Chip contract + retire segmented chrome

**Met.**

- `.workspace-filter-chips` block matches the brief’s contract (layout, 8px radius, outline default, soft `--brand-50` active fill, count/icon accents). No solid `--brand-600` / white text on bucket selectors in head.
- Aliases cover `.pendencias-hub-tabs.talent-tabs`, gestor hub wrappers, and `#gestorPendenciasBuckets` / `#gestorEntrevistasBuckets`, so existing markup loses segmented-bar chrome before Tasks 2–4.
- Segmented patterns called out in the brief (`flex: 1 1 0` stretch, green tray, solid green active pill) are not present on those selectors in the new rules; gestor duplicate flex block was consolidated into the shared chip block.
- Global constraints: green is accent (border/text/soft fill), not bar chrome; chip radius 8px; buckets read as chips not a full-width bar (`width: auto`, `flex: 0 0 auto`).

**Minor alias parity gaps (non-blocking for Step 1):**

- Active state lists `.is-active` for `.workspace-filter-chips` and `.pendencias-hub-tabs.talent-tabs` only; gestor-scoped selectors and bucket IDs omit `button.is-active` (app often sets `aria-selected` on hub tabs, so likely OK).
- Active count styling is wired for `.pendencias-hub-tabs` but not explicitly for `#gestorPendenciasBuckets` / `#gestorEntrevistasBuckets` count nodes.

### Step 2 — Hub L2 underline

**Met.**

- L2 hubs in markup use `hub-chrome-tabs` without `pendencias-hub-tabs` (e.g. Recrutamento / Seleção). Chip rules target bucket classes/IDs, not `.hub-chrome-tabs.talent-tabs button`.
- Optional tighten applied: `.hub-chrome` margin, `.hub-chrome-tabs.talent-tabs` border-bottom color, auto-width buttons (`flex: 0 1 auto`, 44px min-height, padding). Base `.talent-tabs` underline rules remain elsewhere in the stylesheet.

### Step 3 — Visual smoke

**Partially met (acceptable for Task 1).**

- Report documents CSS grep verification; no automated visual smoke. Brief allows Pendências/Talentos to look transitional until Tasks 2–3.

### Step 4 — Commit scope (file)

**Met.**

- Single commit touches `styles.css` only; `index.html` / `app.js` not in commit.

### Global constraints checklist

| Constraint | Status |
|------------|--------|
| Green = underline/CTA/accent, not solid segmented bars | ✅ on bucket selectors |
| Chip radius 6–8px; outline default; soft fill when active | ✅ (8px) |
| Hub L2 underline (`.hub-chrome-tabs` / `.talent-tabs`) | ✅ not chip-styled |
| Only `styles.css` in deliverable | ✅ file; see quality for *content* scope |
| Max 2 nav levels visually for buckets (chips not bars) | ✅ |

---

## Task quality

### Strengths

- Clear comment anchor and shared selector list reduce duplication between `.workspace-filter-chips` and legacy aliases.
- Gestor `margin: 0 0 12px` override preserved at ~21026 and wins over the 16px alias margin via source order.
- Implementer report is accurate on hub vs bucket class split and honestly notes missing browser smoke.

### Issues

See findings below. Primary concern: **commit mixes Task 1 chip/hub work with unrelated sidebar/layout hunks**, which conflicts with the brief’s scoped blocks (~19022–19109, gestor ~21010+, optional hub tighten) and the report’s “only chip task” intent. Implementer already flagged this in **Concerns**.

---

## Findings

### Important

1. **Scope creep in `11189e9`** — Diff includes changes outside Task 1 brief: `.content-scroll` gap/margin, multiple `.main-nav` / `.sidebar .main-nav` gap compactions, candidate sidebar nav spacing, `.main-nav > .nav-item` dashboard/gestor margins, removal of `.hub-chrome { padding: 0 20px; }`, and duplicate `.main-nav` rule consolidation (~5991). These are not required to deliver the chip contract or L2 optional tighten and make review/rollback of Task 1 harder. **Recommendation:** split into a follow-up commit or revert unrelated hunks so Task 1 commit is chip + hub-scoped only.

2. **`.hub-chrome` padding removed without brief mention** — Optional Step 2 snippet only adjusted margin and tab buttons. Dropping horizontal padding may shift L2 hub alignment independently of underline semantics; worth confirming visually or restoring padding unless a separate design decision owns it.

### Minor

3. **Incomplete alias for `.is-active` and active count pills on gestor bucket IDs** — Mirror `.pendencias-hub-tabs.talent-tabs` active selectors on `#gestorPendenciasBuckets` / `#gestorEntrevistasBuckets` (and gestor hub wrappers) for defensive parity if markup/JS toggles class without `aria-selected`.

4. **Step 3 not executed in browser** — Acceptable per brief for this task; parent should hard-refresh after Tasks 2–3 or run a quick visual check on Recrutamento underline + gestor bucket chips.

5. **Base commit already lacked Impostograma comment block** — Task still delivered the forward-looking `.workspace-filter-chips` contract; no gap, but segmented “before” state in brief may refer to an earlier tree or other selectors. Head state achieves the intended chip appearance on current HTML.

### Critical

None.

---

## Recommendation

**Approve Task 1 chip/hub CSS intent for Tasks 2–4 to proceed**, but **request a hygiene pass on commit `11189e9`**: isolate or revert non–Task 1 `styles.css` hunks before treating this commit as the canonical Task 1 land, unless the parent explicitly accepts bundled sidebar/workspace spacing as part of the same delivery.

---

## Overlap / redundancy (anti-redundância)

- **Already existed:** Generic `.talent-tabs` underline for L2; minimal gestor bucket flex wrapper at ~21010.
- **What changed:** Bucket-level nav sharing chip visual system via aliases; optional hub-chrome density tweaks.
- **Avoided:** New HTML classes or parallel nav components in this task (correct deferral to Tasks 2–4).
- **Not avoided in commit:** Unrelated sidebar density edits (should not be attributed to Task 1 without explicit scope).
