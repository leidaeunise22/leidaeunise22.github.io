"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedCardProps = { index?: number; children: ReactNode; className?: string; id?: string };

export default function AnimatedCard({ index = 0, children, className = "", id }: AnimatedCardProps) {
  const reduced = useReducedMotion();
  return (
    <motion.li
      id={id}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45, delay: Math.min(index, 3) * 0.04 }}
      className={`editorial-entry ${className}`}
    >
      <span className="entry-index mono" aria-hidden="true">{String(index + 1).padStart(2, "0")} /</span>
      <div className="entry-content">{children}</div>
    </motion.li>
  );
}
