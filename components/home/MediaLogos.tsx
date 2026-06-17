import Image from "next/image";
import Link from "next/link";

const LOGOS = [
  { nome: "O Globo", arquivo: "/midia/o-globo.png" },
  { nome: "PEGN", arquivo: "/midia/pegn.png" },
  { nome: "SBT", arquivo: "/midia/sbt.png" },
  { nome: "MIT", arquivo: "/midia/mit.png" },
  { nome: "SEBRAE", arquivo: "/midia/sebrae.png" },
  { nome: "Ambev", arquivo: "/midia/ambev.png" },
];

/**
 * Seção "Presente em" — strip editorial premium.
 *
 * Fix de contraste: os arquivos de logo NÃO são marcas transparentes —
 * são selos sólidos coloridos (ex: "O GLOBO" branco sobre azul). O filtro
 * grayscale+brightness+opacity anterior apagava esses selos contra o fundo
 * escuro (preto não clareia com brightness multiplicativo). Solução: exibir
 * as cores reais de cada selo, sempre em contraste total, dentro de um
 * card com cantos arredondados — sem depender de hover para ser legível.
 */
export default function MediaLogos() {
  return (
    <section className="bg-brand-dark py-16 border-y border-brand-gold/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* Label editorial */}
        <p className="text-center text-xs uppercase tracking-[0.5em] text-brand-gold/70 font-medium mb-12">
          Presente em
        </p>

        {/* Logo grid — 2 col mobile, 3 col tablet, 6 col desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {LOGOS.map((logo) => (
            <div
              key={logo.nome}
              title={logo.nome}
              className="relative h-12 lg:h-14 rounded-md overflow-hidden border border-brand-white/10 hover:border-brand-gold/50 hover:scale-105 transition-all duration-300"
            >
              <Image
                src={logo.arquivo}
                alt={logo.nome}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 12vw"
              />
            </div>
          ))}
        </div>

        {/* Rodapé sutil */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <span className="h-px w-16 bg-brand-gold/20" />
          <Link
            href="/midia"
            className="text-[10px] uppercase tracking-[0.4em] text-brand-white/30 hover:text-brand-gold transition-colors"
          >
            Ver toda a cobertura de mídia
          </Link>
          <span className="h-px w-16 bg-brand-gold/20" />
        </div>

      </div>
    </section>
  );
}
