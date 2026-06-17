import Reveal from "@/components/Reveal";
import Button from "@/components/shared/Button";

export default function FinalCta() {
  return (
    <section className="bg-brand-gold py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-brand-dark whitespace-pre-line">
            {"Pronto para escalar\ncom IA de verdade?"}
          </h2>
          <p className="mt-5 text-brand-accent text-lg max-w-xl mx-auto">
            Não teoria. Não curso genérico. Estratégia construída por quem
            fez e continua fazendo.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/contato" variant="dark">
              Falar comigo
            </Button>
            <Button href="https://www.evainteligencia.com.br/" variant="outline-dark">
              Conhecer a EVA
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
