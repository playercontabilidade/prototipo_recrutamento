# 02 — Botões

## Hierarquia

| Classe | Quando usar | Visual |
|--------|-------------|--------|
| `.primary-button` | **Uma** ação principal por bloco (Salvar, Nova vaga, Aplicar) | Verde sólido, texto branco |
| `.secondary-button` | Ações secundárias (Cancelar, Reenviar, Ver candidato) | Borda cinza, fundo branco |
| `.danger-button` | Reprovar, ações destrutivas confirmadas | Vermelho suave |
| `.dialog-text-button` | Cancelar em footer de modal | Texto simples |
| `.icon-button` | Ícones isolados (fechar, menu, notificação) | 38×38px, borda |
| `.page-back-link` | Voltar em sub-telas | Texto + seta, sem borda |
| `.candidate-apply-btn` | CTA forte no portal candidato | Verde, uppercase, full width |

## Especificações

### Primary

```html
<button class="primary-button" type="button">Nova vaga</button>
```

- `min-height: 40px` (modais: 42px)
- `padding: 0 15px`, `border-radius: 10px`
- `background: var(--brand-600)`, hover `--brand-700`
- `font-size: 13px`, `font-weight: 700`
- Sombra: `0 3px 8px rgb(47 143 61 / 16%)`

### Secondary

```html
<button class="secondary-button" type="button">Ver candidato</button>
```

- Mesma altura do primary
- `color: var(--ink-700)`, `border: 1px solid var(--border)`
- Hover: `background: var(--surface-soft)`

### Icon button

```html
<button class="icon-button" type="button" aria-label="Fechar">×</button>
```

- 38×38px, `border-radius: 10px`
- Usar em header de modais (canto superior direito)

### Page back link

```html
<button class="page-back-link" type="button">
  <span aria-hidden="true">←</span> Voltar
</button>
```

- **Só visível na view correta** — usar atributo `hidden` + regra global `[hidden] { display: none !important }`

## Footer de modal (padrão)

```html
<footer>
  <button class="dialog-text-button" type="button">Cancelar</button>
  <button class="primary-button" type="submit">Salvar</button>
</footer>
```

- Alinhamento à direita, `gap: 10px`
- Borda superior `1px solid var(--border)`, `padding-top: 18px`

## O que evitar

- Dois botões primários verdes lado a lado
- Azul navy em botão de submit
- Criar nova classe de botão se uma das acima servir
- Botão primário com texto longo em mobile sem `white-space` adequado
