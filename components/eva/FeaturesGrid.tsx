import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/Reveal";

const FEATURES = [
  {
    titulo: "Plataforma Própria",
    descricao:
      "Não depende de ferramentas de terceiros. Arquitetura desenvolvida do zero para PMEs brasileiras.",
    icone: "🔧",
  },
  {
    titulo: "Claude + GPT como Agentes",
    descricao:
      "Integração nativa com os melhores modelos do mercado, orquestrados por regras de negócio reais.",
    icone: "🤖",
  },
  {
    titulo: "Vendas & Atendimento",
    descricao:
      "IA que qualifica leads, responde clientes e move o pipeline — 24h por dia, 7 dias por semana.",
    icone: "💼",
  },
  {
    titulo: "Para Quem Empreende",
    descricao:
      "Construída por quem entende o caos operacional de uma PME. Não é solução de TI corporativo.",
    icone: "🎯",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-brand-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          title={"Não é mais uma ferramenta.\nÉ a que eu construí."}
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <Reveal key={f.titulo} delay={i * 0.1}>
              <div className="h-full rounded-lg bg-brand-light-bg p-7 border border-brand-gold/10 shadow-card">
                <span className="text-3xl" aria-hidden>
                  {f.icone}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-dark">
                  {f.titulo}
                </h3>
                <p className="mt-3 text-sm text-text-muted">{f.descricao}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
