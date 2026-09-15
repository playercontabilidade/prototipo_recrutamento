# Design: Reorganização de navegação e hubs (RH / Gestor / Candidato)

**Data:** 2026-09-15  
**Status:** rascunho para review do usuário  
**Abordagem:** hubs com abas (páginas atuais viram painéis; hashes antigos redirecionam)

## Objetivo

Reorganizar a IA do protótipo para menos itens na sidebar e mais conteúdo unificado em hubs com abas underline (padrão já usado em Resultados), alinhando a composição do Início ao Impostograma (`prototipacao-processoAgil/prototipo-modular`) sem substituir a sidebar pelo menu horizontal de categorias.

## Decisões travadas

| Tema | Decisão |
|------|---------|
| RH sidebar | Início · Recrutamento · Seleção · Contratação · Configurações (pin) |
| Recrutamento abas | Pipeline \| Pendências \| Vagas \| **Talentos** |
| Seleção abas | Entrevistas \| Instrumentos \| Resultados |
| Relatórios | Fora do menu; KPIs no Início + drill existente |
| Scorecard | Some entrada isolada; Resultados mantém Scorecards + Avaliações |
| Contratação | Pré-admissão + Encerrados numa lista; filtros + KPIs; modal (sem expandir linha) |
| Cargo/Depto | Criáveis na Nova vaga; gestão completa permanece em Configurações |
| Currículos (Início) | Inbox de currículos novos / sem vaga |
| Menu “tipo Ponto/Impostograma” | Abas **in-page** (não menu horizontal no lugar da sidebar) |
| Gestor | Início · Recrutamento (Pendências \| Minhas vagas) · Seleção (Entrevistas) |
| Candidato | Início · Vagas · Meu processo (unificado) · Perfil |

## Anti-redundância

| Já existia | O que muda | Evitado |
|-----------|------------|---------|
| Pipeline, Pendências, Vagas, Talentos como itens | Um hub Recrutamento + 4 abas | Novo item paralelo / segunda lista de talentos |
| Entrevistas, Instrumentos (`#selecao`), Resultados | Um hub Seleção + 3 abas | Terceiro hub “avaliações” |
| Pré-admissão + Encerrados em Resultados | Nova página Contratação | Segunda tela de scorecard |
| Relatórios / Análise | Removido do menu; KPIs no dashboard | Novo “Análises” na sidebar |
| Gestor: Pendências + Vagas + Entrevistas | Pendências+Vagas sob Recrutamento; Entrevistas em Seleção | Duplicar entrevistas em Recrutamento |
| Candidato: vários itens em Meu processo | Um item + fluxo unificado | Portal paralelo |

## 1. Navegação

### RH

| Item | Hash | Conteúdo |
|------|------|----------|
| Início | `#dashboard` | Ver §2 |
| Recrutamento | `#recrutamento` | Abas: `pipeline` \| `pendencias` \| `vagas` \| `talentos` |
| Seleção | `#selecao` | Abas: `entrevistas` \| `instrumentos` \| `resultados` |
| Contratação | `#contratacao` | Lista + filtros + KPIs; modal pré-admissão |
| Configurações | `#configuracoes` | Inalterado no pin; Cargo/Depto permanecem |

**Removidos como itens soltos:** Pipeline, Pendências, Vagas, Talentos, Entrevistas (RH), Instrumentos, Resultados, Relatórios.

**Redirects (obrigatórios):**

| Hash antigo | Destino |
|-------------|---------|
| `#pipeline` | `#recrutamento` + aba pipeline |
| `#pendencias` | `#recrutamento` + aba pendencias |
| `#vagas` / jobs | `#recrutamento` + aba vagas |
| `#talentos` | `#recrutamento` + aba talentos |
| `#entrevistas` (RH) | `#selecao/entrevistas` |
| `#selecao` (sem subpath) | `#selecao/instrumentos` (preserva destino histórico da página Instrumentos) |
| `#resultados` | `#selecao/resultados` — se tab/query for pré-admissão ou encerrados → `#contratacao` + filtro |
| `#relatorios` | `#dashboard` (foco/KPI) |

**Esquema de hash (único):** `#<hub>/<aba>` — ex. `#recrutamento/pendencias`, `#selecao/entrevistas`, `#contratacao?filtro=pre-admissao`.

### Gestor

| Item | Hash | Conteúdo |
|------|------|----------|
| Início | `#gestor` (inicio) | Mantém visão inicial gestor |
| Recrutamento | `#gestor` nav recrutamento | Abas: Pendências \| Minhas vagas |
| Seleção | `#gestor-entrevistas` / nav entrevistas | Só entrevistas |

Redirects: `#gestor-pendencias` / `#gestor-vagas` → hub Recrutamento + aba.

### Candidato

