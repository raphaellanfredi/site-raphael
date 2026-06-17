export interface Treinamento {
  nome: string;
  icone: string;
}

export const eventosDestaque: Treinamento[] = [
  { nome: "MIT no Rio de Janeiro", icone: "🎓" },
  { nome: "Rio Innovation Week (3 edições)", icone: "🚀" },
  { nome: "Feira do SEBRAE", icone: "🏢" },
  { nome: "Ambev", icone: "⚡" },
  { nome: "Estácio", icone: "📚" },
  { nome: "UNIFEV (para diretoria e reitor)", icone: "🏛️" },
];

export interface FotoTreinamento {
  arquivo: string;
  legenda: string;
  /** "contain" para fotos com enquadramento que não pode ser cortado */
  fit?: "cover" | "contain";
}

export const fotosTreinamentos: FotoTreinamento[] = [
  { arquivo: "/photos/treinamentos/treinamento-01.jpg", legenda: "2BeMotion — Treinamento de IA para empreendedores" },
  { arquivo: "/photos/treinamentos/treinamento-02.jpg", legenda: "Certificado Parceiro Visionário do Bem" },
  { arquivo: "/photos/treinamentos/treinamento-03.jpg", legenda: "Estácio — Design Thinking ao vivo", fit: "contain" },
  { arquivo: "/photos/treinamentos/treinamento-04.jpg", legenda: "Palestra BNI", fit: "contain" },
  { arquivo: "/photos/treinamentos/treinamento-05.jpg", legenda: "Raphael Lanfredi — Palestra BNI", fit: "contain" },
  { arquivo: "/photos/treinamentos/treinamento-06.jpg", legenda: "Design Thinking ao vivo — dinâmica em sala", fit: "contain" },
];

export interface Formato {
  titulo: string;
  descricao: string;
  icone: string;
}

export const formatos: Formato[] = [
  {
    titulo: "Palestras",
    descricao:
      "Conteúdo sob medida para eventos corporativos, congressos e feiras de inovação — IA aplicada a negócios reais.",
    icone: "🎤",
  },
  {
    titulo: "Treinamentos In-Company",
    descricao:
      "Imersões de Design Thinking e IA para equipes e diretoria, com exercícios práticos e cases reais.",
    icone: "🧩",
  },
  {
    titulo: "Mentoria para Empreendedores",
    descricao:
      "Acompanhamento direto para quem quer aplicar IA e automação na operação do próprio negócio.",
    icone: "🧭",
  },
];
