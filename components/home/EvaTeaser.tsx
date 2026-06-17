import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import Button from "@/components/shared/Button";

const BULLETS = [
  "Plataforma proprietária de IA",
  "Integração nativa com Claude + GPT",
  "Focada em PMEs brasileiras",
  "Lançada em 07/07/2025",
];

export default function EvaTeaser() {
  return (
    <section className="bg-brand-accent py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <p className="label mb-4">Minha Criação</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-brand-white">
            A EVA não é
            <br />
            um chatbot.
          </h2>
          <p className="mt-4 font-display italic text-2xl text-brand-gold">
            É o primeiro funcionário que nunca dorme.
          </p>
          <p className="mt-6 text-brand-white/70 text-lg max-w-lg">
            Desenvolvi minha própria plataforma de IA para vendas e
            atendimento — integrada ao Claude e ao GPT como agentes. Não
            recomendo ferramentas de terceiros. Eu construí a minha. Isso
            muda tudo.
          </p>
          <ul className="mt-8 space-y-3">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-3 text-brand-white/85">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="https://www.evainteligencia.com.br/" variant="primary">
              Conhecer a EVA
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} x={40}>
          <SmartImage
            src="/eva/eva-mockup.png"
            alt="Mockup da plataforma EVA"
            label="Mockup / screenshot da EVA"
            className="aspect-[4/3] w-full rounded-lg"
            imgClassName="object-cover object-center"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
