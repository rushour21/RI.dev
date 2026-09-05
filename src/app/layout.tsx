import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rushabh Ingle — Software Engineer",
  description:
    "Software engineer specializing in Node.js, React, Next.js, and AI/RAG systems. Building scalable APIs, real-time systems, and retrieval-grounded AI products.",
  keywords: ["Software Engineer", "Node.js", "React", "Next.js", "AI", "RAG", "Pune"],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
