"use client";

import { useRef, useState } from "react";

type TermLine =
  | { type: "command"; text: string }
  | { type: "output"; text: string; error?: boolean }
  | { type: "json" };

const termCommands: Record<string, () => string | "__CLEAR__"> = {
  help: () =>
    `Available commands:\n  whoami       — About Rushabh\n  projects     — List all projects\n  skills       — Technical skills\n  experience   — Work history\n  education    — Academic background\n  contact      — Contact information\n  clear        — Clear terminal`,
  whoami: () =>
    `Full Stack Developer with expertise in Node.js, React, Next.js, and AI/RAG systems.\nCurrently open to exciting opportunities in Pune or remote.`,
  projects: () =>
    `orcabase/\n   AI-powered SaaS → embeddable chatbots, NL database queries, multi-tenant workspaces\n   Stack: React, Node.js, PostgreSQL, OpenAI SDK, Qdrant, Docker, AWS EC2\n\nnexer/\n   Developer networking → real-time 1-on-1 & group chat, connection discovery\n   Stack: MERN, Socket.IO, Redux Toolkit, JWT\n\ngharseva/\n   Local services platform → connect users with service providers, role-based dashboards\n   Stack: React.js, Node.js, Express.js, MongoDB, JWT, RBAC\n\nshopsphere/\n   Store rating & review app → secure auth, admin panel, real-time analytics\n   Stack: React.js, Node.js, Prisma ORM, PostgreSQL, JWT\n\ncar-rental/\n   Full-featured car rental → browse, book & manage vehicles, admin controls\n   Stack: React.js, Node.js, Express.js, MongoDB, JWT, CRUD\n\ndinemanager/\n   Restaurant dashboard → live metrics, ordering system, cron job automation\n   Stack: React.js, Node.js, Recharts, Cron Jobs, Nested Routes, MongoDB\n\nqueryflow/\n   Support ticketing platform → chatbot, RBAC, analytics dashboard\n   Stack: React.js, Node.js, JWT, RBAC, Lazy Loading\n\ntrakx/\n   Meeting manager → slot booking, auth, clean dashboard, lazy loading\n   Stack: React.js, Node.js, JWT, Custom Middleware, MongoDB`,
  skills: () =>
    `Languages   → JavaScript, TypeScript\nBackend     → Node.js, Express.js, REST APIs, JWT, OAuth, Socket.IO\nFrontend    → React.js, Next.js, Redux, Tailwind CSS\nDatabase    → PostgreSQL, MongoDB, Prisma ORM, Qdrant\nAI / RAG    → OpenAI SDK, Text-to-SQL, LLM Integration\nDevOps      → Docker, AWS EC2, Vercel, Render, Git`,
  experience: () =>
    `[Oct 2025 – Dec 2025] Web Developer Intern @ Bisugen Tech, Pune\n  → RAG chatbot in Next.js\n  → Role-based dashboards, Razorpay integration\n\n[Sep 2024 – Jun 2025] MERN Stack Dev Intern @ Cuvette Tech, Remote\n  → Full-stack MERN apps\n  → Reusable React components, cron job automation`,
  education: () =>
    `B.Tech Mechanical Engineering — MIT Academy, Pune (2020–2024)\n   Elective: Full Stack Web Development\n\nHSC Computer Science — Science College, Nanded (2018–2020)\n\nCertifications:\n   · Namaste Node.js — NamasteDev\n   · GenAI with JavaScript — Chaicode`,
  contact: () =>
    `Email       →  rushabh.ingle2111@gmail.com\nPhone       →  +91 9130257202\nLocation    →  Pune, Maharashtra, India\nStatus      →  Open to work`,
  clear: () => "__CLEAR__",
};

interface TermEntry {
  id: number;
  cmd: string;
  output: string;
  error: boolean;
}

