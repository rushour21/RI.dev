"use client";

import { useState, useEffect } from "react";
import Cursor from "@/components/Cursor";
import BootScreen from "@/components/BootScreen";
import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Terminal from "@/components/Terminal";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import AiChat from "@/components/AiChat";
import Education from "@/components/Education";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [topbarVisible, setTopbarVisible] = useState(false);

  useScrollReveal();

  const handleBootComplete = () => {
    setBooted(true);
    setTopbarVisible(true);
  };

  // Parallax on hero glow
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const glow = document.querySelector<HTMLElement>(".hero-glow");
      if (glow) glow.style.transform = `translateY(calc(-50% + ${y * 0.3}px))`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Cursor />
      {!booted && <BootScreen onComplete={handleBootComplete} />}
      <Topbar visible={topbarVisible} />
      <main>
        <Hero />
        <Skills />
        <Terminal />
        <Projects />
        <Experience />
        <Education />
        <GetInTouch />
      </main>
      <Footer />
      <AiChat />
    </>
  );
}
