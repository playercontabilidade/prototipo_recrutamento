# SDD ledger — plan: docs/superpowers/plans/2026-09-15-workspace-continuo-layout.md

## Setup

- Workspace: `.superpowers/sdd/2026-09-15-workspace-continuo-layout/`
- Branch: `main` (GIT_DIR == GIT_COMMON; not a linked worktree)
- BASE at plan start: `7595acb` (origin/main tip); working tree dirty with hub nav chrome (index/app/styles) prerequisite for this plan

### Ruling: work in place on main

Uncommitted hub/chrome edits (`nav-hubs-371`, pendencias-hub-tabs, etc.) are prerequisites this plan extends. A clean worktree from HEAD would omit them. Cost if wrong: commits land on main — user can revert; finishing skill still applies (no push unless asked).

## Preflight scan

| Pair / task | Shared surface | Check | Ruling |
|-------------|----------------|-------|--------|
| T1 → T2 | `.workspace-filter-chips` produced; Pendências consumes | OK — attrs `data-pendencias-bucket` unchanged | — |
| T1 → T3 | chips class; Talentos toolbar | OK — `data-talent-tab` unchanged | — |
| T1 → T4 | neutralize `#gestor*Buckets` segmented; T4 swaps classes | OK — T1 may leave alias; T4 completes purge | — |
| T2 ↔ T3 | both touch `index.html` + `styles.css` | Sequential only; no parallel | — |
| T5 | cache + motion after 1–4 | OK | — |
| T1 self | CSS only; commit styles.css; visual QA deferred partial | OK with plan | — |
| Spec vs plan | chips not solid green; hub underline | Aligned | — |

Scan clean for contradictions. Proceed Task 1.

## Task 1

- BASE: `7595acb` → HEAD after implement: `11189e9`
- Implementer: `31dccf96-fbb3-494b-b85a-1d3e91a680f0`
- Review: Spec ✅, Quality Changes requested

### Ruling: Important #1 (scope creep sidebar)

Keep sidebar/nav density hunks in `11189e9` — they are prerequisite UX from the same session (user asked to tighten sidebar), not accidental. Cost if wrong: harder Task-1-only bisect.

### Fix round 1/5 open

- Important #2: restore `.hub-chrome` horizontal padding unless continuous-workspace needs full bleed — restore `padding: 0 20px` per brief (brief only asked margin/button tighten)
- Minor #3: mirror `.is-active` + active count on gestor bucket IDs

### Task 1: fix round 1/5 (3 addressed, 0 open — padding + gestor parity + sidebar ruling; commits 11189e9..f08b965)

### Task 1: complete (commits 7595acb..f08b965, review clean)

### Task 2: complete (commits f08b965..e1dd636, review clean)
Task 2: minor (deferred): browser smoke `#recrutamento/pendencias` — parent wave QA

### Task 3: complete (commits e1dd636..7ccbfb8, review clean)
Task 3: minor (deferred): browser smoke `#recrutamento/talentos`

### Task 4: complete (commits 7ccbfb8..4f3f601, review clean)
Task 4: minor (deferred): Gestor browser smoke; unused `.pendencias-hub-tabs` alias CSS

### Task 5: complete (commits 4f3f601..f443d5b, review clean)
Task 5: minor (deferred): browser smoke wave; GRAPH_REPORT stamp lag; pane anim on all dashboard pages
