import { educations, certifications } from "@/data/portfolio";
import { Award, Bot } from "lucide-react";

const IconMap: Record<string, any> = {
  Award,
  Bot,
};

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-label">07 // education</div>
      <h2 className="section-title reveal">
        Learning
        <br />
        <span style={{ color: "var(--accent2)" }}>Journey.</span>
      </h2>

      <div className="edu-grid reveal">
        {educations.map((edu) => (
          <div key={edu.year} className="edu-card">
            <div className="year">{edu.year}</div>
            <div className="degree">{edu.degree}</div>
            <div className="school">{edu.school}</div>
            {edu.note && <div className="note">{edu.note}</div>}
          </div>
        ))}
      </div>

      <div className="cert-grid reveal">
        {certifications.map((cert) => {
          const Icon = IconMap[cert.icon] || Award;
          return (
            <div key={cert.name} className="cert-item">
              <div className="cert-icon">
                <Icon size={18} />
              </div>
              <div className="cert-name">{cert.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
