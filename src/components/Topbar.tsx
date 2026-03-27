"use client";
import Link from "next/link";
import Image from "next/image";

interface TopbarProps {
  visible: boolean;
}

export default function Topbar({ visible }: TopbarProps) {
  return (
    <nav className={`topbar${visible ? " visible" : ""}`}>
      <Link href="/" className="topbar-logo">
        <Image src="/favicon.png" alt="RI Logo" width={40} height={40} className="logo-img" />
      </Link>
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
