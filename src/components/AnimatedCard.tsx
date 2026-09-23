"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedCardProps = {
  index?: number;
  children: ReactNode;
};

export default function AnimatedCard({ index = 0, children }: AnimatedCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: Math.min(index, 6) * 0.08 }}
      whileHover={{ y: -3, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
      className="relative rounded-2xl border border-cream bg-cream p-5 shadow-sticker transition-shadow"
    >
      {children}
    </motion.li>
  );
}
