"use client";

/**
 * components/Reveal.tsx
 *
 * Wrapper de animação baseado em GSAP + ScrollTrigger.
 * Substitui a versão Framer Motion — mesma API pública.
 *
 * Props:
 *  y     → translate Y inicial (padrão: 24px), ignora se `mask` for true
 *  x     → translate X inicial; desativa Y quando usado
 *  delay → delay em segundos GSAP (proporcional, não real em scrub)
 *  mask  → reveal cinematográfico: texto emerge de y:"110%" para y:0
 *           dentro de overflow-hidden (sem alterar opacidade)
 */

import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  x?: number;
  /** Reveal cinematográfico: o conteúdo sobe de dentro de um overflow-hidden */
  mask?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
  x,
  mask = false,
}: RevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = mask ? innerRef.current : wrapper;
    if (!wrapper || !inner) return;

    const ctx = gsap.context(() => {
      if (mask) {
        // ── Mask reveal: o inner sobe de baixo do "chão" ──────────
        // O wrapper tem overflow-hidden, então o inner fica invisível
        // enquanto está em y > 0 — emerge limpo, sem fade.
        gsap.fromTo(
          inner,
          { y: "110%" },
          {
            y: "0%",
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 90%",
              once: true,
            },
          }
        );
      } else {
        // ── Reveal padrão: fade + translate ───────────────────────
        gsap.fromTo(
          inner,
          {
            opacity: 0,
            y: x === undefined ? y : 0,
            x: x ?? 0,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.7,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 90%",
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [delay, mask, x, y]);

  if (mask) {
    return (
      <div ref={wrapperRef} className={`overflow-hidden ${className ?? ""}`}>
        <div ref={innerRef}>{children}</div>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
}
