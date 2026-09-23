"use client";

import { useState } from "react";
import Image from "next/image";
import { ImagePlaceholderIcon } from "@/components/icons";

type PhotoSlotProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  placeholderLabel?: string;
  showPlaceholder?: boolean;
};

export default function PhotoSlot({
  src,
  alt,
  sizes = "100vw",
  className = "",
  placeholderLabel = "Add photo",
  showPlaceholder = true,
}: PhotoSlotProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    if (!showPlaceholder) return null;
    return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-1 bg-gradient-to-br from-blush to-cream text-ink/40 ${className}`}
      >
        <ImagePlaceholderIcon className="h-6 w-6" />
        <span className="px-2 text-center text-[11px] font-medium">
          {placeholderLabel}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className={`object-cover ${className}`}
      onError={() => setErrored(true)}
    />
  );
}
