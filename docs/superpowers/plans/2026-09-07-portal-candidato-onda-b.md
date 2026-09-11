# Portal candidato Onda B — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or executing-plans.

**Goal:** Completar a base do portal do candidato (home, candidatura, entrevistas, testes) sem nova superfície.

**Architecture:** Estender `#candidatePortal` / `setCandidatePortalView` / renders existentes; deep-links entre home → apps/entrevistas/testes.

**Tech Stack:** `index.html`, `app.js`, `styles.css`

**Spec:** `docs/superpowers/specs/2026-09-07-portal-candidato-onda-b-design.md`

## File map

| File | Change |
|------|--------|
| `index.html` | Blocos home; view detalhe candidatura; anexos perfil se preciso |
| `app.js` | Renders, ações entrevista, retirar candidatura, próximos passos |
| `styles.css` | Home/apps/entrevistas mobile |

### Task 1: Home estruturada
- [ ] Seções explícitas: candidaturas/status, próximas ações, pendências, entrevistas, testes
- [ ] CTAs para views existentes

### Task 2: Detalhe de candidatura
- [ ] View `app-detail` ou painel em apps: vaga, status, etapa exibível, próximos passos, retirar

### Task 3: Entrevistas
- [ ] Confirmar, reagendar, recusar, abrir link (completar stubs)

### Task 4: Testes + perfil + mobile
- [ ] Garantir iniciar/continuar/status
- [ ] Anexos no perfil (lista stub)
- [ ] CSS mobile das views tocadas
