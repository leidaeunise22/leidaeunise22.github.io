"use client";

import type { SupportingMedia } from "@/data/media";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import PhotoSlot from "./PhotoSlot";
import { useLightbox } from "./Lightbox";

type CardMediaProps = SupportingMedia & { title?: string; date?: string; showCaptions?: boolean; carousel?: boolean };

export default function CardMedia({ images, linkedinUrl, title, date, showCaptions = false, carousel = false }: CardMediaProps) {
  const { open } = useLightbox();
  const galleryRef = useRef<HTMLDivElement>(null);
  const pauseAutoplay = useRef(false);
  const reducedMotion = useReducedMotion();
  const useCarousel = showCaptions || carousel || (images?.length ?? 0) > 3;
  useEffect(() => {
    if (!useCarousel || (images?.length ?? 0) <= 3 || reducedMotion) return;
    const timer = window.setInterval(() => {
      const gallery = galleryRef.current;
      if (!gallery || pauseAutoplay.current) return;
      const atEnd = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 8;
      gallery.scrollTo({
        left: atEnd ? 0 : gallery.scrollLeft + gallery.clientWidth * 0.8,
        behavior: "smooth",
      });
    }, 4500);
    return () => window.clearInterval(timer);
  }, [images?.length, reducedMotion, useCarousel]);
  if (!images?.length && !linkedinUrl) return null;
  return (
    <div className={`entry-media${showCaptions ? " photo-journal" : ""}${carousel ? " experience-carousel" : ""}${useCarousel ? " carousel-media" : ""}`}>
      {images?.length ? (
        <>
          <p className="gallery-count mono">{String(images.length).padStart(2, "0")} PHOTOS / CLICK TO EXPLORE</p>
          <div
            className={useCarousel ? "photo-carousel" : "entry-gallery-wrap"}
            onMouseEnter={() => { pauseAutoplay.current = true; }}
            onMouseLeave={() => { pauseAutoplay.current = false; }}
            onFocusCapture={() => { pauseAutoplay.current = true; }}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) pauseAutoplay.current = false;
            }}
          >
          <div className="entry-gallery" ref={useCarousel ? galleryRef : undefined} role={useCarousel ? "region" : undefined} aria-label={useCarousel ? showCaptions ? "Life in good company photo carousel" : `${title ?? "Project"} photo carousel` : undefined}>
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => open(images, index, { title, date })}
                aria-label={`View photo ${index + 1} of ${images.length}: ${image.alt}`}
                className="gallery-photo"
              >
                <span className="gallery-image-wrap">
                  <PhotoSlot src={image.src} alt={image.alt} sizes="(max-width: 700px) 45vw, 350px" />
                  <span className="gallery-photo-label mono">{String(index + 1).padStart(2, "0")} ↗</span>
                </span>
                {showCaptions && <span className="journal-caption">{image.alt}</span>}
              </button>
            ))}
          </div>
          {useCarousel && images.length > 1 ? (
            <div className="carousel-controls" aria-label="Photo carousel controls">
              <button type="button" aria-label="Previous photos" onClick={() => galleryRef.current?.scrollBy({ left: -galleryRef.current.clientWidth * 0.8, behavior: "smooth" })}>←</button>
              <span className="mono">{showCaptions ? "DRAG OR SCROLL TO EXPLORE" : `${images.length} PHOTOS`}</span>
              <button type="button" aria-label="Next photos" onClick={() => galleryRef.current?.scrollBy({ left: galleryRef.current.clientWidth * 0.8, behavior: "smooth" })}>→</button>
            </div>
          ) : null}
          </div>
        </>
      ) : null}
      {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-link">The story on LinkedIn ↗</a>}
    </div>
  );
}
