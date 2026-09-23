"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import StickerBadge from "@/components/StickerBadge";
import { HeartIcon } from "@/components/icons";
import { about } from "@/data/about";

const rotations = [-2, 1.5, -1, 2, -1.5, 1];

export default function AboutMe() {
  return (
    <PageHeader index={1} title="About Me" icon={<HeartIcon className="h-full w-full" />}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-cream bg-cream p-6 shadow-sticker"
      >
        <p className="text-base leading-relaxed text-ink/80">{about.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {about.facts.map((fact, index) => (
            <StickerBadge key={fact} rotate={rotations[index % rotations.length]}>
              {fact}
            </StickerBadge>
          ))}
        </div>
      </motion.div>
    </PageHeader>
  );
}
