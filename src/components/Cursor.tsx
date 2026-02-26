"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 4}px`;
        cursorRef.current.style.top = `${e.clientY - 4}px`;
      }
    };

    const animRing = () => {
      rx.current += (mx.current - rx.current - 16) * 0.15;
      ry.current += (my.current - ry.current - 16) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx.current}px`;
        ringRef.current.style.top = `${ry.current}px`;
      }
      rafRef.current = requestAnimationFrame(animRing);
    };

    const handleEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(2)";
      if (ringRef.current) {
        ringRef.current.style.transform = "scale(1.3)";
        ringRef.current.style.borderColor = "rgba(6,182,212,0.8)";
      }
    };

    const handleLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
      if (ringRef.current) {
        ringRef.current.style.transform = "scale(1)";
        ringRef.current.style.borderColor = "rgba(6,182,212,0.5)";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animRing);

    const targets = document.querySelectorAll("a, button, input, .skill-item, .sug-chip, .nav-btn");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
