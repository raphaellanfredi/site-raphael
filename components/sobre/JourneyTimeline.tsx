import Image from "next/image";
import Reveal from "@/components/Reveal";

interface FotoAto {
  arquivo: string;
  alt: string;
  imgAlign?: "left" | "center";
  /** "contain" para imagens com texto/gráfico importante que não pode ser cortado */
  fit?: "cover" | "contain";
}

interface Ato {
  numero: string;
  periodo: string;
  titulo: string;
  paragrafos: string[];
  destaques: string[];
  notaEditorial?: string;
  fotos: FotoAto[];
}

const ATOS: Ato[] = [
  {
    numero: "ATO I",
    periodo: "Até 2010",
    titulo: "O Artista & o Empreendedor",
    paragrafos: [
      "Comecei onde poucos especialistas de tecnologia começam: no palco. Banda Mármore de Carrara — 3 discos gravados, clipe exibido na MTV, música que viralizou em 2010.",
      "Aquele período me ensinou algo que nenhum curso de negócios ensina: como se comunicar de verdade. Como ler uma audiência. Como fazer uma ideia chegar no coração das pessoas.",
      "Era a base que eu ainda não sabia que estava construindo.",
    ],
    destaques: [
      "Banda Mármore de Carrara",
      "3 discos gravados",
      "Clipe na MTV",
      "Música viral em 2010",
    ],
    fotos: [
      { arquivo: "/photos/jornada/ato1-01.jpg", alt: "Banda Mármore de Carrara — cartaz de show" },
      { arquivo: "/photos/jornada/ato1-02.jpg", alt: "Raphael Lanfredi tocando guitarra no palco" },
      { arquivo: "/marmore-7.jpeg", alt: "Banda Mármore de Carrara" },
    ],
  },
  {
    numero: "ATO II",
    periodo: "2010 — 2018",
    titulo: "O Empresário Nacional",
    paragrafos: [
      "Fundei o Santo Bier — a primeira rede de beer trucks do Brasil. Do zero para 48 unidades em operação.",
      "3 prêmios nacionais de empreendedorismo. Cobertura em Valor Econômico, O Globo, Pequenas Empresas Grandes Negócios. Patrocínio do Campeonato Carioca 2018. Camarote no Carnaval do Rio. Programa do Ratinho no SBT.",
      "E então, no auge — quando tudo parecia perfeito por fora — veio a cobrança. Depressão severa. E o reconhecimento de uma dependência ao álcool que eu precisava encarar.",
      "Larguei tudo. Não foi fraqueza. Foi a decisão mais corajosa que já tomei. Um ano de transição intencional — cura, estudo, preparação para o próximo capítulo.",
    ],
    destaques: [
      "Santo Bier — 1ª rede de beer trucks do Brasil",
      "48 unidades em operação",
      "3 prêmios nacionais",
      "Valor Econômico, O Globo, PEGN, SBT",
      "Patrocínio Campeonato Carioca 2018",
      "Decisão de largar tudo para se curar",
    ],
    notaEditorial:
      "Este é o coração emocional da jornada — a virada que mudou tudo.",
    fotos: [
      { arquivo: "/kombi.jpeg", alt: "Santo Bier — kombi da rede de beer trucks", fit: "contain" },
      { arquivo: "/photos/jornada/ato2-02.jpg", alt: "Santo Bier — patrocínio Campeonato Carioca com Pelé", fit: "contain" },
      { arquivo: "/santo-7.png", alt: "Santo Bier" },
    ],
  },
  {
    numero: "ATO III",
    periodo: "2018 — Hoje",
    titulo: "O Especialista em IA",
    paragrafos: [
      "Em outubro de 2018, cheguei à IA sem bagagem técnica — só com 20 anos de empreendedorismo real e uma clareza nova sobre o que importava.",
      "Fundei a 2BeMotion. Treinei mais de 2.000 empreendedores e diretores em Design Thinking e IA — Estácio, UNIFEV, Ambev. Participei do evento do MIT no Rio, 3 edições do Rio Innovation Week, Feira do SEBRAE.",
      "Em 2024, decidi parar de recomendar ferramentas de terceiros e construir a minha. Dois anos de desenvolvimento em silêncio.",
      "Em 07 de julho de 2025, nasceu a EVA — minha plataforma própria de IA para vendas e atendimento, integrada ao Claude e ao GPT como agentes.",
    ],
    destaques: [
      "2BeMotion fundada",
      "2.000+ empreendedores treinados",
      "Estácio, UNIFEV, Ambev",
      "MIT no Rio de Janeiro",
      "3 edições Rio Innovation Week",
      "Feira do SEBRAE",
      "EVA lançada em 07/07/2025",
    ],
    fotos: [
      { arquivo: "/lide-1.jpeg", alt: "Raphael Lanfredi no LIDE" },
      { arquivo: "/entrevista-bni.png", alt: "Raphael Lanfredi em entrevista no BNI" },
      { arquivo: "/photos/jornada/ato3-01.jpg", alt: "Raphael Lanfredi" },
    ],
  },
];

export default function JourneyTimeline() {
  return (
    <section className="bg-brand-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-brand-dark text-center">
            20 anos de pele no jogo
          </h2>
        </Reveal>

        <div className="mt-20 space-y-20">
          {ATOS.map((ato, i) => (
            <Reveal key={ato.numero} delay={i * 0.05}>
              <div
                className={`relative rounded-lg p-8 lg:p-12 border-l-4 border-brand-gold ${
                  ato.notaEditorial ? "bg-brand-light-bg" : "bg-brand-white"
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-4 mb-2">
                  <span className="label">{ato.numero}</span>
                  <span className="text-sm text-text-muted">{ato.periodo}</span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-brand-accent">
                  {ato.titulo}
                </h3>

                <div className="mt-6 space-y-4 max-w-3xl">
                  {ato.paragrafos.map((p, idx) => (
                    <p key={idx} className="text-text-primary">
                      {p}
                    </p>
                  ))}
                </div>

                {ato.notaEditorial && (
                  <p className="mt-6 font-display italic text-brand-gold">
                    {ato.notaEditorial}
                  </p>
                )}

                <div className="mt-7 flex flex-wrap gap-2">
                  {ato.destaques.map((d) => (
                    <span
                      key={d}
                      className="rounded-full bg-brand-gold/10 border border-brand-gold/30 px-4 py-1.5 text-xs font-medium text-brand-accent"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl">
                  {ato.fotos.map((foto) => (
                    <div
                      key={foto.arquivo}
                      className={`relative aspect-[3/4] w-full rounded-lg overflow-hidden border border-brand-gold/20 ${
                        foto.fit === "contain" ? "bg-brand-dark/[0.03]" : ""
                      }`}
                    >
                      <Image
                        src={foto.arquivo}
                        alt={foto.alt}
                        fill
                        className={
                          foto.fit === "contain"
                            ? "object-contain p-2"
                            : `object-cover ${
                                foto.imgAlign === "left" ? "object-left" : "object-center"
                              }`
                        }
                        sizes="(max-width: 1024px) 33vw, 16vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
