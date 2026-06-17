import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "outline-dark";
  className?: string;
  external?: boolean;
}

const VARIANTS: Record<string, string> = {
  primary:
    "bg-brand-gold text-brand-dark font-bold hover:bg-brand-gold/90",
  secondary:
    "border border-brand-gold text-brand-white hover:bg-brand-gold hover:text-brand-dark",
  dark: "bg-brand-dark text-brand-gold hover:bg-brand-accent",
  "outline-dark":
    "border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-gold",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: ButtonProps) {
  const isExternal = external || href.startsWith("http");
  const cls = `inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm tracking-wide transition-colors duration-300 ${VARIANTS[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
