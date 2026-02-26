"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolio";

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

const ACCENT_MAP = {
  blue: { glow: "rgba(59,130,246,0.4)", badge: "#3b82f6", bar: "linear-gradient(90deg,#3b82f6,#06b6d4)" },
  cyan: { glow: "rgba(6,182,212,0.4)", badge: "#06b6d4", bar: "linear-gradient(90deg,#06b6d4,#8b5cf6)" },
  purple: { glow: "rgba(139,92,246,0.4)", badge: "#8b5cf6", bar: "linear-gradient(90deg,#8b5cf6,#3b82f6)" },
};

const N = projects.length;
const mod = (n: number) => ((n % N) + N) % N;

export default function Projects() {
  const [active, setActive] = useState(1);
  const [animDir, setAnimDir] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (direction: "left" | "right") => {
      if (isAnimating) return;
      setAnimDir(direction);
      setIsAnimating(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setActive((prev) => mod(prev + (direction === "right" ? 1 : -1)));
        setAnimDir(null);
        setIsAnimating(false);
      }, 350);
    },
    [isAnimating]
  );

  const prev = useCallback(() => go("left"), [go]);
  const next = useCallback(() => go("right"), [go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const prevIdx = mod(active - 1);
  const nextIdx = mod(active + 1);
  const accent = ACCENT_MAP[projects[active].iconColor];

  // positions: left-side, center, right-side
  const slots = [prevIdx, active, nextIdx];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-label">04 // projects</div>
      <h2 className="section-title reveal">
        Featured<br />
        <span style={{ color: "var(--accent3)" }}>Work.</span>
      </h2>

      {/* progress bar */}
      <div className="cp-progress">
        <div className="cp-progress-fill" style={{ background: accent.bar, width: `${((active + 1) / N) * 100}%` }} />
      </div>

      {/* 3-card track */}
      <div className="cp-track" style={{ "--c-glow": accent.glow } as React.CSSProperties}>
        {slots.map((idx, slot) => {
          const p = projects[idx];
          const isCenter = slot === 1;
          const accentSlot = ACCENT_MAP[p.iconColor];
          return (
            <div
              key={`${idx}-${slot}`}
              className={`cp-card ${isCenter ? "cp-card--active" : "cp-card--side"} ${!isCenter ? (slot === 0 ? "cp-card--left" : "cp-card--right") : ""
                } ${animDir ? (animDir === "right" ? "anim-right" : "anim-left") : ""}`}
            >
              {/* image */}
              <div className="cp-img-wrap">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="cp-img"
                    sizes="(max-width: 768px) 33vw, 33vw"
                  />
                ) : (
                  <div className="cp-img-placeholder">
                    <span style={{ fontSize: 40 }}>{p.icon}</span>
                  </div>
                )}
                <div className="cp-img-overlay" />
                {/* badge */}
                <div className="cp-badge" style={{ background: accentSlot.badge }}>
                  {p.icon} {p.title}
                </div>
              </div>

              {/* info — uniform height/style for all cards */}
              <div className="cp-info">
                <h3 className="cp-title">{p.title}</h3>

                <div className="cp-stack">
                  {p.stack.slice(0, 3).map((tag) => (
                    <span key={tag} className="cp-tag">{tag}</span>
                  ))}
                  {p.stack.length > 3 && <span className="cp-tag">+{p.stack.length - 3}</span>}
                </div>

                <p className="cp-desc">{p.description}</p>
                <div className="cp-metrics">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="cp-metric">
                      <span className="cp-metric-val" style={{ color: accentSlot.badge }}>{m.value}</span>
                      <span className="cp-metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                <div className="cp-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="cp-btn cp-btn--gh">
                      <GithubIcon /><span>GitHub</span>
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cp-btn cp-btn--live"
                      style={{ borderColor: accentSlot.badge, color: accentSlot.badge }}
                    >
                      <LinkIcon /><span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* nav arrows */}
      <button className="cp-nav cp-nav--prev" onClick={prev} aria-label="Previous project"><ChevronLeft /></button>
      <button className="cp-nav cp-nav--next" onClick={next} aria-label="Next project"><ChevronRight /></button>
    </section>
  );
}
