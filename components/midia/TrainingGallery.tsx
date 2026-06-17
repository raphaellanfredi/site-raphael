import SectionHeading from "@/components/shared/SectionHeading";
import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";
import { fotosTreinamentos, eventosDestaque } from "@/data/treinamentos";

export default function TrainingGallery() {
  return (
    <section className="bg-brand-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Treinamentos & Palestras"
          title={"2.000+ empreendedores\ntreinados. De dentro para fora."}
          subtitle="Design Thinking e IA para empreendedores, diretores e equipes — Estácio, UNIFEV, Ambev, MIT no Rio, Rio Innovation Week, SEBRAE."
          light
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {fotosTreinamentos.map((f, i) => (
            <Reveal key={f.arquivo} delay={i * 0.06}>
              <div
                className={`rounded-lg overflow-hidden border border-brand-gold/20 ${
                  f.fit === "contain" ? "bg-brand-white/[0.04]" : ""
                }`}
              >
                <SmartImage
                  src={f.arquivo}
                  alt={f.legenda}
                  label="Foto do treinamento"
                  className="aspect-[3/4] w-full"
                  imgClassName={f.fit === "contain" ? "object-contain p-2" : "object-cover"}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {eventosDestaque.map((e) => (
            <span
              key={e.nome}
              className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-5 py-2.5 text-sm text-brand-white/85"
            >
              <span aria-hidden>{e.icone}</span>
              {e.nome}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
