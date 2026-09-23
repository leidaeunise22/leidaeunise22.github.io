"use client";

import type { SupportingMedia } from "@/data/media";
import PhotoSlot from "@/components/PhotoSlot";
import { LinkedInIcon } from "@/components/icons";
import { useLightbox } from "@/components/Lightbox";

const rotations = [-2, 1.5, -1, 2, -1.5, 1, -2, 1.5];

type CardMediaProps = SupportingMedia & {
  title?: string;
  date?: string;
};

export default function CardMedia({ images, linkedinUrl, title, date }: CardMediaProps) {
  const { open } = useLightbox();

  if (!images?.length && !linkedinUrl) return null;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2.5">
      {images?.map((image, index) => (
        <button
          key={image.src}
          type="button"
          onClick={() => open(images, index, { title, date })}
          aria-label={`View photo: ${image.alt}`}
          style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }}
          className="group relative h-16 w-16 shrink-0 cursor-pointer overflow-hidden rounded-md border border-cream shadow-sticker transition-transform hover:z-10 hover:scale-110 hover:rotate-0"
        >
          <PhotoSlot src={image.src} alt={image.alt} placeholderLabel="Add photo" sizes="64px" />
          <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />
        </button>
      ))}
      {linkedinUrl ? (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-cream bg-rose/15 px-3 py-1 text-xs font-semibold text-rose-deep shadow-sticker transition-colors hover:bg-rose/25"
        >
          <LinkedInIcon className="h-3.5 w-3.5" />
          View LinkedIn post
        </a>
      ) : null}
    </div>
  );
}
