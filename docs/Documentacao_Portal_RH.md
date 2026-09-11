# Portal RH — Documentação funcional

**Manual completo de telas, fluxos, como testar e limitações do protótipo**  
Portal RH · Portal do gestor · Portal do candidato

| | |
|---|---|
| **Versão** | Revisada · 11 de setembro de 2026 |
| **Tipo** | Protótipo front-end estático (HTML / CSS / JS) |
| **Repo** | [prototipo_recrutamento](https://github.com/playercontabilidade/prototipo_recrutamento) |
| **Demo online** | https://playercontabilidade.github.io/prototipo_recrutamento/ |

---

## 1. Para que serve este sistema

O protótipo simula um **portal de recrutamento e seleção** com três papéis na mesma aplicação:

| Papel | Para quem | Objetivo |
|---|---|---|
| **RH** | Recrutadores / Analistas de RH | Operar o processo completo: vagas, pipeline, entrevistas, instrumentos, propostas, resultados e configurações. |
| **Gestor** | Gestores solicitantes | Acompanhar vagas sob sua responsabilidade, responder pendências, analisar candidatos e participar de entrevistas. |
| **Candidato** | Candidato externo (vista pública) | Explorar vagas, candidatar-se, confirmar entrevistas, fazer avaliações, ver proposta e pré-admissão. |

**O que o protótipo é:** navegação real entre telas, dados mockados em memória, toasts e feedback visual.  
**O que não é:** backend, login real, e-mail/WhatsApp reais, persistência de produção ou integrações (ATS, Meet, folha).

---

## 2. Como executar e testar

### 2.1 Subir localmente

Na pasta do projeto:

```powershell
cd "C:\Users\Player\Desktop\Prototipação Vagas"
python -m http.server 8765
```

Abra: http://127.0.0.1:8765/index.html  
(Hard refresh após mudanças: `Ctrl+F5` — o cache usa `?v=` nos assets.)

Também é possível abrir `index.html` direto no navegador; o servidor local evita restrições de alguns browsers.

### 2.2 Trocar de papel (RH ↔ Gestor)

No topo da sidebar há o switch **RH | Gestor**.  
A preferência fica em `localStorage` (`portal-rh-workspace-role`).

### 2.3 Abrir o portal do candidato

- Ícone de **olho** na sidebar / topbar, ou  
- Menu do perfil → **Vista do candidato**, ou  
- Hash: `#portal-candidato`

Ao sair: **Voltar ao RH** ou **Voltar ao portal do gestor** (conforme a origem).

### 2.4 Checklist rápido de sanidade

1. RH: Início → Pipeline → mover um card de etapa.  
2. RH: Vagas → abrir card → modal da vaga → “candidatos da vaga”.  
3. Switch Gestor → Início → KPI Candidatos → Abrir um candidato.  
4. Vista candidato → Vagas → detalhe → candidatar → Minhas candidaturas.  
5. Candidato → Entrevistas → confirmar presença.  
6. Candidato → Avaliações (testes / fit).  
7. Voltar ao RH e conferir se o hash/página anterior voltou.

---

## 3. Arquitetura (o que é cada arquivo)

| Arquivo | Papel |
|---|---|
| `index.html` | Shell RH/Gestor, shell candidato, páginas, dialogs, ícones SVG, navegação. |
| `styles.css` | Design system visual (cores, cards, modais, sidebars, responsivo). |
| `app.js` | Dados mock, renderização, hashes, filtros, formulários, toasts, estados. |

Tudo roda no browser. Quase todos os dados vivem em arrays JS; ao recarregar a página, o estado volta ao seed (exceto preferências de sidebar / papel em `localStorage`).

---

## 4. Mapa do sistema (atual)

### Portal RH (switch = RH)

| Grupo | Telas | Hash principal |
|---|---|---|
| Recrutamento | Início, Pipeline, Pendências, Vagas, Talentos | `#dashboard`, `#pipeline`, `#pendencias`, `#vagas`, `#talentos` |
| Seleção | Entrevistas, Instrumentos (hub), Resultados | `#entrevistas`, `#selecao`, `#resultados` |
| Análise | Relatórios (Painel / Indicadores) | `#relatorios` / `#painel` / `#indicadores` |
| Rodapé | Configurações | `#configuracoes` |

Instrumentos abrem subtela: `#tecnicos`, `#fit-cultural`, `#fichas`.

### Portal do gestor (switch = Gestor)

| Item | Hash | Função |
|---|---|---|
| Início | `#gestor` | Dashboard: KPIs, minhas vagas, ações, solicitações, agenda. |
| Pendências | `#gestor-pendencias` | Inbox do que depende do gestor. |
| Minhas vagas | `#gestor-vagas` | Vagas + abas Solicitações; detalhe da vaga com funil. |
| Entrevistas | `#gestor-entrevistas` | Buckets: Hoje, Próximas, A finalizar, Realizadas, Canceladas. |

### Portal do candidato (`#portal-candidato/...`)

| Nav | Hash (exemplos) | Função |
|---|---|---|
| Início | `#portal-candidato` | Resumo, pendências, jornada. |
| Vagas | `#portal-candidato/jobs` | Lista pública + filtros. |
| Candidaturas | `#portal-candidato/apps` | Lista + detalhe `#portal-candidato/app-detail/:id`. |
| Entrevistas | `#portal-candidato/interviews` | Confirmar / reagendar (demo). |
| Avaliações | `#portal-candidato/tests` | Testes técnicos + Fit Cultural. |
| Proposta | `#portal-candidato/offer` | Aparece quando há proposta. |
| Pré-admissão | `#portal-candidato/pre-admission` | Documentos pós-aceite. |
| Perfil | `#portal-candidato/profile` | Dados para matching. |

---

## 5. Fluxos principais (ponta a ponta)

### 5.1 Fluxo RH — publicar e conduzir uma vaga

```
Início / Vagas → Nova vaga → salvar (rascunho/aberta)
    → Pipeline / Candidatos da vaga (kanban)
    → Entrevistas / Instrumentos (teste, fit, ficha)
    → Proposta → Resultados (contratado / dispensado)
    → (opcional) Banco de talentos
```

**Como testar:** criar vaga → abrir no Pipeline → arrastar candidato → abrir dossiê → agendar entrevista.

### 5.2 Fluxo Gestor — solicitação e parecer

```
Switch Gestor → Início
    → Solicitar vaga (formulário + timeline)
    → Pendências / Abrir candidato (parecer)
    → Minhas vagas → detalhe da vaga (funil + candidatos)
    → Entrevistas (buckets)
```

**Como testar:** Gestor → KPI ou Pendências → Abrir → registrar decisão → voltar à lista.

### 5.3 Fluxo Candidato — candidatar e acompanhar

```
Vista do candidato → Vagas → Detalhe (match) → Candidatar
    → Sucesso → Candidaturas → detalhe da candidatura
    → Entrevistas (confirmar) → Avaliações
    → (se houver) Proposta → Pré-admissão
```

**Como testar:** anexar currículo + LGPD → enviar → confirmar entrevista → iniciar teste/fit.

### 5.4 Troca de papéis e retorno

- RH ↔ Gestor: switch na sidebar.  
- Candidato: overlay; sair restaura hash anterior (RH ou gestor).

---

## 6. Telas do Portal RH

Para cada tela: **para que serve**, **como acessar**, **o que tem**, **como testar**, **limites**.

### 6.1 Início (`#dashboard`)

- **Serve para:** visão do dia do RH (KPIs, vagas, match, funil, agenda, atividade).  
- **Testar:** clicar KPIs, vaga em destaque, etapa do funil, compromisso.  
- **Limite:** números em parte demonstrativos / compostos para apresentação.

### 6.2 Pipeline (`#pipeline`)

- **Serve para:** acompanhar candidatos por etapa (kanban/lista), SLA, ações em lote.  
- **Testar:** busca, filtros, drag-and-drop, abrir card, lote de etapa, ocultar/dispensar/contratar.  
- **Limite:** só memória; mudanças somem no F5.

### 6.3 Pendências (`#pendencias`)

- **Serve para:** inbox do que precisa de ação do RH/equipe (buckets + filtro por tipo).  
- **Testar:** trocar Minhas / Equipe / Vencidas / Próximas; executar ação do card.  
- **Limite:** tipos e prazos mockados.

### 6.4 Vagas (`#vagas`) + Nova vaga + Candidatos da vaga

- **Serve para:** listar/grade de oportunidades; criar/editar; abrir quadro da vaga.  
- **Testar:** grade vs lista; menu ⋮; modal de detalhe da vaga; kanban da vaga; convidar do banco (bloco “recomendados”).  
- **Limite:** sem publicação externa; status simulado.

### 6.5 Talentos (`#talentos`)

- **Serve para:** banco aprovados/bloqueados fora do pipeline.  
- **Testar:** abas, busca, drawer do talento, convidar para vaga, validade.  
- **Limite:** sem sync com base externa.

### 6.6 Entrevistas (`#entrevistas`)

- **Serve para:** agenda (dia/semana/mês), criar/editar, conduzir, cancelar, conflitos.  
- **Testar:** nova entrevista, abrir detalhe, condução, filtros de calendário.  
- **Limite:** links Meet/Teams e convites são demo.

### 6.7 Instrumentos (`#selecao`)

Hub com cards para:

| Instrumento | Hash | Serve para |
|---|---|---|
| Testes técnicos | `#tecnicos` | Catálogo e edição de testes. |
| Fit cultural | `#fit-cultural` | Perfil, banco de perguntas, modelos, envios. |
| Fichas de entrevista | `#fichas` | Roteiros/critérios para condução. |

- **Testar:** abrir hub → entrar em cada instrumento → Voltar para instrumentos.  
- **Limite:** correção automática de teste/fit não fecha o ciclo de nota real.

### 6.8 Resultados (`#resultados`)

- **Serve para:** contratados, dispensados, ocultados; hubs de proposta/pré-admissão conforme implementação.  
- **Testar:** abas, abrir dossiê, desocultar.  
- **Limite:** sem exportação / jurídico.

### 6.9 Relatórios / Painel (`#relatorios`, `#painel`, `#indicadores`)

- **Serve para:** KPIs e gráficos de volume, funil, origem, tempo.  
- **Testar:** mudar período; clicar KPI/etapa.  
- **Limite:** séries calculadas dos mocks.

### 6.10 Configurações (`#configuracoes`)

Catálogos: departamentos, responsáveis, cargos, empresas, benefícios, etapas, e-mails, justificativas, LGPD/retenção.

- **Testar:** criar/editar item → usar na Nova vaga.  
- **Limite:** sem ACL real nem envio de credenciais.

---

## 7. Portal do gestor

### 7.1 Início

- **Serve para:** resumo do que depende do gestor hoje.  
- **Tem:** KPIs clicáveis, Minhas vagas, Aguardando ação, Solicitações, Próximas entrevistas, toggles de demo de permissão.  
- **Testar:** KPI Candidatos / Abertas / Pendências; Solicitar vaga; Abrir candidato.  
- **Obs.:** listas abertas por KPI (ex.: Candidatos, Abertas) têm **← Voltar para o início**.

### 7.2 Pendências

- **Serve para:** central de ações (atrasadas, hoje, próximas) + filtro por tipo.  
- **Testar:** buckets e abrir item (análise, solicitação, etc.).

### 7.3 Minhas vagas

- **Serve para:** vagas em andamento + solicitações ao RH.  
- **Testar:** aba Vagas → abrir vaga (andamento/sobre); aba Solicitações → nova/editar/responder.  
- **Detalhe da vaga:** funil + tabela de candidatos + painel de parecer.

### 7.4 Entrevistas (gestor)

- **Serve para:** só as entrevistas do gestor, em buckets horizontais.  
- **Testar:** Hoje / Próximas / A finalizar / Realizadas / Canceladas → Abrir.

### 7.5 Parecer / painel do candidato (gestor)

- **Serve para:** um único lugar de análise (perfil, avaliação, decisão) — sem segundo modal paralelo.  
- **Testar:** Abrir → grupo Decisão → aprovar/reprovar/recomendar banco.

---

## 8. Portal do candidato

### 8.1 Organização da sidebar

| Grupo | Itens |
|---|---|
| Explorar | Início, Vagas |
| Meu processo | Candidaturas → Entrevistas → Avaliações → Proposta → Pré-admissão |
| Conta | Perfil |

Badges de contagem só aparecem quando > 0.

### 8.2 Início

Resumo, stats, pendências por vaga, jornada, entrevistas e testes do dia.

### 8.3 Vagas → Detalhe → Candidatura → Sucesso

- Detalhe tem **← Voltar para vagas**.  
- Match local; candidatura exige currículo + LGPD.  
- Lote: selecionar várias vagas → Continuar com N candidaturas.

### 8.4 Candidaturas + detalhe

- Lista com filtros/stats por etapa.  
- Detalhe reorganizado: header → andamento (timeline) → próximo passo com CTA → atalhos (Entrevistas / Avaliações / Retirar).  
- **← Voltar para candidaturas**.

### 8.5 Entrevistas

Confirmar presença, ver link após confirmação; fluxos de reagendamento/cancelamento existem em nível de protótipo (conforme seeds).

### 8.6 Avaliações (hub)

Seções **Fit Cultural** e **Testes técnicos** no mesmo hub (sem item novo de nav).  
Execução com salvar rascunho / enviar; **sem correção automática completa**.

### 8.7 Proposta e Pré-admissão

Aparecem na nav quando há item ativo.  
Picker por vaga quando há mais de uma; detalhe com **← Voltar** para a lista.

### 8.8 Perfil

Edita dados usados no matching; completude exibida; nome/e-mail fixos no demo.

---

## 9. Componentes transversais (modais / drawers)

| Componente | Uso |
|---|---|
| `#candidateDialog` | Dossiê RH do candidato (abas: perfil, entrevistas, testes, fit, score, docs, timeline). |
| `#talentDrawer` | Drawer do banco de talentos (perfil, tags, compatibilidade, convidar). **Um scroll só** (drawer). |
| `#jobDetailDialog` | Modal da vaga (posições, ações, histórico). |
| `#interviewDetailDialog` / condução | Detalhe e condução ao vivo. |
| `#offerDialog` / formulários | Proposta RH. |
| `#gestorCandidatePanel` | Parecer do gestor. |
| `#candidateFiltersDialog` | Filtros de vagas do candidato. |
| Dialogs de settings | CRUD dos catálogos. |

Padrão de navegação secundária: **`.page-back-link`** (`← Voltar para …`).

---

## 10. O que mudou em relação ao PDF de 28/08/2026

### Incluído / evoluído

- Switch **RH | Gestor** e portal do gestor completo (pendências, vagas, entrevistas, parecer).  
- **Pendências** RH e hub **Instrumentos** (testes + fit + fichas).  
- Portal candidato: **Avaliações**, **Proposta**, **Pré-admissão**, deep-links por hash, detalhe de candidatura reorganizado.  
- Entrevistas: ciclo de vida (agenda, condução, confirmação/reagendamento candidato).  
- Scorecard / timeline no dossiê; solicitações de contratação pelo gestor.  
- Ajustes de UI: cards de vaga, recomendações do banco em row, espaçamento do drawer, Voltar consistente.

### Removido / desatualizado no PDF antigo

- Gestor descrito só como “bloco único” sem nav própria.  
- “Técnicos” como item isolado na sidebar (hoje entra por **Instrumentos**).  
- “Análises gestores” como página RH solta (hoje: Pendências RH + fluxo no modo Gestor).  
- Afirmação de que **não há Voltar** no detalhe da vaga do candidato (já existe).  
- Afirmação de que candidato **não cancela/reagenda** entrevista (há fluxos demo).  
- Relatórios e Painel como conceitos separados sem união por hash (`relatorios`/`painel`/`indicadores` → mesma área).

---

## 11. Auditoria rápida: implementado × limitado

| Tema | Status |
|---|---|
| Navegação RH / Gestor / Candidato | Implementada (hashes + estados) |
| Pipeline drag/lote | Implementado (memória) |
| Match candidato ↔ vaga | Implementado (local) |
| Upload currículo | Validação tipo/tamanho; storage simulado |
| LGPD no envio | Consentimento obrigatório; sem base jurídica real |
| Confirmação de entrevista | Implementada (Set/memória) |
| Execução de teste/fit | Implementada; **sem nota/correção completa** |
| Proposta / pré-admissão | Telas e estados demo |
| Persistência | Quase só `localStorage` de UI; dados em memória |
| Login / ACL | Só switch visual RH/Gestor |
| E-mail / WhatsApp / Meet | Toasts / links demonstrativos |

---

## 12. Roteiro de demonstração (15–20 min)

1. **RH Início** — KPIs e funil.  
2. **Pipeline** — mover candidato, abrir dossiê.  
3. **Vagas** — grade, modal, candidatos da vaga, convidar do banco.  
4. **Entrevistas** — calendário + detalhe.  
5. **Instrumentos** — abrir Fit ou Teste.  
6. **Switch Gestor** — pendência → parecer → entrevistas.  
7. **Vista candidato** — vaga → candidatar → candidaturas → confirmar entrevista → avaliação.  
8. **Voltar ao RH** — mostrar continuidade do processo.

Acesso online: https://playercontabilidade.github.io/prototipo_recrutamento/

---

## 13. Como ler specs/planos finos

Detalhes de desenho por feature ficam em:

- `docs/superpowers/specs/` — decisões de produto/UX  
- `docs/superpowers/plans/` — planos de implementação  
- `docs/design-system/` — tokens e padrões visuais  

Este manual é o **mapa operacional** do protótipo. Em caso de conflito, o **código em `main`** prevalece.

---

*Portal RH · Documento interno · Atualizado em 11/09/2026*
