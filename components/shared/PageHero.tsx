import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  /** When provided, renders a side photo (e.g. /sobre page) */
  photo?: { src: string; alt: string; label: string };
}

export default function PageHero({ label, title, subtitle, photo }: PageHeroProps) {
  return (
    <section className="relative bg-grain bg-brand-dark overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-24">
      <div
        className={`mx-auto max-w-7xl px-6 lg:px-10 ${
          photo ? "grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-14 items-center" : ""
        }`}
      >
        <div>
          <Reveal>
            <p className="label mb-6">{label}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="font-display font-bold text-brand-white text-4xl sm:text-5xl lg:text-6xl leading-[1.12] whitespace-pre-line">
              {title}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.3}>
              <p className="mt-7 max-w-2xl text-lg text-brand-white/70">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>

        {photo && (
          <Reveal x={40} delay={0.2}>
            <SmartImage
              src={photo.src}
              alt={photo.alt}
              label={photo.label}
              className="aspect-[4/5] w-full rounded-lg overflow-hidden"
              imgClassName="object-cover object-center"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
