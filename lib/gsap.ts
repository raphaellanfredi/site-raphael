/**
 * lib/gsap.ts
 *
 * Ponto único de registro dos plugins GSAP.
 * Importe sempre daqui — nunca de "gsap" diretamente —
 * para garantir que ScrollTrigger já esteja registrado.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
