# 03 — Campos e formulários

## Padrão RH — `.form-field`

Usado em modais `settings-form-dialog`, formulários de catálogo e dialogs do RH.

```html
<label class="form-field">
  <span>Nome</span>
  <input type="text" required />
</label>

<label class="form-field">
  <span>Descrição</span>
  <textarea rows="3"></textarea>
</label>

<label class="form-field">
  <span>Departamento</span>
  <select>...</select>
</label>
```

| Propriedade | Valor |
|-------------|-------|
| Label | 11–12px, peso 700, acima do campo |
| Input/select | `min-height: 41–48px`, `border-radius: 10–11px` |
| Fundo repouso | `var(--surface-soft)` |
| Fundo foco | `var(--surface)` + borda `--brand-500` |
| Textarea | `min-height: 108–130px`, padding vertical 12–14px |

### Grid de formulário

```html
<div class="form-grid">
  <label class="form-field">...</label>
  <label class="form-field full">...</label> <!-- ocupa 2 colunas -->
</div>
```

## Padrão nova vaga — `.new-job-field`

Mesma lógica do `.form-field`, dentro de `.new-job-section` com título de seção.

## Portal do candidato — `.candidate-field`

```html
<label class="candidate-field">
  <span>Telefone</span>
  <input type="tel" placeholder="(00) 00000-0000" />
</label>
```

- Label: 13px, peso 600
- Input: `padding: 14px`, `border-radius: 12px`, fundo branco
- Foco: borda verde + `box-shadow: 0 0 0 3px rgb(59 170 74 / 10%)`
- Row dupla: `.candidate-field-row` (cidade + UF)

## Modal de filtros (candidato)

**ID:** `#candidateFiltersDialog` — usa `stack-dialog` + `.form-field` (mesmo padrão dos modais RH).

```html
<dialog class="stack-dialog candidate-filter-dialog" id="candidateFiltersDialog">
  <form>
    <header class="stack-dialog-header">...</header>
    <label class="form-field">
      <span>Tipo de contratação</span>
      <select>...</select>
    </label>
    <footer class="dialog-actions">...</footer>
  </form>
</dialog>
```

- Labels **acima** do campo (não flutuantes)
- Toggle PcD: `.test-switch`
- Footer: `dialog-text-button` (Limpar) + `primary-button` (Aplicar)

## Toggle — `.test-switch`

```html
<label class="test-switch">
  <input type="checkbox" />
  <span class="test-switch-track"></span>
  Texto da opção
</label>
```

- Track: 42px largura, verde quando checked
- Usar em modais e filtros PcD

## Chips de seleção — `.catalog-chip`

```html
<button type="button" class="catalog-chip is-selected" data-skill="Java">Java</button>
```

- Pill `border-radius: 999px`
- Selecionado: `--brand-50` + borda `--brand-200`
- Usado em skills (vaga e perfil candidato)

## Hint abaixo do campo

```html
<small class="field-hint">Texto auxiliar</small>
```

- 10–11px, `color: var(--ink-500)`

## Campos para matching (candidato)

Obrigatórios para cálculo de compatibilidade (`computeMatch` em `app.js`):

| Campo UI | Propriedade | Peso no match |
|----------|-------------|---------------|
| Área de atuação | `area` | 18% |
| Habilidades | `skills[]` | 35% + 12% |
| Cidade | `city` | 12% |
| Nível de experiência | `seniority` | 8% |

Vagas devem ter `skillsRequired`, `skillsNice`, `area`, `seniority`, `city`/`workModel`.
