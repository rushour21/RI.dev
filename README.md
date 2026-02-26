# Rushabh Ingle — Portfolio (Next.js + TypeScript)

A production-grade developer portfolio built with **Next.js 14** and **TypeScript**, featuring a custom animated boot screen, interactive terminal, AI chat assistant, and scroll-reveal animations.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page entry point
├── components/
│   ├── AiChat.tsx          # AI chat assistant (client)
│   ├── BootScreen.tsx      # Animated boot screen (client)
│   ├── Cursor.tsx          # Custom cursor (client)
│   ├── Education.tsx       # Education & certifications
│   ├── Experience.tsx      # Work experience timeline
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section with orb
│   ├── Projects.tsx        # Project cards (client)
│   ├── Skills.tsx          # Skills dashboard
│   ├── Terminal.tsx        # Interactive terminal (client)
│   └── Topbar.tsx          # Fixed navigation bar
├── data/
│   └── portfolio.ts        # All portfolio data + types
├── hooks/
│   └── useScrollReveal.ts  # Intersection observer hook
└── styles/
    └── globals.css         # Global CSS with design tokens
```

## ✏️ Customization

All portfolio content is centralized in `src/data/portfolio.ts`. Edit:
- `skills` — Technical skills by category
- `projects` — Project cards with stack and metrics
- `experiences` — Work history entries
- `educations` — Education cards
- `certifications` — Certifications list
- `heroTags` — Hero section tech tags
- `contactInfo` — Contact details
- `knowledgeBase` — AI chat knowledge base

## 🛠️ Tech Stack

- **Next.js 14** — App Router, SSR/SSG
- **TypeScript** — Full type safety
- **CSS Modules / Global CSS** — Custom design system
- **React Hooks** — useState, useEffect, useRef, useCallback
- **IntersectionObserver** — Scroll-reveal animations

## 🌐 Deployment

Deploy on **Vercel** (recommended):

```bash
npx vercel
```

Or any platform supporting Next.js (Netlify, Railway, Render, etc.).
