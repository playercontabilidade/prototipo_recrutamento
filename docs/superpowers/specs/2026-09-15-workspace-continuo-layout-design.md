# Design: Workspace contínuo (layout RH)

**Data:** 2026-09-15  
**Status:** aprovado em brainstorming (Opção 3)  
**Abordagem:** Flatten do chrome sobre hubs existentes; 3º nível vira filtro; sem telas/hashes novos

## Objetivo

Redesenhar a pele do Portal RH para parecer produto B2B operacional — profissional, interativo, fácil — sem “cara de IA/SaaS template”. Inspiração Processo Ágil (Impostograma) **melhorada**: menos segmentação visual, mais superfície de trabalho contínua.

## Decisão central

**Workspace contínuo** (não Board-first puro, não Inbox-first puro):

- Mantém IA dos hubs: Início · Recrutamento · Seleção · Contratação
- No máximo **2 níveis** de navegação visíveis
- 3º nível (buckets / listas) = **chips de filtro** no conteúdo
- Verde só em ativo/CTA; navy ~15% em meta/processo

## Anti-redundância

| Pergunta | Resposta |
|----------|----------|
| Já existe fluxo com o mesmo job? | Sim — hubs `#recrutamento/<aba>` etc. **Estender chrome**, não criar paralelo |
| Cabe em hub existente? | Sim — só muda apresentação |
| Informação repetida? | KPIs ficam no Início; vistas operacionais não repetem strip de KPI |
| RH × Gestor? | Mesmo contrato de chrome onde classes são compartilhadas; papéis intactos |
| KPI/score duplicado? | Não criar novos indicadores nesta onda |

| Já existia | O que muda | Evitado |
|------------|------------|---------|
| Hubs + hashes + abas | Underline + chips; sem caixa cinza em volta das abas | Nova sidebar / novo hub |
| Barras segmented verdes (Pendências, Talentos) | Chips na faixa de ferramentas | Terceiro padrão de “menu” |
| DS Processo Ágil (DM Sans, verde/navy) | Aplicação mais rigorosa; menos pill/glow | Nova marca / tipografia |

## 1. Chrome e hierarquia

### Camadas

| Camada | Papel | Visual |
|--------|--------|--------|
| Sidebar | Fase (Início, Recrutamento, Seleção, Contratação) | Ativo = barra verde inset + fundo suave |
| Faixa do hub | Vistas (Pipeline · Pendências · Vagas · Talentos) — labels atuais | **Underline** 2px verde; tipografia + contagem discreta; sem pill full-width; sem fundo cinza em caixa |
| Topbar | Título da vista + busca + perfil | Branca ~56px; sem hero |

### Remover / migrar

- `.pendencias-hub-tabs` (e equivalentes solid/segmented) → padrão underline no hub; buckets → chips
- Talentos Aprovados / Bloqueados / Removidos → chips na linha de busca/filtros (default: Aprovados)
- Molduras cinza envolvendo tablists → removidas; faixa senta em `--surface-soft`

## 2. Superfície de conteúdo

### Padrão de página

```
[ Título da vista                         ] [ ações primárias ]
[ busca  ·  chips de filtro  ·  toggles ]
[ board / lista / tabela — full bleed ]
```

- Scroll só no content pane
- Uma página = um job
- Sem segundo header; sem card-dentro-de-card como default

### Recrutamento (mapeamento)

| Vista | Superfície | 3º nível |
|-------|------------|----------|
| Pipeline | Kanban full-bleed | filtros etapa/SLA como chips |
| Pendências | Lista densa; agrupamento leve por urgência | buckets como chips (sem rename de label) |
| Vagas | Lista (cards só se ação exigir) | status como chip |
| Talentos | Lista de candidatos | Aprovados/Bloqueados/Removidos = chips |

Seleção e Contratação: mesmo molde.

### Interação

- Clique em linha/card: preferir drawer/painel lateral se já houver caminho; senão manter comportamento atual e evoluir depois
- CTA na linha só para ação clara (Convidar, Aprovar)
- Hover/seleção como feedback principal; menos badges competindo

## 3. Linguagem visual

### Tipografia

- **DM Sans** única
- Título página ~20–22px semibold; corpo 14; meta 12–13

### Cor

| Uso | Token / regra |
|-----|----------------|
| Fundo | `--surface-soft` |
| Lista/board | branco contínuo, sem moldura desnecessária |
| Ativo / CTA | verde marca |
| Meta / SLA | navy em chips/ícones (~15%) |
| Borders | hairline `--border` |

**Proibido nesta onda:** purple glow, fileiras de pills full-rounded, multi-shadow, gradients decorativos, badges coloridos em excesso, cream+serif genérico.

### Componentes

- Hub tabs: underline; texto ativo mais escuro (não bloco verde com texto branco)
- Chips filtro: outline; ativo = fill suave; radius 6–8px
- Botões: primary verde; secondary ghost/outline
- Listas: divisores hairline; padding ~12–14px

### Motion (somente estes)

1. Troca de vista do hub — fade/slide ~150–200ms  
2. Drawer candidato — slide-in (quando existir)  
3. Chip ativo — transição cor/borda, sem bounce  

## 4. Escopo de implementação

### Nesta onda

1. Hub tabs → underline (RH Recrutamento/Seleção; Gestor onde compartilha)
2. Pendências buckets + Talentos listas → chips na toolbar
3. Remover caixas em volta das abas; full-bleed
4. Ajustes CSS/tokens + cache-bust
5. Início: sem hero; KPIs só lá
6. Drawer: só se caminho já existir

### Fora desta onda

- Nova IA / novos itens de sidebar
- Redesign profundo do kanban
- Redesign completo Candidato (além de classes compartilhadas)
- Troca de tipografia/marca
- Motion além dos 3 itens

### Critério de pronto

- Recrutamento: ≤2 níveis de nav + chips
- Sem barra segmented verde como chrome
- Hashes / `data-page` / fluxos JS intactos
- Hard-refresh com cache novo OK

## 5. Arquivos prováveis

- `styles.css` — chrome, tabs, chips, densidade
- `index.html` — markup tablist → chips onde couber; classes
- `app.js` — só se troca de tab/chip exigir wiring (preferir reusar handlers)
- Cache query `?v=` em `index.html`

## 6. Relação com specs anteriores

- **Não substitui** `2026-09-15-reorganizacao-navegacao-hubs-design.md` (IA/hashes)
- **Complementa** `2026-09-14-design-guide-processo-agil-rh.md` (contrato visual mais rigoroso no chrome)
- Respeita `docs/design-system/05-layout-shell.md` (topbar + sidebar + scroll no conteúdo)

## Fluxo antes × agora

| Antes | Agora |
|-------|--------|
| Sidebar + hub tabs + barra pill/segmented + filtros | Sidebar + hub underline + chips na toolbar |
| Abas com fundo verde e texto branco (solid) | Underline; verde só no traço/CTA |
| Listas dentro de “caixas” de chrome | Superfície contínua full-bleed |

## Aprovação

Brainstorming 2026-09-15: Opção 3 + seções 1–4 OK pelo usuário.
