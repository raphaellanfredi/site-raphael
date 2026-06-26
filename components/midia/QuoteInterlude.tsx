import Reveal from "@/components/Reveal";

export default function QuoteInterlude() {
  return (
    <section className="bg-brand-gold py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="font-display italic text-2xl md:text-3xl text-brand-dark leading-relaxed">
            &ldquo;Não sou mais um &lsquo;guru de IA&rsquo; que aprendeu a
            usar ChatGPT em 2023. Sou um empreendedor com 20 anos de mão na
            massa.&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
