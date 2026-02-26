import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Rushabh Ingle — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Node.js, React, Next.js, and AI/RAG systems. Building scalable web applications, REST APIs, and intelligent SaaS platforms.",
  keywords: ["Full Stack Developer", "Node.js", "React", "Next.js", "AI", "RAG", "Pune"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
