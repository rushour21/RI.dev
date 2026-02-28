import Image from "next/image";
import { heroTags } from "@/data/portfolio";

import { Zap, Rocket, Wrench, Cloud } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-glow" />

      <div className="hero-left">
        <div className="hero-eyebrow">Full Stack Developer</div>
        <h1 className="hero-name">
          Rushabh
          <br />
          <span className="line2">Ingle.</span>
        </h1>
        <p className="hero-desc">
          Building scalable web applications, REST APIs, and AI-powered systems.
          Specializing in Node.js backends, real-time features, and intelligent SaaS platforms.
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
      </div>

      <div className="hero-right">
        <div className="orb-container">
          <div className="orb-ring" />
          <div className="orb-ring" />
          <div className="orb-ring" />

          {/* Profile image replacing the plain orb */}
          <div className="hero-profile-wrap">
            <div className="hero-profile-glow" />
            <div className="hero-profile-ring hero-profile-ring--1" />
            <div className="hero-profile-ring hero-profile-ring--2" />
            <div className="hero-profile-img-border">
              <Image
                src="/assets/profile.png"
                alt="Rushabh Ingle"
                width={220}
                height={220}
                className="hero-profile-img"
                priority
              />
            </div>
          </div>

          <div className="orb-stat stat-tl">
            <div className="orb-stat-icon">
              <Zap size={16} />
            </div>
            <div>
              <div className="orb-stat-val">1yr</div>
              <div className="orb-stat-label">Experience</div>
            </div>
          </div>
          <div className="orb-stat stat-tr">
            <div className="orb-stat-icon">
              <Rocket size={16} />
            </div>
            <div>
              <div className="orb-stat-val">8</div>
              <div className="orb-stat-label">Live Projects</div>
            </div>
          </div>
          <div className="orb-stat stat-bl">
            <div className="orb-stat-icon">
              <Wrench size={16} />
            </div>
            <div>
              <div className="orb-stat-val">15+</div>
              <div className="orb-stat-label">Technologies</div>
            </div>
          </div>
          <div className="orb-stat stat-br">
            <div className="orb-stat-icon">
              <Cloud size={16} />
            </div>
            <div>
              <div className="orb-stat-val">AWS</div>
              <div className="orb-stat-label">Deployed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
