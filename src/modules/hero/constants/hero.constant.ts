import type {
  EngineeringPillar,
  TechCategory,
} from "@/modules/hero/interfaces/hero.interface";

export const ENGINEERING_PILLARS: readonly EngineeringPillar[] = [
  {
    id: "devops",
    number: "01",
    category: "DEVOPS & CLOUD",
    metric: "Zero Downtime",
    highlight: "Infraestructura & CI/CD",
    chips: ["Docker", "CI/CD Pipelines", "Blue-Green", "Nginx & Linux"],
  },
  {
    id: "backend",
    number: "02",
    category: "BACKEND & DATA",
    metric: "Scalable Systems",
    highlight: "Arquitectura & Colas",
    chips: ["Microservicios", "NestJS & Node", "PostgreSQL", "Redis & Colas"],
  },
  {
    id: "ai-first",
    number: "03",
    category: "AI-FIRST",
    metric: "AI Integration",
    highlight: "Agentes, MCPs & LLMs",
    chips: ["LLMs & Prompts", "Agentes IA", "MCPs & Tools", "Workflows RAG"],
  },
  {
    id: "impact",
    number: "04",
    category: "ENTREGA & NEGOCIO",
    metric: "End-to-End Product",
    highlight: "Diseño, Ops & B2 Level",
    chips: ["Entrega E2E", "Clean Code", "Optimización", "Inglés B2"],
  },
] as const;

export const TECH_CATEGORIES: readonly TechCategory[] = [
  {
    id: "frontend",
    number: "01",
    title: "FRONTEND",
    subtitle: "UI & Client",
    items: [
      { name: "typescript", label: "TS" },
      { name: "javascript", label: "JS" },
      { name: "react", label: "React" },
      { name: "nextjs", label: "Next.js" },
      { name: "tailwind", label: "Tailwind" },
      { name: "astro", label: "Astro" },
      { name: "bootstrap", label: "Bootstrap" },
      { name: "mui", label: "MUI" },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "BACKEND",
    subtitle: "API & Services",
    items: [
      { name: "nodejs", label: "Node" },
      { name: "express", label: "Express" },
      { name: "nestjs", label: "NestJS" },
      { name: "python", label: "Python" },
      { name: "fastapi", label: "FastAPI" },
      { name: "php", label: "PHP" },
      { name: "laravel", label: "Laravel" },
    ],
  },
  {
    id: "data",
    number: "03",
    title: "DATOS",
    subtitle: "SQL & Cache",
    items: [
      { name: "postgresql", label: "Postgres" },
      { name: "mysql", label: "MySQL" },
      { name: "redis", label: "Redis" },
      { name: "typeorm", label: "TypeORM" },
      { name: "prisma", label: "Prisma" },
      { name: "sqlite", label: "SQLite" },
      { name: "mongodb", label: "MongoDB" },
    ],
  },
  {
    id: "cloud",
    number: "04",
    title: "CLOUD & DEVOPS",
    subtitle: "CI/CD & Servers",
    items: [
      { name: "docker", label: "Docker" },
      { name: "githubactions", label: "CI/CD" },
      { name: "nginx", label: "Nginx" },
      { name: "traefik", label: "Traefik" },
      { name: "linux", label: "Linux" },
      { name: "git", label: "Git" },
      { name: "github", label: "GitHub" },
    ],
  },
] as const;
