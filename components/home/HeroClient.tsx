"use client";

/**
 * components/home/HeroClient.tsx
 *
 * Animações GSAP do hero — separado do Hero.tsx (server) para que
 * SmartImage acesse fs.existsSync sem entrar no bundle do browser.
 *
 * Estratégia de performance mobile:
 *  gsap.matchMedia() bifurca as animações por breakpoint:
 *
 *  Desktop (≥1024px)
 *    • Vídeo: scale 1.06 → 1.0 em 10s (dolly out, GPU layer dedicada)
 *    • Foto: slide x: 60 → 0 (elemento menor, composta normalmente)
 *    • Scroll indicator: loop vertical + ScrollTrigger hide/show
 *
 *  Mobile (<1024px)
 *    • Vídeo: sem animação de scale (evita contenda de GPU com vídeo em loop)
 *    • Foto: fade simples sem translate-x (evita repaint em overflow-x:hidden)
 *    • Scroll indicator: oculto (UX desnecessário em touch)
 *
 *  Todos os dispositivos
 *    • Overlay, label, título (mask reveal), subtítulo, botões
 */

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

export default function HeroClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const scrollLightRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Animações para TODOS os dispositivos ──────────────────

      // 1. Overlay: tensão visual — fundo escuro surge gradualmente
      if (overlayRef.current) {
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.6, ease: "power3.out" }
        );
      }

      // 2. Label: fade up
      gsap.fromTo(
        ".hero-label",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.4, ease: "power3.out" }
      );

      // 3. Título: mask reveal por linha (each .hero-line sobe de 110%)
      gsap.fromTo(
        ".hero-line",
        { y: "110%" },
        {
          y: "0%",
          duration: 0.9,
          delay: 0.6,
          stagger: 0.11,
          ease: "power3.out",
        }
      );

      // 4. Subtítulo
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, delay: 1.0, ease: "power3.out" }
      );

      // 5. Botões
      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, delay: 1.15, ease: "power3.out" }
      );

      // ── Animações diferenciadas por breakpoint ─────────────────

      const mm = gsap.matchMedia();

      // Desktop: efeitos GPU-intensivos — tela grande tem VRAM suficiente
      mm.add("(min-width: 1024px)", () => {
        // Vídeo: dolly out (scale 1.06 → 1.0, 10s)
        if (videoRef.current) {
          gsap.fromTo(
            videoRef.current,
            { scale: 1.06 },
            { scale: 1.0, duration: 10, ease: "expo.out" }
          );
        }

        // Foto: slide from x: 60 (elemento separado do vídeo — sem conflito)
        gsap.fromTo(
          ".hero-photo",
          { opacity: 0, x: 60 },
          { opacity: 1, x: 0, duration: 1.0, delay: 0.5, ease: "power3.out" }
        );

        // Scroll indicator: loop vertical
        if (scrollLightRef.current) {
          gsap.fromTo(
            scrollLightRef.current,
            { y: "-100%" },
            {
              y: "200%",
              duration: 1.4,
              repeat: -1,
              ease: "power3.inOut",
              repeatDelay: 0.3,
            }
          );
        }

        // Oculta o indicador ao primeiro pixel de scroll
        if (scrollIndicatorRef.current) {
          ScrollTrigger.create({
            start: 1,
            onEnter: () => {
              gsap.to(".hero-scroll-indicator", {
                opacity: 0,
                y: 12,
                duration: 0.6,
                ease: "expo.in",
              });
            },
            onLeaveBack: () => {
              gsap.to(".hero-scroll-indicator", {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "expo.out",
              });
            },
          });
        }
      });

      // Mobile: animações leves — sem scale no vídeo, sem translate-x
      mm.add("(max-width: 1023px)", () => {
        // Foto: fade simples (sem x-translate que causaria repaint em overflow-x:hidden)
        gsap.fromTo(
          ".hero-photo",
          { opacity: 0 },
          { opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Vídeo background */}
      <video
        ref={videoRef}
        src="/video-hero-site.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />

      {/* Overlay escuro para legibilidade e tensão visual */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-accent/80 to-brand-dark/70"
        aria-hidden
      />

      {/* Gradiente inferior — suaviza transição com próxima seção */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none"
        aria-hidden
      />

      {/* Refs para o scroll indicator (desktop only via matchMedia) */}
      <div ref={scrollIndicatorRef} className="hero-scroll-indicator-ref hidden">
        <div ref={scrollLightRef} />
      </div>
    </>
  );
}
