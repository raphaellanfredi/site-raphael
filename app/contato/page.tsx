import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contato/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Raphael Lanfredi para palestras, consultorias, parcerias e projetos com a EVA.",
};

const CONTATOS_DIRETOS = [
  { label: "WhatsApp", valor: "(17) 99182-7713", href: "https://wa.me/5517991827713" },
  { label: "Email", valor: "raphael.lanfredi@gmail.com", href: "mailto:raphael.lanfredi@gmail.com" },
  { label: "Instagram", valor: "@raphaellanfredi", href: "https://instagram.com/raphaellanfredi" },
  { label: "LinkedIn", valor: "linkedin.com/in/raphaellanfredi", href: "https://linkedin.com/in/raphaellanfredi" },
  { label: "YouTube", valor: "youtube.com/@raphaellanfredi", href: "https://youtube.com/@raphaellanfredi" },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title={"Falar com quem\njá fez de verdade."}
        label="Contato"
        subtitle="Para palestras, consultorias, parcerias e projetos com a EVA."
      />

      {/* WhatsApp CTA */}
      <section className="bg-brand-gold py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-xl text-brand-dark">
              Prefere falar direto?
            </p>
            <p className="text-brand-accent text-sm mt-1">
              Resposta rápida pelo WhatsApp — de segunda a sexta.
            </p>
          </div>
          <a
            href="https://wa.me/5517991827713"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-8 py-3.5 text-sm font-bold text-brand-gold hover:bg-brand-accent transition-colors whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            (17) 99182-7713
          </a>
        </div>
      </section>

      <section className="bg-brand-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-lg bg-brand-light-bg p-8 border border-brand-gold/15">
              <p className="label mb-5">Contatos diretos</p>
              <ul className="space-y-5">
                {CONTATOS_DIRETOS.map((c) => (
                  <li key={c.label}>
                    <p className="text-xs uppercase tracking-wide text-text-muted">
                      {c.label}
                    </p>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-text-primary hover:text-brand-gold transition-colors"
                    >
                      {c.valor}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-8 pt-6 border-t border-brand-gold/15 text-xs text-text-muted">
                O formulário ao lado envia diretamente para nossa equipe.
                Para contato instantâneo, use o WhatsApp acima.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
