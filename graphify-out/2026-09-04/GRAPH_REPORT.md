# Graph Report - Prototipação Vagas  (2026-09-04)

## Corpus Check
- 31 files · ~107,383 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1084 nodes · 2227 edges · 56 communities (52 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 51 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5f8dda7b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- Design: Fluxo completo da proposta de contratação
- setCandidatePortalView
- getSheetTemplateById
- Estrutura de arquivos
- openInterviewEditor
- dayKey
- ensureConductDraft
- hireCandidate
- updateCandidateFilterButton
- Design: Onda 1 — vagas, status, contratação e portal
- renderEntityDialog
- openNewJobPage
- departmentOptions
- toggleSidebar
- Design: Entrevistas — ciclo de vida completo
- openBookingDialog
- setCandidateSidebarCollapsed
- 06 — Componentes
- Estrutura de arquivos
- 07 — Portais
- Estrutura de arquivos
- 02 — Botões
- 03 — Campos e formulários
- README.md
- 04 — Modais
- 08 — Checklist para nova tela ou ajuste
- 05 — Layout e shell
- 01 — Fundamentos
- Design: Agenda enxuta — Dia / Semana / Mês
- renderPipeline
- Design: Fichas de entrevista estruturadas
- Estrutura de arquivos
- runPendenciaAction
- escapeHtml
- Estrutura de arquivos
- Design: Condução de entrevista ao vivo
- Estrutura de arquivos
- Design: Gestão de testes aplicados ao candidato
- Estrutura de arquivos
- renderReports
- openConductHistory
- Estrutura de arquivos
- Design: Fit Cultural (configuração, aplicação e análise)
- Design: Scorecard (critérios, avaliação e Score Geral)
- showToast
- syncFitCompareButton
- Design: Timeline da candidatura (dossiê)
- Estrutura de arquivos
- defaultConductNextStage
- Cards e painéis
- sheetTemplateCard
- showPage
- proposalSalary
- Design: Pendências (inbox de ação RH / equipe)
- Estrutura de arquivos

## God Nodes (most connected - your core abstractions)
1. `escapeHtml()` - 86 edges
2. `showToast()` - 56 edges
3. `normalize()` - 43 edges
4. `runPipelineCandidateAction()` - 29 edges
5. `renderCandidateDetails()` - 28 edges
6. `renderPipeline()` - 27 edges
7. `showPage()` - 22 edges
8. `goToPage()` - 21 edges
9. `setCandidatePortalView()` - 19 edges
10. `runPendenciaAction()` - 18 edges

## Surprising Connections (you probably didn't know these)
- `renderTalents()` --indirect_call--> `talentTemplate()`  [INFERRED]
  app.js → app.js  _Bridges community 2 → community 45_
- `renderResults()` --indirect_call--> `resultTemplate()`  [INFERRED]
  app.js → app.js  _Bridges community 2 → community 8_
- `buildCandidateTimeline()` --calls--> `testTypeLabel()`  [EXTRACTED]
  app.js → app.js  _Bridges community 34 → community 45_
- `getCandidateTestScore()` --calls--> `assignmentsForCandidate()`  [EXTRACTED]
  app.js → app.js  _Bridges community 34 → community 2_
- `resolvePendingSubject()` --calls--> `getScoreEvaluationById()`  [EXTRACTED]
  app.js → app.js  _Bridges community 45 → community 33_

## Import Cycles
- None detected.

## Communities (56 total, 4 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.01
Nodes (145): activityList, appShell, benefitOptions, benefitsCatalog, bookingDialog, calendarCursor, calendarGrid, candidateApplicationStages (+137 more)

### Community 1 - "Design: Fluxo completo da proposta de contratação"
Cohesion: 0.12
Nodes (15): Actions by status, Approval, Compatibilidade, Data model, Decisions, Design: Fluxo completo da proposta de contratação, Error / empty states, In (+7 more)

### Community 2 - "setCandidatePortalView"
Cohesion: 0.07
Nodes (50): candidateApplicationTimeline(), candidateAppsFilterLabel(), candidateAppStageClass(), candidateJobAvailability(), candidateJobDatePanel(), candidateMetaGrid(), computeMatch(), fillCandidateProfileForm() (+42 more)

### Community 3 - "getSheetTemplateById"
Cohesion: 0.17
Nodes (20): addSheetQuestion(), createSheetTemplate(), deleteSheetTemplate(), duplicateSheetQuestion(), duplicateSheetTemplate(), fillSheetJobsChecklist(), getSheetTemplateById(), moveSheetQuestion() (+12 more)

### Community 4 - "Estrutura de arquivos"
Cohesion: 0.13
Nodes (14): Estrutura de arquivos, Global Constraints, Placeholder scan, Scorecard (Resultados) — Implementation Plan, Spec coverage (self-review), Task 1: Modelo + seeds + cálculo + auto-fill, Task 2: Casca do hub Resultados (3 abas), Task 3: Aba Scorecards (lista + editor) (+6 more)

### Community 5 - "openInterviewEditor"
Cohesion: 0.23
Nodes (13): confirmBookingSlot(), defaultInterviewTimeEnd(), fillInterviewInterviewers(), fillInterviewSheetOptions(), fillInterviewStageOptions(), formatBRDate(), getActiveSheetTemplates(), interviewInterviewerOptions() (+5 more)

### Community 6 - "dayKey"
Cohesion: 0.14
Nodes (23): agendaEventChip(), calendarEventsForMonth(), dayKey(), fillAgendaVacancyFilter(), formatInterviewGroupLabel(), fullCalendarEventClass(), getAgendaInterviews(), getFilteredInterviews() (+15 more)

### Community 7 - "ensureConductDraft"
Cohesion: 0.09
Nodes (46): autosaveConductDraft(), backToConductWorkspace(), clearConductAutosaveTimer(), closeInterviewConduct(), closeInterviewMoreActions(), conductProgress(), confirmCandidateInterview(), ensureConductDraft() (+38 more)

### Community 8 - "hireCandidate"
Cohesion: 0.11
Nodes (32): candidateAvatars(), closeJobMoreActions(), duplicateJob(), ensureJobDefaults(), getFilteredJobs(), getFilteredResults(), hideCandidate(), hireCandidate() (+24 more)

### Community 9 - "updateCandidateFilterButton"
Cohesion: 0.31
Nodes (9): applyCandidateJobFilters(), clearCandidateJobFilters(), closeCandidateFiltersDialog(), defaultCandidateJobFilters(), fillCandidateFiltersForm(), getCandidateFiltersDialog(), hasActiveCandidateFilters(), openCandidateFiltersDialog() (+1 more)

### Community 10 - "Design: Onda 1 — vagas, status, contratação e portal"
Cohesion: 0.06
Nodes (30): Approach A: Só lado RH, Approach B: Slice RH + pipeline + portal-reação, Approach C: Portal first, Approach D: App inteiro agora, Approaches Considered, Call sites dos helpers (lista fechada), Constraints, Contratar (pipeline) (+22 more)

### Community 11 - "renderEntityDialog"
Cohesion: 0.40
Nodes (5): entityButton(), entityStatusMeta(), openEntityDialog(), openPendingTalentReview(), renderEntityDialog()

### Community 12 - "openNewJobPage"
Cohesion: 0.50
Nodes (4): openNewJobPage(), renderNewJobCatalogs(), renderNewJobStages(), syncNewJobStagesValue()

### Community 13 - "departmentOptions"
Cohesion: 0.67
Nodes (3): departmentOptions(), openSettingsManagerForm(), openSettingsRoleForm()

### Community 14 - "toggleSidebar"
Cohesion: 0.67
Nodes (3): isMobileNav(), setSidebarCollapsed(), toggleSidebar()

### Community 15 - "Design: Entrevistas — ciclo de vida completo"
Cohesion: 0.08
Nodes (23): Aceite funcional, Approach 1: Expandir o que já existe, Approach 2: Detalhe como painel único de ciclo de vida, Approach 3: Fluxos RH e candidato desacoplados, Approaches Considered, Constraints, Decisions (brainstorming), Design: Entrevistas — ciclo de vida completo (+15 more)

### Community 18 - "06 — Componentes"
Cohesion: 0.18
Nodes (11): 06 — Componentes, Avatar, Badges e status, Busca, Candidato — `.candidate-search-bar`, Help card (sidebar footer), Listas de vagas (RH), Matching UI (+3 more)

### Community 19 - "Estrutura de arquivos"
Cohesion: 0.17
Nodes (11): Entrevistas — Ciclo de Vida Implementation Plan, Estrutura de arquivos, Global Constraints, Placeholder scan, Spec coverage (self-review), Task 1: Modelo, helpers e migração de seeds, Task 2: Formulário completo (create / edit / reschedule) + conflito, Task 3: Detalhe RH — ações e cancelamento com motivo (+3 more)

### Community 20 - "07 — Portais"
Cohesion: 0.18
Nodes (10): 07 — Portais, Comparar telas de referência, Footer, Grupos de menu, Navegação, Portal do Candidato (`#candidatePortal`), Portal do Gestor (`#gestorPage`), Portal RH (`#app-shell`) (+2 more)

### Community 21 - "Estrutura de arquivos"
Cohesion: 0.18
Nodes (10): Definition of Done, Estrutura de arquivos, Global Constraints, Onda 1 — Vagas, Status, Contratação e Portal Implementation Plan, Task 1: Regras de domínio e identidade estável da vaga, Task 2: Contratação e métricas reativas no RH, Task 3: Vitrine e detalhe do portal com estados explícitos, Task 4: Guardas da candidatura simples e em lote (+2 more)

### Community 22 - "02 — Botões"
Cohesion: 0.20
Nodes (9): 02 — Botões, Especificações, Footer de modal (padrão), Hierarquia, Icon button, O que evitar, Page back link, Primary (+1 more)

### Community 23 - "03 — Campos e formulários"
Cohesion: 0.20
Nodes (10): 03 — Campos e formulários, Campos para matching (candidato), Chips de seleção — `.catalog-chip`, Grid de formulário, Hint abaixo do campo, Modal de filtros (candidato), Padrão nova vaga — `.new-job-field`, Padrão RH — `.form-field` (+2 more)

### Community 24 - "README.md"
Cohesion: 0.22
Nodes (5): Arquivos, Design System — Portal RH (Protótipo), Onde está no código, Regras de ouro, Versão

### Community 25 - "04 — Modais"
Cohesion: 0.22
Nodes (8): 04 — Modais, A) `stack-dialog` — fluxos e pickers, B) `settings-form-dialog` — catálogos e formulários RH, C) `interview-detail-dialog` — detalhe entrevista, Comportamento JS, D) `candidate-filter-dialog` — filtros candidato, Header, O que evitar

