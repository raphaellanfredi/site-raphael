import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import TrainingGallery from "@/components/midia/TrainingGallery";
import FormatsGrid from "@/components/treinamentos/FormatsGrid";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Treinamentos & Palestras",
  description:
    "Palestras, treinamentos in-company e mentoria em Design Thinking e IA. Mais de 2.000 empreendedores e diretores treinados — Estácio, UNIFEV, Ambev, MIT, SEBRAE.",
};

export default function TreinamentosPage() {
  return (
    <>
      <PageHero
        label="Treinamentos & Palestras"
        title={"De dentro para fora.\nDe quem fez, para quem faz."}
        subtitle="Design Thinking e IA para empreendedores, diretores e equipes — levados a palco, sala de aula e mentoria 1:1."
      />
      <FormatsGrid />
      <TrainingGallery />
      <FinalCta />
    </>
  );
}
