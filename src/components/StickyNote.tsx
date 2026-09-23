"use client";

import { motion } from "framer-motion";
import WashiTape from "@/components/WashiTape";

type StickyNoteProps = {
  className?: string;
};

export default function StickyNote({ className = "" }: StickyNoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -3 }}
      transition={{ duration: 0.6, delay: 0.65 }}
      whileHover={{ rotate: 0, scale: 1.05 }}
      className={`pointer-events-auto relative w-44 rounded-sm bg-blush p-4 pt-6 text-center shadow-sticker ${className}`}
    >
      <WashiTape
        tone="gold"
        rotate={-3}
        className="left-1/2 top-0 h-6 w-16 -translate-x-1/2 -translate-y-1/2"
      />
      <p className="font-script text-xl leading-snug text-ink/75">
        currently building something new
      </p>
    </motion.div>
  );
}
