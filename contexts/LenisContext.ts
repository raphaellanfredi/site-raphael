/**
 * contexts/LenisContext.ts
 *
 * Provê o MutableRefObject<Lenis | null> para o resto da app.
 *
 * Por que ref e não state?
 *  - Chamar setState dentro de um useEffect é flagged pelo React Compiler.
 *  - O ref.current é lido dentro de event handlers (onClick, onKeyDown),
 *    nunca durante o render — então não precisa de reatividade.
 */
import { createContext, type MutableRefObject } from "react";
import type Lenis from "lenis";

const defaultRef: MutableRefObject<Lenis | null> = { current: null };

export const LenisContext =
  createContext<MutableRefObject<Lenis | null>>(defaultRef);
