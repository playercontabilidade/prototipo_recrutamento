# 01 — Fundamentos

## Tokens (`:root` em `styles.css`)

### Verde — marca e ação (~15%)

| Token | Hex | Uso |
|-------|-----|-----|
| `--brand-50` | `#f1f9f3` | Fundo item ativo, hover suave |
| `--brand-100` | `#dcf2e1` | Badges claros |
| `--brand-200` | `#b9e3c3` | Bordas de chip selecionado |
| `--brand-500` | `#3baa4a` | **Cor primária** — botões, barra ativa, ícones ativos |
| `--brand-600` | `#2f8f3d` | Hover botão primário |
| `--brand-700` | `#246f30` | Texto em fundo claro, brand mark |
| `--brand-900` | `#173f22` | Títulos em contexto verde |

### Azul navy — processo e informação (~5%)

| Token | Hex | Uso |
|-------|-----|-----|
| `--navy-50` | `#eef3fa` | Fundo badge entrevista |
| `--navy-500` | `#194a92` | Texto/ícone de processo |
| `--navy-700` | `#143a73` | Títulos modais de entrevista, links “Limpar” |

**Não usar navy como cor dominante de um portal inteiro.**

### Neutros (~80%)

| Token | Hex | Uso |
|-------|-----|-----|
| `--ink-950` | `#1c2430` | Títulos, texto principal |
| `--ink-700` | `#4b5563` | Texto secundário, nav inativo |
| `--ink-500` | `#6b7280` | Labels, hints, eyebrow |
| `--ink-300` | `#c5cad1` | Bordas hover |
| `--surface` | `#ffffff` | Cards, modais, sidebar |
| `--surface-soft` | `#f5f6f7` | Fundo app, inputs em repouso |
| `--surface-muted` | `#eef0f2` | Contadores nav, fundos sutis |
| `--border` | `#e5e7eb` | Bordas padrão |

### Semânticas

| Token | Uso |
|-------|-----|
| `--warning` `#e9a23b` | Pausada, alertas |
| `--danger` `#d65b5b` | Erro, reprovação, cancelar entrevista |

### Layout

| Token | Valor |
|-------|-------|
| `--sidebar-width` | `220px` |
| `--radius-sm` | `7px` — nav items, chips pequenos |
| `--radius-md` | `10px` — botões, inputs |
| `--radius-lg` | `12px` — cards médios |
| `--shadow-sm` | `0 1px 3px rgb(28 36 48 / 6%)` |
| `--shadow-md` | `0 12px 32px rgb(28 36 48 / 10%)` |

## Tipografia

| Elemento | Fonte | Tamanho típico | Peso |
|----------|-------|----------------|------|
| `body` | Inter | 15px | 400 |
| `h1`–`h3`, `.brand strong`, KPIs | Nunito Sans | 22–34px | 700–800 |
| `.nav-item` | Inter | 12px | 500 (700 ativo) |
| `.nav-group-label` | Inter | 10px | 700 |
| `.topbar-title span` (eyebrow) | Inter | 11px | —, **uppercase** |
| `.topbar-title strong` | Nunito Sans | ~18px | 700 |
| `.form-field > span` | Inter | 11–12px | 700 |
| Botões | Inter | 12–14px | 700–800 |

### Eyebrow (rótulo superior)

```html
<span class="eyebrow">RECRUTAMENTO E SELEÇÃO</span>
```

- 10px, peso 800, letter-spacing `0.06–0.08em`
- Cor: `--navy-500` (entrevistas) ou `--ink-500` (geral)

## Espaçamento (ritmo)

| Contexto | Gap / padding |
|----------|----------------|
| Sidebar padding | `14px 12px` |
| Nav groups | `gap: 14px` entre grupos, `3px` entre itens |
| Topbar | `padding: 0 28px`, `min-height: 65px` |
| Dashboard panels | `padding: 20px`, `gap: 16px` no grid |
| Form fields | `gap: 7–8px` label→input |
| Modal form | `padding: 28px`, `gap: 18px` |

## Ícones

- Sprite SVG: `#i-home`, `#i-briefcase`, etc. em `index.html`
- Classe `.ui-icon`: 16–18px, `stroke: currentColor`
- Nav: `.nav-icon` 18×18px

## Estados de foco

```css
outline: 3px solid rgb(59 170 74 / 20%);
outline-offset: 2px;
```

Aplicado em botões, inputs e links interativos.
