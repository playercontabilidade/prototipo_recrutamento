# Design: Dashboard estratégico de recrutamento (Indicadores → Painel)

Generated: 2026-09-09  
Repo: Prototipação Vagas  
Status: APPROVED + IMPLEMENTED (chat: inline)  
Mode: Builder

## Problem

O hub Indicadores tem Painel/Relatórios com KPIs parcialmente estáticos e sem drill-down. Falta um dashboard estratégico com cards, indicadores, filtros e a capacidade de clicar em um número (ex.: “15 desistências”) e ver **quais** são os registros.

## Anti-redundância

| Pergunta | Resposta |
|----------|----------|
| Já existe o job-to-be-done? | Sim — Indicadores → Painel + Relatórios; Início é operacional |
| Cabe no hub existente? | Sim — expandir **Painel**; **não** criar item na sidebar |
| Relatórios overlap? | **Consolidar** no Painel; `#relatorios` redireciona para `painel` |
| Informação duplicada no Início? | Não — Início permanece operacional |
| RH × Gestor? | Só modo RH no hub Indicadores |

## Decisions

| Tema | Decisão |
|------|--------|
| Superfície | **A** — expandir aba Painel |
| Drill-down | **A** — drawer lateral no Painel |
| Escopo | **A** — 8 cards + 12 indicadores + filtros + export stub + drawer |
| Relatórios | **A** — consolidar no Painel; remover da nav; redirect |
| Abordagem | **1** — página única (filtros → cards → indicadores) + drawer |

## Surfaces

1. `#painelPage` — dashboard estratégico completo  
2. `#analyticsDrillDrawer` — detalhe + lista relacionada  
3. Nav Indicadores: **Painel** \| **Análises de gestores**  
4. Redirect: `relatorios` / `#relatorios` → `painel`  
5. Deep-link linha do drawer → `#candidateDialog` ou detalhe de vaga  

## In

### Cards (8)

Vagas abertas · Candidatos inscritos · Em processo · Contratações · Reprovações · Desistências · Tempo médio para contratar · Taxa de contratação  

Todos clicáveis → drawer com `items[]`.

### Indicadores (12)

Funil por etapa · Conversão · Comparecimento · Não comparecimento · Tempo por etapa · Tempo para fechar vaga · Currículos analisados · Entrevistas realizadas · Produtividade por recrutador · Origem dos candidatos · Motivos de reprovação · Motivos de desistência  

Clique em card/barra/fatia/linha → drawer filtrado ao recorte.

### Filtros

Período · Empresa · Unidade · Departamento · Vaga · Recrutador · Gestor · Origem  

Ações: Aplicar · Limpar.

### Export

PDF e Excel = **stub** (toast + CSV/download fake das linhas filtradas quando fizer sentido).

### Dados

```text
getStrategicAnalytics(filters) → {
  cards: [{ id, label, value, hint, items }],
  indicators: [{ id, title, type, series|rows, items }],
  meta: { periodLabel, appliedFilters }
}

item: {
  kind: "candidate" | "job",
  id, name, vacancy?, stage?, status?, date?, reason?, owner?
}
```

Seeds enriquecidos onde faltar: outcomes (reprovado/desistiu), motivos, unidade, no-show em entrevistas.

## Out

- Novo item na sidebar  
- Segundo dashboard no Início  
- Painel gestor paralelo  
- Backend / BI real / PDF layout rico  
- E-mail  

## Success

- Clicar “N desistências” abre drawer com **N** candidatos nomeados  
- Filtros recalculam cards e indicadores  
- Relatórios não aparece como aba paralela; deep-link antigo não quebra  
- Desktop + mobile utilizáveis (drawer full-screen em mobile)
