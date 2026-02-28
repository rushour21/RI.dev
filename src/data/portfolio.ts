// src/data/portfolio.ts

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface Project {
  title: string;
  icon: string;
  iconColor: "blue" | "cyan" | "purple";
  description: string;
  stack: string[];
  metrics: { value: string; label: string }[];
  image?: string;
  github?: string;
  live?: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  points: string[];
  accentColor?: string;
}

export interface Education {
  year: string;
  degree: string;
  school: string;
  note?: string;
}

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    items: ["JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: "Layout",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "Server",
    items: ["Node.js", "Express.js", "Rest API", "Socket.io"],
  },
  {
    category: "Databases & ORM",
    icon: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Qdrant"],
  },
  {
    category: "AI / RAG",
    icon: "Bot",
    items: ["OpenAI sdk", "LangChain", "RAG Systems"],
  },
  {
    category: "DevOps",
    icon: "Cloud",
    items: ["Docker", "AWS EC2", "Vercel", "Render"],
  },
];

export const projects: Project[] = [
  {
    title: "Orcabase",
    icon: "🧠",
    iconColor: "blue",
    description:
      "AI-powered SaaS platform enabling organizations to deploy embeddable chatbots and securely query internal databases using natural language. Multi-tenant workspace system with RAG-based intelligence and human-in-the-loop validation.",
    stack: ["React.js", "Node.js", "PostgreSQL", "OpenAI SDK", "RAG", "Qdrant", "AWS EC2", "Docker", "OAuth 2.0"],
    metrics: [
      { value: "Multi", label: "tenant" },
      { value: "RAG", label: "powered" },
      { value: "SQL", label: "guardrails" },
    ],
    image: "/assets/orcabase.png",
    live: "https://orcabase.in/",
  },
  {
    title: "NEXER",
    icon: "🌐",
    iconColor: "cyan",
    description:
      "Developer networking platform for discovering profiles, connecting with peers, and collaborating through real-time messaging and private groups. Real-time one-to-one and group-based chat with Socket.IO, enabling focused developer collaboration.",
    stack: ["Node.js", "Express.js", "React.js", "Redux Toolkit", "MongoDB", "Socket.IO", "JWT"],
    metrics: [
      { value: "RT", label: "messaging" },
      { value: "P2P", label: "groups" },
      { value: "JWT", label: "auth" },
    ],
    image: "/assets/nexer.png",
    github: "https://github.com/rushour21/DevTinder",
    live: "https://dev-tinder-swart.vercel.app/",
  },
  {
    title: "GharSeva",
    icon: "🏠",
    iconColor: "purple",
    description:
      "A full-stack platform connecting users with local service providers, featuring service booking, role-based dashboards, and scalable backend APIs.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "RBAC"],
    metrics: [
      { value: "MERN", label: "stack" },
      { value: "RBAC", label: "roles" },
      { value: "API", label: "driven" },
    ],
    image: "/assets/gharseva.png",
    github: "https://github.com/rushour21/GharSevaBackend",
    live: "https://ghar-seva21.vercel.app/",
  },
  {
    title: "Car Rental System",
    icon: "🚗",
    iconColor: "cyan",
    description:
      "A full-featured car rental platform allowing users to browse, book, and manage vehicles, with admin-side controls and secure authentication.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "CRUD Operations"],
    metrics: [
      { value: "CRUD", label: "ops" },
      { value: "JWT", label: "auth" },
      { value: "Admin", label: "panel" },
    ],
    image: "/assets/car_rental.png",
    github: "https://github.com/rushour21/car_rental",
    live: "https://car-rental-woad-nu.vercel.app/",
  },
  {
    title: "DineManager",
    icon: "Utensils",
    iconColor: "purple",
    description:
      "Built a real-time admin dashboard and ordering system with live metrics, nested routing, and full-stack integration. Cron jobs automate analytics and status updates.",
    stack: ["React.js", "Node.js", "Recharts", "Cron Jobs", "Nested Routes", "MongoDB"],
    metrics: [
      { value: "RT", label: "metrics" },
      { value: "Cron", label: "jobs" },
      { value: "Chart", label: "analytics" },
    ],
    image: "/assets/dinemanager.png",
    github: "https://github.com/rushour21/DineManager",
    live: "https://dine-manager.vercel.app/",
  },
  {
    title: "QueryFlow",
    icon: "🎫",
    iconColor: "blue",
    description:
      "Full-stack support query management platform with chatbot customization, protected routes, and analytics dashboard. JWT auth with RBAC and lazy-loaded components.",
    stack: ["React.js", "Node.js", "JWT Auth", "RBAC", "Lazy Loading", "Chatbot"],
    metrics: [
      { value: "RBAC", label: "access" },
      { value: "Chat", label: "bot" },
      { value: "Lazy", label: "load" },
    ],
    image: "/assets/queryflow.png",
    github: "https://github.com/rushour21/QueryFlow",
    live: "https://query-flow-eta.vercel.app/",
  },
  {
    title: "Trakx",
    icon: "📅",
    iconColor: "cyan",
    description:
      "Manages meeting slots and availability with authentication, clean dashboard UI, and lazy-loaded components. Custom middleware for protected routes.",
    stack: ["React.js", "Node.js", "JWT Auth", "Middleware", "Lazy Loading", "MongoDB"],
    metrics: [
      { value: "Slots", label: "managed" },
      { value: "Auth", label: "secure" },
      { value: "Lazy", label: "load" },
    ],
    image: "/assets/trackX.png",
    github: "https://github.com/rushour21/trakx",
    live: "https://trakx-five.vercel.app/",
  },
  {
    title: "ShopSphere",
    icon: "⭐",
    iconColor: "blue",
    description:
      "A fullstack application where users can rate and review stores, with secure authentication, protected admin routes, and real-time dashboard analytics.",
    stack: ["React.js", "Node.js", "Prisma ORM", "PostgreSQL", "JWT Auth"],
    metrics: [
      { value: "ORM", label: "Prisma" },
      { value: "RBAC", label: "admin" },
      { value: "Live", label: "analytics" },
    ],
    image: "/assets/shopsphere.png",
    github: "https://github.com/rushour21/ShopSphere",
    live: "https://shop-sphere-pied.vercel.app/",
  }
];

