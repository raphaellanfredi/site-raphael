"use client";

/**
 * components/home/ThreeActs.tsx
 *
 * Os 3 Atos da jornada de Raphael — apresentados com scroll + GSAP.
 *
 * Técnica: sem pin:true (evita conflito com Lenis).
 * Os cards entram com ScrollTrigger + stagger conforme a seção sobe.
 * O efeito "câmera revelando a história" usa entrance animations once:true.
 */

import { useGsap } from "@/hooks/useGsap";
import { gsap } from "@/lib/gsap";
import Button from "@/components/shared/Button";

const ATOS = [
  {
    numero: "01",
    titulo: "O Artista",
    periodo: "Até 2010",
    descricao:
      "Banda Mármore de Carrara. 3 discos, clipe na MTV, música viral. Aprendi que comunicação é a ponte entre ideias e pessoas.",
    icone: "🎵",
  },
  {
    numero: "02",
    titulo: "O Empresário",
    periodo: "2010 — 2018",
    descricao:
      "Santo Bier. 48 unidades. Prêmios nacionais. Campeonato Carioca. SBT. E a coragem de largar tudo no auge para me curar.",
    icone: "🏆",
    destaque: "Este ato contém a virada mais importante.",
  },
  {
    numero: "03",
    titulo: "O Especialista",
    periodo: "2018 — Hoje",
    descricao:
      "IA, automação, 2BeMotion, 2.000+ empreendedores treinados. Em 2025 nasceu a EVA — minha própria plataforma de IA.",
    icone: "⚡",
  },
];

export default function ThreeActs() {
  const ref = useGsap<HTMLElement>(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".acts-inner",
        start: "top 80%",
        once: true,
      },
    });

    // 1. Label
    tl.from(".acts-label", { opacity: 0, x: 40, duration: 0.7, ease: "power3.out" }, 0);

    // 2. Título — mask reveal
    tl.from(
      ".acts-title-line",
      { y: "110%", stagger: 0.15, duration: 0.7, ease: "power3.out" },
      0.2
    );

    // 3. Divisor — wipe da esquerda
    tl.from(
      ".acts-divider",
      { scaleX: 0, transformOrigin: "left center", duration: 0.6, ease: "power3.out" },
      0.7
    );

    // 4. Cards — pan horizontal sequencial
    tl.from(
      ".acts-card",
      { x: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power3.out" },
      0.9
    );

    // 5. Botão CTA
    tl.from(".acts-cta", { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" }, 1.3);
  });

  return (
    <section ref={ref} className="bg-brand-light-bg py-24 lg:py-32">
      <div className="acts-inner mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[4fr_8fr] lg:items-center lg:gap-16">

          {/* ── Coluna esquerda: título + label ──────────────── */}
          <div>
            <p className="acts-label label mb-8">A Jornada</p>

            <h2 aria-label="Três atos. Uma história real.">
              {["Três atos.", "Uma história real."].map((line) => (
                <span key={line} className="block overflow-hidden leading-[1.1]">
                  <span
                    className="acts-title-line block font-display font-bold text-brand-dark"
                    style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>

            <div
              className="acts-divider mt-8 h-px bg-brand-gold/40"
              style={{ transformOrigin: "left center" }}
            />

            <div className="acts-cta mt-8">
              <Button href="/sobre" variant="outline-dark">
                Ver a história completa
              </Button>
            </div>
          </div>

          {/* ── Coluna direita: cards dos atos ───────────────── */}
          <div className="flex flex-col gap-5">
            {ATOS.map((ato) => (
              <div
                key={ato.numero}
                className="acts-card rounded-lg bg-brand-white p-7 shadow-card border border-brand-gold/15"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-bold text-brand-gold">
                    {ato.numero}
                  </span>
                  <span className="text-2xl" aria-hidden>
                    {ato.icone}
                  </span>
                </div>
                <p className="label mb-1">{ato.periodo}</p>
                <h3 className="font-display text-xl font-semibold text-brand-dark">
                  {ato.titulo}
                </h3>
                <p className="mt-3 text-text-muted text-sm leading-relaxed">
                  {ato.descricao}
                </p>
                {ato.destaque && (
                  <p className="mt-3 text-sm italic text-brand-gold font-display">
                    {ato.destaque}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
