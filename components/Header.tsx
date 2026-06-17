"use client";

/**
 * components/Header.tsx
 *
 * Fix menu mobile: o painel é renderizado via ReactDOM.createPortal()
 * no document.body, saindo completamente do stacking context do header
 * (z-50). Isso resolve o bug onde o conteúdo do hero (z-10) aparecia
 * sobre o overlay do menu em iOS Safari e Android Chrome, causado pela
 * interação entre stacking contexts de elementos fixed e will-change.
 *
 * O portal tem z-[999], garantindo que fica acima de tudo na página.
 *
 * Fix scroll: globals.css define `overflow-x: hidden` no <html>. Isso
 * desativa a propagação CSS padrão body→html (CSS Overflow spec: só
 * propaga quando o overflow do root é "visible" nos dois eixos). Resultado:
 * document.scrollingElement é <html>, e body.style.overflow="hidden"
 * NUNCA bloqueava o scroll real — em qualquer device touch o fundo
 * da página rolava por trás do menu aberto. Fix: trava o overflow
 * diretamente em document.documentElement (o elemento que de fato rola).
 */

import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Sobre", href: "/sobre" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Mídia", href: "/midia" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Portal só pode montar após hidratação (document não existe no servidor)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // documentElement (<html>) é o scrollingElement real nesta app — ver
    // comentário no topo do arquivo. Trava nos dois para cobrir qualquer
    // navegador onde a propagação CSS padrão funcione normalmente.
    document.documentElement.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileMenu = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden fixed inset-x-0 bottom-0 bg-brand-dark px-8 py-10"
          style={{ top: "80px", zIndex: 999 }}
        >
          <nav className="flex flex-col gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-brand-white hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.evainteligencia.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit items-center rounded-full border border-brand-gold px-6 py-3 text-sm font-medium text-brand-gold"
            >
              Conhecer a EVA
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/logo-white.svg"
              alt="Raphael Lanfredi"
              width={160}
              height={32}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-white/90 hover:text-brand-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://www.evainteligencia.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center rounded-full border border-brand-gold px-5 py-2 text-sm font-medium text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-dark"
          >
            Conhecer a EVA
          </a>

          {/* Botão hambúrguer — z-[1000] para ficar ACIMA do overlay do menu */}
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            style={{ zIndex: 1000 }}
          >
            <span
              className={`h-[1.5px] w-6 bg-brand-white transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-6 bg-brand-white transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Portal: renderiza FORA do stacking context do header */}
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  );
}
