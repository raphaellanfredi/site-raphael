import fs from "fs";
import path from "path";
import Image from "next/image";

interface SmartImageProps {
  /** Path relative to /public, e.g. "/photos/raphael-hero.jpg" */
  src: string;
  alt: string;
  /** Shown inside the placeholder box while the real file doesn't exist yet */
  label: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

/**
 * Renders the real photo once it's placed in /public, and an elegant
 * placeholder (with the expected path) until then — so sections never break.
 */
export default function SmartImage({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  priority,
  fill,
  width,
  height,
  sizes,
}: SmartImageProps) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  if (exists) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={imgClassName || "object-cover"}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width ?? 800}
            height={height ?? 1000}
            priority={priority}
            className={imgClassName}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed border-brand-gold/40 bg-brand-accent/[0.03] text-center p-8 ${className}`}
    >
      <span className="text-3xl" aria-hidden>
        🖼️
      </span>
      <span className="label">{label}</span>
      <span className="text-xs text-text-muted break-all">{src}</span>
    </div>
  );
}
