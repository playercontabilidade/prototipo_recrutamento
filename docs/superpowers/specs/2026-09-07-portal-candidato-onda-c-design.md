# Design: Portal do candidato — Onda C (proposta + pré-admissão)

Generated: 2026-09-07  
Repo: Prototipação Vagas  
Status: APPROVED + IMPLEMENTED (chat: inline ok)  
Mode: Builder  
Depends on: Onda B (`2026-09-07-portal-candidato-onda-b-design.md`), Proposta RH (`2026-09-04-proposta-contratacao-design.md`), Pré-admissão RH (`2026-09-07-pre-admissao-design.md`)

## Problem

O portal do candidato (Onda B) cobre home, candidatura, entrevistas e testes. Falta a ponta final do processo: **ver/responder proposta** e **enviar documentos de pré-admissão**, sem duplicar superfícies do RH.

## Anti-redundância

| Pergunta | Resposta |
|----------|----------|
| Já existe o job-to-be-done? | No RH: `#offerDialog` + Resultados → Pré-admissão. No portal: não. |
| Cabe no hub existente? | Sim — só `#candidatePortal`. Sem item novo na sidebar RH. |
| Informação já aparece? | Fonte única: `candidate.proposal` e `preAdmissions[]`. Portal = subset candidato. |
| RH × Gestor? | Só papel candidato. |
| KPI/histórico duplicado? | Não — mutações no mesmo objeto que o RH já lê. |

## Decisions

| Tema | Decisão |
|------|--------|
| Abordagem | **1** — views dedicadas `offer` e `pre-admission` |
| Nav | **C** — itens laterais só quando houver item ativo |
| Aceite | **A** — só registra `aceita`; não cria pré-admissão |
| Abertura proposta | **A** — primeira abertura `enviada` → `visualizada` |
| Pré-admissão | **A** — checklist completa; upload só `owner: Candidato` |
| Demo | Seed paralelo no **Levi** (portal user), além de Maria no RH |

## Surfaces

1. `#candidatePortal` view `offer`
2. `#candidatePortal` view `pre-admission`
3. Nav lateral condicional (Proposta / Pré-admissão)
4. Home: pendências/CTAs
5. `app-detail`: bloco contextual + deep-link
6. Diálogo de recusa (reuso `#offerRefuseDialog` ou equivalente no portal)

## In

### Proposta (`offer`)

- Resumo: cargo, salário, modelo, jornada, local, contrato, admissão, validade, benefícios, observações
- Status + validade
- Ver documento (stub / reuso visualização RH se existir)
- Aceitar / Recusar quando `enviada` | `visualizada`
- Recusa com motivo (+ obs. opcional), mesma máquina de status do RH
- Pós-decisão: só leitura; item some do menu após estados finais (`aceita` | `recusada` | `expirada` | `cancelada`)

### Pré-admissão (`pre-admission`)

- Cabeçalho: vaga, empresa, data prevista, status (`em_andamento` | `pronta`)
- Checklist em tabela: item, responsável, prazo, status, arquivo, ação
- Itens RH: só leitura
- Itens candidato: Enviar/substituir em Pendente / Rejeitado (e Enviado antes de Em análise, se fizer sentido no stub)
- Upload = stub (`fileName` + status `Enviado`)
- Pendências abertas: texto, só leitura
- Sem ações RH (Aprovar / Finalizar / Converter)
- Nav: ativa em `em_andamento` | `pronta`; some em `convertida`

### Integração

- Home CTAs → views
- `app-detail` mostra bloco se a candidatura tiver proposta ou pré-admissão vinculada (`jobId` / candidato)
- Resolução: `findCandidateByEmail(candidatePortalUser.email)` + `preAdmissions` por `candidateId`

## Data

```text
Sem modelo novo.
candidate.proposal  — OFFER_STATUSES existentes
preAdmissions[]     — checklist / pendencies / status existentes

Nav “Proposta” ativa se status ∈ {enviada, visualizada}
Nav “Pré-admissão” ativa se status ∈ {em_andamento, pronta}
```

### Seeds (demo portal)

- Levi (`leviluzbr@gmail.com` / candidate id estável): `proposal` com status `enviada` em candidatura alinhada (ex. Coordenador RH / job 10)
- Levi: um `preAdmission` `em_andamento` com checklist mista (Candidato + RH)
- Maria permanece como seed do fluxo RH

## Out

- Nova nav / aba no RH
- E-mail real, upload real, PDF real
- Criar pré-admissão automaticamente no aceite
- Editar proposta pelo candidato
- Modo gestor
- Várias propostas ativas em paralelo

## Success

- Candidato abre proposta → status vira `visualizada` no dossiê RH
- Aceitar/recusar reflete no `#offerDialog` / pipeline
- Upload no portal atualiza checklist que o RH vê em Pré-admissão
- Menu lateral não mostra itens quando não há ação/acompanhamento ativo
- Desktop + mobile utilizáveis nas views novas
