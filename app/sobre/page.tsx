import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import JourneyTimeline from "@/components/sobre/JourneyTimeline";
import ValuesGrid from "@/components/sobre/ValuesGrid";

export const metadata: Metadata = {
  title: "Sobre — A Jornada do Herói",
  description:
    "Não sou professor de IA. Sou um empreendedor que a usa para construir. A jornada de Raphael Lanfredi: do palco ao Santo Bier, da queda à reconstrução, até a EVA.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        label="Sobre"
        title={"Não sou professor de IA.\nSou um empreendedor\nque a usa para construir."}
        photo={{
          src: "/photos/raphael-sobre.jpg",
          alt: "Raphael Lanfredi",
          label: "Foto editorial — página Sobre",
        }}
      />
      <JourneyTimeline />
      <ValuesGrid />
    </>
  );
}
