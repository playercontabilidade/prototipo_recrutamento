# Design: Pré-admissão (candidato aprovado → colaborador)

Generated: 2026-09-07  
Repo: Prototipação Vagas  
Status: APPROVED (chat: opção C + “sim”)  
Mode: Builder

## Problem

Após a proposta, **Contratar** vai direto a Contratados. Falta o acompanhamento documental até a admissão.

## Decisions

| Tema | Decisão |
|------|--------|
| Entrada | **C** — clique em **Contratar** inicia pré-admissão (não contrata ainda) |
| Onde | Aba **Pré-admissão** em **Resultados** (sem item novo na sidebar) |
| Papel | Só modo **RH** |
| Checklist | Mesma fonte do dossiê (`documentChecklist` enriquecido) |
| Finalizar pré-admissão | Marca `pronta` quando obrigatórios ok; **obrigatório** antes de converter |
| Converter em colaborador | Só com status `pronta` (= lógica antiga de `hireCandidate`) |

## Surfaces

1. Resultados → aba Pré-admissão (lista + detalhe)
2. Ação Contratar (pipeline/dossiê) → cria/abre pré-admissão
3. Dossiê Documentos lê os mesmos status/campos

## Data

```text
PRE_ADMISSION_ITEM_STATUS =
  Pendente | Enviado | Em análise | Aprovado | Rejeitado

preAdmission:
  id, candidateId, jobId
  name, email, role, company, plannedDate
  status: em_andamento | pronta | convertida
  checklist[]: id, name, required, owner, due, status, fileName
  pendencies[]: id, text, open
```

## Out

- E-mail/upload real, PDF, portal candidato, backend, modo gestor
