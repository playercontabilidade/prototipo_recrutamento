# Design System — Portal RH (Protótipo)

Documentação oficial de **cores, tipografia, componentes e layout** deste projeto.  
Sempre que houver tela de referência ou pedido de nova funcionalidade, **consulte estes arquivos antes de implementar**.

## Arquivos

| Arquivo | Conteúdo |
|---------|----------|
| [01-fundamentos.md](./01-fundamentos.md) | Tokens CSS, proporção de cores, fontes, espaçamento, raio, sombras |
| [02-botoes.md](./02-botoes.md) | Primário, secundário, perigo, ícone, links de voltar |
| [03-campos-formularios.md](./03-campos-formularios.md) | `.form-field`, campos do candidato, filtros do portal |
| [04-modais.md](./04-modais.md) | `stack-dialog`, `settings-form-dialog`, modal de filtros |
| [05-layout-shell.md](./05-layout-shell.md) | Sidebar, topbar, `main-content`, grids de página |
| [06-componentes.md](./06-componentes.md) | Cards, painéis, chips, badges, avatar, toasts |
| [07-portais.md](./07-portais.md) | Regras por portal: RH, Candidato, Gestor |
| [08-checklist-nova-tela.md](./08-checklist-nova-tela.md) | Passo a passo ao criar ou ajustar uma tela |

## Regras de ouro

1. **~80% neutros** (`--surface`, `--ink-*`, `--border`) · **~15% verde** (`--brand-*`) · **~5% azul** (`--navy-*`, só processo/informação)
2. **Verde** = marca, ação principal, sucesso, item ativo, seleção
3. **Azul navy** = entrevistas, funil, filtros informativos, badges de processo — **nunca** botão primário
4. **Nunito Sans** = títulos (`h1`–`h3`, nomes, KPIs) · **Inter** = UI, labels, parágrafos, botões
5. **Sidebar** = brand → nav em grupos → footer (config/ajuda). **Nome do usuário fica na topbar**, não na sidebar
6. **`[hidden]`** deve ocultar elemento — nunca sobrescrever com `display` sem `!important` em `[hidden]`
7. Reutilizar classes existentes antes de inventar novas (`.dashboard-panel`, `.candidate-panel`, `.form-field`, etc.)
8. Cache bust em `index.html`: `styles.css?v=...` e `app.js?v=...` ao entregar mudanças visíveis

## Onde está no código

| Conceito | CSS principal | HTML de referência |
|----------|---------------|-------------------|
| Tokens | `styles.css` `:root` | — |
| Shell RH | `.sidebar`, `.topbar`, `.main-content` | `index.html` `#sidebar` |
| Portal candidato | `.candidate-portal`, `.candidate-panel` | `index.html` `#candidatePortal` |
| Formulários RH | `.form-field`, `.new-job-field` | `#newJobPage`, dialogs `settings-form-dialog` |
| Modais | `.stack-dialog`, `.settings-form-dialog` | `#interviewDialog`, `#departmentFormDialog` |

## Versão

- **Última atualização:** agosto/2026  
- **Arquivo de estilos:** `styles.css`  
- **Referência visual:** telas do protótipo Figma/imagem enviadas pelo time
