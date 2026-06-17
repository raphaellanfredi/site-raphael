"use client";

/**
 * components/CountUp.tsx
 *
 * Contador numérico animado com GSAP.
 * Substitui a versão baseada em requestAnimationFrame + Framer Motion.
 *
 * Por que GSAP é melhor aqui?
 *  - O ticker do GSAP já está sincronizado com Lenis — não há drift.
 *  - A ease "expo.out" dá ao contador uma aceleração inicial dramática que
 *    desacelera suavemente ao chegar ao valor final — efeito premium.
 *  - Cleanup automático via gsap.context().revert().
 */

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

interface CountUpProps {
  /** Texto completo, ex: "2.000+" ou "48" — só os dígitos animam */
  value: string;
  duration?: number;
}

export default function CountUp({ value, duration = 1.9 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  // Extrai parte numérica, prefixo e sufixo
  const match = value.match(/[\d.]+/);
  const numeric = match ? parseInt(match[0].replace(/\./g, ""), 10) : null;
  const prefix = match ? value.slice(0, match.index) : "";
  const suffix = match
    ? value.slice((match.index ?? 0) + match[0].length)
    : value;

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || numeric === null) return;

    const state = { n: 0 };

    const ctx = gsap.context(() => {
      gsap.to(state, {
        n: numeric,
        duration,
        ease: "expo.out",
        onUpdate() {
          el.textContent =
            prefix + Math.round(state.n).toLocaleString("pt-BR") + suffix;
        },
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [numeric, prefix, suffix, duration]);

  if (numeric === null) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}
