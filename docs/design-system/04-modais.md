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
- Footer: **⋮** à esquerda (mais ações); secundários + **primário** à direita. Sair só com × do header.

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
- Proxies de saída: `[data-close-proxy="#idDoBotaoX"]` dispara o click do × original (preserva listeners)

## Cancelar ≠ Fechar

| Rótulo | Quando |
|--------|--------|
| **Cancelar** | Abandonar formulário / edição sem salvar |
| **×** | Sempre no canto superior direito do header (`icon-button`, `aria-label="Fechar"`) |
| **Fechar (footer)** | Não usar — substituído pelo × do header |

Proxies: `[data-close-proxy="#id"]` e `[data-close-dialog="dialogId"]` para reutilizar listeners existentes.

## Footer de detalhe + menu ⋮

Padrão nos modais de detalhe (entrevista, ficha, teste, fit, score, candidato, vaga, proposta):

- **⋮** à esquerda do footer/toolbar
- Ações secundárias + **primário** à direita
- Direção do menu (`placeCandidateMoreMenu`), pelos quadrantes do dialog:
  - Inferior esquerdo → **direita + cima**
  - Inferior direito → **esquerda + cima**
  - Superior esquerdo → **direita + baixo**
  - Superior direito → **esquerda + baixo**
  - Se não couber, fallback para o lado oposto.

## Três padrões de abas

| Padrão | Uso | Classes de referência |
|--------|-----|------------------------|
| **Soft** | Poucas opções / drill / painéis de detalhe | `.analytics-drill-tabs`, `.assignment-type-tab` |
| **Solid** | Segmented curto (2–4) | `.interview-view-switcher` |
| **Underline** | Hubs densos | `.talent-tabs`, `.candidate-dossier-groups` |

## O que evitar

- Duas barras de scroll no mesmo modal
- Header sem botão fechar acessível **e** sem saída no footer
- Modal sem `::backdrop` escurecido
- Criar novo tipo de dialog se uma família acima servir
- Quarto visual de abas fora de soft / solid / underline
