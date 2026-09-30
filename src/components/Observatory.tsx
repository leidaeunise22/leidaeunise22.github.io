"use client";

import { useId, useState, type CSSProperties } from "react";

const planets = [
  { radius: 82, size: 3, color: "#c1b6a5", angle: 30, duration: 36 },
  { radius: 118, size: 5, color: "#dabb86", angle: 145, duration: 55 },
  { radius: 163, size: 6, color: "#c6dfbc", angle: 275, duration: 80 },
  { radius: 207, size: 4, color: "#cc9279", angle: 210, duration: 110 },
  { radius: 264, size: 10, color: "#c8ad8b", angle: 60, duration: 150 },
];

export default function Observatory() {
  const [view, setView] = useState<"orbits" | "eclipse">("orbits");
  const [moonPosition, setMoonPosition] = useState(50);
  const [paused, setPaused] = useState(false);
  const [visitorGreeting, setVisitorGreeting] = useState(false);
  const id = useId().replace(/:/g, "");
  const sunId = `${id}-sun`;
  const moonId = `${id}-moon`;

  return (
    <section className="observatory page-shell" aria-labelledby={`${id}-title`}>
      <div className="observatory-top">
        <div>
          <h2 id={`${id}-title`}>A little closer to the cosmos.</h2>
          <p>Space is one of the things I love. Stay a moment and explore.</p>
        </div>
        <div className="observatory-switch" role="group" aria-label="Choose a space view">
          <button type="button" aria-pressed={view === "orbits"} onClick={() => setView("orbits")}>Orbits</button>
          <button type="button" aria-pressed={view === "eclipse"} onClick={() => setView("eclipse")}>Eclipse</button>
        </div>
      </div>
      <div className={`observatory-sky${paused ? " observatory-paused" : ""}`}>
        <svg className="observatory-chart" viewBox="0 0 1000 460" role="img" aria-label={view === "orbits" ? "An illustrative solar system with five slowly orbiting planets" : "An interactive solar eclipse with the moon crossing the sun"}>
          <defs>
            <radialGradient id={sunId}>
              <stop offset="0" stopColor="#fff0c7" />
              <stop offset=".72" stopColor="#eac27a" />
              <stop offset="1" stopColor="#b98348" />
            </radialGradient>
            <radialGradient id={moonId} cx="30%" cy="25%">
              <stop stopColor="#252e2b" />
              <stop offset="1" stopColor="#101b19" />
            </radialGradient>
          </defs>
          <g className="observatory-stars">
            {Array.from({ length: 65 }, (_, index) => (
              <circle key={index} cx={(index * 137 + 19) % 1000} cy={(index * 79 + 13) % 460} r={index % 9 === 0 ? 1.4 : .65} fill="#e5ecdf" opacity={.25 + (index % 4) * .15} />
            ))}
          </g>
          {view === "orbits" ? (
            <g transform="translate(500 230)">
              <g transform="rotate(-18) scale(1 .66)">
                {planets.map((planet) => (
                  <g key={planet.radius}>
                    <circle r={planet.radius} stroke="#d6e3be" strokeOpacity=".19" strokeWidth=".8" fill="none" />
                    <g transform={`rotate(${planet.angle})`}>
                      <g className="observatory-orbit" style={{ "--orbit-duration": `${planet.duration}s` } as CSSProperties}>
                        <circle cx={planet.radius} r={planet.size} fill={planet.color} />
                        {planet.size === 10 && <ellipse cx={planet.radius} rx="18" ry="5" stroke={planet.color} strokeWidth="1" fill="none" />}
                      </g>
                    </g>
                  </g>
                ))}
              </g>
              <circle className="observatory-sun-glow" r="44" fill={`url(#${sunId})`} />
              <circle r="44" fill={`url(#${sunId})`} />
              <circle r="51" stroke="#eac27a" strokeOpacity=".18" fill="none" />
              <g className="observatory-rocket-flight">
                <g transform="translate(190 0) rotate(180)">
                  <path className="rocket-exhaust" d="M-3 16 0 34 3 16" fill="#eac27a" opacity=".7" />
                  <path d="M-5 5-12 17-5 14M5 5 12 17 5 14" fill="#94ae83" />
                  <path d="M0-20C-7-12-7 5-5 16H5C7 5 7-12 0-20Z" fill="#e5e8dc" stroke="#a9b9a0" strokeWidth=".8" />
                  <circle cy="-4" r="3" fill="#334a3c" stroke="#94ae83" strokeWidth="1" />
                  <path d="M-5 12H5" stroke="#94ae83" strokeWidth="2" />
                </g>
              </g>
            </g>
          ) : (
            <g transform="translate(500 230)">
              <circle className="observatory-corona" r="71" stroke="#f1d4a0" strokeWidth="14" fill="none" />
              <circle className="observatory-sun-glow" r="65" fill={`url(#${sunId})`} />
              <circle r="65" fill={`url(#${sunId})`} />
              <circle cx={(moonPosition - 50) * 4.6} r="68" fill={`url(#${moonId})`} />
            </g>
          )}
          <g stroke="#c6dfbc" strokeOpacity=".3" strokeWidth=".8">
            <path d="M30 48V30h18M952 30h18v18M30 412v18h18M952 430h18v-18" fill="none" />
          </g>
        </svg>
        <button
          type="button"
          className={`observatory-visitor${visitorGreeting ? " visitor-greeting" : ""}`}
          aria-label={visitorGreeting ? "Send the space visitor back" : "Say hello to the space visitor"}
          aria-pressed={visitorGreeting}
          onClick={() => setVisitorGreeting(!visitorGreeting)}
        >
          <svg viewBox="0 0 56 64" fill="none" aria-hidden="true">
            <path d="M15 64V48h26v16" fill="#768565" />
            <path d="M9 23C9 3 47 3 47 23c0 18-13 28-19 28S9 41 9 23Z" fill="#b9cda1" stroke="#d6e3be" strokeWidth=".8" />
            <ellipse cx="19" cy="28" rx="5" ry="8" transform="rotate(-24 19 28)" fill="#1b2d25" />
            <ellipse cx="37" cy="28" rx="5" ry="8" transform="rotate(24 37 28)" fill="#1b2d25" />
            <path d="M25 42h6" stroke="#50664a" strokeLinecap="round" />
            <path d="M6 61v-7m4 7v-8m36 8v-8m4 8v-7" stroke="#b9cda1" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>
        <span className="visitor-message" role="status">{visitorGreeting ? "Hello, Earth." : ""}</span>
        <div className="observatory-caption" aria-live="polite">
          <span>{view === "orbits" ? "An endless kind of curiosity." : Math.abs(moonPosition - 50) <= 1 ? "A moment of totality." : "Light, shadow, and a change in perspective."}</span>
          <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Resume motion" : "Pause motion"}</button>
        </div>
      </div>
      <div className="observatory-bottom">
        {view === "eclipse" ? (
          <label className="eclipse-control" htmlFor={`${id}-position`}>
            <span>Move the moon across the sun</span>
            <input id={`${id}-position`} type="range" min="0" max="100" value={moonPosition} onChange={(event) => setMoonPosition(Number(event.target.value))} aria-valuetext={Math.abs(moonPosition - 50) <= 1 ? "Moon centered, total eclipse" : `Moon ${moonPosition < 50 ? "left" : "right"} of the sun`} />
          </label>
        ) : <p>Small worlds. Long journeys. A sun at the center of it all.</p>}
        <span className="observatory-scale">An artistic study of space</span>
      </div>
    </section>
  );
}
