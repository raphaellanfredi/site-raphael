/**
 * components/home/Hero.tsx  (Server Component)
 *
 * Hero principal do site Raphael Lanfredi.
 *
 * Camadas visuais (bottom → top):
 *  1. Vídeo em loop (scale 1.05 → 1.0 via GSAP em HeroClient)
 *  2. Overlay escuro gradiente (opacidade via GSAP)
 *  3. Gradiente lateral para a foto
 *  4. Conteúdo: label, título (mask reveal), subtítulo, botões
 *  5. SmartImage: foto de Raphael (real ou placeholder elegante)
 *
 * HeroClient trata todas as animações client-side.
 * SmartImage fica aqui (server) para acessar fs.existsSync.
 */

import SmartImage from "@/components/SmartImage";
import Button from "@/components/shared/Button";
import HeroClient from "./HeroClient";

export default function Hero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden min-h-screen flex items-center pt-20">
      {/* ── Vídeo background + overlays (client) ─────────────────── */}
      <HeroClient />

      {/* ── Conteúdo posicionado acima do vídeo ─────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 items-center">
        {/* Coluna de texto */}
        <div>
          {/* Label — fade up */}
          <div className="hero-label">
            <p className="label mb-6">
              EMPREENDEDOR · IA &amp; AUTOMAÇÃO · FUNDADOR DA EVA
            </p>
          </div>

          {/* Título — mask reveal por linha */}
          <h1 className="font-display font-bold text-brand-white text-5xl sm:text-6xl lg:text-7xl leading-[1.08]">
            {/* Linha 1 */}
            <span className="block overflow-hidden">
              <span className="hero-line block">Tecnologia</span>
            </span>
            {/* Linha 2 */}
            <span className="block overflow-hidden">
              <span className="hero-line block">
                que{" "}
                <span className="text-brand-gold">liberta</span>.
              </span>
            </span>
            {/* Linha 3 */}
            <span className="block overflow-hidden">
              <span className="hero-line block">Estratégia</span>
            </span>
            {/* Linha 4 */}
            <span className="block overflow-hidden">
              <span className="hero-line block">
                que{" "}
                <span className="text-brand-gold">escala</span>.
              </span>
            </span>
          </h1>

          {/* Subtítulo — fade up */}
          <div className="hero-sub">
            <p className="mt-8 max-w-xl text-lg text-brand-white/70">
              Empreendedor serial. Músico. Fundador do Santo Bier.
              Especialista em IA. 20 anos de pele no jogo — não de slides.
            </p>
          </div>

          {/* Botões — fade up */}
          <div className="hero-cta mt-10 flex flex-wrap gap-4">
            <Button href="/sobre" variant="primary">
              Conheça minha jornada
            </Button>
            <Button href="https://www.evainteligencia.com.br/" variant="secondary" external>
              Conheça a EVA
            </Button>
          </div>
        </div>

        {/* Foto — slide from right */}
        <div className="hero-photo relative">
          <SmartImage
            src="/photos/raphael-hero.jpg"
            alt="Raphael Lanfredi — Empreendedor e especialista em IA"
            label="Foto principal — Raphael Lanfredi"
            className="aspect-[4/5] w-full"
            imgClassName="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute -bottom-4 right-4 sm:bottom-6 sm:right-6 rounded-full border border-brand-gold bg-brand-dark/80 px-5 py-3 backdrop-blur-sm">
            <p className="text-xs sm:text-sm font-bold text-brand-gold whitespace-nowrap tracking-widest uppercase">
              Santo Bier · 7AI · EVA
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.3em] text-brand-white/40 font-medium">
          scroll
        </span>
        <div className="relative h-12 w-px overflow-hidden bg-brand-white/15">
          <div className="scroll-light absolute inset-x-0 top-0 h-1/2 bg-brand-gold" />
        </div>
      </div>
    </section>
  );
}
