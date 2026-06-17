"use client";

/**
 * providers/SmoothScrollProvider.tsx
 *
 * Configura o GSAP ScrollTrigger para ler o scroll nativo do browser
 * (sem Lenis). O Lenis foi removido: era a causa raiz de travamentos de
 * scroll intermitentes próximo ao fim de páginas com muitas imagens —
 * sua posição de scroll virtual podia ficar dessincronizada do scroll
 * real do documento. Scroll nativo elimina essa classe de bug por completo
 * e o trackpad/mouse já tem momentum suave no nível do sistema operacional.
 *
 * Fix de performance mobile (mantido):
 *  ignoreMobileResize: true — impede que a barra de endereço do browser
 *  (aparecer/sumir) dispare ScrollTrigger.refresh() no meio de animações.
 *
 * Double-rAF no refresh — garante que o layout está completo antes de
 * medir as posições dos triggers.
 */

import { useEffect, type ReactNode } from "react";
import { ScrollTrigger } from "@/lib/gsap";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });

    const scheduleRefresh = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      });
    };

    scheduleRefresh();

    // Recalcula os triggers quando todas as imagens da página terminam de
    // carregar — evita posições de trigger desatualizadas em páginas com
    // muitas fotos (galerias) que ainda não tinham terminado de decodificar.
    window.addEventListener("load", scheduleRefresh);
    return () => window.removeEventListener("load", scheduleRefresh);
  }, []);

  return <>{children}</>;
}
