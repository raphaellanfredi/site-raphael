export interface Post {
  slug: string;
  categoria: "YouTube" | "LinkedIn" | "Artigo";
  titulo: string;
  resumo: string;
  data: string;
  /** Caminho em /public, ou URL externa (YouTube thumbnail, etc.) */
  thumbnail: string;
  /** "contain" para thumbnails cuja proporção não combina com aspect-video (sem cortar) */
  thumbnailFit?: "cover" | "contain";
  /** Link externo (vídeo, post de LinkedIn) ou interno (/blog/slug) */
  href: string;
  /** Corpo do artigo em Markdown — apenas para posts internos (/blog/slug) */
  conteudo?: string;
}

/**
 * Conteúdo mockado — substitua por dados reais ou conecte a um CMS depois.
 * Para vídeos do YouTube, use a thumbnail oficial:
 * https://img.youtube.com/vi/<ID_DO_VIDEO>/maxresdefault.jpg
 */
export const posts: Post[] = [
  {
    slug: "ia-nao-substitui-gente",
    categoria: "YouTube",
    titulo: "IA não substitui gente. Liberta gente.",
    resumo:
      "Por que a automação bem feita devolve tempo — e autonomia — para quem empreende.",
    data: "2025-09-10",
    thumbnail: "/photos/treinamentos/treinamento-01.jpg",
    href: "https://youtube.com/@raphaellanfredi",
  },
  {
    slug: "do-santo-bier-a-eva",
    categoria: "LinkedIn",
    titulo: "Do Santo Bier à EVA: a jornada que ninguém viu",
    resumo:
      "Como 48 unidades de beer truck, uma pausa necessária e 7 anos de IA me trouxeram até aqui.",
    data: "2025-08-02",
    thumbnail: "/photos/imprensa/pegn.jpg",
    href: "https://linkedin.com/in/raphaellanfredi",
  },
  {
    slug: "primeiro-funcionario-que-nunca-dorme",
    categoria: "Artigo",
    titulo: "O primeiro funcionário que nunca dorme",
    resumo:
      "Por dentro da decisão de construir minha própria plataforma de IA em vez de recomendar a de terceiros.",
    data: "2025-07-08",
    thumbnail: "/photos/blog/eva-artigo.jpg",
    thumbnailFit: "contain",
    href: "/blog/primeiro-funcionario-que-nunca-dorme",
    conteudo: `Existe um momento na vida de todo empreendedor quando você para de buscar soluções e começa a criar delas.

Para mim, esse momento não foi romântico. Não foi epifânico. Foi uma terça-feira comum em 2024, olhando para mais uma pilha de e-mails de clientes perguntando a mesma coisa:

*"Qual ferramenta de IA você usa? A que você recomenda?"*

Eu estava fazendo consultoria para empresas. Ensinando Design Thinking em universidades. Treinando mais de 2 mil empreendedores. E em cada aula, em cada consultoria, em cada conversa de café, eu recomendava um patchwork de ferramentas de terceiros. ChatGPT para isso. Make.com para aquilo. Zapier ali. Stripe lá.

Funcionava? Sim. Mas resolvia 60% do problema real.

O que eu via, olho no olho desses empreendedores, era diferente. Eles não queriam mais uma ferramenta. Queriam um **funcionário**. Alguém que pudesse atender cliente às 3 da manhã. Que lembrasse do histórico de cada interação. Que soubesse quando escalona para humano e quando resolve sozinho. Que não cobre por mensagem e não drena o orçamento mensal com subscriptions que nunca usam por completo.

As ferramentas existentes? Eram ótimas para o que faziam. Mas eram como montar um carro com peças de 5 fabricantes diferentes. Funciona. Mas não é um carro. É uma gambiarra cara.

---

## O Dia em Que Entendi Que Era Possível

Tinha um cliente, dono de uma agência de marketing em São Paulo. Rodava 8 pessoas, faturava bem, mas 40% do tempo dele era passado em email. Respondendo a mesma coisa. Sempre.

Eu mapeei suas respostas mais comuns. Tinha um padrão.

"Se eu conseguisse automatizar isso," pensei, "ele ganharia 4 horas por dia."

Comecei a brincar. Claude + GPT + APIs + um pouco de estrutura de dados. Criei um agente que:

1. Recebia os emails dele
2. Classificava por tipo
3. Respondia as rotineiras sozinho
4. Escalava as complexas para ele com contexto completo
5. Aprendia com cada correção que ele fazia

Em dois meses, emails que demoravam 15 minutos para responder estavam sendo resolvidos em 2 minutos. E não pela máquina — era ele respondendo, mas o trabalho pesado já tinha sido feito.

Esse cliente valia. Valia pagar. Valia ter como **funcionário permanente**.

E então percebi:

Eu poderia ficar recomendando ferramentas existentes. Ganharia comissão talvez. Seria mais fácil. Mas estaria sendo cúmplice da solução parcial.

Ou eu poderia construir o que sabia que faltava.

---

## A Diferença Entre Ser Coach e Ser Construtor

Tem muito "especialista em IA" por aí.

Mas sabe quantos deles construíram uma plataforma? Foram para o mercado com ela? Enfrentaram a realidade de ter que manter um sistema rodando 24/7 enquanto educa gente usando aquele sistema?

Poucos.

A maioria dos influenciadores de IA que você vê na internet estão recomendando ferramentas que outras pessoas construíram. Isso é legítimo. Mas há uma distância de segurança ali. Se a ferramenta quebra, eles não têm responsabilidade. Se a integração falha, não é com eles. Se o preço sobe 300%, eles viram pro próximo hype.

Eu decidi ser diferente.

Construir a EVA não foi uma decisão de marketing. Foi uma decisão de integridade.

Se eu vou falar para um empreendedor que IA é o caminho, preciso estar apostando meu tempo e dinheiro que essa afirmação é verdadeira. Preciso estar sentindo o mesmo problema que ele sente. Precisar de manutenção. De melhoria. De inovação constante.

Quando você recomenda algo que você construiu, você não está mais em posição de expertise passiva. Você está dizendo: *"Eu coloquei pele no jogo. Isso aqui funciona porque eu preciso que funcione."*

É uma diferença pequena. Mas muda tudo em termos de credibilidade.

---

## Os Primeiros Meses Foram Difíceis Demais

Deixa eu ser claro: construir sua própria ferramenta é mais trabalho do que recomendar a de alguém.

Muito mais.

Eu passei 6 meses apenas entendendo o que era possível com Claude e GPT operando como agentes. Estudei prompting. Entendi tokens. Aprendi sobre context windows e hallucinations. Fiz integrações. Quebrei coisas. Conertei. Quebrei de novo.

Enquanto isso, eu estava dando workshops. Fazendo consultoria. Respondendo email. Porque a conta não paga sozinha enquanto você está preso em um problema de LLM que ninguém ensina em lugar nenhum.

Tinha noites em que eu pensava: "Por que não estou só recomendando ChatGPT Pro + Make + Slack? Seria tão mais fácil."

Mas toda vez que eu testava a EVA com um novo cliente e via aquele brilho nos olhos dele quando a ferramenta entendia o contexto específico do negócio dele... aquela sensação de "ah, agora faz sentido"... eu lembrava por que.

---

## O que a EVA Faz Que as Outras Não Fazem

Não é porque a EVA seja um super-robô invencível. Não é.

É porque ela foi desenhada para o problema específico que **eu** tenho. E que meus clientes têm.

Um agente genérico de IA não sabe quando um lead é "quente" ou "educacional". Não sabe que tipo de resposta faz um cliente se sentir ignorado versus cuidado. Não entende as nuances da cultura do seu negócio.

A EVA foi construída com:

**1. Contexto Real**
Ela tem acesso ao histórico completo de cada cliente. Não é cada conversa uma página em branco. Ela lembra. Ela conecta. Ela não faz você repetir informação.

**2. Múltiplos Agentes**
Tem um agente para vendas (qualifica, negocia, fecha). Tem um para atendimento (resolve, escalona, satisfaz). Tem um para operação (automação interna). Eles conversam entre si.

**3. Handoff Inteligente**
Não é "o bot não entendeu, chama um humano." É "essa é uma pergunta importante, deixa o especialista decidir" — mas o especialista já tem 80% do trabalho feito.

**4. Aprendizado Contínuo**
Cada interação alimenta o sistema. Cada correção que você faz, a EVA aprende. Não é static. É viva.

Nenhuma plataforma genérica que você assina por $20/mês faz isso.

E você sabe por quê? Porque você não é o único cliente. Eles precisam que a ferramenta funcione para o dentista, para a agência, para o SaaS, para todo mundo. Isso a torna boa em tudo e excelente em nada.

A EVA é excelente no que **meus clientes** precisam. Porque ela é feita **por** alguém que sofreu os mesmos problemas.

---

## A Verdade Incômoda Sobre Recomendações

Tem mais uma coisa.

Quando você recomenda produto de terceiro, sempre existe uma pergunta não dita flutuando no ar: *"Ele está ganhando algo com isso?"*

Não culpa sua. É só realidade da internet.

Tem YouTuber recomendando ferramentas e ganhando 30% de comissão. Tem coach recomendando SaaS porque é affiliate. Tem gente recomendando coisas que nunca usou de verdade.

Quando eu recomendo a EVA, eu não estou ganhando comissão de ninguém. Estou dizendo: "Use o que **eu** usei para resolver **meu** problema. Se resolver também para você, ótimo. Se não resolver, me diga e eu mudo."

Isso é um peso diferente. É responsabilidade diferente.

---

## Isso Não É Sobre Ser Melhor Que Ninguém

Deixa claro: ChatGPT é incrível. Make é excelente em automação. Zapier resolve integração bem. Isso tudo é verdade.

Se você precisa de 60% de solução, essas ferramentas entregam com qualidade e custo baixo. Problema resolvido, vida feliz.

Mas se você é empreendedor e quer aquele 40% restante — aquele que te tira da operação completamente, aquele que faz você dormir sabendo que o negócio está rodando enquanto você dorme — aí as coisas mudam.

Aí você precisa de algo que foi desenhado com o seu suor, o seu tempo, a sua obsessão.

---

## Por Que Estou Contando Isso

Tem uma geração de empreendedores crescendo com medo de IA.

Medo porque todo especialista que veem está vendendo a mesma coisa: "Contrate agência X para implementar ChatGPT. Custe o que custar."

Medo porque as soluções prontas não parecem feitas para **eles**. Para o negócio deles. Para as dores específicas deles.

E tem razão de ter medo.

Mas não precisa ser assim.

Eu estou contando essa história porque quero que você entenda:

**Tecnologia não é mágica. Não é inatingível. Não é só para Google e Meta.**

Tecnologia é uma alavanca. E qualquer empreendedor com obsessão suficiente pode construir a alavanca que seu negócio precisa.

Eu passei 20 anos em outros setores. Música. Gastronomia. Entretenimento. Construindo coisas. Falhando. Reconstruindo.

Quando cheguei na IA, aquele músculo já estava ativado. Aquele "preciso que funcione, então vou fazer funcionar" já estava vivo.

Não é sobre ser gênio em código. Não é sobre ter investidor. É sobre recusar a solução que funciona 60% e ir atrás da que funciona 95%.

---

## O Que Você Deveria Fazer Agora

Se você é empreendedor e está lendo isso:

**Não comece com a EVA.** Não é assim.

Comece entendendo qual é seu problema real. Qual é aquele que mais te rouba tempo. Aquele que, se fosse resolvido, liberaria 10 horas por semana.

Se você descobrir que é atendimento ao cliente, procure a ferramenta certa para isso. Pode ser EVA. Pode ser outra. O importante é que seja desenhada **para aquilo**.

Se você descobrir que é geração de conteúdo, procure algo para isso. Se é automação de email, procure para isso. Se é gestão de vendas, procure para isso.

Escolha com base em "resolve meu problema específico" — não em "é bonito" ou "todo mundo usa".

E se descobrir que nenhuma solução existente resolve exatamente o que você precisa? Aí você tem dois caminhos:

1. **Customizar um patchwork existente** (vai funcionar, vai ser caro, vai ficar frágil, mas funciona)
2. **Construir a sua própria** (vai levar tempo, vai ser caro também, mas você vira dono da moeda)

---

## O Primeiro Funcionário Que Nunca Dorme

Quando lancei a EVA em julho de 2025, ele não foi chamado de "plataforma de IA".

Foi chamado de algo muito mais simples: **O primeiro funcionário que nunca dorme.**

Porque é isso que ela é. Alguém que está lá às 3 da manhã respondendo email. Que está no sábado processando pedido. Que não fica doente, não pede aumento, não pede férias.

Mas — e isso é importante — **também não toma decisão que é responsabilidade de humano.**

Ela não contrata. Não demite. Não define estratégia. Não faz deal que vai mudar a história da empresa.

Ela faz o trabalho. O trabalho importante, mas repetível. O que te rouba tempo.

E quando você ganha aquele tempo de volta? Aí sim. Aí você pode fazer o que só você pode fazer.

Pensar. Estrategizar. Construir. Sonhar.

---

## Tecnologia Que Liberta. Estratégia Que Escala.

Isso não é slogan.

É a razão pela qual passei 2 anos — enquanto ganhava a vida de outra forma — construindo algo que eu poderia ter recomendado pronto.

É a razão pela qual continuo melhorando a EVA todo mês. Porque não é um produto que vendi e esqueci. É um funcionário que precisa de manutenção, de feedback, de inovação.

É a razão pela qual consigo olhar nos olhos de um empreendedor e dizer: "Sim, eu usei isso. Sim, funcionou comigo. Não, não estou ganhando comissão. Sim, pode confiar."

A diferença é pequena. Mas é tudo.

---

## Próximo Passo

Se essa história ressoou com você — se você também está cansado de soluções que resolvem 60% e quer aquele 40% restante — vamos conversar.

Não é venda. É conversa de empreendedor com empreendedor.

Qual é aquele problema que mais te rouba tempo? Aquele que você pensaria "se isso fosse resolvido, tudo mudaria"?

**Mande mensagem.** Me conta qual é. E vamos ver se a EVA resolve. Ou se o caminho é outro.

Mas seja qual for o caminho, uma coisa é certa: você não deveria estar vivendo com uma solução que funciona só 60%.

Você merece o primeiro funcionário que nunca dorme.

---

**Raphael Lanfredi — Empreendedor em IA & Automação. Fundador da EVA.**
**Mais de 2.000 empreendedores treinados. Falando de dentro para fora.**

*Tecnologia que liberta. Estratégia que escala.*`,
  },
];
