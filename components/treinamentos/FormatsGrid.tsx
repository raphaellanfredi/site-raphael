import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/Reveal";
import { formatos } from "@/data/treinamentos";

export default function FormatsGrid() {
  return (
    <section className="bg-brand-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Formatos"
          title={"Como levo conteúdo\npara o seu time."}
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {formatos.map((f, i) => (
            <Reveal key={f.titulo} delay={i * 0.1}>
              <div className="h-full rounded-lg bg-brand-light-bg p-8 border border-brand-gold/10 shadow-card text-center">
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