### Community 26 - "08 — Checklist para nova tela ou ajuste"
Cohesion: 0.22
Nodes (9): 08 — Checklist para nova tela ou ajuste, Antes de codar, Comportamento, Cores, Entrega, Estrutura, Formulários, Modais (+1 more)

### Community 27 - "05 — Layout e shell"
Cohesion: 0.15
Nodes (12): 05 — Layout e shell, App shell (Portal RH), Brand, Estrutura obrigatória, Footer, Grids candidato, Nav item, Perfil (RH e Candidato) (+4 more)

### Community 28 - "01 — Fundamentos"
Cohesion: 0.15
Nodes (12): 01 — Fundamentos, Azul navy — processo e informação (~5%), Espaçamento (ritmo), Estados de foco, Eyebrow (rótulo superior), Layout, Neutros (~80%), Semânticas (+4 more)

### Community 29 - "Design: Agenda enxuta — Dia / Semana / Mês"
Cohesion: 0.29
Nodes (6): Aceite, Decisions, Design: Agenda enxuta — Dia / Semana / Mês, Problem Statement, Scope (enxuto), Surfaces

### Community 30 - "renderPipeline"
Cohesion: 0.09
Nodes (31): applyPipelineFiltersFromDialog(), candidateApplicationMatchesFilter(), candidateCardTemplate(), candidateComments(), candidateNextActionsMarkup(), cardPanelMarkup(), clearPipelineAdvancedFilters(), clearPipelineSelection() (+23 more)

