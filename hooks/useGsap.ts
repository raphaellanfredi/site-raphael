/**
 * hooks/useGsap.ts
 *
 * Hook que cria um gsap.context() scoped ao elemento referenciado.
 * Todos os seletores CSS dentro do callback são limitados ao container,
 * evitando conflitos entre seções com classes iguais.
 *
 * Uso:
 *   const ref = useGsap<HTMLElement>((ctx) => {
 *     gsap.from(".minha-classe", { opacity: 0 });
 *     // ".minha-classe" só seleciona dentro do container
 *   });
 *   return <section ref={ref}>...</section>
 */
import { useRef, type DependencyList, type RefObject } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

export function useGsap<T extends HTMLElement = HTMLDivElement>(
  callback: (ctx: gsap.Context) => void,
  deps: DependencyList = []
): RefObject<T | null> {
  const containerRef = useRef<T | null>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      callback(self);
    }, containerRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
