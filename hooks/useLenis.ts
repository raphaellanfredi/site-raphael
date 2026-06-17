/**
 * hooks/useLenis.ts
 *
 * Retorna o ref do Lenis para scroll programático.
 *
 * Uso:
 *   const lenisRef = useLenis();
 *   <button onClick={() => lenisRef.current?.scrollTo(0, { duration: 1.5 })}>
 *     Topo
 *   </button>
 *
 * IMPORTANTE: sempre leia lenisRef.current dentro de event handlers —
 * nunca durante o render.
 */
import { useContext } from "react";
import { LenisContext } from "@/contexts/LenisContext";

export function useLenis() {
  return useContext(LenisContext);
}
