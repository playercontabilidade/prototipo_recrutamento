# 06 — Componentes

## Cards e painéis

### `.dashboard-panel` (RH)

- `padding: 20px`, `border-radius: 22px`
- Fundo branco semi-transparente + `backdrop-filter`
- Heading: `.dashboard-panel-heading` com título + ação “Ver todas”

### `.candidate-panel` (Candidato)

- `padding: 18px 16px`, `border-radius: 16px`
- Título seção: `h2` uppercase 11px verde `--brand-600`
- Usado em detalhe de vaga, perfil, match

### `.candidate-job-card`

- Grid: checkbox + corpo
- Empresa + título + meta (local, modelo, CLT) + data
- Hover: borda verde suave

### `.gestor-item` (Portal gestor)

- Lista horizontal: info à esquerda, ações à direita
- Match badge + botões **na mesma linha** (flex)

## Badges e status

| Classe | Uso |
|--------|-----|
| `.nav-count` | Contador na sidebar |
| `.gestor-match` | % compatível (verde) |
| `.gestor-pill` | Status navy |
| `.interview-detail-status` | Agendada / Concluída / Cancelada |
| `.status` | Aberta, Pausada, Rascunho em vagas |

## Avatar

```html
<span class="avatar">LD</span>
```

- Círculo verde claro, iniciais, ~34–40px no perfil

## Toast

```html
<div class="toast" id="toast" role="status">...</div>
```

- Feedback após ações (salvar, candidatura, erro)

## Busca

### RH — `.search-field`

- Ícone + input + atalho Ctrl+K

### Candidato — `.candidate-search-bar`

- Ícone lupa + input + botão filtro (`.candidate-search-filter`)
- Filtros abrem modal, não chips inline

## Listas de vagas (RH)

`.job-card` na página Vagas:

- Ícone área | título + detalhes | avatares candidatos | publicação | % match | status pill | menu ⋮

## Matching UI

- RH: círculo % na lista de vagas e cards pipeline
- Candidato: `.candidate-match-panel` no detalhe da vaga
- Gestor: `.gestor-match` no card de candidato

## Help card (sidebar footer)

```html
<div class="help-card">
  <span class="help-icon"><svg class="ui-icon"><use href="#i-help" /></svg></span>
  <div>
    <strong>Precisa de ajuda?</strong>
    <button type="button">Falar com o suporte</button>
  </div>
</div>
```

## Ocultação de elementos

Sempre usar atributo HTML `hidden`. CSS global:

```css
[hidden] {
  display: none !important;
}
```

Nunca confiar só em `display` de outra classe para esconder.
