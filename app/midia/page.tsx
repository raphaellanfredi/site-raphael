import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import AwardsGallery from "@/components/midia/AwardsGallery";
import PressWall from "@/components/midia/PressWall";
import TrainingGallery from "@/components/midia/TrainingGallery";
import QuoteInterlude from "@/components/midia/QuoteInterlude";

export const metadata: Metadata = {
  title: "Mídia & Prêmios",
  description:
    "Prêmios nacionais, cobertura na grande imprensa e presença nos maiores palcos de inovação do Brasil. 20 anos de evidências, não de promessas.",
};

export default function MidiaPage() {
  return (
    <>
      <PageHero
        label="Reconhecimento"
        title={"20 anos de evidências.\nNão de promessas."}
        subtitle="Prêmios nacionais, cobertura na grande imprensa e presença nos maiores palcos de inovação do Brasil."
      />
      <AwardsGallery />
      <PressWall />
      <TrainingGallery />
      <QuoteInterlude />
    </>
  );
}
