# Design: Portal RH × Processo Ágil Guide

**Data:** 2026-09-14  
**Fonte:** `design-guide-processo-agil.pdf` (Impostograma)  
**Escopo:** contrato estrutural no Portal RH; **não** copiar classes `.cli-*` / `.fin-*`.

## Decisões

- Reutilizar / evoluir `docs/design-system/` e classes atuais (`primary-button`, `stack-dialog`, `nav-item`).
- Tipografia UI: **DM Sans** (única família).
- Cor: **verde** = CTA / ativo; **navy azul** = processo, meta, chips, topbar accents (~15–20% da UI, antes ~5%).
- Shell: topbar sempre visível (~56px) + sidebar fixa + scroll só no conteúdo; sem frame “glass” flutuante.
- IA e fluxos RH/Gestor/Candidato preservados; IDs JS intactos.
- Modais: chrome head/body/foot; semântica Cancelar ≠ Fechar (X permanece até footers cobrirem 100%).

## Onda visual (2026-09-15)

- Topbar **branca** (rollback do navy escuro); navy só em accents/chips/processo
- Dashboard sem hero: título operacional + chips de recorte
- KPIs mais densos; card “Contratações” verde→navy
- **Onda 2:** Fechar no footer de modais de leitura; × oculto via `:has(footer)`; proxy `data-close-proxy`; 3 padrões de abas (soft/solid/underline); semântica Cancelar ≠ Fechar
