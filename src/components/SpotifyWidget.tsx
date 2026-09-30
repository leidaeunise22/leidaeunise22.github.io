"use client";

import { useEffect, useState } from "react";

type Listening = {
  status: "unconfigured" | "idle" | "playing" | "paused" | "unavailable";
  title?: string;
  artist?: string;
  url?: string;
};

export default function SpotifyWidget() {
  const [listening, setListening] = useState<Listening>({ status: "unconfigured" });
  const [motionPaused, setMotionPaused] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function update() {
      if (document.hidden) return;
      try {
        const response = await fetch("/api/spotify", { signal: controller.signal, cache: "no-store" });
        if (!response.ok) throw new Error("Listening unavailable");
        setListening(await response.json());
      } catch {
        if (!controller.signal.aborted) setListening({ status: "unavailable" });
      }
    }
    void update();
    const interval = window.setInterval(update, 30_000);
    document.addEventListener("visibilitychange", update);
    return () => {
      controller.abort();
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const playing = listening.status === "playing";
  const animated = !motionPaused && (playing || listening.status === "unconfigured");
  return (
    <aside className={`spotify-widget${animated ? " is-spinning" : ""}`} aria-label="Aleida’s Spotify listening">
      <div className="vinyl-scene" aria-hidden="true">
        <span className="music-note note-one">♪</span>
        <span className="music-note note-two">♫</span>
        <span className="music-note note-three">♩</span>
        <div className="vinyl-record"><div className="vinyl-label"><span>ah</span><i /></div></div>
      </div>
      <div className="spotify-copy">
        <p className="spotify-caption"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="currentColor"/><path d="M5.5 8.5c4.7-1.4 9.2-.9 13 1.2M6.5 12c3.8-1.1 7.4-.6 10.5 1.1M7.5 15.3c2.9-.7 5.6-.4 8 1" fill="none" stroke="var(--cream)" strokeWidth="1.6" strokeLinecap="round"/></svg>{playing ? "Currently listening" : "On my turntable"}</p>
        <div aria-live="polite">
          <p className="spotify-title">{listening.title ?? (listening.status === "unconfigured" ? "A little music, a little code." : listening.status === "unavailable" ? "Taking a music break" : "Between tracks")}</p>
          <p className="spotify-artist">{listening.artist ?? "The soundtrack to my day"}{listening.status === "paused" ? " · paused" : ""}</p>
        </div>
        {listening.url && <a className="spotify-link" href={listening.url} target="_blank" rel="noopener noreferrer">Listen on Spotify ↗</a>}
      </div>
      <button className="vinyl-motion-toggle" onClick={() => setMotionPaused(!motionPaused)} aria-label={motionPaused ? "Resume record animation" : "Pause record animation"} aria-pressed={motionPaused}>{motionPaused ? "▷" : "Ⅱ"}</button>
    </aside>
  );
}
