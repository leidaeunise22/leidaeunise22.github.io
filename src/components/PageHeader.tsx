"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import FloatWrap from "@/components/FloatWrap";

type PageHeaderProps = {
  index: number;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
};

export default function PageHeader({ index, title, icon, children }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-10"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex -rotate-1 items-center justify-center rounded-xl border border-cream bg-rose-deep px-3 py-1.5 font-display text-sm font-semibold text-cream shadow-sticker">
            ({String(index).padStart(2, "0")})
          </span>
          {icon ? (
            <FloatWrap y={3} duration={4.5} className="h-8 w-8 shrink-0 text-rose-deep">
              {icon}
            </FloatWrap>
          ) : null}
        </div>
        <h1 className="relative mt-3 inline-block font-display text-4xl font-semibold text-ink sm:text-5xl">
          {title}
          <svg
            aria-hidden="true"
            viewBox="0 0 200 12"
            preserveAspectRatio="none"
            className="absolute -bottom-2 left-0 h-3 w-full text-rose"
          >
            <path
              d="M2 8 Q 20 2 38 8 T 74 8 T 110 8 T 146 8 T 182 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </h1>
      </motion.div>
      {children}
    </div>
  );
}
