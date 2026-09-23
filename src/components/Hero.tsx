"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { about } from "@/data/about";
import PhotoSlot from "@/components/PhotoSlot";
import Typewriter from "@/components/Typewriter";
import StickyNote from "@/components/StickyNote";
import StickerBadge from "@/components/StickerBadge";
import WashiTape from "@/components/WashiTape";
import FloatWrap from "@/components/FloatWrap";
import { PinIcon } from "@/components/icons";

const polaroids = [
  { className: "left-[3%] top-24 -rotate-[4deg]", size: "h-28 w-24 sm:h-36 sm:w-32", delay: 0 },
  { className: "right-[3%] top-14 rotate-[3deg]", size: "h-24 w-24 sm:h-32 sm:w-32", delay: 0.6 },
  { className: "right-[7%] bottom-24 -rotate-[3deg]", size: "h-28 w-24 sm:h-36 sm:w-32", delay: 1.2 },
];

const stickerTones: Array<"rose" | "sage" | "cream"> = ["rose", "sage", "cream"];
const stickerRotations = [-2, 1.5, -1, 2];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-28 sm:px-6">
      {/* Animated gradient blobs in the muted palette */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute -left-24 -top-24 h-72 w-72 rounded-full bg-rose/25 blur-3xl" />
        <div className="animate-blob-slow animation-delay-2000 absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-blush/60 blur-3xl" />
        <div className="animate-blob animation-delay-4000 absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-sage/40 blur-3xl" />
      </div>

      {/* Oversized monogram watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-1/2 -z-10 hidden -translate-y-1/2 select-none sm:block"
      >
        <span
          className="font-display font-semibold leading-none text-rose/15"
          style={{ fontSize: "clamp(220px, 30vw, 420px)" }}
        >
          {profile.initials.first}
          {profile.initials.last}
        </span>
      </div>

      {/* Floating snapshot photos + sticky note — decorative, hidden on small screens */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        {profile.galleryImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            whileHover={{ scale: 1.08, rotate: 0 }}
            className={`pointer-events-auto absolute rounded-md border-2 border-cream bg-cream p-2 pb-4 shadow-sticker-lg ${polaroids[index]?.className ?? ""}`}
          >
            <FloatWrap y={5} duration={5.5} delay={polaroids[index]?.delay ?? 0}>
              <div className={`relative overflow-hidden rounded-sm ${polaroids[index]?.size ?? "h-28 w-24"}`}>
                <PhotoSlot src={image.src} alt={image.alt} placeholderLabel="Add photo" />
              </div>
            </FloatWrap>
          </motion.div>
        ))}
        <div className="pointer-events-auto absolute bottom-10 left-[4%]">
          <FloatWrap y={3} rotate={1.5} duration={6.5}>
            <StickyNote />
          </FloatWrap>
        </div>
      </div>

      {/* ID-card style content */}
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full"
        >
          <FloatWrap y={5} duration={6.5} className="relative w-full overflow-hidden rounded-3xl border-2 border-cream bg-cream shadow-sticker-lg">
            <WashiTape tone="rose" rotate={-4} className="-left-4 -top-3 h-7 w-20" />
            <WashiTape tone="sage" rotate={5} className="-right-4 -top-3 h-7 w-20" />

            <div className="grid-paper px-5 pb-5 pt-5">
              <div className="mb-4 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-deep/70">
                <span className="h-px w-8 bg-rose-deep/25" aria-hidden="true" />
                Profile
                <span className="h-px w-8 bg-rose-deep/25" aria-hidden="true" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative mx-auto h-28 w-28"
              >
                <div
                  aria-hidden="true"
                  className="animate-spin-slow absolute -inset-2 rounded-full bg-gradient-to-tr from-rose-deep/40 via-gold/40 to-sage-deep/40 opacity-60 blur-md"
                />
                <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-cream shadow-sticker">
                  <PhotoSlot
                    src={profile.headshotUrl}
                    alt={`${profile.name} headshot`}
                    placeholderLabel="Add your headshot"
                    sizes="112px"
                  />
                </div>
              </motion.div>

              <h1 className="mt-4 text-center">
                <span className="text-shimmer block font-script text-4xl leading-none">
                  {profile.firstName}
                </span>
                <span className="mt-1 block font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                  {profile.lastName}
                </span>
              </h1>

              <div className="mt-3 flex justify-center">
                <div className="rounded-full border border-rose-deep/25 bg-cream px-3 py-1.5">
                  <Typewriter
                    words={profile.focusAreas}
                    className="text-xs font-semibold text-rose-deep sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2.5 bg-cream px-5 py-5 text-sm">
              <div className="flex items-center justify-between border-b border-dashed border-sage-deep/30 pb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-sage-deep">Role</span>
                <span className="text-right text-ink/80">{profile.role}</span>
              </div>
              <div className="flex items-center justify-between border-b border-dashed border-sage-deep/30 pb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-sage-deep">Based in</span>
                <span className="flex items-center gap-1 text-ink/80">
                  <PinIcon className="h-3.5 w-3.5" />
                  {profile.location}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-sage-deep">Status</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-sage-deep">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-deep/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-deep" />
                  </span>
                  open to opportunities
                </span>
              </div>
            </div>
          </FloatWrap>
        </motion.div>

        {/* scattered personality stickers */}
        <div className="relative mt-6 flex flex-wrap justify-center gap-2.5">
          {about.facts.slice(0, 4).map((fact, index) => (
            <StickerBadge
              key={fact}
              tone={stickerTones[index % stickerTones.length]}
              rotate={stickerRotations[index % stickerRotations.length]}
            >
              {fact}
            </StickerBadge>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 max-w-xs text-center text-base text-ink/70"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-7 flex flex-wrap justify-center gap-3"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${profile.email}`}
            className="rounded-full border border-rose-deep bg-rose-deep px-5 py-2.5 text-sm font-semibold text-cream shadow-sticker transition-colors hover:bg-rose-deep/90"
          >
            Contact Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sage-deep/30 bg-cream px-5 py-2.5 text-sm font-semibold text-ink shadow-sticker transition-colors hover:bg-blush/40"
          >
            View Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sage-deep/30 bg-cream px-5 py-2.5 text-sm font-semibold text-ink shadow-sticker transition-colors hover:bg-blush/40"
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="/about"
        aria-label="Go to the About page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="animate-bounce-y absolute bottom-6 z-10 text-rose-deep/60 hover:text-rose-deep"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  );
}
