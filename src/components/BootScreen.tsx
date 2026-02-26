"use client";

import { useEffect, useState } from "react";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(onComplete, 800);
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="boot-screen"
      style={{
        opacity: hiding ? 0 : 1,
        transform: hiding ? "scale(1.05)" : "scale(1)",
      }}
    >
      <div className="boot-logo">RUSHABH</div>
      <div className="boot-sub">Full Stack Developer</div>
      <div className="boot-bar-wrap">
        <div className="boot-bar" />
      </div>
      <div className="boot-log">
        <span>✓</span> Initializing portfolio runtime...<br />
        <span>✓</span> Loading project modules...<br />
        <span>✓</span> Establishing secure connection...
      </div>
    </div>
  );
}
