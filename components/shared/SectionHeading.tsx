import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {label && (
        <Reveal>
          <p className="label mb-4">{label}</p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2
          className={`font-display font-semibold text-4xl md:text-5xl whitespace-pre-line ${
            light ? "text-brand-white" : "text-brand-dark"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={`mt-5 max-w-2xl text-lg ${
              align === "center" ? "mx-auto" : ""
            } ${light ? "text-brand-white/70" : "text-text-muted"}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
