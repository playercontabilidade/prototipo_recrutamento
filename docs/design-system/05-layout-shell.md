# 05 — Layout e shell

## App shell (Portal RH)

```html
<div class="app-shell">
  <aside class="sidebar" id="sidebar">...</aside>
  <div class="sidebar-overlay" id="sidebarOverlay"></div>
  <main class="main-content">
    <header class="topbar">...</header>
    <section class="dashboard-page" id="dashboardPage">...</section>
  </main>
</div>
```

- Grid: `sidebar-width` + `1fr`
- Fundo conteúdo: `--surface-soft`

## Sidebar (padrão único — RH e Candidato)

### Estrutura obrigatória

```
┌─────────────────────────┐
│ BRAND (logo P + título) │
├─────────────────────────┤
│ nav-group-label         │
│   nav-item (×N)         │
│ nav-group-label         │
│   nav-item (×N)         │
├─────────────────────────┤
│ sidebar-footer          │
│   nav-item / link       │
│   help-card             │
└─────────────────────────┘
```

### Brand

```html
<div class="brand">
  <span class="brand-mark" aria-hidden="true">P</span>
  <div>
    <strong>Portal RH</strong>
    <span>Gestão de talentos</span>
  </div>
</div>
```

| Portal | `strong` | `span` |
|--------|----------|--------|
| RH | Portal RH | Gestão de talentos |
| Candidato | Player RH | Portal do candidato |

### Nav item

```html
<a href="#vagas" class="nav-item active" data-page="jobs">
  <span class="nav-icon"><svg class="ui-icon"><use href="#i-briefcase" /></svg></span>
  Vagas
  <span class="nav-count">12</span>
</a>
```

- Ativo: `--brand-50` + barra verde `::before` à esquerda
- Contador: `.nav-count` pill à direita (`margin-left: auto`)
- Candidato usa `<button class="nav-item">` com mesma aparência

### Footer

- RH: Configurações + help-card
- Candidato: Voltar ao RH + help-card (mesmo visual)

**Nome do usuário NÃO fica na sidebar.**

## Topbar

```html
<header class="topbar">
  <button class="icon-button menu-button" id="menuButton">☰</button>
  <div class="topbar-title">
    <span>Recrutamento e seleção</span>  <!-- uppercase via CSS -->
    <strong id="pageTitle">Dashboard</strong>
  </div>
  <div class="topbar-actions">
    <!-- notificações, perfil -->
  </div>
</header>
```

### Perfil (RH e Candidato)

```html
<button class="profile-button" type="button">
  <span class="avatar">LD</span>
  <span class="profile-copy">
    <strong>Nome</strong>
    <small>Cargo ou Candidato</small>
  </span>
</button>
```

## Páginas de conteúdo

| Classe | Uso |
|--------|-----|
| `.dashboard-page` | Páginas internas RH (`hidden` quando inativa) |
| `.dashboard-welcome` | Saudação + CTA no topo |
| `.dashboard-grid` | Grid 12 colunas para widgets |
| `.dashboard-panel` | Card de seção (border-radius 22px) |
| `.pipeline-page` | Pipeline kanban |
| `.candidate-view` | Views do portal candidato |

## Portal do candidato

```html
<div class="candidate-portal" id="candidatePortal" hidden>
  <aside class="sidebar candidate-sidebar">...</aside>
  <div class="main-content candidate-shell">
    <header class="topbar">...</header>
    <main class="dashboard-page candidate-main">...</main>
  </div>
</div>
```

- `position: fixed; inset: 0; z-index: 80`
- `body.is-candidate-portal .app-shell { visibility: hidden }`
- Grid: sidebar + conteúdo (mesma largura `--sidebar-width`)

## Grids candidato

| Área | Grid |
|------|------|
| Lista de vagas | 2 colunas ≥900px, 1 coluna mobile |
| Perfil | Aside resumo + form (`.candidate-profile-page`) |
| Detalhe vaga | Stack de `.candidate-panel` max ~720px |
