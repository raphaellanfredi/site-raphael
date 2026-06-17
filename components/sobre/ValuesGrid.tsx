import Reveal from "@/components/Reveal";

const VALORES = [
  {
    titulo: "LIBERDADE",
    descricao:
      "Tecnologia como ferramenta de autonomia real. Crio soluções que devolvem o controle ao empreendedor.",
    icone: "🔓",
  },
  {
    titulo: "PRATICIDADE",
    descricao:
      "Nenhuma teoria que não passou pelo teste da realidade. Mostro o que fiz, o que funcionou e o que não funcionou.",
    icone: "⚙️",
  },
  {
    titulo: "HUMANIDADE",
    descricao:
      "IA não substitui gente. Liberta gente. Essa crença vem de quem viveu na pele o custo da sobrecarga operacional.",
    icone: "🤝",
  },
  {
    titulo: "CORAGEM",
    descricao:
      "Largar o topo para se curar. Mudar de setor. Construir produto próprio. Coragem que já provei, não apenas prego.",
    icone: "🦁",
  },
];

export default function ValuesGrid() {
  return (
    <section className="bg-brand-accent py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-brand-white text-center">
            O que não negocio
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALORES.map((v, i) => (
            <Reveal key={v.titulo} delay={i * 0.1}>
              <div className="h-full rounded-lg border border-brand-gold/20 bg-brand-white/[0.03] p-7 text-center">
                <span className="text-3xl" aria-hidden>
                  {v.icone}
                </span>
                <p className="label mt-5">{v.titulo}</p>
                <p className="mt-3 text-sm text-brand-white/70">{v.descricao}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
