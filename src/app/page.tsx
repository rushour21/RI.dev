"use client";

import { useEffect, useState } from "react";
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
  const [topbarVisible, setTopbarVisible] = useState(false);

  useScrollReveal();

  useEffect(() => {
    setTopbarVisible(true);
  }, []);

  return (
    <>
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
