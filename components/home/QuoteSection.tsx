"use client";

/**
 * components/home/QuoteSection.tsx
 *
 * Seção filosófica com uma afirmação central + GSAP entrance.
 *
 * Fix: usa gsap.fromTo() explicitando from e to — o estado inicial
 * não depende de gsap.set() separado, eliminando o flash de orientação
 * onde ctx.revert() restaurava opacity:0 depois da animação completar.
 * Os elementos partem de opacity:0/y:50 (JSX style) → 1/0 via GSAP.
 */

import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { gsap } from "@/lib/gsap";

const STATEMENT = {
  line1: "Construí em silêncio.",
  line2: "Agora é hora de ser visto.",
};

export default function QuoteSection() {
  const ref = useGsap<HTMLElement>((_ctx) => {
    // fromTo explícito: elimina a necessidade de gsap.set() separado.
    // O estado inicial está no JSX (style opacity:0, transform translateY(50px))
    // e o GSAP só precisa definir o estado final.
    gsap.fromTo(
      ".qstmt",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".quote-inner",
          start: "top 75%",
          once: true,
        },
      }
    );
  });

  return (
    <section ref={ref} className="relative bg-brand-dark py-32 lg:py-40">
      <div className="quote-inner mx-auto max-w-5xl px-6 text-center">
        <p
          className="qstmt font-display italic font-bold text-brand-gold"
          style={{
            opacity: 0,
            fontSize: "clamp(2rem, 5vw, 5rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
          }}
        >
          {STATEMENT.line1}
          <br />
          {STATEMENT.line2}
        </p>
        <span
          className="qstmt mt-8 block text-xs uppercase tracking-[0.4em] text-brand-white/30 font-sans not-italic"
          style={{ opacity: 0 }}
        >
          — Raphael Lanfredi
        </span>
      </div>
    </section>
  );
}