export default function Terminal() {
  const [entries, setEntries] = useState<TermEntry[]>([]);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const counter = useRef(0);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const cmd = inputVal.trim().toLowerCase();
    setInputVal("");
    if (!cmd) return;

    const fn = termCommands[cmd];

    if (fn) {
      const result = fn();
      if (result === "__CLEAR__") {
        setEntries([]);
        return;
      }
      setEntries((prev) => [
        ...prev,
        { id: ++counter.current, cmd, output: result, error: false },
      ]);
    } else {
      setEntries((prev) => [
        ...prev,
        {
          id: ++counter.current,
          cmd,
          output: `command not found: ${cmd}. Type 'help' for available commands.`,
          error: true,
        },
      ]);
    }

    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, 50);
  };

  return (
    <section id="terminal" className="section terminal-section">
      <div className="section-label">03 // terminal</div>
      <h2 className="section-title reveal">
        Interactive
        <br />
        <span style={{ color: "var(--green)" }}>Console.</span>
      </h2>

      <div className="terminal-window reveal">
        <div className="terminal-titlebar">
          <div className="term-dot red" />
          <div className="term-dot yellow" />
          <div className="term-dot green" />
          <span className="term-title">rushabh@portfolio:~$</span>
        </div>

        <div className="terminal-body" ref={bodyRef}>
          {/* Default boot lines */}
          <div className="term-line">
            <span className="term-prompt">rushabh@portfolio:~$</span>
            <span className="term-cmd">whoami</span>
          </div>
          <div className="term-output">
            Full Stack Developer — Node.js, React, Next.js, PostgreSQL, AI/RAG. Based in Pune, India.
          </div>

          <div className="term-line">
            <span className="term-prompt">rushabh@portfolio:~$</span>
            <span className="term-cmd">ls projects/</span>
          </div>
          <div className="term-output">
            orcabase/&nbsp;&nbsp;nexer/&nbsp;&nbsp;gharseva/&nbsp;&nbsp;shopsphere/&nbsp;&nbsp;car-rental/&nbsp;&nbsp;dinemanager/&nbsp;&nbsp;queryflow/&nbsp;&nbsp;trakx/
          </div>

          <div className="term-line">
            <span className="term-prompt">rushabh@portfolio:~$</span>
            <span className="term-cmd">cat contact.json</span>
          </div>
          <div className="term-output term-json">
            {`{`}
            <br />
            &nbsp;&nbsp;<span className="key">&quot;email&quot;</span>:{" "}
            <span className="str">&quot;rushabh.ingle2111@gmail.com&quot;</span>,<br />
            &nbsp;&nbsp;<span className="key">&quot;phone&quot;</span>:{" "}
            <span className="str">&quot;+91 9130257202&quot;</span>,<br />
            &nbsp;&nbsp;<span className="key">&quot;location&quot;</span>:{" "}
            <span className="str">&quot;Pune, Maharashtra&quot;</span>,<br />
            &nbsp;&nbsp;<span className="key">&quot;status&quot;</span>:{" "}
            <span className="str">&quot;open_to_work&quot;</span>
            <br />
            {`}`}
          </div>

          {/* Dynamic entries */}
          {entries.map((entry) => (
            <div key={entry.id}>
              <div className="term-line">
                <span className="term-prompt">rushabh@portfolio:~$</span>
                <span className="term-cmd">{entry.cmd}</span>
              </div>
              <div className={`term-output${entry.error ? " err" : ""}`}>{entry.output}</div>
            </div>
          ))}

          <div className="term-input-line">
            <span className="term-prompt">rushabh@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="term-input"
              placeholder="type a command..."
              autoComplete="off"
              spellCheck={false}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKey}
            />
          </div>

          <div className="term-hint">
            Try:{" "}
            {["help", "projects", "skills", "experience", "contact", "clear"].map((cmd, i, arr) => (
              <span key={cmd}>
                <span
                  style={{ cursor: "none", color: "var(--text-dim)" }}
                  onClick={() => {
                    setInputVal(cmd);
                    inputRef.current?.focus();
                  }}
                >
                  {cmd}
                </span>
                {i < arr.length - 1 && " • "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
