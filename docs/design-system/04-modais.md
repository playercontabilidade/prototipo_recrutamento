# 04 — Modais

Dois famílias principais. **Não misturar** estruturas entre elas.

## A) `stack-dialog` — fluxos e pickers

**IDs de referência:** `#interviewDialog`, `#contactDialog`, `#dismissDialog`, `#bookingDialog`

```html
<dialog class="stack-dialog interview-dialog" id="interviewDialog">
  <form>
    <header class="stack-dialog-header">
      <div>
        <span class="eyebrow">AGENDAR</span>
        <h2>Título</h2>
        <p>Subtítulo opcional</p>
      </div>
      <button class="icon-button" type="button" aria-label="Fechar">×</button>
    </header>
    <!-- campos -->
    <footer class="dialog-actions">...</footer>
  </form>
</dialog>
```

| Propriedade | Valor |
|-------------|-------|
| Largura | `min(460–560px, calc(100% - 28px))` |
| `border-radius` | `var(--radius-md)` (~10px) ou 20px em detalhe entrevista |
| Padding form | `26–28px` |
| Backdrop | `rgb(16 28 18 / 52%)` + blur 3px |
| Scroll | Uma única área (`form` com `overflow-y: auto`) |

### Header

- Flex: título à esquerda, `icon-button` fechar à direita
- `h2`: 22px Nunito Sans
- `p`: 13px `--ink-500`

## B) `settings-form-dialog` — catálogos e formulários RH

**IDs:** `#departmentFormDialog`, `#managerAnalysisDialog`, `#testPreviewDialog`

```html
<dialog class="settings-form-dialog" id="departmentFormDialog">
  <form>
    <header>
      <div>
        <span class="eyebrow">CATÁLOGO</span>
        <h2>Título</h2>
      </div>
      <button class="icon-button" data-close-settings-dialog="..." aria-label="Fechar">×</button>
    </header>
    <label class="form-field">...</label>
    <footer>...</footer>
  </form>
</dialog>
```

| Propriedade | Valor |
|-------------|-------|
| Largura | `min(540–640px, calc(100% - 32px))` |
| `border-radius` | `22px` |
| `max-height` | `min(92vh, 860px)` |
| Inputs | `min-height: 48px`, `border-radius: 11px` |

## C) `interview-detail-dialog` — detalhe entrevista

**ID:** `#interviewDetailDialog`

- Largura `640px`
- Header: nome à esquerda, **badge status + ×** à direita (mesma linha)
- Seções: `.interview-detail-section` com título uppercase
- Ações no footer: primário + secundários em linha

## D) `candidate-filter-dialog` — filtros candidato

**ID:** `#candidateFiltersDialog`

- Família **`stack-dialog`** (não criar estrutura paralela)
- Campos com **`.form-field`** — label acima, igual ao RH
- Header com título + `×`; footer com Limpar + Aplicar
- Abre via `#candidateFilterBtn`, fecha com ×, Aplicar ou backdrop

## Comportamento JS

```javascript
dialog.showModal();
dialog.close();
```

- Fechar overlays ao trocar de página: `closeOverlayDialogs()`
- Portal candidato: `closeCandidateFiltersDialog()` ao sair

## O que evitar

- Duas barras de scroll no mesmo modal
- Header sem botão fechar acessível
- Modal sem `::backdrop` escurecido
- Criar novo tipo de dialog se uma família acima servir
