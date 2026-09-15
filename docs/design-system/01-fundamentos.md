# 01 — Fundamentos

## Tokens (`:root` em `styles.css`)

Contrato alinhado ao Design Guide Processo Ágil (set/2026): estrutura do Impostograma + **verde CTA** + **azul navy** reforçado. Cor de tema continua no código (o PDF omite cor).

### Verde — marca e ação (~15%)

| Token | Hex | Uso |
|-------|-----|-----|
| `--brand-50` … `--brand-900` | (inalterados) | CTA primário, item ativo, sucesso |
| `--brand-500` | `#3baa4a` | Primária |

### Azul navy — processo e meta (~15–20%)

| Token | Hex | Uso |
|-------|-----|-----|
| `--navy-50` | `#eef3fa` | Hover nav, chips, ghost azul |
| `--navy-200` | `#a8c0e0` | Bordas secundárias |
| `--navy-500` | `#194a92` | Eyebrows, kickers, ícones de processo |
| `--navy-700` | `#143a73` | Texto botão outline, links |
| `--navy-900` | `#0f2b56` | Ênfase |

Brand mark: gradiente verde → navy.

### Neutros / layout

| Token | Valor |
|-------|--------|
| `--surface-soft` | `#f4f6f9` (fundo app, levemente azulado) |
| `--border` | `#dde3ec` |
| `--radius-sm` | `8px` |
| `--radius-md` / `--radius-lg` | `12px` |
| `--radius-pill` | `999px` |
| `--sidebar-width` | `248px` |
| `--topbar-height` | `56px` |
| `--font-ui` | `"DM Sans", system-ui, sans-serif` |

## Tipografia

| Elemento | Fonte | Notas |
|----------|-------|--------|
| UI inteira | **DM Sans** | Única família (guide) |
| Corpo | ~14px | Densidade operacional |
| Meta / eyebrow | ~10px | Uppercase, `--navy-500` |

## Shell

- Topbar **sempre visível** (busca, notificações, perfil)
- Sidebar: kicker “Navegação” + “Áreas do sistema”; Configurações pinada
- Scroll só na área de página; body/`app-shell` em `100dvh`
- Sem frame glass flutuante

Ver também: `docs/superpowers/specs/2026-09-14-design-guide-processo-agil-rh.md`
