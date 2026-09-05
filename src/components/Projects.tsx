"use client";

import Image from "next/image";
import { projects } from "@/data/portfolio";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const FEATURED_COUNT = 5;

export default function Projects() {
  const featured = projects.slice(0, FEATURED_COUNT);
  const rest = projects.slice(FEATURED_COUNT);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-label">04 // projects</div>
      <h2 className="section-title reveal">
        Selected
        <br />
        <span style={{ color: "var(--accent)" }}>Work.</span>
      </h2>

      <div className="project-stack">
        {featured.map((p, idx) => {
          const isWip = p.status === "wip";
          const showMono = isWip && !p.image;
          return (
            <div key={p.title} className="project-panel" style={{ zIndex: idx + 1 }}>
              <div className="project-panel-card">
              <div className="project-panel-inner">
                <div className="project-panel-info">
                  <div className="project-panel-index">
                    <span>{String(idx + 1).padStart(2, "0")}</span>
                    <span className="project-panel-index-line" />
                  </div>

                  <h3 className="project-panel-title">{p.title}</h3>

                  {isWip && <span className="project-panel-badge">{p.progress}% built</span>}

                  <p className="project-panel-desc">{p.description}</p>

                  <div className="project-panel-tags">
                    {p.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="project-panel-actions">
                    {p.live && (
                      <a className="project-panel-cta" href={p.live} target="_blank" rel="noopener noreferrer">
                        {isWip ? "View live build" : "View live project"} <ArrowIcon />
                      </a>
                    )}
                    {p.github && (
                      <a className="project-panel-gh" href={p.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon /> Source
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-panel-media">
                  <div className="project-panel-window">
                    <div className="project-panel-window-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="project-panel-window-body">
                      {showMono ? (
                        <div className="project-panel-mono" style={{ background: p.monoColor, color: "#F7F5F1" }}>
                          {p.mono}
                        </div>
                      ) : (
                        p.image && (
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="(max-width: 900px) 100vw, 50vw"
                            style={{ objectFit: "cover", objectPosition: "top" }}
                            priority={idx === 0}
                          />
                        )
                      )}
                    </div>

                    {p.dashboardImage && (
                      <div className="project-panel-window-mini">
                        <div className="project-panel-window-mini-bar">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="project-panel-window-mini-body">
                          <Image
                            src={p.dashboardImage}
                            alt={`${p.title} dashboard`}
                            fill
                            sizes="240px"
                            style={{ objectFit: "cover", objectPosition: "top" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="project-panel-caption">{p.title.toUpperCase()} / PREVIEW</div>
                </div>
              </div>
              </div>
            </div>
          );
        })}
      </div>

      {rest.length > 0 && (
        <div className="more-projects">
          <div className="more-projects-label">More Projects.</div>
          <div className="more-projects-grid">
            {rest.map((p) => (
              <div key={p.title} className="more-project-card">
                <div className="more-project-card-img">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 700px) 100vw, 20vw"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  )}
                </div>
                <div className="more-project-card-body">
                  <span className="more-project-card-title">{p.title}</span>
                  <p className="more-project-card-desc">{p.description}</p>
                  <div className="more-project-card-tags">
                    {p.stack.slice(0, 3).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="more-project-card-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer">
                        <ArrowIcon /> Live
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