### Community 31 - "Design: Fichas de entrevista estruturadas"
Cohesion: 0.12
Nodes (15): Aceite, Ações, Data model, Decisions, Design: Fichas de entrevista estruturadas, Editor, In, Integração com agendamento (+7 more)

### Community 32 - "Estrutura de arquivos"
Cohesion: 0.17
Nodes (11): Estrutura de arquivos, Fichas de Entrevista Implementation Plan, Global Constraints, Placeholder scan, Spec coverage check, Task 1: Nav, página shell e roteamento, Task 2: Modelo, seeds e helpers, Task 3: Listagem e ações de linha (+3 more)

### Community 33 - "runPendenciaAction"
Cohesion: 0.13
Nodes (20): closeCandidateMoreActions(), contactPreviewText(), dossierTabForPendingType(), focusPendingTarget(), moveCandidate(), openCandidate(), openContactDialog(), openMoveStageDialog() (+12 more)

### Community 34 - "escapeHtml"
Cohesion: 0.05
Nodes (80): addFitPillar(), assignmentActionsFor(), assignmentCatalog(), assignmentsForCandidate(), assignmentStatusClass(), assignmentTitle(), candidateTestKey(), closeAssignmentMoreActions() (+72 more)

### Community 35 - "Estrutura de arquivos"
Cohesion: 0.18
Nodes (10): Estrutura de arquivos, Global Constraints, Placeholder scan, Proposta de contratação (fluxo completo) — Implementation Plan, Spec coverage (self-review), Task 1: Modelo + normalize + labels + seeds, Task 2: HTML — resumo, editor completo, diálogo de recusa, Task 3: Render resumo + editor + ações disponíveis (+2 more)

