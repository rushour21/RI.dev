import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">Rushabh Ingle</div>
      <div className="footer-links">
        <a href="mailto:rushabh.ingle2111@gmail.com" className="footer-link">
          <Mail size={14} /> Email
        </a>
        <a href="tel:+919130257202" className="footer-link">
          <Phone size={14} /> +91 9130257202
        </a>
        <a href="https://www.linkedin.com/in/rushabh-ingle" className="footer-link">
          <Linkedin size={14} /> LinkedIn
        </a>
        <a href="https://github.com/rushour21" className="footer-link">
          <Github size={14} /> GitHub
        </a>
      </div>
      <div className="footer-copy">© 2026 Rushabh Ingle · Pune, MH</div>
    </footer>
  );
}
