export interface IconProps {
  className?: string;
  size?: number;
}

export type TechIconName =
  // Frontend
  | "react"
  | "nextjs"
  | "typescript"
  | "javascript"
  | "tailwind"
  | "astro"
  | "bootstrap"
  | "mui"
  // Backend
  | "nodejs"
  | "express"
  | "nestjs"
  | "python"
  | "fastapi"
  | "php"
  | "laravel"
  // Datos / Bases de Datos / ORMs
  | "typeorm"
  | "sqlite"
  | "mysql"
  | "postgresql"
  | "mongodb"
  | "redis"
  | "prisma"
  | "graphql"
  | "sqlserver"
  // DevOps & Cloud
  | "docker"
  | "nginx"
  | "githubactions"
  | "linux"
  | "git"
  | "github"
  | "traefik"
  | "rust"
  | "caddy";