### Community 36 - "Design: Condução de entrevista ao vivo"
Cohesion: 0.14
Nodes (13): Aceite, Data model, Decisions, Design: Condução de entrevista ao vivo, Fluxos prototipados, In, Integração com ciclo de vida, Layout (condução) (+5 more)

### Community 37 - "Estrutura de arquivos"
Cohesion: 0.17
Nodes (11): Condução de Entrevista Implementation Plan, Estrutura de arquivos, Global Constraints, Placeholder scan, Spec coverage, Task 1: Shell HTML da modal + confirms, Task 2: Modelo de rascunho e helpers, Task 3: Abrir / render condução (workspace) (+3 more)

### Community 38 - "Design: Gestão de testes aplicados ao candidato"
Cohesion: 0.13
Nodes (14): Aceite, Actions matrix, Data model, Decisions, Design: Gestão de testes aplicados ao candidato, In, Integration, Layout notes (+6 more)

### Community 39 - "Estrutura de arquivos"
Cohesion: 0.17
Nodes (11): Estrutura de arquivos, Global Constraints, Spec coverage, Task 1: Modelo de dados + seeds tipados, Task 2: Catálogo — tipo no editor e listagem, Task 3: Hub HTML — página Testes aplicados + nav, Task 4: Render hub + dossiê (lista padronizada), Task 5: Modal detalhe + ações operacionais (+3 more)

### Community 40 - "renderReports"
Cohesion: 0.50
Nodes (5): chartRamp(), formatDays(), renderOriginDonut(), renderRankChart(), renderReports()

### Community 41 - "openConductHistory"
Cohesion: 0.67
Nodes (3): getConductCandidate(), getConductingInterview(), openConductHistory()

### Community 42 - "Estrutura de arquivos"
Cohesion: 0.12
Nodes (15): Estrutura de arquivos, Fit Cultural — Implementation Plan, Global Constraints, Placeholder scan, Spec coverage (self-review), Task 10: Portal + cache + aceite, Task 1: Modelo de dados + seeds + cálculo de aderência, Task 2: Nav + casca da página (4 abas) (+7 more)

### Community 43 - "Design: Fit Cultural (configuração, aplicação e análise)"
Cohesion: 0.14
Nodes (13): Approval, Data model, Decisions, Design: Fit Cultural (configuração, aplicação e análise), Error / empty states, In, Out, Problem Statement (+5 more)

### Community 44 - "Design: Scorecard (critérios, avaliação e Score Geral)"
Cohesion: 0.13
Nodes (14): Approval, Data model, Decisions, Design: Scorecard (critérios, avaliação e Score Geral), Error / empty states, In, Out, Problem Statement (+6 more)

