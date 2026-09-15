# 05 — Layout e shell

## App shell (Portal RH)

Contrato Processo Ágil: topbar fixa + sidebar fixa + conteúdo com scroll.

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
- Altura: `100dvh`; sem padding externo no `body`
- Fundo conteúdo: `--surface-soft`

## Sidebar

### Estrutura

```
Brand (logo + título)
Kicker “Navegação” + “Áreas do sistema”
Switch RH | Gestor
nav-groups…
footer pin: Configurações (+ help)
```

- Ativo: `--brand-50` + barra verde inset à esquerda
- Hover: `--navy-50`
- Usuário **não** fica na sidebar (vai na topbar)

## Topbar

Sempre visível (~56px): título da página, busca (Ctrl K visual), vista candidato, notificações, perfil.

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
| `.dashboard-panel` | Card de seção |
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
| Perfil | Aside resumo + form |
| Detalhe vaga | Stack de painéis |
