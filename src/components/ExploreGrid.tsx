"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  HeartIcon,
  EducationIcon,
  BriefcaseIcon,
  CompassIcon,
  TrophyIcon,
  MicIcon,
} from "@/components/icons";

const tiles = [
  { href: "/about", label: "About me", blurb: "the person behind the code", icon: HeartIcon },
  { href: "/education", label: "Education", blurb: "degree + coursework", icon: EducationIcon },
  { href: "/experience", label: "Experience", blurb: "internships + projects", icon: BriefcaseIcon },
  { href: "/leadership", label: "Leadership", blurb: "clubs I run", icon: CompassIcon },
  { href: "/awards", label: "Awards", blurb: "honors + scholarships", icon: TrophyIcon },
  { href: "/conferences", label: "Conferences", blurb: "talks + travel", icon: MicIcon },
];

export default function ExploreGrid() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
        className="mb-6 text-center font-display text-3xl italic text-rose-deep"
      >
        Explore
      </motion.h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {tiles.map((tile, index) => {
          const Icon = tile.icon;
          return (
            <motion.div
              key={tile.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href={tile.href}
                className="group relative flex h-full flex-col items-center gap-2 rounded-2xl border border-cream bg-cream p-5 text-center shadow-sticker transition-transform hover:-translate-y-1"
              >
                <span className="absolute -left-2 -top-2 rounded-lg border border-cream bg-rose-deep px-1.5 py-0.5 font-display text-[10px] font-semibold text-cream shadow-sticker">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="h-7 w-7 text-rose-deep transition-transform group-hover:scale-110" />
                <span className="font-display text-sm font-semibold text-ink">{tile.label}</span>
                <span className="text-xs text-ink/60">{tile.blurb}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
