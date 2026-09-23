"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type FloatWrapProps = {
  children: ReactNode;
  className?: string;
  /** vertical bob amplitude in px */
  y?: number;
  /** rotation sway amplitude in degrees */
  rotate?: number;
  duration?: number;
  delay?: number;
};

// Continuous, slow, low-amplitude idle motion — kept in its own wrapper so it
// never fights the transform an ancestor motion.div sets for entrance/hover.
export default function FloatWrap({
  children,
  className = "",
  y = 6,
  rotate,
  duration = 5,
  delay = 0,
}: FloatWrapProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={rotate ? { y: [0, -y, 0], rotate: [-rotate, rotate, -rotate] } : { y: [0, -y, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}
