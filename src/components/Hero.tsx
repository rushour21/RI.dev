import Image from "next/image";
import { heroTags, projects } from "@/data/portfolio";
import cutout from "@/assets/hero-cutout.png";

function ArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function Hero() {
  const projectCount = projects.length;

  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Software Engineer</div>
        <h1 className="hero-name">
          Rushabh
          <br />
          <span className="line2">Ingle.</span>
        </h1>
        <p className="hero-desc">
          Building scalable APIs, real-time systems, and retrieval-grounded AI products.
          Specializing in Node.js backends, distributed systems, and production RAG pipelines.
        </p>
        <div className="hero-tags">
          {heroTags.map((tag) => (
            <span key={tag} className="hero-tag">{tag}</span>
          ))}
        </div>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a
            href="/Rushabh_Ingle_Resume.pdf"
            download="Rushabh_Ingle_Resume.pdf"
            className="btn-ghost btn-resume"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-val">{projectCount}+</span>
            <span className="hero-stat-label">Projects</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-val hero-stat-val--accent">Open</span>
            <span className="hero-stat-label">To Opportunities</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
          <defs>
            <clipPath id="heroBlobMain" clipPathUnits="objectBoundingBox">
              <path d="M0.16,0.06 C0.38,-0.05 0.7,-0.04 0.87,0.14 C1.04,0.32 1.05,0.58 0.92,0.78 C0.79,0.98 0.53,1.07 0.31,0.97 C0.09,0.87 -0.06,0.63 -0.03,0.42 C-0.01,0.27 0.02,0.15 0.16,0.06 Z" />
            </clipPath>
            <clipPath id="heroBlobSoft" clipPathUnits="objectBoundingBox">
              <path d="M0.22,0.1 C0.42,-0.02 0.68,0.0 0.83,0.16 C0.98,0.32 1.0,0.55 0.89,0.73 C0.78,0.91 0.56,1.0 0.35,0.93 C0.14,0.86 -0.02,0.66 0.0,0.46 C0.02,0.3 0.06,0.2 0.22,0.1 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="hero-blob hero-blob--soft" />
        <div className="hero-blob hero-blob--main" />

        <svg className="hero-sparkle" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <path d="M20 4v11M20 25v11M4 20h11M25 20h11M9 9l6 6M25 25l6 6M31 9l-6 6M15 25l-6 6" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <svg className="hero-swoosh" viewBox="0 0 300 60" fill="none" aria-hidden="true">
          <path d="M4 10 C 60 55, 220 55, 296 8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className="hero-cutout-wrap">
          <Image
            src={cutout}
            alt="Rushabh Ingle"
            className="hero-cutout-img"
            priority
          />
        </div>

        <div className="hero-status-card">
          <span className="hero-status-dot" />
          <div className="hero-status-text">
            <div className="hero-status-eyebrow">Currently</div>
            <div className="hero-status-value">Open to Work</div>
          </div>
          <ArrowUpRight />
        </div>
      </div>
    </section>
  );
}
