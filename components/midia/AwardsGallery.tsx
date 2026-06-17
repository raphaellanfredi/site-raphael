import SectionHeading from "@/components/shared/SectionHeading";
import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";

const FOTOS = [
  {
    arquivo: "/photos/premios/premio-01.jpg",
    legenda: "Empresa Referência Nacional em Gastronomia — Melhores do Ano 2014",
  },
  {
    arquivo: "/photos/premios/premio-02.jpg",
    legenda: "Selo Ouro 2014 — Top Qualidade Brasil — Melhores do Ano",
  },
  {
    arquivo: "/photos/premios/premio-03.jpg",
    legenda: "Cerimônia de premiação — Santo Bier entre os destaques do setor",
  },
];

export default function AwardsGallery() {
  return (
    <section className="bg-brand-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Prêmios"
          title={"3 prêmios nacionais\nde empreendedorismo."}
          subtitle="Santo Bier — primeira rede de beer trucks do Brasil"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOTOS.map((foto, i) => (
            <Reveal key={foto.arquivo} delay={i * 0.1}>
              <div className="group rounded-lg overflow-hidden shadow-card border border-brand-gold/10 hover:shadow-[0_4px_24px_rgba(201,168,76,0.25)] transition-shadow">
                <SmartImage
                  src={foto.arquivo}
                  alt={foto.legenda}
                  label="Foto do prêmio"
                  className="aspect-[4/3] w-full"
                  imgClassName="object-contain p-3"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className="p-4 text-sm text-text-muted">{foto.legenda}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