### Community 45 - "showToast"
Cohesion: 0.06
Nodes (76): activeScorecardForVacancy(), addCandidateComment(), applyCatalogTestToCandidate(), approveCandidateToTalentBank(), autoScoreForCriterion(), blockCandidate(), buildCandidateTimeline(), computeOverallScore() (+68 more)

### Community 47 - "Design: Timeline da candidatura (dossiê)"
Cohesion: 0.13
Nodes (14): Agregação, Approval, Data model, Decisions, Deep-links, Design: Timeline da candidatura (dossiê), Error / empty states, In (+6 more)

### Community 48 - "Estrutura de arquivos"
Cohesion: 0.15
Nodes (12): Estrutura de arquivos, Global Constraints, Placeholder scan, Spec coverage (self-review), Task 1: Modelo + labels + pushTimelineEvent, Task 2: buildCandidateTimeline (agregador), Task 3: Seeds timeline no candidato rico, Task 4: UI da aba Timeline (markup + render) (+4 more)

### Community 50 - "Cards e painéis"
Cohesion: 0.40
Nodes (5): `.candidate-job-card`, `.candidate-panel` (Candidato), Cards e painéis, `.dashboard-panel` (RH), `.gestor-item` (Portal gestor)

### Community 51 - "sheetTemplateCard"
Cohesion: 0.22
Nodes (9): closeSheetMoreMenus(), formatSheetDate(), getFilteredSheetTemplates(), padCount(), renderGestorPortal(), renderSheetTemplates(), sheetJobsLabel(), sheetQuestionsLabel() (+1 more)

### Community 52 - "showPage"
Cohesion: 0.10
Nodes (22): analysisStatusMeta(), closeCandidatePortal(), closeOverlayDialogs(), closeSidebar(), closeTopbarPopovers(), createTest(), formatAnalyticsPeriodLabel(), goToPage() (+14 more)

### Community 53 - "proposalSalary"
Cohesion: 0.10
Nodes (40): applyPipelineBulkStage(), archiveProposalVersion(), buildPendencies(), confirmMoveStage(), countPendenciesByBucket(), createEmptyProposal(), ensureCandidateProposal(), ensureProposalShape() (+32 more)

### Community 55 - "Design: Pendências (inbox de ação RH / equipe)"
Cohesion: 0.12
Nodes (15): Approval, Ações rápidas, Buckets (vistas), Data model, Decisions, Derivação (regras MVP), Design: Pendências (inbox de ação RH / equipe), Error / empty states (+7 more)

### Community 56 - "Estrutura de arquivos"
Cohesion: 0.18
Nodes (10): Estrutura de arquivos, Global Constraints, Pendências (inbox de ação) — Implementation Plan, Placeholder scan, Spec coverage (self-review), Task 1: Modelo + helpers + `buildPendencies()` + seeds, Task 2: Shell HTML — nav + `#pendenciasPage`, Task 3: Render — buckets, chips, cards, contagens (+2 more)

## Knowledge Gaps
- **452 isolated node(s):** `jobs`, `candidates`, `candidateSkillDefaults`, `candidateStageEnteredDefaults`, `candidateConsentDefaults` (+447 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 501 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `06 — Componentes` connect `06 — Componentes` to `README.md`, `Cards e painéis`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `escapeHtml()` connect `escapeHtml` to `app.js`, `runPendenciaAction`, `setCandidatePortalView`, `getSheetTemplateById`, `openInterviewEditor`, `dayKey`, `ensureConductDraft`, `hireCandidate`, `openConductHistory`, `renderReports`, `openNewJobPage`, `showToast`, `sheetTemplateCard`, `showPage`, `proposalSalary`, `renderPipeline`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `jobs`, `candidates`, `candidateSkillDefaults` to the rest of the system?**
  _452 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.011494252873563218 - nodes in this community are weakly interconnected._
- **Should `Design: Fluxo completo da proposta de contratação` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `setCandidatePortalView` be split into smaller, more focused modules?**
  _Cohesion score 0.07183673469387755 - nodes in this community are weakly interconnected._
- **Should `Estrutura de arquivos` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._