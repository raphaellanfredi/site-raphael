import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "Sobre", href: "/sobre" },
  { label: "Treinamentos", href: "/treinamentos" },
  { label: "Mídia", href: "/midia" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
  { label: "EVA ↗", href: "https://www.evainteligencia.com.br/" },
];

const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://youtube.com/@raphaellanfredi" },
  { label: "LinkedIn", href: "https://linkedin.com/in/raphaellanfredi" },
  { label: "Instagram", href: "https://instagram.com/raphaellanfredi" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-brand-gold bg-brand-dark text-brand-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Image
            src="/logo-white.svg"
            alt="Raphael Lanfredi"
            width={140}
            height={28}
            className="h-8 w-auto mb-4"
          />
          <p className="font-display italic text-brand-gold text-lg">
            Tecnologia que liberta. Estratégia que escala.
          </p>
          <p className="mt-4 text-sm text-brand-white/60">
            Fundador da EVA — Inteligência Artificial para Negócios
          </p>
        </div>

        <div>
          <p className="label mb-5">Links rápidos</p>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("http") ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-white/80 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm text-brand-white/80 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label mb-5">Redes sociais</p>
          <ul className="flex flex-col gap-3">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-white/80 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-brand-white/60">
            raphael.lanfredi@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-brand-gold/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-brand-white/50 text-center">
          © {new Date().getFullYear()} Raphael Lanfredi. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
