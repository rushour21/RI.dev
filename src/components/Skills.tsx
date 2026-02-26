import { skills } from "@/data/portfolio";
import { Code2, Layout, Server, Database, Bot, Cloud } from "lucide-react";

const IconMap: Record<string, any> = {
  Code2,
  Layout,
  Server,
  Database,
  Bot,
  Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-label">02 // skills</div>
      <h2 className="section-title reveal">
        Technical
        <br />
        <span style={{ color: "var(--accent2)" }}>Stack.</span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = IconMap[skill.icon] || Code2;
          return (
            <div key={skill.category} className="skill-card reveal">
              <div className="skill-card-header">
                <span className="skill-cat">{skill.category}</span>
                <div className="skill-icon">
                  <Icon size={20} />
                </div>
              </div>
              <div className="skill-items">
                {skill.items.map((item) => (
                  <span key={item} className="skill-item">{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
