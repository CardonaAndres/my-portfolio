import type {
  EngineeringPillar,
  TechCategory,
} from "@/modules/hero/interfaces/hero.interface";

export const ENGINEERING_PILLARS: readonly EngineeringPillar[] = [
  {
    id: "experience",
    number: "01",
    metric: "+3 Años",
    description:
      "Desarrollo de punta a punta con Node.js, NestJS, React, TypeScript y arquitecturas limpias.",
  },
  {
    id: "infrastructure",
    number: "02",
    metric: "Zero Downtime",
    description:
      "Estrategia Blue-Green con Docker, CI/CD en GitHub Actions y proxies reversos Nginx/Traefik.",
  },
  {
    id: "scalability",
    number: "03",
    metric: "Data & Cache",
    description:
      "Modelado relacional con PostgreSQL y MySQL, colas de procesamiento asíncrono y caché en Redis.",
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
