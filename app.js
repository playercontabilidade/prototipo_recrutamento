const jobs = [
  {
    id: 1,
    title: "Suporte de Sistemas",
    area: "Tecnologia",
    details: "Suporte de Sistemas · Tecnólogo ou superior · CLT",
    workModel: "Presencial",
    status: "Aberta",
    applicants: 18,
    initials: ["MR", "AS", "JL"],
    published: "Há 2 dias",
    city: "Palmas",
    seniority: "Júnior",
    manager: "Eduardo Ribeiro",
    skillsRequired: ["Suporte", "Windows", "Comunicação"],
    skillsNice: ["Linux", "SQL"],
  },
  {
    id: 2,
    title: "Analista de Departamento Pessoal",
    area: "Recursos Humanos",
    details: "Departamento Pessoal · Tecnólogo ou superior · CLT",
    workModel: "Presencial",
    status: "Aberta",
    applicants: 12,
    initials: ["CS", "LA", "MF"],
    published: "Há 4 dias",
    city: "Palmas",
    seniority: "Pleno",
    manager: "Larissa Dias",
    skillsRequired: ["Departamento Pessoal", "Folha", "eSocial"],
    skillsNice: ["Excel", "Comunicação"],
  },
  {
    id: 3,
    title: "Assistente / Analista Contábil",
    area: "Contabilidade",
    details: "Contabilidade · Tecnólogo ou superior · CLT",
    workModel: "Híbrido",
    status: "Pausada",
    applicants: 8,
    initials: ["BS", "CP", "RG"],
    published: "Há 6 dias",
    city: "Palmas",
    seniority: "Júnior",
    manager: "Camila Monteiro",
    skillsRequired: ["Contabilidade", "Escrituração", "Excel"],
    skillsNice: ["SPED", "Comunicação"],
  },
  {
    id: 4,
    title: "Assistente / Analista Fiscal",
    area: "Financeiro",
    details: "Fiscal · Tecnólogo ou superior · CLT",
    workModel: "Presencial",
    status: "Rascunho",
    applicants: 0,
    initials: [],
    published: "Hoje",
    city: "Palmas",
    seniority: "Júnior",
    manager: "Larissa Dias",
    skillsRequired: ["Fiscal", "ICMS", "Excel"],
    skillsNice: ["SPED", "Comunicação"],
  },
  {
    id: 5,
    title: "Desenvolvedor(a) Full Stack",
    area: "Tecnologia",
    details: "Desenvolvimento · Tecnólogo ou superior · CLT",
    workModel: "Híbrido",
    status: "Aberta",
    applicants: 10,
    initials: ["LJ", "RA", "MC"],
    published: "Há 5 dias",
    city: "Palmas",
    seniority: "Pleno",
    manager: "Eduardo Ribeiro",
    skillsRequired: ["Java", "PostgreSQL", "Comunicação"],
    skillsNice: ["Flutter", "Trabalho em equipe"],
  },
  {
    id: 6,
    title: "Administrativo",
    area: "Administrativo",
    details: "Administrativo · Ensino médio · CLT",
    workModel: "Presencial",
    status: "Aberta",
    applicants: 6,
    initials: ["LL"],
    published: "Há 2 dias",
    city: "Palmas",
    seniority: "Júnior",
    manager: "Larissa Dias",
    skillsRequired: ["Comunicação", "Excel"],
    skillsNice: ["Trabalho em equipe"],
    contract: "CLT",
    location: "Teotônio Segurado",
    publishedAt: "2026-08-25",
    benefits: ["Almoço", "Vale Transporte", "Day Off", "Educação Corporativa", "Desconto na UniCatólica", "Assiduidade"],
    aboutCompany: "A maior contabilidade do norte do Brasil",
  },
  {
    id: 7,
    title: "Analista Financeiro",
    area: "Financeiro",
    details: "Financeiro · Superior completo · CLT",
    workModel: "Híbrido",
    status: "Aberta",
    applicants: 9,
    initials: ["AF", "RM"],
    published: "Há 3 dias",
    city: "Palmas",
    seniority: "Pleno",
    manager: "Camila Monteiro",
    skillsRequired: ["Excel", "Fluxo de caixa", "Comunicação"],
    skillsNice: ["Power BI", "Contas a pagar"],
    contract: "CLT",
    location: "Teotônio Segurado",
    publishedAt: "2026-08-24",
  },
  {
    id: 8,
    title: "Estagiário(a) de Contabilidade",
    area: "Contabilidade",
    details: "Contabilidade · Cursando superior · Estágio",
    workModel: "Presencial",
    status: "Aberta",
    applicants: 14,
    initials: ["EC", "TS"],
    published: "Há 1 dia",
    city: "Palmas",
    seniority: "Júnior",
    manager: "Camila Monteiro",
    skillsRequired: ["Excel", "Comunicação"],
    skillsNice: ["Contabilidade", "Organização"],
    contract: "Estágio",
    location: "Teotônio Segurado",
    publishedAt: "2026-08-26",
  },
  {
    id: 9,
    title: "Designer UX/UI",
    area: "Tecnologia",
    details: "Design · Superior ou portfólio · PJ",
    workModel: "Remoto",
    status: "Aberta",
    applicants: 7,
    initials: ["DU", "LP"],
    published: "Há 4 dias",
    city: "Palmas",
    seniority: "Pleno",
    manager: "Eduardo Ribeiro",
    skillsRequired: ["Figma", "UI Design", "Comunicação"],
    skillsNice: ["Design system", "Pesquisa com usuário"],
    contract: "PJ",
    location: "Remoto",
    publishedAt: "2026-08-23",
  },
  {
    id: 10,
    title: "Coordenador(a) de RH",
    area: "Recursos Humanos",
    details: "RH · Superior completo · CLT",
    workModel: "Híbrido",
    status: "Aberta",
    applicants: 5,
    initials: ["CR", "MD"],
    published: "Há 6 dias",
    city: "Palmas",
    seniority: "Sênior",
    manager: "Larissa Dias",
    skillsRequired: ["Departamento Pessoal", "Liderança", "Comunicação"],
    skillsNice: ["Recrutamento", "eSocial"],
    contract: "CLT",
    location: "Teotônio Segurado",
    publishedAt: "2026-08-21",
  },
  {
    id: 11,
    title: "Auxiliar de Escritório (PcD)",
    area: "Administrativo",
    details: "Administrativo · Ensino médio · CLT",
    workModel: "Presencial",
    status: "Aberta",
    applicants: 11,
    initials: ["AE"],
    published: "Há 2 dias",
    city: "Palmas",
    seniority: "Júnior",
    manager: "Larissa Dias",
    skillsRequired: ["Comunicação", "Organização"],
    skillsNice: ["Excel", "Atendimento"],
    contract: "CLT",
    location: "Plano Diretor Sul",
    publishedAt: "2026-08-25",
    pcd: true,
  },
  {
    id: 12,
    title: "Engenheiro(a) DevOps",
    area: "Tecnologia",
    details: "Infraestrutura · Superior · CLT",
    workModel: "Remoto",
    status: "Aberta",
    applicants: 4,
    initials: ["DV", "NK"],
    published: "Há 7 dias",
    city: "Palmas",
    seniority: "Sênior",
    manager: "Eduardo Ribeiro",
    skillsRequired: ["Docker", "Linux", "Comunicação"],
    skillsNice: ["Kubernetes", "AWS"],
    contract: "CLT",
    location: "Remoto",
    publishedAt: "2026-08-20",
  },
  {
    id: 13,
    title: "Analista de Dados",
    area: "Tecnologia",
    details: "Dados · Superior · CLT",
    workModel: "Híbrido",
    status: "Aberta",
    applicants: 8,
    initials: ["AD", "FG"],
    published: "Há 5 dias",
    city: "Palmas",
    seniority: "Pleno",
    manager: "Eduardo Ribeiro",
    skillsRequired: ["SQL", "Excel", "Comunicação"],
    skillsNice: ["Power BI", "Python"],
    contract: "CLT",
    location: "Teotônio Segurado",
    publishedAt: "2026-08-22",
  },
  {
    id: 14,
    title: "Assistente Comercial",
    area: "Comercial",
    details: "Comercial · Ensino médio · CLT",
    workModel: "Presencial",
    status: "Aberta",
    applicants: 13,
    initials: ["AC", "BR"],
    published: "Há 1 dia",
    city: "Araguaína",
    seniority: "Júnior",
    manager: "Larissa Dias",
    skillsRequired: ["Comunicação", "Negociação"],
    skillsNice: ["CRM", "Excel"],
    contract: "CLT",
    location: "Centro",
    publishedAt: "2026-08-26",
  },
  {
    id: 15,
    title: "Gerente de Projetos",
    area: "Tecnologia",
    details: "Gestão · Superior · CLT",
    workModel: "Híbrido",
    status: "Pausada",
    applicants: 3,
    initials: ["GP"],
    published: "Há 8 dias",
    city: "Palmas",
    seniority: "Sênior",
    manager: "Eduardo Ribeiro",
    skillsRequired: ["Gestão de projetos", "Comunicação", "Liderança"],
    skillsNice: ["Scrum", "Jira"],
    contract: "CLT",
    location: "Teotônio Segurado",
    publishedAt: "2026-08-19",
  },
  {
    id: 16,
    title: "Recepcionista",
    area: "Administrativo",
    details: "Atendimento · Ensino médio · Temporário",
    workModel: "Presencial",
    status: "Aberta",
    applicants: 16,
    initials: ["RC", "MS"],
    published: "Hoje",
    city: "Palmas",
    seniority: "Júnior",
    manager: "Larissa Dias",
    skillsRequired: ["Comunicação", "Atendimento"],
    skillsNice: ["Organização", "Excel"],
    contract: "Temporário",
    location: "Plano Diretor Norte",
    publishedAt: "2026-08-27",
  },
  {
    id: 17,
    title: "Consultor(a) Fiscal PJ",
    area: "Financeiro",
    details: "Fiscal · Superior · PJ",
    workModel: "Presencial",
    status: "Aberta",
    applicants: 2,
    initials: ["CF"],
    published: "Há 9 dias",
    city: "Gurupi",
    seniority: "Pleno",
    manager: "Camila Monteiro",
    skillsRequired: ["Fiscal", "ICMS", "Comunicação"],
    skillsNice: ["SPED", "Consultoria"],
    contract: "PJ",
    location: "Centro",
    publishedAt: "2026-08-18",
  },
  {
    id: 18,
    title: "Analista de Marketing Digital",
    area: "Comercial",
    details: "Marketing · Superior · CLT",
    workModel: "Remoto",
    status: "Aberta",
    applicants: 6,
    initials: ["MK", "JS"],
    published: "Há 3 dias",
    city: "Palmas",
    seniority: "Pleno",
    manager: "Larissa Dias",
    skillsRequired: ["Marketing digital", "Redes sociais", "Comunicação"],
    skillsNice: ["Google Ads", "Canva"],
    contract: "CLT",
    location: "Remoto",
    publishedAt: "2026-08-24",
  },
];

function ensureJobDefaults(job) {
  const openingsById = {
    1: 2,
    2: 2,
    3: 2,
    4: 1,
    5: 3,
    6: 1,
    7: 2,
    8: 1,
    9: 1,
    10: 2,
    11: 1,
    12: 1,
    13: 2,
    14: 1,
    15: 1,
    16: 1,
    17: 1,
    18: 2,
  };
  const statusById = {
    12: "Encerrada",
    14: "Aguardando aprovação",
    16: "Cancelada",
  };
  if (statusById[job.id]) job.status = statusById[job.id];
  job.openings = Number(job.openings || openingsById[job.id] || 1);
  job.applicantsSeed = Number(job.applicantsSeed ?? job.applicants ?? 0);
  job.manager = job.manager || "Larissa Dias";
  job.requester = job.requester || (job.id % 2 === 0 ? "Eduardo Ribeiro" : "Camila Monteiro");
  job.openedAt = job.openedAt || job.publishedAt || "2026-08-20";
  job.hireBy = job.hireBy || job.deadline || "2026-09-30";
  job.deadline = job.deadline || job.hireBy;
  job.archived = Boolean(job.archived);
  job.contract = job.contract || (job.details || "").split(" · ").pop()?.trim() || "CLT";
  job.history = Array.isArray(job.history)
    ? job.history
    : [
        ["Criação", `Vaga criada · ${job.openedAt}`],
        ["Status", `${job.status} · ${job.manager}`],
      ];
  return job;
}

jobs.forEach(ensureJobDefaults);

const candidates = [
  {
    id: 101,
    name: "Karen Crystynna Silva Gonçalves",
    email: "karencsg01@gmail.com",
    phone: "(63) 99312-1375",
    vacancy: "Analista de Departamento Pessoal",
    stage: "Triagem",
    alert: 1,
    attachment: true,
    history: [
      ["Comentário", "Entrei em contato aguardando retorno · RH Portal"],
      ["Etapa: Triagem", "Equipe RH · hoje às 08:59"],
      ["Candidatura enviada", "Karen Crystynna · ontem às 16:40"],
    ],
    activities: [
      ["LD", "Larissa Dias", "Entrou em contato aguardando retorno", "Hoje, 09:42"],
      ["RH", "Equipe RH", "Moveu para Triagem", "Hoje, 08:59"],
      ["KG", "Karen Crystynna", "Enviou a candidatura", "Ontem, 16:40"],
    ],
  },
  {
    id: 102,
    name: "Pollyanna Cesario de Souza",
    email: "pollyanna123@gmail.com",
    phone: "(63) 99182-3004",
    vacancy: "Analista de Departamento Pessoal",
    stage: "Triagem",
    alert: 1,
    attachment: true,
    history: [["Candidatura enviada", "Pollyanna Cesario · há 2 dias"], ["Comentário", "Retornar amanhã · Larissa Dias"]],
    activities: [["PC", "Pollyanna Cesario", "Enviou a candidatura", "Há 2 dias"]],
  },
  {
    id: 103,
    name: "Victor Sousa Figueiredo",
    email: "victor.sousa@email.com",
    phone: "(63) 99220-1160",
    vacancy: "Suporte de Sistemas",
    stage: "Triagem",
    alert: 1,
    attachment: true,
    history: [["Candidatura enviada", "Victor Sousa · há 3 dias"]],
    activities: [["VS", "Victor Sousa", "Enviou a candidatura", "Há 3 dias"]],
  },
  {
    id: 104,
    name: "Kemilly Cristyne Neves Tavares",
    email: "kemilly.cristyne@hotmail.com",
    phone: "(63) 98817-4040",
    vacancy: "Analista de Departamento Pessoal",
    stage: "Triagem",
    alert: 2,
    attachment: true,
    history: [
      ["Comentário", "Aguardando documentos · RH Portal"],
      ["Comentário", "Primeiro contato feito · Larissa Dias"],
      ["Candidatura enviada", "Kemilly Cristyne · há 4 dias"],
    ],
    activities: [["KN", "Kemilly Cristyne", "Enviou a candidatura", "Há 4 dias"]],
  },
  {
    id: 105,
    name: "Ketmy Almeida de Souza",
    email: "ketmyalmeida@gmail.com",
    phone: "(63) 99288-7001",
    vacancy: "Analista de Departamento Pessoal",
    stage: "Triagem",
    alert: 0,
    attachment: true,
    history: [["Candidatura enviada", "Ketmy Almeida · há 5 dias"]],
    activities: [["KA", "Ketmy Almeida", "Enviou a candidatura", "Há 5 dias"]],
  },
  {
    id: 106,
    name: "Guilherme Rodrigues Mendes",
    email: "gui18rodrigues@gmail.com",
    phone: "(63) 99191-2500",
    vacancy: "Assistente / Analista Contábil",
    stage: "Entrevista RH",
    alert: 0,
    attachment: true,
    history: [
      ["Etapa: Entrevista RH", "Larissa Dias · hoje às 10:15"],
      ["Candidatura enviada", "Guilherme Rodrigues · há 3 dias"],
    ],
    activities: [["LD", "Larissa Dias", "Agendou entrevista para amanhã", "Hoje, 10:15"]],
  },
  {
    id: 107,
    name: "Alan Pimentas",
    email: "alanpimentas@gmail.com",
    phone: "(63) 99380-5512",
    vacancy: "Assistente / Analista Fiscal",
    stage: "Entrevista RH",
    alert: 2,
    attachment: true,
    history: [["Etapa: Entrevista RH", "Equipe RH · ontem às 14:30"]],
    activities: [["RH", "Equipe RH", "Moveu para Entrevista RH", "Ontem, 14:30"]],
  },
  {
    id: 108,
    name: "Lucas José da Silva",
    email: "lucas.jose86@gmail.com",
    phone: "(63) 99107-4422",
    vacancy: "Desenvolvedor(a) Full Stack",
    stage: "Entrevista RH",
    alert: 0,
    attachment: true,
    history: [["Entrevista agendada", "Equipe RH · amanhã às 15:00"]],
    activities: [["RH", "Equipe RH", "Agendou uma entrevista", "Hoje, 11:20"]],
  },
  {
    id: 109,
    name: "Suany Costa Dias",
    email: "suanycostadias@gmail.com",
    phone: "(63) 99214-6631",
    vacancy: "Analista de Departamento Pessoal",
    stage: "Entrevista RH",
    alert: 0,
    attachment: true,
    history: [["Etapa: Entrevista RH", "Larissa Dias · há 2 dias"]],
    activities: [["LD", "Larissa Dias", "Moveu para Entrevista RH", "Há 2 dias"]],
  },
  {
    id: 110,
    name: "Maria Eduarda Cavalcante",
    email: "mariaeduardacavalcante@gmail.com",
    phone: "(63) 99954-8260",
    vacancy: "Analista de Departamento Pessoal",
    stage: "Proposta",
    alert: 1,
    attachment: true,
    history: [["Proposta enviada", "Larissa Dias · hoje às 09:10"]],
    activities: [["LD", "Larissa Dias", "Enviou a proposta comercial", "Hoje, 09:10"]],
    proposal: {
      amount: 2000,
      workModel: "Presencial",
      contract: "CLT",
      status: "enviada",
      pendingPdf: "",
      sends: [
        {
          amount: 2000,
          workModel: "Presencial",
          contract: "CLT",
          message: "",
          pdf: "",
          at: "2026-08-27T09:10:00",
        },
      ],
    },
  },
];

const candidateSkillDefaults = {
  "Analista de Departamento Pessoal": ["Departamento Pessoal", "Folha", "Excel", "Comunicação"],
  "Suporte de Sistemas": ["Suporte", "Windows", "Comunicação"],
  "Assistente / Analista Contábil": ["Contabilidade", "Excel", "Escrituração"],
  "Assistente / Analista Fiscal": ["Fiscal", "Excel", "ICMS"],
  "Desenvolvedor(a) Full Stack": ["Java", "PostgreSQL", "Flutter", "Comunicação"],
};
const candidateStageEnteredDefaults = {
  101: "2026-08-20T08:00:00",
  102: "2026-08-25T10:00:00",
  103: "2026-08-24T09:00:00",
  104: "2026-08-22T11:00:00",
  105: "2026-08-26T14:00:00",
  106: "2026-08-24T10:15:00",
  107: "2026-08-18T14:30:00",
  108: "2026-08-25T11:20:00",
  109: "2026-08-25T09:00:00",
  110: "2026-08-26T09:10:00",
};
const candidateConsentDefaults = {
  104: false,
  107: false,
};
const candidateAppliedAtDefaults = {
  101: "2026-08-19",
  102: "2026-08-23",
  103: "2026-08-22",
  104: "2026-08-20",
  105: "2026-08-26",
  106: "2026-08-21",
  107: "2026-08-15",
  108: "2026-08-24",
  109: "2026-08-23",
  110: "2026-08-18",
};
const candidateOwnerDefaults = {
  101: "Larissa Dias",
  102: "Larissa Dias",
  103: "Camila Monteiro",
  104: "Larissa Dias",
  105: "Mariana Costa",
  106: "Camila Monteiro",
  107: "Larissa Dias",
  108: "Eduardo Ribeiro",
  109: "Larissa Dias",
  110: "Larissa Dias",
};
const candidateOriginDefaults = {
  101: "LinkedIn",
  102: "Indicação",
  103: "Site",
  104: "Indeed",
  105: "Site",
  106: "LinkedIn",
  107: "Indicação",
  108: "Site",
  109: "Indeed",
  110: "LinkedIn",
};
const candidateTagDefaults = {
  101: ["Prioridade", "DP"],
  102: ["Retorno"],
  103: ["Técnico"],
  104: ["Documentos"],
  105: ["Fit alto"],
  106: ["Entrevista"],
  107: ["Avaliação pendente"],
  108: ["Dev"],
  109: ["DP"],
  110: ["Proposta"],
};
const candidateFitDefaults = {
  101: 82,
  102: 74,
  103: 68,
  104: null,
  105: 88,
  106: 79,
  107: null,
  108: 71,
  109: 76,
  110: 85,
};
const candidateEvaluationDefaults = {
  101: "avaliado",
  102: "pendente",
  103: "pendente",
  104: "pendente",
  105: "avaliado",
  106: "avaliado",
  107: "pendente",
  108: "pendente",
  109: "avaliado",
  110: "avaliado",
};
candidates.forEach((candidate) => {
  const job = jobs.find((item) => item.title === candidate.vacancy);
  candidate.skills = candidate.skills || candidateSkillDefaults[candidate.vacancy] || ["Comunicação"];
  candidate.city = candidate.city || job?.city || "Palmas";
  candidate.seniority = candidate.seniority || job?.seniority || "Júnior";
  candidate.area = candidate.area || job?.area || "Geral";
  candidate.stageEnteredAt = candidate.stageEnteredAt || candidateStageEnteredDefaults[candidate.id] || "2026-08-26T09:00:00";
  candidate.lgpdConsent = candidateConsentDefaults[candidate.id] ?? true;
  candidate.consentAt = candidate.consentAt || (candidate.lgpdConsent ? "2026-07-01T12:00:00" : null);
  candidate.retainUntil = candidate.retainUntil || "2027-08-27";
  candidate.appliedAt = candidate.appliedAt || candidateAppliedAtDefaults[candidate.id] || "2026-08-20";
  candidate.owner = candidate.owner || candidateOwnerDefaults[candidate.id] || "Larissa Dias";
  candidate.origin = candidate.origin || candidateOriginDefaults[candidate.id] || "Site";
  candidate.tags = candidate.tags || candidateTagDefaults[candidate.id] || [];
  candidate.fitCultural =
    candidate.fitCultural === undefined ? candidateFitDefaults[candidate.id] ?? null : candidate.fitCultural;
  candidate.evaluationStatus =
    candidate.evaluationStatus || candidateEvaluationDefaults[candidate.id] || "pendente";
  candidate.manager = candidate.manager || job?.manager || "";
  candidate.lastAction = candidate.lastAction || null;
  candidate.nextAction = candidate.nextAction || "";
  candidate.nextActionAt = candidate.nextActionAt || "";
});

const talents = [
  {
    id: 201,
    name: "Eduardo De Deus Ferreira Barbosa",
    email: "eduardo147ferreira@hotmail.com",
    status: "aprovados",
  },
  {
    id: 202,
    name: "José Junior Jurema Cantuario",
    email: "jose.cantuario@email.com",
    status: "aprovados",
    motivo: "Bom currículo para Administrativo na área financeira.",
  },
  {
    id: 203,
    name: "Beatriz Folha Da Silva Noleto",
    email: "beatriz.noleto@email.com",
    city: "Palmas",
    status: "aprovados",
    motivo: "Tem um pouco de experiência no DP.",
  },
  {
    id: 204,
    name: "Wilmaria Macedo Cordeiro",
    email: "wilmaria.cordeiro@email.com",
    status: "aprovados",
    motivo: "Tem experiência no DP (home office).",
  },
  {
    id: 205,
    name: "Jullyana Ribeiro da Silva",
    email: "jullyana.ribeiro@email.com",
    status: "aprovados",
    motivo: "Perfil administrativo para o financeiro.",
  },
  {
    id: 206,
    name: "Marcos Vinícius Almeida Rocha",
    email: "marcos.rocha@email.com",
    status: "aprovados",
    motivo: "Boa experiência em atendimento e rotinas administrativas.",
  },
  {
    id: 207,
    name: "Ana Paula Ferreira Lima",
    email: "ana.lima@email.com",
    status: "aprovados",
  },
  {
    id: 208,
    name: "Rafael Souza Mendes",
    email: "rafael.mendes@email.com",
    status: "aprovados",
    motivo: "Currículo alinhado para suporte de sistemas.",
  },
  {
    id: 209,
    name: "Camila Oliveira Santos",
    email: "camila.santos@email.com",
    status: "aprovados",
  },
  {
    id: 210,
    name: "Pedro Henrique Costa",
    email: "pedro.costa@email.com",
    status: "aprovados",
    motivo: "Experiência prévia em departamento pessoal.",
  },
  {
    id: 211,
    name: "Larissa Martins Pereira",
    email: "larissa.pereira@email.com",
    status: "aprovados",
  },
  {
    id: 212,
    name: "Thiago Nunes Carvalho",
    email: "thiago.carvalho@email.com",
    status: "aprovados",
  },
  {
    id: 213,
    name: "Fernanda Alves Ribeiro",
    email: "fernanda.ribeiro@email.com",
    status: "aprovados",
    motivo: "Boa comunicação e disponibilidade imediata.",
  },
  {
    id: 214,
    name: "Gabriel Lima Azevedo",
    email: "gabriel.azevedo@email.com",
    status: "aprovados",
  },
  {
    id: 215,
    name: "Mariana Costa Teixeira",
    email: "mariana.teixeira@email.com",
    status: "aprovados",
    motivo: "Perfil para vagas administrativas e financeiras.",
  },
  {
    id: 216,
    name: "Lucas Henrique Barbosa",
    email: "lucas.barbosa@email.com",
    status: "aprovados",
  },
  {
    id: 217,
    name: "Patrícia Gomes Silveira",
    email: "patricia.silveira@email.com",
    status: "aprovados",
  },
  {
    id: 218,
    name: "Kelliane Beserra Dos Santos",
    email: "kelliliane04@gmail.com",
    status: "bloqueados",
  },
  {
    id: 219,
    name: "Elisangela Duarte Dos Santos",
    email: "elizangeladuartedossantos@gmail.com",
    status: "bloqueados",
  },
  {
    id: 220,
    name: "Icaro Jhuan Rodrigues De Matos",
    email: "icaroteste02@gmail.com",
    status: "bloqueados",
    motivo:
      "O candidato já anexou o currículo mais de 10 vezes em todas as vagas, sem critério, e não atende os requisitos para nenhum cargo.",
  },
  {
    id: 221,
    name: "Bruna Lorrana Lima Oliveira",
    email: "brunnalorranna@gmail.com",
    status: "bloqueados",
    motivo: "Mandou o currículo com preenchimentos automáticos, tipo latim.",
  },
  {
    id: 222,
    name: "Jackeline Barbosa Leão",
    email: "jackelineexpressando@icloud.com",
    status: "bloqueados",
    motivo: "A candidata mandou currículo para todas as vagas e não tem perfil para nenhum.",
  },
];

talents.forEach((talent, index) => {
  const skillPools = [
    ["Departamento Pessoal", "Folha", "eSocial", "Excel"],
    ["Suporte", "Windows", "Comunicação"],
    ["Contabilidade", "Excel", "Escrituração"],
    ["Fiscal", "ICMS", "Excel"],
    ["Java", "PostgreSQL", "Comunicação"],
    ["Comunicação", "Excel", "Trabalho em equipe"],
  ];
  talent.skills = talent.skills || skillPools[index % skillPools.length];
  talent.city = talent.city || "Palmas";
  talent.seniority = talent.seniority || (index % 3 === 0 ? "Pleno" : "Júnior");
  talent.area = talent.area || (index % 2 === 0 ? "Recursos Humanos" : "Tecnologia");
  talent.lgpdConsent = talent.lgpdConsent ?? index % 7 !== 0;
  talent.consentAt = talent.consentAt || (talent.lgpdConsent ? "2026-06-15T10:00:00" : null);
  talent.retainUntil = talent.retainUntil || "2027-08-27";
});
// Seed duplicate: talent shares email with pipeline candidate Victor
const dupTalent = talents.find((t) => t.id === 208);
if (dupTalent) dupTalent.email = "victor.sousa@email.com";

const results = [
  {
    id: 301,
    name: "Lucas José Da Silva",
    email: "lucas.jose86@gmail.com",
    vacancy: "Desenvolvedor(a) Full Stack",
    status: "contratados",
    proposal: 3502,
    workModel: "Presencial",
    contract: "CLT",
    phone: "(63) 99297-0217",
    history: [
      ["Etapa: Contratado", "De Proposta · RH Portal · 25/08 às 14:06"],
      ["Etapa: Proposta", "De Entrevista RH · RH Portal · 25/08 às 14:00"],
      ["Etapa: Entrevista RH", "De Triagem · RH Portal · 13/08 às 18:39"],
      ["Entrevista RH agendada", "Agendada para 15/08/2026 às 11:00"],
      ["Etapa: Triagem", "Equipe RH · 12/08 às 01:34"],
      ["Candidatura enviada", "Lucas José Da Silva · 12/08 às 01:34"],
    ],
  },
  {
    id: 302,
    name: "Suany Costa Dias",
    email: "suanycostadias@gmail.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "contratados",
    proposal: 1890,
    workModel: "Presencial",
    contract: "CLT",
  },
  {
    id: 303,
    name: "Marcos Ribeiro Alves",
    email: "marcos.ribeiro@email.com",
    vacancy: "Suporte de Sistemas",
    status: "contratados",
    proposal: 2450,
    workModel: "Presencial",
    contract: "CLT",
  },
  {
    id: 304,
    name: "Renata Farias Lopes",
    email: "renata.farias@email.com",
    vacancy: "Analista Financeiro",
    status: "contratados",
    proposal: 4200,
    workModel: "Híbrido",
    contract: "CLT",
  },
  {
    id: 305,
    name: "Thiago Nunes Barreto",
    email: "thiago.barreto@email.com",
    vacancy: "Engenheiro(a) DevOps",
    status: "contratados",
    proposal: 9800,
    workModel: "Remoto",
    contract: "PJ",
  },
  {
    id: 306,
    name: "Aline Prado Correia",
    email: "aline.prado@email.com",
    vacancy: "Analista de Dados",
    status: "contratados",
    proposal: 6300,
    workModel: "Híbrido",
    contract: "CLT",
  },
  {
    id: 401,
    name: "Pedro Henrique Cardoso Motta",
    email: "phcardoso260899@gmail.com",
    vacancy: "Assistente / Analista Fiscal",
    status: "dispensados",
    phone: "(63) 99260-8990",
    dismissReason: "Perfil não aderente aos requisitos da vaga",
    feedback: "Olá! Tudo bem?\n\nAgradecemos muito pelo seu interesse em fazer parte da nossa equipe e por ter compartilhado sua trajetória profissional conosco.\n\nNeste momento, seguiremos com outros perfis que estão mais alinhados às necessidades desta oportunidade. Por isso, sua candidatura não avançará para as próximas etapas do processo seletivo.\n\nEsperamos ter a oportunidade de nos encontrarmos novamente em futuros processos e desejamos muito sucesso na sua caminhada profissional.\n\nUm abraço,\nEquipe de Recrutamento e Seleção\nPlayer Contabilidade",
    history: [["Etapa: Reprovado", "De Triagem · RH Portal · 24/08 às 16:13"], ["Etapa: Triagem", "Equipe RH · 24/08 às 15:47"], ["Candidatura enviada", "Pedro Henrique · 24/08 às 15:47"]],
  },
  {
    id: 402,
    name: "Amanda Ribeiro Lopes",
    email: "amanda.lopes@email.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "dispensados",
    dismissReason: "Experiência insuficiente para a posição",
  },
  {
    id: 403,
    name: "Bruno Henrique Castro",
    email: "bruno.castro@email.com",
    vacancy: "Assistente / Analista Contábil",
    status: "dispensados",
  },
  {
    id: 404,
    name: "Carla Fernanda Moreira",
    email: "carla.moreira@email.com",
    vacancy: "Assistente / Analista Fiscal",
    status: "dispensados",
  },
  {
    id: 405,
    name: "Diego Alves Pinto",
    email: "diego.pinto@email.com",
    vacancy: "Suporte de Sistemas",
    status: "dispensados",
  },
  {
    id: 406,
    name: "Eliane Cristina Rocha",
    email: "eliane.rocha@email.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "dispensados",
  },
  {
    id: 407,
    name: "Fábio Nogueira Lima",
    email: "fabio.lima@email.com",
    vacancy: "Desenvolvedor(a) Full Stack",
    status: "dispensados",
  },
  {
    id: 408,
    name: "Gisele Aparecida Nunes",
    email: "gisele.nunes@email.com",
    vacancy: "Assistente / Analista Contábil",
    status: "dispensados",
  },
  {
    id: 409,
    name: "Henrique Souza Batista",
    email: "henrique.batista@email.com",
    vacancy: "Suporte de Sistemas",
    status: "dispensados",
  },
  {
    id: 410,
    name: "Isabela Martins Correia",
    email: "isabela.correia@email.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "dispensados",
  },
  {
    id: 411,
    name: "João Pedro Araujo",
    email: "joao.araujo@email.com",
    vacancy: "Assistente / Analista Fiscal",
    status: "dispensados",
  },
  {
    id: 412,
    name: "Karina Oliveira Freitas",
    email: "karina.freitas@email.com",
    vacancy: "Desenvolvedor(a) Full Stack",
    status: "dispensados",
  },
  {
    id: 413,
    name: "Leandro Costa Melo",
    email: "leandro.melo@email.com",
    vacancy: "Suporte de Sistemas",
    status: "dispensados",
  },
  {
    id: 414,
    name: "Monica Alves Teixeira",
    email: "monica.teixeira@email.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "dispensados",
  },
  {
    id: 501,
    name: "Jessica Souza Dias",
    email: "jessica.dias@email.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "ocultados",
    stage: "Triagem",
    phone: "(63) 99297-0217",
    history: [["Comentário", "Candidatura ocultada · RH Portal · 25/08 às 13:19"], ["Etapa: Triagem", "Equipe RH · 25/08 às 11:11"], ["Candidatura enviada", "Jessica Souza Dias · 25/08 às 11:11"]],
  },
  {
    id: 502,
    name: "André Luiz Cardoso",
    email: "andre.cardoso@email.com",
    vacancy: "Suporte de Sistemas",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 503,
    name: "Bianca Ferreira Pinto",
    email: "bianca.pinto@email.com",
    vacancy: "Assistente / Analista Contábil",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 504,
    name: "Caio Henrique Duarte",
    email: "caio.duarte@email.com",
    vacancy: "Assistente / Analista Fiscal",
    status: "ocultados",
    stage: "Entrevista RH",
  },
  {
    id: 505,
    name: "Daniela Souza Reis",
    email: "daniela.reis@email.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 506,
    name: "Eduarda Lima Pires",
    email: "eduarda.pires@email.com",
    vacancy: "Desenvolvedor(a) Full Stack",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 507,
    name: "Felipe Augusto Ramos",
    email: "felipe.ramos@email.com",
    vacancy: "Suporte de Sistemas",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 508,
    name: "Giovana Martins Lopes",
    email: "giovana.lopes@email.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "ocultados",
    stage: "Entrevista RH",
  },
  {
    id: 509,
    name: "Hugo Leonardo Vieira",
    email: "hugo.vieira@email.com",
    vacancy: "Assistente / Analista Contábil",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 510,
    name: "Ingrid Cristina Barros",
    email: "ingrid.barros@email.com",
    vacancy: "Assistente / Analista Fiscal",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 511,
    name: "Júlio Cesar Antunes",
    email: "julio.antunes@email.com",
    vacancy: "Suporte de Sistemas",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 512,
    name: "Larissa Helena Campos",
    email: "larissa.campos@email.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 513,
    name: "Mateus Henrique Siqueira",
    email: "mateus.siqueira@email.com",
    vacancy: "Desenvolvedor(a) Full Stack",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 514,
    name: "Natália Cristina Borges",
    email: "natalia.borges@email.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 515,
    name: "Otávio Pereira Cunha",
    email: "otavio.cunha@email.com",
    vacancy: "Suporte de Sistemas",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 516,
    name: "Priscila Andrade Melo",
    email: "priscila.melo@email.com",
    vacancy: "Assistente / Analista Contábil",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 517,
    name: "Renato Alves Guimarães",
    email: "renato.guimaraes@email.com",
    vacancy: "Assistente / Analista Fiscal",
    status: "ocultados",
    stage: "Triagem",
  },
  {
    id: 518,
    name: "Sabrina Oliveira Paiva",
    email: "sabrina.paiva@email.com",
    vacancy: "Analista de Departamento Pessoal",
    status: "ocultados",
    stage: "Triagem",
  },
];

const interviews = [
  {
    id: 601,
    name: "Lucas José Da Silva",
    vacancy: "Desenvolvedor(a) Full Stack",
    at: "2026-08-15T11:00:00",
    endAt: "2026-08-15T12:00:00",
    type: "Entrevista RH",
    stage: "Entrevista RH",
    modality: "Videochamada",
    status: "Agendada",
    waiting: true,
    meet: "Teams",
    link: "https://teams.microsoft.com/l/meetup-join/demo-601",
    location: "",
    owner: "Larissa Dias",
    interviewers: ["Larissa Dias"],
    sheet: "Ficha RH padrão",
    candidateInstructions: "Entre com o nome completo na sala.",
    candidateId: 108,
    duration: 60,
  },
  {
    id: 602,
    name: "Alan Pimentas",
    vacancy: "Assistente / Analista Fiscal",
    at: "2026-08-18T09:30:00",
    endAt: "2026-08-18T10:30:00",
    type: "Entrevista RH",
    stage: "Entrevista RH",
    modality: "Presencial",
    status: "Agendada",
    waiting: false,
    meet: "",
    link: "",
    location: "Player Contabilidade — Sala 2",
    owner: "Camila Monteiro",
    interviewers: ["Camila Monteiro"],
    sheet: "Ficha RH padrão",
    candidateId: 107,
    duration: 60,
  },
  {
    id: 603,
    name: "Suany Costa Dias",
    vacancy: "Analista de Departamento Pessoal",
    at: "2026-08-21T16:00:00",
    endAt: "2026-08-21T17:00:00",
    type: "Entrevista RH",
    stage: "Entrevista RH",
    modality: "Telefone",
    status: "Agendada",
    waiting: true,
    meet: "",
    link: "",
    location: "",
    owner: "Larissa Dias",
    interviewers: ["Larissa Dias"],
    sheet: "Ficha RH padrão",
    candidateId: 109,
    duration: 60,
  },
  {
    id: 604,
    name: "Guilherme Rodrigues Mendes",
    vacancy: "Assistente / Analista Contábil",
    at: "2026-08-25T14:30:00",
    endAt: "2026-08-25T15:30:00",
    type: "Entrevista RH",
    stage: "Entrevista RH",
    modality: "Videochamada",
    status: "Confirmada",
    waiting: false,
    meet: "Meet",
    link: "https://meet.google.com/demo-604",
    location: "",
    owner: "Larissa Dias",
    interviewers: ["Larissa Dias", "Camila Monteiro"],
    sheet: "Ficha técnica",
    candidateInstructions: "Tenha o currículo em PDF aberto.",
    candidateId: 106,
    duration: 60,
  },
  {
    id: 605,
    name: "Kemilly Cristyne Neves Tavares",
    vacancy: "Analista de Departamento Pessoal",
    at: "2026-08-27T10:00:00",
    endAt: "2026-08-27T11:00:00",
    type: "Entrevista RH",
    stage: "Entrevista RH",
    modality: "Videochamada",
    status: "Agendada",
    waiting: false,
    meet: "Meet",
    link: "https://meet.google.com/demo-605",
    location: "",
    owner: "Mariana Costa",
    interviewers: ["Mariana Costa", "Larissa Dias"],
    sheet: "Ficha RH padrão",
    candidateId: 104,
    duration: 60,
  },
  {
    id: 606,
    name: "Pollyanna Cesario de Souza",
    vacancy: "Analista de Departamento Pessoal",
    at: "2026-08-28T15:00:00",
    endAt: "2026-08-28T16:00:00",
    type: "Entrevista RH",
    stage: "Entrevista RH",
    modality: "Videochamada",
    status: "Agendada",
    waiting: true,
    meet: "Teams",
    link: "https://teams.microsoft.com/l/meetup-join/demo-606",
    location: "",
    owner: "Larissa Dias",
    interviewers: ["Larissa Dias"],
    sheet: "Ficha RH padrão",
    candidateInstructions: "Confirme presença até a véspera.",
    candidateId: 102,
    duration: 60,
  },
  {
    id: 607,
    name: "Kemilly Cristyne Neves Tavares",
    vacancy: "Analista de Departamento Pessoal",
    at: "2026-08-26T09:00:00",
    endAt: "2026-08-26T10:00:00",
    type: "Entrevista RH",
    stage: "Entrevista RH",
    modality: "Videochamada",
    status: "Confirmada",
    waiting: false,
    meet: "Meet",
    link: "https://meet.google.com/demo-atrasada",
    location: "",
    owner: "Larissa Dias",
    interviewers: ["Larissa Dias"],
    sheet: "Ficha RH padrão",
    notes: "Seed de entrevista sem resultado após o horário.",
    candidateInstructions: "Entre 5 minutos antes.",
    candidateId: 104,
    inviteSent: true,
    reminderSent: false,
    duration: 60,
  },
];

const tests = [
  {
    id: 1,
    title: "Analista Fiscal",
    description: "Avaliação de conhecimentos fiscais e tributários.",
    questions: [
      {
        id: 1,
        type: "single",
        prompt: "Qual regime tributário se aplica a empresas com faturamento até R$ 4,8 milhões?",
        options: ["Simples Nacional", "Lucro Real", "Lucro Presumido", "MEI"],
        correct: [0],
      },
      {
        id: 2,
        type: "multiple",
        prompt: "Quais documentos são obrigatórios na escrituração fiscal? (mais de uma resposta)",
        options: ["SPED Fiscal", "DCTF", "ECF", "RAIS"],
        correct: [0, 1, 2],
      },
      {
        id: 3,
        type: "text",
        prompt: "Descreva como você procederia na apuração de ICMS em operação interestadual.",
        options: [],
        correct: [],
      },
    ],
    minScore: 70,
    active: true,
  },
  {
    id: 2,
    title: "Entrevista — Perfil comportamental",
    description: "Avaliação de competências comportamentais e fit cultural.",
    questions: [
      {
        id: 4,
        type: "single",
        prompt: "Em situações de pressão, você costuma:",
        options: [
          "Priorizar tarefas e comunicar o time",
          "Trabalhar sozinho até resolver",
          "Delegar imediatamente",
          "Adiar a entrega",
        ],
        correct: [0],
      },
      {
        id: 5,
        type: "multiple",
        prompt: "Quais competências você considera essenciais para trabalho em equipe?",
        options: ["Comunicação", "Empatia", "Competitividade", "Escuta ativa"],
        correct: [0, 1, 3],
      },
      {
        id: 6,
        type: "text",
        prompt: "Conte uma situação em que você precisou dar feedback difícil a um colega.",
        options: [],
        correct: [],
      },
    ],
    minScore: 70,
    active: true,
  },
];

let nextTestId = 3;
let nextQuestionId = 7;
let editingTestId = null;
let previewTestId = null;

const candidateTestMap = {
  102: [{ id: 2, status: "Pendente" }],
  104: [{ id: 2, status: "Pendente" }],
  106: [{ id: 2, status: "Pendente" }],
  107: [{ id: 1, status: "Pendente" }],
  108: [{ id: 2, status: "Concluído", score: 88 }],
  109: [{ id: 2, status: "Pendente" }],
  110: [{ id: 2, status: "Concluído", score: 91 }],
};

const monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

let pipelineStages = ["Triagem", "Entrevista RH", "Proposta", "Recusou Proposta"];

const ID_ALIASES = {
  jobList: "jobList",
  resultCount: "resultCount",
  searchInput: "searchInput",
  statusFilter: "statusFilter",
  emptyState: "emptyState",
  jobDialog: "jobDialog",
  jobForm: "jobForm",
  toast: "toast",
  sidebar: "sidebar",
  sidebarOverlay: "sidebarOverlay",
  menuButton: "menuButton",
  sidebarToggle: "sidebarToggle",
  sidebarClose: "sidebarClose",
  dashboardPage: "dashboardPage",
  painelPage: "painelPage",
  reportsPage: "reportsPage",
  designSystemPage: "designSystemPage",
  pipelinePage: "pipelinePage",
  jobsPage: "jobsPage",
  talentosPage: "talentosPage",
  resultadosPage: "resultadosPage",
  entrevistasPage: "entrevistasPage",
  tecnicosPage: "tecnicosPage",
  testsListView: "testsListView",
  testsEditorView: "testsEditorView",
  testList: "testList",
  testEmpty: "testEmpty",
  testQuestionList: "testQuestionList",
  testQuestionsEmpty: "testQuestionsEmpty",
  talentList: "talentList",
  talentSearch: "talentSearch",
  talentEmpty: "talentEmpty",
  resultList: "resultList",
  resultSearch: "resultSearch",
  resultEmpty: "resultEmpty",
  interviewList: "interviewList",
  interviewEmpty: "interviewEmpty",
  calendarGrid: "calendarGrid",
  kanban: "kanban",
  jobCandidateList: "jobCandidateList",
  candidateSearch: "candidateSearch",
  jobFilter: "jobFilter",
  candidateDialog: "candidateDialog",
  interviewDialog: "interviewDialog",
  datePickerDialog: "datePickerDialog",
  timePickerDialog: "timePickerDialog",
  contactDialog: "contactDialog",
  offerDialog: "offerDialog",
  offerFormDialog: "offerFormDialog",
  activityList: "activityList",
  aprovadosCount: "aprovadosCount",
  bloqueadosCount: "bloqueadosCount",
  talentsNavCount: "talentsNavCount",
  contratadosCount: "contratadosCount",
  dispensadosCount: "dispensadosCount",
  ocultadosCount: "ocultadosCount",
  resultsNavCount: "resultsNavCount",
  calendarMonth: "calendarMonth",
  interviewsNavCount: "interviewsNavCount",
  interviewListTitle: "interviewListTitle",
  interviewListNote: "interviewListNote",
  testQuestionsNote: "testQuestionsNote",
  testEditorTitle: "testEditorTitle",
  testTitleInput: "testTitleInput",
  testDescriptionInput: "testDescriptionInput",
  testMinScore: "testMinScore",
  testMinScoreLabel: "testMinScoreLabel",
  testActive: "testActive",
  testsNavCount: "testsNavCount",
  testsActiveSummary: "testsActiveSummary",
  testsTotalSummary: "testsTotalSummary",
  testsListNote: "testsListNote",
  dashboardCandidatesCount: "dashboardCandidatesCount",
  dashboardJobsCount: "dashboardJobsCount",
  dashboardJobList: "dashboardJobList",
  dashboardMatchList: "dashboardMatchList",
  dashboardFunnel: "dashboardFunnel",
  dashboardActivity: "dashboardActivity",
  candidateStage: "candidateStage",
  profileStage: "profileStage",
  candidateName: "candidateName",
  profileName: "profileName",
  candidateRole: "candidateRole",
  profileRole: "profileRole",
  candidateEmail: "candidateEmail",
  candidatePhone: "candidatePhone",
  profileContact: "profileContact",
  candidateHistory: "candidateHistory",
  candidateTalentBank: "candidateTalentBank",
  candidateTests: "candidateTests",
  toggleActivities: "toggleActivities",
  offerSummary: "offerSummary",
  offerHistory: "offerHistory",
  offerAttachLabel: "offerAttachLabel",
  offerMessage: "offerMessage",
  offerAmount: "offerAmount",
  offerWorkModel: "offerWorkModel",
  offerContract: "offerContract",
  interviewDateLabel: "interviewDateLabel",
  interviewTimeLabel: "interviewTimeLabel",
  datePickerMonth: "datePickerMonth",
  datePickerGrid: "datePickerGrid",
  timeSlotGrid: "timeSlotGrid",
  interviewCandidateLabel: "interviewCandidateLabel",
  interviewModality: "interviewModality",
  interviewStage: "interviewStage",
  interviewLink: "interviewLink",
  interviewLocation: "interviewLocation",
  interviewNotes: "interviewNotes",
  interviewSendInvite: "interviewSendInvite",
  contactCharCount: "contactCharCount",
  sendContact: "sendContact",
  contactPreview: "contactPreview",
  contactCandidateLabel: "contactCandidateLabel",
  contactCandidateEmail: "contactCandidateEmail",
  contactMessage: "contactMessage",
  clearFilters: "clearFilters",
  newJobButton: "newJobButton",
  cancelDialog: "cancelDialog",
  filterButton: "filterButton",
  clearTalentSearch: "clearTalentSearch",
  clearResultSearch: "clearResultSearch",
  calendarPrev: "calendarPrev",
  calendarNext: "calendarNext",
  clearInterviewDay: "clearInterviewDay",
  newInterviewButton: "newInterviewButton",
  newTestButton: "newTestButton",
  emptyNewTestButton: "emptyNewTestButton",
  testEditorBack: "testEditorBack",
  saveTestButton: "saveTestButton",
  addQuestionButton: "addQuestionButton",
  pipelineHeading: "pipelineHeading",
  jobBoardHeading: "jobBoardHeading",
  jobBoardSubtitle: "jobBoardSubtitle",
  jobBoardBack: "jobBoardBack",
  pageTitle: "pageTitle",
  pipelineFilterButton: "pipelineFilterButton",
  closeCandidateDialog: "closeCandidateDialog",
  closeInterviewDialog: "closeInterviewDialog",
  interviewForm: "interviewForm",
  openDatePicker: "openDatePicker",
  openTimePicker: "openTimePicker",
  closeDatePicker: "closeDatePicker",
  closeTimePicker: "closeTimePicker",
  datePickerPrev: "datePickerPrev",
  datePickerNext: "datePickerNext",
  closeContactDialog: "closeContactDialog",
  cancelContact: "cancelContact",
  contactForm: "contactForm",
  closeOfferDialog: "closeOfferDialog",
  offerClose: "offerClose",
  offerNew: "offerNew",
  closeOfferForm: "closeOfferForm",
  cancelOfferForm: "cancelOfferForm",
  offerForm: "offerForm",
  offerAttachPdf: "offerAttachPdf",
  offerPdfInput: "offerPdfInput",
  offerSend: "offerSend",
  commentForm: "commentForm",
  commentInput: "commentInput",
  analyticsFunnel: "analyticsFunnel",
  reportJobs: "reportJobs",
  reportOrigin: "reportOrigin",
  reportFrom: "reportFrom",
  reportTo: "reportTo",
  candidateTalentBank: "candidateTalentBank",
  offerWorkModel: "offerWorkModel",
  offerFormDialog: "offerFormDialog",
  activityList: "activityList",
  testsListView: "testsListView",
  testsEditorView: "testsEditorView",
  reportsPage: "reportsPage",
  talentSearch: "talentSearch",
  resultList: "resultList",
  resultSearch: "resultSearch",
  jobCandidateList: "jobCandidateList",
  resultCount: "resultCount",
  statusFilter: "statusFilter",
  sidebarOverlay: "sidebarOverlay",
  menuButton: "menuButton",
  pipelineHeading: "pipelineHeading",
  jobBoardHeading: "jobBoardHeading",
  jobBoardSubtitle: "jobBoardSubtitle",
  jobBoardBack: "jobBoardBack",
  pageTitle: "pageTitle",
  pipelineFilterButton: "pipelineFilterButton",
  closeCandidateDialog: "closeCandidateDialog",
  closeInterviewDialog: "closeInterviewDialog",
  interviewForm: "interviewForm",
  openDatePicker: "openDatePicker",
  openTimePicker: "openTimePicker",
  closeDatePicker: "closeDatePicker",
  closeTimePicker: "closeTimePicker",
  datePickerPrev: "datePickerPrev",
  datePickerNext: "datePickerNext",
  datePickerGrid: "datePickerGrid",
  timeSlotGrid: "timeSlotGrid",
  closeContactDialog: "closeContactDialog",
  cancelContact: "cancelContact",
  contactForm: "contactForm",
  closeOfferDialog: "closeOfferDialog",
  offerClose: "offerClose",
  offerNew: "offerNew",
  closeOfferForm: "closeOfferForm",
  cancelOfferForm: "cancelOfferForm",
  offerAttachPdf: "offerAttachPdf",
  offerPdfInput: "offerPdfInput",
  offerSend: "offerSend",
  commentForm: "commentForm",
  commentInput: "commentInput",
  toggleActivities: "toggleActivities",
  newJobButton: "newJobButton",
  cancelDialog: "cancelDialog",
  clearFilters: "clearFilters",
  filterButton: "filterButton",
  clearTalentSearch: "clearTalentSearch",
  clearResultSearch: "clearResultSearch",
  calendarPrev: "calendarPrev",
  calendarNext: "calendarNext",
  calendarMonth: "calendarMonth",
  clearInterviewDay: "clearInterviewDay",
  newInterviewButton: "newInterviewButton",
  newTestButton: "newTestButton",
  emptyNewTestButton: "emptyNewTestButton",
  testEditorBack: "testEditorBack",
  saveTestButton: "saveTestButton",
  addQuestionButton: "addQuestionButton",
  interviewCandidateLabel: "interviewCandidateLabel",
  contactCandidateLabel: "contactCandidateLabel",
  contactCandidateEmail: "contactCandidateEmail",
  contactMessage: "contactMessage",
  contactCharCount: "contactCharCount",
  sendContact: "sendContact",
  contactPreview: "contactPreview",
  offerMessage: "offerMessage",
  offerAmount: "offerAmount",
  offerContract: "offerContract",
  interviewDateLabel: "interviewDateLabel",
  interviewTimeLabel: "interviewTimeLabel",
  datePickerMonth: "datePickerMonth",
  interviewSendInvite: "interviewSendInvite",
  candidateStage: "candidateStage",
  candidateName: "candidateName",
  candidateTests: "candidateTests",
  dashboardCandidatesCount: "dashboardCandidatesCount",
  dashboardJobsCount: "dashboardJobsCount",
  dashboardJobList: "dashboardJobList",
  dashboardMatchList: "dashboardMatchList",
  dashboardFunnel: "dashboardFunnel",
  dashboardActivity: "dashboardActivity",
  aprovadosCount: "aprovadosCount",
  bloqueadosCount: "bloqueadosCount",
  contratadosCount: "contratadosCount",
  dispensadosCount: "dispensadosCount",
  ocultadosCount: "ocultadosCount",
  interviewListTitle: "interviewListTitle",
  interviewListNote: "interviewListNote",
  testsListNote: "testsListNote",
  testsActiveSummary: "testsActiveSummary",
  testsTotalSummary: "testsTotalSummary",
  testEditorTitle: "testEditorTitle",
  testTitleInput: "testTitleInput",
  testDescriptionInput: "testDescriptionInput",
  testMinScore: "testMinScore",
  testMinScoreLabel: "testMinScoreLabel",
  testQuestionsNote: "testQuestionsNote",
  jobSubmitButton: "jobSubmitButton",
};

function resolveSelector(selector) {
  if (typeof selector !== "string") return selector;
  return selector.replace(/#([A-Za-z_][\w-]*)/g, (_, id) => `#${ID_ALIASES[id] || id}`);
}

["querySelector", "querySelectorAll"].forEach((method) => {
  const docMethod = Document.prototype[method];
  Document.prototype[method] = function patchedQuery(selector) {
    return docMethod.call(this, resolveSelector(selector));
  };
  const elMethod = Element.prototype[method];
  Element.prototype[method] = function patchedQuery(selector) {
    return elMethod.call(this, resolveSelector(selector));
  };
});

function on(selector, event, handler) {
  const node = typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!node) return;
  node.addEventListener(event, handler);
}

const managers = [
  { id: "ld", name: "Larissa Dias", role: "Analista de RH" },
  { id: "er", name: "Eduardo Ribeiro", role: "Gestor da área" },
  { id: "cm", name: "Camila Monteiro", role: "Coordenação" },
];
const departments = [
  { id: 1, name: "Administrativo", description: "Administrativo", active: true },
  { id: 2, name: "Contabilidade", description: "", active: true },
  { id: 3, name: "Contábil", description: "Núcleo contábil", active: true },
  { id: 4, name: "Departamento Pessoal", description: "Gestão de folha e pessoas", active: true },
  { id: 5, name: "Financeiro", description: "", active: true },
  { id: 6, name: "Paralegal", description: "", active: true },
  { id: 7, name: "Recursos Humanos", description: "Gestão de pessoas e recrutamento", active: true },
  { id: 8, name: "Suporte de Sistemas", description: "Atendimento e operação dos sistemas", active: true },
  { id: 9, name: "Tecnologia", description: "Desenvolvimento e infraestrutura", active: true },
];
const settingsManagers = [
  { id: 1, name: "Larissa Dias", email: "larissa@portalrh.com", phone: "(63) 99999-0101", company: "Player Contabilidade", department: "Recursos Humanos", role: "Analista de RH", portalAccess: true, active: true },
  { id: 2, name: "Eduardo Ribeiro", email: "eduardo@portalrh.com", phone: "(63) 99999-0102", company: "Player Contabilidade", department: "Tecnologia", role: "Gestor da área", portalAccess: true, active: true },
  { id: 3, name: "Camila Monteiro", email: "camila@portalrh.com", phone: "(63) 99999-0103", company: "Player Contabilidade", department: "Financeiro", role: "Coordenação", portalAccess: true, active: true },
];
const settingsRoles = [
  { id: 1, name: "Administrativo", department: "Administrativo", description: "Comercial/Pós Venda", active: true },
  { id: 2, name: "Analista Financeiro", department: "Financeiro", description: "Financeiro/BPO", active: true },
  { id: 3, name: "Analista Paralegal", department: "Paralegal", description: "Departamento Paralegal", active: true },
  { id: 4, name: "Analista de Departamento Pessoal", department: "Departamento Pessoal", description: "", active: true },
  { id: 5, name: "Analista de RH", department: "Recursos Humanos", description: "", active: true },
  { id: 6, name: "Assistente / Analista Fiscal", department: "Financeiro", description: "", active: true },
  { id: 7, name: "Assistente / Analista Contábil", department: "Contábil", description: "", active: true },
  { id: 8, name: "Desenvolvedor(a) Full Stack", department: "Tecnologia", description: "", active: true },
  { id: 9, name: "Suporte de Sistemas", department: "Suporte de Sistemas", description: "Identificar e corrigir erros básicos.", active: true },
];
const companies = [
  { id: 1, name: "Player Contabilidade", location: "Teotônio Segurado", about: "A maior contabilidade do norte do Brasil", benefits: "Almoço\nVale Transporte\nDay Off", slogan: "Juntos construímos o futuro próspero e bem contado!", primary: "#194A92", accent: "#71C63A", logo: "", isDefault: true, active: true },
];
const managerAnalyses = [
  { id: 1, candidate: "Karen Crystynna Silva Gonçalves", role: "Analista de Departamento Pessoal", department: "Departamento Pessoal", manager: "Larissa Dias", sender: "Levi Luz - DEV", due: "25/08/2026 às 14:00", opinion: "Aguardando parecer do gestor.", status: "pending", rhNote: "", verificationMeeting: "" },
  { id: 2, candidate: "Guilherme Rodrigues Mendes", role: "Assistente / Analista Contábil", department: "Contábil", manager: "Camila Monteiro", sender: "Larissa Dias", due: "28/08/2026 às 10:00", opinion: "Perfil técnico adequado.", status: "pending", rhNote: "", verificationMeeting: "" },
  { id: 3, candidate: "Alan Pimentas", role: "Desenvolvedor(a) Full Stack", department: "Tecnologia", manager: "Larissa Dias", sender: "Larissa Dias", due: "15/06/2026 às 09:00", opinion: "Necessita segunda verificação técnica.", status: "pending", rhNote: "", verificationMeeting: "" },
];
const currentManagerName = "Larissa Dias";
let lgpdRetentionDays = 365;
let contactChannel = "email";
let selectedBookingSlot = "";
let pendingDismissCandidate = null;
let pendingBlockCandidate = null;
const slaDaysByStage = {
  Triagem: 3,
  "Entrevista RH": 5,
  Proposta: 4,
  default: 5,
};
const hiringRequests = [];
const benefitsCatalog = [
  { id: 1, name: "Home office", description: "Trabalho remoto parcial ou integral", active: true },
  { id: 2, name: "Plano de saúde", description: "Cobertura médica e odontológica", active: true },
  { id: 3, name: "Vale refeição", description: "Auxílio alimentação em dias úteis", active: true },
  { id: 4, name: "Vale transporte", description: "Auxílio deslocamento", active: true },
];
const pipelineStageCatalog = [
  { id: 1, code: "TRIAGEM", name: "Triagem", active: true, system: true },
  { id: 2, code: "ENTREVISTA_RH", name: "Entrevista RH", active: true, system: true },
  { id: 3, code: "PROPOSTA", name: "Proposta", active: true, system: true },
  { id: 4, code: "RECUSOU", name: "Recusou Proposta", active: true, system: false },
  { id: 5, code: "EM_ANALISE", name: "Em análise", active: false, system: true },
  { id: 6, code: "TESTE_TECNICO", name: "Teste Técnico", active: false, system: true },
];
pipelineStages = pipelineStageCatalog.filter((item) => item.active).map((item) => item.name);
const emailTemplates = [
  { id: 1, code: "APPROVAL", name: "Aprovação", subject: "Parabéns! Você foi aprovado(a) - Portal de Vagas", body: "Olá {{candidateName}},\n\nVocê foi aprovado(a) na vaga \"{{jobTitle}}\".\n\nAtenciosamente,\nPortal de Vagas", active: true },
  { id: 2, code: "CANDIDATE_REGISTRATION", name: "Cadastro de candidato", subject: "Conta criada - Portal de Vagas", body: "Olá {{candidateName}},\n\nSua conta foi criada com sucesso. Acesse {{siteUrl}} para completar seu perfil.\n\nPortal de Vagas", active: true },
  { id: 3, code: "APPLICATION_CONFIRMATION", name: "Confirmação de candidatura", subject: "Candidatura confirmada - Portal de Vagas", body: "Olá {{candidateName}},\n\nRecebemos sua candidatura para a vaga {{jobTitle}}.\n\nPortal de Vagas", active: true },
  { id: 4, code: "INTERVIEW_INVITATION", name: "Convite para entrevista", subject: "Convite para entrevista - Portal de Vagas", body: "Olá {{candidateName}},\n\nGostaríamos de convidar você para uma entrevista referente à vaga {{jobTitle}}.\n\nPortal de Vagas", active: true },
  { id: 5, code: "INTERVIEW_REMINDER", name: "Lembrete de entrevista", subject: "Sua entrevista é em breve - Portal de Vagas", body: "Olá {{candidateName}},\n\nEste é um lembrete da sua entrevista para a vaga {{jobTitle}}.\n\nPortal de Vagas", active: true },
  { id: 6, code: "OFFER_MESSAGE", name: "Mensagem na proposta", subject: "Nova mensagem sobre a proposta - Portal de Vagas", body: "Olá {{candidateName}},\n\nHá uma nova mensagem sobre sua proposta para {{jobTitle}}.\n\nPortal de Vagas", active: true },
  { id: 7, code: "STAGE_CHANGE", name: "Mudança de etapa", subject: "Atualização do processo seletivo - Portal de Vagas", body: "Olá {{candidateName}},\n\nSua candidatura para {{jobTitle}} avançou para uma nova etapa.\n\nPortal de Vagas", active: true },
  { id: 8, code: "OFFER", name: "Proposta", subject: "Proposta de contratação - Portal de Vagas", body: "Olá {{candidateName}},\n\nTemos uma proposta para você referente à vaga {{jobTitle}}.\n\nPortal de Vagas", active: true },
  { id: 9, code: "PASSWORD_RESET", name: "Redefinição de senha", subject: "Redefinição de senha - Portal de Vagas", body: "Olá {{candidateName}},\n\nUse o link {{passwordResetLink}} para redefinir sua senha.\n\nPortal de Vagas", active: true },
  { id: 10, code: "REJECTION", name: "Reprovação", subject: "Retorno sobre sua candidatura - Portal de Vagas", body: "Olá {{candidateName}},\n\nAgradecemos seu interesse na vaga {{jobTitle}}. Neste momento, seguiremos com outros perfis.\n\nPortal de Vagas", active: true },
  { id: 11, code: "TEST_AVAILABLE", name: "Teste disponível", subject: "Teste disponível - Portal de Vagas", body: "Olá {{candidateName}},\n\nUm teste para a vaga {{jobTitle}} está disponível em {{applicationsLink}}.\n\nPortal de Vagas", active: true },
];
const rejectionReasons = [
  { id: 1, name: "Perfil não aderente aos requisitos da vaga", active: true },
  { id: 2, name: "Experiência insuficiente para a posição", active: true },
  { id: 3, name: "Outra candidatura foi selecionada para a vaga", active: true },
  { id: 4, name: "Oi! Tudo bem?\n\nAgradecemos muito pelo seu interesse em fazer parte da nossa equipe e por ter compartilhado sua trajetória profissional conosco.\n\nNeste momento, seguiremos com outros perfis que estão mais alinhados às necessidades desta oportunidade. Por isso, sua candidatura não avançará para as próximas etapas do processo seletivo.\n\nEsperamos ter a oportunidade de nos encontrarmos novamente em futuros processos e desejamos muito sucesso na sua caminhada profissional.\n\nUm abraço,\nEquipe de Recrutamento e Seleção\nPlayer Contabilidade", active: true },
];
let settingsView = "home";
let screeningTab = "analyses";
let analysisStandalone = false;
let analysisFilter = "all";
let selectedAnalysisId = null;
let editingBenefitId = null;
let editingEmailTemplateId = null;
let editingRejectionId = null;
let editingDepartmentId = null;
let editingSettingsManagerId = null;
let editingSettingsRoleId = null;
let editingCompanyId = null;
let pendingCompanyLogo = "";
let editingJobId = null;
let selectedSkills = [];
let selectedBenefits = [];
const skillOptions = ["Comunicação", "Flutter", "Java", "PostgreSQL", "Trabalho em equipe", "Suporte", "Windows", "Excel", "Contabilidade", "Fiscal", "Departamento Pessoal", "Folha", "eSocial"];
function parseSkillLines(value = "") {
  return String(value)
    .split("\n")
    .map((line) => line.replace(/^[-•]\s*/, "").trim())
    .filter(Boolean);
}

function syncSkillOptionsFromJobs() {
  jobs.forEach((job) => {
    [...(job.skillsRequired || []), ...(job.skillsNice || []), ...(job.skills || [])].forEach((skill) => {
      if (skill && !skillOptions.includes(skill)) skillOptions.push(skill);
    });
  });
}
syncSkillOptionsFromJobs();
const benefitOptions = ["Home office", "Plano de saúde", "Vale refeição", "Vale transporte"];

const jobList = document.querySelector("#jobList");
const resultCount = document.querySelector("#resultCount");
const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");
const emptyState = document.querySelector("#emptyState");
const jobDialog = document.querySelector("#jobDialog");
const jobForm = document.querySelector("#jobForm");
const newJobFullForm = document.querySelector("#newJobFullForm");
const toast = document.querySelector("#toast");
const sidebar = document.querySelector("#sidebar");
const sidebarOverlay = document.querySelector("#sidebarOverlay");
const appShell = document.querySelector(".app-shell");
const menuButton = document.querySelector("#menuButton");
const sidebarToggle = document.querySelector("#sidebarToggle");
const iconSpriteBase = `${window.location.pathname}${window.location.search}`;
document.querySelectorAll("use[href^='#']").forEach((node) => {
  node.setAttribute("href", `${iconSpriteBase}${node.getAttribute("href")}`);
});
document.querySelectorAll(".new-job-back").forEach((button) => {
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("class", "ui-icon");
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML = `<use href="${iconSpriteBase}#i-back" />`;
  button.replaceChildren(icon);
});
const dashboardPage = document.querySelector("#dashboardPage");
const painelPage = document.querySelector("#painelPage");
const relatoriosPage = document.querySelector("#relatoriosPage");
const designSystemPage = document.querySelector("#designSystemPage");
const settingsPage = document.querySelector("#settingsPage");
const pipelinePage = document.querySelector("#pipelinePage");
const jobsPage = document.querySelector("#jobsPage");
const newJobPage = document.querySelector("#newJobPage");
const talentosPage = document.querySelector("#talentosPage");
const resultadosPage = document.querySelector("#resultadosPage");
const entrevistasPage = document.querySelector("#entrevistasPage");
const gestorPage = document.querySelector("#gestorPage");
const tecnicosPage = document.querySelector("#tecnicosPage");
const testsListView = document.querySelector("#testsListView");
const testsEditorView = document.querySelector("#testsEditorView");
const testList = document.querySelector("#testList");
const testEmpty = document.querySelector("#testEmpty");
const testQuestionList = document.querySelector("#testQuestionList");
const testQuestionsEmpty = document.querySelector("#testQuestionsEmpty");
const talentList = document.querySelector("#talentList");
const talentSearch = document.querySelector("#talentSearch");
const talentEmpty = document.querySelector("#talentEmpty");
const resultList = document.querySelector("#resultList");
const resultSearch = document.querySelector("#resultSearch");
const resultEmpty = document.querySelector("#resultEmpty");
const interviewList = document.querySelector("#interviewList");
const interviewEmpty = document.querySelector("#interviewEmpty");
const calendarGrid = document.querySelector("#calendarGrid");
const interviewLayout = document.querySelector(".interview-layout");
const interviewCalendarViewPanel = document.querySelector("#interviewCalendarView");
const fullCalendarGrid = document.querySelector("#fullCalendarGrid");
const kanban = document.querySelector("#kanban");
const jobCandidateList = document.querySelector("#jobCandidateList");
const candidateSearch = document.querySelector("#candidateSearch");
const jobFilter = document.querySelector("#jobFilter");
const candidateDialog = document.querySelector("#candidateDialog");
const entityDialog = document.querySelector("#entityDialog");
const interviewDialog = document.querySelector("#interviewDialog");
const interviewDetailDialog = document.querySelector("#interviewDetailDialog");
const datePickerDialog = document.querySelector("#datePickerDialog");
const timePickerDialog = document.querySelector("#timePickerDialog");
const contactDialog = document.querySelector("#contactDialog");
const offerDialog = document.querySelector("#offerDialog");
const offerFormDialog = document.querySelector("#offerFormDialog");
const dismissDialog = document.querySelector("#dismissDialog");
const lgpdDialog = document.querySelector("#lgpdDialog");
const bookingDialog = document.querySelector("#bookingDialog");
const activityList = document.querySelector("#activityList");
let selectedCandidateId = null;
let selectedCandidateDossierTab = "overview";
let showArchivedCandidateComments = false;
let pendingReplaceDocId = null;
const selectedPipelineCandidateIds = new Set();
let selectedActionCandidate = null;
let interviewDate = "";
let interviewTime = "";
let interviewTimeEnd = "";
let interviewFormMode = "create";
let editingInterviewId = null;
let pendingInterviewForceConflict = false;
let datePickerCursor = new Date(2026, 7, 1);
const TODAY_KEY = "2026-08-27";
let selectedFunnelStage = "Proposta";
let pipelineStageFilter = "all";
let pipelineProfileFilter = "all";
let pipelineSlaFilter = "all";
let pipelineTagFilter = "all";
let pipelineScoreFilter = "all";
let pipelineOwnerFilter = "all";
let pipelineOriginFilter = "all";
let pipelinePeriodFilter = "all";
let pipelineEvaluationFilter = "all";
let pipelinePendingFilter = "all";
let pendingMoveCandidate = null;
let pendingMoveStage = "";
let pendingPipelineAction = null;
let selectedTalentTab = "aprovados";
let selectedTalentId = null;
let selectedResultTab = "contratados";
let selectedResultId = null;
let selectedEntity = null;
let selectedInterviewId = null;
let selectedInterviewDetailId = null;
let selectedInterviewDay = "";
let interviewRangeFilter = "upcoming";
let calendarCursor = new Date(2026, 7, 1);
let interviewCalendarView = "agenda";
let calendarStatusFilter = "all";
let calendarOwnerFilter = "all";
const selectedCalendarFilters = new Set([
  "feriado",
  "facultativo",
  "comemorativa",
  "entrevista",
]);
const hrCalendarEvents = [
  { id: "holiday-08-01", date: "2026-08-01", title: "Dia do Pediatra", category: "feriado" },
  { id: "commemorative-08-05", date: "2026-08-05", title: "Dia do Agricultor", category: "comemorativa" },
  { id: "commemorative-08-08", date: "2026-08-08", title: "Dia Mundial da Amamentação", category: "comemorativa" },
  { id: "holiday-08-09", date: "2026-08-09", title: "Dia dos Pais", category: "feriado" },
  { id: "commemorative-08-11", date: "2026-08-11", title: "Dia do Estudante", category: "comemorativa" },
  { id: "commemorative-08-18", date: "2026-08-18", title: "Dia do Estagiário", category: "comemorativa" },
  { id: "commemorative-08-19", date: "2026-08-19", title: "Dia do Historiador", category: "comemorativa" },
  { id: "commemorative-08-22", date: "2026-08-22", title: "Dia do Folclore", category: "comemorativa" },
  { id: "commemorative-08-27", date: "2026-08-27", title: "Dia do Psicólogo", category: "comemorativa" },
  { id: "commemorative-08-31", date: "2026-08-31", title: "Dia do Nutricionista", category: "comemorativa" },
];
let jobBoardTitle = "";
let jobBoardView = "kanban";
let expandedCardId = null;
let expandedCardPanel = "";

const pageNames = {
  dashboard: "Dashboard",
  painel: "Painel",
  relatorios: "Relatórios",
  pipeline: "Acompanhamento de candidatos",
  jobs: "Vagas",
  newJob: "Nova vaga",
  talentos: "Talentos",
  resultados: "Resultados",
  entrevistas: "Entrevistas",
  tecnicos: "Técnicos",
  designSystem: "Design System",
  analisesGestores: "Análises de gestores",
  gestor: "Portal do gestor",
  settings: "Configurações",
};

const pageByHash = {
  dashboard: "dashboard",
  painel: "painel",
  relatorios: "relatorios",
  pipeline: "pipeline",
  vagas: "jobs",
  talentos: "talentos",
  resultados: "resultados",
  entrevistas: "entrevistas",
  tecnicos: "tecnicos",
  "design-system": "designSystem",
  "analises-gestores": "analisesGestores",
  gestor: "gestor",
  configuracoes: "settings",
};

const hashByPage = {
  dashboard: "dashboard",
  painel: "painel",
  relatorios: "relatorios",
  pipeline: "pipeline",
  jobs: "vagas",
  talentos: "talentos",
  resultados: "resultados",
  entrevistas: "entrevistas",
  tecnicos: "tecnicos",
  designSystem: "design-system",
  analisesGestores: "analises-gestores",
  gestor: "gestor",
  settings: "configuracoes",
};

const funnelStageLinks = {
  Inscrito: { page: "pipeline" },
  Triagem: { page: "pipeline" },
  "Análise técnica": { page: "tecnicos" },
  Entrevista: { page: "entrevistas" },
  "Teste técnico": { page: "tecnicos" },
  Proposta: { page: "pipeline" },
  Contratado: { page: "resultados", resultTab: "contratados" },
  Dispensado: { page: "resultados", resultTab: "dispensados" },
};

const normalize = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function daysInStage(candidate) {
  if (!candidate?.stageEnteredAt) return 0;
  const entered = new Date(candidate.stageEnteredAt);
  const now = new Date(`${TODAY_KEY}T12:00:00`);
  const diff = Math.floor((now - entered) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

function slaStatus(candidate) {
  const limit = slaDaysByStage[candidate.stage] ?? slaDaysByStage.default;
  const days = daysInStage(candidate);
  return { overdue: days > limit, days, limit };
}

function resolveJob(jobOrTitle) {
  if (!jobOrTitle) return null;
  if (typeof jobOrTitle === "object") return jobOrTitle;
  return jobs.find((job) => job.title === jobOrTitle) || { title: jobOrTitle, skillsRequired: [], skillsNice: [], city: "", seniority: "", area: "" };
}

function getCandidateTestScore(candidate) {
  const assigned = candidateTestMap[candidate.id];
  if (!assigned?.length) return null;
  const completed = assigned.filter((entry) => entry.status === "Concluído" && typeof entry.score === "number");
  if (!completed.length) return null;
  return Math.round(completed.reduce((sum, entry) => sum + entry.score, 0) / completed.length);
}

function computeMatch(jobOrTitle, candidate) {
  const job = resolveJob(jobOrTitle);
  const skills = (candidate.skills || []).map((s) => normalize(s));
  const required = job.skillsRequired || [];
  const nice = job.skillsNice || [];
  const requiredHits = required.filter((s) => skills.includes(normalize(s)));
  const niceHits = nice.filter((s) => skills.includes(normalize(s)));
  const missing = required.filter((s) => !skills.includes(normalize(s)));
  const requiredScore = required.length ? (requiredHits.length / required.length) * 100 : 100;
  const niceScore = nice.length ? (niceHits.length / nice.length) * 100 : 0;
  const areaScore = job.area && candidate.area && normalize(job.area) === normalize(candidate.area) ? 100 : 40;
  const locationScore =
    job.city && candidate.city && normalize(job.city) === normalize(candidate.city)
      ? 100
      : job.workModel === "Remoto"
        ? 80
        : 35;
  const seniorityScore =
    job.seniority && candidate.seniority && normalize(job.seniority) === normalize(candidate.seniority)
      ? 100
      : 50;
  const testScore = getCandidateTestScore(candidate);
  const testComponent = testScore !== null ? testScore : 50;
  const total = Math.round(
    Math.min(
      100,
      requiredScore * 0.35 +
        niceScore * 0.12 +
        areaScore * 0.18 +
        locationScore * 0.12 +
        seniorityScore * 0.08 +
        testComponent * 0.15,
    ),
  );
  const testLabel = testScore !== null ? `Teste ${testScore}%` : "Teste pendente";
  const breakdown = `Skills ${requiredHits.length}/${required.length || 0} · Desejáveis ${niceHits.length}/${nice.length || 0} · ${testLabel} · Área ${Math.round(areaScore)} · Local ${Math.round(locationScore)} · Sênior ${Math.round(seniorityScore)}`;
  return { total, breakdown, missing, testScore };
}

function findDuplicates(email) {
  const key = normalize(email || "");
  if (!key) return [];
  const hits = [];
  candidates.forEach((item) => {
    if (normalize(item.email) === key) hits.push({ source: "candidates", id: item.id, name: item.name });
  });
  talents.forEach((item) => {
    if (normalize(item.email) === key) hits.push({ source: "talents", id: item.id, name: item.name });
  });
  results.forEach((item) => {
    if (normalize(item.email) === key) hits.push({ source: "results", id: item.id, name: item.name });
  });
  return hits;
}

function isDuplicateEmail(email) {
  return findDuplicates(email).length > 1;
}

function matchTitleAttr(match) {
  return escapeHtml(`${match.total}% · ${match.breakdown}${match.missing.length ? ` · Falta: ${match.missing.join(", ")}` : ""}`);
}

function offerStatusLabel(status) {
  return ({ enviada: "Enviada", vista: "Vista", aceita: "Aceita", recusada: "Recusada" })[status] || status || "";
}

function retainUntilFromDays(days = lgpdRetentionDays) {
  const date = new Date(`${TODAY_KEY}T12:00:00`);
  date.setDate(date.getDate() + Number(days) || 365);
  return dayKey(date);
}

function anonymizePerson(item) {
  item.name = "Candidato anonimizado";
  item.email = `anonimo_${item.id || Date.now()}@privacidade.local`;
  item.phone = "";
  item.city = "";
  item.anonymized = true;
  item.lgpdConsent = false;
  item.consentAt = null;
  if (item.history) item.history.unshift(["LGPD", "Dados anonimizados · agora"]);
}

const statusClass = {
  Aberta: "status-open",
  Pausada: "status-paused",
  Rascunho: "status-draft",
  "Aguardando aprovação": "status-approval",
  Encerrada: "status-closed",
  Cancelada: "status-canceled",
};

function jobIsVisibleInPortal(job) {
  return Boolean(job) &&
    !job.archived &&
    ["Aberta", "Pausada"].includes(job.status);
}

function jobAcceptsApplications(job) {
  return jobIsVisibleInPortal(job) &&
    job.status === "Aberta" &&
    jobRemainingCount(job) > 0;
}

function jobCanHire(job) {
  return Boolean(job) &&
    !job.archived &&
    ["Aberta", "Pausada"].includes(job.status) &&
    jobRemainingCount(job) > 0;
}

function jobFilledCount(job) {
  return jobHiredCandidates(job).length;
}

function jobRemainingCount(job) {
  return Math.max(0, Number(job.openings || 1) - jobFilledCount(job));
}

function jobPositionsLabel(job) {
  const filled = jobFilledCount(job);
  const total = Number(job.openings || 1);
  return `${filled}/${total}`;
}

function pushJobHistory(job, title, detail) {
  if (!job.history) job.history = [];
  job.history.unshift([title, `${detail} · agora`]);
}

function getFilteredJobs() {
  const query = normalize(searchInput.value.trim());
  const selectedStatus = statusFilter.value;
  const showArchived = Boolean(document.querySelector("#jobShowArchived")?.checked);

  return jobs.filter((job) => {
    if (!showArchived && job.archived) return false;
    const matchesQuery =
      !query ||
      normalize(`${job.title} ${job.area} ${job.details} ${job.manager || ""} ${job.requester || ""}`).includes(query);
    const matchesStatus =
      selectedStatus === "all" || job.status === selectedStatus;
    return matchesQuery && matchesStatus;
  });
}

function candidateAvatars(job) {
  if (job.applicants === 0) {
    return '<span class="cell-label">Nenhum candidato</span>';
  }

  const shown = job.initials.slice(0, job.applicants);
  const avatars = shown
    .map(
      (initials) =>
        `<span class="candidate-avatar" aria-hidden="true">${initials}</span>`,
    )
    .join("");
  const remaining = Math.max(job.applicants - shown.length, 0);

  return `${avatars}${
    remaining
      ? `<span class="candidate-avatar candidate-more" aria-label="Mais ${remaining} candidatos">+${remaining}</span>`
      : ""
  }`;
}

function jobHiredCandidates(job) {
  return results.filter(
    (item) =>
      item.status === "contratados" &&
      (item.jobId === job.id ||
        (item.jobId == null && item.vacancy === job.title)),
  );
}

// Candidatos inscritos são um número de demonstração maior que o pipeline visível,
// então acompanhamos apenas a variação: cada saída do pipeline desconta um inscrito.
function syncJobMetrics(job) {
  if (!job) return;
  const inPipeline = candidates.filter((candidate) => candidate.vacancy === job.title).length;
  if (typeof job.applicantsSeed !== "number") job.applicantsSeed = Number(job.applicants || 0);
  if (typeof job.pipelineSeed !== "number") job.pipelineSeed = inPipeline;
  job.filled = jobHiredCandidates(job).length;
  job.applicants = Math.max(0, job.applicantsSeed - (job.pipelineSeed - inPipeline));
}

function jobPrimaryActions(job) {
  if (job.archived) {
    return [
      { id: "desarquivar", label: "Desarquivar vaga" },
      { id: "historico", label: "Ver histórico" },
    ];
  }
  const actions = [{ id: "candidatos", label: "Candidatos" }];
  if (["Aberta", "Pausada", "Aguardando aprovação", "Rascunho"].includes(job.status)) {
    actions.push({ id: "editar", label: "Editar" });
  }
  if (["Aberta", "Pausada", "Encerrada"].includes(job.status)) {
    actions.push({ id: "compartilhar", label: "Compartilhar" });
  }
  if (job.status === "Encerrada") {
    actions.push({ id: "contratados", label: "Contratados" });
  }
  return actions;
}

function jobMoreActionGroups(job) {
  if (job.archived) return [];
  const groups = [];
  const processo = [];
  const gestao = [];
  const desfecho = [];

  if (job.status === "Rascunho") {
    processo.push(
      { id: "enviar-aprovacao", label: "Enviar para aprovação" },
      { id: "publicar", label: "Publicar/Abrir vaga" },
    );
    gestao.push({ id: "duplicar", label: "Duplicar vaga" });
  } else if (job.status === "Aguardando aprovação") {
    processo.push(
      { id: "aprovar", label: "Aprovar vaga" },
      { id: "reprovar", label: "Reprovar vaga" },
    );
  } else if (job.status === "Aberta") {
    processo.push({ id: "pausar", label: "Pausar vaga" });
    gestao.push(
      { id: "duplicar", label: "Duplicar vaga" },
      { id: "adicionar-candidato", label: "Adicionar candidato" },
      { id: "banco", label: "Banco de Talentos" },
      { id: "contratados", label: "Ver contratados" },
    );
    desfecho.push(
      { id: "encerrar", label: "Encerrar vaga" },
      { id: "cancelar", label: "Cancelar vaga" },
    );
  } else if (job.status === "Pausada") {
    processo.push({ id: "reabrir", label: "Reabrir vaga" });
    gestao.push({ id: "duplicar", label: "Duplicar vaga" });
    desfecho.push(
      { id: "encerrar", label: "Encerrar vaga" },
      { id: "cancelar", label: "Cancelar vaga" },
    );
  } else if (job.status === "Encerrada") {
    processo.push({ id: "reabrir", label: "Reabrir vaga" });
    gestao.push(
      { id: "duplicar", label: "Duplicar vaga" },
      { id: "contratados", label: "Ver contratados" },
    );
    desfecho.push({ id: "arquivar", label: "Arquivar vaga" });
  } else if (job.status === "Cancelada") {
    gestao.push({ id: "duplicar", label: "Duplicar vaga" });
    desfecho.push({ id: "arquivar", label: "Arquivar vaga" });
  }

  if (processo.length) groups.push({ label: "Processo", actions: processo });
  if (gestao.length) groups.push({ label: "Gestão", actions: gestao });
  if (desfecho.length) groups.push({ label: "Desfecho", actions: desfecho });
  return groups;
}

function jobActionsForStatus(job) {
  const primary = jobPrimaryActions(job);
  const more = jobMoreActionGroups(job).flatMap((group) => group.actions);
  const seen = new Set();
  return [...primary, ...more].filter((action) => {
    if (seen.has(action.id)) return false;
    seen.add(action.id);
    return true;
  });
}

function renderJobMoreActionsMenu(job) {
  const menu = document.querySelector("#jobMoreActionsMenu");
  const trigger = document.querySelector("#jobMoreActionsBtn");
  if (!menu || !trigger) return;
  const groups = jobMoreActionGroups(job);
  if (!groups.length) {
    menu.hidden = true;
    trigger.hidden = true;
    trigger.setAttribute("aria-expanded", "false");
    menu.innerHTML = "";
    return;
  }
  trigger.hidden = false;
  menu.innerHTML = groups
    .map(
      (group) => `
        <div class="candidate-more-section">
          <span class="candidate-more-label">${group.label}</span>
          ${group.actions
            .map(
              (action) =>
                `<button type="button" data-job-detail-action="${action.id}" role="menuitem">${action.label}</button>`,
            )
            .join("")}
        </div>
      `,
    )
    .join("");
}

function renderJobDetailActions(job) {
  const primaryHost = document.querySelector("#jobDetailPrimaryActions");
  if (!primaryHost) return;
  primaryHost.innerHTML = jobPrimaryActions(job)
    .map(
      (action) =>
        `<button type="button" class="secondary-button" data-job-detail-action="${action.id}">${action.label}</button>`,
    )
    .join("");
  renderJobMoreActionsMenu(job);
}

function closeJobMoreActions() {
  const menu = document.querySelector("#jobMoreActionsMenu");
  const trigger = document.querySelector("#jobMoreActionsBtn");
  if (!menu || !trigger) return;
  menu.hidden = true;
  trigger.setAttribute("aria-expanded", "false");
}

function toggleJobMoreActions() {
  const menu = document.querySelector("#jobMoreActionsMenu");
  const trigger = document.querySelector("#jobMoreActionsBtn");
  if (!menu || !trigger || trigger.hidden) return;
  const opening = menu.hidden;
  menu.hidden = !opening;
  trigger.setAttribute("aria-expanded", String(opening));
}

function jobTemplate(job) {
  const related = candidates.filter((c) => c.vacancy === job.title);
  const match = related.length
    ? {
        total: Math.round(related.reduce((sum, c) => sum + computeMatch(job, c).total, 0) / related.length),
        breakdown: `Média de ${related.length} candidato(s)`,
        missing: [],
      }
    : computeMatch(job, {
        skills: job.skillsRequired || [],
        city: job.city,
        seniority: job.seniority,
        area: job.area,
      });
  const remaining = jobRemainingCount(job);
  const menu = jobActionsForStatus(job)
    .map((action) => `<button type="button" data-job-action="${action.id}">${action.label}</button>`)
    .join("");
  return `
    <article class="job-card${job.archived ? " is-archived" : ""}" data-job-id="${job.id}" tabindex="0" aria-label="Abrir vaga ${job.title}">
      <div class="job-main">
        <span class="job-symbol" aria-hidden="true">${job.title.charAt(0)}</span>
        <div class="job-title">
          <h3>${job.title}</h3>
          <p>${job.details} · ${job.workModel}</p>
          <p class="job-card-meta-line">Resp.: ${escapeHtml(job.manager || "—")} · Solicitante: ${escapeHtml(job.requester || "—")}</p>
        </div>
      </div>
      <div class="job-cell">
        <span class="cell-label">Candidatos</span>
        <div class="candidate-row">${candidateAvatars(job)}</div>
      </div>
      <div class="job-cell">
        <span class="cell-label">Posições</span>
        <strong>${jobPositionsLabel(job)}</strong>
        <span class="cell-label">${remaining} restante${remaining === 1 ? "" : "s"}</span>
      </div>
      <div class="job-cell">
        <span class="cell-label">Prazo</span>
        <strong>${job.hireBy ? formatBRDate(job.hireBy) : "—"}</strong>
      </div>
      <div class="job-actions">
        <span class="match-score" title="${matchTitleAttr(match)}">${match.total}%</span>
        <span class="status ${statusClass[job.status] || "status-draft"}">${job.status}</span>
        <button class="more-button" type="button" aria-label="Mais ações para ${job.title}">⋮</button>
        <div class="job-menu" hidden>${menu}</div>
      </div>
    </article>
  `;
}

function renderJobs() {
  const filteredJobs = getFilteredJobs();

  jobList.innerHTML = filteredJobs.map(jobTemplate).join("");
  resultCount.textContent = `${filteredJobs.length} ${
    filteredJobs.length === 1
      ? "oportunidade encontrada"
      : "oportunidades encontradas"
  }`;
  emptyState.hidden = filteredJobs.length !== 0;
  jobList.hidden = filteredJobs.length === 0;
}

let selectedJobId = null;
let pendingJobStatusAction = null;

function getSelectedJob() {
  return jobs.find((item) => item.id === selectedJobId) || null;
}

function openJobDetails(job) {
  if (!job) return;
  selectedJobId = job.id;
  syncJobMetrics(job);
  const dialog = document.querySelector("#jobDetailDialog");
  if (!dialog) return;
  const filled = jobFilledCount(job);
  const total = Number(job.openings || 1);
  const remaining = jobRemainingCount(job);
  const progress = total ? Math.min(100, Math.round((filled / total) * 100)) : 0;
  document.querySelector("#jobDetailStatus").textContent = job.archived ? `${job.status} · Arquivada` : job.status;
  document.querySelector("#jobDetailStatus").className = `status ${statusClass[job.status] || "status-draft"}`;
  document.querySelector("#jobDetailTitle").textContent = job.title;
  document.querySelector("#jobDetailSubtitle").textContent = `${job.area || "—"} · ${job.workModel || "—"} · ${job.contract || "CLT"}`;
  document.querySelector("#jobDetailManager").textContent = job.manager || "—";
  document.querySelector("#jobDetailRequester").textContent = job.requester || "—";
  document.querySelector("#jobDetailOpenedAt").textContent = job.openedAt ? formatBRDate(job.openedAt) : "—";
  document.querySelector("#jobDetailHireBy").textContent = job.hireBy ? formatBRDate(job.hireBy) : "—";
  document.querySelector("#jobDetailOpenings").textContent = String(total);
  document.querySelector("#jobDetailFilled").textContent = String(filled);
  document.querySelector("#jobDetailRemaining").textContent = String(remaining);
  const progressBar = document.querySelector("#jobDetailProgressBar");
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
    progressBar.parentElement?.classList.toggle("is-complete", remaining === 0 && total > 0);
  }
  document.querySelector("#jobDetailDescription").textContent =
    job.description || job.details || "Sem descrição cadastrada.";
  document.querySelector("#jobDetailPositionsInput").value = total;
  const hired = jobHiredCandidates(job);
  const hiredSection = document.querySelector("#jobDetailHiredSection");
  const hiredList = document.querySelector("#jobDetailHiredList");
  if (hiredSection && hiredList) {
    hiredSection.hidden = hired.length === 0;
    hiredList.innerHTML = hired
      .map((item) => `<li><strong>${escapeHtml(item.name)}</strong><span>${escapeHtml(item.email)}</span></li>`)
      .join("");
  }
  renderJobDetailActions(job);
  document.querySelector("#jobDetailHistory").innerHTML = (job.history || [])
    .map(
      ([title, detail]) => `
        <div class="history-item">
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(detail)}</span>
        </div>
      `,
    )
    .join("") || `<p class="field-hint">Nenhum histórico registrado.</p>`;
  const suggest = document.querySelector("#jobDetailCloseSuggest");
  if (suggest) {
    suggest.hidden = !(remaining === 0 && job.status === "Aberta");
  }
  const openingsField = document.querySelector(".job-detail-openings-field");
  if (openingsField) {
    openingsField.hidden = ["Encerrada", "Cancelada"].includes(job.status) || job.archived;
  }
  closeJobMoreActions();
  if (!dialog.open) dialog.showModal();
}

function refreshJobViews(job) {
  if (job) syncJobMetrics(job);
  renderJobs();
  renderDashboard();
  renderJobFilter();
  renderResults();
  renderPipeline();
  if (document.querySelector("#jobDetailDialog")?.open && job && selectedJobId === job.id) {
    openJobDetails(job);
  }
}

function openJobStatusDialog(job, action, config) {
  pendingJobStatusAction = { job, action, config };
  document.querySelector("#jobStatusDialogTitle").textContent = config.title;
  document.querySelector("#jobStatusDialogLabel").textContent = config.jobLabel || job.title;
  const hint = document.querySelector("#jobStatusDialogHint");
  const reasonField = document.querySelector("#jobStatusReasonField");
  const reasonInput = document.querySelector("#jobStatusReason");
  if (hint) {
    hint.hidden = !config.hint;
    hint.textContent = config.hint || "";
  }
  document.querySelector("#jobStatusReasonLabel").textContent = config.reasonLabel || "Motivo";
  if (reasonField && reasonInput) {
    reasonField.hidden = config.reasonRequired === false;
    reasonInput.required = config.reasonRequired !== false;
    reasonInput.value = "";
  }
  document.querySelector("#jobStatusNote").value = "";
  const confirmBtn = document.querySelector("#confirmJobStatus");
  confirmBtn.textContent = config.confirmLabel || "Confirmar";
  confirmBtn.classList.toggle("is-danger", Boolean(config.danger));
  document.querySelector("#jobStatusDialog").showModal();
}

function setJobStatus(job, nextStatus, detail) {
  const previous = job.status;
  job.status = nextStatus;
  if (nextStatus === "Aberta" && !job.openedAt) job.openedAt = TODAY_KEY;
  pushJobHistory(job, "Status", detail || `${previous} → ${nextStatus}`);
  refreshJobViews(job);
  showToast("Status da vaga", `${job.title} agora está ${nextStatus.toLowerCase()}.`);
}

function duplicateJob(job) {
  const copy = {
    ...job,
    id: Date.now(),
    title: `${job.title} (cópia)`,
    status: "Rascunho",
    applicants: 0,
    applicantsSeed: 0,
    pipelineSeed: 0,
    initials: [],
    filled: 0,
    archived: false,
    published: "Agora",
    openedAt: TODAY_KEY,
    history: [["Duplicação", `Criada a partir de ${job.title} · agora`]],
  };
  jobs.unshift(copy);
  ensureJobDefaults(copy);
  copy.status = "Rascunho";
  copy.filled = 0;
  copy.archived = false;
  refreshJobViews(copy);
  showToast("Vaga duplicada", `${copy.title} foi criada como rascunho.`);
  openJobDetails(copy);
}

function maybeSuggestJobClose(job) {
  if (!job || job.status !== "Aberta") return;
  if (jobRemainingCount(job) > 0) return;
  showToast(
    "Posições preenchidas",
    `${job.title}: ${jobPositionsLabel(job)}. Encerre a vaga para finalizar o processo.`,
  );
  if (document.querySelector("#jobDetailDialog")?.open && selectedJobId === job.id) {
    openJobDetails(job);
  }
}

function runJobAction(job, action) {
  if (!job || !action) return;
  selectedJobId = job.id;
  closeJobMoreActions();

  if (action === "detalhes") {
    openJobDetails(job);
    return;
  }
  if (action === "candidatos") {
    document.querySelector("#jobDetailDialog")?.close();
    goToPage("jobs", { jobTitle: job.title, jobBoard: true });
    return;
  }
  if (action === "editar") {
    document.querySelector("#jobDetailDialog")?.close();
    openJobForm(job);
    return;
  }
  if (action === "duplicar") {
    duplicateJob(job);
    return;
  }
  if (action === "enviar-aprovacao") {
    setJobStatus(job, "Aguardando aprovação", "Enviada para aprovação");
    return;
  }
  if (action === "aprovar") {
    setJobStatus(job, "Aberta", "Aprovada e liberada para publicação");
    return;
  }
  if (action === "reprovar") {
    openJobStatusDialog(job, "reprovar", {
      title: "Reprovar vaga",
      hint: "A vaga voltará para rascunho e precisará de nova aprovação.",
      reasonLabel: "Motivo da reprovação",
      confirmLabel: "Reprovar vaga",
      danger: true,
    });
    return;
  }
  if (action === "publicar") {
    setJobStatus(job, "Aberta", "Vaga publicada/aberta");
    return;
  }
  if (action === "pausar") {
    openJobStatusDialog(job, "pausar", {
      title: "Pausar vaga",
      hint: "Novas candidaturas ficam suspensas até a reabertura.",
      reasonRequired: false,
      confirmLabel: "Pausar vaga",
    });
    return;
  }
  if (action === "reabrir") {
    openJobStatusDialog(job, "reabrir", {
      title: "Reabrir vaga",
      hint:
        job.status === "Encerrada"
          ? "A vaga voltará a ficar aberta para receber candidaturas."
          : "A vaga voltará a receber candidaturas normalmente.",
      reasonRequired: false,
      confirmLabel: "Reabrir vaga",
    });
    return;
  }
  if (action === "encerrar") {
    openJobStatusDialog(job, "encerrar", {
      title: "Encerrar vaga",
      hint: "O processo seletivo será finalizado. Candidatos em andamento permanecem no histórico.",
      reasonRequired: false,
      confirmLabel: "Encerrar vaga",
    });
    return;
  }
  if (action === "cancelar") {
    openJobStatusDialog(job, "cancelar", {
      title: "Cancelar vaga",
      hint: "Esta ação interrompe o processo. Informe o motivo do cancelamento.",
      reasonLabel: "Motivo do cancelamento",
      confirmLabel: "Cancelar vaga",
      danger: true,
    });
    return;
  }
  if (action === "arquivar") {
    openJobStatusDialog(job, "arquivar", {
      title: "Arquivar vaga",
      hint: "A vaga sairá da listagem principal, mas o histórico será preservado.",
      reasonRequired: false,
      confirmLabel: "Arquivar vaga",
    });
    return;
  }
  if (action === "desarquivar") {
    job.archived = false;
    pushJobHistory(job, "Arquivo", "Vaga desarquivada");
    refreshJobViews(job);
    showToast("Vaga desarquivada", `${job.title} voltou para a listagem.`);
    return;
  }
  if (action === "compartilhar") {
    const link = `${location.origin}${location.pathname}#vaga-${job.id}`;
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(link).catch(() => {});
    pushJobHistory(job, "Compartilhamento", "Link público copiado");
    refreshJobViews(job);
    showToast("Compartilhar vaga", "Link demonstrativo copiado.");
    return;
  }
  if (action === "banco") {
    document.querySelector("#jobDetailDialog")?.close();
    goToPage("talentos");
    showToast("Banco de Talentos", `Busque perfis compatíveis com ${job.title}.`);
    return;
  }
  if (action === "adicionar-candidato") {
    document.querySelector("#jobDetailDialog")?.close();
    goToPage("jobs", { jobTitle: job.title, jobBoard: true });
    showToast("Adicionar candidato", "Use as sugestões do banco ou cadastre pelo pipeline da vaga.");
    return;
  }
  if (action === "contratados") {
    document.querySelector("#jobDetailDialog")?.close();
    goToPage("resultados", { resultTab: "contratados" });
    return;
  }
  if (action === "historico") {
    openJobDetails(job);
    document.querySelector("#jobDetailHistory")?.scrollIntoView({ block: "nearest" });
    return;
  }
  showToast(action, `${action} em ${job.title}.`);
}

function padCount(value) {
  return String(value).padStart(2, "0");
}

function talentCounts() {
  return {
    aprovados: talents.filter((item) => item.status === "aprovados").length,
    bloqueados: talents.filter((item) => item.status === "bloqueados").length,
  };
}

function getFilteredTalents() {
  const query = normalize(talentSearch.value.trim());
  return talents.filter((talent) => {
    const matchesTab = talent.status === selectedTalentTab;
    const matchesQuery =
      !query ||
      normalize(
        `${talent.name} ${talent.email} ${talent.city || ""} ${talent.motivo || ""}`,
      ).includes(query);
    return matchesTab && matchesQuery;
  });
}

function closeTalentMenus() {
  talentList
    .querySelectorAll(".talent-menu")
    .forEach((menu) => menu.setAttribute("hidden", ""));
}

function talentTemplate(talent) {
  const selected = talent.id === selectedTalentId ? " selected" : "";
  const toggleLabel = talent.status === "aprovados" ? "Bloquear" : "Aprovar";
  return `
    <article class="talent-card${selected}" data-talent-id="${talent.id}" tabindex="0">
      <span class="talent-avatar" aria-hidden="true">${initials(talent.name)}</span>
      <div class="talent-copy">
        <h3>${talent.name}</h3>
        <p>${talent.email}</p>
        ${talent.city ? `<span class="talent-meta">${talent.city}</span>` : ""}
        ${
          talent.motivo
            ? `<p class="talent-reason"><strong>Motivo:</strong> ${talent.motivo}</p>`
            : ""
        }
      </div>
      <button class="more-button" type="button" aria-label="Mais ações para ${talent.name}" aria-haspopup="menu">⋮</button>
      <div class="talent-menu" hidden role="menu">
        <button type="button" data-talent-action="perfil">Ver perfil</button>
        <button type="button" data-talent-action="toggle">${toggleLabel}</button>
        <button type="button" class="is-danger" data-talent-action="remover">Remover</button>
      </div>
    </article>
  `;
}

function renderTalents() {
  const counts = talentCounts();
  const filtered = getFilteredTalents();
  const tabLabel = selectedTalentTab === "aprovados" ? "aprovados" : "bloqueados";

  document.querySelector("#aprovadosCount").textContent = counts.aprovados;
  document.querySelector("#bloqueadosCount").textContent = counts.bloqueados;
  document.querySelector("#talentsNavCount").textContent = talents.length;
  talentSearch.placeholder = `Buscar ${tabLabel}...`;

  talentList.innerHTML = filtered.map(talentTemplate).join("");
  talentEmpty.hidden = filtered.length !== 0;
  talentList.hidden = filtered.length === 0;
}

function resultCounts() {
  return {
    contratados: results.filter((item) => item.status === "contratados").length,
    dispensados: results.filter((item) => item.status === "dispensados").length,
    ocultados: results.filter((item) => item.status === "ocultados").length,
  };
}

function getFilteredResults() {
  const query = normalize(resultSearch.value.trim());
  return results.filter((item) => {
    const matchesTab = item.status === selectedResultTab;
    const matchesQuery =
      !query ||
      normalize(
        `${item.name} ${item.email || ""} ${item.vacancy} ${item.workModel || ""} ${item.contract || ""} ${item.stage || ""}`,
      ).includes(query);
    return matchesTab && matchesQuery;
  });
}

function formatMoney(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

function resultTemplate(item) {
  const selected = item.id === selectedResultId ? " selected" : "";
  const facts =
    item.status === "contratados"
      ? `<div class="result-facts">
           <span>${formatMoney(item.proposal)}</span>
           <span>${item.workModel}</span>
           <span>${item.contract}</span>
         </div>`
      : "";
  let side = `<span class="result-badge is-exit">Dispensado</span>`;
  if (item.status === "contratados") {
    side = `<span class="result-badge is-hired">Contratado</span>`;
  } else if (item.status === "ocultados") {
    side = `
      <span class="result-badge is-stage">${item.stage || "Triagem"}</span>
      <button class="result-unhide" type="button" data-result-action="unhide">
        Desocultar
      </button>
    `;
  }
  return `
    <article class="talent-card result-card${selected}" data-result-id="${item.id}" tabindex="0">
      <span class="talent-avatar" aria-hidden="true">${initials(item.name)}</span>
      <div class="talent-copy">
        <h3>${item.name}</h3>
        <p>${item.vacancy}</p>
        ${facts}
      </div>
      <div class="result-side">${side}</div>
    </article>
  `;
}

function renderResults() {
  const counts = resultCounts();
  const filtered = getFilteredResults();
  const labels = {
    contratados: "contratados",
    dispensados: "dispensados",
    ocultados: "ocultados",
  };

  document.querySelector("#contratadosCount").textContent = counts.contratados;
  document.querySelector("#dispensadosCount").textContent = counts.dispensados;
  document.querySelector("#ocultadosCount").textContent = counts.ocultados;
  document.querySelector("#resultsNavCount").textContent = results.length;
  resultSearch.placeholder = `Buscar ${labels[selectedResultTab]}...`;

  resultList.innerHTML = filtered.map(resultTemplate).join("");
  resultEmpty.hidden = filtered.length !== 0;
  resultList.hidden = filtered.length === 0;
}

function entityStatusMeta(item, source) {
  if (source === "talent") {
    return item.status === "aprovados"
      ? { label: "Aprovado", className: "is-approved" }
      : { label: "Bloqueado", className: "is-dismissed" };
  }
  if (item.status === "contratados") return { label: "Contratado", className: "is-hired" };
  if (item.status === "dispensados") return { label: "Dispensado", className: "is-dismissed" };
  return { label: item.stage || "Triagem", className: "is-hidden" };
}

function entityButton(action, label, icon) {
  return `<button type="button" data-entity-action="${action}"><svg class="ui-icon" aria-hidden="true"><use href="${iconSpriteBase}#${icon}" /></svg>${label}</button>`;
}

function renderEntityDialog() {
  if (!selectedEntity) return;
  const { item, source } = selectedEntity;
  const meta = entityStatusMeta(item, source);
  const status = document.querySelector("#entityStatus");
  status.textContent = meta.label;
  status.className = `entity-status ${meta.className}`;
  document.querySelector("#entityName").textContent = item.name;
  document.querySelector("#entitySubtitle").textContent = source === "talent" ? item.email : item.vacancy;
  document.querySelector("#entityEmail").textContent = item.email;
  document.querySelector("#entityPhone").textContent = item.phone || "Telefone não informado";
  document.querySelector("#entityProfileName").textContent = item.name;
  document.querySelector("#entityProfileContact").textContent = `${item.email}${item.phone ? ` · ${item.phone}` : ""}`;
  const inBank = source === "talent" || talents.some((talent) => normalize(talent.email) === normalize(item.email));
  document.querySelector("#entityBankStatus").textContent = inBank ? "No banco de talentos" : "Fora do banco";
  document.querySelector("#entityTags").innerHTML = `<span class="entity-status ${meta.className}">${meta.label}</span>${item.vacancy ? `<span class="role-tag">${item.vacancy}</span>` : ""}`;

  const feedbackSection = document.querySelector("#entityFeedbackSection");
  feedbackSection.hidden = !item.feedback;
  document.querySelector("#entityFeedback").textContent = item.feedback || "";
  document.querySelector("#entityHistoryTitle").textContent = source === "talent" ? "Histórico do candidato" : "Histórico desta vaga";
  const history = item.history || (source === "talent"
    ? [["Etapa: Reprovado", "Assistente / Analista Contábil · De Triagem · RH Portal"], ["Etapa: Triagem", "Assistente / Analista Contábil · Equipe RH"], ["Candidatura enviada", `${item.name} · 14/07 às 22:24`]]
    : [[`Etapa: ${meta.label}`, `Equipe RH · 25/08/2026`], ["Candidatura enviada", `${item.name} · processo seletivo`]]);
  document.querySelector("#entityHistory").innerHTML = history.map(([title, detail]) => `<div class="history-item"><strong>${title}</strong><span>${detail}</span></div>`).join("");

  const baseActions = entityButton("interview", "Entrevista", "i-calendar") + entityButton("manager", "Gestor", "i-users") + entityButton("resume", "Currículo", "i-file") + entityButton("contact", "Contactar", "i-mail") + entityButton("anonymize", "Anonimizar", "i-eye-off");
  document.querySelector("#entityActions").innerHTML = source === "talent"
    ? entityButton("toggle-talent", item.status === "aprovados" ? "Bloquear" : "Aprovar", item.status === "aprovados" ? "i-ban" : "i-check-circle") + entityButton("anonymize", "Anonimizar", "i-eye-off") + entityButton("remove-talent", "Remover da lista", "i-x-circle")
    : baseActions + (item.status === "ocultados" ? entityButton("unhide", "Desocultar", "i-eye-off") : entityButton("approve-bank", "Aprovar no banco", "i-check-circle")) + entityButton("block", "Bloquear", "i-ban");

  const activities = item.activities || history.slice(0, 5).map(([title, detail], index) => [index ? "ER" : "RH", index ? "Equipe RH" : "RH Portal", title, detail]);
  document.querySelector("#entityActivityList").innerHTML = activities.map(([avatar, author, message, time]) => `<article class="activity-item"><span class="activity-avatar">${avatar}</span><div class="activity-copy"><strong>${author}</strong><p>${message}</p><time>${time}</time></div></article>`).join("");
}

function openEntityDialog(item, source) {
  selectedEntity = { item, source };
  renderEntityDialog();
  document.querySelector("#entityActivityList").hidden = false;
  document.querySelector("#toggleEntityActivities").textContent = "Ocultar";
  entityDialog.showModal();
}

function dayKey(value) {
  const date = value instanceof Date ? value : new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatInterviewWhen(iso) {
  const date = new Date(iso);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${date.getFullYear()} às ${hours}:${minutes}`;
}

const INTERVIEW_ACTIVE_STATUSES = [
  "Agendada",
  "Aguardando confirmação",
  "Confirmada",
  "Reagendamento solicitado",
];
const INTERVIEW_TERMINAL_STATUSES = ["Cancelada", "Não compareceu", "Realizada"];
const interviewSheets = ["Ficha RH padrão", "Ficha técnica", "Ficha gestores"];

function toLocalDateTimeIso(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function interviewIsActive(item) {
  return Boolean(item) && !INTERVIEW_TERMINAL_STATUSES.includes(item.status);
}

function interviewInterval(item) {
  const start = new Date(item.at);
  const end = item.endAt
    ? new Date(item.endAt)
    : new Date(start.getTime() + (Number(item.duration) || 60) * 60000);
  return { start, end };
}

function interviewsOverlap(a, b) {
  const left = interviewInterval(a);
  const right = interviewInterval(b);
  return left.start < right.end && right.start < left.end;
}

function interviewIsOverdue(item, nowIso = `${TODAY_KEY}T18:00:00`) {
  if (!interviewIsActive(item)) return false;
  return interviewInterval(item).end < new Date(nowIso);
}

function findInterviewConflicts(draft, { ignoreId } = {}) {
  return interviews.filter((item) => {
    if (!interviewIsActive(item)) return false;
    if (ignoreId != null && item.id === ignoreId) return false;
    if (!interviewsOverlap(draft, item)) return false;
    const sameCandidate =
      draft.candidateId != null && item.candidateId === draft.candidateId;
    const draftInterviewers = draft.interviewers || [];
    const itemInterviewers = item.interviewers || [];
    const sameInterviewer = draftInterviewers.some((name) =>
      itemInterviewers.includes(name),
    );
    return sameCandidate || sameInterviewer;
  });
}

function normalizeInterviewRecord(item) {
  if (!item) return item;
  if (item.status === "Concluída") item.status = "Realizada";
  if (item.waiting && item.status === "Agendada") {
    item.status = "Aguardando confirmação";
  }
  if (!item.modality) {
    item.modality = item.meet || item.link ? "Videochamada" : "Presencial";
  }
  if (!item.endAt) {
    const start = new Date(item.at);
    item.endAt = toLocalDateTimeIso(
      new Date(start.getTime() + (Number(item.duration) || 60) * 60000),
    );
  }
  if (!Array.isArray(item.interviewers)) {
    item.interviewers = item.owner ? [item.owner] : ["Larissa Dias"];
  }
  if (!item.stage) item.stage = item.type || "Entrevista RH";
  if (item.inviteSent == null) item.inviteSent = Boolean(item.waiting);
  if (item.reminderSent == null) item.reminderSent = false;
  if (!item.sheet) item.sheet = interviewSheets[0];
  if (item.notes == null) item.notes = "";
  if (item.candidateInstructions == null) item.candidateInstructions = "";
  if (item.rescheduleRequest === undefined) item.rescheduleRequest = null;
  if (item.cancelReason == null) item.cancelReason = "";
  if (item.startedAt == null) item.startedAt = "";
  if (item.link == null) item.link = "";
  if (item.location == null) item.location = "";
  if (!item.duration) {
    const { start, end } = interviewInterval(item);
    item.duration = Math.max(15, Math.round((end - start) / 60000));
  }
  return item;
}

interviews.forEach(normalizeInterviewRecord);

function interviewRangeStart(range) {
  const today = new Date("2026-08-25T00:00:00");
  if (range === "today") return new Date(today);
  if (range === "7d") return new Date(today);
  if (range === "30d") return new Date(today);
  if (range === "over30d") return new Date(today.getTime() + 31 * 24 * 60 * 60 * 1000);
  return null;
}

function interviewRangeEnd(range) {
  const today = new Date("2026-08-25T23:59:59");
  if (range === "today") return new Date(today);
  if (range === "7d") return new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  if (range === "30d") return new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  if (range === "over30d") return null;
  return null;
}

function getFilteredInterviews() {
  const today = new Date("2026-08-25T00:00:00");
  return interviews
    .filter((item) => {
      if (selectedInterviewDay && dayKey(item.at) !== selectedInterviewDay) return false;
      const date = new Date(item.at);
      if (interviewRangeFilter === "upcoming" && !selectedInterviewDay) {
        return date >= today && item.status !== "Cancelada";
      }
      if (interviewRangeFilter === "today") {
        return dayKey(item.at) === "2026-08-25";
      }
      const start = interviewRangeStart(interviewRangeFilter);
      const end = interviewRangeEnd(interviewRangeFilter);
      if (start && date < start) return false;
      if (end && date > end) return false;
      return true;
    })
    .sort((a, b) => new Date(a.at) - new Date(b.at));
}

function groupInterviewsByDay(items) {
  const groups = new Map();
  items.forEach((item) => {
    const key = dayKey(item.at);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  return groups;
}

function formatInterviewGroupLabel(key) {
  const [year, month, day] = key.split("-");
  const date = new Date(`${year}-${month}-${day}T12:00:00`);
  const weekday = date.toLocaleDateString("pt-BR", { weekday: "long" });
  return `${weekday.charAt(0).toUpperCase()}${weekday.slice(1)}, ${day}/${month}/${year}`;
}

function interviewTemplate(item) {
  const selected = item.id === selectedInterviewId ? " selected" : "";
  const meetLabel = item.meet === "Teams" ? "Entrar no Teams" : item.meet === "Meet" ? "Entrar no Meet" : "";
  return `
    <article class="interview-card${selected}" data-interview-id="${item.id}" tabindex="0">
      <span class="interview-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M3 11h18" />
        </svg>
      </span>
      <div class="interview-copy">
        <h3>${item.name}</h3>
        <p>${item.vacancy}</p>
        <p class="interview-when">${formatInterviewWhen(item.at)} · ${item.type}</p>
        ${item.waiting && item.status === "Agendada" ? `<p class="interview-wait">Aguardando atualização</p>` : ""}
      </div>
      <div class="interview-side">
        <span class="interview-badge is-${normalize(item.status).replace(/\s+/g, "-")}">${item.status}</span>
        ${
          meetLabel
            ? `<button class="interview-join" type="button" data-interview-action="join">${meetLabel}</button>`
            : ""
        }
      </div>
    </article>
  `;
}

function renderCalendar() {
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const first = new Date(year, month, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const todayKey = "2026-08-25";
  const eventDays = new Set(interviews.map((item) => dayKey(item.at)));
  const cells = [];

  for (let i = 0; i < 42; i += 1) {
    const date = new Date(year, month, i - startPad + 1);
    const key = dayKey(date);
    const inMonth = date.getMonth() === month;
    const classes = ["calendar-day"];
    if (!inMonth) classes.push("is-muted");
    if (key === todayKey) classes.push("is-today");
    if (selectedInterviewDay === key) classes.push("is-selected");
    if (eventDays.has(key)) classes.push("has-event");
    cells.push(
      `<button type="button" class="${classes.join(" ")}" data-calendar-day="${key}" aria-label="${date.toLocaleDateString("pt-BR")}">${date.getDate()}</button>`,
    );
  }

  document.querySelector("#calendarMonth").textContent = `${monthNames[month]} ${year}`;
  calendarGrid.innerHTML = cells.join("");
}

function calendarEventsForMonth() {
  const interviewEvents = interviews.map((item) => ({
    id: `interview-${item.id}`,
    date: dayKey(item.at),
    title: item.name,
    detail: item.type,
    category: "entrevista",
    interviewId: item.id,
    status: item.status,
    owner: item.owner || "Larissa Dias",
  }));
  return [
    ...hrCalendarEvents.filter((event) => selectedCalendarFilters.has(event.category)),
    ...interviewEvents.filter(
      (event) =>
        selectedCalendarFilters.has("entrevista") &&
        (calendarStatusFilter === "all" || event.status === calendarStatusFilter) &&
        (calendarOwnerFilter === "all" || event.owner === calendarOwnerFilter),
    ),
  ];
}

function fullCalendarEventClass(category) {
  return {
    feriado: "is-blue",
    facultativo: "is-lilac",
    comemorativa: "is-green",
    entrevista: "is-navy",
  }[category] || "is-green";
}

function renderFullCalendar() {
  if (!fullCalendarGrid) return;
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const first = new Date(year, month, 1);
  const mondayOffset = (first.getDay() + 6) % 7;
  const todayKey = "2026-08-25";
  const events = calendarEventsForMonth();
  const cells = [];

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(year, month, index - mondayOffset + 1);
    const key = dayKey(date);
    const inMonth = date.getMonth() === month;
    const dayEvents = events.filter((event) => event.date === key);
    const classes = ["full-calendar-day"];
    if (!inMonth) classes.push("is-muted");
    if (key === todayKey) classes.push("is-today");
    if (selectedInterviewDay === key) classes.push("is-selected");

    const eventMarkup = dayEvents
      .slice(0, 4)
      .map(
        (event) => `
          <button
            type="button"
            class="full-calendar-event ${fullCalendarEventClass(event.category)}"
            ${event.interviewId ? `data-full-calendar-interview="${event.interviewId}"` : ""}
            title="${escapeHtml(event.title)}"
          >
            <span>${escapeHtml(event.title)}</span>
            ${event.detail ? `<small>${escapeHtml(event.detail)}</small>` : ""}
          </button>
        `,
      )
      .join("");
    const moreMarkup =
      dayEvents.length > 4
        ? `<span class="full-calendar-more">+${dayEvents.length - 4} eventos</span>`
        : "";

    cells.push(`
      <article class="${classes.join(" ")}" data-full-calendar-day="${key}">
        <button type="button" class="full-calendar-day-number" data-full-calendar-day-select="${key}" aria-label="${date.toLocaleDateString("pt-BR")}">${date.getDate()}</button>
        <div class="full-calendar-events">${eventMarkup}${moreMarkup}</div>
      </article>
    `);
  }

  document.querySelector("#fullCalendarMonth").textContent = `${monthNames[month]} ${year}`;
  fullCalendarGrid.innerHTML = cells.join("");
}

function syncInterviewCalendarView() {
  const fullCalendarMode = interviewCalendarView === "calendar";
  if (interviewLayout) interviewLayout.hidden = fullCalendarMode;
  if (interviewCalendarViewPanel) interviewCalendarViewPanel.hidden = !fullCalendarMode;
  document.querySelectorAll("[data-interview-view]").forEach((button) => {
    const active = button.dataset.interviewView === interviewCalendarView;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function renderAgenda() {
  const filtered = getFilteredInterviews();
  document.querySelector("#interviewsNavCount").textContent = interviews.length;
  const summary = document.querySelector("#interviewSummary");
  if (summary) {
    const scheduled = filtered.filter((item) => item.status === "Agendada").length;
    const cancelled = filtered.filter((item) => item.status === "Cancelada").length;
    summary.innerHTML = `
      <span><strong>${padCount(filtered.length)}</strong> no período</span>
      <span><strong>${padCount(scheduled)}</strong> agendadas</span>
      ${cancelled ? `<span><strong>${padCount(cancelled)}</strong> canceladas</span>` : ""}
    `;
  }
  if (selectedInterviewDay) {
    const [year, month, day] = selectedInterviewDay.split("-");
    document.querySelector("#interviewListTitle").textContent = `${day}/${month}`;
    document.querySelector("#interviewListNote").textContent =
      filtered.length === 1
        ? "1 entrevista neste dia."
        : `${filtered.length} entrevistas neste dia.`;
  } else {
    const rangeLabels = {
      upcoming: "Próximas",
      today: "Hoje",
      "7d": "Próximos 7 dias",
      "30d": "Próximos 30 dias",
      over30d: "Após 30 dias",
    };
    document.querySelector("#interviewListTitle").textContent = rangeLabels[interviewRangeFilter] || "Próximas";
    document.querySelector("#interviewListNote").textContent =
      "Entrevistas confirmadas no calendário, agrupadas por data.";
  }
  document.querySelectorAll("[data-interview-range]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.interviewRange === interviewRangeFilter);
  });
  const groups = groupInterviewsByDay(filtered);
  const html = [...groups.entries()]
    .map(
      ([key, items]) => `
        <section class="interview-day-group">
          <h3 class="interview-day-label">${formatInterviewGroupLabel(key)}</h3>
          <div class="interview-day-items">${items.map(interviewTemplate).join("")}</div>
        </section>
      `,
    )
    .join("");
  interviewList.innerHTML = html;
  interviewEmpty.hidden = filtered.length !== 0;
  interviewList.hidden = filtered.length === 0;
  renderCalendar();
  renderFullCalendar();
  syncInterviewCalendarView();
}

function renderInterviewDetail() {
  const item = interviews.find((entry) => entry.id === selectedInterviewDetailId);
  if (!item) return;
  document.querySelector("#detailInterviewName").textContent = item.name;
  document.querySelector("#detailInterviewVacancy").textContent = item.vacancy;
  document.querySelector("#detailInterviewType").textContent = item.type;
  document.querySelector("#detailInterviewWhen").textContent = formatInterviewWhen(item.at);
  document.querySelector("#detailInterviewLocation").textContent = item.location || (item.meet ? `${item.meet} · entrevista on-line` : "Player Contabilidade");
  const status = document.querySelector("#detailInterviewStatus");
  status.textContent = item.status;
  status.className = `interview-detail-status is-${normalize(item.status).replace(/\s+/g, "-")}`;
  const linkBox = document.querySelector("#interviewTestLink");
  linkBox.hidden = !item.testLink;
  document.querySelector("#interviewTestUrl").textContent = item.testLink || "";
  const reminder = document.querySelector('[data-interview-detail-action="reminder"]');
  reminder.querySelector("span").textContent = item.reminderSent ? "Lembrete enviado" : "Enviar lembrete por e-mail";
  reminder.disabled = item.status === "Cancelada";
  document.querySelector('[data-interview-detail-action="invite"]').disabled = item.status === "Cancelada";
  document.querySelector('[data-interview-detail-action="test"]').disabled = item.status === "Cancelada";
  const complete = document.querySelector('[data-interview-detail-action="complete"]');
  complete.disabled = item.status === "Concluída" || item.status === "Cancelada";
  complete.querySelector("span").textContent = item.status === "Concluída" ? "Entrevista concluída" : "Marcar como concluída";
  const cancel = document.querySelector('[data-interview-detail-action="cancel"]');
  cancel.disabled = item.status !== "Agendada";
  cancel.textContent = item.status === "Cancelada" ? "Entrevista cancelada" : "Cancelar entrevista";
}

function openInterviewDetail(item) {
  selectedInterviewDetailId = item.id;
  selectedInterviewId = item.id;
  renderAgenda();
  renderInterviewDetail();
  interviewDetailDialog.showModal();
}

function interviewActivity(item, message) {
  const candidate = candidates.find((entry) => entry.id === item.candidateId);
  if (!candidate) return;
  candidate.activities.unshift(["LD", "Larissa Dias", message, "Agora"]);
  candidate.history.unshift([message, `${item.type} · agora`]);
}

function questionLabel(count) {
  return count === 1 ? "1 questão" : `${count} questões`;
}

function showTestList() {
  editingTestId = null;
  testsListView.hidden = false;
  testsEditorView.hidden = true;
  renderTests();
}

function questionTypeLabel(type) {
  return (
    {
      text: "Resposta aberta",
      single: "Múltipla escolha",
      multiple: "Mais de uma resposta",
    }[type] || "Resposta aberta"
  );
}

function renderTestQuestions() {
  const test = tests.find((item) => item.id === editingTestId);
  if (!test) return;

  const count = test.questions.length;
  document.querySelector("#testQuestionsNote").textContent =
    count === 0 ? "Nenhuma questão ainda." : questionLabel(count);
  testQuestionsEmpty.hidden = count !== 0;
  testQuestionList.hidden = count === 0;
  testQuestionList.innerHTML = test.questions
    .map((question, index) => {
      const options =
        question.type === "text"
          ? ""
          : `
            <div class="test-question-options" data-question-options>
              ${(question.options || [])
                .map(
                  (option, optionIndex) => `
                    <label class="test-option-row">
                      <input type="${question.type === "multiple" ? "checkbox" : "radio"}" name="correct-${question.id}" data-option-correct value="${optionIndex}" ${(question.correct || []).includes(optionIndex) ? "checked" : ""} />
                      <input type="text" data-option-text value="${escapeHtml(option)}" placeholder="Opção ${optionIndex + 1}" />
                      <button type="button" class="test-option-remove" data-remove-option aria-label="Remover opção">×</button>
                    </label>
                  `,
                )
                .join("")}
              <button type="button" class="test-option-add" data-add-option>+ Adicionar opção</button>
            </div>
          `;
      return `
        <article class="test-question" data-question-id="${question.id}">
          <header>
            <strong>Questão ${index + 1}</strong>
            <button class="test-question-remove" type="button" data-remove-question>Remover</button>
          </header>
          <label class="form-field">
            <span>Tipo de questão</span>
            <select data-question-type>
              <option value="text" ${question.type === "text" ? "selected" : ""}>Resposta aberta</option>
              <option value="single" ${question.type === "single" ? "selected" : ""}>Múltipla escolha (uma resposta)</option>
              <option value="multiple" ${question.type === "multiple" ? "selected" : ""}>Mais de uma resposta</option>
            </select>
          </label>
          <label>
            <span class="sr-only">Enunciado da questão ${index + 1}</span>
            <textarea data-question-prompt placeholder="Escreva o enunciado da questão">${escapeHtml(question.prompt || "")}</textarea>
          </label>
          ${options}
        </article>
      `;
    })
    .join("");
}

function openTestEditor(id, isNew = false) {
  const test = tests.find((item) => item.id === id);
  if (!test) return;

  editingTestId = id;
  testsListView.hidden = true;
  testsEditorView.hidden = false;
  document.querySelector("#testEditorTitle").textContent = isNew
    ? "Novo teste técnico"
    : "Editar teste técnico";
  document.querySelector("#testTitleInput").value = test.title;
  document.querySelector("#testDescriptionInput").value = test.description;
  document.querySelector("#testMinScore").value = test.minScore;
  document.querySelector("#testMinScoreLabel").textContent = `${test.minScore}%`;
  document.querySelector("#testActive").checked = test.active;
  renderTestQuestions();
}

function createTest() {
  const test = {
    id: nextTestId,
    title: "Novo teste técnico",
    description: "",
    questions: [],
    minScore: 70,
    active: true,
  };
  nextTestId += 1;
  tests.unshift(test);
  openTestEditor(test.id, true);
}

function getTestGabaritoStats(test) {
  const objective = test.questions.filter((question) => question.type === "single" || question.type === "multiple");
  const configured = objective.filter((question) => (question.correct || []).length > 0).length;
  const total = objective.length;
  const pct = total ? Math.round((configured / total) * 100) : 0;
  return { objective, configured, total, pct };
}

function renderTestPreviewOptions(question) {
  if (question.type === "text") {
    return `<p class="test-preview-open">Resposta aberta do candidato. <span class="test-answer-tag is-manual">Correção manual</span></p>`;
  }
  const correctSet = new Set(question.correct || []);
  if (!question.options?.length) {
    return `<p class="panel-note">Sem alternativas cadastradas.</p>`;
  }
  return `<ul class="test-preview-options">${question.options
    .map((option, index) => {
      const isCorrect = correctSet.has(index);
      return `<li class="${isCorrect ? "is-correct" : "is-incorrect"}">${isCorrect ? '<span class="test-answer-mark" aria-hidden="true">✓</span>' : '<span class="test-answer-mark is-wrong" aria-hidden="true">✕</span>'}${escapeHtml(option)}${isCorrect ? '<span class="test-answer-tag">Resposta correta</span>' : ""}</li>`;
    })
    .join("")}</ul>`;
}

function openTestPreview(id) {
  const test = tests.find((item) => item.id === id);
  if (!test) return;
  previewTestId = id;
  const gabarito = getTestGabaritoStats(test);
  document.querySelector("#testPreviewTitle").textContent = test.title;
  document.querySelector("#testPreviewMeta").textContent = `${questionLabel(test.questions.length)} · Nota mínima ${test.minScore}% · ${test.active ? "Ativo" : "Inativo"}`;
  const scoreEl = document.querySelector("#testPreviewScore");
  if (gabarito.total) {
    scoreEl.hidden = false;
    scoreEl.innerHTML = `
      <strong>Gabarito configurado: ${gabarito.configured}/${gabarito.total} questões objetivas</strong>
      <span>${gabarito.pct}% de acerto possível com as respostas corretas definidas · nota mínima ${test.minScore}%</span>
    `;
  } else {
    scoreEl.hidden = true;
    scoreEl.innerHTML = "";
  }
  document.querySelector("#testPreviewBody").innerHTML = test.questions.length
    ? test.questions
        .map((question, index) => {
          const hasGabarito = question.type !== "text" && (question.correct || []).length > 0;
          return `
            <article class="test-preview-question${hasGabarito ? " has-gabarito" : ""}">
              <span class="test-preview-type">${questionTypeLabel(question.type)}</span>
              <h4>${index + 1}. ${escapeHtml(question.prompt || "Sem enunciado")}</h4>
              ${renderTestPreviewOptions(question)}
            </article>
          `;
        })
        .join("")
    : `<p class="panel-note">Este teste ainda não possui questões cadastradas.</p>`;
  document.querySelector("#testPreviewDialog").showModal();
}

function saveCurrentTest() {
  const test = tests.find((item) => item.id === editingTestId);
  if (!test) return;

  test.title = document.querySelector("#testTitleInput").value.trim() || "Teste sem título";
  test.description = document.querySelector("#testDescriptionInput").value.trim();
  test.minScore = Number(document.querySelector("#testMinScore").value);
  test.active = document.querySelector("#testActive").checked;
  showToast("Teste salvo", `${test.title} está pronto no catálogo.`);
  showTestList();
}

function testTemplate(test) {
  const count = test.questions.length;
  return `
    <article class="test-card" data-test-id="${test.id}" tabindex="0" aria-label="Teste ${escapeHtml(test.title)}">
      <span class="test-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 3h7l5 5v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
          <path d="M15 3v5h5" />
          <path d="M12 17.2h.01" stroke-width="3" stroke-linecap="round" />
          <path d="M10 11.2a2 2 0 1 1 3.1 1.7c-.6.4-1.1.9-1.1 1.6" />
        </svg>
      </span>
      <div class="test-copy">
        <h3>${escapeHtml(test.title)}</h3>
        <div class="test-meta">
          <span class="test-chip">${questionLabel(count)}</span>
          <span class="test-chip">Nota mínima ${test.minScore}%</span>
          <span class="test-chip${test.active ? " is-active" : ""}">${test.active ? "Ativo" : "Inativo"}</span>
        </div>
      </div>
      <div class="test-card-actions">
        <button type="button" class="secondary-button" data-test-action="view" data-test-id="${test.id}">Visualizar</button>
        <button type="button" class="secondary-button" data-test-action="edit" data-test-id="${test.id}">Editar</button>
      </div>
    </article>
  `;
}

function renderTests() {
  const activeCount = tests.filter((test) => test.active).length;
  document.querySelector("#testsNavCount").textContent = tests.length;
  document.querySelector("#testsActiveSummary").textContent = padCount(activeCount);
  document.querySelector("#testsTotalSummary").textContent = padCount(tests.length);
  testList.innerHTML = tests.map(testTemplate).join("");
  testEmpty.hidden = tests.length !== 0;
  testList.hidden = tests.length === 0;
}

function renderDashboard() {
  document.querySelector("#dashboardCandidatesCount").textContent = candidates.length;
  document.querySelector("#dashboardJobsCount").textContent =
    jobs.filter((job) => job.status === "Aberta").length + 10;

  document.querySelector("#dashboardJobList").innerHTML = jobs
    .slice(0, 3)
    .map(
      (job) => `
        <article class="dashboard-job" data-dashboard-job="${job.id}" data-open-job="${job.title}">
          <span class="dashboard-job-icon" aria-hidden="true">${job.title.charAt(0)}</span>
          <div class="dashboard-job-copy">
            <strong>${job.title}</strong>
            <span>${job.area} · ${job.workModel} · ${job.status}</span>
          </div>
          <div class="dashboard-job-stats">
            <strong>${job.applicants}</strong>
            <span>candidatos</span>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelector("#dashboardMatchList").innerHTML = candidates
    .slice(0, 4)
    .map((candidate) => {
      const match = computeMatch(candidate.vacancy, candidate);
      return `
        <article class="dashboard-match" data-dashboard-candidate="${candidate.id}" tabindex="0">
          <span class="dashboard-match-avatar">${initials(candidate.name)}</span>
          <div class="dashboard-match-copy">
            <strong>${candidate.name}</strong>
            <span>${candidate.vacancy}</span>
          </div>
          <span class="match-score" title="${matchTitleAttr(match)}">${match.total}%</span>
        </article>
      `;
    })
    .join("");

  const stageLabels = {
    Triagem: "Triagem",
    "Entrevista RH": "Entrevistas",
    Proposta: "Propostas",
    "Recusou Proposta": "Recusadas",
  };
  const stageCounts = pipelineStages.map((stage) =>
    candidates.filter((candidate) => candidate.stage === stage).length,
  );
  const maxCount = Math.max(...stageCounts, 1);
  document.querySelector("#dashboardFunnel").innerHTML = pipelineStages
    .map((stage, index) => {
      const count = stageCounts[index];
      const selected = stage === selectedFunnelStage;
      const height = Math.max(12, Math.round((count / maxCount) * 100));
      return `
        <button
          type="button"
          class="funnel-step${selected ? " active" : ""}"
          data-funnel-stage="${stage}"
          aria-pressed="${selected}"
        >
          <div class="funnel-bar-wrap">
            <span class="funnel-bar" style="height: ${height}%"></span>
          </div>
          <div class="funnel-label">
            <span>${stageLabels[stage] || stage}</span>
            <strong>${count}</strong>
          </div>
        </button>
      `;
    })
    .join("");

  const recentCandidates = [candidates[0], candidates[5], candidates[9], candidates[2]];
  document.querySelector("#dashboardActivity").innerHTML = recentCandidates
    .map((candidate) => {
      const activity = candidate.activities[0];
      return `
        <article class="dashboard-activity-item" data-open-candidate="${candidate.id}" tabindex="0">
          <span class="activity-avatar">${initials(candidate.name)}</span>
          <div>
            <strong>${candidate.name}</strong>
            <span>${activity[2]} · ${activity[3]}</span>
          </div>
        </article>
      `;
    })
    .join("");
}

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

function getFilteredCandidates() {
  const query = normalize(candidateSearch.value.trim());
  const vacancy = jobFilter.value;
  const stage = pipelineStageFilter;
  const profile = pipelineProfileFilter;
  const sla = pipelineSlaFilter;
  const tag = pipelineTagFilter;
  const score = pipelineScoreFilter;
  const owner = pipelineOwnerFilter;
  const origin = pipelineOriginFilter;
  const period = pipelinePeriodFilter;
  const evaluation = pipelineEvaluationFilter;
  const pending = pipelinePendingFilter;

  let list = candidates.filter((candidate) => {
    const matchesQuery =
      !query ||
      normalize(`${candidate.name} ${candidate.email} ${candidate.vacancy} ${(candidate.tags || []).join(" ")}`).includes(query);
    const matchesVacancy = vacancy === "all" || candidate.vacancy === vacancy;
    const matchesStage = stage === "all" || candidate.stage === stage;
    const completion = getCandidateProfileCompletion(candidate);
    const matchesProfile =
      profile === "all" ||
      (profile === "incomplete" && completion < 80) ||
      (profile === "complete" && completion >= 80);
    const overdue = slaStatus(candidate).overdue;
    const matchesSla =
      sla === "all" ||
      (sla === "overdue" && overdue) ||
      (sla === "on-time" && !overdue);
    const matchesTag = tag === "all" || (candidate.tags || []).includes(tag);
    const matchScore = computeMatch(candidate.vacancy, candidate).total;
    const matchesScore =
      score === "all" ||
      (score === "high" && matchScore >= 80) ||
      (score === "mid" && matchScore >= 60 && matchScore < 80) ||
      (score === "low" && matchScore < 60);
    const matchesOwner = owner === "all" || candidate.owner === owner;
    const matchesOrigin = origin === "all" || candidate.origin === origin;
    const appliedDays = candidate.appliedAt
      ? Math.floor(
          (new Date(`${TODAY_KEY}T12:00:00`) - new Date(`${candidate.appliedAt}T12:00:00`)) /
            (1000 * 60 * 60 * 24),
        )
      : 999;
    const matchesPeriod =
      period === "all" ||
      (period === "7" && appliedDays <= 7) ||
      (period === "15" && appliedDays <= 15) ||
      (period === "30" && appliedDays <= 30);
    const matchesEvaluation = evaluation === "all" || candidate.evaluationStatus === evaluation;
    const hasPendingTest = testsForCandidate(candidate).some((item) => item.status === "Pendente");
    const matchesPending =
      pending === "all" ||
      (pending === "evaluation" && candidate.evaluationStatus === "pendente") ||
      (pending === "test" && hasPendingTest) ||
      (pending === "profile" && completion < 80) ||
      (pending === "sla" && overdue) ||
      (pending === "any" &&
        (candidate.evaluationStatus === "pendente" || hasPendingTest || completion < 80 || overdue));
    return (
      matchesQuery &&
      matchesVacancy &&
      matchesStage &&
      matchesProfile &&
      matchesSla &&
      matchesTag &&
      matchesScore &&
      matchesOwner &&
      matchesOrigin &&
      matchesPeriod &&
      matchesEvaluation &&
      matchesPending
    );
  });

  if (vacancy !== "all") {
    list = [...list].sort(
      (a, b) => computeMatch(vacancy, b).total - computeMatch(vacancy, a).total,
    );
  }
  return list;
}

const stageMeta = {
  Triagem: { kicker: "FILA" },
  "Entrevista RH": { kicker: "AGENDA" },
  Proposta: { kicker: "OFERTA" },
  "Recusou Proposta": { kicker: "ENCERRADO" },
};

function stageClass(stage) {
  return {
    Triagem: "triagem",
    "Entrevista RH": "entrevista",
    Proposta: "proposta",
    "Recusou Proposta": "recusou",
  }[stage] || "custom";
}

function spriteIcon(id) {
  return `<svg class="ui-icon"><use href="${iconSpriteBase}#i-${id}"></use></svg>`;
}

function candidateComments(candidate) {
  return candidate.history.filter(([title]) => title === "Comentário");
}

function ensureCandidateComments(candidate) {
  if (!Array.isArray(candidate.comments)) {
    candidate.comments = candidateComments(candidate).map(([, detail], index) => ({
      id: `${candidate.id}-${index}`,
      message: detail.split(" · ")[0],
      author: detail.split(" · ")[1] || "Equipe RH",
      time: "Histórico",
      archived: false,
    }));
  }
  return candidate.comments;
}

function addCandidateComment(candidate, message) {
  ensureCandidateComments(candidate).unshift({
    id: `${candidate.id}-${Date.now()}`,
    message,
    author: "Larissa Dias",
    time: "Agora",
    archived: false,
  });
  candidate.activities.unshift(["LD", "Larissa Dias", message, "Agora"]);
  candidate.history.unshift(["Comentário", `${message} · Larissa Dias`]);
}

function toggleCardPanel(candidateId, panel) {
  if (expandedCardId === candidateId && expandedCardPanel === panel) {
    expandedCardId = null;
    expandedCardPanel = "";
  } else {
    expandedCardId = candidateId;
    expandedCardPanel = panel;
  }
  renderPipeline();
  if (expandedCardPanel === "comments") {
    const input = document.querySelector(
      `.pipeline-card[data-candidate-id="${candidateId}"] [data-card-comment-input]`,
    );
    input?.focus();
  }
}

function cardPanelMarkup(candidate) {
  if (expandedCardId !== candidate.id) return "";
  if (expandedCardPanel === "comments") {
    const comments = candidateComments(candidate);
    const items = comments.length
      ? comments
          .map(
            ([, text]) => `
              <div class="card-note">
                <p>${text.split(" · ")[0]}</p>
                <time>${text.split(" · ").slice(1).join(" · ") || ""}</time>
              </div>
            `,
          )
          .join("")
      : `<p class="card-panel-empty">Nenhum comentário ainda.</p>`;
    return `
      <div class="card-panel" data-card-panel="comments">
        ${items}
        <form class="card-comment-form" data-card-comment>
          <input data-card-comment-input type="text" placeholder="Escrever comentário..." required />
          <button type="submit" aria-label="Enviar comentário">${spriteIcon("send")}</button>
        </form>
      </div>
    `;
  }
  if (expandedCardPanel === "history") {
    const items = candidate.history.length
      ? candidate.history
          .map(
            ([title, text]) => `
              <div class="card-note">
                <strong>${title}</strong>
                <p>${text}</p>
              </div>
            `,
          )
          .join("")
      : `<p class="card-panel-empty">Nenhum histórico nesta vaga.</p>`;
    return `
      <div class="card-panel" data-card-panel="history">
        ${items}
      </div>
    `;
  }
  return "";
}

function candidateCardTemplate(candidate) {
  const selected = candidate.id === selectedCandidateId ? " selected" : "";
  const bulkSelected = selectedPipelineCandidateIds.has(candidate.id);
  const commentsCount = candidateComments(candidate).length;
  const isComments = expandedCardId === candidate.id && expandedCardPanel === "comments";
  const isHistory = expandedCardId === candidate.id && expandedCardPanel === "history";
  const match = computeMatch(candidate.vacancy, candidate);
  const profileCompletion = getCandidateProfileCompletion(candidate);
  const sla = slaStatus(candidate);
  const dups = findDuplicates(candidate.email);
  const dup = dups.length > 1;
  const dupSources = [...new Set(dups.map((item) => ({ candidates: "pipeline", talents: "banco", results: "resultados" })[item.source] || item.source))];
  const offerStatus = candidate.proposal?.status;
  const hasPendingTest = testsForCandidate(candidate).some((item) => item.status === "Pendente");
  const pendingEvaluation = candidate.evaluationStatus === "pendente";
  const rejected = candidate.stage === "Recusou Proposta" || candidate.evaluationStatus === "reprovado";
  const appliedLabel = candidate.appliedAt ? formatBRDate(candidate.appliedAt) : "—";
  const timeLabel = sla.overdue
    ? `Parado ${sla.days}d`
    : `${sla.days}d na etapa`;
  const fitLabel = candidate.fitCultural == null ? "Fit —" : `Fit ${candidate.fitCultural}%`;
  const tagsMarkup = (candidate.tags || [])
    .slice(0, 3)
    .map((tag) => `<span class="pipeline-card-tag">${escapeHtml(tag)}</span>`)
    .join("");
  const cardFlags = [
    sla.overdue ? `<span class="sla-badge" title="${sla.days} dias nesta etapa (limite ${sla.limit})">SLA vencido</span>` : "",
    pendingEvaluation ? `<span class="eval-pending-badge">Avaliação pendente</span>` : "",
    hasPendingTest ? `<span class="test-pending-badge">Teste pendente</span>` : "",
    rejected ? `<span class="rejected-badge">Reprovado / recusou</span>` : "",
    dup ? `<span class="dup-badge" title="Mesmo e-mail em: ${dupSources.join(", ")}">Duplicado · ${dupSources.join("/")}</span>` : "",
    profileCompletion < 80 ? `<span class="profile-completion-badge" title="Perfil ${profileCompletion}% concluído">Perfil ${profileCompletion}%</span>` : "",
    offerStatus ? `<span class="offer-status status-${offerStatus}">${offerStatusLabel(offerStatus)}</span>` : "",
    candidate.alert ? `<span class="alert-badge" title="Pendência operacional">Alerta</span>` : "",
  ].join("");
  return `
    <article
      class="pipeline-card stage-${stageClass(candidate.stage)}${selected}${bulkSelected ? " is-bulk-selected" : ""}${expandedCardId === candidate.id ? " is-expanded" : ""}${rejected ? " is-rejected" : ""}${pendingEvaluation ? " is-eval-pending" : ""}"
      data-candidate-id="${candidate.id}"
      draggable="true"
      tabindex="0"
      aria-label="Abrir candidato ${candidate.name}"
    >
      <div class="candidate-card-heading">
        <span class="candidate-initials" aria-hidden="true">${initials(candidate.name)}</span>
        <div class="candidate-card-copy">
          <h3>${candidate.name}</h3>
          <p>${candidate.email}</p>
        </div>
        <span class="match-score" title="${matchTitleAttr(match)}">${match.total}%</span>
        <label class="pipeline-card-select" data-pipeline-select="${candidate.id}" title="Selecionar ${candidate.name}">
          <input type="checkbox" data-pipeline-select="${candidate.id}" ${bulkSelected ? "checked" : ""} />
          <span aria-hidden="true"></span>
        </label>
      </div>
      ${cardFlags ? `<div class="candidate-card-flags">${cardFlags}</div>` : ""}
      <div class="candidate-vacancy">${candidate.vacancy}</div>
      <div class="pipeline-card-meta">
        <span title="Data da candidatura">Candidatura ${appliedLabel}</span>
        <span title="Tempo na etapa">${timeLabel}</span>
        <span title="Score geral">Score ${match.total}%</span>
        <span title="Fit cultural">${fitLabel}</span>
        <span title="Responsável">${escapeHtml(candidate.owner || "—")}</span>
        <span title="Origem">${escapeHtml(candidate.origin || "—")}</span>
      </div>
      ${tagsMarkup ? `<div class="pipeline-card-tags">${tagsMarkup}</div>` : ""}
      <div class="candidate-card-footer">
        <button type="button" class="card-pdf${candidate.attachment ? " is-ok" : ""}" data-card-action="curriculo">
          ${candidate.attachment ? "PDF anexado" : "Sem currículo"}
        </button>
        <div class="card-tools">
          <button type="button" class="card-tool${isComments ? " is-active" : ""}" data-card-action="comentarios" aria-label="Comentários de ${candidate.name}">
            ${spriteIcon("message")}
            ${commentsCount ? `<span class="card-tool-badge">${commentsCount}</span>` : ""}
          </button>
          <button type="button" class="card-tool${isHistory ? " is-active" : ""}" data-card-action="historico" aria-label="Histórico de ${candidate.name}">
            ${spriteIcon("clock")}
          </button>
        </div>
      </div>
      ${cardPanelMarkup(candidate)}
      ${
        candidate.stage === "Proposta"
          ? `<div class="proposal-card-actions">
              <button type="button" data-card-action="ver-proposta">Ver proposta</button>
              <div class="proposal-card-split">
                <button type="button" data-card-action="dispensar">Dispensar</button>
                <button type="button" class="is-solid" data-card-action="contratar">Contratar</button>
              </div>
            </div>`
          : ""
      }
    </article>
  `;
}

function renderJobFilter() {
  const selected = jobFilter.value || "all";
  const vacancies = [
    ...new Set([
      ...jobs.map((job) => job.title),
      ...candidates.map((candidate) => candidate.vacancy),
    ]),
  ];

  jobFilter.innerHTML = [
    '<option value="all">Todas as vagas</option>',
    ...vacancies.map(
      (title) =>
        `<option${title === selected ? " selected" : ""}>${title}</option>`,
    ),
  ].join("");
}

function getActivePipelineFilters() {
  const scoreLabels = {
    high: "Score ≥ 80%",
    mid: "Score 60–79%",
    low: "Score < 60%",
  };
  const periodLabels = {
    "7": "Últimos 7 dias",
    "15": "Últimos 15 dias",
    "30": "Últimos 30 dias",
  };
  const evaluationLabels = {
    pendente: "Avaliação pendente",
    avaliado: "Avaliado",
    reprovado: "Reprovado",
  };
  const pendingLabels = {
    any: "Com pendência",
    evaluation: "Avaliação pendente",
    test: "Teste pendente",
    profile: "Perfil incompleto",
    sla: "SLA vencido",
  };
  const profileLabels = {
    incomplete: "Perfil < 80%",
    complete: "Perfil ≥ 80%",
  };
  const slaLabels = {
    overdue: "Somente atrasados",
    "on-time": "Dentro do prazo",
  };
  return [
    pipelineStageFilter !== "all" && { key: "stage", label: `Etapa: ${pipelineStageFilter}` },
    pipelineTagFilter !== "all" && { key: "tag", label: `Tag: ${pipelineTagFilter}` },
    pipelineScoreFilter !== "all" && { key: "score", label: scoreLabels[pipelineScoreFilter] || "Score" },
    pipelineOwnerFilter !== "all" && { key: "owner", label: `Resp.: ${pipelineOwnerFilter}` },
    pipelineOriginFilter !== "all" && { key: "origin", label: `Origem: ${pipelineOriginFilter}` },
    pipelinePeriodFilter !== "all" && { key: "period", label: periodLabels[pipelinePeriodFilter] || "Período" },
    pipelineEvaluationFilter !== "all" && {
      key: "evaluation",
      label: evaluationLabels[pipelineEvaluationFilter] || "Avaliação",
    },
    pipelinePendingFilter !== "all" && {
      key: "pending",
      label: pendingLabels[pipelinePendingFilter] || "Pendências",
    },
    pipelineProfileFilter !== "all" && {
      key: "profile",
      label: profileLabels[pipelineProfileFilter] || "Perfil",
    },
    pipelineSlaFilter !== "all" && { key: "sla", label: slaLabels[pipelineSlaFilter] || "Prazo" },
  ].filter(Boolean);
}

function syncPipelineFilterButton() {
  const button = document.querySelector("#pipelineFilterBtn");
  const countEl = document.querySelector("#pipelineFilterCount");
  const activeCount = getActivePipelineFilters().length;
  if (!button || !countEl) return;
  button.classList.toggle("is-active", activeCount > 0);
  button.setAttribute("aria-expanded", String(Boolean(document.querySelector("#pipelineFiltersDialog")?.open)));
  countEl.hidden = activeCount === 0;
  countEl.textContent = String(activeCount);
}

function renderPipelineFilterChips() {
  const host = document.querySelector("#pipelineActiveFilters");
  if (!host) return;
  const chips = getActivePipelineFilters();
  syncPipelineFilterButton();
  if (!chips.length) {
    host.hidden = true;
    host.innerHTML = "";
    return;
  }
  host.hidden = false;
  host.innerHTML = `
    ${chips
      .map(
        (chip) => `
          <button type="button" class="pipeline-filter-chip" data-clear-pipeline-filter="${chip.key}" title="Remover filtro">
            <span>${escapeHtml(chip.label)}</span>
            <span aria-hidden="true">×</span>
          </button>
        `,
      )
      .join("")}
    <button type="button" class="pipeline-filter-clear-all" id="pipelineClearActiveFilters">Limpar filtros</button>
  `;
}

function clearPipelineAdvancedFilters(options = {}) {
  pipelineStageFilter = "all";
  pipelineTagFilter = "all";
  pipelineScoreFilter = "all";
  pipelineOwnerFilter = "all";
  pipelineOriginFilter = "all";
  pipelinePeriodFilter = "all";
  pipelineEvaluationFilter = "all";
  pipelinePendingFilter = "all";
  pipelineProfileFilter = "all";
  pipelineSlaFilter = "all";
  if (options.render !== false) {
    renderPipelineFilters();
    renderPipeline();
  }
}

function clearSinglePipelineFilter(key) {
  const map = {
    stage: () => {
      pipelineStageFilter = "all";
    },
    tag: () => {
      pipelineTagFilter = "all";
    },
    score: () => {
      pipelineScoreFilter = "all";
    },
    owner: () => {
      pipelineOwnerFilter = "all";
    },
    origin: () => {
      pipelineOriginFilter = "all";
    },
    period: () => {
      pipelinePeriodFilter = "all";
    },
    evaluation: () => {
      pipelineEvaluationFilter = "all";
    },
    pending: () => {
      pipelinePendingFilter = "all";
    },
    profile: () => {
      pipelineProfileFilter = "all";
    },
    sla: () => {
      pipelineSlaFilter = "all";
    },
  };
  map[key]?.();
  renderPipelineFilters();
  renderPipeline();
}

function openPipelineFiltersDialog() {
  renderPipelineFilters();
  const dialog = document.querySelector("#pipelineFiltersDialog");
  dialog?.showModal();
  syncPipelineFilterButton();
}

function closePipelineFiltersDialog() {
  document.querySelector("#pipelineFiltersDialog")?.close();
  syncPipelineFilterButton();
}

function applyPipelineFiltersFromDialog(event) {
  event?.preventDefault();
  pipelineStageFilter = document.querySelector("#pipelineStageFilter")?.value || "all";
  pipelineTagFilter = document.querySelector("#pipelineTagFilter")?.value || "all";
  pipelineScoreFilter = document.querySelector("#pipelineScoreFilter")?.value || "all";
  pipelineOwnerFilter = document.querySelector("#pipelineOwnerFilter")?.value || "all";
  pipelineOriginFilter = document.querySelector("#pipelineOriginFilter")?.value || "all";
  pipelinePeriodFilter = document.querySelector("#pipelinePeriodFilter")?.value || "all";
  pipelineEvaluationFilter = document.querySelector("#pipelineEvaluationFilter")?.value || "all";
  pipelinePendingFilter = document.querySelector("#pipelinePendingFilter")?.value || "all";
  pipelineProfileFilter = document.querySelector("#pipelineProfileFilter")?.value || "all";
  pipelineSlaFilter = document.querySelector("#pipelineSlaFilter")?.value || "all";
  closePipelineFiltersDialog();
  renderPipeline();
}

function renderPipelineFilters() {
  const stageFilter = document.querySelector("#pipelineStageFilter");
  const bulkStage = document.querySelector("#pipelineBulkStage");
  const tagFilter = document.querySelector("#pipelineTagFilter");
  const ownerFilter = document.querySelector("#pipelineOwnerFilter");
  const originFilter = document.querySelector("#pipelineOriginFilter");
  const stageOptions = pipelineStages
    .map((stage) => `<option value="${escapeHtml(stage)}">${escapeHtml(stage)}</option>`)
    .join("");
  if (stageFilter) {
    stageFilter.innerHTML = `<option value="all">Todas as etapas</option>${stageOptions}`;
    stageFilter.value = pipelineStages.includes(pipelineStageFilter) ? pipelineStageFilter : "all";
  }
  if (bulkStage) {
    bulkStage.innerHTML = `<option value="">Selecione uma etapa</option>${stageOptions}`;
  }
  if (tagFilter) {
    const tags = [...new Set(candidates.flatMap((candidate) => candidate.tags || []))].sort();
    tagFilter.innerHTML = [
      '<option value="all">Todas as tags</option>',
      ...tags.map(
        (tag) =>
          `<option value="${escapeHtml(tag)}"${tag === pipelineTagFilter ? " selected" : ""}>${escapeHtml(tag)}</option>`,
      ),
    ].join("");
  }
  if (ownerFilter) {
    const owners = [...new Set(candidates.map((candidate) => candidate.owner).filter(Boolean))].sort();
    ownerFilter.innerHTML = [
      '<option value="all">Todos os responsáveis</option>',
      ...owners.map(
        (owner) =>
          `<option value="${escapeHtml(owner)}"${owner === pipelineOwnerFilter ? " selected" : ""}>${escapeHtml(owner)}</option>`,
      ),
    ].join("");
  }
  if (originFilter) {
    const origins = [...new Set(candidates.map((candidate) => candidate.origin).filter(Boolean))].sort();
    originFilter.innerHTML = [
      '<option value="all">Todas as origens</option>',
      ...origins.map(
        (origin) =>
          `<option value="${escapeHtml(origin)}"${origin === pipelineOriginFilter ? " selected" : ""}>${escapeHtml(origin)}</option>`,
      ),
    ].join("");
  }
  const scoreFilter = document.querySelector("#pipelineScoreFilter");
  const periodFilter = document.querySelector("#pipelinePeriodFilter");
  const evaluationFilter = document.querySelector("#pipelineEvaluationFilter");
  const pendingFilter = document.querySelector("#pipelinePendingFilter");
  const profileFilter = document.querySelector("#pipelineProfileFilter");
  const slaFilter = document.querySelector("#pipelineSlaFilter");
  if (scoreFilter) scoreFilter.value = pipelineScoreFilter;
  if (periodFilter) periodFilter.value = pipelinePeriodFilter;
  if (evaluationFilter) evaluationFilter.value = pipelineEvaluationFilter;
  if (pendingFilter) pendingFilter.value = pipelinePendingFilter;
  if (profileFilter) profileFilter.value = pipelineProfileFilter;
  if (slaFilter) slaFilter.value = pipelineSlaFilter;
}

function updatePipelineBulkBar() {
  const bar = document.querySelector("#pipelineBulkBar");
  const count = document.querySelector("#pipelineBulkCount");
  if (!bar || !count) return;
  const selectedCount = selectedPipelineCandidateIds.size;
  count.textContent = selectedCount;
  bar.hidden = selectedCount === 0;
}

function clearPipelineSelection() {
  selectedPipelineCandidateIds.clear();
  renderPipeline();
}

function updateCandidateStage(candidate, stage, meta = {}) {
  if (!candidate || candidate.stage === stage) return false;
  const previousStage = candidate.stage;
  candidate.stage = stage;
  candidate.stageEnteredAt = `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`;
  const reason = meta.reason ? ` · ${meta.reason}` : "";
  const note = meta.note ? ` — ${meta.note}` : "";
  candidate.history.unshift([
    `Etapa: ${stage}`,
    `Movido de ${previousStage}${reason}${note} · agora`,
  ]);
  candidate.activities.unshift([
    "LD",
    "Larissa Dias",
    `Moveu de ${previousStage} para ${stage}${reason}`,
    "Agora",
  ]);
  if (meta.nextAction) candidate.nextAction = meta.nextAction;
  if (meta.nextActionAt) candidate.nextActionAt = meta.nextActionAt;
  candidate.lastAction = {
    type: "move",
    from: previousStage,
    to: stage,
    reason: meta.reason || "",
    note: meta.note || "",
    at: `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`,
  };
  const application = candidatePortalUser.applications.find(
    (item) =>
      normalize(item.title) === normalize(candidate.vacancy) &&
      normalize(candidatePortalUser.email) === normalize(candidate.email),
  );
  if (application) {
    application.stage = stage;
    application.stageUpdatedAt = TODAY_KEY;
    application.timeline = [
      ...(application.timeline || []),
      { stage, date: TODAY_KEY },
    ];
  }
  return true;
}

function neighborStage(current, direction) {
  const index = pipelineStages.indexOf(current);
  if (index < 0) return null;
  return pipelineStages[index + direction] || null;
}

function openMoveStageDialog(candidate, targetStage = "") {
  if (!candidate) return;
  pendingMoveCandidate = candidate;
  pendingMoveStage = targetStage || "";
  selectedCandidateId = candidate.id;
  const label = document.querySelector("#moveStageCandidateLabel");
  const select = document.querySelector("#moveStageSelect");
  const reason = document.querySelector("#moveStageReason");
  const note = document.querySelector("#moveStageNote");
  const nextAction = document.querySelector("#moveStageNextAction");
  const nextDate = document.querySelector("#moveStageNextActionDate");
  if (label) label.textContent = `${candidate.name} · ${candidate.vacancy}`;
  if (select) {
    select.innerHTML = [
      '<option value="">Selecione a etapa...</option>',
      ...pipelineStages
        .filter((stage) => stage !== candidate.stage)
        .map(
          (stage) =>
            `<option value="${escapeHtml(stage)}"${stage === targetStage ? " selected" : ""}>${escapeHtml(stage)}</option>`,
        ),
    ].join("");
  }
  if (reason) reason.value = "";
  if (note) note.value = "";
  if (nextAction) nextAction.value = candidate.nextAction || "";
  if (nextDate) nextDate.value = candidate.nextActionAt || "";
  document.querySelector("#moveStageDialog")?.showModal();
}

function confirmMoveStage(event) {
  event.preventDefault();
  const candidate = pendingMoveCandidate;
  const stage = document.querySelector("#moveStageSelect")?.value;
  const reason = document.querySelector("#moveStageReason")?.value.trim();
  const note = document.querySelector("#moveStageNote")?.value.trim();
  const nextAction = document.querySelector("#moveStageNextAction")?.value.trim();
  const nextActionAt = document.querySelector("#moveStageNextActionDate")?.value || "";
  if (!candidate || !stage || !reason) return;
  if (!updateCandidateStage(candidate, stage, { reason, note, nextAction, nextActionAt })) {
    document.querySelector("#moveStageDialog")?.close();
    return;
  }
  pendingMoveCandidate = null;
  pendingMoveStage = "";
  document.querySelector("#moveStageDialog")?.close();
  renderPipeline();
  renderDashboard();
  if (candidateDialog.open) renderCandidateDetails(candidate);
  showToast("Etapa atualizada", `${candidate.name} agora está em ${stage}.`);
  if (stage === "Proposta") {
    openOfferDialog(candidate, { compose: !candidate.proposal?.amount });
  }
}

function moveCandidate(candidateId, stage) {
  const candidate = candidates.find((item) => item.id === candidateId);
  if (!candidate || candidate.stage === stage) return;
  openMoveStageDialog(candidate, stage);
}

function applyPipelineBulkStage() {
  const targetStage = document.querySelector("#pipelineBulkStage")?.value;
  if (!targetStage || !selectedPipelineCandidateIds.size) return;
  const selectedCandidates = candidates.filter((candidate) =>
    selectedPipelineCandidateIds.has(candidate.id),
  );
  const movedCandidates = selectedCandidates.filter((candidate) =>
    updateCandidateStage(candidate, targetStage),
  );
  const movedCount = movedCandidates.length;
  selectedPipelineCandidateIds.clear();
  renderPipeline();
  renderDashboard();
  showToast("Pipeline atualizado", `${movedCount} candidato(s) movido(s) para ${targetStage}.`);
  if (targetStage === "Proposta" && movedCandidates.length === 1) {
    openOfferDialog(movedCandidates[0], { compose: !movedCandidates[0].proposal?.amount });
  }
}

function renderPipeline() {
  renderPipelineFilters();
  const filteredCandidates = getFilteredCandidates();
  const visibleCandidateIds = new Set(filteredCandidates.map((candidate) => candidate.id));
  selectedPipelineCandidateIds.forEach((candidateId) => {
    if (!visibleCandidateIds.has(candidateId)) selectedPipelineCandidateIds.delete(candidateId);
  });

  kanban.classList.toggle("is-four-columns", pipelineStages.length === 4);
  kanban.innerHTML = pipelineStages
    .map((stage) => {
      const stageCandidates = filteredCandidates.filter(
        (candidate) => candidate.stage === stage,
      );
      const cards = stageCandidates.length
        ? stageCandidates.map(candidateCardTemplate).join("")
        : '<div class="column-empty">Arraste candidatos para esta etapa</div>';
      const meta = stageMeta[stage] || { kicker: "PROCESSO" };

      return `
        <section class="kanban-column stage-${stageClass(stage)}" data-stage="${stage}" aria-labelledby="stage-${normalize(stage).replaceAll(" ", "-")}">
          <header class="column-header">
            <div class="column-title">
              <span class="panel-kicker">${meta.kicker}</span>
              <h2 id="stage-${normalize(stage).replaceAll(" ", "-")}">${stage}</h2>
            </div>
            <span class="column-count">${stageCandidates.length}</span>
          </header>
          <div class="column-cards">${cards}</div>
        </section>
      `;
    })
    .join("");
  renderJobCandidateList();
  updateSlaCounter();
  renderTalentSuggestions();
  updatePipelineBulkBar();
  renderPipelineFilterChips();
}

function updateSlaCounter() {
  const overdue = candidates.filter((c) => slaStatus(c).overdue).length;
  const counter = document.querySelector("#slaOverdueCounter");
  const countEl = document.querySelector("#slaOverdueCount");
  if (!counter || !countEl) return;
  countEl.textContent = overdue;
  counter.hidden = overdue === 0;
}

function renderTalentSuggestions() {
  const panel = document.querySelector("#talentSuggestPanel");
  if (!panel) return;
  const vacancy = jobBoardTitle || (jobFilter.value !== "all" ? jobFilter.value : "");
  if (!vacancy || !jobBoardTitle) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }
  const suggestions = talents
    .filter((t) => t.status === "aprovados" && !t.anonymized)
    .map((talent) => ({ talent, match: computeMatch(vacancy, talent) }))
    .filter((entry) => entry.match.total >= 60)
    .sort((a, b) => b.match.total - a.match.total)
    .slice(0, 5);
  if (!suggestions.length) {
    panel.hidden = true;
    panel.innerHTML = "";
    return;
  }
  panel.hidden = false;
  panel.innerHTML = `
    <div class="talent-suggest-head">
      <strong>Sugestões do banco de talentos</strong>
      <span>Match ≥ 60% para ${escapeHtml(vacancy)}</span>
    </div>
    <div class="talent-suggest-list">
      ${suggestions
        .map(
          ({ talent, match }) => `
            <article class="talent-suggest-card">
              <div>
                <strong>${escapeHtml(talent.name)}</strong>
                <span>${escapeHtml(talent.email)}</span>
              </div>
              <span class="match-score" title="${matchTitleAttr(match)}">${match.total}%</span>
              <button type="button" class="primary-button" data-invite-talent="${talent.id}">Convidar</button>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function inviteTalentToJob(talentId) {
  const talent = talents.find((item) => item.id === Number(talentId));
  const vacancy = jobBoardTitle || jobFilter.value;
  if (!talent || !vacancy || vacancy === "all") return;
  if (candidates.some((c) => normalize(c.email) === normalize(talent.email) && c.vacancy === vacancy)) {
    showToast("Já no pipeline", `${talent.name} já está nesta vaga.`);
    return;
  }
  const job = resolveJob(vacancy);
  const nextId = Math.max(...candidates.map((c) => c.id), 100) + 1;
  candidates.unshift({
    id: nextId,
    name: talent.name,
    email: talent.email,
    phone: talent.phone || "",
    vacancy,
    stage: "Triagem",
    alert: 0,
    attachment: true,
    skills: talent.skills || [],
    city: talent.city || job.city || "Palmas",
    seniority: talent.seniority || job.seniority || "Júnior",
    area: talent.area || job.area || "",
    stageEnteredAt: `${TODAY_KEY}T12:00:00`,
    lgpdConsent: talent.lgpdConsent ?? true,
    consentAt: talent.consentAt || null,
    retainUntil: talent.retainUntil || retainUntilFromDays(),
    history: [["Convite do banco", `Convidado para ${vacancy} · agora`], ["Candidatura enviada", `${talent.name} · agora`]],
    activities: [["LD", "Larissa Dias", `Convidou do banco para ${vacancy}`, "Agora"]],
  });
  renderPipeline();
  renderDashboard();
  showToast("Talento convidado", `${talent.name} entrou em Triagem.`);
}

function renderJobCandidateList() {
  if (!jobCandidateList) return;
  const items = getFilteredCandidates();
  if (!items.length) {
    jobCandidateList.innerHTML = `
      <div class="empty-state">
        <h3>${jobBoardTitle ? "Nenhum candidato nesta vaga" : "Nenhum candidato encontrado"}</h3>
        <p>${jobBoardTitle ? "Os candidatos que se inscreverem aparecem aqui no kanban e na lista." : "Ajuste a busca ou os filtros para visualizar candidatos."}</p>
      </div>
    `;
    return;
  }
  jobCandidateList.innerHTML = items
    .map((candidate) => {
      const match = computeMatch(candidate.vacancy, candidate);
      const sla = slaStatus(candidate);
      const pendingEvaluation = candidate.evaluationStatus === "pendente";
      return `
        <article class="job-candidate-row${selectedPipelineCandidateIds.has(candidate.id) ? " is-bulk-selected" : ""}${pendingEvaluation ? " is-eval-pending" : ""}" data-candidate-id="${candidate.id}" tabindex="0">
          <label class="job-candidate-select" data-pipeline-select="${candidate.id}" title="Selecionar ${candidate.name}">
            <input type="checkbox" ${selectedPipelineCandidateIds.has(candidate.id) ? "checked" : ""} />
            <span aria-hidden="true"></span>
          </label>
          <div>
            <h3>${candidate.name}</h3>
            <p>${candidate.email} · ${candidate.vacancy} · ${escapeHtml(candidate.owner || "—")} · ${escapeHtml(candidate.origin || "—")}</p>
            <div class="job-candidate-meta">
              <span>Score ${match.total}%</span>
              <span>${candidate.fitCultural == null ? "Fit —" : `Fit ${candidate.fitCultural}%`}</span>
              <span>${sla.overdue ? `SLA ${sla.days}d` : `${sla.days}d na etapa`}</span>
              ${pendingEvaluation ? `<span class="eval-pending-badge">Avaliação pendente</span>` : ""}
            </div>
          </div>
          <span class="stage-pill ${candidate.stage === "Entrevista RH" ? "stage-interview" : ""}">${candidate.stage}</span>
          <span class="${candidate.attachment ? "attachment-ok" : ""}">${
            candidate.attachment ? "PDF anexado" : "Sem currículo"
          }</span>
        </article>
      `;
    })
    .join("");
}

function syncJobBoardView() {
  const listMode = jobBoardView === "list";
  pipelinePage.classList.toggle("is-list-view", listMode);
  kanban.hidden = listMode;
  jobCandidateList.hidden = !listMode;
  document.querySelectorAll("[data-job-view]").forEach((button) => {
    const active = button.dataset.jobView === jobBoardView;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  if (listMode) renderJobCandidateList();
}

function testsForCandidate(candidate) {
  const assigned = candidateTestMap[candidate.id];
  if (!assigned) return [];
  return assigned
    .map((entry) => {
      const catalog = tests.find((item) => item.id === entry.id);
      if (catalog) return { ...entry, test: catalog };
      if (entry.title) {
        return {
          ...entry,
          test: { id: entry.id || entry.title, title: entry.title },
        };
      }
      return null;
    })
    .filter(Boolean);
}

function findCandidateByEmail(email) {
  return candidates.find((item) => normalize(item.email) === normalize(email));
}

function renderCandidateDetails(candidate) {
  document.querySelector("#candidateStage").textContent = candidate.stage;
  document.querySelector("#candidateStage").classList.toggle(
    "stage-interview",
    candidate.stage === "Entrevista RH",
  );
  document.querySelector("#candidateName").textContent = candidate.name;
  document.querySelector("#profileName").textContent = candidate.name;
  document.querySelector("#candidateRole").textContent = candidate.vacancy;
  document.querySelector("#candidateEmail").textContent = candidate.email;
  document.querySelector("#candidatePhone").textContent = candidate.phone || "Não informado";
  document.querySelector("#profileContact").textContent =
    `${candidate.email}${candidate.phone ? ` · ${candidate.phone}` : ""}`;
  const match = computeMatch(candidate.vacancy, candidate);
  const candidateAvatar = document.querySelector("#candidateAvatar");
  candidateAvatar.innerHTML = candidate.photo
    ? `<img src="${escapeHtml(candidate.photo)}" alt="" />`
    : initials(candidate.name);
  document.querySelector("#candidateStatus").textContent = candidate.status || "Em processo";
  document.querySelector("#candidateOwner").textContent = candidate.owner || candidate.manager || "Sem responsável";
  document.querySelector("#candidateScore").textContent = `${match.total}%`;
  document.querySelector("#candidateFit").textContent =
    candidate.fitCultural == null ? "Pendente" : `${candidate.fitCultural}%`;
  const enteredAt = new Date(candidate.stageEnteredAt || `${TODAY_KEY}T12:00:00`);
  const today = new Date(`${TODAY_KEY}T12:00:00`);
  const processDays = Math.max(0, Math.floor((today - enteredAt) / 86400000));
  document.querySelector("#candidateProcessTime").textContent =
    processDays === 0 ? "Hoje" : `${processDays} dia${processDays === 1 ? "" : "s"}`;
  document.querySelector("#candidateHeaderTags").innerHTML = (candidate.tags || []).length
    ? candidate.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")
    : `<span>Sem tags</span>`;
  document.querySelector("#candidateLocation").textContent =
    [candidate.city, candidate.uf].filter(Boolean).join(" / ") || "Não informada";
  document.querySelector("#candidateSalary").textContent =
    candidate.salaryExpectation || candidate.proposal?.amount
      ? formatOfferMoney(candidate.salaryExpectation || candidate.proposal.amount)
      : "Não informada";
  document.querySelector("#candidateAvailability").textContent =
    candidate.availability || "A combinar";
  document.querySelector("#candidateOrigin").textContent =
    candidate.origin || "Não informada";
  document.querySelector("#candidateSummary").textContent =
    candidate.summary || candidate.objective || "Sem resumo informado.";
  document.querySelector("#candidateResumeStatus").textContent = candidate.attachment
    ? candidate.resumeFileName || "Currículo anexado em PDF"
    : "Nenhum arquivo anexado.";
  const profileCompletionSection = document.querySelector("#candidateProfileCompletionSection");
  const profileCompletionCard = document.querySelector("#candidateProfileCompletionCard");
  const profileCompletion = getCandidateProfileCompletionData(candidate);
  if (profileCompletionSection && profileCompletionCard) {
    const isIncomplete = profileCompletion.percent < 80;
    profileCompletionSection.hidden = !isIncomplete;
    profileCompletionCard.innerHTML = isIncomplete
      ? `
        <strong>Perfil ${profileCompletion.percent}% concluído</strong>
        <div class="profile-completion-meter" aria-hidden="true">
          <span style="width: ${profileCompletion.percent}%"></span>
        </div>
        <p>Faltam: ${escapeHtml(profileCompletion.missing.join(", "))}.</p>
      `
      : "";
  }
  document.querySelector("#candidateHistory").innerHTML = candidate.history
    .map(
      ([title, description]) => `
        <div class="history-item">
          <strong>${title}</strong>
          <span>${description}</span>
        </div>
      `,
    )
    .join("");

  const inTalentBank = talents.some(
    (item) => normalize(item.email) === normalize(candidate.email),
  );
  const talentBank = document.querySelector("#candidateTalentBank");
  talentBank.textContent = inTalentBank ? "No banco de talentos" : "Fora do banco";
  talentBank.dataset.goPage = "talentos";
  talentBank.dataset.talentTab = "aprovados";

  const assignedTests = testsForCandidate(candidate);
  document.querySelector("#candidateTests").innerHTML = assignedTests.length
    ? assignedTests
        .map((entry) => {
          const detail =
            entry.score != null ? `${entry.status} · ${entry.score}%` : entry.status;
          return `
            <button class="candidate-test" type="button" data-open-test="${entry.test.id}">
              <strong>${entry.test.title}</strong>
              <span>${detail}</span>
            </button>
          `;
        })
        .join("")
    : `<p class="candidate-tests-empty">Nenhum teste técnico neste processo.</p>`;

  const candidateInterviews = interviews.filter(
    (item) =>
      item.candidateId === candidate.id ||
      (item.name === candidate.name && item.vacancy === candidate.vacancy),
  );
  const interviewGroups = {
    Próximas: candidateInterviews.filter((item) =>
      ["Agendada", "Confirmada", "Aguardando"].includes(item.status || "Agendada"),
    ),
    Realizadas: candidateInterviews.filter((item) =>
      ["Realizada", "Concluída"].includes(item.status),
    ),
    Canceladas: candidateInterviews.filter((item) => item.status === "Cancelada"),
  };
  document.querySelector("#candidateInterviewsList").innerHTML = candidateInterviews.length
    ? Object.entries(interviewGroups)
        .map(
          ([label, items]) => `
            <div class="candidate-dossier-group">
              <h4>${label} <span>${items.length}</span></h4>
              ${
                items.length
                  ? items
                      .map(
                        (item) => `
                          <button type="button" class="candidate-dossier-list-item is-button" data-open-interview="${item.id}">
                            <div>
                              <strong>${escapeHtml(item.type || "Entrevista")}</strong>
                              <span>${formatInterviewWhen(item.at)}</span>
                            </div>
                            <span class="role-tag">${escapeHtml(item.status || "Agendada")}</span>
                          </button>
                        `,
                      )
                      .join("")
                  : `<p class="candidate-dossier-empty">Nenhuma entrevista nesta seção.</p>`
              }
            </div>
          `,
        )
        .join("")
    : `<p class="candidate-dossier-empty">Nenhuma entrevista registrada.</p>`;

  const fit = candidate.fitCultural;
  document.querySelector("#candidateFitContent").innerHTML =
    fit == null
      ? `<p class="candidate-dossier-empty">Fit Cultural ainda não aplicado.</p>`
      : `
        <div class="candidate-fit-score"><strong>${fit}%</strong><span>Resultado geral</span></div>
        <div class="candidate-fit-pillars">
          <span>Colaboração <strong>${Math.min(100, fit + 4)}%</strong></span>
          <span>Adaptabilidade <strong>${Math.max(0, fit - 3)}%</strong></span>
          <span>Comunicação <strong>${Math.min(100, fit + 1)}%</strong></span>
        </div>
        <p>Respostas e pilares consolidados nesta avaliação.</p>
      `;

  const documentChecklist = ensureCandidateDocuments(candidate);
  document.querySelector("#candidateDocumentsList").innerHTML = documentChecklist
    .map(
      (doc) => `
        <article class="candidate-dossier-list-item">
          <div>
            <strong>${escapeHtml(doc.name)}</strong>
            <span>${doc.fileName ? escapeHtml(doc.fileName) : "Aguardando envio"}</span>
          </div>
          <div class="candidate-doc-actions">
            <button type="button" class="role-tag is-doc-${normalize(doc.status)}" data-doc-status="${doc.id}" title="Alterar status">
              ${escapeHtml(doc.status)}
            </button>
            <button type="button" class="dialog-text-button" data-replace-doc="${doc.id}">
              ${doc.fileName ? "Substituir" : "Enviar"}
            </button>
          </div>
        </article>
      `,
    )
    .join("");

  const comments = ensureCandidateComments(candidate);
  const archivedCount = comments.filter((comment) => comment.archived).length;
  const visibleComments = comments.filter(
    (comment) => showArchivedCandidateComments || !comment.archived,
  );
  activityList.innerHTML =
    (archivedCount
      ? `<div class="candidate-comment-toolbar">
          <button type="button" id="toggleArchivedComments" class="dialog-text-button">
            ${showArchivedCandidateComments ? "Ocultar arquivados" : `Mostrar arquivados (${archivedCount})`}
          </button>
        </div>`
      : "") +
    (visibleComments.length
      ? visibleComments
          .map(
            (comment) => `
              <article class="activity-item candidate-comment-item${comment.archived ? " is-archived" : ""}" data-comment-id="${comment.id}">
                <span class="activity-avatar">${initials(comment.author)}</span>
                <div class="activity-copy">
                  <strong>${escapeHtml(comment.author)}</strong>
                  <p>${escapeHtml(comment.message)}</p>
                  <time>${escapeHtml(comment.archived ? "Arquivado" : comment.time)}</time>
                  <div class="candidate-comment-actions">
                    <button type="button" data-edit-comment="${comment.id}" ${comment.archived ? "disabled" : ""}>Editar</button>
                    <button type="button" data-archive-comment="${comment.id}">${comment.archived ? "Restaurar" : "Arquivar"}</button>
                  </div>
                </div>
              </article>
            `,
          )
          .join("")
      : `<p class="candidate-dossier-empty">Nenhum comentário ativo.</p>`);
  setCandidateDossierTab(selectedCandidateDossierTab);
}

function ensureCandidateDocuments(candidate) {
  if (!Array.isArray(candidate.documentChecklist) || !candidate.documentChecklist.length) {
    const uploaded = Array.isArray(candidate.documents) ? candidate.documents : [];
    candidate.documentChecklist = [
      { id: "rg", name: "Documento de identidade", status: "Pendente", fileName: "" },
      { id: "cpf", name: "CPF", status: "Pendente", fileName: "" },
      { id: "comprovante", name: "Comprovante de residência", status: "Pendente", fileName: "" },
      { id: "contrato", name: "Documentos pré-admissionais", status: "Pendente", fileName: "" },
    ];
    uploaded.forEach((fileName, index) => {
      const target = candidate.documentChecklist[index] || candidate.documentChecklist[0];
      if (!target) return;
      target.fileName = fileName;
      target.status = "Enviado";
    });
  }
  return candidate.documentChecklist;
}

function setCandidateDossierTab(tab) {
  selectedCandidateDossierTab = tab;
  document.querySelectorAll("[data-candidate-tab]").forEach((button) => {
    const active = button.dataset.candidateTab === tab;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-candidate-panel]").forEach((panel) => {
    const active = panel.dataset.candidatePanel === tab;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
}

function openCandidate(candidateId) {
  const candidate = candidates.find((item) => item.id === candidateId);
  if (!candidate) return;
  selectedCandidateId = candidateId;
  document.querySelectorAll(".pipeline-card").forEach((card) => {
    card.classList.toggle(
      "selected",
      Number(card.dataset.candidateId) === candidateId,
    );
  });
  renderCandidateDetails(candidate);
  selectedCandidateDossierTab = "overview";
  setCandidateDossierTab("overview");
  setCandidateActivityCollapsed(false);
  closeCandidateMoreActions();
  candidateDialog.showModal();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatBRDate(key) {
  if (!key) return "";
  const [year, month, day] = key.split("-");
  return `${day}/${month}/${year}`;
}

function closeOverlayDialogs() {
  [datePickerDialog, timePickerDialog, interviewDialog, contactDialog, offerFormDialog, offerDialog, dismissDialog, lgpdDialog, bookingDialog, document.querySelector("#blockDialog"), document.querySelector("#moveStageDialog"), document.querySelector("#pipelineActionDialog"), document.querySelector("#pipelineFiltersDialog"), document.querySelector("#interviewConflictDialog"), document.querySelector("#interviewCancelDialog"), document.querySelector("#candidateRescheduleDialog")].forEach(
    (dialog) => {
      if (dialog?.open) dialog.close();
    },
  );
}

function formatOfferMoney(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}

function formatOfferWhen(iso) {
  const date = new Date(iso);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month} às ${hours}:${minutes}`;
}

function offerDetailsMarkup(offer) {
  return `<p><strong>Valor:</strong> ${formatOfferMoney(offer.amount)}</p>
    <p><strong>Modalidade:</strong> ${offer.workModel}</p>
    <p><strong>Contratação:</strong> ${offer.contract}</p>`;
}

function renderOfferDialog(candidate) {
  const offer = candidate.proposal;
  const summary = document.querySelector("#offerSummary");
  const history = document.querySelector("#offerHistory");
  const attachLabel = document.querySelector("#offerAttachLabel");
  const statusPill = document.querySelector("#offerStatusPill");
  const candidateActions = document.querySelector("#offerCandidateActions");

  if (offer?.amount) {
    summary.hidden = false;
    summary.innerHTML = offerDetailsMarkup(offer);
  } else {
    summary.hidden = true;
    summary.innerHTML = "";
  }

  if (statusPill) {
    if (offer?.status) {
      statusPill.hidden = false;
      statusPill.textContent = offerStatusLabel(offer.status);
      statusPill.className = `offer-status status-${offer.status}`;
    } else {
      statusPill.hidden = true;
    }
  }
  if (candidateActions) candidateActions.hidden = !offer?.status;

  const sends = offer?.sends || [];
  history.innerHTML = sends.length
    ? sends
        .map(
          (item) => `
            <article class="offer-history-card">
              <h3>${candidate.name} — Proposta</h3>
              <p>Proposta enviada:</p>
              ${offerDetailsMarkup(item)}
              <time>${formatOfferWhen(item.at)}</time>
            </article>
          `,
        )
        .join("")
    : `<p class="offer-history-empty">Nenhuma proposta enviada ainda.</p>`;

  attachLabel.textContent = offer?.pendingPdf ? offer.pendingPdf : "Anexar PDF";
}

function openOfferDialog(candidate, options = {}) {
  selectedCandidateId = candidate.id;
  document.querySelector("#offerMessage").value = "";
  renderOfferDialog(candidate);
  offerDialog.showModal();
  if (options.compose) openOfferForm(candidate);
}

function openOfferForm(candidate) {
  const offer = candidate.proposal;
  document.querySelector("#offerAmount").value = offer?.amount || "";
  document.querySelector("#offerWorkModel").value = offer?.workModel || "Presencial";
  document.querySelector("#offerContract").value = offer?.contract || "CLT";
  offerFormDialog.showModal();
}

function removeCandidateFromPipeline(candidate) {
  const index = candidates.findIndex((item) => item.id === candidate.id);
  if (index >= 0) candidates.splice(index, 1);
  selectedCandidateId = null;
  closeOverlayDialogs();
  if (candidateDialog.open) candidateDialog.close();
  const job = jobs.find((item) => item.title === candidate.vacancy);
  if (job) syncJobMetrics(job);
  renderPipeline();
  renderJobs();
  renderDashboard();
}

function openBlockDialog(candidate) {
  pendingBlockCandidate = candidate;
  selectedActionCandidate = candidate;
  selectedCandidateId = candidate.id;
  document.querySelector("#blockCandidateLabel").textContent =
    `${candidate.name} · ${candidate.vacancy || ""}`;
  document.querySelector("#blockReasonSelect").value = "";
  document.querySelector("#blockReasonNote").value = "";
  document.querySelector("#blockDialog").showModal();
}

function blockCandidate(candidate, reason, note = "") {
  if (!reason) {
    openBlockDialog(candidate);
    return;
  }
  const motivo = note ? `${reason} — ${note}` : reason;
  const existing = talents.find(
    (item) => normalize(item.email) === normalize(candidate.email),
  );
  if (existing) {
    existing.status = "bloqueados";
    existing.motivo = motivo;
  } else {
    talents.unshift({
      id: Date.now(),
      name: candidate.name,
      email: candidate.email,
      status: "bloqueados",
      motivo,
    });
  }
  if (candidate.history) candidate.history.unshift(["Bloqueio", `${motivo} · agora`]);
  renderTalents();
  document.querySelector("#blockDialog")?.close();
  pendingBlockCandidate = null;
  if (candidateDialog.open) candidateDialog.close();
  if (entityDialog.open) entityDialog.close();
  goToPage("talentos", { talentTab: "bloqueados" });
  showToast("Candidato bloqueado", `${candidate.name} foi para Bloqueados.`);
}

function openDismissDialog(candidate) {
  pendingDismissCandidate = candidate;
  selectedActionCandidate = candidate;
  selectedCandidateId = candidate.id;
  document.querySelector("#dismissCandidateLabel").textContent =
    `${candidate.name} · ${candidate.vacancy}`;
  const select = document.querySelector("#dismissReasonSelect");
  select.innerHTML = [
    '<option value="">Selecione um motivo...</option>',
    ...rejectionReasons
      .filter((item) => item.active)
      .map((item) => {
        const label = item.name.split("\n")[0].slice(0, 80);
        return `<option value="${escapeHtml(label)}">${escapeHtml(label)}</option>`;
      }),
  ].join("");
  document.querySelector("#dismissReasonNote").value = "";
  dismissDialog.showModal();
}

function dismissCandidate(candidate, reason, note = "") {
  if (!reason) {
    openDismissDialog(candidate);
    return;
  }
  const dismissReason = note ? `${reason} — ${note}` : reason;
  const exists = results.find((item) => normalize(item.email) === normalize(candidate.email) && item.status === "dispensados");
  if (!exists) {
    results.unshift({
      id: Date.now(),
      name: candidate.name,
      email: candidate.email,
      vacancy: candidate.vacancy,
      status: "dispensados",
      dismissReason,
      history: [
        ["Dispensa", `${dismissReason} · Larissa Dias · agora`],
        ...(candidate.history || []),
      ],
    });
  } else {
    exists.dismissReason = dismissReason;
    exists.history = [["Dispensa", `${dismissReason} · Larissa Dias · agora`], ...(exists.history || [])];
  }
  removeCandidateFromPipeline(candidate);
  pendingDismissCandidate = null;
  if (dismissDialog?.open) dismissDialog.close();
  renderResults();
  goToPage("resultados", { resultTab: "dispensados" });
  showToast("Candidato dispensado", `${candidate.name} foi para Dispensados.`);
}

function openManagerDialog(candidate) {
  selectedActionCandidate = candidate;
  selectedCandidateId = candidate.id;
  document.querySelector("#managerCandidateLabel").textContent =
    `${candidate.name} · ${candidate.vacancy}`;
  document.querySelector("#managerList").innerHTML = managers
    .map(
      (manager) => `
        <button type="button" class="manager-option${candidate.manager === manager.name ? " is-selected" : ""}" data-manager-id="${manager.id}">
          <strong>${manager.name}</strong>
          <span>${manager.role}</span>
        </button>
      `,
    )
    .join("");
  document.querySelector("#managerDialog").showModal();
}

function hideCandidate(candidate) {
  const exists = results.some((item) => normalize(item.email) === normalize(candidate.email));
  if (!exists) {
    results.unshift({
      id: Date.now(),
      name: candidate.name,
      email: candidate.email,
      vacancy: candidate.vacancy,
      status: "ocultados",
      stage: candidate.stage,
    });
  }
  expandedCardId = null;
  expandedCardPanel = "";
  removeCandidateFromPipeline(candidate);
  renderResults();
  goToPage("resultados", { resultTab: "ocultados" });
  showToast("Candidato ocultado", `${candidate.name} foi para Ocultados.`);
}

function hireCandidate(candidate) {
  if (!candidate.proposal?.amount) {
    showToast("Proposta pendente", "Cadastre e envie uma proposta antes de contratar.");
    openOfferDialog(candidate, { compose: true });
    return;
  }
  const job = jobs.find((item) => item.title === candidate.vacancy);
  if (!job) {
    showToast("Vaga não encontrada", "Não foi possível localizar a vaga deste candidato.");
    return;
  }
  if (!jobCanHire(job)) {
    const message =
      jobRemainingCount(job) <= 0
        ? "Todas as posições desta vaga já foram preenchidas."
        : "Esta vaga não permite concluir contratações no status atual.";
    showToast("Contratação indisponível", message);
    return;
  }
  if (
    candidateDialog.open &&
    !window.confirm(`Confirmar contratação de ${candidate.name} para ${job.title}?`)
  ) {
    return;
  }
  if (candidate.proposal.status !== "aceita") {
    showToast(
      "Proposta ainda não aceita",
      `Status atual: ${offerStatusLabel(candidate.proposal.status || "enviada")}. Contratação liberada com aviso.`,
    );
  }
  const exists = results.some(
    (item) =>
      item.status === "contratados" &&
      normalize(item.email) === normalize(candidate.email) &&
      (item.jobId === job.id ||
        (item.jobId == null && item.vacancy === job.title)),
  );
  if (!exists) {
    results.unshift({
      id: Date.now(),
      jobId: job.id,
      name: candidate.name,
      email: candidate.email,
      vacancy: job.title,
      status: "contratados",
      proposal: candidate.proposal.amount,
      workModel: candidate.proposal.workModel,
      contract: candidate.proposal.contract,
    });
  }
  removeCandidateFromPipeline(candidate);
  syncJobMetrics(job);
  pushJobHistory(job, "Contratação", `${candidate.name} contratado · ${jobPositionsLabel(job)}`);
  maybeSuggestJobClose(job);
  refreshJobViews(job);
  const remaining = jobRemainingCount(job);
  showToast(
    "Candidato contratado",
    `${candidate.name} contratado. Posições: ${jobPositionsLabel(job)}${
      remaining === 0 ? " · considere encerrar a vaga" : ""
    }.`,
  );
}

function meetFromLink(link) {
  const value = normalize(link);
  if (value.includes("teams")) return "Teams";
  if (value.includes("meet")) return "Meet";
  return link ? "Meet" : "";
}

function syncInterviewPickerLabels() {
  document.querySelector("#interviewDateLabel").textContent = interviewDate
    ? formatBRDate(interviewDate)
    : "Escolher data";
  document.querySelector("#interviewTimeLabel").textContent = interviewTime || "Escolher horário";
  const endInput = document.querySelector("#interviewTimeEndInput");
  if (endInput && interviewTimeEnd) endInput.value = interviewTimeEnd;
}

function interviewInterviewerOptions() {
  return [
    ...new Set([
      ...managers.map((item) => item.name),
      ...settingsManagers.map((item) => item.name),
      "Mariana Costa",
    ]),
  ];
}

function fillInterviewSheetOptions(selected = interviewSheets[0]) {
  const select = document.querySelector("#interviewSheet");
  if (!select) return;
  select.innerHTML = interviewSheets
    .map(
      (sheet) =>
        `<option value="${escapeHtml(sheet)}"${sheet === selected ? " selected" : ""}>${escapeHtml(sheet)}</option>`,
    )
    .join("");
}

function fillInterviewStageOptions(selected = "") {
  const select = document.querySelector("#interviewStage");
  if (!select) return;
  const value = selected || "Entrevista RH";
  select.innerHTML = pipelineStages
    .map(
      (stage) =>
        `<option value="${escapeHtml(stage)}"${stage === value ? " selected" : ""}>${escapeHtml(stage)}</option>`,
    )
    .join("");
}

function fillInterviewInterviewers(selected = ["Larissa Dias"]) {
  const list = document.querySelector("#interviewInterviewersList");
  if (!list) return;
  const chosen = new Set(selected);
  list.innerHTML = interviewInterviewerOptions()
    .map(
      (name) => `
        <label class="interview-interviewer-option">
          <input type="checkbox" name="interviewInterviewer" value="${escapeHtml(name)}"${chosen.has(name) ? " checked" : ""} />
          <span>${escapeHtml(name)}</span>
        </label>
      `,
    )
    .join("");
}

function syncInterviewModalityFields() {
  const modality = document.querySelector("#interviewModality")?.value || "Videochamada";
  const locationWrap = document.querySelector("#interviewLocationWrap");
  const linkWrap = document.querySelector("#interviewLinkWrap");
  if (locationWrap) locationWrap.hidden = modality !== "Presencial";
  if (linkWrap) linkWrap.hidden = modality === "Presencial";
}

function defaultInterviewTimeEnd(startTime) {
  if (!startTime) return "";
  const [hours, minutes] = startTime.split(":").map(Number);
  const total = hours * 60 + minutes + 60;
  const endHours = Math.floor(total / 60) % 24;
  const endMinutes = total % 60;
  return `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")}`;
}

function readInterviewFormDraft() {
  const candidate =
    candidates.find((item) => item.id === selectedCandidateId) || selectedActionCandidate;
  const endValue =
    document.querySelector("#interviewTimeEndInput")?.value || interviewTimeEnd || "";
  interviewTimeEnd = endValue;
  const interviewers = [
    ...document.querySelectorAll("[name='interviewInterviewer']:checked"),
  ].map((input) => input.value);
  return {
    candidateId: candidate?.id,
    name: candidate?.name,
    vacancy:
      document.querySelector("#interviewVacancy")?.value || candidate?.vacancy || "",
    stage: document.querySelector("#interviewStage")?.value || candidate?.stage || "",
    modality: document.querySelector("#interviewModality")?.value || "Videochamada",
    at: interviewDate && interviewTime ? `${interviewDate}T${interviewTime}:00` : "",
    endAt: interviewDate && endValue ? `${interviewDate}T${endValue}:00` : "",
    interviewers,
    location: document.querySelector("#interviewLocation")?.value.trim() || "",
    link: document.querySelector("#interviewLink")?.value.trim() || "",
    sheet: document.querySelector("#interviewSheet")?.value || interviewSheets[0],
    notes: document.querySelector("#interviewNotes")?.value.trim() || "",
    candidateInstructions:
      document.querySelector("#interviewCandidateInstructions")?.value.trim() || "",
    sendInvite: Boolean(document.querySelector("#interviewSendInvite")?.checked),
  };
}

function openInterviewConflictDialog(conflicts) {
  const list = document.querySelector("#interviewConflictList");
  if (list) {
    list.innerHTML = conflicts
      .map(
        (item) => `
          <li>
            <strong>${escapeHtml(item.name)}</strong>
            <span>${escapeHtml(item.modality || item.stage || "")} · ${formatInterviewWhen(item.at)}–${(item.endAt || "").slice(11, 16)}</span>
            <span>${escapeHtml((item.interviewers || []).join(", "))}</span>
          </li>
        `,
      )
      .join("");
  }
  document.querySelector("#interviewConflictDialog")?.showModal();
}

function refreshInterviewSurfaces(item) {
  renderAgenda();
  renderPipeline();
  if (item && selectedInterviewDetailId === item.id) renderInterviewDetail();
  const candidate = candidates.find(
    (entry) => entry.id === (item?.candidateId || selectedCandidateId),
  );
  if (candidateDialog?.open && candidate) renderCandidateDetails(candidate);
  if (typeof renderCandidateInterviews === "function") renderCandidateInterviews();
}

function openInterviewScheduler(candidate) {
  interviewFormMode = "create";
  editingInterviewId = null;
  pendingInterviewForceConflict = false;
  selectedActionCandidate = candidate;
  selectedCandidateId = candidate.id;
  interviewDate = "";
  interviewTime = "";
  interviewTimeEnd = "";
  document.querySelector("#interviewDialogTitle").textContent = "Agendar entrevista";
  document.querySelector("#interviewSubmitBtn").textContent = "Agendar";
  document.querySelector("#interviewCandidateLabel").textContent =
    `${candidate.name} · ${candidate.vacancy}`;
  document.querySelector("#interviewVacancy").value = candidate.vacancy || "";
  fillInterviewStageOptions(candidate.stage || "Entrevista RH");
  document.querySelector("#interviewModality").value = "Videochamada";
  fillInterviewInterviewers([candidate.owner || candidate.manager || "Larissa Dias"]);
  fillInterviewSheetOptions(interviewSheets[0]);
  document.querySelector("#interviewLink").value = "";
  document.querySelector("#interviewLocation").value = "";
  document.querySelector("#interviewNotes").value = "";
  document.querySelector("#interviewCandidateInstructions").value = "";
  document.querySelector("#interviewTimeEndInput").value = "";
  document.querySelector("#interviewSendInvite").checked = true;
  const allowBooking = document.querySelector("#interviewAllowBooking");
  if (allowBooking) allowBooking.checked = false;
  const bookingRow = document.querySelector("#bookingLinkRow");
  if (bookingRow) bookingRow.hidden = true;
  const bookingLink = document.querySelector("#interviewBookingLink");
  if (bookingLink) bookingLink.value = `https://portalrh.local/agendar/${candidate.id}`;
  syncInterviewModalityFields();
  syncInterviewPickerLabels();
  interviewDialog.showModal();
}

function openInterviewEditor(item, mode = "edit") {
  const candidate =
    candidates.find((entry) => entry.id === item.candidateId) ||
    ({
      id: item.candidateId,
      name: item.name,
      vacancy: item.vacancy,
      stage: item.stage,
      email: "",
    });
  interviewFormMode = mode;
  editingInterviewId = item.id;
  pendingInterviewForceConflict = false;
  selectedActionCandidate = candidate;
  selectedCandidateId = candidate.id;
  interviewDate = dayKey(item.at);
  interviewTime = String(item.at).slice(11, 16);
  interviewTimeEnd = String(item.endAt || "").slice(11, 16) || defaultInterviewTimeEnd(interviewTime);
  document.querySelector("#interviewDialogTitle").textContent =
    mode === "reschedule" ? "Reagendar entrevista" : "Editar entrevista";
  document.querySelector("#interviewSubmitBtn").textContent =
    mode === "reschedule" ? "Reagendar" : "Salvar";
  document.querySelector("#interviewCandidateLabel").textContent =
    `${item.name} · ${item.vacancy}`;
  document.querySelector("#interviewVacancy").value = item.vacancy || "";
  fillInterviewStageOptions(item.stage || candidate.stage || "Entrevista RH");
  document.querySelector("#interviewModality").value = item.modality || "Videochamada";
  fillInterviewInterviewers(item.interviewers || ["Larissa Dias"]);
  fillInterviewSheetOptions(item.sheet || interviewSheets[0]);
  document.querySelector("#interviewLink").value = item.link || "";
  document.querySelector("#interviewLocation").value = item.location || "";
  document.querySelector("#interviewNotes").value = item.notes || "";
  document.querySelector("#interviewCandidateInstructions").value =
    item.candidateInstructions || "";
  document.querySelector("#interviewTimeEndInput").value = interviewTimeEnd;
  document.querySelector("#interviewSendInvite").checked =
    mode === "reschedule" ? true : Boolean(item.inviteSent);
  syncInterviewModalityFields();
  syncInterviewPickerLabels();
  interviewDialog.showModal();
}

function renderDatePicker() {
  const year = datePickerCursor.getFullYear();
  const month = datePickerCursor.getMonth();
  const startPad = new Date(year, month, 1).getDay();
  document.querySelector("#datePickerMonth").textContent = `${monthNames[month]} ${year}`;
  const cells = [];
  for (let i = 0; i < 42; i += 1) {
    const date = new Date(year, month, i - startPad + 1);
    const key = dayKey(date);
    const classes = ["calendar-day"];
    if (date.getMonth() !== month) classes.push("is-muted");
    if (key === TODAY_KEY) classes.push("is-today");
    if (key === interviewDate) classes.push("is-selected");
    cells.push(
      `<button class="${classes.join(" ")}" type="button" data-pick-date="${key}">${date.getDate()}</button>`,
    );
  }
  document.querySelector("#datePickerGrid").innerHTML = cells.join("");
}

function renderTimeSlots() {
  const slots = [];
  for (let hour = 8; hour <= 18; hour += 1) {
    for (const minute of [0, 30]) {
      if (hour === 18 && minute === 30) continue;
      const value = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      const selected = value === interviewTime ? " is-selected" : "";
      slots.push(
        `<button class="time-slot${selected}" type="button" data-pick-time="${value}">${value}</button>`,
      );
    }
  }
  document.querySelector("#timeSlotGrid").innerHTML = slots.join("");
}

function syncBookingAvailability() {
  const enabled = document.querySelector("#interviewAllowBooking")?.checked;
  const row = document.querySelector("#bookingLinkRow");
  if (row) row.hidden = !enabled;
}

function renderBookingSlots() {
  const slots = ["09:00", "10:30", "14:00", "15:30", "16:00"];
  const duration = "60";
  document.querySelector("#bookingSlotGrid").innerHTML = slots
    .map((slot) => {
      const selected = slot === selectedBookingSlot ? " is-selected" : "";
      return `<button type="button" class="time-slot${selected}" data-booking-slot="${slot}">${slot} · ${duration} min</button>`;
    })
    .join("");
  document.querySelector("#confirmBooking").disabled = !selectedBookingSlot;
}

function openBookingDialog() {
  const candidate = candidates.find((item) => item.id === selectedCandidateId) || selectedActionCandidate;
  document.querySelector("#bookingCandidateLabel").textContent = candidate
    ? `${candidate.name} · escolha um horário`
    : "Disponibilidade";
  selectedBookingSlot = "";
  renderBookingSlots();
  bookingDialog.showModal();
}

function confirmBookingSlot() {
  if (!selectedBookingSlot) return;
  interviewDate = interviewDate || TODAY_KEY;
  interviewTime = selectedBookingSlot;
  syncInterviewPickerLabels();
  bookingDialog.close();
  showToast("Horário escolhido", `Candidato selecionou ${formatBRDate(interviewDate)} às ${interviewTime}.`);
}

function openCandidateResume(candidate, options = {}) {
  const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Currículo · ${escapeHtml(candidate.name)}</title>
  <style>
    body { font-family: Inter, Arial, sans-serif; max-width: 720px; margin: 40px auto; padding: 0 24px 48px; color: #1c2430; }
    h1 { margin: 0 0 6px; font-size: 28px; }
    .role { margin: 0 0 18px; color: #5b6573; }
    .meta { display: grid; gap: 4px; margin-bottom: 28px; color: #3d4654; }
    section { margin-top: 22px; }
    h2 { margin: 0 0 8px; font-size: 15px; color: #194A92; }
    p { margin: 0; line-height: 1.55; }
  </style>
</head>
<body>
  <h1>${escapeHtml(candidate.name)}</h1>
  <p class="role">${escapeHtml(candidate.vacancy)}</p>
  <div class="meta">
    <span>${escapeHtml(candidate.email)}</span>
    <span>${escapeHtml(candidate.phone || "")}</span>
  </div>
  <section>
    <h2>Resumo</h2>
    <p>Currículo anexado ao processo seletivo de ${escapeHtml(candidate.vacancy)}.</p>
  </section>
  <section>
    <h2>Contato</h2>
    <p>${escapeHtml(candidate.email)}${candidate.phone ? ` · ${escapeHtml(candidate.phone)}` : ""}</p>
  </section>
</body>
</html>`;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  if (options.download) {
    const link = document.createElement("a");
    link.href = url;
    link.download = `curriculo-${normalize(candidate.name).replaceAll(" ", "-") || "candidato"}.html`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    showToast("Currículo", `Download iniciado para ${candidate.name}.`);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    return;
  }
  const popup = window.open(url, "_blank", "noopener");
  if (!popup) {
    showToast("Currículo", "Permita pop-ups para abrir o currículo em outra aba.");
  }
}

function openPipelineActionDialog(candidate, action, config) {
  pendingPipelineAction = { candidate, action, config };
  selectedCandidateId = candidate.id;
  document.querySelector("#pipelineActionTitle").textContent = config.title;
  document.querySelector("#pipelineActionCandidateLabel").textContent =
    `${candidate.name} · ${candidate.vacancy}`;
  const fieldWrap = document.querySelector("#pipelineActionFieldWrap");
  const selectWrap = document.querySelector("#pipelineActionSelectWrap");
  const field = document.querySelector("#pipelineActionField");
  const select = document.querySelector("#pipelineActionSelect");
  const note = document.querySelector("#pipelineActionNote");
  if (note) note.value = "";
  if (config.mode === "select") {
    fieldWrap.hidden = true;
    selectWrap.hidden = false;
    document.querySelector("#pipelineActionSelectLabel").textContent = config.label;
    select.innerHTML = config.options
      .map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
      .join("");
    select.required = true;
    field.required = false;
  } else {
    fieldWrap.hidden = false;
    selectWrap.hidden = true;
    document.querySelector("#pipelineActionFieldLabel").textContent = config.label;
    field.value = config.defaultValue || "";
    field.type = config.inputType || "text";
    field.placeholder = config.placeholder || "";
    field.required = config.required !== false;
    select.required = false;
  }
  document.querySelector("#confirmPipelineAction").textContent = config.confirmLabel || "Confirmar";
  document.querySelector("#pipelineActionDialog")?.showModal();
}

function registerCandidateOperationalEvent(candidate, title, detail) {
  candidate.history.unshift([title, `${detail} · agora`]);
  candidate.activities.unshift(["LD", "Larissa Dias", detail, "Agora"]);
  candidate.lastAction = {
    type: title,
    detail,
    at: `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`,
  };
}

function approveCandidateToTalentBank(candidate) {
  const exists = talents.some((item) => normalize(item.email) === normalize(candidate.email));
  if (!exists) {
    talents.unshift({
      id: Date.now(),
      name: candidate.name,
      email: candidate.email,
      status: "aprovados",
      motivo: `Aprovado a partir da vaga ${candidate.vacancy}.`,
    });
    renderTalents();
  }
  showToast(
    "Banco de talentos",
    exists ? `${candidate.name} já está no banco.` : `${candidate.name} foi adicionado aos aprovados.`,
  );
  if (candidateDialog.open) candidateDialog.close();
  goToPage("talentos", { talentTab: "aprovados" });
}

function runPipelineCandidateAction(candidate, action) {
  if (!candidate || !action) return;

  if (action === "perfil" || action === "Visualizar perfil") {
    openCandidate(candidate.id);
    return;
  }
  if (action === "curriculo" || action === "Currículo") {
    openCandidateResume(candidate);
    return;
  }
  if (action === "baixar-curriculo" || action === "Baixar currículo") {
    openCandidateResume(candidate, { download: true });
    return;
  }
  if (action === "proxima-etapa" || action === "Próxima etapa") {
    const next = neighborStage(candidate.stage, 1);
    if (!next) {
      showToast("Etapa", "Este candidato já está na última etapa.");
      return;
    }
    openMoveStageDialog(candidate, next);
    return;
  }
  if (action === "etapa-anterior" || action === "Etapa anterior") {
    const previous = neighborStage(candidate.stage, -1);
    if (!previous) {
      showToast("Etapa", "Este candidato já está na primeira etapa.");
      return;
    }
    openMoveStageDialog(candidate, previous);
    return;
  }
  if (action === "escolher-etapa" || action === "Escolher etapa") {
    openMoveStageDialog(candidate);
    return;
  }
  if (action === "entrevista" || action === "Entrevista") {
    openInterviewScheduler(candidate);
    return;
  }
  if (action === "ver-entrevistas" || action === "Ver entrevistas") {
    goToPage("entrevistas");
    showToast("Entrevistas", `Mostrando agenda relacionada a ${candidate.name}.`);
    return;
  }
  if (action === "aplicar-teste" || action === "Aplicar teste") {
    openPipelineActionDialog(candidate, action, {
      title: "Aplicar teste técnico",
      label: "Teste",
      mode: "select",
      options: tests.filter((item) => item.active !== false).map((item) => item.title),
      confirmLabel: "Aplicar teste",
    });
    return;
  }
  if (action === "aplicar-fit" || action === "Aplicar Fit Cultural") {
    openPipelineActionDialog(candidate, action, {
      title: "Aplicar Fit Cultural",
      label: "Pontuação (0 a 100)",
      inputType: "number",
      defaultValue: candidate.fitCultural ?? 75,
      placeholder: "75",
      confirmLabel: "Salvar Fit Cultural",
    });
    return;
  }
  if (action === "avaliar" || action === "Avaliar") {
    openPipelineActionDialog(candidate, action, {
      title: "Enviar avaliação",
      label: "Tipo de avaliação",
      mode: "select",
      options: [
        "Teste técnico",
        "Teste comportamental",
        "Avaliação de competências",
        "Fit Cultural",
      ],
      confirmLabel: "Continuar",
    });
    return;
  }
  if (action === "Adicionar comentário") {
    setCandidateDossierTab("comments");
    document.querySelector("#commentInput")?.focus();
    return;
  }
  if (action === "adicionar-tag" || action === "Adicionar tag") {
    openPipelineActionDialog(candidate, action, {
      title: "Adicionar tag",
      label: "Tag",
      placeholder: "Ex.: Prioridade",
      confirmLabel: "Adicionar",
    });
    return;
  }
  if (action === "alterar-responsavel" || action === "Alterar responsável") {
    openPipelineActionDialog(candidate, action, {
      title: "Alterar responsável",
      label: "Responsável RH",
      mode: "select",
      options: ["Larissa Dias", "Camila Monteiro", "Mariana Costa", "Eduardo Ribeiro"],
      confirmLabel: "Atualizar responsável",
    });
    return;
  }
  if (action === "reprovar" || action === "Reprovar" || action === "dispensar" || action === "Dispensar") {
    if (
      candidateDialog.open &&
      !window.confirm(`Reprovar ${candidate.name}? Esta ação remove o candidato da pipeline.`)
    ) {
      return;
    }
    dismissCandidate(candidate);
    return;
  }
  if (action === "desistencia" || action === "Desistência") {
    openPipelineActionDialog(candidate, action, {
      title: "Registrar desistência",
      label: "Motivo",
      placeholder: "Ex.: Aceitou outra proposta",
      confirmLabel: "Registrar desistência",
    });
    return;
  }
  if (action === "nao-comparecimento" || action === "Não comparecimento") {
    openPipelineActionDialog(candidate, action, {
      title: "Registrar não comparecimento",
      label: "Motivo",
      placeholder: "Ex.: Ausente na entrevista",
      confirmLabel: "Registrar",
    });
    return;
  }
  if (action === "banco" || action === "Aprovar no banco") {
    if (
      candidateDialog.open &&
      !window.confirm(`Enviar ${candidate.name} ao Banco de Talentos?`)
    ) {
      return;
    }
    approveCandidateToTalentBank(candidate);
    return;
  }
  if (action === "ocultar" || action === "Ocultar") {
    hideCandidate(candidate);
    return;
  }
  if (action === "revogar" || action === "Revogar") {
    if (!candidate.lastAction) {
      showToast("Revogar", "Não há ação recente para revogar.");
      return;
    }
    if (candidate.lastAction.type === "move" && candidate.lastAction.from) {
      candidate.stage = candidate.lastAction.from;
      candidate.stageEnteredAt = `${TODAY_KEY}T${new Date().toTimeString().slice(0, 8)}`;
    }
    registerCandidateOperationalEvent(
      candidate,
      "Ação revogada",
      `Revogou: ${candidate.lastAction.type}${candidate.lastAction.detail ? ` · ${candidate.lastAction.detail}` : ""}`,
    );
    candidate.lastAction = null;
    renderPipeline();
    if (candidateDialog.open) renderCandidateDetails(candidate);
    showToast("Ação revogada", "A última ação operacional foi desfeita no protótipo.");
    return;
  }
  if (action === "compartilhar" || action === "Compartilhar") {
    const shareUrl = `${location.origin}${location.pathname}#candidato-${candidate.id}`;
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(shareUrl).catch(() => {});
    }
    registerCandidateOperationalEvent(candidate, "Link público", shareUrl);
    showToast("Link público", "URL demonstrativa copiada para a área de transferência.");
    return;
  }
  if (action === "Contactar") {
    openContactDialog(candidate);
    return;
  }
  if (action === "Bloquear") {
    openBlockDialog(candidate);
    return;
  }
  if (action === "Gestor") {
    openManagerDialog(candidate);
    return;
  }
  if (action === "comentarios") {
    toggleCardPanel(candidate.id, "comments");
    return;
  }
  if (action === "historico") {
    toggleCardPanel(candidate.id, "history");
    return;
  }
  if (action === "ver-proposta") {
    openOfferDialog(candidate, { compose: !candidate.proposal?.amount });
    return;
  }
  if (action === "contratar") {
    hireCandidate(candidate);
    return;
  }
  showToast(action, `${action} selecionado para ${candidate.name}.`);
}

function confirmPipelineAction(event) {
  event.preventDefault();
  if (!pendingPipelineAction) return;
  const { candidate, action, config } = pendingPipelineAction;
  const note = document.querySelector("#pipelineActionNote")?.value.trim() || "";
  const fieldValue = document.querySelector("#pipelineActionField")?.value.trim() || "";
  const selectValue = document.querySelector("#pipelineActionSelect")?.value || "";
  const value = config.mode === "select" ? selectValue : fieldValue;
  if (!value) return;

  if (action === "aplicar-teste" || action === "Aplicar teste") {
    const test = tests.find((item) => item.title === value);
    if (test) {
      const current = candidateTestMap[candidate.id] || [];
      if (!current.some((item) => item.id === test.id)) {
        candidateTestMap[candidate.id] = [...current, { id: test.id, status: "Pendente" }];
      }
    }
    if (!candidate.tags) candidate.tags = [];
    if (!candidate.tags.includes("Teste aplicado")) candidate.tags.push("Teste aplicado");
    registerCandidateOperationalEvent(candidate, "Teste aplicado", `Aplicou ${value}${note ? ` — ${note}` : ""}`);
    showToast("Teste aplicado", `${value} atribuído a ${candidate.name}.`);
  } else if (action === "aplicar-fit" || action === "Aplicar Fit Cultural") {
    const score = Math.max(0, Math.min(100, Number(value) || 0));
    candidate.fitCultural = score;
    if (!candidate.tags) candidate.tags = [];
    if (!candidate.tags.includes("Fit Cultural")) candidate.tags.push("Fit Cultural");
    registerCandidateOperationalEvent(candidate, "Fit Cultural", `Score ${score}%${note ? ` — ${note}` : ""}`);
    showToast("Fit Cultural", `Pontuação ${score}% registrada.`);
  } else if (action === "avaliar" || action === "Avaliar") {
    const current = candidateTestMap[candidate.id] || [];
    candidateTestMap[candidate.id] = [
      ...current,
      { id: `eval-${Date.now()}`, title: value, status: "Enviada" },
    ];
    candidate.evaluationStatus = "Enviada";
    if (!candidate.tags) candidate.tags = [];
    if (!candidate.tags.includes("Avaliação enviada")) candidate.tags.push("Avaliação enviada");
    if (value === "Fit Cultural" && !candidate.tags.includes("Fit Cultural")) {
      candidate.tags.push("Fit Cultural");
    }
    registerCandidateOperationalEvent(
      candidate,
      "Avaliação enviada",
      `${value}${note ? ` — ${note}` : ""}`,
    );
    showToast("Avaliação enviada", `${value} enviado para ${candidate.name}.`);
  } else if (action === "adicionar-tag" || action === "Adicionar tag") {
    if (!candidate.tags) candidate.tags = [];
    if (!candidate.tags.includes(value)) candidate.tags.push(value);
    registerCandidateOperationalEvent(candidate, "Tag adicionada", value);
    showToast("Tag", `Tag "${value}" adicionada.`);
  } else if (action === "alterar-responsavel" || action === "Alterar responsável") {
    candidate.owner = value;
    registerCandidateOperationalEvent(candidate, "Responsável", `Alterado para ${value}${note ? ` — ${note}` : ""}`);
    showToast("Responsável", `Responsável atualizado para ${value}.`);
  } else if (action === "desistencia" || action === "Desistência") {
    registerCandidateOperationalEvent(candidate, "Desistência", `${value}${note ? ` — ${note}` : ""}`);
    if (!candidate.tags) candidate.tags = [];
    if (!candidate.tags.includes("Desistência")) candidate.tags.push("Desistência");
    showToast("Desistência", "Registro salvo no histórico do candidato.");
  } else if (action === "nao-comparecimento" || action === "Não comparecimento") {
    registerCandidateOperationalEvent(candidate, "Não comparecimento", `${value}${note ? ` — ${note}` : ""}`);
    if (!candidate.tags) candidate.tags = [];
    if (!candidate.tags.includes("Não compareceu")) candidate.tags.push("Não compareceu");
    showToast("Não comparecimento", "Registro salvo no histórico do candidato.");
  }

  pendingPipelineAction = null;
  document.querySelector("#pipelineActionDialog")?.close();
  renderPipeline();
  if (candidateDialog.open && selectedCandidateId === candidate.id) {
    renderCandidateDetails(candidate);
    if (action === "avaliar" || action === "Avaliar") {
      setCandidateDossierTab("tests");
    }
  }
}

function contactPreviewText(candidate, message) {
  const body = message.trim() || "...";
  if (contactChannel === "whatsapp") {
    return `Olá ${candidate.name}! ${body} — Portal de Vagas`;
  }
  return `Olá ${candidate.name},\n\n${body}\n\nAtenciosamente,\nPortal de Vagas`;
}

function updateContactPreview() {
  const candidate = candidates.find((item) => item.id === selectedCandidateId) || selectedActionCandidate;
  const message = document.querySelector("#contactMessage").value;
  document.querySelector("#contactCharCount").textContent = `${message.length}/4000`;
  document.querySelector("#sendContact").disabled = !message.trim();
  const labels = { email: "Prévia do e-mail", whatsapp: "Prévia do WhatsApp" };
  const previewLabel = document.querySelector("#contactPreviewLabel");
  if (previewLabel) previewLabel.textContent = labels[contactChannel] || labels.email;
  if (!candidate) return;
  document.querySelector("#contactPreview").textContent = contactPreviewText(candidate, message);
}

function setContactChannel(channel) {
  contactChannel = channel === "whatsapp" ? "whatsapp" : "email";
  document.querySelectorAll("[data-contact-channel]").forEach((button) => {
    const active = button.dataset.contactChannel === contactChannel;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  updateContactPreview();
}

function openContactDialog(candidate) {
  selectedActionCandidate = candidate;
  selectedCandidateId = candidate.id;
  contactChannel = "email";
  setContactChannel("email");
  document.querySelector("#contactCandidateLabel").textContent =
    `${candidate.name} · ${candidate.vacancy || candidate.email}`;
  document.querySelector("#contactCandidateEmail").textContent = candidate.email;
  document.querySelector("#contactMessage").value = "";
  const warn = document.querySelector("#contactLgpdWarn");
  if (warn) warn.hidden = candidate.lgpdConsent !== false;
  if (candidate.lgpdConsent === false) {
    showToast("LGPD", "Candidato sem consentimento — revise antes de enviar.");
  }
  updateContactPreview();
  contactDialog.showModal();
}

function submitInterview(event) {
  event.preventDefault();
  const candidate =
    candidates.find((item) => item.id === selectedCandidateId) || selectedActionCandidate;
  if (!candidate && interviewFormMode === "create") return;

  const draft = readInterviewFormDraft();
  if (!draft.at || !draft.endAt) {
    showToast("Agenda incompleta", "Escolha a data e os horários de início e fim.");
    return;
  }
  if (new Date(draft.at) >= new Date(draft.endAt)) {
    showToast("Agenda inválida", "O horário final deve ser depois do início.");
    return;
  }
  if (!draft.interviewers.length) {
    showToast("Agenda incompleta", "Selecione ao menos um entrevistador.");
    return;
  }
  if (draft.modality === "Presencial" && !draft.location) {
    showToast("Agenda incompleta", "Informe o local da entrevista presencial.");
    return;
  }
  if (draft.modality === "Videochamada" && !draft.link) {
    showToast("Agenda incompleta", "Informe o link da videochamada.");
    return;
  }

  if (!pendingInterviewForceConflict) {
    const conflicts = findInterviewConflicts(draft, { ignoreId: editingInterviewId });
    if (conflicts.length) {
      openInterviewConflictDialog(conflicts);
      return;
    }
  }

  const durationMinutes = Math.max(
    15,
    Math.round((new Date(draft.endAt) - new Date(draft.at)) / 60000),
  );
  const statusFromInvite = draft.sendInvite ? "Aguardando confirmação" : "Agendada";
  const existing =
    editingInterviewId != null
      ? interviews.find((item) => item.id === editingInterviewId)
      : null;

  if (interviewFormMode === "edit" && existing) {
    const intervalChanged = existing.at !== draft.at || existing.endAt !== draft.endAt;
    Object.assign(existing, {
      name: draft.name || existing.name,
      vacancy: draft.vacancy || existing.vacancy,
      stage: draft.stage,
      modality: draft.modality,
      at: draft.at,
      endAt: draft.endAt,
      interviewers: draft.interviewers,
      location: draft.location,
      link: draft.link,
      meet: meetFromLink(draft.link),
      sheet: draft.sheet,
      notes: draft.notes,
      candidateInstructions: draft.candidateInstructions,
      duration: durationMinutes,
      inviteSent: draft.sendInvite || existing.inviteSent,
      type: draft.stage,
      owner: draft.interviewers[0] || existing.owner,
    });
    if (intervalChanged && interviewFormMode === "edit") {
      /* edit sem exigir novo status */
    }
    if (candidate) {
      candidate.history.unshift([
        "Entrevista editada",
        `${draft.modality} · ${formatInterviewWhen(draft.at)} · agora`,
      ]);
    }
    pendingInterviewForceConflict = false;
    document.querySelector("#interviewConflictDialog")?.close();
    closeOverlayDialogs();
    refreshInterviewSurfaces(existing);
    showToast("Entrevista atualizada", `${existing.name} · ${formatInterviewWhen(existing.at)}.`);
    return;
  }

  if (interviewFormMode === "reschedule" && existing) {
    Object.assign(existing, {
      stage: draft.stage,
      modality: draft.modality,
      at: draft.at,
      endAt: draft.endAt,
      interviewers: draft.interviewers,
      location: draft.location,
      link: draft.link,
      meet: meetFromLink(draft.link),
      sheet: draft.sheet,
      notes: draft.notes,
      candidateInstructions: draft.candidateInstructions,
      duration: durationMinutes,
      status: statusFromInvite,
      inviteSent: draft.sendInvite,
      waiting: draft.sendInvite,
      rescheduleRequest: null,
      type: draft.stage,
      owner: draft.interviewers[0] || existing.owner,
    });
    if (candidate) {
      candidate.history.unshift([
        "Entrevista reagendada",
        `${formatInterviewWhen(draft.at)} · agora`,
      ]);
      candidate.activities.unshift([
        "LD",
        "Larissa Dias",
        `Reagendou entrevista para ${formatInterviewWhen(draft.at)}`,
        "Agora",
      ]);
    }
    pendingInterviewForceConflict = false;
    document.querySelector("#interviewConflictDialog")?.close();
    closeOverlayDialogs();
    refreshInterviewSurfaces(existing);
    showToast(
      "Entrevista reagendada",
      draft.sendInvite
        ? `Convite enviado para ${candidate?.email || existing.name}.`
        : `${formatInterviewWhen(existing.at)}.`,
    );
    return;
  }

  const nextId = Math.max(...interviews.map((item) => item.id), 600) + 1;
  const created = normalizeInterviewRecord({
    id: nextId,
    name: draft.name || candidate.name,
    vacancy: draft.vacancy || candidate.vacancy,
    candidateId: draft.candidateId || candidate.id,
    stage: draft.stage,
    modality: draft.modality,
    at: draft.at,
    endAt: draft.endAt,
    interviewers: draft.interviewers,
    location: draft.location,
    link: draft.link,
    meet: meetFromLink(draft.link),
    sheet: draft.sheet,
    notes: draft.notes,
    candidateInstructions: draft.candidateInstructions,
    status: statusFromInvite,
    waiting: draft.sendInvite,
    inviteSent: draft.sendInvite,
    reminderSent: false,
    rescheduleRequest: null,
    cancelReason: "",
    startedAt: "",
    duration: durationMinutes,
    type: draft.stage,
    owner: draft.interviewers[0] || "Larissa Dias",
  });
  interviews.push(created);

  if (candidate?.stage === "Triagem") {
    updateCandidateStage(candidate, "Entrevista RH");
  }

  if (candidate) {
    candidate.history.unshift([
      draft.stage || "Entrevista",
      `${formatInterviewWhen(draft.at)}${draft.location ? ` · ${draft.location}` : ""}`,
    ]);
    candidate.activities.unshift([
      "LD",
      "Larissa Dias",
      `Agendou entrevista (${draft.modality}) para ${formatInterviewWhen(draft.at)}`,
      "Agora",
    ]);
  }

  pendingInterviewForceConflict = false;
  document.querySelector("#interviewConflictDialog")?.close();
  closeOverlayDialogs();
  refreshInterviewSurfaces(created);
  if (candidateDialog.open && candidate) {
    setCandidateDossierTab("interviews");
  }
  showToast(
    "Entrevista agendada",
    draft.sendInvite
      ? `Convite enviado para ${candidate.email}.`
      : `${draft.modality} marcada para ${formatInterviewWhen(draft.at)}.`,
  );
}

function showToast(title, message) {
  toast.querySelector("strong").textContent = title;
  toast.querySelector("small").textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(
    () => toast.classList.remove("visible"),
    3200,
  );
}

function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarOverlay.classList.remove("visible");
}

function isMobileNav() {
  return window.matchMedia("(max-width: 800px)").matches;
}

function setSidebarCollapsed(collapsed) {
  appShell.classList.toggle("is-sidebar-collapsed", collapsed);
  const label = collapsed ? "Abrir menu" : "Recolher menu";
  const icon = collapsed ? "›" : "‹";
  [menuButton, sidebarToggle].forEach((button) => {
    button.setAttribute("aria-label", label);
    button.setAttribute("aria-expanded", String(!collapsed));
  });
  sidebarToggle.querySelector("span").textContent = icon;
  window.localStorage.setItem(
    "portal-rh-sidebar",
    collapsed ? "collapsed" : "open",
  );
}

function toggleSidebar() {
  if (isMobileNav()) {
    const opening = !sidebar.classList.contains("open");
    sidebar.classList.toggle("open", opening);
    sidebarOverlay.classList.toggle("visible", opening);
    return;
  }

  setSidebarCollapsed(!appShell.classList.contains("is-sidebar-collapsed"));
}

function setCandidateSidebarCollapsed(collapsed) {
  candidatePortal.classList.toggle("is-sidebar-collapsed", collapsed);
  const label = collapsed ? "Abrir menu" : "Recolher menu";
  const icon = collapsed ? "›" : "‹";
  candidateSidebarToggle.setAttribute("aria-label", label);
  candidateSidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  candidateSidebarToggle.querySelector("span").textContent = icon;
  window.localStorage.setItem(
    "portal-candidato-sidebar",
    collapsed ? "collapsed" : "open",
  );
}

function toggleCandidateSidebar() {
  if (window.matchMedia("(max-width: 820px)").matches) return;
  setCandidateSidebarCollapsed(!candidatePortal.classList.contains("is-sidebar-collapsed"));
}

searchInput.addEventListener("input", renderJobs);
statusFilter.addEventListener("change", renderJobs);

document.querySelector("#clearFilters").addEventListener("click", () => {
  searchInput.value = "";
  statusFilter.value = "all";
  renderJobs();
  searchInput.focus();
});

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-view]")
      .forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    jobList.classList.toggle("grid-view", button.dataset.view === "grid");
  });
});

function renderNewJobStages() {
  const host = document.querySelector("#newJobStagesList");
  const hidden = document.querySelector("#newJobStages");
  if (!host || !hidden) return;
  const activeStages = pipelineStageCatalog.filter((item) => item.active);
  const selected = new Set(
    (hidden.value || "")
      .split("\n")
      .map((line) => line.replace(/^[-\s]+/, "").trim())
      .filter(Boolean),
  );
  if (!selected.size) {
    ["Triagem", "Entrevista RH", "Proposta"].forEach((name) => selected.add(name));
  }
  host.innerHTML = activeStages
    .map((stage) => {
      const checked = selected.has(stage.name);
      return `
        <button
          type="button"
          class="stage-pick-chip${checked ? " is-selected" : ""}"
          data-job-stage="${escapeHtml(stage.name)}"
          aria-pressed="${checked}"
        >${escapeHtml(stage.name)}</button>
      `;
    })
    .join("");
  syncNewJobStagesValue();
}

function syncNewJobStagesValue() {
  const hidden = document.querySelector("#newJobStages");
  if (!hidden) return;
  const selected = [...document.querySelectorAll("#newJobStagesList .stage-pick-chip.is-selected")].map(
    (button) => button.dataset.jobStage,
  );
  hidden.value = selected.map((name) => `- ${name}`).join("\n");
}

function renderNewJobCatalogs() {
  document.querySelector("#skillCatalog").innerHTML = skillOptions.map((name) => `<button type="button" class="catalog-chip${selectedSkills.includes(name) ? " is-selected" : ""}" data-skill="${name}">${name}</button>`).join("");
  document.querySelector("#selectedSkills").innerHTML = selectedSkills.map((name) => `<article><div><strong>${name}</strong><span>${["Comunicação", "Trabalho em equipe"].includes(name) ? "Comportamental" : "Técnica"}</span></div><button type="button" data-remove-skill="${name}" aria-label="Remover ${name}">×</button></article>`).join("");
  document.querySelector("#benefitCatalog").innerHTML = benefitOptions.map((name) => `<button type="button" class="catalog-chip${selectedBenefits.includes(name) ? " is-selected" : ""}" data-benefit="${name}">${name}</button>`).join("");
  document.querySelector("#newJobBenefits").value = selectedBenefits.map((name) => `- ${name}`).join("\n");
}

function openNewJobPage() {
  newJobFullForm.reset();
  selectedSkills = [];
  selectedBenefits = [];
  document.querySelector("#newJobStages").value = "- Triagem\n- Entrevista RH\n- Proposta";
  document.querySelector("#newJobTest").innerHTML = `<option value="">Nenhum</option>${tests.map((test) => `<option value="${test.id}">${test.title}</option>`).join("")}`;
  renderNewJobCatalogs();
  renderNewJobStages();
  goToPage("newJob");
}

document.querySelector("#newJobButton").addEventListener("click", openNewJobPage);
document.querySelector("#newJobBack").addEventListener("click", () => goToPage("jobs"));
document.querySelector("#cancelNewJob").addEventListener("click", () => goToPage("jobs"));

document.querySelector("#newJobRole").addEventListener("change", (event) => {
  const presets = {
    "Analista Fiscal": ["Financeiro", "Analista Fiscal", "Atuar nas rotinas fiscais, apurações e obrigações acessórias.", ["Comunicação", "Trabalho em equipe"]],
    "Analista de Departamento Pessoal": ["Recursos Humanos", "Analista de Departamento Pessoal", "Conduzir rotinas de admissão, folha, benefícios e atendimento aos colaboradores.", ["Comunicação", "Trabalho em equipe"]],
    "Desenvolvedor(a) Full Stack": ["Tecnologia", "Desenvolvedor(a) Full Stack", "Desenvolver e manter aplicações web do Portal RH.", ["Flutter", "Java", "PostgreSQL", "Trabalho em equipe"]],
    "Suporte de Sistemas": ["Tecnologia", "Suporte de Sistemas", "Prestar suporte aos usuários e acompanhar incidentes dos sistemas.", ["Comunicação", "Trabalho em equipe"]],
  };
  const preset = presets[event.target.value];
  if (!preset) return;
  document.querySelector("#newJobDepartment").value = preset[0];
  document.querySelector("#newJobTitle").value = preset[1];
  document.querySelector("#newJobDescription").value = preset[2];
  selectedSkills = [...preset[3]];
  renderNewJobCatalogs();
});

document.querySelector("#newJobCompanySelect").addEventListener("change", (event) => {
  if (!event.target.value) return;
  const company = companies.find((item) => item.name === event.target.value); if (!company) return;
  document.querySelector("#newJobCompany").value = company.name;
  document.querySelector("#newJobLocation").value = company.location;
  document.querySelector("#newJobAbout").value = company.about;
  selectedBenefits = company.benefits.split("\n").map((item) => item.replace(/^[-\s]+/, "").trim()).filter(Boolean);
  selectedBenefits.forEach((item) => { if (!benefitOptions.includes(item)) benefitOptions.push(item); });
  renderNewJobCatalogs();
});

document.querySelector("#newJobManagerSelect").addEventListener("change", (event) => {
  document.querySelector("#newJobManager").value = event.target.value;
});

document.querySelector("#skillCatalog").addEventListener("click", (event) => {
  const button = event.target.closest("[data-skill]"); if (!button) return;
  const name = button.dataset.skill;
  selectedSkills = selectedSkills.includes(name) ? selectedSkills.filter((item) => item !== name) : [...selectedSkills, name];
  renderNewJobCatalogs();
});
document.querySelector("#selectedSkills").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-skill]"); if (!button) return;
  selectedSkills = selectedSkills.filter((item) => item !== button.dataset.removeSkill); renderNewJobCatalogs();
});
document.querySelector("#benefitCatalog").addEventListener("click", (event) => {
  const button = event.target.closest("[data-benefit]"); if (!button) return;
  const name = button.dataset.benefit;
  selectedBenefits = selectedBenefits.includes(name) ? selectedBenefits.filter((item) => item !== name) : [...selectedBenefits, name]; renderNewJobCatalogs();
});
document.querySelector("#newSkillButton").addEventListener("click", () => {
  const name = window.prompt("Nome da nova competência:");
  if (!name?.trim()) return;
  const clean = name.trim(); if (!skillOptions.includes(clean)) skillOptions.push(clean);
  if (!selectedSkills.includes(clean)) selectedSkills.push(clean); renderNewJobCatalogs();
});

newJobFullForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#newJobTitle").value.trim();
  const area = document.querySelector("#newJobDepartment").value;
  const contract = document.querySelector("#newJobContract").value;
  const job = {
    id: Date.now(), title, area,
    details: `${area} · ${document.querySelector("#newJobExperience").value} · ${contract}`,
    workModel: document.querySelector("#newJobWorkModel").value,
    status: document.querySelector("#newJobStatus").value,
    applicants: 0, initials: [], published: "Agora",
    company: document.querySelector("#newJobCompany").value,
    location: document.querySelector("#newJobLocation").value,
    salaryMin: Number(document.querySelector("#newJobSalaryMin").value) || null,
    salaryMax: Number(document.querySelector("#newJobSalaryMax").value) || null,
    manager: document.querySelector("#newJobManager").value,
    requester: document.querySelector("#newJobRequester")?.value || "Camila Monteiro",
    openings: Math.max(1, Number(document.querySelector("#newJobOpenings")?.value) || 1),
    filled: 0,
    hireBy: document.querySelector("#newJobHireBy")?.value || document.querySelector("#newJobDeadline").value || "2026-09-30",
    openedAt: document.querySelector("#newJobOpenedAt")?.value || TODAY_KEY,
    pcd: document.querySelector("#newJobPcd").checked,
    deadline: document.querySelector("#newJobDeadline").value,
    description: document.querySelector("#newJobDescription").value.trim(),
    activities: document.querySelector("#newJobActivities").value.trim(), requirements: document.querySelector("#newJobRequirements").value.trim(),
    skillsRequired: [...selectedSkills],
    skillsNice: parseSkillLines(document.querySelector("#newJobNiceToHave").value),
    seniority: (() => {
      const level = document.querySelector("#newJobExperience").value;
      return level === "Não informado" || level === "Liderança" ? "" : level;
    })(),
    city: document.querySelector("#newJobLocation").value.split(",")[0].trim() || "Palmas",
    skills: [...selectedSkills],
    niceToHave: document.querySelector("#newJobNiceToHave").value.trim(), benefits: document.querySelector("#newJobBenefits").value.trim(),
    stages: document.querySelector("#newJobStages").value.trim(), about: document.querySelector("#newJobAbout").value.trim(), keywords: document.querySelector("#newJobKeywords").value.trim(),
    testId: Number(document.querySelector("#newJobTest").value) || null,
  };
  ensureJobDefaults(job);
  job.history = [["Criação", `Vaga criada como ${job.status} · agora`]];
  jobs.unshift(job);
  renderJobFilter(); renderJobs(); renderDashboard(); renderPipeline();
  goToPage("jobs");
  showToast("Vaga criada com sucesso", `${title} foi adicionada como ${job.status.toLowerCase()}.`);
});

document.querySelector("#cancelDialog").addEventListener("click", () => {
  jobDialog.close();
});

jobDialog.addEventListener("click", (event) => {
  if (event.target === jobDialog) {
    jobDialog.close();
  }
});

on("#jobShowArchived", "change", renderJobs);

on("#closeJobDetailDialog", "click", () => {
  closeJobMoreActions();
  document.querySelector("#jobDetailDialog")?.close();
});
on("#jobDetailDialog", "click", (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
on("#jobDetailPrimaryActions", "click", (event) => {
  const button = event.target.closest("[data-job-detail-action]");
  if (!button) return;
  runJobAction(getSelectedJob(), button.dataset.jobDetailAction);
});
on("#jobMoreActionsMenu", "click", (event) => {
  const button = event.target.closest("[data-job-detail-action]");
  if (!button) return;
  runJobAction(getSelectedJob(), button.dataset.jobDetailAction);
});
on("#jobMoreActionsBtn", "click", (event) => {
  event.stopPropagation();
  toggleJobMoreActions();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".job-more-wrap")) closeJobMoreActions();
});
on("#jobDetailCloseSuggest", "click", (event) => {
  const button = event.target.closest("[data-job-detail-action]");
  if (!button) return;
  runJobAction(getSelectedJob(), button.dataset.jobDetailAction);
});
on("#jobDetailSavePositions", "click", () => {
  const job = getSelectedJob();
  if (!job) return;
  const next = Math.max(1, Number(document.querySelector("#jobDetailPositionsInput")?.value) || 1);
  const filled = jobFilledCount(job);
  if (next < filled) {
    showToast("Posições", `Não é possível reduzir abaixo das ${filled} posições já preenchidas.`);
    return;
  }
  job.openings = next;
  pushJobHistory(job, "Posições", `Total ajustado para ${next}`);
  refreshJobViews(job);
  maybeSuggestJobClose(job);
  showToast("Posições atualizadas", `${job.title} agora tem ${next} posição(ões).`);
});

on("#closeJobStatusDialog", "click", () => document.querySelector("#jobStatusDialog")?.close());
on("#cancelJobStatus", "click", () => document.querySelector("#jobStatusDialog")?.close());
on("#jobStatusForm", "submit", (event) => {
  event.preventDefault();
  if (!pendingJobStatusAction) return;
  const { job, action, config } = pendingJobStatusAction;
  const reason = document.querySelector("#jobStatusReason")?.value.trim() || "";
  const note = document.querySelector("#jobStatusNote")?.value.trim() || "";
  if (config?.reasonRequired !== false && !reason) return;

  if (action === "reprovar") {
    setJobStatus(job, "Rascunho", `Reprovada: ${reason}${note ? ` · ${note}` : ""}`);
  } else if (action === "cancelar") {
    setJobStatus(job, "Cancelada", `Cancelada: ${reason}${note ? ` · ${note}` : ""}`);
    document.querySelector("#jobDetailDialog")?.close();
  } else if (action === "pausar") {
    setJobStatus(job, "Pausada", note ? `Pausada · ${note}` : "Candidaturas pausadas");
  } else if (action === "reabrir") {
    setJobStatus(job, "Aberta", note ? `Reaberta · ${note}` : "Vaga reaberta");
  } else if (action === "encerrar") {
    setJobStatus(job, "Encerrada", note ? `Encerrada · ${note}` : "Processo seletivo encerrado");
  } else if (action === "arquivar") {
    job.archived = true;
    pushJobHistory(job, "Arquivo", note ? `Arquivada · ${note}` : "Vaga arquivada");
    refreshJobViews(job);
    document.querySelector("#jobDetailDialog")?.close();
    showToast("Vaga arquivada", `${job.title} saiu da listagem principal.`);
  }

  pendingJobStatusAction = null;
  document.querySelector("#jobStatusDialog")?.close();
});

function closeJobMenus() {
  jobList?.querySelectorAll(".job-menu").forEach((menu) => menu.setAttribute("hidden", ""));
}

function openJobForm(job) {
  editingJobId = job?.id || null;
  jobForm.reset();
  const heading = jobDialog.querySelector("h2");
  const eyebrow = jobDialog.querySelector(".eyebrow");
  const submit = document.querySelector("#jobSubmitButton");
  if (job) {
    eyebrow.textContent = "EDITAR OPORTUNIDADE";
    heading.textContent = "Editar vaga";
    if (submit) submit.textContent = "Salvar";
    jobForm.title.value = job.title;
    jobForm.area.value = job.area || "";
    jobForm.openings.value = job.openings || 1;
    jobForm.workModel.value = job.workModel;
    jobForm.contract.value = job.contract || (job.details.split(" · ").pop() || "CLT").trim();
  } else {
    eyebrow.textContent = "NOVA OPORTUNIDADE";
    heading.textContent = "Criar vaga";
    if (submit) submit.textContent = "Criar vaga";
  }
  jobDialog.showModal();
}

jobForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(jobForm);
  const title = formData.get("title").trim();
  const area = formData.get("area").trim();
  const contract = formData.get("contract");
  const workModel = formData.get("workModel");
  const openings = Math.max(1, Number(formData.get("openings")) || 1);
  const details = `${area} · ${contract}`;

  if (editingJobId) {
    const job = jobs.find((item) => item.id === editingJobId);
    if (job) {
      const filled = jobFilledCount(job);
      if (openings < filled) {
        showToast("Posições", `Não é possível reduzir abaixo das ${filled} posições já preenchidas.`);
        return;
      }
      const previousTitle = job.title;
      job.title = title;
      job.area = area;
      job.details = details;
      job.workModel = workModel;
      job.contract = contract;
      job.openings = openings;
      if (previousTitle !== title) {
        candidates.forEach((item) => {
          if (item.vacancy === previousTitle) item.vacancy = title;
        });
        results.forEach((item) => {
          if (item.jobId == null && item.vacancy === previousTitle) {
            item.vacancy = title;
          }
        });
      }
      pushJobHistory(job, "Edição", "Dados principais atualizados");
    }
    editingJobId = null;
    jobDialog.close();
    refreshJobViews(job);
    showToast("Vaga atualizada", `${title} foi salva.`);
    return;
  }

  const job = ensureJobDefaults({
    id: Date.now(),
    title,
    area,
    details,
    workModel,
    contract,
    openings,
    filled: 0,
    status: "Rascunho",
    applicants: 0,
    initials: [],
    published: "Agora",
    openedAt: TODAY_KEY,
    hireBy: "2026-09-30",
    manager: "Larissa Dias",
    requester: "Camila Monteiro",
    history: [["Criação", "Vaga criada como rascunho · agora"]],
  });
  jobs.unshift(job);

  jobDialog.close();
  searchInput.value = "";
  statusFilter.value = "all";
  refreshJobViews(job);
  goToPage("jobs");
  showToast("Vaga criada com sucesso", `${title} foi adicionada como rascunho.`);
});

jobList.addEventListener("click", (event) => {
  const menuAction = event.target.closest("[data-job-action]");
  const moreButton = event.target.closest(".more-button");
  const card = event.target.closest(".job-card");

  if (!card) return;

  const job = jobs.find((item) => item.id === Number(card.dataset.jobId));
  if (!job) return;

  if (menuAction) {
    event.stopPropagation();
    closeJobMenus();
    runJobAction(job, menuAction.dataset.jobAction);
    return;
  }

  if (moreButton) {
    event.stopPropagation();
    const menu = card.querySelector(".job-menu");
    const wasOpen = !menu.hasAttribute("hidden");
    closeJobMenus();
    if (!wasOpen) menu.removeAttribute("hidden");
    return;
  }

  closeJobMenus();
  jobList
    .querySelectorAll(".job-card")
    .forEach((item) => item.classList.toggle("selected", item === card));
  openJobDetails(job);
});

jobList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".job-card");
  if (!card) return;
  event.preventDefault();
  card.click();
});

document.querySelectorAll("[data-talent-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedTalentTab = button.dataset.talentTab;
    selectedTalentId = null;
    talentSearch.value = "";
    document.querySelectorAll("[data-talent-tab]").forEach((item) => {
      item.setAttribute("aria-selected", item === button ? "true" : "false");
    });
    renderTalents();
  });
});

talentSearch.addEventListener("input", renderTalents);

document.querySelector("#clearTalentSearch").addEventListener("click", () => {
  talentSearch.value = "";
  renderTalents();
  talentSearch.focus();
});

talentList.addEventListener("click", (event) => {
  const card = event.target.closest(".talent-card");
  if (!card) return;

  const talent = talents.find((item) => item.id === Number(card.dataset.talentId));
  if (!talent) return;

  const actionButton = event.target.closest("[data-talent-action]");
  if (actionButton) {
    event.stopPropagation();
    closeTalentMenus();
    if (actionButton.dataset.talentAction === "perfil") {
      selectedTalentId = talent.id;
      renderTalents();
      const candidate = findCandidateByEmail(talent.email);
      if (candidate) {
        goToPage("pipeline", { candidateId: candidate.id });
        return;
      }
      showToast("Perfil do talento", `${talent.name} · ${talent.email}`);
      return;
    }
    if (actionButton.dataset.talentAction === "toggle") {
      talent.status = talent.status === "aprovados" ? "bloqueados" : "aprovados";
      if (talent.status === "bloqueados" && !talent.motivo) {
        talent.motivo = "Bloqueado pelo RH.";
      }
      selectedTalentId = null;
      renderTalents();
      showToast(
        talent.status === "bloqueados" ? "Talento bloqueado" : "Talento aprovado",
        `${talent.name} foi movido para ${talent.status}.`,
      );
      return;
    }
    if (actionButton.dataset.talentAction === "remover") {
      const index = talents.findIndex((item) => item.id === talent.id);
      if (index >= 0) talents.splice(index, 1);
      selectedTalentId = null;
      renderTalents();
      showToast("Removido do banco", `${talent.name} saiu do banco de talentos.`);
      return;
    }
  }

  const moreButton = event.target.closest(".more-button");
  if (moreButton) {
    event.stopPropagation();
    const menu = card.querySelector(".talent-menu");
    const wasOpen = !menu.hidden;
    closeTalentMenus();
    if (!wasOpen) menu.removeAttribute("hidden");
    return;
  }

  selectedTalentId = talent.id;
  closeTalentMenus();
  renderTalents();
  openEntityDialog(talent, "talent");
});

talentList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest(".more-button, .talent-menu")) return;
  const card = event.target.closest(".talent-card");
  if (!card) return;
  event.preventDefault();
  card.click();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".talent-card")) closeTalentMenus();
});

document.querySelectorAll("[data-result-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedResultTab = button.dataset.resultTab;
    selectedResultId = null;
    resultSearch.value = "";
    document.querySelectorAll("[data-result-tab]").forEach((item) => {
      item.setAttribute("aria-selected", item === button ? "true" : "false");
    });
    renderResults();
  });
});

resultSearch.addEventListener("input", renderResults);

document.querySelector("#clearResultSearch").addEventListener("click", () => {
  resultSearch.value = "";
  renderResults();
  resultSearch.focus();
});

resultList.addEventListener("click", (event) => {
  const card = event.target.closest(".result-card");
  if (!card) return;

  const item = results.find((entry) => entry.id === Number(card.dataset.resultId));
  if (!item) return;

  const unhide = event.target.closest("[data-result-action='unhide']");
  if (unhide) {
    event.stopPropagation();
    const index = results.findIndex((entry) => entry.id === item.id);
    if (index >= 0) results.splice(index, 1);
    if (!candidates.some((candidate) => normalize(candidate.email) === normalize(item.email))) {
      candidates.unshift({
        id: Date.now(),
        name: item.name,
        email: item.email,
        phone: "",
        vacancy: item.vacancy,
        stage: item.stage || "Triagem",
        alert: 0,
        attachment: true,
        history: [["Desocultado", "Larissa Dias · agora"]],
        activities: [["LD", "Larissa Dias", "Desocultou o candidato", "Agora"]],
      });
      renderPipeline();
      renderDashboard();
    }
    selectedResultId = null;
    renderResults();
    const restored = candidates.find(
      (candidate) => normalize(candidate.email) === normalize(item.email),
    );
    goToPage("pipeline", restored ? { candidateId: restored.id } : {});
    showToast("Candidato desocultado", `${item.name} voltou para o pipeline.`);
    return;
  }

  selectedResultId = item.id;
  renderResults();
  openEntityDialog(item, "result");
});

resultList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest("[data-result-action]")) return;
  const card = event.target.closest(".result-card");
  if (!card) return;
  event.preventDefault();
  card.click();
});

document.querySelector("#closeEntityDialog").addEventListener("click", () => entityDialog.close());
entityDialog.addEventListener("click", (event) => {
  if (event.target === entityDialog) entityDialog.close();
});

document.querySelector("#toggleEntityActivities").addEventListener("click", (event) => {
  const list = document.querySelector("#entityActivityList");
  list.hidden = !list.hidden;
  event.currentTarget.textContent = list.hidden ? "Mostrar" : "Ocultar";
});

document.querySelector("#entityCommentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#entityCommentInput");
  const message = input.value.trim();
  if (!message || !selectedEntity) return;
  selectedEntity.item.activities ||= [];
  selectedEntity.item.activities.unshift(["LD", "Larissa Dias", message, "Agora"]);
  input.value = "";
  renderEntityDialog();
  showToast("Comentário adicionado", "A atividade foi registrada no perfil.");
});

document.querySelector("#entityActions").addEventListener("click", (event) => {
  const button = event.target.closest("[data-entity-action]");
  if (!button || !selectedEntity) return;
  const { item, source } = selectedEntity;
  const action = button.dataset.entityAction;
  if (action === "toggle-talent") {
    if (item.status === "aprovados") {
      openBlockDialog(item);
      return;
    }
    item.status = "aprovados";
    selectedTalentTab = item.status;
    selectTalentTab(item.status);
    renderTalents();
    renderEntityDialog();
    showToast("Banco de talentos", `${item.name} agora está em aprovados.`);
    return;
  }
  if (action === "remove-talent") {
    const index = talents.findIndex((talent) => talent.id === item.id);
    if (index >= 0) talents.splice(index, 1);
    entityDialog.close();
    selectedTalentId = null;
    renderTalents();
    showToast("Removido do banco", `${item.name} saiu da lista.`);
    return;
  }
  if (action === "approve-bank") {
    if (!talents.some((talent) => normalize(talent.email) === normalize(item.email))) {
      talents.unshift({ id: Date.now(), name: item.name, email: item.email, status: "aprovados", motivo: `Perfil aprovado após ${item.status === "contratados" ? "contratação" : "processo seletivo"}.` });
    }
    renderTalents();
    renderEntityDialog();
    showToast("Banco de talentos", `${item.name} foi aprovado no banco.`);
    return;
  }
  if (action === "unhide") {
    const index = results.findIndex((result) => result.id === item.id);
    if (index >= 0) results.splice(index, 1);
    const restored = {
      id: Date.now(), name: item.name, email: item.email, phone: item.phone || "", vacancy: item.vacancy,
      stage: item.stage || "Triagem", alert: 0, attachment: true,
      history: [["Desocultado", "Larissa Dias · agora"], ...(item.history || [])],
      activities: [["LD", "Larissa Dias", "Desocultou a candidatura", "Agora"]],
    };
    candidates.unshift(restored);
    entityDialog.close();
    renderResults();
    renderPipeline();
    renderDashboard();
    goToPage("pipeline", { candidateId: restored.id });
    showToast("Candidatura desocultada", `${item.name} voltou para o pipeline.`);
    return;
  }
  if (action === "block") {
    openBlockDialog(item);
    return;
  }
  if (action === "anonymize") {
    anonymizePerson(item);
    if (source === "talent") renderTalents();
    else renderResults();
    renderPipeline();
    renderEntityDialog();
    showToast("LGPD", "Dados pessoais anonimizados.");
    return;
  }
  const actionCandidate = findCandidateByEmail(item.email) || item;
  actionCandidate.vacancy ||= item.vacancy || "Processo seletivo";
  actionCandidate.phone ||= item.phone || "";
  actionCandidate.history ||= [];
  actionCandidate.activities ||= [];
  if (action === "resume") { openCandidateResume(actionCandidate); return; }
  if (["interview", "manager", "contact"].includes(action)) entityDialog.close();
  if (action === "interview") { openInterviewScheduler(actionCandidate); return; }
  if (action === "manager") { openManagerDialog(actionCandidate); return; }
  if (action === "contact") { openContactDialog(actionCandidate); return; }
});

document.querySelector("#calendarPrev").addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
  renderAgenda();
});

document.querySelector("#calendarNext").addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
  renderAgenda();
});

document.querySelectorAll("[data-interview-view]").forEach((button) => {
  button.addEventListener("click", () => {
    interviewCalendarView = button.dataset.interviewView || "agenda";
    syncInterviewCalendarView();
  });
});

document.querySelector("#fullCalendarPrev")?.addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
  renderAgenda();
});

document.querySelector("#fullCalendarNext")?.addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
  renderAgenda();
});

document.querySelector("#fullCalendarToday")?.addEventListener("click", () => {
  calendarCursor = new Date(2026, 7, 1);
  selectedInterviewDay = "2026-08-25";
  interviewRangeFilter = "today";
  renderAgenda();
});

document.querySelector("#clearCalendarFilters")?.addEventListener("click", () => {
  selectedCalendarFilters.clear();
  document.querySelectorAll("[data-calendar-filter]").forEach((input) => {
    input.checked = false;
  });
  calendarStatusFilter = "all";
  calendarOwnerFilter = "all";
  const statusFilter = document.querySelector("#calendarStatusFilter");
  const ownerFilter = document.querySelector("#calendarOwnerFilter");
  if (statusFilter) statusFilter.value = "all";
  if (ownerFilter) ownerFilter.value = "all";
  renderFullCalendar();
});

document.querySelector("#interviewCalendarView")?.addEventListener("change", (event) => {
  const input = event.target.closest("[data-calendar-filter]");
  if (input) {
    if (input.checked) selectedCalendarFilters.add(input.dataset.calendarFilter);
    else selectedCalendarFilters.delete(input.dataset.calendarFilter);
  }
  const statusFilter = event.target.closest("#calendarStatusFilter");
  const ownerFilter = event.target.closest("#calendarOwnerFilter");
  if (statusFilter) calendarStatusFilter = statusFilter.value;
  if (ownerFilter) calendarOwnerFilter = ownerFilter.value;
  if (!input && !statusFilter && !ownerFilter) return;
  renderFullCalendar();
});

document.querySelector("#interviewCalendarView")?.addEventListener("click", (event) => {
  const interviewButton = event.target.closest("[data-full-calendar-interview]");
  if (interviewButton) {
    const interview = interviews.find((item) => item.id === Number(interviewButton.dataset.fullCalendarInterview));
    if (interview) openInterviewDetail(interview);
    return;
  }
  const dayButton = event.target.closest("[data-full-calendar-day-select]");
  if (!dayButton) return;
  const key = dayButton.dataset.fullCalendarDaySelect;
  selectedInterviewDay = selectedInterviewDay === key ? "" : key;
  selectedInterviewId = null;
  renderAgenda();
});

calendarGrid.addEventListener("click", (event) => {
  const day = event.target.closest("[data-calendar-day]");
  if (!day) return;
  selectedInterviewDay =
    selectedInterviewDay === day.dataset.calendarDay ? "" : day.dataset.calendarDay;
  selectedInterviewId = null;
  renderAgenda();
});

document.querySelector("#clearInterviewDay").addEventListener("click", () => {
  selectedInterviewDay = "";
  renderAgenda();
});

document.querySelector(".interview-toolbar")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-interview-range]");
  if (!button) return;
  interviewRangeFilter = button.dataset.interviewRange;
  selectedInterviewDay = "";
  renderAgenda();
});

document.querySelector("#newInterviewButton").addEventListener("click", () => {
  const candidate =
    candidates.find((item) => item.id === selectedCandidateId) || getFilteredCandidates()[0];
  if (!candidate) {
    showToast("Nova entrevista", "Não há candidatos no pipeline para agendar.");
    return;
  }
  openInterviewScheduler(candidate);
});

document.querySelector("#newTestButton").addEventListener("click", createTest);
document.querySelector("#emptyNewTestButton").addEventListener("click", createTest);
document.querySelector("#testEditorBack").addEventListener("click", showTestList);
document.querySelector("#saveTestButton").addEventListener("click", saveCurrentTest);
document.querySelector("#addQuestionButton").addEventListener("click", () => {
  const test = tests.find((item) => item.id === editingTestId);
  if (!test) return;
  test.questions.push({
    id: nextQuestionId,
    type: "single",
    prompt: "",
    options: ["Opção 1", "Opção 2"],
    correct: [0],
  });
  nextQuestionId += 1;
  renderTestQuestions();
});
document.querySelector("#testMinScore").addEventListener("input", (event) => {
  document.querySelector("#testMinScoreLabel").textContent = `${event.target.value}%`;
});

testList.addEventListener("click", (event) => {
  const view = event.target.closest('[data-test-action="view"]');
  const edit = event.target.closest('[data-test-action="edit"]');
  if (view) {
    event.preventDefault();
    openTestPreview(Number(view.dataset.testId));
    return;
  }
  if (edit) {
    event.preventDefault();
    openTestEditor(Number(edit.dataset.testId));
  }
});

testList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".test-card");
  if (!card || event.target.closest("button")) return;
  event.preventDefault();
  openTestPreview(Number(card.dataset.testId));
});

testQuestionList.addEventListener("input", (event) => {
  const field = event.target.closest("[data-question-prompt], [data-option-text]");
  const card = event.target.closest("[data-question-id]");
  const test = tests.find((item) => item.id === editingTestId);
  if (!field || !card || !test) return;
  const question = test.questions.find((item) => item.id === Number(card.dataset.questionId));
  if (!question) return;
  if (field.matches("[data-question-prompt]")) {
    question.prompt = field.value;
    return;
  }
  const optionRow = field.closest(".test-option-row");
  if (!optionRow) return;
  const optionIndex = [...optionRow.parentElement.querySelectorAll(".test-option-row")].indexOf(optionRow);
  question.options[optionIndex] = field.value;
});

testQuestionList.addEventListener("change", (event) => {
  const typeSelect = event.target.closest("[data-question-type]");
  const correctInput = event.target.closest("[data-option-correct]");
  const card = event.target.closest("[data-question-id]");
  const test = tests.find((item) => item.id === editingTestId);
  if (!card || !test) return;
  const question = test.questions.find((item) => item.id === Number(card.dataset.questionId));
  if (!question) return;
  if (typeSelect) {
    question.type = typeSelect.value;
    if (question.type === "text") {
      question.options = [];
      question.correct = [];
    } else if (!question.options?.length) {
      question.options = ["Opção 1", "Opção 2"];
      question.correct = [0];
    }
    renderTestQuestions();
    return;
  }
  if (correctInput) {
    const optionIndex = Number(correctInput.value);
    if (question.type === "multiple") {
      const set = new Set(question.correct || []);
      if (correctInput.checked) set.add(optionIndex);
      else set.delete(optionIndex);
      question.correct = [...set].sort();
    } else {
      question.correct = [optionIndex];
    }
  }
});

testQuestionList.addEventListener("click", (event) => {
  const remove = event.target.closest("[data-remove-question]");
  const removeOption = event.target.closest("[data-remove-option]");
  const addOption = event.target.closest("[data-add-option]");
  const card = event.target.closest("[data-question-id]");
  const test = tests.find((item) => item.id === editingTestId);
  if (!card || !test) return;
  const question = test.questions.find((item) => item.id === Number(card.dataset.questionId));
  if (!question) return;
  if (remove) {
    test.questions = test.questions.filter((item) => item.id !== Number(card.dataset.questionId));
    renderTestQuestions();
    return;
  }
  if (addOption) {
    question.options = [...(question.options || []), `Opção ${(question.options?.length || 0) + 1}`];
    renderTestQuestions();
    return;
  }
  if (removeOption) {
    const optionRow = removeOption.closest(".test-option-row");
    const optionIndex = [...optionRow.parentElement.querySelectorAll(".test-option-row")].indexOf(optionRow);
    question.options = question.options.filter((_, index) => index !== optionIndex);
    question.correct = (question.correct || []).filter((index) => index !== optionIndex).map((index) => (index > optionIndex ? index - 1 : index));
    renderTestQuestions();
  }
});

interviewList.addEventListener("click", (event) => {
  const card = event.target.closest(".interview-card");
  if (!card) return;
  const item = interviews.find((entry) => entry.id === Number(card.dataset.interviewId));
  if (!item) return;

  const join = event.target.closest("[data-interview-action='join']");
  if (join) {
    event.stopPropagation();
    showToast(
      item.meet === "Teams" ? "Microsoft Teams" : "Google Meet",
      `Abrindo a sala da entrevista com ${item.name}.`,
    );
    return;
  }

  selectedInterviewId = item.id;
  openInterviewDetail(item);
});

interviewList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest("[data-interview-action]")) return;
  const card = event.target.closest(".interview-card");
  if (!card) return;
  event.preventDefault();
  card.click();
});

document.querySelector("#closeInterviewDetail").addEventListener("click", () => interviewDetailDialog.close());
interviewDetailDialog.addEventListener("click", (event) => {
  if (event.target === interviewDetailDialog) interviewDetailDialog.close();
});

document.querySelector(".interview-detail-actions").addEventListener("click", (event) => {
  const button = event.target.closest("[data-interview-detail-action]");
  const item = interviews.find((entry) => entry.id === selectedInterviewDetailId);
  if (!button || !item || button.disabled) return;
  const action = button.dataset.interviewDetailAction;
  if (action === "reminder") {
    item.reminderSent = true;
    item.waiting = false;
    interviewActivity(item, "Enviou lembrete da entrevista por e-mail");
    showToast("Lembrete enviado", `O lembrete foi enviado para ${item.name}.`);
  } else if (action === "invite") {
    item.inviteResent = (item.inviteResent || 0) + 1;
    interviewActivity(item, "Reenviou o convite da entrevista");
    showToast("Convite reenviado", `Novo convite enviado para ${item.name}.`);
  } else if (action === "test") {
    item.testLink ||= `portalrh.local/teste/${item.id}-${normalize(item.name).split(" ")[0]}`;
    interviewActivity(item, "Gerou o link do teste técnico");
    showToast("Link gerado", "O teste técnico está pronto para ser compartilhado.");
  } else if (action === "complete") {
    item.status = "Concluída";
    item.waiting = false;
    interviewActivity(item, "Marcou a entrevista como concluída");
    showToast("Entrevista concluída", `${item.name} agora aguarda avaliação.`);
  } else if (action === "cancel") {
    item.status = "Cancelada";
    item.waiting = false;
    interviewActivity(item, "Cancelou a entrevista");
    showToast("Entrevista cancelada", `O compromisso com ${item.name} foi cancelado.`);
  }
  renderAgenda();
  renderInterviewDetail();
});

document.querySelector("#copyInterviewTestLink").addEventListener("click", async () => {
  const item = interviews.find((entry) => entry.id === selectedInterviewDetailId);
  if (!item?.testLink) return;
  try {
    await navigator.clipboard.writeText(item.testLink);
    showToast("Link copiado", "O link do teste foi copiado para a área de transferência.");
  } catch {
    showToast("Link do teste", item.testLink);
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (!pipelinePage.hidden) {
      candidateSearch.focus();
    } else if (!jobsPage.hidden) {
      searchInput.focus();
    } else if (!talentosPage.hidden) {
      talentSearch.focus();
    } else if (!resultadosPage.hidden) {
      resultSearch.focus();
    } else {
      document.querySelector('[data-page="pipeline"]').click();
      candidateSearch.focus();
    }
  }
});

menuButton.addEventListener("click", toggleSidebar);
sidebarToggle.addEventListener("click", toggleSidebar);
document.querySelector("#sidebarClose").addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);

if (window.localStorage.getItem("portal-rh-sidebar") === "collapsed") {
  setSidebarCollapsed(true);
}

function departmentOptions(selected = "") {
  return departments.map((item) => `<option${item.name === selected ? " selected" : ""}>${item.name}</option>`).join("");
}

function settingsRow(item, type, subtitle) {
  const menu = type === "manager"
    ? `<button type="button" data-settings-action="edit">Editar</button><button type="button" data-settings-action="resend">Reenviar credenciais</button><button class="is-danger" type="button" data-settings-action="remove">Excluir</button>`
    : `<button type="button" data-settings-action="edit">Editar</button><button type="button" data-settings-action="toggle">${item.active ? "Desativar" : "Ativar"}</button><button class="is-danger" type="button" data-settings-action="remove">Remover</button>`;
  return `<article class="settings-row${type === "manager" ? " is-clickable" : ""}${item.active ? "" : " is-inactive"}" data-settings-item="${type}" data-settings-id="${item.id}"${type === "manager" ? ' tabindex="0"' : ""}><span class="settings-row-status"><svg class="ui-icon"><use href="${iconSpriteBase}#${type === "role" ? "i-briefcase" : type === "manager" ? "i-users" : "i-check-circle"}" /></svg></span><div><strong>${item.name}</strong><small>${subtitle || "Sem descrição"}</small></div><span class="settings-state">${item.active ? "Ativo" : "Inativo"}</span><button class="more-button" type="button" data-settings-menu aria-label="Ações para ${item.name}">⋮</button><div class="settings-row-menu" hidden>${menu}</div></article>`;
}

function setSettingsView(view) {
  settingsView = view;
  if (view === "screenings") { screeningTab = "analyses"; analysisFilter = "all"; document.querySelectorAll("[data-analysis-filter]").forEach((button) => button.classList.toggle("is-active", button.dataset.analysisFilter === "all")); }
  if (view === "screenings") {
    const heading = document.querySelector("#settingsScreeningsView h1");
    const description = document.querySelector("#settingsScreeningsView .settings-subheading p");
    if (heading) heading.textContent = analysisStandalone ? "Análises de gestores" : "Triagens e solicitações";
    if (description) description.textContent = analysisStandalone ? "Acompanhe e avalie os pareceres enviados pelos gestores." : "Acompanhe pareceres de gestores e pedidos de contratação.";
  }
  document.querySelector("#settingsHomeView").hidden = view !== "home";
  document.querySelector("#settingsDepartmentsView").hidden = view !== "departments";
  document.querySelector("#settingsManagersView").hidden = view !== "managers";
  document.querySelector("#settingsRolesView").hidden = view !== "roles";
  document.querySelector("#settingsCompaniesView").hidden = view !== "companies";
  document.querySelector("#settingsScreeningsView").hidden = view !== "screenings";
  document.querySelector("#settingsBenefitsView").hidden = view !== "benefits";
  document.querySelector("#settingsStagesView").hidden = view !== "stages";
  document.querySelector("#settingsEmailsView").hidden = view !== "emails";
  document.querySelector("#settingsRejectionsView").hidden = view !== "rejections";
  const names = { home: "Configurações", departments: "Departamentos", managers: "Responsáveis RH", roles: "Cargos", companies: "Empresas", screenings: "Triagens e solicitações", benefits: "Benefícios", stages: "Etapas do pipeline", emails: "Modelos de e-mail", rejections: "Justificativas de rejeição" };
  document.querySelector("#pageTitle").textContent = names[view];
  renderSettings();
}

function renderSettings() {
  document.querySelector("#departmentList").innerHTML = departments.map((item) => settingsRow(item, "department", item.description)).join("");
  document.querySelector("#settingsManagerList").innerHTML = settingsManagers.map((item) => settingsRow(item, "manager", `${item.email}${item.phone ? ` · ${item.phone}` : ""} · ${item.portalAccess ? "Acesso ao portal" : "Sem acesso"}`)).join("");
  document.querySelector("#settingsRoleList").innerHTML = settingsRoles.map((item) => settingsRow(item, "role", `${item.department}${item.description ? ` · ${item.description}` : ""}`)).join("");
  document.querySelector("#settingsCompanyList").innerHTML = companies.map((item) => `<article class="settings-row company-row${item.active ? "" : " is-inactive"}" data-settings-item="company" data-settings-id="${item.id}"><span class="company-row-logo">${item.logo ? `<img src="${item.logo}" alt="" />` : initials(item.name)}</span><div><strong>${item.name}</strong><small>${item.isDefault ? "Portal personalizado" : "Empresa cadastrada"} · ${item.location}</small></div><span class="settings-state">${item.active ? "Ativa" : "Inativa"}</span><button class="more-button" type="button" data-settings-menu aria-label="Ações para ${item.name}">⋮</button><div class="settings-row-menu" hidden><button type="button" data-settings-action="edit">Editar</button><button class="is-danger" type="button" data-settings-action="remove">Excluir</button></div></article>`).join("");
  document.querySelector("#settingsBenefitList").innerHTML = benefitsCatalog.map((item) => settingsRow(item, "benefit", item.description)).join("");
  document.querySelector("#settingsStageList").innerHTML = pipelineStageCatalog.map((item, index) => {
    const count = candidates.filter((candidate) => candidate.stage === item.name).length;
    return `<article class="settings-row pipeline-stage-row${item.active ? "" : " is-inactive"}" data-stage-id="${item.id}"><span class="stage-drag" aria-hidden="true"><svg class="ui-icon"><use href="${iconSpriteBase}#i-grip" /></svg></span><div><strong>${item.name}</strong><small>${item.code} · posição ${index + 1}${item.active ? "" : " · Inativa"}${count ? ` · ${count} candidatura(s)` : ""}</small></div>${item.system ? '<span class="settings-system-tag">Sistema</span>' : ""}<button class="stage-icon-button" type="button" data-stage-action="toggle" aria-label="${item.active ? "Ocultar" : "Exibir"} ${item.name}"><svg class="ui-icon"><use href="${iconSpriteBase}#${item.active ? "i-eye" : "i-eye-off"}" /></svg></button>${item.system ? "" : `<button class="stage-icon-button is-danger" type="button" data-stage-action="remove" aria-label="Excluir ${item.name}"><svg class="ui-icon"><use href="${iconSpriteBase}#i-trash" /></svg></button>`}<span class="stage-active-mark" aria-label="${item.active ? "Ativa" : "Inativa"}"><svg class="ui-icon"><use href="${iconSpriteBase}#${item.active ? "i-check-circle" : "i-pause"}" /></svg></span></article>`;
  }).join("");
  document.querySelector("#settingsEmailList").innerHTML = emailTemplates.map((item) => `<article class="settings-row email-template-row${item.active ? "" : " is-inactive"}" data-email-template-id="${item.id}" tabindex="0"><span class="settings-row-status"><svg class="ui-icon"><use href="${iconSpriteBase}#i-mail" /></svg></span><div><strong>${item.name}</strong><small>${item.subject}</small></div><span class="settings-state">${item.active ? "Ativo" : "Inativo"}</span><span class="email-row-arrow" aria-hidden="true"><svg class="ui-icon"><use href="${iconSpriteBase}#i-chevron-right" /></svg></span></article>`).join("");
  document.querySelector("#settingsRejectionList").innerHTML = rejectionReasons.map((item) => { const preview = item.name.split("\\n")[0] || "Justificativa sem mensagem"; return `<article class="settings-row rejection-row${item.active ? "" : " is-inactive"}" data-settings-item="rejection" data-settings-id="${item.id}"><span class="settings-row-status"><svg class="ui-icon"><use href="${iconSpriteBase}#i-message" /></svg></span><div><strong>${preview}</strong><small>${item.name.includes("\\n") ? "Mensagem personalizada" : "Justificativa padrão"} · ${item.active ? "Ativo" : "Inativo"}</small></div><button class="more-button" type="button" data-settings-menu aria-label="Ações para justificativa">⋮</button><div class="settings-row-menu" hidden><button type="button" data-settings-action="edit">Editar</button><button type="button" data-settings-action="toggle">${item.active ? "Desativar" : "Ativar"}</button><button class="is-danger" type="button" data-settings-action="remove">Excluir</button></div></article>`; }).join("");
  benefitOptions.splice(0, benefitOptions.length, ...benefitsCatalog.filter((item) => item.active).map((item) => item.name));
  const companySelect = document.querySelector("#newJobCompanySelect");
  if (companySelect) companySelect.innerHTML = `<option value="">Selecionar empresa...</option>${companies.filter((item) => item.active).map((item) => `<option>${item.name}</option>`).join("")}`;
  renderScreenings();
}

function analysisStatusMeta(status) {
  return { pending: ["Pendente", "is-pending"], approved: ["Aprovada", "is-approved"], rejected: ["Reprovada", "is-rejected"] }[status];
}
function renderScreenings() {
  document.querySelector("#managerAnalysesPanel").hidden = screeningTab !== "analyses";
  document.querySelector("#hiringRequestsPanel").hidden = screeningTab !== "requests";
  document.querySelectorAll("[data-screening-tab]").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.screeningTab === screeningTab)));
  const analysisTabCount = document.querySelector("#analysisTabCount");
  const requestTabCount = document.querySelector("#requestTabCount");
  const managerAnalysesNavCount = document.querySelector("#managerAnalysesNavCount");
  if (analysisTabCount) analysisTabCount.textContent = managerAnalyses.length;
  if (requestTabCount) requestTabCount.textContent = hiringRequests.length;
  if (managerAnalysesNavCount) managerAnalysesNavCount.textContent = managerAnalyses.length;
  const filtered = managerAnalyses.filter((item) => analysisFilter === "all" || item.status === analysisFilter);
  document.querySelector("#managerAnalysisList").innerHTML = filtered
    .map((item) => {
      const [label, className] = analysisStatusMeta(item.status);
      return `<article class="analysis-card" data-analysis-id="${item.id}" tabindex="0"><div><h3>${escapeHtml(item.candidate)}</h3><p>${escapeHtml(item.role)}</p><span>${escapeHtml(item.department)} · Gestor: ${escapeHtml(item.manager)}</span><span>Encaminhado por ${escapeHtml(item.sender)}</span><time>${escapeHtml(item.due)}</time><strong>${escapeHtml(item.opinion)}</strong></div><span class="analysis-status ${className}">${label}</span></article>`;
    })
    .join("");
  document.querySelector("#managerAnalysisEmpty").hidden = filtered.length !== 0;
  document.querySelector("#managerAnalysisList").hidden = filtered.length === 0;
  document.querySelector("#hiringRequestEmpty").hidden = hiringRequests.length !== 0;
  document.querySelector("#hiringRequestList").innerHTML = hiringRequests
    .map((item) => `<article class="analysis-card"><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.department)}</p></div><span class="analysis-status is-pending">Pendente</span></article>`)
    .join("");
}

function openManagerAnalysis(item) {
  selectedAnalysisId = item.id;
  document.querySelector("#analysisCandidateName").textContent = item.candidate;
  document.querySelector("#analysisCandidateRole").textContent = item.role;
  document.querySelector("#analysisDepartment").textContent = item.department;
  document.querySelector("#analysisManager").textContent = item.manager;
  document.querySelector("#analysisSender").textContent = item.sender;
  document.querySelector("#analysisDue").textContent = item.due;
  document.querySelector("#analysisOpinion").textContent = item.opinion;
  document.querySelector("#analysisRhNote").value = item.rhNote || "";
  document.querySelector("#managerAnalysisDialog").showModal();
}

function openDepartmentForm(item) {
  editingDepartmentId = item?.id || null;
  document.querySelector("#departmentFormTitle").textContent = item ? "Editar departamento" : "Novo departamento";
  document.querySelector("#departmentNameInput").value = item?.name || "";
  document.querySelector("#departmentDescriptionInput").value = item?.description || "";
  document.querySelector("#departmentActiveInput").checked = item?.active ?? true;
  document.querySelector("#departmentFormDialog").showModal();
}
function openSettingsManagerForm(item) {
  editingSettingsManagerId = item?.id || null;
  document.querySelector("#settingsManagerDialog").showModal();
  document.querySelector("#settingsManagerForm").setAttribute("autocomplete", "off");
  document.querySelector("#settingsManagerFormTitle").textContent = item ? "Editar responsável" : "Novo responsável";
  document.querySelector("#settingsManagerName").value = item?.name || "";
  document.querySelector("#settingsManagerEmail").value = item?.email || "";
  document.querySelector("#settingsManagerPhone").value = item?.phone || "";
  document.querySelector("#settingsManagerCompany").innerHTML = companies.filter((company) => company.active).map((company) => `<option${company.name === (item?.company || companies.find((entry) => entry.isDefault)?.name) ? " selected" : ""}>${company.name}</option>`).join("");
  document.querySelector("#settingsManagerDepartment").innerHTML = departmentOptions(item?.department);
  document.querySelector("#settingsManagerRole").value = item?.role || "";
  document.querySelector("#settingsManagerPortalAccess").checked = item?.portalAccess ?? true;
  document.querySelector("#settingsManagerActive").checked = item?.active ?? true;
  window.setTimeout(() => {
    const emailInput = document.querySelector("#settingsManagerEmail");
    const phoneInput = document.querySelector("#settingsManagerPhone");
    emailInput.defaultValue = item?.email || "";
    emailInput.value = item?.email || "";
    phoneInput.defaultValue = item?.phone || "";
    phoneInput.value = item?.phone || "";
  }, 120);
}
function openSettingsRoleForm(item) {
  editingSettingsRoleId = item?.id || null;
  document.querySelector("#settingsRoleFormTitle").textContent = item ? "Editar cargo" : "Novo cargo";
  document.querySelector("#settingsRoleName").value = item?.name || "";
  document.querySelector("#settingsRoleDepartment").innerHTML = `<option value="">Nenhum</option>${departmentOptions(item?.department)}`;
  document.querySelector("#settingsRoleDescription").value = item?.description || "";
  document.querySelector("#settingsRoleActive").checked = item?.active ?? true;
  document.querySelector("#settingsRoleDialog").showModal();
}
function renderCompanyLogoPreview(value, name) {
  const preview = document.querySelector("#companyLogoPreview");
  preview.innerHTML = value ? `<img src="${value}" alt="Logo da empresa" />` : initials(name || "Empresa");
}
function openCompanyForm(item) {
  editingCompanyId = item?.id || null; pendingCompanyLogo = item?.logo || "";
  document.querySelector("#settingsCompanyFormTitle").textContent = item ? "Editar empresa" : "Nova empresa";
  document.querySelector("#settingsCompanyName").value = item?.name || "";
  document.querySelector("#settingsCompanyLocation").value = item?.location || "";
  document.querySelector("#settingsCompanyAbout").value = item?.about || "";
  document.querySelector("#settingsCompanyBenefits").value = item?.benefits || "";
  document.querySelector("#settingsCompanySlogan").value = item?.slogan || "";
  document.querySelector("#settingsCompanyPrimary").value = item?.primary || "#194A92";
  document.querySelector("#settingsCompanyAccent").value = item?.accent || "#71C63A";
  document.querySelector("#settingsCompanyDefault").checked = item?.isDefault || false;
  document.querySelector("#settingsCompanyActive").checked = item?.active ?? true;
  document.querySelector("#settingsCompanyLogoInput").value = "";
  renderCompanyLogoPreview(pendingCompanyLogo, item?.name);
  document.querySelector("#settingsCompanyDialog").showModal();
}
function openBenefitForm(item) {
  editingBenefitId = item?.id || null;
  document.querySelector("#settingsBenefitFormTitle").textContent = item ? "Editar benefício" : "Novo benefício";
  document.querySelector("#settingsBenefitName").value = item?.name || "";
  document.querySelector("#settingsBenefitDescription").value = item?.description || "";
  document.querySelector("#settingsBenefitActive").checked = item?.active ?? true;
  document.querySelector("#settingsBenefitDialog").showModal();
}

function openStageForm() {
  document.querySelector("#settingsStageForm").reset();
  document.querySelector("#settingsStageActive").checked = true;
  document.querySelector("#settingsStageError").hidden = true;
  document.querySelector("#settingsStageDialog").showModal();
}

function openEmailTemplate(item) {
  editingEmailTemplateId = item.id;
  document.querySelector("#settingsEmailCode").textContent = `CÓDIGO: ${item.code}`;
  document.querySelector("#settingsEmailFormTitle").textContent = item.name;
  document.querySelector("#settingsEmailName").value = item.name;
  document.querySelector("#settingsEmailSubject").value = item.subject;
  document.querySelector("#settingsEmailBody").value = item.body;
  document.querySelector("#settingsEmailActive").checked = item.active;
  document.querySelector("#settingsEmailDialog").showModal();
}

function openRejectionForm(item) {
  editingRejectionId = item?.id || null;
  document.querySelector("#settingsRejectionFormTitle").textContent = item ? "Editar justificativa" : "Nova justificativa";
  document.querySelector("#settingsRejectionMessage").value = item?.name || "";
  document.querySelector("#settingsRejectionActive").checked = item?.active ?? true;
  document.querySelector("#settingsRejectionDialog").showModal();
}

document.querySelector("#settingsPage").addEventListener("click", (event) => {
  const emailRow = event.target.closest("[data-email-template-id]");
  if (emailRow) { const item = emailTemplates.find((entry) => entry.id === Number(emailRow.dataset.emailTemplateId)); if (item) openEmailTemplate(item); return; }
  const stageAction = event.target.closest("[data-stage-action]");
  if (stageAction) {
    const row = stageAction.closest("[data-stage-id]");
    const item = pipelineStageCatalog.find((entry) => entry.id === Number(row.dataset.stageId));
    if (!item) return;
    if (stageAction.dataset.stageAction === "toggle") {
      const count = candidates.filter((candidate) => candidate.stage === item.name).length;
      if (item.active && count) { document.querySelector("#stageCandidatesDialog").showModal(); return; }
      item.active = !item.active;
      const pipelineIndex = pipelineStages.indexOf(item.name);
      if (item.active && pipelineIndex < 0) pipelineStages.push(item.name);
      if (!item.active && pipelineIndex >= 0) pipelineStages.splice(pipelineIndex, 1);
      renderSettings(); renderPipeline(); showToast("Etapa atualizada", `${item.name} agora está ${item.active ? "visível" : "oculta"} no pipeline.`); return;
    }
    if (stageAction.dataset.stageAction === "remove") {
      if (!window.confirm(`Excluir a etapa \"${item.name}\"? Esta ação não pode ser desfeita.`)) return;
      pipelineStageCatalog.splice(pipelineStageCatalog.indexOf(item), 1);
      const stageIndex = pipelineStages.indexOf(item.name); if (stageIndex >= 0) pipelineStages.splice(stageIndex, 1);
      renderSettings(); renderPipeline(); showToast("Etapa removida", `${item.name} foi removida do catálogo.`); return;
    }
  }
  const screeningTabButton = event.target.closest("[data-screening-tab]");
  if (screeningTabButton) { screeningTab = screeningTabButton.dataset.screeningTab; renderScreenings(); return; }
  const filterButton = event.target.closest("[data-analysis-filter]");
  if (filterButton) { analysisFilter = filterButton.dataset.analysisFilter; document.querySelectorAll("[data-analysis-filter]").forEach((button) => button.classList.toggle("is-active", button === filterButton)); renderScreenings(); return; }
  const view = event.target.closest("[data-settings-view]");
  if (view) { setSettingsView(view.dataset.settingsView); return; }
  if (event.target.closest("[data-settings-back]")) { setSettingsView("home"); return; }
  const soon = event.target.closest("[data-settings-soon]");
  if (soon) { showToast(soon.dataset.settingsSoon, "Este catálogo será detalhado na próxima etapa do protótipo."); return; }
  const menuButton = event.target.closest("[data-settings-menu]");
  if (menuButton) {
    const menu = menuButton.parentElement.querySelector(".settings-row-menu");
    document.querySelectorAll(".settings-row-menu").forEach((node) => { if (node !== menu) node.hidden = true; });
    menu.hidden = !menu.hidden; return;
  }
  const action = event.target.closest("[data-settings-action]");
  if (!action) {
    const managerRow = event.target.closest('[data-settings-item="manager"]');
    if (managerRow) openSettingsManagerForm(settingsManagers.find((item) => item.id === Number(managerRow.dataset.settingsId)));
    return;
  }
  const row = action.closest("[data-settings-item]");
  const type = row.dataset.settingsItem; const id = Number(row.dataset.settingsId);
  const collection = type === "department" ? departments : type === "manager" ? settingsManagers : type === "role" ? settingsRoles : type === "company" ? companies : type === "rejection" ? rejectionReasons : benefitsCatalog;
  const item = collection.find((entry) => entry.id === id); if (!item) return;
  if (action.dataset.settingsAction === "edit") { if (type === "department") openDepartmentForm(item); else if (type === "manager") openSettingsManagerForm(item); else if (type === "role") openSettingsRoleForm(item); else if (type === "company") openCompanyForm(item); else if (type === "rejection") openRejectionForm(item); else openBenefitForm(item); }
  if (action.dataset.settingsAction === "toggle") { item.active = !item.active; renderSettings(); showToast("Status atualizado", `${item.name} agora está ${item.active ? "ativo" : "inativo"}.`); }
  if (action.dataset.settingsAction === "resend") { item.credentialsSentAt = new Date().toISOString(); showToast("Credenciais reenviadas", `Um novo acesso foi enviado para ${item.email}.`); }
  if (action.dataset.settingsAction === "remove") { if (!window.confirm(`Excluir \"${item.name}\"? Esta ação não pode ser desfeita.`)) return; const index = collection.indexOf(item); collection.splice(index, 1); renderSettings(); showToast("Item removido", `${item.name} foi removido do catálogo.`); }
});

document.querySelector("#newDepartmentButton").addEventListener("click", () => openDepartmentForm());
document.querySelector("#newManagerButton").addEventListener("click", () => openSettingsManagerForm());
document.querySelector("#newRoleButton").addEventListener("click", () => openSettingsRoleForm());
document.querySelector("#newCompanyButton").addEventListener("click", () => openCompanyForm());
document.querySelector("#newBenefitButton").addEventListener("click", () => openBenefitForm());
document.querySelector("#newStageButton").addEventListener("click", openStageForm);
document.querySelector("#newRejectionButton").addEventListener("click", () => openRejectionForm());
document.querySelector("#settingsManagerList").addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest("button")) return;
  const row = event.target.closest('[data-settings-item="manager"]'); if (!row) return;
  event.preventDefault(); openSettingsManagerForm(settingsManagers.find((item) => item.id === Number(row.dataset.settingsId)));
});
document.querySelector("#settingsEmailList").addEventListener("keydown", (event) => { if (event.key !== "Enter" && event.key !== " ") return; const row = event.target.closest("[data-email-template-id]"); if (!row) return; event.preventDefault(); const item = emailTemplates.find((entry) => entry.id === Number(row.dataset.emailTemplateId)); if (item) openEmailTemplate(item); });
document.querySelector("#managerAnalysisList").addEventListener("click", (event) => { const card = event.target.closest("[data-analysis-id]"); if (card) openManagerAnalysis(managerAnalyses.find((item) => item.id === Number(card.dataset.analysisId))); });
document.querySelector("#managerAnalysisList").addEventListener("keydown", (event) => { if (event.key !== "Enter" && event.key !== " ") return; const card = event.target.closest("[data-analysis-id]"); if (!card) return; event.preventDefault(); openManagerAnalysis(managerAnalyses.find((item) => item.id === Number(card.dataset.analysisId))); });
document.querySelector("#closeManagerAnalysis").addEventListener("click", () => document.querySelector("#managerAnalysisDialog").close());
document.querySelectorAll("[data-analysis-decision]").forEach((button) => button.addEventListener("click", () => {
  const item = managerAnalyses.find((entry) => entry.id === selectedAnalysisId); if (!item) return;
  item.status = button.dataset.analysisDecision; item.rhNote = document.querySelector("#analysisRhNote").value.trim(); item.opinion = item.status === "approved" ? "Parecer aprovado pelo RH." : "Parecer reprovado pelo RH.";
  document.querySelector("#managerAnalysisDialog").close(); renderScreenings(); showToast(item.status === "approved" ? "Análise aprovada" : "Análise reprovada", `${item.candidate} foi atualizado no fluxo.`);
}));
document.querySelectorAll("[data-close-settings-dialog]").forEach((button) => button.addEventListener("click", () => document.querySelector(`#${button.dataset.closeSettingsDialog}`).close()));

document.querySelector("#departmentForm").addEventListener("submit", (event) => {
  event.preventDefault(); const current = departments.find((item) => item.id === editingDepartmentId);
  const data = { name: document.querySelector("#departmentNameInput").value.trim(), description: document.querySelector("#departmentDescriptionInput").value.trim(), active: document.querySelector("#departmentActiveInput").checked };
  if (current) Object.assign(current, data); else departments.push({ id: Date.now(), ...data });
  document.querySelector("#departmentFormDialog").close(); renderSettings(); showToast("Departamento salvo", `${data.name} está disponível no catálogo.`);
});
document.querySelector("#settingsManagerForm").addEventListener("submit", (event) => {
  event.preventDefault(); const current = settingsManagers.find((item) => item.id === editingSettingsManagerId);
  const data = { name: document.querySelector("#settingsManagerName").value.trim(), email: document.querySelector("#settingsManagerEmail").value.trim(), phone: document.querySelector("#settingsManagerPhone").value.trim(), company: document.querySelector("#settingsManagerCompany").value, department: document.querySelector("#settingsManagerDepartment").value, role: document.querySelector("#settingsManagerRole").value.trim(), portalAccess: document.querySelector("#settingsManagerPortalAccess").checked, active: document.querySelector("#settingsManagerActive").checked };
  if (current) Object.assign(current, data); else settingsManagers.push({ id: Date.now(), ...data });
  document.querySelector("#settingsManagerDialog").close(); renderSettings(); showToast("Gestor salvo", `${data.name} foi vinculado a ${data.department}.`);
});
document.querySelector("#settingsRoleForm").addEventListener("submit", (event) => {
  event.preventDefault(); const current = settingsRoles.find((item) => item.id === editingSettingsRoleId);
  const data = { name: document.querySelector("#settingsRoleName").value.trim(), department: document.querySelector("#settingsRoleDepartment").value || "Sem departamento", description: document.querySelector("#settingsRoleDescription").value.trim(), active: document.querySelector("#settingsRoleActive").checked };
  if (current) Object.assign(current, data); else settingsRoles.push({ id: Date.now(), ...data });
  document.querySelector("#settingsRoleDialog").close(); renderSettings(); showToast("Cargo salvo", `${data.name} foi adicionado ao catálogo.`);
});
document.querySelector("#changeCompanyLogo").addEventListener("click", () => document.querySelector("#settingsCompanyLogoInput").click());
document.querySelector("#settingsCompanyLogoInput").addEventListener("change", (event) => {
  const file = event.target.files?.[0]; if (!file) return;
  const reader = new FileReader(); reader.onload = () => { pendingCompanyLogo = String(reader.result); renderCompanyLogoPreview(pendingCompanyLogo, document.querySelector("#settingsCompanyName").value); }; reader.readAsDataURL(file);
});
document.querySelector("#settingsCompanyName").addEventListener("input", (event) => { if (!pendingCompanyLogo) renderCompanyLogoPreview("", event.target.value); });
document.querySelector("#settingsCompanyForm").addEventListener("submit", (event) => {
  event.preventDefault(); const current = companies.find((item) => item.id === editingCompanyId);
  const data = { name: document.querySelector("#settingsCompanyName").value.trim(), location: document.querySelector("#settingsCompanyLocation").value.trim(), about: document.querySelector("#settingsCompanyAbout").value.trim(), benefits: document.querySelector("#settingsCompanyBenefits").value.trim(), slogan: document.querySelector("#settingsCompanySlogan").value.trim(), primary: document.querySelector("#settingsCompanyPrimary").value.trim(), accent: document.querySelector("#settingsCompanyAccent").value.trim(), logo: pendingCompanyLogo, isDefault: document.querySelector("#settingsCompanyDefault").checked, active: document.querySelector("#settingsCompanyActive").checked };
  if (data.isDefault) companies.forEach((item) => { item.isDefault = false; });
  if (current) Object.assign(current, data); else companies.push({ id: Date.now(), ...data });
  document.querySelector("#settingsCompanyDialog").close(); renderSettings(); showToast("Empresa salva", `${data.name} foi ${current ? "atualizada" : "adicionada"}.`);
});
document.querySelector("#settingsBenefitForm").addEventListener("submit", (event) => {
  event.preventDefault(); const current = benefitsCatalog.find((item) => item.id === editingBenefitId);
  const data = { name: document.querySelector("#settingsBenefitName").value.trim(), description: document.querySelector("#settingsBenefitDescription").value.trim(), active: document.querySelector("#settingsBenefitActive").checked };
  if (current) Object.assign(current, data); else benefitsCatalog.push({ id: Date.now(), ...data });
  document.querySelector("#settingsBenefitDialog").close(); renderSettings(); renderNewJobCatalogs(); showToast("Benefício salvo", `${data.name} foi ${current ? "atualizado" : "adicionado"} ao catálogo.`);
});
document.querySelector("#settingsStageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const code = document.querySelector("#settingsStageCode").value.trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  const name = document.querySelector("#settingsStageName").value.trim();
  const error = document.querySelector("#settingsStageError");
  if (!code || pipelineStageCatalog.some((item) => item.code === code)) { error.textContent = "Informe um código único para esta etapa."; error.hidden = false; return; }
  const active = document.querySelector("#settingsStageActive").checked;
  pipelineStageCatalog.push({ id: Date.now(), code, name, active, system: false });
  if (active) pipelineStages.push(name);
  document.querySelector("#settingsStageDialog").close(); renderSettings(); renderPipeline(); showToast("Etapa criada", `${name} foi adicionada ao final do pipeline.`);
});
document.querySelector("#settingsEmailForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const item = emailTemplates.find((entry) => entry.id === editingEmailTemplateId); if (!item) return;
  item.name = document.querySelector("#settingsEmailName").value.trim();
  item.subject = document.querySelector("#settingsEmailSubject").value.trim();
  item.body = document.querySelector("#settingsEmailBody").value.trim();
  item.active = document.querySelector("#settingsEmailActive").checked;
  document.querySelector("#settingsEmailDialog").close(); renderSettings(); showToast("Modelo atualizado", `${item.name} foi salvo com sucesso.`);
});
document.querySelector("#settingsRejectionForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const current = rejectionReasons.find((item) => item.id === editingRejectionId);
  const data = { name: document.querySelector("#settingsRejectionMessage").value.trim(), active: document.querySelector("#settingsRejectionActive").checked };
  if (current) Object.assign(current, data); else rejectionReasons.push({ id: Date.now(), ...data });
  document.querySelector("#settingsRejectionDialog").close(); renderSettings(); showToast("Justificativa salva", `O motivo foi ${current ? "atualizado" : "adicionado"} ao catálogo.`);
});

function selectResultTab(tab) {
  selectedResultTab = tab;
  selectedResultId = null;
  document.querySelectorAll("[data-result-tab]").forEach((item) => {
    item.setAttribute("aria-selected", item.dataset.resultTab === tab ? "true" : "false");
  });
}

function selectTalentTab(tab) {
  selectedTalentTab = tab;
  document.querySelectorAll("[data-talent-tab]").forEach((item) => {
    item.setAttribute("aria-selected", item.dataset.talentTab === tab ? "true" : "false");
  });
}

function showPage(page, options = {}) {
  analysisStandalone = page === "analisesGestores";
  if (analysisStandalone) setSettingsView("screenings");
  const inJobBoard = page === "jobs" && Boolean(jobBoardTitle);

  dashboardPage.hidden = page !== "dashboard";
  painelPage.hidden = page !== "painel";
  relatoriosPage.hidden = page !== "relatorios";
  designSystemPage.hidden = page !== "designSystem";
  settingsPage.hidden = page !== "settings" && !analysisStandalone;
  pipelinePage.hidden = page !== "pipeline" && !inJobBoard;
  jobsPage.hidden = page !== "jobs" || inJobBoard;
  newJobPage.hidden = page !== "newJob";
  talentosPage.hidden = page !== "talentos";
  resultadosPage.hidden = page !== "resultados";
  entrevistasPage.hidden = page !== "entrevistas";
  if (gestorPage) gestorPage.hidden = page !== "gestor";
  tecnicosPage.hidden = page !== "tecnicos";

  pipelinePage.classList.toggle("is-job-board", inJobBoard);
  document.querySelector("#pipelineHeading").hidden = inJobBoard;
  document.querySelector("#jobBoardHeading").hidden = !inJobBoard;
  if (inJobBoard) {
    document.querySelector("#jobBoardSubtitle").textContent = jobBoardTitle;
  }
  syncJobBoardView();

  if (page === "tecnicos") {
    if (options.testId) openTestEditor(options.testId);
    else showTestList();
  }
  if (page === "pipeline" || inJobBoard) renderPipeline();
  if (page === "entrevistas") renderAgenda();
  if (page === "talentos") renderTalents();
  if (page === "resultados") renderResults();
  if (page === "jobs" && !inJobBoard) renderJobs();
  if (page === "settings" || analysisStandalone) renderSettings();
  if (page === "gestor") renderGestorPortal();
  if (page === "painel") renderAnalytics();
  if (page === "relatorios") renderReports();
  if (page === "dashboard") renderDashboard();

  const navPage = inJobBoard || page === "newJob" ? "jobs" : page;
  document.querySelector("#pageTitle").textContent = inJobBoard
    ? "Candidatos da vaga"
    : pageNames[page] || "Portal RH";
  document.title = `Portal RH | ${inJobBoard ? "Candidatos da vaga" : pageNames[page] || "Portal RH"}`;
  document.querySelectorAll("[data-page]").forEach((item) => {
    const active = item.dataset.page === navPage;
    item.classList.toggle("active", active);
    item.toggleAttribute("aria-current", active);
  });
  const hash = inJobBoard || page === "newJob" ? "vagas" : hashByPage[page];
  if (hash) history.replaceState(null, "", `#${hash}`);
  closeSidebar();
}

function renderGestorPortal() {
  const nameEl = document.querySelector("#gestorManagerName");
  if (nameEl) nameEl.textContent = currentManagerName.split(" ")[0];
  const myJobs = jobs.filter((job) => job.manager === currentManagerName);
  const myAnalyses = managerAnalyses.filter(
    (item) => item.manager === currentManagerName && item.status === "pending",
  );
  const myTitles = new Set(myJobs.map((job) => job.title));
  const myCandidates = candidates.filter((c) => myTitles.has(c.vacancy));
  const stats = document.querySelector("#gestorStats");
  if (stats) {
    stats.innerHTML = `
      <article class="gestor-stat"><strong>${padCount(myJobs.length)}</strong><span>Minhas vagas</span></article>
      <article class="gestor-stat"><strong>${padCount(myAnalyses.length)}</strong><span>Análises pendentes</span></article>
      <article class="gestor-stat"><strong>${padCount(myCandidates.length)}</strong><span>Candidatos no pipeline</span></article>
      <article class="gestor-stat"><strong>${padCount(myJobs.filter((job) => job.status === "Aberta").length)}</strong><span>Vagas abertas</span></article>
    `;
  }
  const jobsList = document.querySelector("#gestorJobsList");
  if (jobsList) {
    jobsList.innerHTML = myJobs.length
      ? myJobs
          .map(
            (job) => `
              <article class="gestor-item gestor-job-item" data-open-job="${escapeHtml(job.title)}" tabindex="0">
                <div>
                  <strong>${escapeHtml(job.title)}</strong>
                  <span>${escapeHtml(job.area)} · ${escapeHtml(job.status)}</span>
                </div>
                <span class="gestor-pill">${job.applicants || 0} candidatos</span>
              </article>
            `,
          )
          .join("")
      : `<p class="panel-note">Nenhuma vaga atribuída a você.</p>`;
  }
  const analysesList = document.querySelector("#gestorAnalysesList");
  if (analysesList) {
    analysesList.innerHTML = myAnalyses.length
      ? myAnalyses
          .map(
            (item) => `
              <article class="gestor-item gestor-analysis-item" data-gestor-analysis="${item.id}" tabindex="0">
                <div>
                  <strong>${escapeHtml(item.candidate)}</strong>
                  <span>${escapeHtml(item.role)} · ${escapeHtml(item.due)}</span>
                </div>
                <button type="button" class="secondary-button" data-gestor-analysis="${item.id}">Abrir análise</button>
              </article>
            `,
          )
          .join("")
      : `<p class="panel-note">Nenhuma análise pendente.</p>`;
  }
  const candList = document.querySelector("#gestorCandidatesList");
  if (candList) {
    candList.innerHTML = myCandidates.length
      ? myCandidates
          .map((c) => {
            const match = computeMatch(c.vacancy, c);
            return `
              <article class="gestor-item gestor-candidate-item">
                <div class="gestor-candidate-main">
                  <strong class="gestor-candidate-name">${escapeHtml(c.name)}</strong>
                  <span class="gestor-candidate-meta">${escapeHtml(c.vacancy)} · ${escapeHtml(c.stage)}</span>
                </div>
                <div class="gestor-candidate-actions">
                  <span class="gestor-match">${match.total}% compatível</span>
                  <button type="button" class="secondary-button" data-gestor-view="${c.id}">Ver candidato</button>
                  <button type="button" class="secondary-button" data-gestor-interview="${c.id}">Marcar uma reunião</button>
                </div>
              </article>
            `;
          })
          .join("")
      : `<p class="panel-note">Nenhum candidato no pipeline das suas vagas.</p>`;
  }
}

function goToPage(page, options = {}) {
  closeOverlayDialogs();
  if (entityDialog.open) entityDialog.close();
  if (interviewDetailDialog.open) interviewDetailDialog.close();
  if (candidateDialog.open && page !== "pipeline" && !(page === "jobs" && options.jobBoard)) {
    candidateDialog.close();
  }
  if (page === "jobs" && options.jobBoard && options.jobTitle) {
    jobBoardTitle = options.jobTitle;
    jobBoardView = options.jobView || jobBoardView || "kanban";
  } else if (page === "jobs" || page === "pipeline") {
    jobBoardTitle = "";
    jobBoardView = "kanban";
  } else {
    jobBoardTitle = "";
  }
  if (options.jobTitle) {
    renderJobFilter();
    jobFilter.value = options.jobTitle;
  } else if (!jobBoardTitle && page === "pipeline") {
    jobFilter.value = "all";
  }
  if (options.resultTab) selectResultTab(options.resultTab);
  if (options.talentTab) selectTalentTab(options.talentTab);
  if (options.talentId) selectedTalentId = options.talentId;
  if (options.interviewId) {
    selectedInterviewId = options.interviewId;
    const interview = interviews.find((item) => item.id === options.interviewId);
    if (interview) selectedInterviewDay = dayKey(interview.at);
  }
  showPage(page, options);
  if (page === "settings") setSettingsView("home");
  if (options.candidateId) openCandidate(options.candidateId);
}

function handleGoTarget(target) {
  if (target.dataset.openTest) {
    if (candidateDialog.open) candidateDialog.close();
    goToPage("tecnicos", { testId: Number(target.dataset.openTest) });
    return;
  }
  if (target.dataset.openJob) {
    goToPage("jobs", { jobTitle: target.dataset.openJob, jobBoard: true });
    return;
  }
  if (target.dataset.openCandidate) {
    goToPage("pipeline", { candidateId: Number(target.dataset.openCandidate) });
    return;
  }
  if (target.dataset.goPage) {
    goToPage(target.dataset.goPage, {
      resultTab: target.dataset.resultTab,
      talentTab: target.dataset.talentTab,
      interviewId: target.dataset.interviewId
        ? Number(target.dataset.interviewId)
        : undefined,
    });
  }
}

document.querySelectorAll("[data-page]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    goToPage(link.dataset.page);
  });
});

document.addEventListener("click", (event) => {
  const target = event.target.closest(
    "[data-go-page], [data-open-job], [data-open-candidate], [data-open-test]",
  );
  if (!target || target.closest(".main-nav")) return;
  if (target.closest("#jobList, #talentList, #resultList, #interviewList, #kanban")) {
    return;
  }
  handleGoTarget(target);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target.closest("[data-go-page], [data-open-job], [data-open-candidate]");
  if (!target || target.matches("a, button, input, textarea, select")) return;
  event.preventDefault();
  handleGoTarget(target);
});

document.querySelectorAll(".dashboard-new-job").forEach((button) => {
  button.addEventListener("click", openNewJobPage);
});

document.querySelector("#dashboardMatchList").addEventListener("click", (event) => {
  const match = event.target.closest("[data-dashboard-candidate]");
  if (!match) return;
  goToPage("pipeline", { candidateId: Number(match.dataset.dashboardCandidate) });
});

document.querySelector("#dashboardMatchList").addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const match = event.target.closest("[data-dashboard-candidate]");
  if (!match) return;
  event.preventDefault();
  goToPage("pipeline", { candidateId: Number(match.dataset.dashboardCandidate) });
});

document.querySelector("#dashboardFunnel").addEventListener("click", (event) => {
  const step = event.target.closest("[data-funnel-stage]");
  if (!step) return;
  selectedFunnelStage = step.dataset.funnelStage;
  document.querySelectorAll("[data-funnel-stage]").forEach((item) => {
    const selected = item.dataset.funnelStage === selectedFunnelStage;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
  goToPage("pipeline");
});

document.querySelector("#jobBoardBack").addEventListener("click", () => {
  goToPage("jobs");
});

document.querySelectorAll("[data-job-view]").forEach((button) => {
  button.addEventListener("click", () => {
    jobBoardView = button.dataset.jobView || "kanban";
    syncJobBoardView();
    if (jobBoardView === "list") renderJobCandidateList();
    else renderPipeline();
  });
});

jobCandidateList.addEventListener("click", (event) => {
  const selection = event.target.closest(".job-candidate-select");
  if (selection) {
    event.stopPropagation();
    const candidateId = Number(selection.dataset.pipelineSelect);
    const checkbox = selection.querySelector("input");
    if (checkbox?.checked) selectedPipelineCandidateIds.add(candidateId);
    else selectedPipelineCandidateIds.delete(candidateId);
    selection.closest(".job-candidate-row")?.classList.toggle("is-bulk-selected", checkbox?.checked);
    updatePipelineBulkBar();
    return;
  }
  const row = event.target.closest("[data-candidate-id]");
  if (!row) return;
  openCandidate(Number(row.dataset.candidateId));
});

jobCandidateList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  if (event.target.closest(".job-candidate-select")) return;
  const row = event.target.closest("[data-candidate-id]");
  if (!row) return;
  event.preventDefault();
  openCandidate(Number(row.dataset.candidateId));
});

candidateSearch.addEventListener("input", renderPipeline);
jobFilter.addEventListener("change", renderPipeline);
on("#pipelineFilterBtn", "click", openPipelineFiltersDialog);
on("#closePipelineFiltersDialog", "click", closePipelineFiltersDialog);
on("#pipelineFiltersClear", "click", () => {
  clearPipelineAdvancedFilters({ render: false });
  renderPipelineFilters();
});
on("#pipelineFiltersForm", "submit", applyPipelineFiltersFromDialog);
on("#pipelineFiltersDialog", "click", (event) => {
  if (event.target === event.currentTarget) closePipelineFiltersDialog();
});
on("#pipelineActiveFilters", "click", (event) => {
  if (event.target.closest("#pipelineClearActiveFilters")) {
    clearPipelineAdvancedFilters();
    return;
  }
  const chip = event.target.closest("[data-clear-pipeline-filter]");
  if (!chip) return;
  clearSinglePipelineFilter(chip.dataset.clearPipelineFilter);
});
on("#pipelineBulkClear", "click", clearPipelineSelection);
on("#pipelineBulkApply", "click", applyPipelineBulkStage);

kanban.addEventListener("click", (event) => {
  const selection = event.target.closest(".pipeline-card-select");
  const actionButton = event.target.closest("button");
  const commentForm = event.target.closest("[data-card-comment]");
  const card = event.target.closest(".pipeline-card");
  if (!card) return;

  if (selection) {
    event.stopPropagation();
    const candidateId = Number(selection.dataset.pipelineSelect);
    const checkbox = selection.querySelector("input");
    if (checkbox?.checked) selectedPipelineCandidateIds.add(candidateId);
    else selectedPipelineCandidateIds.delete(candidateId);
    card.classList.toggle("is-bulk-selected", checkbox?.checked);
    updatePipelineBulkBar();
    return;
  }

  if (commentForm) return;

  if (actionButton) {
    event.stopPropagation();
    const candidate = candidates.find(
      (item) => item.id === Number(card.dataset.candidateId),
    );
    if (!candidate) return;
    const action = actionButton.dataset.cardAction;
    runPipelineCandidateAction(candidate, action);
    return;
  }

  if (event.target.closest(".card-panel")) return;
  openCandidate(Number(card.dataset.candidateId));
});

kanban.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-card-comment]");
  if (!form) return;
  event.preventDefault();
  event.stopPropagation();
  const card = form.closest(".pipeline-card");
  const candidate = candidates.find((item) => item.id === Number(card.dataset.candidateId));
  const input = form.querySelector("[data-card-comment-input]");
  const message = input?.value.trim();
  if (!candidate || !message) return;
  addCandidateComment(candidate, message);
  expandedCardId = candidate.id;
  expandedCardPanel = "comments";
  renderPipeline();
  document
    .querySelector(`.pipeline-card[data-candidate-id="${candidate.id}"] [data-card-comment-input]`)
    ?.focus();
  if (candidateDialog.open && selectedCandidateId === candidate.id) {
    renderCandidateDetails(candidate);
  }
  showToast("Comentário enviado", "O comentário ficou no card e no histórico.");
});

kanban.addEventListener("keydown", (event) => {
  if (event.target.closest("input, textarea")) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest(".pipeline-card");
  if (!card) return;
  event.preventDefault();
  openCandidate(Number(card.dataset.candidateId));
});

kanban.addEventListener("dragstart", (event) => {
  if (event.target.closest("input, textarea, button, .card-panel")) {
    event.preventDefault();
    return;
  }
  const card = event.target.closest(".pipeline-card");
  if (!card) return;
  event.dataTransfer.setData("text/plain", card.dataset.candidateId);
  event.dataTransfer.effectAllowed = "move";
  card.style.opacity = "0.55";
});

kanban.addEventListener("dragend", (event) => {
  const card = event.target.closest(".pipeline-card");
  if (card) card.style.opacity = "";
  kanban
    .querySelectorAll(".drop-target")
    .forEach((column) => column.classList.remove("drop-target"));
});

kanban.addEventListener("dragover", (event) => {
  const column = event.target.closest(".kanban-column");
  if (!column) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  kanban.querySelectorAll(".kanban-column").forEach((item) => {
    item.classList.toggle("drop-target", item === column);
  });
});

kanban.addEventListener("dragleave", (event) => {
  const column = event.target.closest(".kanban-column");
  if (!column || column.contains(event.relatedTarget)) return;
  column.classList.remove("drop-target");
});

kanban.addEventListener("drop", (event) => {
  const column = event.target.closest(".kanban-column");
  if (!column) return;
  event.preventDefault();
  column.classList.remove("drop-target");
  moveCandidate(Number(event.dataTransfer.getData("text/plain")), column.dataset.stage);
});

document.querySelector("#closeCandidateDialog").addEventListener("click", () => {
  candidateDialog.close();
});

candidateDialog.addEventListener("click", (event) => {
  if (event.target === candidateDialog) candidateDialog.close();
});

document.querySelector("#closeInterviewDialog").addEventListener("click", () => {
  interviewDialog.close();
});

interviewDialog.addEventListener("click", (event) => {
  if (event.target === interviewDialog) interviewDialog.close();
});

document.querySelector("#interviewForm").addEventListener("submit", submitInterview);

document.querySelector("#openDatePicker").addEventListener("click", () => {
  renderDatePicker();
  datePickerDialog.showModal();
});

document.querySelector("#openTimePicker").addEventListener("click", () => {
  renderTimeSlots();
  timePickerDialog.showModal();
});

document.querySelector("#closeDatePicker").addEventListener("click", () => {
  datePickerDialog.close();
});

document.querySelector("#closeTimePicker").addEventListener("click", () => {
  timePickerDialog.close();
});

datePickerDialog.addEventListener("click", (event) => {
  if (event.target === datePickerDialog) datePickerDialog.close();
});

timePickerDialog.addEventListener("click", (event) => {
  if (event.target === timePickerDialog) timePickerDialog.close();
});

document.querySelector("#datePickerPrev").addEventListener("click", () => {
  datePickerCursor = new Date(datePickerCursor.getFullYear(), datePickerCursor.getMonth() - 1, 1);
  renderDatePicker();
});

document.querySelector("#datePickerNext").addEventListener("click", () => {
  datePickerCursor = new Date(datePickerCursor.getFullYear(), datePickerCursor.getMonth() + 1, 1);
  renderDatePicker();
});

document.querySelector("#datePickerGrid").addEventListener("click", (event) => {
  const day = event.target.closest("[data-pick-date]");
  if (!day) return;
  interviewDate = day.dataset.pickDate;
  syncInterviewPickerLabels();
  datePickerDialog.close();
});

document.querySelector("#timeSlotGrid").addEventListener("click", (event) => {
  const slot = event.target.closest("[data-pick-time]");
  if (!slot) return;
  interviewTime = slot.dataset.pickTime;
  if (!interviewTimeEnd || interviewTimeEnd <= interviewTime) {
    interviewTimeEnd = defaultInterviewTimeEnd(interviewTime);
  }
  syncInterviewPickerLabels();
  timePickerDialog.close();
});

on("#interviewModality", "change", syncInterviewModalityFields);
on("#interviewTimeEndInput", "change", (event) => {
  interviewTimeEnd = event.target.value || "";
});
on("#closeInterviewConflict", "click", () =>
  document.querySelector("#interviewConflictDialog")?.close(),
);
on("#cancelInterviewConflict", "click", () =>
  document.querySelector("#interviewConflictDialog")?.close(),
);
on("#forceInterviewSave", "click", () => {
  pendingInterviewForceConflict = true;
  document.querySelector("#interviewConflictDialog")?.close();
  submitInterview(new Event("submit", { cancelable: true }));
});
on("#interviewConflictDialog", "click", (event) => {
  if (event.target.id === "interviewConflictDialog") event.currentTarget.close();
});

document.querySelector("#closeContactDialog").addEventListener("click", () => {
  contactDialog.close();
});

document.querySelector("#cancelContact").addEventListener("click", () => {
  contactDialog.close();
});

contactDialog.addEventListener("click", (event) => {
  if (event.target === contactDialog) contactDialog.close();
});

document.querySelector("#contactMessage").addEventListener("input", updateContactPreview);

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const candidate = candidates.find((item) => item.id === selectedCandidateId) || selectedActionCandidate;
  const message = document.querySelector("#contactMessage").value.trim();
  if (!candidate || !message) return;
  if (candidate.lgpdConsent === false) {
    showToast("LGPD", "Envio registrado sem consentimento do candidato.");
  }
  const channelLabel = { email: "E-mail", whatsapp: "WhatsApp" }[contactChannel] || "E-mail";
  candidate.activities.unshift(["LD", "Larissa Dias", `Enviou ${channelLabel.toLowerCase()} ao candidato`, "Agora"]);
  candidate.history.unshift([channelLabel, `${message} · Larissa Dias`]);
  if (candidateDialog.open) renderCandidateDetails(candidate);
  contactDialog.close();
  showToast(`${channelLabel} enviado`, `Mensagem enviada para ${candidate.email}.`);
});

function closeOfferDialog() {
  if (offerFormDialog.open) offerFormDialog.close();
  if (offerDialog.open) offerDialog.close();
}

document.querySelector("#closeOfferDialog").addEventListener("click", closeOfferDialog);
document.querySelector("#offerClose").addEventListener("click", closeOfferDialog);
offerDialog.addEventListener("click", (event) => {
  if (event.target === offerDialog) closeOfferDialog();
});

document.querySelector("#offerNew").addEventListener("click", () => {
  const candidate = candidates.find((item) => item.id === selectedCandidateId);
  if (candidate) openOfferForm(candidate);
});

document.querySelector("#closeOfferForm").addEventListener("click", () => {
  offerFormDialog.close();
});
document.querySelector("#cancelOfferForm").addEventListener("click", () => {
  offerFormDialog.close();
});
offerFormDialog.addEventListener("click", (event) => {
  if (event.target === offerFormDialog) offerFormDialog.close();
});

document.querySelector("#offerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const candidate = candidates.find((item) => item.id === selectedCandidateId);
  if (!candidate) return;
  const amount = Number(document.querySelector("#offerAmount").value);
  if (!amount) {
    showToast("Proposta incompleta", "Informe o valor proposto.");
    return;
  }
  candidate.proposal = {
    amount,
    workModel: document.querySelector("#offerWorkModel").value,
    contract: document.querySelector("#offerContract").value,
    status: candidate.proposal?.status || undefined,
    pendingPdf: candidate.proposal?.pendingPdf || "",
    sends: candidate.proposal?.sends || [],
  };
  offerFormDialog.close();
  renderOfferDialog(candidate);
  renderPipeline();
  showToast("Proposta salva", `Valor ${formatOfferMoney(amount)} · ${candidate.proposal.workModel}.`);
});

document.querySelector("#offerAttachPdf").addEventListener("click", () => {
  document.querySelector("#offerPdfInput").click();
});

document.querySelector("#offerPdfInput").addEventListener("change", (event) => {
  const candidate = candidates.find((item) => item.id === selectedCandidateId);
  const file = event.target.files?.[0];
  if (!candidate || !file) return;
  if (!candidate.proposal) {
    candidate.proposal = {
      amount: 0,
      workModel: "Presencial",
      contract: "CLT",
      pendingPdf: file.name,
      sends: [],
    };
  } else {
    candidate.proposal.pendingPdf = file.name;
  }
  renderOfferDialog(candidate);
  showToast("PDF anexado", file.name);
  event.target.value = "";
});

document.querySelector("#offerSend").addEventListener("click", () => {
  const candidate = candidates.find((item) => item.id === selectedCandidateId);
  if (!candidate) return;
  if (!candidate.proposal?.amount) {
    showToast("Proposta pendente", "Crie uma nova proposta antes de enviar.");
    openOfferForm(candidate);
    return;
  }
  const message = document.querySelector("#offerMessage").value.trim();
  const now = new Date();
  const at = `${dayKey(now)}T${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:00`;
  candidate.proposal.sends.unshift({
    amount: candidate.proposal.amount,
    workModel: candidate.proposal.workModel,
    contract: candidate.proposal.contract,
    message,
    pdf: candidate.proposal.pendingPdf || "",
    at,
  });
  candidate.proposal.status = "enviada";
  candidate.history.unshift(["Proposta enviada", `Larissa Dias · ${formatOfferWhen(at)}`]);
  candidate.activities.unshift(["LD", "Larissa Dias", "Enviou a proposta comercial", "Agora"]);
  document.querySelector("#offerMessage").value = "";
  renderOfferDialog(candidate);
  renderPipeline();
  showToast("Proposta enviada", `Enviada para ${candidate.email}.`);
});

document.querySelectorAll("[data-candidate-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.candidateAction;
    const candidate = candidates.find((item) => item.id === selectedCandidateId);
    if (!candidate) return;
    closeCandidateMoreActions();
    runPipelineCandidateAction(candidate, action);
  });
});

function closeCandidateMoreActions() {
  const menu = document.querySelector("#candidateMoreActionsMenu");
  const trigger = document.querySelector("#candidateMoreActionsBtn");
  if (!menu || !trigger) return;
  menu.hidden = true;
  trigger.setAttribute("aria-expanded", "false");
}

function toggleCandidateMoreActions() {
  const menu = document.querySelector("#candidateMoreActionsMenu");
  const trigger = document.querySelector("#candidateMoreActionsBtn");
  if (!menu || !trigger) return;
  const opening = menu.hidden;
  menu.hidden = !opening;
  trigger.setAttribute("aria-expanded", String(opening));
}

function setCandidateActivityCollapsed(collapsed) {
  const body = document.querySelector("#candidateModalBody");
  const panel = document.querySelector("#activityPanel");
  const reveal = document.querySelector("#showActivities");
  if (!body || !panel || !reveal) return;
  if (body.querySelector(".candidate-dossier-tabs")) {
    reveal.hidden = true;
    panel.hidden = selectedCandidateDossierTab !== "comments";
    return;
  }
  body.classList.toggle("is-activity-collapsed", collapsed);
  panel.hidden = collapsed;
  reveal.hidden = !collapsed;
  if (activityList) activityList.hidden = false;
}

on("#candidateDialog", "click", (event) => {
  const tab = event.target.closest("[data-candidate-tab]");
  if (tab) {
    setCandidateDossierTab(tab.dataset.candidateTab);
    return;
  }
  const candidate = candidates.find((item) => item.id === selectedCandidateId);
  if (!candidate) return;

  if (event.target.closest("#toggleArchivedComments")) {
    showArchivedCandidateComments = !showArchivedCandidateComments;
    renderCandidateDetails(candidate);
    return;
  }

  const openInterviewBtn = event.target.closest("[data-open-interview]");
  if (openInterviewBtn) {
    const interview = interviews.find(
      (item) => String(item.id) === openInterviewBtn.dataset.openInterview,
    );
    if (interview) openInterviewDetail(interview);
    return;
  }

  const replaceDocBtn = event.target.closest("[data-replace-doc]");
  if (replaceDocBtn) {
    pendingReplaceDocId = replaceDocBtn.dataset.replaceDoc;
    document.querySelector("#candidateDocumentInput")?.click();
    return;
  }

  const statusDocBtn = event.target.closest("[data-doc-status]");
  if (statusDocBtn) {
    const doc = ensureCandidateDocuments(candidate).find(
      (item) => item.id === statusDocBtn.dataset.docStatus,
    );
    if (!doc) return;
    const cycle = ["Pendente", "Enviado", "Aprovado", "Rejeitado"];
    const next = cycle[(cycle.indexOf(doc.status) + 1) % cycle.length];
    doc.status = next;
    candidate.history.unshift([
      "Documento",
      `${doc.name}: ${next} · Larissa Dias · agora`,
    ]);
    renderCandidateDetails(candidate);
    return;
  }

  const editButton = event.target.closest("[data-edit-comment]");
  const archiveButton = event.target.closest("[data-archive-comment]");
  if (editButton) {
    const comment = ensureCandidateComments(candidate).find(
      (item) => String(item.id) === editButton.dataset.editComment,
    );
    if (!comment || comment.archived) return;
    const nextMessage = window.prompt("Editar comentário:", comment.message);
    if (!nextMessage?.trim()) return;
    comment.message = nextMessage.trim();
    comment.time = "Editado agora";
    candidate.history.unshift(["Comentário editado", `${comment.message} · Larissa Dias`]);
    renderCandidateDetails(candidate);
    return;
  }
  if (archiveButton) {
    const comment = ensureCandidateComments(candidate).find(
      (item) => String(item.id) === archiveButton.dataset.archiveComment,
    );
    if (!comment) return;
    comment.archived = !comment.archived;
    candidate.history.unshift([
      comment.archived ? "Comentário arquivado" : "Comentário restaurado",
      `${comment.message} · Larissa Dias`,
    ]);
    renderCandidateDetails(candidate);
  }
});

on("#candidateReplaceResume", "click", () => {
  document.querySelector("#candidateReplaceResumeInput")?.click();
});

on("#candidateReplaceResumeInput", "change", (event) => {
  const candidate = candidates.find((item) => item.id === selectedCandidateId);
  const file = event.target.files?.[0];
  if (!candidate || !file) return;
  if (candidate.attachment && candidate.resumeFileName) {
    if (
      !window.confirm(
        `Substituir o currículo atual (${candidate.resumeFileName})? A versão anterior ficará no histórico.`,
      )
    ) {
      event.target.value = "";
      return;
    }
    candidate.history.unshift([
      "Currículo anterior",
      `${candidate.resumeFileName} · arquivado · agora`,
    ]);
  }
  candidate.attachment = true;
  candidate.resumeFileName = file.name;
  candidate.history.unshift(["Currículo atualizado", `${file.name} · agora`]);
  renderCandidateDetails(candidate);
  setCandidateDossierTab("resume");
  renderPipeline();
  event.target.value = "";
  showToast("Currículo atualizado", file.name);
});

on("#candidateAddDocument", "click", () => {
  pendingReplaceDocId = null;
  document.querySelector("#candidateDocumentInput")?.click();
});

on("#candidateDocumentInput", "change", (event) => {
  const candidate = candidates.find((item) => item.id === selectedCandidateId);
  const file = event.target.files?.[0];
  if (!candidate || !file) return;
  const checklist = ensureCandidateDocuments(candidate);
  if (pendingReplaceDocId) {
    const doc = checklist.find((item) => item.id === pendingReplaceDocId);
    pendingReplaceDocId = null;
    if (!doc) {
      event.target.value = "";
      return;
    }
    if (doc.fileName) {
      if (
        !window.confirm(
          `Substituir ${doc.name} (${doc.fileName})? A versão anterior ficará no histórico.`,
        )
      ) {
        event.target.value = "";
        return;
      }
      candidate.history.unshift([
        "Documento anterior",
        `${doc.name}: ${doc.fileName} · arquivado · agora`,
      ]);
    }
    doc.fileName = file.name;
    doc.status = "Enviado";
    candidate.history.unshift(["Documento enviado", `${doc.name}: ${file.name} · agora`]);
  } else {
    candidate.documents = [...(candidate.documents || []), file.name];
    const pendingDoc = checklist.find((item) => item.status === "Pendente") || checklist[0];
    if (pendingDoc) {
      pendingDoc.fileName = file.name;
      pendingDoc.status = "Enviado";
    }
    candidate.history.unshift(["Documento adicionado", `${file.name} · agora`]);
  }
  renderCandidateDetails(candidate);
  setCandidateDossierTab("documents");
  event.target.value = "";
  showToast("Documento atualizado", file.name);
});

on("#candidateMoreActionsBtn", "click", (event) => {
  event.stopPropagation();
  toggleCandidateMoreActions();
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".candidate-more-wrap")) closeCandidateMoreActions();
});

document.querySelector("#toggleActivities").addEventListener("click", () => {
  setCandidateActivityCollapsed(true);
});

on("#showActivities", "click", () => {
  setCandidateActivityCollapsed(false);
});

on("#moveStageForm", "submit", confirmMoveStage);
on("#closeMoveStageDialog", "click", () => document.querySelector("#moveStageDialog")?.close());
on("#cancelMoveStage", "click", () => document.querySelector("#moveStageDialog")?.close());
on("#pipelineActionForm", "submit", confirmPipelineAction);
on("#closePipelineActionDialog", "click", () => document.querySelector("#pipelineActionDialog")?.close());
on("#cancelPipelineAction", "click", () => document.querySelector("#pipelineActionDialog")?.close());

document.querySelector("#commentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#commentInput");
  const message = input.value.trim();
  const candidate = candidates.find((item) => item.id === selectedCandidateId);
  if (!message || !candidate) return;

  addCandidateComment(candidate, message);
  input.value = "";
  renderCandidateDetails(candidate);
  setCandidateDossierTab("comments");
  renderPipeline();
  showToast("Comentário enviado", "A atividade foi registrada no histórico.");
});

function chartRamp(index, total) {
  const t = total <= 1 ? 0 : index / (total - 1);
  const hue = 127;
  const sat = 48 - 5 * t;
  const light = 45 + 28 * t;
  return `hsl(${hue} ${sat}% ${light}%)`;
}

function renderRankChart(target, rows) {
  const max = Math.max(...rows.map((item) => item[1]), 1);
  target.innerHTML = rows
    .map(([label, value], index) => {
      const color = chartRamp(index, rows.length);
      return `
        <div class="rank-row" data-open-job="${label}" tabindex="0">
          <span class="rank-index">${index + 1}</span>
          <div class="rank-body">
            <div class="rank-head">
              <span>${label}</span>
              <strong>${value}</strong>
            </div>
            <div class="rank-track">
              <span class="${index === 0 ? "is-lead" : ""}" style="width: ${(value / max) * 100}%; background: ${color}"></span>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderOriginDonut(target, rows) {
  const colored = rows.map(([label, value], index, list) => [
    label,
    value,
    chartRamp(index, list.length),
  ]);
  const total = colored.reduce((sum, item) => sum + item[1], 0);
  let cursor = 0;
  const gradient = colored
    .map(([, value, color]) => {
      const start = cursor;
      cursor += (value / total) * 100;
      return `${color} ${start}% ${cursor}%`;
    })
    .join(", ");

  target.innerHTML = `
    <div class="origin-donut-wrap">
      <div class="origin-donut" style="background: conic-gradient(${gradient})"></div>
      <div class="origin-donut-center">
        <strong>${total}</strong>
        <span>candidatos</span>
      </div>
    </div>
    <ul class="origin-legend">
      ${colored
        .map(
          ([label, value, color]) => `
            <li>
              <span class="origin-swatch" style="background: ${color}"></span>
              <span>${label}</span>
              <strong>${value}</strong>
              <small>${Math.round((value / total) * 100)}%</small>
            </li>
          `,
        )
        .join("")}
    </ul>
  `;
}

function formatDays(value) {
  return value.toFixed(1).replace(".", ",");
}

function formatAnalyticsPeriodLabel() {
  const fromInput = document.querySelector("#analyticsFrom");
  const toInput = document.querySelector("#analyticsTo");
  if (!fromInput?.value || !toInput?.value) return "Volume, conversão e ritmo do processo.";
  const [fromYear, fromMonth, fromDay] = fromInput.value.split("-");
  const [toYear, toMonth, toDay] = toInput.value.split("-");
  return `Volume, conversão e ritmo do processo de ${fromDay}/${fromMonth}/${fromYear} a ${toDay}/${toMonth}/${toYear}.`;
}

function renderAnalytics() {
  const subtitle = document.querySelector("#painelPage .dashboard-welcome p");
  if (subtitle) subtitle.textContent = formatAnalyticsPeriodLabel();
  const hired = results.filter((item) => item.status === "contratados").length;
  const dismissed = results.filter((item) => item.status === "dispensados").length;
  const stageOrder = [
    { label: "Inscrito", value: candidates.length + hired + dismissed, tone: "neutral" },
    { label: "Triagem", value: candidates.filter((c) => c.stage === "Triagem").length, tone: "neutral" },
    { label: "Entrevista", value: candidates.filter((c) => c.stage === "Entrevista RH").length, tone: "interview" },
    { label: "Proposta", value: candidates.filter((c) => c.stage === "Proposta").length, tone: "success" },
    { label: "Contratado", value: hired, tone: "hired" },
    { label: "Dispensado", value: dismissed, tone: "exit" },
  ];
  const funnel = stageOrder.filter((stage, index) => index === 0 || stage.value > 0 || ["Contratado", "Dispensado", "Proposta", "Entrevista", "Triagem"].includes(stage.label));
  const topCount = Math.max(funnel[0].value, 1);
  const conversions = funnel.slice(1).map((stage, index) => {
    const prev = funnel[index].value || 1;
    return Math.round((stage.value / prev) * 100);
  });
  const positiveConversions = conversions.filter((value) => !Number.isNaN(value));
  const minConversion = positiveConversions.length ? Math.min(...positiveConversions) : 0;

  document.querySelector("#analyticsFunnel").innerHTML = `
    <ol class="funnel-stages" aria-label="Funil de recrutamento ao vivo">
      ${funnel
        .map((stage, index) => {
          const share = Math.round((stage.value / topCount) * 100);
          const width = Math.max(8, share);
          const conversion = index === 0 ? null : conversions[index - 1];
          const isDrop = conversion !== null && conversion === minConversion && funnel.length > 2;
          const passedLabel = index === 0
            ? "Entrada do processo"
            : isDrop
              ? `${conversion}% avançaram · maior queda`
              : `${conversion}% avançaram`;
          const link = funnelStageLinks[stage.label] || { page: "pipeline" };
          return `
            <li class="funnel-stage tone-${stage.tone}${isDrop ? " is-drop" : ""}" data-go-page="${link.page}"${link.resultTab ? ` data-result-tab="${link.resultTab}"` : ""} tabindex="0">
              <div class="funnel-stage-head">
                <span>${stage.label}</span>
                <strong>${stage.value}</strong>
              </div>
              <div class="funnel-stage-track" role="img" aria-label="${stage.value} candidatos, ${share}% dos inscritos">
                <span class="funnel-stage-fill" style="width: ${width}%"></span>
              </div>
              <div class="funnel-stage-meta">
                <small>${share}% dos inscritos</small>
                <small>${passedLabel}</small>
              </div>
            </li>
          `;
        })
        .join("")}
    </ol>
    <p class="funnel-exit">${dismissed} candidatos dispensados e ${hired} contratados no período atual.</p>`;
}

function renderReports() {
  const vacancyCounts = {};
  [...candidates, ...results].forEach((item) => {
    if (!item.vacancy) return;
    vacancyCounts[item.vacancy] = (vacancyCounts[item.vacancy] || 0) + 1;
  });
  const jobDemand = Object.entries(vacancyCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  renderRankChart(document.querySelector("#reportJobs"), jobDemand.length ? jobDemand : [["Sem dados", 0]]);
  renderOriginDonut(document.querySelector("#reportOrigin"), [
    ["Portal", Math.max(candidates.length, 1)],
    ["Banco de talentos", talents.filter((t) => t.status === "aprovados").length],
    ["Indicação", Math.max(1, Math.round(candidates.length * 0.2))],
    ["E-mail", Math.max(1, Math.round(results.length * 0.15))],
  ]);

  const hired = results.filter((item) => item.status === "contratados");
  const hires = ["Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"].map((label, index) => [
    label,
    index === 6 ? hired.length : 0,
  ]);
  const hireMax = Math.max(...hires.map((item) => item[1]), 1);
  document.querySelector("#reportPeriod").innerHTML = hires
    .map(
      ([label, value]) => `
        <div class="period-col"${value ? ' data-go-page="resultados" data-result-tab="contratados" tabindex="0"' : ""}>
          <strong>${value}</strong>
          <div class="period-track">
            <span class="${value ? "has-value" : "is-empty"}" style="height: ${value ? (value / hireMax) * 100 : 6}%"></span>
          </div>
          <small>${label}</small>
        </div>
      `,
    )
    .join("");

  const durationStages = ["Triagem", "Entrevista RH", "Proposta"];
  const durations = durationStages.map((stage) => {
    const inStage = candidates.filter((c) => c.stage === stage);
    const avg = inStage.length
      ? inStage.reduce((sum, c) => sum + daysInStage(c), 0) / inStage.length
      : 0;
    const tone = stage === "Entrevista RH" ? "interview" : stage === "Proposta" ? "success" : "neutral";
    const label = stage === "Entrevista RH" ? "Entrevista" : stage;
    return [label, avg, inStage.length, tone];
  });
  durations.push([
    "Contratado",
    0,
    hired.length,
    "hired",
  ]);
  durations.push([
    "Dispensado",
    results.filter((r) => r.status === "dispensados").length ? 8 : 0,
    results.filter((r) => r.status === "dispensados").length,
    "exit",
  ]);
  const dayMax = Math.max(...durations.map((item) => item[1]), 1);
  document.querySelector("#reportDuration").innerHTML = durations
    .map(([label, days, sample, tone]) => {
      const width = days ? (days / dayMax) * 100 : 0;
      return `
        <div class="duration-row" data-go-page="${funnelStageLinks[label]?.page || "pipeline"}"${funnelStageLinks[label]?.resultTab ? ` data-result-tab="${funnelStageLinks[label].resultTab}"` : ""} tabindex="0">
          <span>${label}</span>
          <div class="duration-track">
            <span class="tone-${tone}" style="width: ${width}%"></span>
          </div>
          <strong>${formatDays(days)} dias</strong>
          <small>n=${sample}</small>
        </div>
      `;
    })
    .join("");

  const dismissals = results.filter((item) => item.status === "dispensados");
  const reasonCounts = {};
  dismissals.forEach((item) => {
    const reason = (item.dismissReason || "Sem motivo informado").split(" — ")[0].slice(0, 60);
    reasonCounts[reason] = (reasonCounts[reason] || 0) + 1;
  });
  const hiredCount = hired.length;
  const dismissedCount = dismissals.length;
  const totalDecisions = hiredCount + dismissedCount || 1;
  const rejectPct = ((dismissedCount / totalDecisions) * 100).toFixed(1).replace(".", ",");
  const hirePct = ((hiredCount / totalDecisions) * 100).toFixed(1).replace(".", ",");
  const reasonRows = Object.entries(reasonCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([reason, count]) => `<li><span>${escapeHtml(reason)}</span><strong>${count}</strong></li>`)
    .join("");

  document.querySelector("#reportReject").innerHTML = `
    <div class="reject-summary" data-go-page="resultados" data-result-tab="dispensados" tabindex="0">
      <strong>${rejectPct}%</strong>
      <span>${dismissedCount} reprovados de ${totalDecisions} decisões finais</span>
    </div>
    <div class="reject-meter" role="img" aria-label="${rejectPct}% reprovados e ${hirePct}% contratados">
      <span class="reject-fail" style="width: ${(dismissedCount / totalDecisions) * 100}%"></span>
      <span class="reject-hire" style="width: ${(hiredCount / totalDecisions) * 100}%"></span>
    </div>
    <div class="reject-legend" aria-label="Distribuição de decisões finais">
      <span class="reject-legend-item" data-go-page="resultados" data-result-tab="dispensados" tabindex="0">
        <i class="reject-fail" aria-hidden="true"></i>
        <strong>Reprovados</strong>
        <em>${dismissedCount}</em>
      </span>
      <span class="reject-legend-item" data-go-page="resultados" data-result-tab="contratados" tabindex="0">
        <i class="reject-hire" aria-hidden="true"></i>
        <strong>Contratados</strong>
        <em>${hiredCount}</em>
      </span>
    </div>
    <ul class="reject-reasons">${reasonRows || "<li><span>Nenhum motivo registrado</span><strong>0</strong></li>"}</ul>
  `;
}

["analyticsFrom", "analyticsTo"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("change", () => {
    renderAnalytics();
    showToast("Período atualizado", "Os indicadores do painel foram recalculados para o intervalo escolhido.");
  });
});

["reportFrom", "reportTo"].forEach((id) => {
  document.querySelector(`#${id}`).addEventListener("change", () => {
    renderReports();
    showToast("Período atualizado", "Os relatórios foram recarregados para as datas escolhidas.");
  });
});

on("#dismissForm", "submit", (event) => {
  event.preventDefault();
  const reason = document.querySelector("#dismissReasonSelect").value;
  const note = document.querySelector("#dismissReasonNote").value.trim();
  const candidate = pendingDismissCandidate || candidates.find((item) => item.id === selectedCandidateId);
  if (!reason) {
    showToast("Motivo obrigatório", "Selecione um motivo para dispensar.");
    return;
  }
  if (!candidate) return;
  dismissCandidate(candidate, reason, note);
});
on("#closeDismissDialog", "click", () => dismissDialog?.close());
on("#cancelDismiss", "click", () => dismissDialog?.close());
on("#dismissDialog", "click", (event) => {
  if (event.target.id === "dismissDialog") dismissDialog.close();
});

on("#blockForm", "submit", (event) => {
  event.preventDefault();
  const reason = document.querySelector("#blockReasonSelect").value;
  const note = document.querySelector("#blockReasonNote").value.trim();
  const candidate =
    pendingBlockCandidate ||
    candidates.find((item) => item.id === selectedCandidateId) ||
    selectedEntity?.item;
  if (!reason) {
    showToast("Motivo obrigatório", "Selecione um motivo para bloquear.");
    return;
  }
  if (!candidate) return;
  blockCandidate(candidate, reason, note);
});
on("#closeBlockDialog", "click", () => document.querySelector("#blockDialog")?.close());
on("#cancelBlock", "click", () => document.querySelector("#blockDialog")?.close());
on("#blockDialog", "click", (event) => {
  if (event.target.id === "blockDialog") document.querySelector("#blockDialog").close();
});

on("#newJobStagesList", "click", (event) => {
  const chip = event.target.closest("[data-job-stage]");
  if (!chip) return;
  chip.classList.toggle("is-selected");
  chip.setAttribute("aria-pressed", String(chip.classList.contains("is-selected")));
  syncNewJobStagesValue();
});

on("#openLgpdSettings", "click", () => {
  document.querySelector("#lgpdRetentionDays").value = lgpdRetentionDays;
  lgpdDialog?.showModal();
});
on("#lgpdForm", "submit", (event) => {
  event.preventDefault();
  lgpdRetentionDays = Number(document.querySelector("#lgpdRetentionDays").value) || 365;
  candidates.forEach((c) => {
    if (!c.retainUntil) c.retainUntil = retainUntilFromDays();
  });
  talents.forEach((t) => {
    if (!t.retainUntil) t.retainUntil = retainUntilFromDays();
  });
  lgpdDialog?.close();
  showToast("LGPD", `Retenção padrão definida para ${lgpdRetentionDays} dias.`);
});
on("#closeLgpdDialog", "click", () => lgpdDialog?.close());
on("#cancelLgpd", "click", () => lgpdDialog?.close());
on("#lgpdDialog", "click", (event) => {
  if (event.target.id === "lgpdDialog") lgpdDialog.close();
});

document.querySelectorAll("[data-contact-channel]").forEach((button) => {
  button.addEventListener("click", () => setContactChannel(button.dataset.contactChannel));
});

on("#offerCandidateActions", "click", (event) => {
  const button = event.target.closest("[data-offer-status]");
  if (!button) return;
  const candidate = candidates.find((item) => item.id === selectedCandidateId);
  if (!candidate?.proposal) return;
  const status = button.dataset.offerStatus;
  candidate.proposal.status = status;
  candidate.history.unshift([`Proposta ${offerStatusLabel(status).toLowerCase()}`, "Simulação do candidato · agora"]);
  candidate.activities.unshift(["KG", candidate.name, `Marcou a proposta como ${status}`, "Agora"]);
  if (status === "recusada") {
    closeOfferDialog();
    moveCandidate(candidate.id, "Recusou Proposta");
  } else {
    renderOfferDialog(candidate);
    renderPipeline();
  }
  showToast("Status da proposta", `Proposta marcada como ${offerStatusLabel(status)}.`);
});

on("#interviewAllowBooking", "change", syncBookingAvailability);
on("#copyBookingLink", "click", async () => {
  const input = document.querySelector("#interviewBookingLink");
  if (!input?.value) return;
  try {
    await navigator.clipboard.writeText(input.value);
    showToast("Link copiado", "Envie o link de agendamento ao candidato.");
  } catch {
    input.select();
    showToast("Copiar manualmente", "Selecione e copie o link.");
  }
});
on("#openBookingPreview", "click", openBookingDialog);
on("#closeBookingDialog", "click", () => bookingDialog?.close());
on("#cancelBooking", "click", () => bookingDialog?.close());
on("#bookingDialog", "click", (event) => {
  if (event.target.id === "bookingDialog") bookingDialog.close();
});
on("#bookingSlotGrid", "click", (event) => {
  const slot = event.target.closest("[data-booking-slot]");
  if (!slot) return;
  selectedBookingSlot = slot.dataset.bookingSlot;
  renderBookingSlots();
});
on("#confirmBooking", "click", confirmBookingSlot);

on("#talentSuggestPanel", "click", (event) => {
  const button = event.target.closest("[data-invite-talent]");
  if (!button) return;
  inviteTalentToJob(button.dataset.inviteTalent);
});

on("#slaOverdueCounter", "click", () => {
  pipelineSlaFilter = "overdue";
  pipelinePendingFilter = "all";
  renderPipelineFilters();
  renderPipeline();
  showToast("SLA vencido", "Filtro aplicado: somente candidatos atrasados na etapa.");
});

on("#closeTestPreview", "click", () => document.querySelector("#testPreviewDialog").close());
on("#closeTestPreviewFooter", "click", () => document.querySelector("#testPreviewDialog").close());
on("#editFromPreview", "click", () => {
  document.querySelector("#testPreviewDialog").close();
  if (previewTestId) openTestEditor(previewTestId);
});
on("#testPreviewDialog", "click", (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});

on("#gestorPage", "click", (event) => {
  const analysis = event.target.closest("[data-gestor-analysis]");
  if (analysis) {
    const item = managerAnalyses.find((entry) => entry.id === Number(analysis.dataset.gestorAnalysis));
    if (item) openManagerAnalysis(item);
    return;
  }
  const viewBtn = event.target.closest("[data-gestor-view]");
  if (viewBtn) {
    const candidate = candidates.find((c) => c.id === Number(viewBtn.dataset.gestorView));
    if (candidate) openCandidate(candidate.id);
    return;
  }
  const interviewBtn = event.target.closest("[data-gestor-interview]");
  if (interviewBtn) {
    const candidate = candidates.find((c) => c.id === Number(interviewBtn.dataset.gestorInterview));
    if (candidate) openInterviewScheduler(candidate);
    return;
  }
  const job = event.target.closest("[data-open-job]");
  if (job) goToPage("jobs", { jobTitle: job.dataset.openJob, jobBoard: true });
});

renderJobFilter();
jobs.forEach(syncJobMetrics);
renderJobs();
renderPipeline();
renderDashboard();
renderAnalytics();
renderReports();
renderTalents();
renderResults();
renderAgenda();
renderTests();

document.addEventListener("click", (event) => {
  if (event.target.closest(".job-menu, .more-button")) return;
  closeJobMenus();
});

on("#closeManagerDialog", "click", () => document.querySelector("#managerDialog")?.close());
on("#managerDialog", "click", (event) => {
  if (event.target.id === "managerDialog") event.currentTarget.close();
});
on("#managerList", "click", (event) => {
  const option = event.target.closest("[data-manager-id]");
  if (!option) return;
  const manager = managers.find((item) => item.id === option.dataset.managerId);
  const candidate = candidates.find((item) => item.id === selectedCandidateId) || selectedActionCandidate;
  if (!manager || !candidate) return;
  candidate.manager = manager.name;
  candidate.history.unshift(["Gestor", `${manager.name} · agora`]);
  candidate.activities.unshift(["LD", "Larissa Dias", `Atribuiu ${manager.name} como gestor`, "Agora"]);
  document.querySelector("#managerDialog").close();
  if (candidateDialog.open) renderCandidateDetails(candidate);
  if (entityDialog.open) renderEntityDialog();
  showToast("Gestor atribuído", `${manager.name} ficou responsável por ${candidate.name}.`);
});

function closeTopbarPopovers(except = "") {
  ["notificationPopover", "profilePopover", "candidateProfilePopover"].forEach((id) => {
    const popover = document.querySelector(`#${id}`); if (!popover || id === except) return;
    popover.hidden = true;
  });
  document.querySelector(".notification-button")?.setAttribute("aria-expanded", String(except === "notificationPopover"));
  document.querySelector(".topbar:not(.candidate-topbar) .profile-button")?.setAttribute("aria-expanded", String(except === "profilePopover"));
  document.querySelector("#candidateProfileBtn")?.setAttribute("aria-expanded", String(except === "candidateProfilePopover"));
}
on(".notification-button", "click", () => {
  const popover = document.querySelector("#notificationPopover"); const opening = popover.hidden;
  closeTopbarPopovers(opening ? "notificationPopover" : ""); popover.hidden = !opening;
});
on(".topbar:not(.candidate-topbar) .profile-button", "click", () => {
  const popover = document.querySelector("#profilePopover"); const opening = popover.hidden;
  closeTopbarPopovers(opening ? "profilePopover" : ""); popover.hidden = !opening;
});
on("[data-profile-action='logout']", "click", () => closeTopbarPopovers());
document.querySelector(".topbar-actions").addEventListener("click", (event) => {
  const action = event.target.closest("[data-topbar-page]"); if (!action) return;
  closeTopbarPopovers(); goToPage(action.dataset.topbarPage, { resultTab: action.dataset.topbarResultTab });
});
document.addEventListener("click", (event) => { if (!event.target.closest(".topbar-actions")) closeTopbarPopovers(); });
on(".help-card button", "click", () => {
  showToast("Suporte", "Envie um e-mail para suporte@pontoagil.com.");
});
on("#candidateTalentBank", "click", () => {
  const inBank = document.querySelector("#candidateTalentBank")?.textContent.includes("No banco");
  const candidate = candidates.find((item) => item.id === selectedCandidateId); if (!candidate) return;
  let talent = talents.find((item) => normalize(item.email) === normalize(candidate.email));
  if (!talent) {
    talent = { id: Date.now(), name: candidate.name, email: candidate.email, status: "aprovados", motivo: `Aprovado a partir da vaga ${candidate.vacancy}.` };
    talents.unshift(talent); renderTalents();
  }
  candidateDialog.close();
  goToPage("talentos", { talentTab: talent.status });
  showToast(inBank ? "Banco de talentos" : "Talento adicionado", inBank ? `${candidate.name} já está no banco.` : `${candidate.name} foi adicionado aos aprovados.`);
});

/* ===== Candidate portal ===== */
const candidatePortal = document.querySelector("#candidatePortal");
const candidateSidebarToggle = document.querySelector("#candidateSidebarToggle");
const candidatePortalUser = {
  name: "Levi Luz Sousa",
  email: "leviluzbr@gmail.com",
  phone: "",
  city: "Palmas",
  uf: "TO",
  birthDate: "",
  area: "",
  seniority: "",
  workModelPref: "",
  skills: [],
  objective: "",
  summary: "",
  education: "",
  resumeFileName: "",
  applications: [
    { jobId: 16, title: "Recepcionista", appliedAt: "2026-08-27", stage: "Triagem" },
    { jobId: 6, title: "Administrativo", appliedAt: "2026-08-25", stage: "Em análise" },
    { jobId: 1, title: "Suporte de Sistemas", appliedAt: "2026-08-23", stage: "Entrevista RH" },
    { jobId: 5, title: "Desenvolvedor(a) Full Stack", appliedAt: "2026-08-19", stage: "Teste técnico" },
    { jobId: 10, title: "Coordenador(a) de RH", appliedAt: "2026-08-16", stage: "Proposta" },
  ],
};
let candidatePortalView = "jobs";
let selectedPublicJobId = null;
let candidatePortalReturnHash = "";
const candidateSelectedJobs = new Set();
let candidateAppsFilter = "all";
let candidateApplyJobIds = [];
let candidateApplyResume = { name: "", size: 0 };
const candidateConfirmedInterviewIds = new Set();
const candidateTestsInProgress = new Set();
const candidateCompletedTestKeys = new Set();
const candidateTestDrafts = new Map();
let candidateActiveTest = null;
const candidateInterviewDetails = {
  1: {
    at: "2026-08-29T10:00:00",
    type: "Entrevista RH",
    status: "Agendada",
    format: "Online · Google Meet",
    interviewer: "Mariana Costa · Analista de RH",
    meetingLink: "https://meet.google.com/player-rh-entrevista",
  },
};

function defaultCandidateJobFilters() {
  return {
    contract: "all",
    workModel: "all",
    location: "",
    seniority: "all",
    pcdOnly: false,
  };
}

let candidateJobFilters = defaultCandidateJobFilters();

function getCandidateInterviewItems() {
  return candidatePortalUser.applications
    .filter((app) => /entrevista/i.test(app.stage))
    .map((app) => ({
      ...app,
      ...(candidateInterviewDetails[app.jobId] || {
        at: "",
        type: "Entrevista RH",
        status: "Aguardando confirmação",
        format: "Detalhes serão enviados pelo RH",
      }),
    }));
}

function getCandidateTestItems() {
  return candidatePortalUser.applications
    .filter((app) => /teste/i.test(app.stage))
    .map((app) => ({
      ...app,
      test: tests.find((test) => test.id === 2),
      status: candidateCompletedTestKeys.has(`${2}:${app.jobId}`) ? "Concluído" : "Pendente",
      dueAt: "2026-09-02",
    }));
}

function formatCandidateInterviewDate(iso) {
  if (!iso) return "Data a confirmar";
  const date = new Date(iso);
  return `${date.toLocaleDateString("pt-BR")} às ${date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

function getCandidateHomeMatchAverage(apps) {
  const scores = apps
    .map((app) => {
      const job = jobs.find((item) => item.id === app.jobId);
      return job ? computeMatch(job, getCandidateMatchProfile()).total : null;
    })
    .filter((score) => typeof score === "number");
  return scores.length ? Math.round(scores.reduce((total, score) => total + score, 0) / scores.length) : 0;
}

function renderCandidateHome() {
  const apps = candidatePortalUser.applications;
  const profile = getCandidateProfileCompletion();
  const interviews = getCandidateInterviewItems().filter((item) => item.status !== "Concluída");
  const pendingTests = getCandidateTestItems().filter((item) => item.status !== "Concluído");
  const nextInterview = [...interviews].sort((a, b) => new Date(a.at || "2999-01-01") - new Date(b.at || "2999-01-01"))[0];
  const nextTest = pendingTests[0];
  const pendingCount = (profile < 80 ? 1 : 0) + pendingTests.length + interviews.filter((item) => !candidateConfirmedInterviewIds.has(item.jobId)).length;
  const matchAverage = getCandidateHomeMatchAverage(apps);
  const recommendations = publicJobs()
    .filter((job) => !apps.some((app) => app.jobId === job.id))
    .map((job) => ({ job, match: computeMatch(job, getCandidateMatchProfile()).total }))
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
  const welcome = document.querySelector("#candidateHomeWelcome");
  const stats = document.querySelector("#candidateHomeStats");
  const journey = document.querySelector("#candidateHomeJourneyList");
  const agenda = document.querySelector("#candidateHomeAgenda");
  const homeRecommendations = document.querySelector("#candidateHomeRecommendations");
  const recent = document.querySelector("#candidateHomeRecentList");
  if (welcome) {
    welcome.innerHTML = `
      <div class="candidate-home-welcome-copy">
        <span class="panel-kicker">BEM-VINDO DE VOLTA</span>
        <h1>Olá, ${escapeHtml(candidatePortalUser.name.split(" ")[0])}!</h1>
        <p>Aqui está um resumo da sua jornada profissional no Player RH.</p>
        <div class="candidate-home-progress">
          <div><span>Perfil para matching</span><strong>${profile}%</strong></div>
          <div class="candidate-profile-completion-bar" aria-hidden="true"><span style="width: ${profile}%"></span></div>
        </div>
          <button class="${profile < 80 ? "primary-button" : "secondary-button"} candidate-home-welcome-action" type="button" data-candidate-next-action="${profile < 80 ? "profile" : "jobs"}">${profile < 80 ? "Completar meu perfil" : "Encontrar novas vagas"}</button>
      </div>
    `;
  }
  if (stats) {
    stats.innerHTML = `
      <article class="dashboard-metric metric-navy candidate-dashboard-metric" data-candidate-next-action="interviews" tabindex="0">
        <div class="dashboard-metric-top">
          <span class="dashboard-metric-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 11h18" /></svg></span>
          <span class="metric-trend">Agenda</span>
        </div>
        <strong>${nextInterview?.at ? formatShortDate(nextInterview.at.split("T")[0]) : "—"}</strong>
        <span>Próximo compromisso</span>
        <small>${nextInterview?.at ? formatCandidateInterviewDate(nextInterview.at).split(" às ")[1] || "Horário a confirmar" : "Nenhum compromisso agendado"}</small>
      </article>
      <article class="dashboard-metric metric-green candidate-dashboard-metric" data-candidate-next-action="apps" tabindex="0">
        <div class="dashboard-metric-top">
          <span class="dashboard-metric-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5h16v14H4z" /><path d="M8 9h8M8 13h5" /></svg></span>
          <span class="metric-trend positive">${pendingCount ? "Atenção" : "Em dia"}</span>
        </div>
        <strong>${pendingCount}</strong>
        <span>Pendências atuais</span>
        <small>${pendingCount ? "Itens que pedem sua atenção" : "Tudo certo por aqui"}</small>
      </article>
      <article class="dashboard-metric metric-mint candidate-dashboard-metric" tabindex="0">
        <div class="dashboard-metric-top">
          <span class="dashboard-metric-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 17 9 12l3 3 7-8" /><path d="M15 7h4v4" /></svg></span>
          <span class="metric-trend positive">Match</span>
        </div>
        <strong>${matchAverage}%</strong>
        <span>Compatibilidade média</span>
        <small>Nas suas candidaturas</small>
      </article>
    `;
  }
  if (journey) {
    journey.innerHTML = apps.length
      ? apps
          .slice(0, 5)
          .map(
            (app) => `
              <button class="candidate-home-journey-item" type="button" data-candidate-home-app="${app.jobId}">
                <div class="candidate-home-journey-head">
                  <div><strong>${escapeHtml(app.title)}</strong><span>Atualizado em ${formatShortDate(app.appliedAt)}</span></div>
                  <span class="candidate-stage-pill ${candidateAppStageClass(app.stage)}">${escapeHtml(app.stage)}</span>
                </div>
                ${candidateApplicationTimeline(app)}
              </button>
            `,
          )
          .join("")
      : `<p class="candidate-empty">Sua jornada aparecerá aqui depois da primeira candidatura.</p>`;
  }
  if (agenda) {
    const agendaItems = [];
    if (nextInterview) {
      agendaItems.push(`
        <article class="candidate-home-agenda-item candidate-home-agenda-interview">
          <span class="candidate-home-agenda-icon"><svg class="ui-icon"><use href="${iconSpriteBase}#i-calendar"></use></svg></span>
          <div><strong>${escapeHtml(nextInterview.title)}</strong><span>Entrevista · ${formatCandidateInterviewDate(nextInterview.at)}</span></div>
          <button class="secondary-button candidate-home-inline-action" type="button" data-candidate-next-action="interviews">Ver detalhes</button>
        </article>
      `);
    }
    if (nextTest) {
      agendaItems.push(`
        <article class="candidate-home-agenda-item candidate-home-agenda-test">
          <span class="candidate-home-agenda-icon"><svg class="ui-icon"><use href="${iconSpriteBase}#i-clipboard"></use></svg></span>
          <div><strong>${escapeHtml(nextTest.test?.title || "Teste técnico")}</strong><span>Prazo sugerido: ${formatShortDate(nextTest.dueAt)}</span></div>
          <button class="secondary-button candidate-home-inline-action" type="button" data-candidate-next-action="tests">Abrir teste</button>
        </article>
      `);
    }
    agenda.innerHTML = agendaItems.length ? agendaItems.join("") : `<p class="candidate-empty">Você não tem compromissos pendentes.</p>`;
  }
  if (homeRecommendations) {
    homeRecommendations.innerHTML = recommendations.length
      ? recommendations
          .map(
            ({ job, match }) => `
              <button class="candidate-home-recommendation" type="button" data-candidate-home-recommendation="${job.id}">
                <div><strong>${escapeHtml(job.title)}</strong><span>${escapeHtml(job.workModel)} · ${escapeHtml(job.contract)}</span></div>
                <span class="candidate-home-recommendation-match">${match}%</span>
              </button>
            `,
          )
          .join("")
      : `<p class="candidate-empty">Não há novas recomendações no momento.</p>`;
  }
  if (recent) {
    recent.innerHTML = apps.length
      ? apps
          .slice(0, 3)
          .map(
            (app) => `
              <button class="candidate-home-recent-item" type="button" data-candidate-home-app="${app.jobId}">
                <div><strong>${escapeHtml(app.title)}</strong><span>Atualizado em ${formatShortDate(app.appliedAt)}</span></div>
                <span class="candidate-stage-pill ${candidateAppStageClass(app.stage)}">${escapeHtml(app.stage)}</span>
              </button>
            `,
          )
          .join("")
      : `<p class="candidate-empty">Nenhuma atividade recente.</p>`;
  }
}

function renderCandidateInterviews() {
  const body = document.querySelector("#candidateInterviewsBody");
  if (!body) return;
  const items = getCandidateInterviewItems();
  const cards = items.map((item) => {
    const confirmed = candidateConfirmedInterviewIds.has(item.jobId);
    return `
      <article class="candidate-journey-card candidate-interview-card">
        <span class="candidate-journey-icon"><svg class="ui-icon"><use href="${iconSpriteBase}#i-calendar"></use></svg></span>
        <div class="candidate-journey-copy">
          <span class="panel-kicker">PRÓXIMO ENCONTRO</span>
          <h2>${escapeHtml(item.title)}</h2>
          <p>${confirmed ? `${escapeHtml(item.type)} · ${escapeHtml(item.format)}` : "Confirme sua presença para liberar os detalhes de acesso."}</p>
          ${
            item.status === "Agendada" && !confirmed
              ? `<button class="secondary-button candidate-journey-action" type="button" data-candidate-interview-confirm="${item.jobId}">${confirmed ? "Presença confirmada" : "Confirmar presença"}</button>`
              : ""
          }
          ${
            confirmed
              ? `
                <div class="candidate-interview-confirmed-details">
                  <div><span>Horário</span><strong>${formatCandidateInterviewDate(item.at)}</strong></div>
                  <div><span>Entrevistador(a)</span><strong>${escapeHtml(item.interviewer || "Pessoa do RH")}</strong></div>
                  <div><span>Link de acesso</span><a href="${escapeHtml(item.meetingLink || "#")}" target="_blank" rel="noopener noreferrer">Entrar na entrevista <span aria-hidden="true">↗</span></a></div>
                </div>
              `
              : `<strong>Convite disponível após a confirmação</strong>`
          }
          <button class="secondary-button candidate-journey-action candidate-journey-view-job" type="button" data-candidate-journey-job="${item.jobId}">Ver candidatura</button>
        </div>
        <span class="candidate-journey-status ${confirmed ? "is-confirmed" : "is-scheduled"}">${confirmed ? "Confirmada" : escapeHtml(item.status)}</span>
      </article>
    `;
  }).join("");
  body.innerHTML = cards || `<article class="candidate-panel candidate-empty-panel"><h2>Nenhuma entrevista agendada</h2><p>Quando o RH marcar uma conversa, os detalhes aparecerão aqui.</p></article>`;
}

function openCandidateTest(testId, jobId) {
  const test = tests.find((item) => item.id === testId);
  const application = candidatePortalUser.applications.find((app) => app.jobId === jobId);
  const dialog = document.querySelector("#candidateTestDialog");
  if (!test || !dialog) return;
  document.querySelector("#candidateTestDialogTitle").textContent = test.title;
  document.querySelector("#candidateTestDialogDescription").textContent = test.description || "Avaliação vinculada à sua candidatura.";
  document.querySelector("#candidateTestDialogQuestions").textContent = String(test.questions.length);
  document.querySelector("#candidateTestDialogScore").textContent = `${test.minScore}%`;
  document.querySelector("#candidateTestDialogJob").textContent = application?.title || "Sua candidatura";
  dialog.dataset.testId = String(testId);
  dialog.dataset.jobId = String(jobId);
  dialog.showModal();
}

function candidateTestKey(testId, jobId) {
  return `${testId}:${jobId}`;
}

function saveCandidateTestDraft(form) {
  if (!candidateActiveTest || !form) return;
  const test = tests.find((item) => item.id === candidateActiveTest.testId);
  if (!test) return;
  const answers = {};
  test.questions.forEach((question) => {
    const fields = [...form.querySelectorAll(`[name="candidate-test-${question.id}"]:checked`)];
    if (question.type === "text") {
      answers[question.id] = form.querySelector(`[name="candidate-test-${question.id}"]`)?.value || "";
    } else {
      answers[question.id] = fields.map((field) => field.value);
    }
  });
  candidateTestDrafts.set(candidateTestKey(candidateActiveTest.testId, candidateActiveTest.jobId), answers);
}

function renderCandidateTestTaking() {
  const body = document.querySelector("#candidateTestTakingBody");
  if (!body || !candidateActiveTest) return;
  const test = tests.find((item) => item.id === candidateActiveTest.testId);
  const application = candidatePortalUser.applications.find((app) => app.jobId === candidateActiveTest.jobId);
  if (!test) return;
  const draft = candidateTestDrafts.get(candidateTestKey(candidateActiveTest.testId, candidateActiveTest.jobId)) || {};
  const questions = test.questions
    .map((question, index) => {
      const selected = Array.isArray(draft[question.id]) ? draft[question.id].map(String) : [];
      const fieldName = `candidate-test-${question.id}`;
      const inputType = question.type === "multiple" ? "checkbox" : "radio";
      const answerBlock =
        question.type === "text"
          ? `<textarea name="${fieldName}" rows="5" placeholder="Digite sua resposta...">${escapeHtml(draft[question.id] || "")}</textarea>`
          : `<div class="candidate-test-options" role="group" aria-label="Opções da questão ${index + 1}">
              ${(question.options || [])
                .map(
                  (option, optionIndex) => `
                    <label class="candidate-test-option">
                      <input type="${inputType}" name="${fieldName}" value="${optionIndex}" ${selected.includes(String(optionIndex)) ? "checked" : ""} />
                      <span>${escapeHtml(option)}</span>
                    </label>
                  `,
                )
                .join("")}
            </div>`;
      return `
        <fieldset class="candidate-test-question">
          <legend><span>Questão ${index + 1} de ${test.questions.length}</span>${escapeHtml(question.prompt)}</legend>
          <small>${questionTypeLabel(question.type)}</small>
          ${answerBlock}
        </fieldset>
      `;
    })
    .join("");
  body.innerHTML = `
    <form class="candidate-test-taking" id="candidateTestTakingForm">
      <header class="candidate-test-taking-head">
        <div>
          <span class="panel-kicker">AVALIAÇÃO EM ANDAMENTO</span>
          <h1>${escapeHtml(test.title)}</h1>
          <p>${escapeHtml(application?.title || "Sua candidatura")} · ${test.questions.length} questões</p>
        </div>
        <div class="candidate-test-taking-progress"><strong>${test.questions.length}</strong><span>questões</span></div>
      </header>
      <div class="candidate-test-question-list">${questions}</div>
      <footer class="candidate-test-taking-actions">
        <button class="secondary-button" type="button" data-candidate-test-exit>Salvar e sair</button>
        <button class="primary-button" type="submit">Enviar respostas</button>
      </footer>
    </form>
  `;
}

function renderCandidateTests() {
  const body = document.querySelector("#candidateTestsBody");
  if (!body) return;
  const items = getCandidateTestItems();
  const pendingItems = items.filter((item) => item.status !== "Concluído");
  const completedItems = items.filter((item) => item.status === "Concluído");
  const cards = pendingItems.map((item) => {
    const testId = item.test?.id;
    const inProgress = candidateTestsInProgress.has(item.jobId);
    return `
      <article class="candidate-journey-card candidate-test-card">
        <span class="candidate-journey-icon"><svg class="ui-icon"><use href="${iconSpriteBase}#i-clipboard"></use></svg></span>
        <div class="candidate-journey-copy">
          <span class="panel-kicker">AVALIAÇÃO TÉCNICA</span>
          <h2>${escapeHtml(item.test?.title || "Teste técnico")}</h2>
          <p>${escapeHtml(item.test?.description || "Avaliação vinculada à candidatura")} · ${escapeHtml(item.title)}</p>
          <strong>Prazo sugerido: ${formatShortDate(item.dueAt)}</strong>
          <button class="primary-button candidate-journey-action candidate-test-start" type="button" data-candidate-test-id="${testId}" data-candidate-test-job="${item.jobId}">${inProgress ? "Continuar teste" : "Iniciar teste"}</button>
        </div>
        <span class="candidate-journey-status is-pending">${escapeHtml(item.status)}</span>
      </article>
    `;
  }).join("");
  body.innerHTML = `
    <section class="candidate-journey-section">
      <div class="candidate-journey-section-head">
        <div>
          <span class="panel-kicker">PRÓXIMAS AÇÕES</span>
          <h2>Testes pendentes</h2>
        </div>
        <span class="candidate-journey-section-count">${pendingItems.length}</span>
      </div>
      ${cards || `<article class="candidate-panel candidate-empty-panel"><h2>Nenhum teste pendente</h2><p>Se uma vaga solicitar uma avaliação, ela aparecerá nesta área.</p></article>`}
    </section>
    <section class="candidate-journey-history">
      <div class="candidate-journey-section-head">
        <div>
          <span class="panel-kicker">ACOMPANHAMENTO</span>
          <h2>Histórico de avaliações</h2>
        </div>
      </div>
      ${
        completedItems.length
          ? completedItems
              .map(
                (item) => `
                  <article class="candidate-journey-history-item">
                    <div><strong>${escapeHtml(item.test?.title || "Teste técnico")}</strong><span>${escapeHtml(item.title)}</span></div>
                    <span class="candidate-journey-status is-confirmed">Concluído</span>
                  </article>
                `,
              )
              .join("")
          : `<p class="candidate-empty">Você ainda não concluiu nenhum teste técnico.</p>`
      }
    </section>
  `;
}

jobs.forEach((job) => {
  job.contract = job.contract || (String(job.details || "").includes("CLT") ? "CLT" : "CLT");
  job.location = job.location || companies[0]?.location || "Teotônio Segurado";
  job.publishedAt = job.publishedAt || "2026-08-25";
  job.closingAt = job.closingAt || addDaysToIso(job.publishedAt, 30);
  job.benefits = job.benefits || ["Almoço", "Vale Transporte", "Day Off"];
  job.aboutCompany = job.aboutCompany || companies[0]?.about || "Player Contabilidade";
  job.pcd = Boolean(job.pcd);
});
if (jobs[1]) jobs[1].pcd = true;

function hasActiveCandidateFilters(filters = candidateJobFilters) {
  return (
    filters.contract !== "all" ||
    filters.workModel !== "all" ||
    Boolean(filters.location.trim()) ||
    filters.seniority !== "all" ||
    filters.pcdOnly
  );
}

function getCandidateFiltersDialog() {
  return document.querySelector("#candidateFiltersDialog");
}

function fillCandidateFiltersForm(filters = candidateJobFilters) {
  const contract = document.querySelector("#candidateFilterContract");
  const workModel = document.querySelector("#candidateFilterWorkModel");
  const location = document.querySelector("#candidateFilterLocation");
  const seniority = document.querySelector("#candidateFilterSeniority");
  const pcd = document.querySelector("#candidateFilterPcd");
  if (contract) contract.value = filters.contract;
  if (workModel) workModel.value = filters.workModel;
  if (location) location.value = filters.location;
  if (seniority) seniority.value = filters.seniority;
  if (pcd) pcd.checked = filters.pcdOnly;
}

function readCandidateFiltersForm() {
  return {
    contract: document.querySelector("#candidateFilterContract")?.value || "all",
    workModel: document.querySelector("#candidateFilterWorkModel")?.value || "all",
    location: document.querySelector("#candidateFilterLocation")?.value.trim() || "",
    seniority: document.querySelector("#candidateFilterSeniority")?.value || "all",
    pcdOnly: Boolean(document.querySelector("#candidateFilterPcd")?.checked),
  };
}

function updateCandidateFilterButton() {
  const filterBtn = document.querySelector("#candidateFilterBtn");
  if (!filterBtn) return;
  filterBtn.classList.toggle("is-active", hasActiveCandidateFilters());
  filterBtn.setAttribute("aria-expanded", String(Boolean(getCandidateFiltersDialog()?.open)));
}

function openCandidateFiltersDialog() {
  fillCandidateFiltersForm();
  const dialog = getCandidateFiltersDialog();
  if (!dialog) return;
  dialog.showModal();
  updateCandidateFilterButton();
}

function closeCandidateFiltersDialog() {
  const dialog = getCandidateFiltersDialog();
  if (dialog?.open) dialog.close();
  updateCandidateFilterButton();
}

function applyCandidateJobFilters(filters = readCandidateFiltersForm()) {
  candidateJobFilters = { ...filters };
  closeCandidateFiltersDialog();
  updateCandidateFilterButton();
  renderCandidateJobList();
}

function clearCandidateJobFilters() {
  fillCandidateFiltersForm(defaultCandidateJobFilters());
}

function candidateJobAvailability(job, alreadyApplied = false) {
  if (alreadyApplied) {
    return {
      label: "Já candidatado",
      message: "",
      disabled: true,
      tone: "applied",
    };
  }
  if (!jobIsVisibleInPortal(job)) {
    return {
      label: "Candidatar-se",
      message: "Esta vaga não está mais disponível.",
      disabled: true,
      tone: "unavailable",
    };
  }
  if (job.status === "Pausada") {
    return {
      label: "Candidatar-se",
      message: "Esta vaga está temporariamente pausada.",
      disabled: true,
      tone: "paused",
    };
  }
  if (jobRemainingCount(job) === 0) {
    return {
      label: "Candidatar-se",
      message: "Todas as posições desta vaga já foram preenchidas.",
      disabled: true,
      tone: "filled",
    };
  }
  return {
    label: "Candidatar-se",
    message: "",
    disabled: false,
    tone: "open",
  };
}

function publicJobs() {
  const query = normalize(document.querySelector("#candidateJobSearch")?.value || "");
  const filters = candidateJobFilters;
  return jobs.filter((job) => {
    if (!jobIsVisibleInPortal(job)) return false;
    if (filters.contract !== "all" && (job.contract || "CLT") !== filters.contract) return false;
    if (filters.workModel !== "all" && job.workModel !== filters.workModel) return false;
    if (filters.seniority !== "all" && (job.seniority || "") !== filters.seniority) return false;
    if (filters.pcdOnly && !job.pcd) return false;
    if (filters.location) {
      const locationText = normalize(`${job.location || ""} ${job.city || ""}`);
      if (!locationText.includes(normalize(filters.location))) return false;
    }
    if (!query) return true;
    return normalize(`${job.title} ${job.area} ${job.location} ${job.city} ${job.workModel} ${job.contract}`).includes(query);
  });
}

function formatPublicDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  return `${Number(d)} de ${months[Number(m) - 1]} de ${y}`;
}

function addDaysToIso(iso, days) {
  if (!iso) return "";
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function candidateJobDatePanel(job) {
  return `
    <article class="candidate-panel candidate-panel-date">
      <div class="candidate-publish-row">
        <svg class="ui-icon"><use href="${iconSpriteBase}#i-calendar"></use></svg>
        <span>Publicada em: ${formatPublicDate(job.publishedAt)}</span>
      </div>
      <div class="candidate-publish-row candidate-closing-row">
        <svg class="ui-icon"><use href="${iconSpriteBase}#i-calendar"></use></svg>
        <span>Encerramento previsto: ${formatPublicDate(job.closingAt)}</span>
      </div>
    </article>
  `;
}

function formatShortDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${Number(d)}/${Number(m)}/${y}`;
}

function updateCandidateSidebarUser() {
  const name = candidatePortalUser.name || "Candidato";
  const sidebarName = document.querySelector("#candidateSidebarName");
  const sidebarAvatar = document.querySelector("#candidateSidebarAvatar");
  const popoverName = document.querySelector("#candidatePopoverName");
  const popoverAvatar = document.querySelector("#candidatePopoverAvatar");
  if (sidebarName) sidebarName.textContent = name;
  if (sidebarAvatar) sidebarAvatar.textContent = initials(name);
  if (popoverName) popoverName.textContent = name;
  if (popoverAvatar) popoverAvatar.textContent = initials(name);
  const appsCount = document.querySelector("#candidateAppsNavCount");
  if (appsCount) appsCount.textContent = String(candidatePortalUser.applications.length);
  const interviewCount = document.querySelector("#candidateInterviewsNavCount");
  if (interviewCount) interviewCount.textContent = String(getCandidateInterviewItems().length);
  const testsCount = document.querySelector("#candidateTestsNavCount");
  if (testsCount) testsCount.textContent = String(getCandidateTestItems().length);
}

function setCandidatePortalView(view, options = {}) {
  candidatePortalView = view;
  if (options.jobId) selectedPublicJobId = options.jobId;
  const pageTitle = document.querySelector("#candidatePageTitle");
  const pageSubtitle = document.querySelector("#candidatePageSubtitle");
  const jobsIntro = document.querySelector("#candidateJobsView .candidate-page-intro");
  const titles = {
    home: ["Início", "Tenha uma visão rápida do seu perfil e dos próximos passos."],
    jobs: ["Oportunidades abertas", "Busque vagas por cargo, local ou modelo de trabalho."],
    profile: ["Perfil profissional", "Mantenha seus dados atualizados para as candidaturas."],
    apps: ["Minhas candidaturas", "Acompanhe o andamento dos processos seletivos."],
    interviews: ["Entrevistas", "Consulte seus próximos encontros e os detalhes de cada entrevista."],
    tests: ["Testes técnicos", "Veja os testes técnicos pendentes e o histórico das suas avaliações."],
    "test-taking": ["Teste técnico", "Responda às questões da avaliação com atenção."],
    apply: ["Confirmar candidatura", "Revise seus dados e anexe o currículo antes de enviar."],
    "apply-success": ["Candidatura enviada", "Seu processo já está em andamento."],
  };
  if (view === "detail") {
    const job = jobs.find((item) => item.id === selectedPublicJobId);
    if (job && pageTitle) pageTitle.textContent = job.title;
    if (pageSubtitle) pageSubtitle.textContent = companies[0]?.name || "Player Contabilidade";
    if (jobsIntro) jobsIntro.hidden = true;
  } else if (view === "apply") {
    const job = jobs.find((item) => item.id === selectedPublicJobId);
    if (job && pageTitle) pageTitle.textContent = "Confirmar candidatura";
    if (pageSubtitle) pageSubtitle.textContent = job?.title || "Revise antes de enviar";
    if (jobsIntro) jobsIntro.hidden = true;
  } else if (view === "apply-success") {
    const job = jobs.find((item) => item.id === selectedPublicJobId);
    if (pageTitle) pageTitle.textContent = "Candidatura enviada";
    if (pageSubtitle) pageSubtitle.textContent = job?.title || "Processo iniciado";
    if (jobsIntro) jobsIntro.hidden = true;
  } else if (view === "apps" && pageTitle && pageSubtitle) {
    const count = candidatePortalUser.applications.length;
    pageTitle.textContent = "Minhas candidaturas";
    pageSubtitle.textContent = count
      ? `${count} processo${count === 1 ? "" : "s"} em andamento`
      : "Nenhuma candidatura enviada ainda.";
    if (jobsIntro) jobsIntro.hidden = true;
  } else if (pageTitle && pageSubtitle) {
    const [title, subtitle] = titles[view] || titles.jobs;
    pageTitle.textContent = title;
    pageSubtitle.textContent = subtitle;
    if (jobsIntro) jobsIntro.hidden = view !== "jobs";
  }
  document.querySelector("#candidateShareBtn").hidden = view !== "detail";
  document.querySelector("#candidateResultsCount").hidden = view !== "jobs";
  document.querySelector("#candidateHomeView").hidden = view !== "home";
  document.querySelector("#candidateJobsView").hidden = view !== "jobs";
  document.querySelector("#candidateJobDetailView").hidden = view !== "detail";
  document.querySelector("#candidateApplyView").hidden = view !== "apply";
  document.querySelector("#candidateApplySuccessView").hidden = view !== "apply-success";
  document.querySelector("#candidateProfileView").hidden = view !== "profile";
  document.querySelector("#candidateAppsView").hidden = view !== "apps";
  document.querySelector("#candidateInterviewsView").hidden = view !== "interviews";
  document.querySelector("#candidateTestsView").hidden = view !== "tests";
  document.querySelector("#candidateTestTakingView").hidden = view !== "test-taking";
  const candidateApplyBack = document.querySelector("#candidateApplyBack");
  if (candidateApplyBack) {
    candidateApplyBack.innerHTML = `<span aria-hidden="true">←</span> ${candidateApplyJobIds.length > 1 ? "Voltar para vagas" : "Voltar para a vaga"}`;
  }
  document.querySelectorAll("[data-candidate-nav]").forEach((btn) => {
    const key = btn.dataset.candidateNav;
    const navKey =
      view === "detail" || view === "apply" || view === "apply-success"
        ? "jobs"
        : view === "test-taking"
          ? "tests"
          : view;
    btn.classList.toggle("active", navKey === key);
  });
  if (view === "jobs") {
    updateCandidateFilterButton();
    renderCandidateJobList();
  }
  if (view === "detail") renderCandidateJobDetail();
  if (view === "apply") renderCandidateApply();
  if (view === "apply-success") renderCandidateApplySuccess();
  if (view === "home") renderCandidateHome();
  if (view === "profile") fillCandidateProfileForm();
  if (view === "apps") renderCandidateApps();
  if (view === "interviews") renderCandidateInterviews();
  if (view === "tests") renderCandidateTests();
  if (view === "test-taking") renderCandidateTestTaking();
  updateCandidateSidebarUser();
}

function candidateMetaGrid(job, inline = false) {
  return `
    <div class="candidate-job-meta${inline ? " is-inline" : ""}">
      <span><svg class="ui-icon"><use href="${iconSpriteBase}#i-map-pin"></use></svg>${escapeHtml(job.location)}</span>
      <span><svg class="ui-icon"><use href="${iconSpriteBase}#i-building"></use></svg>${escapeHtml(job.workModel)}</span>
      <span><svg class="ui-icon"><use href="${iconSpriteBase}#i-briefcase"></use></svg>${escapeHtml(job.contract)}</span>
    </div>
  `;
}

function getCandidateBulkApplyJobs() {
  const appliedJobIds = new Set(candidatePortalUser.applications.map((app) => app.jobId));
  return jobs.filter(
    (job) =>
      candidateSelectedJobs.has(job.id) &&
      jobAcceptsApplications(job) &&
      !appliedJobIds.has(job.id),
  );
}

function getCandidateApplyJobs() {
  const jobIds = candidateApplyJobIds.length ? candidateApplyJobIds : [selectedPublicJobId];
  const appliedJobIds = new Set(candidatePortalUser.applications.map((app) => app.jobId));
  return jobIds
    .map((jobId) => jobs.find((job) => job.id === jobId))
    .filter(
      (job) =>
        job &&
        jobAcceptsApplications(job) &&
        !appliedJobIds.has(job.id),
    );
}

function updateCandidateBulkApplyButton() {
  const button = document.querySelector("#candidateBulkApplyBtn");
  const count = document.querySelector("#candidateBulkApplyCount");
  if (!button) return;
  const selectedCount = getCandidateBulkApplyJobs().length;
  button.hidden = selectedCount < 2;
  if (count) count.textContent = String(selectedCount);
}

function renderCandidateJobList() {
  const list = document.querySelector("#candidateJobList");
  const countEl = document.querySelector("#candidateResultsCount");
  const items = publicJobs();
  if (countEl) {
    countEl.textContent = items.length
      ? `${items.length} vaga${items.length === 1 ? "" : "s"} encontrada${items.length === 1 ? "" : "s"}`
      : "";
    countEl.hidden = !items.length;
  }
  const navCount = document.querySelector("#candidateJobsNavCount");
  if (navCount) navCount.textContent = String(items.length);
  if (!items.length) {
    list.innerHTML = `<p class="candidate-empty">Nenhuma vaga encontrada para os filtros atuais.</p>`;
    updateCandidateBulkApplyButton();
    return;
  }
  const company = companies[0]?.name || "Player Contabilidade";
  const profile = getCandidateMatchProfile();
  list.innerHTML = items
    .map((job) => {
      const match = computeMatch(job, profile);
      const candidateApplication = candidatePortalUser.applications.find((app) => app.jobId === job.id);
      const availability = candidateJobAvailability(job, Boolean(candidateApplication));
      const canSelect = jobAcceptsApplications(job) && !candidateApplication;
      if (!canSelect) candidateSelectedJobs.delete(job.id);
      const availabilityBadge =
        availability.tone === "paused" || availability.tone === "filled"
          ? `<span class="candidate-job-availability is-${availability.tone}">${
              availability.tone === "paused" ? "Pausada" : "Vagas preenchidas"
            }</span>`
          : "";
      return `
        <article class="candidate-job-card${candidateSelectedJobs.has(job.id) ? " is-selected" : ""}" data-public-job="${job.id}" tabindex="0" role="button">
          <div class="candidate-job-body">
            <div class="candidate-job-card-head">
              <div class="candidate-job-company">
                <span class="candidate-logo">P</span>
                <span>${escapeHtml(company)}</span>
              </div>
              <div class="candidate-job-card-actions">
                ${availabilityBadge}
                <span class="candidate-job-match">${match.total}% match</span>
                <label class="candidate-job-check" aria-label="Selecionar vaga">
                  <input type="checkbox" tabindex="-1" data-select-job="${job.id}" ${candidateSelectedJobs.has(job.id) ? "checked" : ""} ${canSelect ? "" : "disabled"} />
                </label>
              </div>
            </div>
            <h3>${escapeHtml(job.title)}</h3>
            ${candidateMetaGrid(job, true)}
            <div class="candidate-job-card-foot">
              <span class="candidate-job-date">Publicada em: ${formatShortDate(job.publishedAt)}</span>
              <span class="candidate-job-application-status ${candidateApplication ? "is-applied" : "is-available"}">
                ${
                  candidateApplication
                    ? `Candidatura enviada · ${escapeHtml(candidateApplication.stage)}`
                    : availability.message || "Você ainda não se candidatou"
                }
              </span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  updateCandidateBulkApplyButton();
}

function renderCandidateJobDetail() {
  const job = jobs.find((item) => item.id === selectedPublicJobId);
  if (!job || !jobIsVisibleInPortal(job)) {
    selectedPublicJobId = null;
    setCandidatePortalView("jobs");
    showToast("Vaga indisponível", "Esta vaga não está mais disponível.");
    return;
  }
  selectedPublicJobId = job.id;
  const company = companies[0]?.name || "Player Contabilidade";
  const already = candidatePortalUser.applications.some((app) => app.jobId === job.id);
  const availability = candidateJobAvailability(job, already);
  const availabilityBadge =
    availability.tone === "paused" || availability.tone === "filled"
      ? `<span class="candidate-job-availability is-${availability.tone}">${
          availability.tone === "paused" ? "Pausada" : "Vagas preenchidas"
        }</span>`
      : "";
  const match = computeMatch(job, getCandidateMatchProfile());
  const matchHint =
    (candidatePortalUser.skills || []).length === 0
      ? "Complete suas habilidades no perfil para um cálculo mais preciso."
      : match.breakdown;
  document.querySelector("#candidateJobDetailCard").innerHTML = `
    <article class="candidate-panel candidate-panel-head">
      <div class="candidate-detail-head">
        <span class="candidate-logo candidate-logo-lg">P</span>
        <div>
          <small>${escapeHtml(company)}</small>
          <h1>${escapeHtml(job.title)}</h1>
          ${availabilityBadge}
          ${candidateMetaGrid(job, true)}
        </div>
      </div>
    </article>
    <div class="candidate-detail-body">
      <aside class="candidate-detail-aside">
        <article class="candidate-panel candidate-match-panel">
          <div class="candidate-match-score">
            <strong>${match.total}%</strong>
            <span>compatível com seu perfil</span>
          </div>
          <div class="candidate-match-progress" aria-hidden="true"><span style="width: ${match.total}%"></span></div>
          <p class="candidate-match-breakdown">${escapeHtml(matchHint)}</p>
          ${match.missing.length ? `<p class="candidate-match-missing">Requisitos em falta: ${escapeHtml(match.missing.join(", "))}</p>` : ""}
        </article>
        ${candidateJobDatePanel(job)}
        <button class="candidate-apply-btn${already ? " is-applied" : ""}" type="button" id="candidateApplyBtn" ${availability.disabled ? "disabled" : ""}>
          ${availability.label}
        </button>
        ${availability.message ? `<p class="candidate-job-unavailable-copy">${escapeHtml(availability.message)}</p>` : ""}
      </aside>
      <article class="candidate-panel candidate-panel-content">
        <div class="candidate-detail-sections">
          <section class="candidate-detail-section">
            <h2>Requisitos da vaga</h2>
            <ul class="candidate-benefits-list">
              ${(job.skillsRequired || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("") || "<li>Sem requisitos obrigatórios cadastrados</li>"}
            </ul>
          </section>
          ${
            (job.skillsNice || []).length
              ? `<section class="candidate-detail-section">
            <h2>Diferenciais</h2>
            <ul class="candidate-benefits-list">${job.skillsNice.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>`
              : ""
          }
          <section class="candidate-detail-section candidate-detail-section-wide">
            <h2>Benefícios</h2>
            <ul class="candidate-benefits-list candidate-benefits-list-inline">${(job.benefits || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
          <section class="candidate-detail-section candidate-detail-section-wide">
            <h2>Sobre ${escapeHtml(company)}</h2>
            <p>${escapeHtml(job.aboutCompany || companies[0]?.about || "")}</p>
          </section>
        </div>
      </article>
    </div>
  `;
  const pageTitle = document.querySelector("#candidatePageTitle");
  const pageSubtitle = document.querySelector("#candidatePageSubtitle");
  if (pageTitle) pageTitle.textContent = job.title;
  if (pageSubtitle) pageSubtitle.textContent = company;
}

function getCandidateMatchProfile(user = candidatePortalUser) {
  return {
    name: user.name,
    email: user.email,
    city: user.city,
    area: user.area,
    seniority: user.seniority,
    skills: [...(user.skills || [])],
  };
}

function getCandidateProfileCompletion(user = candidatePortalUser) {
  return getCandidateProfileCompletionData(user).percent;
}

function getCandidateProfileCompletionData(user = candidatePortalUser) {
  const checks = [
    ["telefone", Boolean(user.phone?.trim())],
    ["cidade", Boolean(user.city?.trim())],
    ["UF", Boolean(user.uf?.trim())],
    ["área de atuação", Boolean(user.area)],
    ["nível de experiência", Boolean(user.seniority)],
    ["pelo menos 1 habilidade", (user.skills || []).length > 0],
    ["objetivo ou resumo profissional", Boolean(user.objective?.trim() || user.summary?.trim())],
  ];
  const filled = checks.filter(([, isFilled]) => isFilled).length;
  return {
    percent: Math.round((filled / checks.length) * 100),
    missing: checks.filter(([, isFilled]) => !isFilled).map(([label]) => label),
  };
}

function updateCandidateProfileCompletion() {
  const percent = getCandidateProfileCompletion();
  const label = document.querySelector("#candidateProfileCompletion");
  const bar = document.querySelector("#candidateProfileCompletionBar");
  const hint = document.querySelector("#candidateProfileCompletionHint");
  if (label) label.textContent = `${percent}%`;
  if (bar) bar.style.width = `${percent}%`;
  if (hint) {
    hint.textContent =
      percent >= 100
        ? "Perfil completo. Sua compatibilidade será calculada com todos os critérios."
        : percent >= 60
          ? "Quase lá. Complete habilidades e apresentação para melhorar o matching."
          : "Complete os campos profissionais para calcular sua compatibilidade com as vagas.";
  }
}

function renderCandidateSkillPicker() {
  const catalog = document.querySelector("#candidateSkillCatalog");
  const selected = document.querySelector("#candidateSkillSelected");
  if (!catalog || !selected) return;
  const skills = candidatePortalUser.skills || [];
  catalog.innerHTML = skillOptions
    .map(
      (name) => `
        <button type="button" class="catalog-chip${skills.includes(name) ? " is-selected" : ""}" data-candidate-skill="${escapeHtml(name)}">
          ${escapeHtml(name)}
        </button>
      `,
    )
    .join("");
  selected.innerHTML = skills.length
    ? skills
        .map(
          (name) => `
            <span class="candidate-skill-chip">
              ${escapeHtml(name)}
              <button type="button" data-remove-candidate-skill="${escapeHtml(name)}" aria-label="Remover ${escapeHtml(name)}">×</button>
            </span>
          `,
        )
        .join("")
    : `<span class="candidate-skill-empty">Nenhuma habilidade selecionada</span>`;
  updateCandidateProfileCompletion();
}

function syncCandidatePortalUserToPipeline() {
  const profile = getCandidateMatchProfile();
  candidates.forEach((candidate) => {
    if (normalize(candidate.email) !== normalize(candidatePortalUser.email)) return;
    candidate.phone = candidatePortalUser.phone || candidate.phone;
    candidate.city = candidatePortalUser.city || candidate.city;
    candidate.uf = candidatePortalUser.uf || candidate.uf;
    candidate.birthDate = candidatePortalUser.birthDate || candidate.birthDate;
    candidate.area = candidatePortalUser.area || candidate.area;
    candidate.seniority = candidatePortalUser.seniority || candidate.seniority;
    candidate.skills = [...profile.skills];
    candidate.workModelPref = candidatePortalUser.workModelPref || candidate.workModelPref;
    candidate.objective = candidatePortalUser.objective || candidate.objective;
    candidate.summary = candidatePortalUser.summary || candidate.summary;
    candidate.education = candidatePortalUser.education || candidate.education;
  });
}

function fillCandidateProfileForm() {
  document.querySelector("#candidateProfileName").textContent = candidatePortalUser.name;
  document.querySelector("#candidateProfileEmail").textContent = candidatePortalUser.email;
  const avatar = document.querySelector("#candidateProfileAvatar");
  if (avatar) avatar.textContent = initials(candidatePortalUser.name);
  document.querySelector("#candidatePhone").value = candidatePortalUser.phone || "";
  document.querySelector("#candidateCity").value = candidatePortalUser.city || "";
  const uf = (candidatePortalUser.uf || "").toUpperCase();
  document.querySelector("#candidateUf").value = uf;
  document.querySelector("#candidateBirthDate").value = candidatePortalUser.birthDate || "";
  document.querySelector("#candidateArea").value = candidatePortalUser.area || "";
  document.querySelector("#candidateSeniority").value = candidatePortalUser.seniority || "";
  document.querySelector("#candidateWorkModelPref").value = candidatePortalUser.workModelPref || "";
  document.querySelector("#candidateObjective").value = candidatePortalUser.objective || "";
  document.querySelector("#candidateSummary").value = candidatePortalUser.summary || "";
  document.querySelector("#candidateEducation").value = candidatePortalUser.education || "";
  renderCandidateSkillPicker();
  updateCandidateProfileCompletion();
  updateCandidateSidebarUser();
}

function candidateAppStageClass(stage = "") {
  if (/contratado/i.test(stage)) return "is-success";
  if (/triagem/i.test(stage)) return "is-pending";
  if (/em análise/i.test(stage)) return "is-analysis";
  if (/entrevista/i.test(stage)) return "is-interview";
  if (/teste/i.test(stage)) return "is-test";
  if (/proposta/i.test(stage)) return "is-proposal";
  if (/reprovado|arquivado|recusou/i.test(stage)) return "is-neutral";
  return "is-neutral";
}

function isCandidateAppActive(stage = "") {
  return !/reprovado|contratado|arquivado|recusou/i.test(stage);
}

const candidateApplicationStages = ["Triagem", "Em análise", "Entrevista RH", "Teste técnico", "Proposta"];

function candidateApplicationMatchesFilter(app, filter) {
  if (filter === "test") return /teste/i.test(app.stage);
  if (filter === "interview") return /entrevista/i.test(app.stage);
  if (filter === "incomplete") {
    const pipelineCandidate = candidates.find(
      (candidate) =>
        normalize(candidate.email) === normalize(candidatePortalUser.email) &&
        normalize(candidate.vacancy) === normalize(app.title),
    );
    return getCandidateProfileCompletion(pipelineCandidate || candidatePortalUser) < 80;
  }
  return true;
}

function candidateAppsFilterLabel(filter) {
  return {
    incomplete: "Perfil abaixo de 80%",
    test: "Teste técnico",
    interview: "Entrevista",
  }[filter] || "";
}

function candidateApplicationTimeline(app) {
  const currentIndex = candidateApplicationStages.findIndex(
    (stage) => normalize(stage) === normalize(app.stage),
  );
  const isFinished = /contratado|recusou|reprovado|arquivado/i.test(app.stage);
  return `
    <div class="candidate-app-timeline" aria-label="Etapas da candidatura para ${escapeHtml(app.title)}">
      ${candidateApplicationStages
        .map((stage, index) => {
          const state = isFinished || (currentIndex >= 0 && index < currentIndex)
            ? "is-done"
            : index === currentIndex
              ? "is-current"
              : "";
          return `<span class="candidate-app-timeline-step ${state}" title="${escapeHtml(stage)}"><i></i><small>${escapeHtml(stage)}</small></span>`;
        })
        .join("")}
    </div>
  `;
}

function candidateNextActionsMarkup(apps) {
  const profile = getCandidateProfileCompletionData();
  const actions = [];
  if (profile.percent < 80) {
    actions.push({
      title: `Complete seu perfil até 80%`,
      text: `Faltam ${profile.missing.slice(0, 2).join(" e ")}.`,
      icon: "↑",
      action: "profile",
      buttonLabel: "Completar perfil",
    });
  }
  if (apps.some((app) => /teste/i.test(app.stage))) {
    actions.push({
      title: "Teste técnico disponível",
      text: "Confira suas candidaturas para acompanhar a próxima atividade.",
      icon: "✓",
      filter: "test",
      buttonLabel: "Filtrar testes",
    });
  }
  if (apps.some((app) => /entrevista/i.test(app.stage))) {
    actions.push({
      title: "Entrevista em andamento",
      text: "Acompanhe os detalhes e as atualizações desta candidatura.",
      icon: "✓",
      filter: "interview",
      buttonLabel: "Filtrar entrevistas",
    });
  }
  if (!actions.length) {
    actions.push({
      title: "Tudo em dia",
      text: "Você não tem nenhuma ação pendente neste momento.",
      icon: "✓",
      filter: "",
    });
  }
  return `
    <section class="candidate-next-actions" aria-labelledby="candidateNextActionsTitle">
      <div class="candidate-next-actions-head">
        <div>
          <span class="panel-kicker">PRÓXIMOS PASSOS</span>
          <h2 id="candidateNextActionsTitle">O que você pode fazer agora</h2>
        </div>
        <strong>${profile.percent}% do perfil</strong>
      </div>
      <div class="candidate-next-actions-list">
        ${actions
          .map(
            (item) => `
              <div class="candidate-next-action">
                <span class="candidate-next-action-icon">${item.icon}</span>
                <div>
                  <strong>${escapeHtml(item.title)}</strong>
                  <p>${escapeHtml(item.text)}</p>
                </div>
                ${
                  item.action || item.filter
                    ? `<button type="button" class="candidate-next-action-btn" ${
                        item.action
                          ? `data-candidate-next-action="${item.action}"`
                          : `data-candidate-app-filter="${item.filter}"`
                      }>${item.buttonLabel}</button>`
                    : ""
                }
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCandidateApps() {
  const allApps = candidatePortalUser.applications;
  const apps = allApps.filter((app) =>
    candidateApplicationMatchesFilter(app, candidateAppsFilter),
  );
  const active = allApps.filter((app) => isCandidateAppActive(app.stage)).length;
  const pending = allApps.filter((app) => /triagem|em análise/i.test(app.stage)).length;
  const interviews = allApps.filter((app) => /entrevista/i.test(app.stage)).length;
  const tests = allApps.filter((app) => /teste/i.test(app.stage)).length;
  const intro = document.querySelector("#candidateAppsIntro");
  if (intro) {
    intro.textContent = apps.length
      ? "Consulte suas candidaturas, filtre por etapa e acompanhe cada processo."
      : "Quando você se candidatar, seus processos aparecerão aqui.";
  }
  document.querySelector("#candidateAppsStats").innerHTML = `
    <article class="candidate-stat candidate-stat-active"><strong>${active}</strong><span>Ativas</span></article>
    <article class="candidate-stat candidate-stat-pending"><strong>${pending}</strong><span>Pendentes</span></article>
    <article class="candidate-stat candidate-stat-interviews"><strong>${interviews}</strong><span>Entrevistas</span></article>
    <article class="candidate-stat candidate-stat-tests"><strong>${tests}</strong><span>Testes</span></article>
  `;
  const body = document.querySelector("#candidateAppsBody");
  const filterOptions = [
    ["all", "Todas", allApps.length],
    ["incomplete", "Perfil incompleto", allApps.filter((app) => candidateApplicationMatchesFilter(app, "incomplete")).length],
    ["interview", "Entrevistas", allApps.filter((app) => candidateApplicationMatchesFilter(app, "interview")).length],
    ["test", "Testes", allApps.filter((app) => candidateApplicationMatchesFilter(app, "test")).length],
  ];
  const filterBar = `
    <div class="candidate-apps-filter-bar">
      <div>
        <span class="panel-kicker">ACOMPANHE POR ETAPA</span>
        <p>Use os filtros para encontrar rapidamente o que precisa da sua atenção.</p>
      </div>
      <div class="candidate-apps-filter-list" role="group" aria-label="Filtrar candidaturas">
        ${filterOptions
          .map(
            ([value, label, count]) => `
              <button type="button" class="candidate-app-filter${candidateAppsFilter === value ? " is-active" : ""}" data-candidate-app-filter="${value}">
                ${label}<span>${count}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
  if (!apps.length) {
    body.innerHTML = `
      ${filterBar}
      ${candidateAppsFilter !== "all" ? `<button type="button" class="candidate-apps-clear-filter" data-candidate-app-filter="all">Limpar filtro</button>` : ""}
      <p class="candidate-empty candidate-empty-apps">${
        allApps.length ? "Nenhuma candidatura corresponde ao filtro." : "Nenhuma candidatura ainda"
      }</p>
    `;
    return;
  }
  body.innerHTML = `
    ${filterBar}
    ${
      candidateAppsFilter !== "all"
        ? `<div class="candidate-apps-filter-status"><span>Filtro: ${escapeHtml(candidateAppsFilterLabel(candidateAppsFilter))}</span><button type="button" class="candidate-apps-clear-filter" data-candidate-app-filter="all">Limpar filtro</button></div>`
        : ""
    }
    <h2 class="candidate-apps-heading">Suas vagas <span class="candidate-apps-count">(${apps.length})</span></h2>
    <div class="candidate-apps-list">
      ${apps
        .map(
          (app) => `
            <button type="button" class="candidate-app-card" data-candidate-app="${app.jobId}">
              <div class="candidate-app-copy">
                <strong>${escapeHtml(app.title)}</strong>
                <small>Inscrito em ${formatShortDate(app.appliedAt)}${app.note ? ` · ${escapeHtml(app.note)}` : ""}</small>
              </div>
              <span class="candidate-stage-pill ${candidateAppStageClass(app.stage)}">${escapeHtml(app.stage)}</span>
              ${candidateApplicationTimeline(app)}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function openCandidatePortal(view = "jobs") {
  candidatePortalReturnHash = window.location.hash || "#dashboard";
  closeTopbarPopovers();
  closeOverlayDialogs();
  document.body.classList.add("is-candidate-portal");
  candidatePortal.hidden = false;
  setCandidatePortalView(view);
  history.replaceState(null, "", "#portal-candidato");
}

function closeCandidatePortal() {
  closeCandidateFiltersDialog();
  candidatePortal.hidden = true;
  document.body.classList.remove("is-candidate-portal");
  const restore = candidatePortalReturnHash.replace("#", "");
  const page = pageByHash[restore] || "dashboard";
  history.replaceState(null, "", candidatePortalReturnHash || "#dashboard");
  goToPage(page);
}

function getCandidateProfileApplyBlockers() {
  const missing = [];
  if (!candidatePortalUser.area) missing.push("área de atuação");
  if (!candidatePortalUser.seniority) missing.push("nível de experiência");
  if (!(candidatePortalUser.skills || []).length) missing.push("pelo menos 1 habilidade");
  return missing;
}

function getActiveCandidateApplyResumeName() {
  return candidateApplyResume.name || candidatePortalUser.resumeFileName || "";
}

function setCandidateApplyResume(file) {
  if (!file) {
    candidateApplyResume = { name: "", size: 0 };
    return;
  }
  const allowed = /\.(pdf|doc|docx)$/i;
  if (!allowed.test(file.name)) {
    showToast("Currículo", "Use um arquivo PDF, DOC ou DOCX.");
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    showToast("Currículo", "O arquivo deve ter no máximo 5 MB.");
    return false;
  }
  candidateApplyResume = { name: file.name, size: file.size };
  candidatePortalUser.resumeFileName = file.name;
  return true;
}

function clearCandidateApplyResume() {
  candidateApplyResume = { name: "", size: 0 };
  candidatePortalUser.resumeFileName = "";
}

function updateCandidateApplySubmitState() {
  const submitBtn = document.querySelector("#candidateApplyConfirmBtn");
  const consent = document.querySelector("#candidateApplyConsent");
  if (!submitBtn || !consent) return;
  const hasResume = Boolean(getActiveCandidateApplyResumeName());
  submitBtn.disabled = !consent.checked || !hasResume;
}

function renderCandidateApplyResumeField() {
  const resumeName = getActiveCandidateApplyResumeName();
  return `
    <div class="candidate-resume-upload">
      <input id="candidateApplyResumeInput" type="file" accept=".pdf,.doc,.docx,application/pdf" hidden />
      <button class="candidate-resume-upload-btn${resumeName ? " is-attached" : ""}" type="button" id="candidateApplyResumeBtn">
        <svg class="ui-icon"><use href="#i-paperclip" /></svg>
        <span id="candidateApplyResumeLabel">${resumeName ? escapeHtml(resumeName) : "Anexar currículo (PDF, DOC ou DOCX)"}</span>
      </button>
      <p class="candidate-field-hint">Formatos aceitos: PDF, DOC ou DOCX · até 5 MB</p>
      <button class="candidate-resume-remove" type="button" id="candidateApplyResumeRemove" ${resumeName ? "" : "hidden"}>Remover arquivo</button>
    </div>
  `;
}

function renderCandidateApply() {
  const applyJobs = getCandidateApplyJobs();
  const job = applyJobs[0];
  const body = document.querySelector("#candidateApplyBody");
  if (!job || !body) return;
  const company = companies[0]?.name || "Player Contabilidade";
  const isBulk = applyJobs.length > 1;
  const profile = getCandidateMatchProfile();
  const match = computeMatch(job, profile);
  const missing = getCandidateProfileApplyBlockers();
  const resumeName = getActiveCandidateApplyResumeName();
  if (!candidateApplyResume.name && candidatePortalUser.resumeFileName) {
    candidateApplyResume = { name: candidatePortalUser.resumeFileName, size: 0 };
  }
  const locationLine = [candidatePortalUser.city, candidatePortalUser.uf].filter(Boolean).join(" / ");
  const skills = candidatePortalUser.skills || [];
  const applyJobsSummary = isBulk
    ? `<ul class="candidate-apply-jobs-list">${applyJobs
        .map(
          (item) => `
            <li>
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.location)} · ${escapeHtml(item.workModel)} · ${escapeHtml(item.contract)}</span>
            </li>
          `,
        )
        .join("")}</ul>`
    : candidateMetaGrid(job, true);
  const matchSummary = isBulk
    ? `
      <div class="candidate-match-score">
        <strong>${applyJobs.length}</strong>
        <span>vagas selecionadas</span>
      </div>
      <p class="candidate-match-breakdown">Seu perfil, currículo e consentimento serão enviados para todas as vagas selecionadas.</p>
    `
    : `
      <div class="candidate-match-score">
        <strong>${match.total}%</strong>
        <span>compatível com seu perfil</span>
      </div>
      <div class="candidate-match-progress" aria-hidden="true"><span style="width: ${match.total}%"></span></div>
      <p class="candidate-match-breakdown">${escapeHtml(match.breakdown)}</p>
      ${match.missing.length ? `<p class="candidate-match-missing">Requisitos em falta: ${escapeHtml(match.missing.join(", "))}</p>` : ""}
    `;
  const dateSummary = isBulk
    ? `
      <article class="candidate-panel candidate-panel-date candidate-bulk-date-panel">
        <span class="candidate-bulk-date-heading">Período de encerramento</span>
        ${applyJobs
          .map(
            (item) => `
              <div class="candidate-publish-row">
                <svg class="ui-icon"><use href="${iconSpriteBase}#i-calendar"></use></svg>
                <span><strong>${escapeHtml(item.title)}</strong> até ${formatPublicDate(item.closingAt)}</span>
              </div>
            `,
          )
          .join("")}
      </article>
    `
    : candidateJobDatePanel(job);
  body.innerHTML = `
    <div class="candidate-apply-body">
      <aside class="candidate-apply-aside">
        <article class="candidate-panel candidate-apply-job">
          <small>${escapeHtml(company)}</small>
          <h1>${isBulk ? `${applyJobs.length} vagas selecionadas` : escapeHtml(job.title)}</h1>
          ${applyJobsSummary}
        </article>
        <article class="candidate-panel candidate-match-panel">
          ${matchSummary}
        </article>
        ${dateSummary}
      </aside>
      <article class="candidate-panel candidate-apply-panel">
        <h2>Dados que serão enviados</h2>
        ${missing.length ? `<p class="candidate-apply-warning">Complete no perfil: ${escapeHtml(missing.join(", "))}.</p>` : ""}
        <ul class="candidate-apply-summary-list">
          <li><span>Nome</span><strong>${escapeHtml(candidatePortalUser.name)}</strong></li>
          <li><span>E-mail</span><strong>${escapeHtml(candidatePortalUser.email)}</strong></li>
          <li><span>Telefone</span><strong>${escapeHtml(candidatePortalUser.phone || "Não informado")}</strong></li>
          <li><span>Localização</span><strong>${escapeHtml(locationLine || "Não informada")}</strong></li>
          <li><span>Área / Nível</span><strong>${escapeHtml([candidatePortalUser.area, candidatePortalUser.seniority].filter(Boolean).join(" · ") || "Não informado")}</strong></li>
          <li>
            <span>Habilidades</span>
            <div class="candidate-apply-skills">
              ${skills.length ? skills.map((skill) => `<span class="candidate-apply-skill">${escapeHtml(skill)}</span>`).join("") : "<strong>Nenhuma selecionada</strong>"}
            </div>
          </li>
        </ul>
        <button class="candidate-apply-edit-link" type="button" id="candidateApplyEditProfile">Editar perfil</button>

        <h2>Currículo</h2>
        ${renderCandidateApplyResumeField()}

        <h2>Autorização</h2>
        <label class="candidate-apply-consent">
          <input id="candidateApplyConsent" type="checkbox" />
          <span>Autorizo o uso dos meus dados pessoais e do currículo anexado para este processo seletivo, conforme a política de privacidade do portal.</span>
        </label>

        <h2>Próximos passos</h2>
        <ul class="candidate-apply-next-steps">
          <li>Sua candidatura entra na etapa <strong>Triagem</strong>.</li>
          <li>O RH analisa seu perfil e currículo.</li>
          <li>Você acompanha tudo em <strong>Minhas candidaturas</strong>.</li>
        </ul>

        <div class="candidate-apply-actions">
          <button class="candidate-apply-btn-secondary" type="button" id="candidateApplyCancelBtn">${isBulk ? "Voltar para vagas" : "Voltar para a vaga"}</button>
          <button class="candidate-apply-btn candidate-apply-btn-primary" type="button" id="candidateApplyConfirmBtn" disabled>${isBulk ? "Confirmar candidaturas" : "Confirmar candidatura"}</button>
        </div>
      </article>
    </div>
  `;
  updateCandidateApplySubmitState();
}

function renderCandidateApplySuccess() {
  const job = jobs.find((item) => item.id === selectedPublicJobId);
  const body = document.querySelector("#candidateApplySuccessBody");
  if (!job || !body) return;
  const resumeName = getActiveCandidateApplyResumeName();
  body.innerHTML = `
    <div class="candidate-apply-success-icon" aria-hidden="true">
      <svg class="ui-icon"><use href="#i-check-circle" /></svg>
    </div>
    <h1>Candidatura enviada!</h1>
    <p>Você se candidatou à vaga <strong>${escapeHtml(job.title)}</strong>.${resumeName ? ` Currículo anexado: ${escapeHtml(resumeName)}.` : ""}</p>
    <span class="candidate-apply-success-stage">Etapa atual: Triagem</span>
    <div class="candidate-apply-success-actions">
      <button class="candidate-apply-btn" type="button" id="candidateApplySuccessApps">Ver minhas candidaturas</button>
      <button class="candidate-apply-btn-secondary" type="button" id="candidateApplySuccessJobs">Continuar explorando vagas</button>
    </div>
  `;
}

function openCandidateApplicationSuccess(jobsOrJob, resumeName) {
  const dialog = document.querySelector("#candidateApplicationSuccessDialog");
  const copy = document.querySelector("#candidateApplicationSuccessCopy");
  const jobName = document.querySelector("#candidateApplicationSuccessJob");
  const jobLabel = document.querySelector("#candidateApplicationSuccessJobLabel");
  const resumeLabel = document.querySelector("#candidateApplicationSuccessResume");
  if (!dialog) return;
  const appliedJobs = Array.isArray(jobsOrJob) ? jobsOrJob : [jobsOrJob];
  const isBulk = appliedJobs.length > 1;
  if (copy) copy.textContent = isBulk ? "Suas candidaturas foram enviadas com sucesso." : "Sua candidatura foi enviada com sucesso.";
  if (jobLabel) jobLabel.textContent = isBulk ? "Vagas" : "Vaga";
  if (jobName) jobName.textContent = isBulk ? `${appliedJobs.length} vagas selecionadas` : appliedJobs[0].title;
  if (resumeLabel) resumeLabel.textContent = resumeName || "Não informado";
  dialog.showModal();
}

function openCandidateApplyView() {
  const job = jobs.find((item) => item.id === selectedPublicJobId);
  if (!job) return;
  if (candidatePortalUser.applications.some((app) => app.jobId === job.id)) {
    showToast("Candidatura", "Você já se candidatou a esta vaga.");
    return;
  }
  if (!jobAcceptsApplications(job)) {
    const availability = candidateJobAvailability(job, false);
    showToast("Candidatura indisponível", availability.message);
    renderCandidateJobDetail();
    return;
  }
  candidateApplyJobIds = [job.id];
  if (candidatePortalUser.resumeFileName && !candidateApplyResume.name) {
    candidateApplyResume = { name: candidatePortalUser.resumeFileName, size: 0 };
  }
  setCandidatePortalView("apply");
}

function openCandidateBulkApplyView() {
  const applyJobs = getCandidateBulkApplyJobs();
  if (applyJobs.length < 2) return;
  candidateApplyJobIds = applyJobs.map((job) => job.id);
  selectedPublicJobId = applyJobs[0].id;
  if (candidatePortalUser.resumeFileName && !candidateApplyResume.name) {
    candidateApplyResume = { name: candidatePortalUser.resumeFileName, size: 0 };
  }
  setCandidatePortalView("apply");
}

function submitCandidateApplication() {
  const requestedJobs = candidateApplyJobIds
    .map((jobId) => jobs.find((job) => job.id === jobId))
    .filter(Boolean);
  const unavailableJobs = requestedJobs.filter(
    (job) => !jobAcceptsApplications(job),
  );
  if (unavailableJobs.length) {
    candidateApplyJobIds = requestedJobs
      .filter(jobAcceptsApplications)
      .map((job) => job.id);
    showToast(
      "Vaga indisponível",
      unavailableJobs.length === 1
        ? `${unavailableJobs[0].title} não aceita mais candidaturas.`
        : `${unavailableJobs.length} vagas não aceitam mais candidaturas.`,
    );
    setCandidatePortalView(candidateApplyJobIds.length ? "apply" : "jobs");
    return;
  }
  const applyJobs = getCandidateApplyJobs();
  if (!applyJobs.length) return;
  const consent = document.querySelector("#candidateApplyConsent");
  const resumeName = getActiveCandidateApplyResumeName();
  if (!consent?.checked) {
    showToast("Autorização necessária", "Marque o consentimento LGPD para continuar.");
    return;
  }
  if (!resumeName) {
    showToast("Currículo obrigatório", "Anexe seu currículo antes de confirmar a candidatura.");
    return;
  }
  const profile = getCandidateMatchProfile();
  candidatePortalUser.resumeFileName = resumeName;
  applyJobs.forEach((job) => {
    candidatePortalUser.applications.unshift({
      jobId: job.id,
      title: job.title,
      appliedAt: TODAY_KEY,
      stage: "Triagem",
      resumeFileName: resumeName,
    });
    if (!candidates.some((c) => normalize(c.email) === normalize(candidatePortalUser.email) && c.vacancy === job.title)) {
      candidates.unshift({
        id: Date.now() + job.id,
        name: candidatePortalUser.name,
        email: candidatePortalUser.email,
        phone: candidatePortalUser.phone || "",
        uf: candidatePortalUser.uf || "",
        birthDate: candidatePortalUser.birthDate || "",
        vacancy: job.title,
        stage: "Triagem",
        alert: 0,
        attachment: true,
        city: candidatePortalUser.city || job.city,
        seniority: candidatePortalUser.seniority || job.seniority,
        area: candidatePortalUser.area || job.area,
        skills: [...profile.skills],
        workModelPref: candidatePortalUser.workModelPref || "",
        objective: candidatePortalUser.objective || "",
        summary: candidatePortalUser.summary || "",
        education: candidatePortalUser.education || "",
        stageEnteredAt: `${TODAY_KEY}T12:00:00`,
        lgpdConsent: true,
        consentAt: `${TODAY_KEY}T12:00:00`,
        retainUntil: retainUntilFromDays(),
        history: [["Candidatura enviada", `${candidatePortalUser.name} · agora`]],
        activities: [["LL", candidatePortalUser.name, "Enviou a candidatura", "Agora"]],
      });
    }
    syncJobMetrics(job);
  });
  renderPipeline();
  renderJobs();
  renderDashboard();
  candidateSelectedJobs.clear();
  setCandidatePortalView("apps");
  openCandidateApplicationSuccess(applyJobs, resumeName);
}

on("#openCandidatePortal", "click", () => openCandidatePortal("jobs"));
on("#profileOpenCandidatePortal", "click", () => {
  closeTopbarPopovers();
  openCandidatePortal("jobs");
});
on("#exitCandidatePortal", "click", closeCandidatePortal);
candidateSidebarToggle.addEventListener("click", toggleCandidateSidebar);
if (window.localStorage.getItem("portal-candidato-sidebar") === "collapsed") {
  setCandidateSidebarCollapsed(true);
}
on("#candidateProfileBtn", "click", () => {
  const popover = document.querySelector("#candidateProfilePopover");
  const opening = popover.hidden;
  closeTopbarPopovers(opening ? "candidateProfilePopover" : "");
  popover.hidden = !opening;
});
on("#candidateProfilePopover", "click", (event) => {
  const action = event.target.closest("[data-candidate-profile-action]");
  if (!action) return;
  closeTopbarPopovers();
  if (action.dataset.candidateProfileAction === "profile") setCandidatePortalView("profile");
});
document.querySelectorAll("[data-candidate-nav]").forEach((button) => {
  button.addEventListener("click", () => setCandidatePortalView(button.dataset.candidateNav));
});
on("#candidateJobSearch", "input", () => renderCandidateJobList());
on("#candidateFiltersForm", "submit", (event) => {
  event.preventDefault();
  applyCandidateJobFilters();
});
on("#candidateFiltersClear", "click", () => {
  clearCandidateJobFilters();
});
on("#candidateFilterBtn", "click", () => openCandidateFiltersDialog());
on("#closeCandidateFiltersDialog", "click", () => closeCandidateFiltersDialog());
function handleCandidateNextAction(event) {
  const nextAction = event.target.closest("[data-candidate-next-action]");
  if (nextAction) {
    setCandidatePortalView(nextAction.dataset.candidateNextAction);
    return true;
  }
  const filterButton = event.target.closest("[data-candidate-app-filter]");
  if (filterButton) {
    candidateAppsFilter = filterButton.dataset.candidateAppFilter || "all";
    setCandidatePortalView("apps");
    return true;
  }
  return false;
}
on("#candidateHomeActions", "click", handleCandidateNextAction);
on("#candidateHomeView", "click", (event) => {
  if (handleCandidateNextAction(event)) return;
  const recommendation = event.target.closest("[data-candidate-home-recommendation]");
  if (!recommendation) return;
  const jobId = Number(recommendation.dataset.candidateHomeRecommendation);
  if (jobs.some((job) => job.id === jobId)) setCandidatePortalView("detail", { jobId });
});
on("#candidateHomeRecentList", "click", (event) => {
  const item = event.target.closest("[data-candidate-home-app]");
  if (!item) return;
  const jobId = Number(item.dataset.candidateHomeApp);
  if (jobs.some((job) => job.id === jobId)) setCandidatePortalView("detail", { jobId });
});
on("#candidateInterviewsBody", "click", (event) => {
  const jobButton = event.target.closest("[data-candidate-journey-job]");
  if (jobButton) {
    setCandidatePortalView("detail", { jobId: Number(jobButton.dataset.candidateJourneyJob) });
    return;
  }
  const confirmButton = event.target.closest("[data-candidate-interview-confirm]");
  if (!confirmButton) return;
  const jobId = Number(confirmButton.dataset.candidateInterviewConfirm);
  if (candidateConfirmedInterviewIds.has(jobId)) return;
  candidateConfirmedInterviewIds.add(jobId);
  renderCandidateInterviews();
  showToast("Presença confirmada", "O RH será avisado sobre sua confirmação.");
});
on("#candidateTestsBody", "click", (event) => {
  const testButton = event.target.closest("[data-candidate-test-id]");
  if (!testButton) return;
  openCandidateTest(Number(testButton.dataset.candidateTestId), Number(testButton.dataset.candidateTestJob));
});
on("#closeCandidateTestDialog", "click", () => {
  document.querySelector("#candidateTestDialog")?.close();
});
on("#cancelCandidateTest", "click", () => {
  document.querySelector("#candidateTestDialog")?.close();
});
on("#candidateTestStart", "click", () => {
  const dialog = document.querySelector("#candidateTestDialog");
  const testId = Number(dialog?.dataset.testId);
  const jobId = Number(dialog?.dataset.jobId);
  if (testId && jobId) {
    candidateActiveTest = { testId, jobId };
    candidateTestsInProgress.add(jobId);
  }
  dialog?.close();
  if (candidateActiveTest) {
    setCandidatePortalView("test-taking");
    showToast("Teste iniciado", "Responda às questões e envie tudo ao finalizar.");
  }
});
on("#candidateTestTakingBody", "click", (event) => {
  const exitButton = event.target.closest("[data-candidate-test-exit]");
  if (!exitButton) return;
  saveCandidateTestDraft(document.querySelector("#candidateTestTakingForm"));
  candidateActiveTest = null;
  setCandidatePortalView("tests");
  showToast("Progresso salvo", "Você pode continuar o teste quando quiser.");
});
on("#candidateTestTakingBody", "submit", (event) => {
  if (event.target.id !== "candidateTestTakingForm" || !candidateActiveTest) return;
  event.preventDefault();
  saveCandidateTestDraft(event.target);
  const key = candidateTestKey(candidateActiveTest.testId, candidateActiveTest.jobId);
  candidateCompletedTestKeys.add(key);
  candidateTestsInProgress.delete(candidateActiveTest.jobId);
  candidateActiveTest = null;
  setCandidatePortalView("tests");
  showToast("Teste enviado", "Sua avaliação foi registrada com sucesso.");
});
on("#candidateAppsBody", "click", (event) => {
  if (handleCandidateNextAction(event)) return;
  const card = event.target.closest("[data-candidate-app]");
  if (!card) return;
  const jobId = Number(card.dataset.candidateApp);
  if (!jobs.some((job) => job.id === jobId)) return;
  setCandidatePortalView("detail", { jobId });
});
getCandidateFiltersDialog()?.addEventListener("close", updateCandidateFilterButton);
on("#candidateJobList", "change", (event) => {
  const checkbox = event.target.closest("[data-select-job]");
  if (!checkbox) return;
  const jobId = Number(checkbox.dataset.selectJob);
  if (checkbox.checked) candidateSelectedJobs.add(jobId);
  else candidateSelectedJobs.delete(jobId);
  const card = checkbox.closest(".candidate-job-card");
  if (card) card.classList.toggle("is-selected", checkbox.checked);
  updateCandidateBulkApplyButton();
});
on("#candidateBulkApplyBtn", "click", () => openCandidateBulkApplyView());
on("#candidateJobList", "click", (event) => {
  if (event.target.closest("[data-select-job]") || event.target.closest(".candidate-job-check")) return;
  const card = event.target.closest("[data-public-job]");
  if (!card) return;
  setCandidatePortalView("detail", { jobId: Number(card.dataset.publicJob) });
});
on("#candidateJobList", "keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-public-job]");
  if (!card || event.target.closest("[data-select-job]")) return;
  event.preventDefault();
  setCandidatePortalView("detail", { jobId: Number(card.dataset.publicJob) });
});
on("#candidateJobDetailView", "click", (event) => {
  if (event.target.closest("#candidateApplyBtn")) openCandidateApplyView();
});
on("#candidateApplyBack", "click", () => {
  if (candidateApplyJobIds.length > 1) setCandidatePortalView("jobs");
  else setCandidatePortalView("detail", { jobId: selectedPublicJobId });
});
on("#candidateApplyView", "click", (event) => {
  if (event.target.closest("#candidateApplyResumeBtn")) {
    document.querySelector("#candidateApplyResumeInput")?.click();
    return;
  }
  if (event.target.closest("#candidateApplyResumeRemove")) {
    clearCandidateApplyResume();
    renderCandidateApply();
    return;
  }
  if (event.target.closest("#candidateApplyEditProfile")) {
    setCandidatePortalView("profile");
    return;
  }
  if (event.target.closest("#candidateApplyCancelBtn")) {
    if (candidateApplyJobIds.length > 1) setCandidatePortalView("jobs");
    else setCandidatePortalView("detail", { jobId: selectedPublicJobId });
    return;
  }
  if (event.target.closest("#candidateApplyConfirmBtn")) submitCandidateApplication();
});
on("#candidateApplyView", "change", (event) => {
  if (event.target.id === "candidateApplyResumeInput") {
    const file = event.target.files?.[0];
    if (file && setCandidateApplyResume(file)) renderCandidateApply();
    event.target.value = "";
    return;
  }
  if (event.target.id === "candidateApplyConsent") updateCandidateApplySubmitState();
});
on("#candidateApplySuccessView", "click", (event) => {
  if (event.target.closest("#candidateApplySuccessApps")) setCandidatePortalView("apps");
  if (event.target.closest("#candidateApplySuccessJobs")) setCandidatePortalView("jobs");
});
on("#closeCandidateApplicationSuccess", "click", () => {
  document.querySelector("#candidateApplicationSuccessDialog")?.close();
});
on("#candidateApplicationSuccessContinue", "click", () => {
  document.querySelector("#candidateApplicationSuccessDialog")?.close();
  setCandidatePortalView("apps");
});
on("#candidateProfileForm", "submit", (event) => {
  event.preventDefault();
  candidatePortalUser.phone = document.querySelector("#candidatePhone").value.trim();
  candidatePortalUser.city = document.querySelector("#candidateCity").value.trim();
  candidatePortalUser.uf = document.querySelector("#candidateUf").value.trim().toUpperCase();
  candidatePortalUser.birthDate = document.querySelector("#candidateBirthDate").value;
  candidatePortalUser.area = document.querySelector("#candidateArea").value;
  candidatePortalUser.seniority = document.querySelector("#candidateSeniority").value;
  candidatePortalUser.workModelPref = document.querySelector("#candidateWorkModelPref").value;
  candidatePortalUser.objective = document.querySelector("#candidateObjective").value.trim();
  candidatePortalUser.summary = document.querySelector("#candidateSummary").value.trim();
  candidatePortalUser.education = document.querySelector("#candidateEducation").value.trim();
  syncCandidatePortalUserToPipeline();
  fillCandidateProfileForm();
  showToast("Perfil salvo", "Seus dados foram atualizados para o matching.");
});
on("#candidateSkillCatalog", "click", (event) => {
  const button = event.target.closest("[data-candidate-skill]");
  if (!button) return;
  const skill = button.dataset.candidateSkill;
  const skills = candidatePortalUser.skills || [];
  candidatePortalUser.skills = skills.includes(skill) ? skills.filter((item) => item !== skill) : [...skills, skill];
  renderCandidateSkillPicker();
});
on("#candidateSkillSelected", "click", (event) => {
  const button = event.target.closest("[data-remove-candidate-skill]");
  if (!button) return;
  candidatePortalUser.skills = (candidatePortalUser.skills || []).filter((item) => item !== button.dataset.removeCandidateSkill);
  renderCandidateSkillPicker();
});
on("#candidateSkillAdd", "click", () => {
  const catalogBlock = document.querySelector("#candidateSkillCatalogBlock");
  const addBtn = document.querySelector("#candidateSkillAdd");
  if (catalogBlock?.hidden) {
    catalogBlock.hidden = false;
    addBtn?.setAttribute("aria-expanded", "true");
    return;
  }
  const name = window.prompt("Nome da habilidade:");
  if (!name?.trim()) return;
  const clean = name.trim();
  if (!skillOptions.includes(clean)) skillOptions.push(clean);
  if (!(candidatePortalUser.skills || []).includes(clean)) {
    candidatePortalUser.skills = [...(candidatePortalUser.skills || []), clean];
  }
  renderCandidateSkillPicker();
});
on("#candidatePhone", "input", updateCandidateProfileCompletion);
on("#candidateCity", "input", updateCandidateProfileCompletion);
on("#candidateUf", "input", (event) => {
  event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 2);
  updateCandidateProfileCompletion();
});
on("#candidateArea", "change", updateCandidateProfileCompletion);
on("#candidateSeniority", "change", updateCandidateProfileCompletion);
on("#candidateObjective", "input", updateCandidateProfileCompletion);
on("#candidateSummary", "input", updateCandidateProfileCompletion);
on("#candidateShareBtn", "click", () => {
  const job = jobs.find((item) => item.id === selectedPublicJobId);
  if (!job) return;
  const url = `${window.location.origin}${window.location.pathname}#portal-candidato`;
  if (navigator.share) {
    navigator.share({ title: job.title, text: `Confira a vaga ${job.title}`, url }).catch(() => {});
    return;
  }
  showToast("Compartilhar", `Link da vaga ${job.title} copiado.`);
});
on("#candidateEvaluationsBtn", "click", () => {
  showToast("Avaliações", "Nenhuma avaliação disponível no momento.");
});
on("#candidateHelpBtn", "click", () => {
  showToast("Suporte", "Nossa equipe entrará em contato em breve.");
});

if (window.location.hash === "#portal-candidato") {
  openCandidatePortal("jobs");
}

const initialPage = pageByHash[window.location.hash.replace("#", "")];
if (initialPage && initialPage !== "dashboard" && window.location.hash !== "#portal-candidato") goToPage(initialPage);