| Item | Conteúdo |
|------|----------|
| Início | Pendências (padrão Processo Ágil) + Histórico recente com Minhas candidaturas no mesmo segmento |
| Vagas | Inalterado |
| Meu processo | Fluxo unificado: Entrevistas+Avaliações juntas → Proposta → Pré-admissão (quando aplicável) |
| Perfil | Inalterado |

Remover do menu: itens soltos Apps / Entrevistas / Testes / Proposta / Pré-admissão (permanecem como etapas do fluxo).

## 2. Início (RH)

Composição (referência: `prototipo-modular` dashboard — Pendências de hoje + grid + Histórico Recente timeline):

1. **KPIs** (clicáveis → drill/recorte existente): Vagas abertas · Entrevistas · Candidatos · Reprovações  
2. **Pendências de hoje** — fila acionável; no **mesmo bloco**, Entrevistas + Testes do dia  
3. **Currículos** — inbox novos / sem vaga (triagem)  
4. **Histórico recente** (timeline) — Atividades recentes reposicionadas; no **mesmo segmento**, atalhos de candidaturas/processos em andamento (visão RH)

Não reintroduzir Relatórios na sidebar.

## 3. Recrutamento + Seleção (RH)

### Recrutamento

- UI: abas underline com contagens (padrão Resultados).
- **Pendências:** filtros por tipo; reutilizar campos/critérios do Banco de Talentos como filtros (uma fonte de critérios).
- **Talentos:** embutir página atual do banco na aba (sem segundo banco).
- **Nova vaga:** permitir criar Cargo e Departamento inline; Configurações mantém CRUD completo.

### Seleção

- Abas: Entrevistas \| Instrumentos \| Resultados.
- **Instrumentos:** inverter ordem de apresentação → **Avaliados** primeiro, depois **Catálogos**.
- **Resultados:** apenas Scorecards + Avaliações.
- Pré-admissão e Encerrados **migram** para Contratação.
- Editor de scorecard permanece acessível a partir de Resultados (sem item de menu isolado).

## 4. Contratação (RH)

- Página `#contratacao` como item de 1º nível na sidebar.
- KPIs no topo (ex.: em pré-admissão, docs pendentes, contratados no período, dispensados) — números derivados dos dados já usados em Resultados/pré-admissão.
- Lista única; filtros/chips: Pré-admissão \| Encerrados (+ subfiltros Contratados / Dispensados / Ocultados).
- Clique em candidato em pré-admissão → **modal** com informações + solicitação de documentos.
- **Não** expandir linha/`pread-summary` inline nesse fluxo.
- Migração: painéis atuais de pré-admissão e encerrados saem do hub Resultados.

## 5. Gestor + Candidato

### Gestor

- Recrutamento unifica Pendências + Minhas vagas (abas).
- Entrevistas ficam só em Seleção.
- Sem novo parecer modal paralelo ao painel gestor existente.

### Candidato

- Início: Pendências + Histórico com Minhas candidaturas (mesmo segmento visual).
- Meu processo: um nav item; Entrevistas e Avaliações no mesmo fluxo/etapa; Proposta e Pré-admissão como etapas seguintes quando existirem.

## 6. Técnica

### Arquivos principais

- `index.html` — sidebar, shells dos hubs, Início, Contratação, menu candidato  
- `app.js` — `setPage` / hash routing, tabs, redirects, renders, modal pré-admissão  
- `styles.css` — composição Início, abas dos hubs, Contratação KPIs/lista  
- Este spec + plan posterior em `docs/superpowers/`

### Fora de escopo

- Substituir sidebar por menu horizontal Impostograma (Painel \| Financeiro ▾…)
- Redesign visual completo (cores/tema Impostograma); só IA + composição pedida
- Backend / APIs reais
- Remover CRUD Cargo/Depto de Configurações

### Ordem de implementação (sugerida)

1. Nav RH + hubs Recrutamento / Seleção + redirects  
2. Início (KPIs, Pendências de hoje, Currículos, Histórico)  
3. Contratação (migração + modal + KPIs)  
4. Limpeza Resultados / scorecard isolado  
5. Gestor hub Recrutamento  
6. Candidato Início + Meu processo  
7. Nova vaga: criar Cargo/Depto inline  
8. Cache-bust + `graphify update .`

### Critérios de sucesso

- Sidebar RH com no máximo os itens da §1 (mais Configurações).  
- Deep-links antigos abrem a aba/filtro corretos.  
- Pré-admissão só via modal na Contratação.  
- Instrumentos mostra Avaliados antes de Catálogos.  
- Gestor não lista Entrevistas dentro de Recrutamento.  
- Candidato não tem itens soltos de Entrevistas/Testes/Apps/Proposta/Pré-admissão no menu.

## Referências

- Impostograma dashboard: `C:\Users\Player\Desktop\prototipacao-processoAgil\prototipo-modular\partials\05-dashboard.html`  
- Design guide processo ágil (já no portal RH): `docs/superpowers/specs/2026-09-14-design-guide-processo-agil-rh.md`  
- Padrão de abas in-page: hub Resultados atual (underline + counts)
