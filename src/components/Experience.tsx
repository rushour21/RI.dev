import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-label">05 // experience</div>
      <h2 className="section-title reveal">
        Work
        <br />
        <span style={{ color: "var(--accent)" }}>History.</span>
      </h2>

      <div className="exp-timeline">
        {experiences.map((exp) => (
          <div key={exp.period} className="exp-item reveal">
            <div
              className="exp-dot"
              style={
                exp.accentColor === "cyan"
                  ? { background: "var(--accent2)", boxShadow: "0 0 12px var(--glow-cyan)" }
                  : undefined
              }
            />
            <div className="exp-period">{exp.period}</div>
            <div className="exp-role">{exp.role}</div>
            <div className="exp-company">
              {exp.company} · {exp.location}
            </div>
            <ul className="exp-points">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
