"use client";

interface TopbarProps {
  visible: boolean;
}

export default function Topbar({ visible }: TopbarProps) {
  return (
    <nav className={`topbar${visible ? " visible" : ""}`}>
      <div className="topbar-logo">RI.dev</div>
      <div className="topbar-nav">
        {["skills", "terminal", "projects", "experience", "ai-section"].map((id) => (
          <a key={id} href={`#${id}`} className="nav-btn">
            {id === "ai-section" ? "ask_ai" : id === "terminal" ? "terminal" : id}
          </a>
        ))}
      </div>
      <div className="topbar-status">
        <div className="status-dot" />
        open_to_work
      </div>
    </nav>
  );
}
