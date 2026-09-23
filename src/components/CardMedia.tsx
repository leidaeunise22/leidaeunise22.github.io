"use client";

import type { SupportingMedia } from "@/data/media";
import PhotoSlot from "./PhotoSlot";
import { useLightbox } from "./Lightbox";

type CardMediaProps = SupportingMedia & { title?: string; date?: string };

export default function CardMedia({ images, linkedinUrl, title, date }: CardMediaProps) {
  const { open } = useLightbox();
  if (!images?.length && !linkedinUrl) return null;
  return (
    <div className="entry-media">
      {images?.length ? <div className="entry-gallery">{images.slice(0, 3).map((image, index) => <button key={image.src} type="button" onClick={() => open(images, index, { title, date })} aria-label={`View photo: ${image.alt}${index === 2 && images.length > 3 ? `; ${images.length} photos in gallery` : ""}`} className="gallery-photo"><PhotoSlot src={image.src} alt={image.alt} sizes="(max-width: 700px) 40vw, 300px"/><span className="gallery-photo-label mono">{index === 2 && images.length > 3 ? `+ ${images.length - 3} MORE PHOTOS` : "VIEW ↗"}</span></button>)}</div> : null}
      {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-link">The story on LinkedIn ↗</a>}
    </div>
  );
}