export const experiences: Experience[] = [
  {
    period: "Oct 2025 — Dec 2025",
    role: "Web Developer Intern",
    company: "Bisugen Tech",
    location: "Pune, India",
    points: [
      "Developed a RAG-based chatbot in Next.js, leveraging API routes for user query handling, backend orchestration, and semantic search-driven contextual AI responses.",
      "Built role-based admin and designer dashboards, implemented REST APIs, and integrated Razorpay payment gateway and Google Analytics.",
    ],
  },
  {
    period: "Sep 2024 — Jun 2025",
    role: "MERN Stack Developer Intern",
    company: "Cuvette Tech",
    location: "Remote",
    accentColor: "cyan",
    points: [
      "Developed and deployed full-stack applications using MongoDB, Express.js, React, and Node.js, implementing authentication, middleware, and REST API integrations.",
      "Developed reusable React components with nested routing and lazy loading to improve dashboard performance and user experience.",
      "Automated backend workflows using cron jobs for analytics and status updates, reducing manual operational effort.",
    ],
  },
];

export const educations: Education[] = [
  {
    year: "2020 — 2024",
    degree: "B.Tech — Mechanical Engineering",
    school: "MIT Academy of Engineering, Pune",
    note: "Relevant: Full Stack Web Dev, Python, OOP",
  },
  {
    year: "2018 — 2020",
    degree: "HSC — Computer Science",
    school: "Science College, Nanded",
  },
];

export const certifications = [
  { icon: "Award", name: "Namaste Node.js — NamasteDev" },
  { icon: "Bot", name: "GenAI with JavaScript — Chaicode" },
];

export const heroTags = ["Node.js", "React.js", "Next.js", "PostgreSQL", "RAG / AI", "Docker", "AWS EC2"];

export const contactInfo = {
  email: "rushabh.ingle2111@gmail.com",
  phone: "+91 9130257202",
  location: "Pune, Maharashtra",
  status: "open_to_work",
};

export const knowledgeBase: Record<string, string> = {
  orcabase:
    "Orcabase is Rushabh's flagship project — an AI-powered SaaS platform where companies can deploy embeddable chatbots and query their internal databases using natural language. It features multi-tenant workspaces, RAG-based document search using Qdrant, and a Docker-based VPC agent for secure database connectivity. The backend runs on AWS EC2 with HTTPS, and the frontend is on Vercel.",
  nexer:
    "NEXER is a developer networking platform — think LinkedIn but built for devs. Rushabh built real-time 1-on-1 and group chat using Socket.IO, connection discovery, and private collaboration groups. It uses the full MERN stack with Redux Toolkit for state management and JWT for auth.",
  gharseva:
    "GharSeva is a full-stack Local Services Platform that connects users with nearby service providers (plumbers, electricians, etc.). It features service booking, role-based dashboards for users and providers, and a scalable Node.js/MongoDB backend.",
  shopsphere:
    "ShopSphere (StoreRating) is a full-stack application where users can rate and review local stores. It uses Prisma ORM with PostgreSQL, features secure JWT authentication, protected admin routes, and real-time dashboard analytics.",
  "car rental":
    "The Car Rental System is a full-featured platform for browsing, booking, and managing vehicle rentals. It includes an admin panel for fleet management, secure JWT-based authentication, and a MERN stack architecture.",
  dinemanager:
    "DineManager is a Restaurant Management System featuring a real-time admin dashboard with live metrics (using Recharts), nested routing, and automated analytics updates via cron jobs.",
  queryflow:
    "QueryFlow is a Ticketing System for support query management. It includes a customizable chatbot component, role-based access control (RBAC), and lazy-loaded components for better performance.",
  trakx:
    "Trakx (Meeting Manager) is an availability and meeting slot management system. It features custom middleware for protected routes, clean dashboard UI, and efficient state management using the MERN stack.",
  default:
    "Great question! Rushabh is a Full Stack Developer specializing in Node.js, React, Next.js, and AI/RAG systems. He's built production SaaS platforms (Orcabase), networking tools (NEXER), and various utility platforms like GharSeva and DineManager. Want to know about a specific project or skill?",
};

export function getBotReply(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("orcabase") || m.includes("chatbot") || m.includes("rag") || m.includes("database"))
    return knowledgeBase["orcabase"];
  if (m.includes("nexer") || m.includes("networking") || m.includes("socket"))
    return knowledgeBase["nexer"];
  if (m.includes("gharseva") || m.includes("service") || m.includes("local"))
    return knowledgeBase["gharseva"];
  if (m.includes("shopsphere") || m.includes("storerating") || m.includes("review") || m.includes("rating"))
    return knowledgeBase["shopsphere"];
  if (m.includes("car") || m.includes("rental") || m.includes("vehicle"))
    return knowledgeBase["car rental"];
  if (m.includes("dinemanager") || m.includes("restaurant") || m.includes("dine"))
    return knowledgeBase["dinemanager"];
  if (m.includes("queryflow") || m.includes("ticket") || m.includes("support"))
    return knowledgeBase["queryflow"];
  if (m.includes("trakx") || m.includes("meeting") || m.includes("slot") || m.includes("trackx"))
    return knowledgeBase["trakx"];
  return knowledgeBase["default"];
}
