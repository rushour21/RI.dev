"use client";

import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "rushabh.ingle2111@gmail.com",
    href: "mailto:rushabh.ingle2111@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rushabh-ingle",
    href: "https://www.linkedin.com/in/rushabh-ingle/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/rushour21",
    href: "https://github.com/rushour21",
    icon: Github,
    external: true,
  },
  {
    label: "X.com",
    value: "@rushabhingle",
    href: "https://x.com/Rushabh_2111",
    icon: Twitter,
    external: true,
  },
];

export default function GetInTouch() {
  return (
    <section id="contact" className="section getin-touch-section">
      <div className="section-label">08 // contact</div>
      <h2 className="section-title reveal">
        Get in
        <br />
        <span style={{ color: "var(--accent2)" }}>Touch.</span>
      </h2>

      <div className="contact-list reveal">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? "_blank" : "_self"}
              rel={contact.external ? "noopener noreferrer" : ""}
              className="contact-item"
            >
              <div className="contact-icon">
                <Icon size={20} />
              </div>
              <div className="contact-info">
                <div className="contact-label">{contact.label}</div>
                <div className="contact-value">{contact.value}</div>
              </div>
              <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          );
        })}
      </div>
    </section>
  );
}
