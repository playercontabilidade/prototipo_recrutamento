# 07 — Portais

## Portal RH (`#app-shell`)

**Público:** analistas de RH (ex.: Larissa Dias)

| Área | Padrão |
|------|--------|
| Sidebar | Completa: Recrutamento, Seleção, Análise |
| Topbar | Eyebrow “Recrutamento e seleção” + título da página |
| Perfil topbar | Avatar + nome + cargo |
| Cor dominante | Neutros + verde em ações |
| Azul navy | Só entrevistas, funil, filtros informativos |
| Páginas | `#dashboardPage`, `#pipelinePage`, `#jobsPage`, `#entrevistasPage`, etc. |

### Navegação

- `data-page` nos `.nav-item` + `goToPage()` em `app.js`
- Hash routes: `#dashboard`, `#vagas`, `#entrevistas`, `#portal-candidato`

---

## Portal do Candidato (`#candidatePortal`)

**Público:** candidatos (ex.: Levi Luz Sousa)

| Área | Padrão |
|------|--------|
| Sidebar | **Mesma estrutura do RH** — brand, 2 grupos nav, footer |
| Topbar | “Portal do candidato” + título dinâmico |
| Perfil | **Na topbar**, não na sidebar |
| Views | `jobs`, `detail`, `profile`, `apps` via `setCandidatePortalView()` |
| Cor | Mesmo sistema neutro+verde — **sem header azul dominante** |

### Grupos de menu

1. **Oportunidades** → Vagas (com contador)
2. **Minha conta** → Perfil, Minhas candidaturas

### Footer

- Voltar ao RH (`#exitCandidatePortal`)
- Help card (igual RH)

### Regras específicas

- Botões Voltar/Compartilhar: **só na view `detail`**
- Filtros: modal `#candidateFiltersDialog`, não chips na listagem
- Candidatura exige currículo e consentimento LGPD; perfil incompleto não impede o envio e, abaixo de 80%, sinaliza o RH
- Perfil organizado em painéis: Dados pessoais | Perfil profissional | Apresentação

---

## Portal do Gestor (`#gestorPage`)

**Público:** gestores de área

| Área | Padrão |
|------|--------|
| Layout | Dentro do shell RH (mesma sidebar) |
| Página | Stats + painéis “Minhas vagas”, “Análises”, “Candidatos” |
| Cards candidato | Nome à esquerda; match + botões **em linha** à direita |
| Ações | Ver candidato, Marcar uma reunião |

---

## Vista rápida (ícone olho)

- Abre `#candidatePortal` sem sair do contexto RH
- `openCandidatePortal()` / `closeCandidatePortal()`

## Comparar telas de referência

Quando o usuário enviar print do RH como referência:

1. Identificar **qual portal** (RH / Candidato / Gestor)
2. Copiar **estrutura** (sidebar/topbar/painel), não cores inventadas
3. Ajustar **textos padrão** conforme tabela brand acima
4. Validar com `08-checklist-nova-tela.md`
