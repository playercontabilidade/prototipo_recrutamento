# Graph Report - Prototipação Vagas  (2026-09-15)

## Corpus Check
- 53 files · ~176,669 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1710 nodes · 3564 edges · 112 communities (100 shown, 12 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `174db1d0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- Design: Fluxo completo da proposta de contratação
- renderGestorPortal
- Design: Portal do candidato — Onda C (proposta + pré-admissão)
- Estrutura de arquivos
- initials
- dayKey
- renderPipeline
- renderPendenciasPage
- updateCandidateFilterButton
- Design: Onda 1 — vagas, status, contratação e portal
- Design: Reorganização de navegação e hubs (RH / Gestor / Candidato)
- showToast
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
- escapeHtml
- Design: Fichas de entrevista estruturadas
- Estrutura de arquivos
- syncFitCompareButton
- findDuplicates
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
- openFitAssignmentDetail
- renderCandidateDetails
- Design: Timeline da candidatura (dossiê)
- Estrutura de arquivos
- Design: Análise de Candidatos pelo Gestor
- Cards e painéis
- Design: Acompanhamento da vaga (Portal do Gestor)
- renderTalents
- openCandidateTestDetail
- File map
- Design: Pendências (inbox de ação RH / equipe)
- Estrutura de arquivos
- File map
- runPendenciaAction
- Estrutura de arquivos
- File map
- Design: Pré-admissão (candidato aprovado → colaborador)
- Design: Portal do candidato — Onda B (base)
- openRhHiringRequestDecision
- Design: Solicitação de Entrevista pelo Gestor
- Design: Central de Pendências do Gestor
- Estrutura de arquivos
- Design: Dashboard estratégico de recrutamento (Indicadores → Painel)
- Estrutura de arquivos
- getSheetTemplateById
- submitGestorInterviewRequest
- File map
- renderGestorCandidatePanel
- showPage
- openInterviewEditor
- Estrutura de arquivos
- Estrutura de arquivos
- openJobDetails
- sheetTemplateCard
- submitInterview
- openMoveStageDialog
- renderPreAdmissions
- Design: Entrevistas do Gestor
- syncCandidatePortalHash
- applyTalentEdit
- 6. Telas do Portal RH
- Estrutura de arquivos
- 8. Portal do candidato
- closePendenciasMoreMenus
- renderEntityDialog
- saveGestorRequestDraft
- Portal RH — Documentação funcional
- 7. Portal do gestor
- defaultAnalyticsWidgetVisibility
- readAnalyticsWidgetChecksIntoState
- persistCandidateTakingProgress
- normalize
- 2. Como executar e testar
- 5. Fluxos principais (ponta a ponta)
- goToPage
- 4. Mapa do sistema (atual)
- syncCandidateDossierPrimaryAction
- forceCloseAllDialogs
- 10. O que mudou em relação ao PDF de 28/08/2026
- syncTestsHubTab
- buildGestorPendencies
- renderNewJobStages
- runGestorPendenciaAction
- fillInterviewCandidateOptions
- Design: Portal RH × Processo Ágil Guide
- openGestorCandidateDecisionDialog
- formatBRDate

## God Nodes (most connected - your core abstractions)
1. `escapeHtml()` - 134 edges
2. `showToast()` - 91 edges
3. `normalize()` - 72 edges
4. `renderCandidateDetails()` - 32 edges
5. `goToPage()` - 31 edges
6. `setCandidatePortalView()` - 30 edges
7. `renderGestorPortal()` - 28 edges
8. `renderPipeline()` - 27 edges
9. `formatBRDate()` - 27 edges
10. `runPipelineCandidateAction()` - 27 edges

## Surprising Connections (you probably didn't know these)
- `renderTalents()` --indirect_call--> `talentTemplate()`  [INFERRED]
  app.js → app.js  _Bridges community 30 → community 52_
- `renderTests()` --indirect_call--> `testTemplate()`  [INFERRED]
  app.js → app.js  _Bridges community 30 → community 104_
- `buildCandidateTimeline()` --calls--> `testTypeLabel()`  [EXTRACTED]
  app.js → app.js  _Bridges community 53 → community 8_
- `renderCandidateTests()` --calls--> `testTypeLabel()`  [EXTRACTED]
  app.js → app.js  _Bridges community 53 → community 96_
- `testTemplate()` --calls--> `testTypeLabel()`  [EXTRACTED]
  app.js → app.js  _Bridges community 53 → community 30_

## Import Cycles
- None detected.

## Communities (112 total, 12 thin omitted)

### Community 0 - "app.js"
Cohesion: 0.01
Nodes (183): activityList, ANALYTICS_CHART_WIDGETS, ANALYTICS_KPI_WIDGETS, analyticsDrillState, analyticsFilters, analyticsWidgetVisibility, APPROVAL_PERSONAS, approvalPersona (+175 more)

### Community 1 - "Design: Fluxo completo da proposta de contratação"
Cohesion: 0.12
Nodes (15): Actions by status, Approval, Compatibilidade, Data model, Decisions, Design: Fluxo completo da proposta de contratação, Error / empty states, In (+7 more)

### Community 2 - "renderGestorPortal"
Cohesion: 0.18
Nodes (17): applyHiringRequestDecision(), closeGestorRequestForm(), closeHiringRequestDecisionDialog(), myGestorJobs(), openGestorJob(), openGestorRequestForm(), proposeInterviewRequestSlot(), refreshHiringRequestSurfaces() (+9 more)

### Community 3 - "Design: Portal do candidato — Onda C (proposta + pré-admissão)"
Cohesion: 0.14
Nodes (13): Anti-redundância, Data, Decisions, Design: Portal do candidato — Onda C (proposta + pré-admissão), In, Integração, Out, Problem (+5 more)

### Community 4 - "Estrutura de arquivos"
Cohesion: 0.13
Nodes (14): Estrutura de arquivos, Global Constraints, Placeholder scan, Scorecard (Resultados) — Implementation Plan, Spec coverage (self-review), Task 1: Modelo + seeds + cálculo + auto-fill, Task 2: Casca do hub Resultados (3 abas), Task 3: Aba Scorecards (lista + editor) (+6 more)

### Community 5 - "initials"
Cohesion: 0.20
Nodes (10): formatMoney(), getFilteredResults(), initials(), openCompanyForm(), renderCompanyLogoPreview(), renderResults(), resultCounts(), resultTemplate() (+2 more)

### Community 6 - "dayKey"
Cohesion: 0.12
Nodes (28): agendaEventChip(), calendarEventsForMonth(), countGestorInterviewBuckets(), dayKey(), fillAgendaVacancyFilter(), formatInterviewGroupLabel(), fullCalendarEventClass(), gestorInterviewBucket() (+20 more)

### Community 7 - "renderPipeline"
Cohesion: 0.09
Nodes (30): addCandidateComment(), applyCatalogTestToCandidate(), applyPipelineFiltersFromDialog(), assignmentsForCandidate(), candidateCardTemplate(), candidateComments(), cardPanelMarkup(), clearPipelineAdvancedFilters() (+22 more)

### Community 8 - "renderPendenciasPage"
Cohesion: 0.06
Nodes (62): applyOfferFormValues(), applyPipelineBulkStage(), archiveProposalVersion(), buildCandidateTimeline(), buildPendencies(), confirmMoveStage(), countPendenciesByBucket(), createEmptyProposal() (+54 more)

### Community 9 - "updateCandidateFilterButton"
Cohesion: 0.19
Nodes (13): applyCandidateJobFilters(), clearCandidateJobFilters(), closeCandidateFiltersDialog(), closeCandidatePortal(), defaultCandidateJobFilters(), fillCandidateFiltersForm(), gestorHomeFilterFromHash(), getCandidateFiltersDialog() (+5 more)

### Community 10 - "Design: Onda 1 — vagas, status, contratação e portal"
Cohesion: 0.06
Nodes (30): Approach A: Só lado RH, Approach B: Slice RH + pipeline + portal-reação, Approach C: Portal first, Approach D: App inteiro agora, Approaches Considered, Call sites dos helpers (lista fechada), Constraints, Contratar (pipeline) (+22 more)

### Community 11 - "Design: Reorganização de navegação e hubs (RH / Gestor / Candidato)"
Cohesion: 0.09
Nodes (22): 1. Navegação, 2. Início (RH), 3. Recrutamento + Seleção (RH), 4. Contratação (RH), 5. Gestor + Candidato, 6. Técnica, Anti-redundância, Arquivos principais (+14 more)

### Community 12 - "showToast"
Cohesion: 0.22
Nodes (18): approveCandidateToTalentBank(), clearConductAutosaveTimer(), confirmCandidateInterview(), confirmInterviewRequest(), finalizeConductInterview(), interviewActivity(), inviteTalentToJob(), normalizeInterviewRecord() (+10 more)

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
Cohesion: 0.20
Nodes (5): Arquivos, Design System — Portal RH (Protótipo), Onde está no código, Regras de ouro, Versão

### Community 25 - "04 — Modais"
Cohesion: 0.20
Nodes (10): 04 — Modais, A) `stack-dialog` — fluxos e pickers, B) `settings-form-dialog` — catálogos e formulários RH, C) `interview-detail-dialog` — detalhe entrevista, Cancelar ≠ Fechar, Comportamento JS, D) `candidate-filter-dialog` — filtros candidato, Header (+2 more)

### Community 26 - "08 — Checklist para nova tela ou ajuste"
Cohesion: 0.22
Nodes (9): 08 — Checklist para nova tela ou ajuste, Antes de codar, Comportamento, Cores, Entrega, Estrutura, Formulários, Modais (+1 more)

### Community 27 - "05 — Layout e shell"
Cohesion: 0.20
Nodes (9): 05 — Layout e shell, App shell (Portal RH), Estrutura, Grids candidato, Perfil (RH e Candidato), Portal do candidato, Páginas de conteúdo, Sidebar (+1 more)

### Community 28 - "01 — Fundamentos"
Cohesion: 0.25
Nodes (7): 01 — Fundamentos, Azul navy — processo e meta (~15–20%), Neutros / layout, Shell, Tipografia, Tokens (`:root` em `styles.css`), Verde — marca e ação (~15%)

### Community 29 - "Design: Agenda enxuta — Dia / Semana / Mês"
Cohesion: 0.29
Nodes (6): Aceite, Decisions, Design: Agenda enxuta — Dia / Semana / Mês, Problem Statement, Scope (enxuto), Surfaces

### Community 30 - "escapeHtml"
Cohesion: 0.13
Nodes (23): escapeHtml(), fillTalentFilterOptions(), formatTalentMoney(), getHiringApprovalFlow(), getTestGabaritoStats(), matchBlockMarkup(), matchTitleAttr(), openTalentDrawer() (+15 more)

### Community 31 - "Design: Fichas de entrevista estruturadas"
Cohesion: 0.12
Nodes (15): Aceite, Ações, Data model, Decisions, Design: Fichas de entrevista estruturadas, Editor, In, Integração com agendamento (+7 more)

### Community 32 - "Estrutura de arquivos"
Cohesion: 0.17
Nodes (11): Estrutura de arquivos, Fichas de Entrevista Implementation Plan, Global Constraints, Placeholder scan, Spec coverage check, Task 1: Nav, página shell e roteamento, Task 2: Modelo, seeds e helpers, Task 3: Listagem e ações de linha (+3 more)

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
Cohesion: 0.09
Nodes (28): candidateToDrillItem(), chartRamp(), clearAnalyticsAdvancedFilters(), clearSingleAnalyticsFilter(), closeAnalyticsFiltersDialog(), countBy(), exportAnalyticsStub(), fillAnalyticsFilterOptions() (+20 more)

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

### Community 45 - "openFitAssignmentDetail"
Cohesion: 0.08
Nodes (41): addFitPillar(), closeFitMoreActions(), computeFitAdherence(), createFitAssignment(), defaultFitModelForJob(), duplicateFitQuestion(), ensureJobInstrumentsForCandidate(), findReusableFitAssignment() (+33 more)

### Community 46 - "renderCandidateDetails"
Cohesion: 0.10
Nodes (43): activeScorecardForVacancy(), autoScoreForCriterion(), candidateDossierAlertTags(), computeOverallScore(), defaultScorecardCriteria(), deriveEvaluationStatus(), duplicateScorecard(), emptyScoreRows() (+35 more)

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

### Community 52 - "renderTalents"
Cohesion: 0.18
Nodes (13): clearTalentAdvancedFilters(), getActiveTalentFilters(), getFilteredTalents(), openRhInterviewRequestDialog(), pendingAddDays(), purgeExpiredRemovedTalents(), renderTalentFilterChips(), renderTalents() (+5 more)

### Community 53 - "openCandidateTestDetail"
Cohesion: 0.14
Nodes (28): assignmentActionsFor(), assignmentCatalog(), assignmentStatusClass(), assignmentTitle(), closeAssignmentMoreActions(), downloadAssignmentPdf(), formatAssignmentDate(), getAssignmentById() (+20 more)

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

### Community 58 - "runPendenciaAction"
Cohesion: 0.17
Nodes (15): contactPreviewText(), dossierTabForPendingType(), focusPendingTarget(), openContactDialog(), openPendingContact(), openPendingInterviewResult(), openPendingInterviewSheet(), openPendingJobApproval() (+7 more)

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

### Community 63 - "openRhHiringRequestDecision"
Cohesion: 0.24
Nodes (15): blankHiringRequest(), canApproveHiringRequest(), commitGestorRequestDecision(), ensureHiringRequestReadyForRhDecision(), getCompanyHiringApprovalFlowId(), getHiringApprovalSteps(), linkHiringRequestToCreatedJob(), makeHiringHistory() (+7 more)

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

### Community 68 - "Estrutura de arquivos"
Cohesion: 0.14
Nodes (13): Estrutura de arquivos, Global Constraints, Reorganização navegação e hubs — Implementation Plan, Spec coverage (self-review), Task 1: Routing `#hub/aba` + maps + redirects, Task 2: Sidebar RH + shell Recrutamento, Task 3: Shell Seleção (Entrevistas | Instrumentos | Resultados), Task 4: Início RH (KPIs + Pendências de hoje + Currículos + Histórico) (+5 more)

### Community 69 - "getSheetTemplateById"
Cohesion: 0.08
Nodes (49): addConductPoint(), addSheetQuestion(), autosaveConductDraft(), backToConductWorkspace(), closeInterviewConduct(), conductProgress(), createSheetTemplate(), defaultConductNextStage() (+41 more)

### Community 70 - "submitGestorInterviewRequest"
Cohesion: 0.33
Nodes (6): blankInterviewRequest(), cancelInterviewRequest(), collectGestorIrSlots(), findOpenInterviewRequest(), interviewRequestIsOpen(), submitGestorInterviewRequest()

### Community 71 - "File map"
Cohesion: 0.22
Nodes (8): Dashboard estratégico (Indicadores → Painel) — Implementation Plan, File map, Global Constraints, Spec coverage, Task 1: Shell HTML + redirect Relatórios + seeds, Task 2: `getStrategicAnalytics` + render cards/indicadores, Task 3: Drawer drill-down + abrir dossiê/vaga, Task 4: Export stub + polish + graphify

### Community 72 - "renderGestorCandidatePanel"
Cohesion: 0.18
Nodes (14): applyGestorCandidateDecision(), closeGestorCandidateDecisionDialog(), commitGestorCandidateDecision(), findAnalysisForCandidate(), gestorAnalysisToolbarIcon(), gestorCandidateDaysInProcess(), gestorCandidateResponsible(), gestorFitSummary() (+6 more)

### Community 73 - "showPage"
Cohesion: 0.16
Nodes (14): closeGestorJobView(), closeSidebar(), createTest(), gestorHashFromState(), gestorNavKeyFromState(), hubHash(), openTestEditor(), renderSelecaoHub() (+6 more)

### Community 74 - "openInterviewEditor"
Cohesion: 0.20
Nodes (14): applyInterviewCandidateSelection(), confirmBookingSlot(), defaultInterviewTimeEnd(), fillInterviewInterviewers(), fillInterviewSheetOptions(), fillInterviewStageOptions(), getActiveSheetTemplates(), interviewInterviewerOptions() (+6 more)

### Community 75 - "Estrutura de arquivos"
Cohesion: 0.17
Nodes (11): Análise de Candidatos pelo Gestor — Implementation Plan, Estrutura de arquivos, Global Constraints, Placeholder scan, Spec coverage (self-review), Task 1: Helpers de leitura + modelo de decisão, Task 2: Shell HTML do painel + mini-dialog, Task 3: Render do conteúdo de leitura + histórico (+3 more)

### Community 76 - "Estrutura de arquivos"
Cohesion: 0.18
Nodes (10): Central de Pendências do Gestor — Implementation Plan, Estrutura de arquivos, Global Constraints, Placeholder scan, Spec coverage, Task 1: Modelo `buildGestorPendencies` + prioridade, Task 2: Shell HTML da vista Pendências, Task 3: Render do hub + CTAs (+2 more)

### Community 77 - "openJobDetails"
Cohesion: 0.07
Nodes (45): candidateAvatars(), candidateHasPendingGestorAnalysis(), closeJobMoreActions(), convertPreAdmissionToEmployee(), daysInStage(), duplicateJob(), ensureJobDefaults(), gestorCandidateRow() (+37 more)

### Community 78 - "sheetTemplateCard"
Cohesion: 0.25
Nodes (8): closeSheetMoreMenus(), formatSheetDate(), getFilteredSheetTemplates(), renderSheetTemplates(), sheetJobsLabel(), sheetQuestionsLabel(), sheetTemplateCard(), showSheetList()

### Community 79 - "submitInterview"
Cohesion: 0.27
Nodes (10): closeInterviewConductReview(), ensureInterviewMeetLink(), formatInterviewWhen(), meetFromLink(), openCandidateRescheduleDialog(), openInterviewCancelDialog(), openInterviewConflictDialog(), readInterviewFormDraft() (+2 more)

### Community 80 - "openMoveStageDialog"
Cohesion: 0.40
Nodes (5): moveCandidate(), openAnalyticsDrill(), openMoveStageDialog(), renderAnalyticsDrillList(), safeShowModal()

### Community 81 - "renderPreAdmissions"
Cohesion: 0.15
Nodes (17): addPreAdmissionPendency(), documentStatusClass(), documentTypeMark(), ensureCandidateDocuments(), finalizePreAdmission(), preAdmissionDocActions(), preAdmissionOpenPendencies(), preAdmissionProgress() (+9 more)

### Community 82 - "Design: Entrevistas do Gestor"
Cohesion: 0.13
Nodes (14): Anti-redundância, Approval, Data model, Decisions, Design: Entrevistas do Gestor, Error / empty states, In, Out (+6 more)

### Community 84 - "applyTalentEdit"
Cohesion: 0.32
Nodes (8): applyTalentEdit(), closeTalentDrawer(), closeTalentEditDialog(), openTalentEditDialog(), pushTalentHistory(), runTalentAction(), selectTalentTab(), softRemoveTalentFromBank()

### Community 85 - "6. Telas do Portal RH"
Cohesion: 0.18
Nodes (11): 6.10 Configurações (`#configuracoes`), 6.1 Início (`#dashboard`), 6.2 Pipeline (`#pipeline`), 6.3 Pendências (`#pendencias`), 6.4 Vagas (`#vagas`) + Nova vaga + Candidatos da vaga, 6.5 Talentos (`#talentos`), 6.6 Entrevistas (`#entrevistas`), 6.7 Instrumentos (`#selecao`) (+3 more)

### Community 86 - "Estrutura de arquivos"
Cohesion: 0.20
Nodes (9): Entrevistas do Gestor — Implementation Plan, Estrutura de arquivos, Global Constraints, Spec coverage (self-review), Task 1: Helpers de bucket + seeds + nav gestor → hub, Task 2: Shell HTML + `renderGestorEntrevistasHub`, Task 3: Detalhe pré-entrevista (contexto gestor), Task 4: Estender condução — +/−, competências, recomendações (+1 more)

### Community 87 - "8. Portal do candidato"
Cohesion: 0.22
Nodes (9): 8.1 Organização da sidebar, 8.2 Início, 8.3 Vagas → Detalhe → Candidatura → Sucesso, 8.4 Candidaturas + detalhe, 8.5 Entrevistas, 8.6 Avaliações (hub), 8.7 Proposta e Pré-admissão, 8.8 Perfil (+1 more)

### Community 89 - "renderEntityDialog"
Cohesion: 0.29
Nodes (7): entityButton(), entityStatusMeta(), isTalentInActiveBank(), openEntityDialog(), openPendingTalentReview(), renderEntityDialog(), setEntityActivityCollapsed()

### Community 90 - "saveGestorRequestDraft"
Cohesion: 0.67
Nodes (3): applyFormToHiringRequest(), readGestorRequestFormValues(), saveGestorRequestDraft()

### Community 91 - "Portal RH — Documentação funcional"
Cohesion: 0.25
Nodes (7): 11. Auditoria rápida: implementado × limitado, 12. Roteiro de demonstração (15–20 min), 13. Como ler specs/planos finos, 1. Para que serve este sistema, 3. Arquitetura (o que é cada arquivo), 9. Componentes transversais (modais / drawers), Portal RH — Documentação funcional

### Community 92 - "7. Portal do gestor"
Cohesion: 0.33
Nodes (6): 7.1 Início, 7.2 Pendências, 7.3 Minhas vagas, 7.4 Entrevistas (gestor), 7.5 Parecer / painel do candidato (gestor), 7. Portal do gestor

### Community 95 - "persistCandidateTakingProgress"
Cohesion: 0.40
Nodes (5): candidateTestKey(), persistCandidateTakingProgress(), questionTypeLabel(), renderCandidateTestTaking(), saveCandidateTestDraft()

### Community 96 - "normalize"
Cohesion: 0.05
Nodes (88): candidateActionMapMarkup(), candidateApplicationMatchesFilter(), candidateApplicationTimeline(), candidateAppNextSteps(), candidateAppsFilterLabel(), candidateAppStageClass(), candidateJobAvailability(), candidateJobDatePanel() (+80 more)

### Community 97 - "2. Como executar e testar"
Cohesion: 0.40
Nodes (5): 2.1 Subir localmente, 2.2 Trocar de papel (RH ↔ Gestor), 2.3 Abrir o portal do candidato, 2.4 Checklist rápido de sanidade, 2. Como executar e testar

### Community 98 - "5. Fluxos principais (ponta a ponta)"
Cohesion: 0.40
Nodes (5): 5.1 Fluxo RH — publicar e conduzir uma vaga, 5.2 Fluxo Gestor — solicitação e parecer, 5.3 Fluxo Candidato — candidatar e acompanhar, 5.4 Troca de papéis e retorno, 5. Fluxos principais (ponta a ponta)

### Community 99 - "goToPage"
Cohesion: 0.14
Nodes (21): blockCandidate(), closeOverlayDialogs(), dismissCandidate(), fillNewJobFromHiringRequest(), goToPage(), handleGoTarget(), hideCandidate(), openBlockDialog() (+13 more)

### Community 100 - "4. Mapa do sistema (atual)"
Cohesion: 0.50
Nodes (4): 4. Mapa do sistema (atual), Portal do candidato (`#portal-candidato/...`), Portal do gestor (switch = Gestor), Portal RH (switch = RH)

### Community 102 - "forceCloseAllDialogs"
Cohesion: 0.32
Nodes (8): closeCandidateMoreActions(), closeGestorAnalysisMoreMenu(), closeInterviewMoreActions(), forceCloseAllDialogs(), placeCandidateMoreMenu(), resetCandidateMoreMenuPlacement(), toggleCandidateMoreActions(), toggleGestorAnalysisMoreMenu()

### Community 103 - "10. O que mudou em relação ao PDF de 28/08/2026"
Cohesion: 0.67
Nodes (3): 10. O que mudou em relação ao PDF de 28/08/2026, Incluído / evoluído, Removido / desatualizado no PDF antigo

### Community 104 - "syncTestsHubTab"
Cohesion: 0.67
Nodes (3): renderTests(), setTestsHubTab(), syncTestsHubTab()

### Community 105 - "buildGestorPendencies"
Cohesion: 0.13
Nodes (21): buildGestorPendencies(), collectGestorOverviewMetrics(), countGestorPendencies(), formatGestorPendDueLabel(), gestorPendenciesByBucket(), gestorPendingActionLabel(), gestorPendingPriority(), gestorPendingPriorityLabel() (+13 more)

### Community 107 - "runGestorPendenciaAction"
Cohesion: 0.20
Nodes (12): openCandidateResume(), openFromShareHash(), openGestorAnalysis(), openGestorCandidatePanel(), openGestorInterviewRequestFollowup(), openInterviewDetail(), openManagerAnalysis(), openPendingOffer() (+4 more)

### Community 109 - "Design: Portal RH × Processo Ágil Guide"
Cohesion: 0.50
Nodes (3): Decisões, Design: Portal RH × Processo Ágil Guide, Onda visual (2026-09-15)

### Community 115 - "formatBRDate"
Cohesion: 0.16
Nodes (17): analysisStatusMeta(), canGestorApproveRequests(), fillGestorRequestForm(), filterGestorHiringRequests(), formatBRDate(), formatGestorPendDue(), hiringRequestDueMeta(), hiringRequestStatusClass() (+9 more)

## Knowledge Gaps
- **711 isolated node(s):** `jobs`, `candidates`, `candidateSkillDefaults`, `candidateStageEnteredDefaults`, `candidateConsentDefaults` (+706 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 786 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `escapeHtml()` connect `escapeHtml` to `app.js`, `renderGestorPortal`, `dayKey`, `renderPipeline`, `renderPendenciasPage`, `renderAnalytics`, `openConductHistory`, `openFitAssignmentDetail`, `renderCandidateDetails`, `renderTalents`, `openCandidateTestDetail`, `openRhHiringRequestDecision`, `getSheetTemplateById`, `renderGestorCandidatePanel`, `openInterviewEditor`, `openJobDetails`, `sheetTemplateCard`, `submitInterview`, `openMoveStageDialog`, `renderPreAdmissions`, `applyTalentEdit`, `persistCandidateTakingProgress`, `normalize`, `goToPage`, `buildGestorPendencies`, `renderNewJobStages`, `runGestorPendenciaAction`, `fillInterviewCandidateOptions`, `openGestorCandidateDecisionDialog`, `formatBRDate`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **Why does `04 — Modais` connect `04 — Modais` to `README.md`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Why does `06 — Componentes` connect `06 — Componentes` to `README.md`, `Cards e painéis`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `jobs`, `candidates`, `candidateSkillDefaults` to the rest of the system?**
  _711 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.009259259259259259 - nodes in this community are weakly interconnected._
- **Should `Design: Fluxo completo da proposta de contratação` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Design: Portal do candidato — Onda C (proposta + pré-admissão)` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._