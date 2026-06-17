/**
 * hooks/useIsomorphicLayoutEffect.ts
 *
 * useLayoutEffect no cliente (executa de forma síncrona antes do paint).
 * useEffect no servidor (SSR) para evitar o aviso do React.
 *
 * Usar sempre que o GSAP precisar de referências de DOM reais.
 */
import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
