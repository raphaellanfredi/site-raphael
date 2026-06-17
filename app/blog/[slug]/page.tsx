import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import SmartImage from "@/components/SmartImage";
import Reveal from "@/components/Reveal";
import { posts } from "@/data/posts";

const markdownComponents = {
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="font-display font-semibold text-2xl md:text-3xl text-brand-dark mt-12 mb-4"
      {...props}
    />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="text-lg text-text-primary leading-relaxed mb-5" {...props} />
  ),
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-brand-dark" {...props} />
  ),
  em: (props: React.ComponentPropsWithoutRef<"em">) => (
    <em className="italic text-text-muted" {...props} />
  ),
  hr: () => <hr className="my-10 border-brand-gold/20" />,
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2 text-lg text-text-primary" {...props} />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => <li className="pl-1" {...props} />,
};

export function generateStaticParams() {
  return posts
    .filter((p) => !p.href.startsWith("http"))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.titulo, description: post.resumo };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post || post.href.startsWith("http")) {
    notFound();
  }

  return (
    <article className="bg-brand-white pt-36 pb-24 lg:pt-44">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <Link href="/blog" className="label">
            ← Voltar ao blog
          </Link>
          <p className="label mt-8 mb-3">{post.categoria}</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-brand-dark">
            {post.titulo}
          </h1>
          <time className="mt-4 block text-sm text-text-muted">
            {new Date(post.data).toLocaleDateString("pt-BR")}
          </time>
        </Reveal>

        <Reveal delay={0.1}>
          <SmartImage
            src={post.thumbnail}
            alt={post.titulo}
            label={post.categoria}
            className={`mt-10 aspect-video w-full rounded-lg ${
              post.thumbnailFit === "contain" ? "bg-brand-dark/[0.03]" : ""
            }`}
            imgClassName={post.thumbnailFit === "contain" ? "object-contain p-4" : "object-cover"}
            fill
            sizes="100vw"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-lg text-text-primary">{post.resumo}</p>
          {post.conteudo ? (
            <div className="mt-4">
              <ReactMarkdown components={markdownComponents}>
                {post.conteudo}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="mt-6 text-text-muted italic">
              Conteúdo completo em breve. Acompanhe as redes de Raphael
              Lanfredi para a publicação completa.
            </p>
          )}
        </Reveal>
      </div>
    </article>
  );
}
