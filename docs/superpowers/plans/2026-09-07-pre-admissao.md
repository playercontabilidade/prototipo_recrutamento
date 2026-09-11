# Pré-admissão Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Acompanhar candidato do clique Contratar até Converter em colaborador, via aba em Resultados.

**Architecture:** Extender hub Resultados; `startPreAdmission` substitui o efeito imediato de `hireCandidate`; `convertPreAdmissionToEmployee` reusa a lógica antiga de contratação; checklist sincroniza com `ensureCandidateDocuments`.

**Tech Stack:** `index.html`, `app.js`, `styles.css` (protótipo estático).

**Spec:** `docs/superpowers/specs/2026-09-07-pre-admissao-design.md`

## File map

| File | Responsibility |
|------|----------------|
| `index.html` | Aba + painel lista/detalhe pré-admissão |
| `app.js` | Modelo, seeds, render, ações, rewire Contratar |
| `styles.css` | Layout lista/detalhe/checklist |

---

### Task 1: Shell UI na aba Resultados

- [ ] Aba `data-resultados-hub-tab="preadmissao"` + painel `#preAdmissaoPanel` (lista + detalhe)
- [ ] Incluir tab no `setResultadosHubTab` / `syncResultadosHubTab` / `renderResultadosPage`

### Task 2: Modelo + seeds + sync docs

- [ ] Array `preAdmissions`, statuses, `ensurePreAdmissionChecklist(candidate|record)`
- [ ] Enrich `documentChecklist` com `required`, `owner`, `due`
- [ ] 1–2 seeds com progresso parcial

### Task 3: Lista + detalhe + ações

- [ ] `renderPreAdmissions` / `openPreAdmissionDetail`
- [ ] Ações: solicitar, enviar, aprovar, reprovar, correção, concluir item, pendência, finalizar, converter
- [ ] Progresso = % itens obrigatórios aprovados (ou todos se nenhum obrigatório)

### Task 4: Rewire Contratar

- [ ] `hireCandidate` → `startPreAdmission` (toast + `goToPage resultados` hub preadmissao)
- [ ] `convertPreAdmissionToEmployee` = corpo antigo de hire (remove pipeline, results contratados)

### Task 5: CSS + graphify + smoke

- [ ] Estilos compactos alinhados a Resultados
- [ ] `graphify update .`
- [ ] Manual: Contratar → aba → ações → converter → Contratados
