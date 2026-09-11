# Design: Portal do candidato — Onda B (base)

Generated: 2026-09-07  
Repo: Prototipação Vagas  
Status: APPROVED (chat: B + “ok”)  
Mode: Builder

## Problem

O portal do candidato já existe, mas a experiência fora do admin não cobre de forma clara home, detalhe de candidatura, entrevistas e ações pedidas.

## Decisions

| Tema | Decisão |
|------|--------|
| Escopo | **B** — home + candidatura + entrevistas + testes (+ perfil/anexos leve) |
| Superfície | Só `#candidatePortal` |
| Fora | Proposta e pré-admissão candidatas (próxima onda) |
| Dados | Reusar applications, interviews, testes; etapa **exibível** ao candidato |

## In

- Home: candidaturas, status, próximas ações, pendências, entrevistas, testes
- Detalhe de candidatura: vaga, status, etapa, próximos passos, retirar
- Entrevistas: confirmar, reagendar, recusar, abrir link
- Testes: iniciar, continuar, status
- Perfil: anexos básicos se couber
- Layout utilizável em desktop + mobile

## Out

- Proposta aceitar/recusar
- Pré-admissão no portal
- E-mail real / upload real
- Nova nav no RH
