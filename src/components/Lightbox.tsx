"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type LightboxImage = { src: string; alt: string };
type LightboxState = { images: LightboxImage[]; index: number; title?: string; date?: string };

type LightboxApi = {
  open: (images: LightboxImage[], index: number, context?: { title?: string; date?: string }) => void;
};

const LightboxCtx = createContext<LightboxApi | null>(null);

export function useLightbox() {
  const ctx = useContext(LightboxCtx);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export default function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);

  const open = useCallback<LightboxApi["open"]>((images, index, context) => {
    setState({ images, index, ...context });
  }, []);

  const close = useCallback(() => setState(null), []);

  const next = useCallback(() => {
    setState((s) => (s ? { ...s, index: (s.index + 1) % s.images.length } : s));
  }, []);

  const prev = useCallback(() => {
    setState((s) => (s ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length } : s));
  }, []);

  useEffect(() => {
    if (!state) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [state, close, next, prev]);

  const current = state ? state.images[state.index] : null;

  return (
    <LightboxCtx.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {state && current ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border-2 border-cream bg-cream shadow-sticker-lg"
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cream bg-ink/70 text-cream shadow-sticker transition-colors hover:bg-ink"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>

              {state.images.length > 1 ? (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-cream bg-ink/70 text-cream shadow-sticker transition-colors hover:bg-ink"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                      <path d="M14 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-cream bg-ink/70 text-cream shadow-sticker transition-colors hover:bg-ink"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                      <path d="M10 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              ) : null}

              <div className="relative flex-1 bg-ink/5" style={{ minHeight: "45vh" }}>
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 640px"
                  className="object-contain"
                />
              </div>

              <div className="border-t border-dashed border-sage-deep/25 px-5 py-4">
                {state.title ? (
                  <p className="font-display text-sm font-semibold text-rose-deep">
                    {state.title}
                    {state.date ? ` · ${state.date}` : ""}
                  </p>
                ) : null}
                <p className="mt-1 text-sm text-ink/75">{current.alt}</p>
                {state.images.length > 1 ? (
                  <p className="mt-2 text-xs text-ink/45">
                    {state.index + 1} / {state.images.length}
                  </p>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LightboxCtx.Provider>
  );
}
