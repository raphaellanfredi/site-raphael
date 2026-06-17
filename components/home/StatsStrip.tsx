import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

const METRICAS = [
  { numero: "20+", label: "anos empreendendo" },
  { numero: "48", label: "unidades Santo Bier no auge" },
  { numero: "2.000+", label: "empreendedores treinados" },
  { numero: "3", label: "prêmios nacionais de empreendedorismo" },
];

export default function StatsStrip() {
  return (
    <section className="bg-brand-gold">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid grid-cols-2 lg:grid-cols-4 divide-brand-dark/10">
        {METRICAS.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.1}>
            <div
              className={`text-center px-4 py-4 ${
                i > 0 ? "lg:border-l border-brand-dark/15" : ""
              }`}
            >
              <p className="font-display font-bold text-4xl lg:text-5xl text-brand-dark">
                <CountUp value={m.numero} />
              </p>
              <p className="mt-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.1em] text-brand-accent">
                {m.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
