"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type TypewriterProps = {
  words: string[];
  prefix?: string;
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
};

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function Typewriter({
  words,
  prefix = "",
  className = "",
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseMs = 1400,
}: TypewriterProps) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (reducedMotion) return;
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseMs);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), pauseMs);
    } else if (text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setPhase("typing");
        setIndex((i) => (i + 1) % words.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [text, phase, index, words, reducedMotion, typingSpeed, deletingSpeed, pauseMs]);

  const display = reducedMotion ? words[0] : text;

  return (
    <span className={className}>
      {prefix}
      {display}
      <span className={reducedMotion ? "" : "animate-cursor"}>_</span>
    </span>
  );
}
