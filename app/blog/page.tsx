import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blog & Conteúdo",
  description:
    "Vídeos, artigos e reflexões sobre IA, empreendedorismo e a jornada de Raphael Lanfredi.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Conteúdo"
        title={"O que estou\ncompartilhando agora."}
        subtitle="Vídeos, artigos e bastidores sobre IA, automação e a jornada de quem constrói antes de ensinar."
      />

      <section className="bg-brand-light-bg py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <a
                  href={post.href}
                  target={post.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    post.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block rounded-lg overflow-hidden bg-brand-white shadow-card border border-brand-gold/10"
                >
                  <SmartImage
                    src={post.thumbnail}
                    alt={post.titulo}
                    label={post.categoria}
                    className={`aspect-video w-full ${
                      post.thumbnailFit === "contain" ? "bg-brand-dark/[0.03]" : ""
                    }`}
                    imgClassName={
                      post.thumbnailFit === "contain"
                        ? "object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                        : "object-cover group-hover:scale-105 transition-transform duration-500"
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <p className="label mb-2">{post.categoria}</p>
                      <time className="text-xs text-text-muted">
                        {new Date(post.data).toLocaleDateString("pt-BR")}
                      </time>
                    </div>
                    <h2 className="font-display text-xl font-semibold text-brand-dark group-hover:text-brand-gold transition-colors">
                      {post.titulo}
                    </h2>
                    <p className="mt-2 text-sm text-text-muted">
                      {post.resumo}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
