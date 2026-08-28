# 08 — Checklist para nova tela ou ajuste

Use este checklist sempre que implementar ou corrigir UI.

## Antes de codar

- [ ] Li a tela de referência (imagem) e identifiquei o **portal** (RH / Candidato / Gestor)
- [ ] Consultei `07-portais.md` para regras do portal
- [ ] Verifiquei se já existe componente/classe reutilizável (`06-componentes.md`)
- [ ] Confirmei hierarquia de botões (`02-botoes.md`)

## Estrutura

- [ ] Sidebar segue: brand → nav groups → footer (se aplicável)
- [ ] Nome do usuário está na **topbar**, não na sidebar
- [ ] Topbar tem eyebrow + título forte
- [ ] Conteúdo usa `.dashboard-page` ou `.candidate-view` com `hidden` correto
- [ ] Uma ação primária verde por bloco principal

## Formulários

- [ ] Labels acima do campo (`.form-field`) em modais e formulários RH/candidato
- [ ] Inputs com `border-radius: 10–12px` e foco verde
- [ ] Campos de matching preenchíveis se a tela for perfil/candidatura

## Modais

- [ ] Família correta: `stack-dialog` vs `settings-form-dialog` vs `candidate-filter-dialog`
- [ ] Header: título + botão × 
- [ ] Uma área de scroll
- [ ] Footer com Cancelar + Salvar/Aplicar

## Comportamento

- [ ] Elementos condicionais usam `hidden` (não só CSS display)
- [ ] `setCandidatePortalView` / `goToPage` atualizam título e visibilidade
- [ ] Cache bust atualizado em `index.html` se CSS/JS mudou

## Cores

- [ ] Verde só para marca/ação/ativo
- [ ] Navy só para processo/informação
- [ ] Fundos majoritariamente neutros

## Entrega

- [ ] Testado em desktop e ≤820px (sidebar candidato / grids)
- [ ] Relatório ao usuário no formato: **Como estava | Problema | Padrão | O que foi feito**

## Referência rápida de arquivos

| Tarefa | Onde implementar |
|--------|------------------|
| Nova página RH | `index.html` section + `goToPage` em `app.js` |
| Estilo global | `styles.css` tokens `:root` |
| Portal candidato | `#candidatePortal` + funções `candidate*` em `app.js` |
| Modal | `index.html` `<dialog>` + listeners em `app.js` |
