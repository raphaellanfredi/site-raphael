import SectionHeading from "@/components/shared/SectionHeading";
import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";

const MIDIAS = [
  {
    veiculo: "Estadão — Blogs Sonia Racy",
    arquivo: "/photos/imprensa/estadao.png",
    imgAlign: "object-center",
  },
  {
    veiculo: "O Globo — Boa Chance",
    arquivo: "/photos/imprensa/o-globo.png",
    imgAlign: "object-center",
  },
  {
    veiculo: "PEGN / Exame PME",
    arquivo: "/photos/imprensa/pegn.jpg",
    imgAlign: "object-center",
  },
  {
    veiculo: "SBT — Programa do Ratinho",
    arquivo: "/photos/imprensa/sbt-ratinho.jpg",
    imgAlign: "object-right",
  },
  {
    veiculo: "O Dia — Trilha sonora para empreender",
    arquivo: "/photos/imprensa/o-dia.jpg",
    imgAlign: "object-center",
  },
  {
    veiculo: "UOL — Marketing Social Santo Bier",
    arquivo: "/photos/imprensa/uol.jpg",
    imgAlign: "object-center",
  },
];

export default function PressWall() {
  return (
    <section className="bg-brand-light-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Na imprensa"
          title={"Quando a história\nchega na capa."}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MIDIAS.map((m, i) => (
            <Reveal key={m.veiculo} delay={i * 0.07}>
              <div className="rounded-lg overflow-hidden border border-brand-gold/15 bg-brand-white hover:scale-[1.02] transition-transform">
                <SmartImage
                  src={m.arquivo}
                  alt={m.veiculo}
                  label={m.veiculo}
                  className="aspect-[4/5] w-full"
                  imgClassName={`object-cover ${m.imgAlign}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <p className="p-3 text-xs font-medium uppercase tracking-wide text-text-muted">
                  {m.veiculo}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
