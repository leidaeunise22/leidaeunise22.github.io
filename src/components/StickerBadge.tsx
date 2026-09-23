"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type StickerBadgeProps = {
  children: ReactNode;
  tone?: "rose" | "cream" | "sage";
  rotate?: number;
  className?: string;
};

const toneClasses: Record<NonNullable<StickerBadgeProps["tone"]>, string> = {
  rose: "bg-rose/20 text-rose-deep",
  cream: "bg-cream text-ink",
  sage: "bg-sage/50 text-sage-deep",
};

export default function StickerBadge({
  children,
  tone = "rose",
  rotate = -1.5,
  className = "",
}: StickerBadgeProps) {
  return (
    <motion.span
      initial={{ rotate }}
      whileHover={{ rotate: 0, scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`inline-flex select-none items-center gap-1 rounded-full border border-cream px-3.5 py-1.5 text-xs font-semibold shadow-sticker ${toneClasses[tone]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
