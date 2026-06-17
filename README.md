# Site Oficial — Raphael Lanfredi

Site pessoal construído com Next.js 14 (App Router), Tailwind CSS v4 e Framer Motion, seguindo a especificação em `site_prompt_raphael.json`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estrutura

- `app/` — páginas (Home, Sobre, EVA, Treinamentos, Mídia, Blog, Contato)
- `components/` — componentes reutilizáveis, organizados por página (`home/`, `sobre/`, `midia/`, `eva/`, `treinamentos/`, `contato/`) e globais (`shared/`, `Header`, `Footer`)
- `data/` — conteúdo mockado (`posts.ts`, `treinamentos.ts`) — edite diretamente, sem precisar de CMS
- `public/` — imagens e arquivos estáticos

## Como adicionar as fotos e logos reais

Todas as imagens do site usam o componente `SmartImage` (`components/SmartImage.tsx`): enquanto o arquivo não existe em `/public`, ele mostra um **placeholder elegante com o caminho exato esperado**. Basta colocar o arquivo real no caminho indicado e a foto aparece automaticamente — não é necessário tocar no código.

Caminhos esperados:

| Pasta | Conteúdo |
|---|---|
| `/public/photos/raphael-hero.jpg` | Foto principal — Home hero (vertical) |
| `/public/photos/raphael-sobre.jpg` | Foto editorial — página Sobre |
| `/public/photos/premios/premio-01.jpg` a `03.jpg` | Prêmios nacionais — Santo Bier |
| `/public/photos/imprensa/*.jpg` | Matérias e recortes de imprensa |
| `/public/photos/treinamentos/treinamento-01.jpg` a `06.jpg` | Fotos de treinamentos/palestras |
| `/public/eva/eva-screenshot.png` | Screenshot/mockup da plataforma EVA |
| `/public/midia/*.png` | Logos dos veículos de mídia (grid "Como visto em") |
| `/public/logo.svg` / `/public/logo-white.svg` | Logo (já existe um wordmark placeholder — substitua pela logo real) |
| `/public/og-image.jpg` | Imagem de Open Graph (1200×630px) para compartilhamento em redes sociais |

Formatos aceitos: JPG ou WebP, resolução mínima de 1200px no maior lado.

## Conteúdo do blog/posts

Edite `data/posts.ts` para adicionar, remover ou atualizar os cards de "Últimos Conteúdos" (Home) e a listagem `/blog`. Posts com `href` interno (`/blog/slug`) geram automaticamente uma página de artigo em `app/blog/[slug]/page.tsx`.

## Deploy

Recomendado: [Vercel](https://vercel.com/new).
