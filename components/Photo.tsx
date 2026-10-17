import Image from "next/image";
import type { GalleryItem } from "@/content/gallery";

/** Photo du client, ou visuel de marque tant que la photo n'est pas fournie. */
export function Photo({
  item,
  priority = false,
  sizes = "(min-width: 768px) 33vw, 50vw",
  className = "",
}: {
  item: GalleryItem;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  if (item.src) {
    return (
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width ?? 1200}
        height={item.height ?? 900}
        sizes={sizes}
        priority={priority}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={item.alt}
      className={`relative flex h-full w-full items-end bg-gradient-to-br from-royal to-night p-4 ${className}`}
    >
      <span aria-hidden className="zellige-light absolute inset-0" />
      <span className="relative font-serif text-lg leading-tight text-ivory/90">{item.alt}</span>
    </div>
  );
}
