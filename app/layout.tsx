import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://raphaellanfredi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raphael Lanfredi — Tecnologia que liberta. Estratégia que escala.",
    template: "%s — Raphael Lanfredi",
  },
  description:
    "Empreendedor serial, fundador da EVA e especialista em IA para PMEs. 20+ anos de experiência real. Músico, empresário, especialista. De dentro para fora.",
  openGraph: {
    title: "Raphael Lanfredi — Tecnologia que liberta. Estratégia que escala.",
    description:
      "Empreendedor serial, fundador da EVA e especialista em IA para PMEs. 20+ anos de experiência real.",
    url: siteUrl,
    siteName: "Raphael Lanfredi",
    images: ["/og-image.jpg"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raphael Lanfredi — Tecnologia que liberta. Estratégia que escala.",
    description:
      "Empreendedor serial, fundador da EVA e especialista em IA para PMEs.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-white text-text-primary">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
