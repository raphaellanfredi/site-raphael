import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import Button from "@/components/shared/Button";

export default function ProductHero() {
  return (
    <section className="relative bg-grain bg-brand-accent overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
        <div>
          <Reveal>
            <p className="label mb-6">Minha Plataforma</p>
          </Reveal>
          <Reveal delay={0.1}>
            <SmartImage
              src="/eva/eva-logo.svg"
              alt="EVA"
              label="Logo EVA"
              className="h-16 w-40 mb-6"
              imgClassName="object-contain"
              fill
            />
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="font-display font-bold text-brand-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
              O primeiro funcionário
              <br />
              que <span className="text-brand-gold">nunca dorme</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-7 max-w-xl text-lg text-brand-white/70">
              Plataforma proprietária de IA para vendas e atendimento,
              integrada ao Claude e ao GPT como agentes. Desenvolvida por um
              empreendedor, para empreendedores.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-gold bg-brand-gold/10 px-5 py-2.5 text-sm text-brand-gold">
              Lançada em 07/07/2025
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10">
              <Button href="/contato" variant="primary">
                Falar sobre a EVA
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal x={40} delay={0.2}>
          <SmartImage
            src="/eva/eva-screenshot.png"
            alt="Screenshot da plataforma EVA"
            label="Screenshot / mockup da EVA"
            className="aspect-[4/3] w-full rounded-lg"
            imgClassName="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
