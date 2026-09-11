# Graph Report - Prototipação Vagas  (2026-09-10)

## Corpus Check
- 49 files · ~157,488 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1554 nodes · 3225 edges · 89 communities (84 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `34eac6e4`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- Design: Fluxo completo da proposta de contratação
- setCandidatePortalView
- Design: Portal do candidato — Onda C (proposta + pré-admissão)
- Estrutura de arquivos
- runPendenciaAction
- dayKey
- escapeHtml
- renderGestorPortal
- updateCandidateFilterButton
- Design: Onda 1 — vagas, status, contratação e portal
- renderPendenciasPage
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
- goToPage
- Design: Fichas de entrevista estruturadas
- Estrutura de arquivos
- normalize
- openCandidateTestDetail
- Estrutura de arquivos
- Design: Condução de entrevista ao vivo
- Estrutura de arquivos
- Design: Gestão de testes aplicados ao candidato
- Estrutura de arquivos
- renderAnalytics
- openConductHistory
- Estrutura de arquivos
- Design: Fit Cultural (configuração, aplicação e análise)
- Design: Scorecard (critérios, avaliação e Score Geral)
- ensureConductDraft
- openScoreEvaluationDetail
- Design: Timeline da candidatura (dossiê)
- Estrutura de arquivos
- Design: Análise de Candidatos pelo Gestor
- Cards e painéis
- Design: Acompanhamento da vaga (Portal do Gestor)
- runPipelineCandidateAction
- renderGestorCandidatePanel
- File map
- Design: Pendências (inbox de ação RH / equipe)
- Estrutura de arquivos
- File map
- saveGestorRequestDraft
- Estrutura de arquivos
- File map
- Design: Pré-admissão (candidato aprovado → colaborador)
- Design: Portal do candidato — Onda B (base)
- formatBRDate
- Design: Solicitação de Entrevista pelo Gestor
- Design: Central de Pendências do Gestor
- Estrutura de arquivos
- Design: Dashboard estratégico de recrutamento (Indicadores → Painel)
- getFitQuestionById
- renderTalents
- getSheetTemplateById
- File map
- submitGestorInterviewRequest
- showToast
- renderFitCulturalPage
- Estrutura de arquivos
- Estrutura de arquivos
- formatInterviewWhen
- openFitAssignmentDetail
- openScorecardEditor
- buildCandidateTimeline
- persistCandidateTakingProgress
- Design: Entrevistas do Gestor
- renderCandidateDetails
- Estrutura de arquivos
- closePendenciasMoreMenus
- renderEntityDialog
- defaultAnalyticsWidgetVisibility
- readAnalyticsWidgetChecksIntoState

## God Nodes (most connected - your core abstractions)
1. `escapeHtml()` - 125 edges
2. `showToast()` - 86 edges
3. `normalize()` - 60 edges
4. `runPipelineCandidateAction()` - 29 edges
5. `renderCandidateDetails()` - 28 edges
6. `formatBRDate()` - 28 edges
7. `renderPipeline()` - 27 edges
8. `renderGestorPortal()` - 27 edges
9. `goToPage()` - 27 edges
10. `setCandidatePortalView()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `renderGestorJobCandidatesTable()` --indirect_call--> `gestorCandidateRow()`  [INFERRED]
  app.js → app.js  _Bridges community 53 → community 8_
- `buildCandidateTimeline()` --calls--> `testTypeLabel()`  [EXTRACTED]
  app.js → app.js  _Bridges community 34 → community 80_
- `openApplyTestForCandidate()` --calls--> `testTypeLabel()`  [EXTRACTED]
  app.js → app.js  _Bridges community 34 → community 52_
- `renderCandidateTests()` --calls--> `testTypeLabel()`  [EXTRACTED]
  app.js → app.js  _Bridges community 34 → community 2_
- `testTemplate()` --calls--> `testTypeLabel()`  [EXTRACTED]
  app.js → app.js  _Bridges community 34 → community 7_

## Import Cycles
- None detected.

## Communities (89 total, 5 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.01
Nodes (179): activityList, ANALYTICS_CHART_WIDGETS, ANALYTICS_KPI_WIDGETS, analyticsDrillState, analyticsFilters, analyticsWidgetVisibility, APPROVAL_PERSONAS, approvalPersona (+171 more)

### Community 1 - "Design: Fluxo completo da proposta de contratação"
Cohesion: 0.12
Nodes (15): Actions by status, Approval, Compatibilidade, Data model, Decisions, Design: Fluxo completo da proposta de contratação, Error / empty states, In (+7 more)

### Community 2 - "setCandidatePortalView"
Cohesion: 0.06
Nodes (71): candidateActionMapMarkup(), candidateApplicationMatchesFilter(), candidateApplicationTimeline(), candidateAppNextSteps(), candidateAppsFilterLabel(), candidateAppStageClass(), candidateJobAvailability(), candidateJobDatePanel() (+63 more)

### Community 3 - "Design: Portal do candidato — Onda C (proposta + pré-admissão)"
Cohesion: 0.14
Nodes (13): Anti-redundância, Data, Decisions, Design: Portal do candidato — Onda C (proposta + pré-admissão), In, Integração, Out, Problem (+5 more)

### Community 4 - "Estrutura de arquivos"
Cohesion: 0.13
Nodes (14): Estrutura de arquivos, Global Constraints, Placeholder scan, Scorecard (Resultados) — Implementation Plan, Spec coverage (self-review), Task 1: Modelo + seeds + cálculo + auto-fill, Task 2: Casca do hub Resultados (3 abas), Task 3: Aba Scorecards (lista + editor) (+6 more)

### Community 5 - "runPendenciaAction"
Cohesion: 0.11
Nodes (22): closeCandidateMoreActions(), contactPreviewText(), dossierTabForPendingType(), focusPendingTarget(), moveCandidate(), openCandidate(), openContactDialog(), openMoveStageDialog() (+14 more)

### Community 6 - "dayKey"
Cohesion: 0.14
Nodes (23): agendaEventChip(), calendarEventsForMonth(), dayKey(), fillAgendaVacancyFilter(), formatInterviewGroupLabel(), fullCalendarEventClass(), getAgendaInterviews(), getFilteredInterviews() (+15 more)

### Community 7 - "escapeHtml"
Cohesion: 0.16
Nodes (18): escapeHtml(), fillTalentFilterOptions(), getTestGabaritoStats(), openTestPreview(), pendenciasTypeChipButton(), questionLabel(), questionTypeLabel(), renderCandidateTestTaking() (+10 more)

### Community 8 - "renderGestorPortal"
Cohesion: 0.06
Nodes (51): blankHiringRequest(), buildGestorPendencies(), cancelInterviewRequest(), closeGestorRequestForm(), collectGestorOverviewMetrics(), countGestorInterviewBuckets(), countGestorPendencies(), findOpenInterviewRequest() (+43 more)

### Community 9 - "updateCandidateFilterButton"
Cohesion: 0.27
Nodes (10): applyCandidateJobFilters(), clearCandidateJobFilters(), closeCandidateFiltersDialog(), closeCandidatePortal(), defaultCandidateJobFilters(), fillCandidateFiltersForm(), getCandidateFiltersDialog(), hasActiveCandidateFilters() (+2 more)

### Community 10 - "Design: Onda 1 — vagas, status, contratação e portal"
Cohesion: 0.06
Nodes (30): Approach A: Só lado RH, Approach B: Slice RH + pipeline + portal-reação, Approach C: Portal first, Approach D: App inteiro agora, Approaches Considered, Call sites dos helpers (lista fechada), Constraints, Contratar (pipeline) (+22 more)

### Community 11 - "renderPendenciasPage"
Cohesion: 0.18
Nodes (19): buildPendencies(), countPendenciesByBucket(), findPendingItemById(), formatPendingDue(), getPendenciesForBucket(), isPendingDueSoon(), isPendingMine(), isPendingOverdue() (+11 more)

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

### Community 30 - "goToPage"
Cohesion: 0.06
Nodes (58): candidateAvatars(), closeGestorJobView(), closeJobMoreActions(), closeSidebar(), convertPreAdmissionToEmployee(), createTest(), duplicateJob(), ensureJobDefaults() (+50 more)

### Community 31 - "Design: Fichas de entrevista estruturadas"
Cohesion: 0.12
Nodes (15): Aceite, Ações, Data model, Decisions, Design: Fichas de entrevista estruturadas, Editor, In, Integração com agendamento (+7 more)

### Community 32 - "Estrutura de arquivos"
Cohesion: 0.17
Nodes (11): Estrutura de arquivos, Fichas de Entrevista Implementation Plan, Global Constraints, Placeholder scan, Spec coverage check, Task 1: Nav, página shell e roteamento, Task 2: Modelo, seeds e helpers, Task 3: Listagem e ações de linha (+3 more)

### Community 33 - "normalize"
Cohesion: 0.13
Nodes (19): activeScorecardForVacancy(), blockCandidate(), ensureScoreEvaluation(), findAnalysisForCandidate(), findCandidateForAnalysis(), getAnalyticsUniverse(), inAnalyticsPeriod(), matchesAnalyticsFilters() (+11 more)

### Community 34 - "openCandidateTestDetail"
Cohesion: 0.19
Nodes (22): assignmentActionsFor(), assignmentCatalog(), assignmentStatusClass(), assignmentTitle(), closeAssignmentMoreActions(), downloadAssignmentPdf(), getAssignmentById(), getFilteredAssignments() (+14 more)

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

### Community 40 - "renderAnalytics"
Cohesion: 0.10
Nodes (25): candidateToDrillItem(), chartRamp(), clearAnalyticsAdvancedFilters(), clearSingleAnalyticsFilter(), closeAnalyticsFiltersDialog(), countBy(), exportAnalyticsStub(), fillAnalyticsFilterOptions() (+17 more)

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

### Community 45 - "ensureConductDraft"
Cohesion: 0.16
Nodes (26): addConductPoint(), autosaveConductDraft(), backToConductWorkspace(), closeInterviewConduct(), conductProgress(), defaultConductNextStage(), ensureConductDraft(), fillConductNextStageOptions() (+18 more)

### Community 46 - "openScoreEvaluationDetail"
Cohesion: 0.18
Nodes (26): autoScoreForCriterion(), computeOverallScore(), deriveEvaluationStatus(), emptyScoreRows(), evaluationPendingCriteria(), evaluationsWithAlerts(), getScorecardById(), getScoreEvaluationById() (+18 more)

### Community 47 - "Design: Timeline da candidatura (dossiê)"
Cohesion: 0.13
Nodes (14): Agregação, Approval, Data model, Decisions, Deep-links, Design: Timeline da candidatura (dossiê), Error / empty states, In (+6 more)

### Community 48 - "Estrutura de arquivos"
Cohesion: 0.15
Nodes (12): Estrutura de arquivos, Global Constraints, Placeholder scan, Spec coverage (self-review), Task 1: Modelo + labels + pushTimelineEvent, Task 2: buildCandidateTimeline (agregador), Task 3: Seeds timeline no candidato rico, Task 4: UI da aba Timeline (markup + render) (+4 more)

### Community 49 - "Design: Análise de Candidatos pelo Gestor"
Cohesion: 0.13
Nodes (14): Anti-redundância, Approval, Data model, Decisions, Design: Análise de Candidatos pelo Gestor, Error / empty states, In, Out (+6 more)

### Community 50 - "Cards e painéis"
Cohesion: 0.40
Nodes (5): `.candidate-job-card`, `.candidate-panel` (Candidato), Cards e painéis, `.dashboard-panel` (RH), `.gestor-item` (Portal gestor)

### Community 51 - "Design: Acompanhamento da vaga (Portal do Gestor)"
Cohesion: 0.11
Nodes (17): Approval, Data model, Decisions, Design: Acompanhamento da vaga (Portal do Gestor), Error / empty states, In, Out, Parecer / comentário (+9 more)

### Community 52 - "runPipelineCandidateAction"
Cohesion: 0.05
Nodes (68): applyCatalogTestToCandidate(), applyPipelineBulkStage(), applyPipelineFiltersFromDialog(), archiveProposalVersion(), candidateCardTemplate(), cardPanelMarkup(), clearPipelineAdvancedFilters(), clearPipelineSelection() (+60 more)

### Community 53 - "renderGestorCandidatePanel"
Cohesion: 0.13
Nodes (22): candidateComments(), candidateHasPendingGestorAnalysis(), closeGestorAnalysisMoreMenu(), daysInStage(), emptyProcessValue(), fitAssignmentsForCandidate(), gestorAnalysisToolbarIcon(), gestorCandidateDaysInProcess() (+14 more)

### Community 54 - "File map"
Cohesion: 0.22
Nodes (8): File map, Global Constraints, Portal candidato Onda C — Implementation Plan, Spec coverage check, Task 1: Seeds + helpers + shell das views, Task 2: View proposta — visualizar, aceitar, recusar, Task 3: View pré-admissão + upload stub, Task 4: Home + app-detail + polish mobile

### Community 55 - "Design: Pendências (inbox de ação RH / equipe)"
Cohesion: 0.12
Nodes (15): Approval, Ações rápidas, Buckets (vistas), Data model, Decisions, Derivação (regras MVP), Design: Pendências (inbox de ação RH / equipe), Error / empty states (+7 more)

### Community 56 - "Estrutura de arquivos"
Cohesion: 0.18
Nodes (10): Estrutura de arquivos, Global Constraints, Pendências (inbox de ação) — Implementation Plan, Placeholder scan, Spec coverage (self-review), Task 1: Modelo + helpers + `buildPendencies()` + seeds, Task 2: Shell HTML — nav + `#pendenciasPage`, Task 3: Render — buckets, chips, cards, contagens (+2 more)

### Community 57 - "File map"
Cohesion: 0.25
Nodes (7): File map, Pré-admissão Implementation Plan, Task 1: Shell UI na aba Resultados, Task 2: Modelo + seeds + sync docs, Task 3: Lista + detalhe + ações, Task 4: Rewire Contratar, Task 5: CSS + graphify + smoke

### Community 58 - "saveGestorRequestDraft"
Cohesion: 0.50
Nodes (4): applyFormToHiringRequest(), pushHiringRequestHistory(), readGestorRequestFormValues(), saveGestorRequestDraft()

### Community 59 - "Estrutura de arquivos"
Cohesion: 0.17
Nodes (11): Acompanhamento da vaga (Portal do Gestor) — Implementation Plan, Estrutura de arquivos, Global Constraints, Placeholder scan, Spec coverage (self-review), Task 1: Permissões + helpers + seeds de vaga, Task 2: HTML — home / job view / painel / toggles, Task 3: Render detalhe — Andamento (resumo, funil, tabela) (+3 more)

### Community 60 - "File map"
Cohesion: 0.29
Nodes (6): File map, Portal candidato Onda B — Implementation Plan, Task 1: Home estruturada, Task 2: Detalhe de candidatura, Task 3: Entrevistas, Task 4: Testes + perfil + mobile

### Community 61 - "Design: Pré-admissão (candidato aprovado → colaborador)"
Cohesion: 0.29
Nodes (6): Data, Decisions, Design: Pré-admissão (candidato aprovado → colaborador), Out, Problem, Surfaces

### Community 62 - "Design: Portal do candidato — Onda B (base)"
Cohesion: 0.33
Nodes (5): Decisions, Design: Portal do candidato — Onda B (base), In, Out, Problem

### Community 63 - "formatBRDate"
Cohesion: 0.06
Nodes (50): addPreAdmissionPendency(), analysisStatusMeta(), applyHiringRequestDecision(), canGestorApproveRequests(), closeHiringRequestDecisionDialog(), commitGestorRequestDecision(), confirmBookingSlot(), defaultInterviewTimeEnd() (+42 more)

### Community 64 - "Design: Solicitação de Entrevista pelo Gestor"
Cohesion: 0.13
Nodes (14): Anti-redundância, Approval, Data model, Decisions, Design: Solicitação de Entrevista pelo Gestor, Error / empty states, In, Out (+6 more)

### Community 65 - "Design: Central de Pendências do Gestor"
Cohesion: 0.12
Nodes (15): Anti-redundância, Approval, Auto-conclusão, Data model, Decisions, Design: Central de Pendências do Gestor, Error / empty states, In (+7 more)

### Community 66 - "Estrutura de arquivos"
Cohesion: 0.20
Nodes (9): Estrutura de arquivos, Global Constraints, Solicitação de Entrevista pelo Gestor — Implementation Plan, Spec coverage (self-review), Task 1: Modelo `interviewRequests` + permissão + seeds, Task 2: Dialog gestor — solicitar entrevista, Task 3: Pendência RH — propor horário / cancelar, Task 4: Pendência gestor — acompanhar / confirmar / cancelar (+1 more)

### Community 67 - "Design: Dashboard estratégico de recrutamento (Indicadores → Painel)"
Cohesion: 0.14
Nodes (13): Anti-redundância, Cards (8), Dados, Decisions, Design: Dashboard estratégico de recrutamento (Indicadores → Painel), Export, Filtros, In (+5 more)

### Community 68 - "getFitQuestionById"
Cohesion: 0.24
Nodes (11): addFitPillar(), duplicateFitQuestion(), getFitQuestionById(), openFitQuestionEditor(), renderCandidateFitTaking(), runFitHubPrimaryAction(), saveFitModel(), saveFitQuestion() (+3 more)

### Community 69 - "renderTalents"
Cohesion: 0.13
Nodes (22): applyTalentEdit(), clearTalentAdvancedFilters(), closeTalentDrawer(), closeTalentEditDialog(), formatTalentMoney(), getActiveTalentFilters(), getFilteredTalents(), inviteTalentToJob() (+14 more)

### Community 70 - "getSheetTemplateById"
Cohesion: 0.11
Nodes (28): addSheetQuestion(), closeSheetMoreMenus(), createSheetTemplate(), deleteSheetTemplate(), duplicateSheetQuestion(), duplicateSheetTemplate(), fillSheetJobsChecklist(), formatSheetDate() (+20 more)

### Community 71 - "File map"
Cohesion: 0.22
Nodes (8): Dashboard estratégico (Indicadores → Painel) — Implementation Plan, File map, Global Constraints, Spec coverage, Task 1: Shell HTML + redirect Relatórios + seeds, Task 2: `getStrategicAnalytics` + render cards/indicadores, Task 3: Drawer drill-down + abrir dossiê/vaga, Task 4: Export stub + polish + graphify

### Community 72 - "submitGestorInterviewRequest"
Cohesion: 0.67
Nodes (3): blankInterviewRequest(), collectGestorIrSlots(), submitGestorInterviewRequest()

### Community 73 - "showToast"
Cohesion: 0.17
Nodes (23): applyGestorCandidateDecision(), approveCandidateToTalentBank(), clearConductAutosaveTimer(), closeGestorCandidateDecisionDialog(), commitGestorCandidateDecision(), confirmCandidateInterview(), dismissCandidate(), ensureCandidateGestorNotes() (+15 more)

### Community 74 - "renderFitCulturalPage"
Cohesion: 0.24
Nodes (10): fitQuestionTypeLabel(), getFitPillarById(), openFitModelEditor(), refreshFitAssignmentStatuses(), removeFitPillar(), renderFitBanco(), renderFitCulturalPage(), renderFitModelos() (+2 more)

### Community 75 - "Estrutura de arquivos"
Cohesion: 0.17
Nodes (11): Análise de Candidatos pelo Gestor — Implementation Plan, Estrutura de arquivos, Global Constraints, Placeholder scan, Spec coverage (self-review), Task 1: Helpers de leitura + modelo de decisão, Task 2: Shell HTML do painel + mini-dialog, Task 3: Render do conteúdo de leitura + histórico (+3 more)

### Community 76 - "Estrutura de arquivos"
Cohesion: 0.18
Nodes (10): Central de Pendências do Gestor — Implementation Plan, Estrutura de arquivos, Global Constraints, Placeholder scan, Spec coverage, Task 1: Modelo `buildGestorPendencies` + prioridade, Task 2: Shell HTML da vista Pendências, Task 3: Render do hub + CTAs (+2 more)

### Community 77 - "formatInterviewWhen"
Cohesion: 0.19
Nodes (14): confirmInterviewRequest(), findInterviewConflicts(), formatInterviewWhen(), interviewInterval(), interviewsOverlap(), meetFromLink(), normalizeInterviewRecord(), normalizeInterviewSheetRef() (+6 more)

### Community 78 - "openFitAssignmentDetail"
Cohesion: 0.15
Nodes (22): closeFitMoreActions(), computeFitAdherence(), createFitAssignment(), findReusableFitAssignment(), fitAssignmentActionsFor(), fitModelTitle(), fitOptionScore(), fitQuestionMaxScore() (+14 more)

### Community 79 - "openScorecardEditor"
Cohesion: 0.25
Nodes (9): defaultScorecardCriteria(), duplicateScorecard(), fillScorecardVacancySelect(), linkScorecardToVacancy(), openScorecardEditor(), readScorecardCriteriaFromEditor(), renderScorecardCriteriaEditor(), runResultadosHubPrimary() (+1 more)

### Community 80 - "buildCandidateTimeline"
Cohesion: 0.47
Nodes (6): assignmentsForCandidate(), buildCandidateTimeline(), formatTimelineAt(), renderCandidateTimeline(), timelineEventCardMarkup(), timelineTypeLabel()

### Community 81 - "persistCandidateTakingProgress"
Cohesion: 0.67
Nodes (3): candidateTestKey(), persistCandidateTakingProgress(), saveCandidateTestDraft()

### Community 82 - "Design: Entrevistas do Gestor"
Cohesion: 0.13
Nodes (14): Anti-redundância, Approval, Data model, Decisions, Design: Entrevistas do Gestor, Error / empty states, In, Out (+6 more)

### Community 83 - "renderCandidateDetails"
Cohesion: 0.24
Nodes (11): addCandidateComment(), closeInterviewMoreActions(), ensureCandidateComments(), groupCandidateItemsByVacancy(), interviewIsActive(), interviewIsOverdue(), openInterviewDetail(), openTimelineRelated() (+3 more)

### Community 86 - "Estrutura de arquivos"
Cohesion: 0.20
Nodes (9): Entrevistas do Gestor — Implementation Plan, Estrutura de arquivos, Global Constraints, Spec coverage (self-review), Task 1: Helpers de bucket + seeds + nav gestor → hub, Task 2: Shell HTML + `renderGestorEntrevistasHub`, Task 3: Detalhe pré-entrevista (contexto gestor), Task 4: Estender condução — +/−, competências, recomendações (+1 more)

### Community 89 - "renderEntityDialog"
Cohesion: 0.33
Nodes (6): entityButton(), entityStatusMeta(), openEntityDialog(), openPendingTalentReview(), renderEntityDialog(), setEntityActivityCollapsed()

## Knowledge Gaps
- **640 isolated node(s):** `jobs`, `candidates`, `candidateSkillDefaults`, `candidateStageEnteredDefaults`, `candidateConsentDefaults` (+635 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 712 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `escapeHtml()` connect `escapeHtml` to `app.js`, `setCandidatePortalView`, `runPendenciaAction`, `dayKey`, `renderGestorPortal`, `renderPendenciasPage`, `openNewJobPage`, `goToPage`, `normalize`, `openCandidateTestDetail`, `renderAnalytics`, `openConductHistory`, `ensureConductDraft`, `openScoreEvaluationDetail`, `runPipelineCandidateAction`, `renderGestorCandidatePanel`, `formatBRDate`, `getFitQuestionById`, `renderTalents`, `getSheetTemplateById`, `showToast`, `renderFitCulturalPage`, `formatInterviewWhen`, `openFitAssignmentDetail`, `openScorecardEditor`, `buildCandidateTimeline`, `renderCandidateDetails`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Why does `normalize()` connect `normalize` to `app.js`, `openCandidateTestDetail`, `setCandidatePortalView`, `renderTalents`, `dayKey`, `renderGestorPortal`, `showToast`, `formatInterviewWhen`, `openFitAssignmentDetail`, `openScoreEvaluationDetail`, `buildCandidateTimeline`, `renderCandidateDetails`, `runPipelineCandidateAction`, `renderGestorCandidatePanel`, `renderEntityDialog`, `goToPage`, `formatBRDate`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `jobs`, `candidates`, `candidateSkillDefaults` to the rest of the system?**
  _640 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009389671361502348 - nodes in this community are weakly interconnected._
- **Should `Design: Fluxo completo da proposta de contratação` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `setCandidatePortalView` be split into smaller, more focused modules?**
  _Cohesion score 0.059154929577464786 - nodes in this community are weakly interconnected._
- **Should `Design: Portal do candidato — Onda C (proposta + pré-admissão)` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._