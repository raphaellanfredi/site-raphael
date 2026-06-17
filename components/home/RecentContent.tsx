import SectionHeading from "@/components/shared/SectionHeading";
import SmartImage from "@/components/SmartImage";
import Button from "@/components/shared/Button";
import Reveal from "@/components/Reveal";
import { posts } from "@/data/posts";

export default function RecentContent() {
  const recentes = posts.slice(0, 3);

  return (
    <section className="bg-brand-light-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          label="Conteúdo"
          title={"O que estou\ncompartilhando agora."}
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentes.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.1}>
              <a
                href={post.href}
                target={post.href.startsWith("http") ? "_blank" : undefined}
                rel={post.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                  <p className="label mb-2">{post.categoria}</p>
                  <h3 className="font-display text-xl font-semibold text-brand-dark group-hover:text-brand-gold transition-colors">
                    {post.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{post.resumo}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/blog" variant="outline-dark">
            Ver todo o conteúdo
          </Button>
        </div>
      </div>
    </section>
  );
}
