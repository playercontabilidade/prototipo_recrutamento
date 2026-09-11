# Graph Report - Prototipação Vagas  (2026-09-03)

## Corpus Check
- 21 files · ~76,483 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 792 nodes · 1585 edges · 41 communities (39 shown, 2 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 46 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5f8dda7b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- renderReports
- normalize
- getSheetTemplateById
- showPage
- hireCandidate
- dayKey
- showToast
- openInterviewEditor
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
- Cards e painéis
- Design: Fichas de entrevista estruturadas
- Estrutura de arquivos
- openContactDialog
- escapeHtml
- renderPipeline
- Design: Condução de entrevista ao vivo
- Estrutura de arquivos
- Design: Gestão de testes aplicados ao candidato
- Estrutura de arquivos
- openConductHistory

## God Nodes (most connected - your core abstractions)
1. `escapeHtml()` - 61 edges
2. `showToast()` - 37 edges
3. `normalize()` - 33 edges
4. `renderPipeline()` - 26 edges
5. `runPipelineCandidateAction()` - 23 edges
6. `renderCandidateDetails()` - 19 edges
7. `showPage()` - 19 edges
8. `getSheetTemplateById()` - 18 edges
9. `goToPage()` - 18 edges
10. `setCandidatePortalView()` - 18 edges

## Surprising Connections (you probably didn't know these)
- `openApplyTestForCandidate()` --calls--> `testTypeLabel()`  [EXTRACTED]
  app.js → app.js  _Bridges community 34 → community 35_
- `agendaEventChip()` --calls--> `normalize()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 6_
- `approveCandidateToTalentBank()` --calls--> `normalize()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 7_
- `assignmentStatusClass()` --calls--> `normalize()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 34_
- `blockCandidate()` --calls--> `normalize()`  [EXTRACTED]
  app.js → app.js  _Bridges community 2 → community 4_

## Import Cycles
- None detected.

## Communities (41 total, 2 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.01
Nodes (128): activityList, appShell, benefitOptions, benefitsCatalog, bookingDialog, calendarCursor, calendarGrid, candidateApplicationStages (+120 more)

### Community 1 - "renderReports"
Cohesion: 0.40
Nodes (6): chartRamp(), daysInStage(), formatDays(), renderOriginDonut(), renderRankChart(), renderReports()

### Community 2 - "normalize"
Cohesion: 0.08
Nodes (53): candidateApplicationMatchesFilter(), candidateApplicationTimeline(), candidateAppsFilterLabel(), candidateAppStageClass(), candidateJobAvailability(), candidateJobDatePanel(), candidateMetaGrid(), closeInterviewMoreActions() (+45 more)

### Community 3 - "getSheetTemplateById"
Cohesion: 0.17
Nodes (20): addSheetQuestion(), createSheetTemplate(), deleteSheetTemplate(), duplicateSheetQuestion(), duplicateSheetTemplate(), fillSheetJobsChecklist(), getSheetTemplateById(), moveSheetQuestion() (+12 more)

### Community 4 - "showPage"
Cohesion: 0.07
Nodes (33): analysisStatusMeta(), blockCandidate(), closeSidebar(), createTest(), formatAnalyticsPeriodLabel(), formatMoney(), getFilteredResults(), getFilteredTalents() (+25 more)

### Community 5 - "hireCandidate"
Cohesion: 0.12
Nodes (31): candidateAvatars(), closeJobMoreActions(), duplicateJob(), ensureJobDefaults(), getFilteredJobs(), hireCandidate(), jobActionsForStatus(), jobCanHire() (+23 more)

### Community 6 - "dayKey"
Cohesion: 0.14
Nodes (23): agendaEventChip(), calendarEventsForMonth(), dayKey(), fillAgendaVacancyFilter(), formatInterviewGroupLabel(), fullCalendarEventClass(), getAgendaInterviews(), getFilteredInterviews() (+15 more)

### Community 7 - "showToast"
Cohesion: 0.09
Nodes (46): approveCandidateToTalentBank(), autosaveConductDraft(), backToConductWorkspace(), clearConductAutosaveTimer(), closeInterviewConduct(), closeOverlayDialogs(), closeTopbarPopovers(), conductProgress() (+38 more)

### Community 8 - "openInterviewEditor"
Cohesion: 0.23
Nodes (13): confirmBookingSlot(), defaultInterviewTimeEnd(), fillInterviewInterviewers(), fillInterviewSheetOptions(), fillInterviewStageOptions(), formatBRDate(), getActiveSheetTemplates(), interviewInterviewerOptions() (+5 more)

### Community 9 - "updateCandidateFilterButton"
Cohesion: 0.27
Nodes (10): applyCandidateJobFilters(), clearCandidateJobFilters(), closeCandidateFiltersDialog(), closeCandidatePortal(), defaultCandidateJobFilters(), fillCandidateFiltersForm(), getCandidateFiltersDialog(), hasActiveCandidateFilters() (+2 more)

### Community 10 - "Design: Onda 1 — vagas, status, contratação e portal"
Cohesion: 0.06
Nodes (30): Approach A: Só lado RH, Approach B: Slice RH + pipeline + portal-reação, Approach C: Portal first, Approach D: App inteiro agora, Approaches Considered, Call sites dos helpers (lista fechada), Constraints, Contratar (pipeline) (+22 more)

### Community 11 - "renderEntityDialog"
Cohesion: 0.50
Nodes (4): entityButton(), entityStatusMeta(), openEntityDialog(), renderEntityDialog()

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

### Community 30 - "Cards e painéis"
Cohesion: 0.40
Nodes (5): `.candidate-job-card`, `.candidate-panel` (Candidato), Cards e painéis, `.dashboard-panel` (RH), `.gestor-item` (Portal gestor)

### Community 31 - "Design: Fichas de entrevista estruturadas"
Cohesion: 0.12
Nodes (15): Aceite, Ações, Data model, Decisions, Design: Fichas de entrevista estruturadas, Editor, In, Integração com agendamento (+7 more)

### Community 32 - "Estrutura de arquivos"
Cohesion: 0.17
Nodes (11): Estrutura de arquivos, Fichas de Entrevista Implementation Plan, Global Constraints, Placeholder scan, Spec coverage check, Task 1: Nav, página shell e roteamento, Task 2: Modelo, seeds e helpers, Task 3: Listagem e ações de linha (+3 more)

### Community 33 - "openContactDialog"
Cohesion: 0.67
Nodes (4): contactPreviewText(), openContactDialog(), setContactChannel(), updateContactPreview()

### Community 34 - "escapeHtml"
Cohesion: 0.07
Nodes (53): assignmentActionsFor(), assignmentCatalog(), assignmentsForCandidate(), assignmentStatusClass(), assignmentTitle(), candidateTestKey(), closeAssignmentMoreActions(), closeSheetMoreMenus() (+45 more)

### Community 35 - "renderPipeline"
Cohesion: 0.05
Nodes (58): addCandidateComment(), applyCatalogTestToCandidate(), applyPipelineBulkStage(), applyPipelineFiltersFromDialog(), candidateCardTemplate(), candidateComments(), candidateNextActionsMarkup(), cardPanelMarkup() (+50 more)

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

### Community 41 - "openConductHistory"
Cohesion: 0.67
Nodes (3): getConductCandidate(), getConductingInterview(), openConductHistory()

## Knowledge Gaps
- **327 isolated node(s):** `jobs`, `candidates`, `candidateSkillDefaults`, `candidateStageEnteredDefaults`, `candidateConsentDefaults` (+322 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 364 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `06 — Componentes` connect `06 — Componentes` to `README.md`, `Cards e painéis`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `renderPipeline()` (e.g. with `app.js` and `candidateCardTemplate()`) actually correct?**
  _`renderPipeline()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `jobs`, `candidates`, `candidateSkillDefaults` to the rest of the system?**
  _327 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.012903225806451613 - nodes in this community are weakly interconnected._
- **Should `normalize` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `showPage` be split into smaller, more focused modules?**
  _Cohesion score 0.07196969696969698 - nodes in this community are weakly interconnected._
- **Should `hireCandidate` be split into smaller, more focused modules?**
  _Cohesion score 0.12043010752688173 - nodes in this community are weakly interconnected._