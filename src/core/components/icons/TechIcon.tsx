import type { ComponentType } from "react";
import { Code2 } from "lucide-react";
import type { IconProps, TechIconName } from "@/core/interfaces/icon.interface";

// Frontend
import { ReactIcon } from "@/core/components/icons/tech/ReactIcon";
import { NextjsIcon } from "@/core/components/icons/tech/NextjsIcon";
import { TypescriptIcon } from "@/core/components/icons/tech/TypescriptIcon";
import { JavascriptIcon } from "@/core/components/icons/tech/JavascriptIcon";
import { TailwindIcon } from "@/core/components/icons/tech/TailwindIcon";
import { AstroIcon } from "@/core/components/icons/tech/AstroIcon";
import { BootstrapIcon } from "@/core/components/icons/tech/BootstrapIcon";
import { MuiIcon } from "@/core/components/icons/tech/MuiIcon";

// Backend
import { NodejsIcon } from "@/core/components/icons/tech/NodejsIcon";
import { ExpressIcon } from "@/core/components/icons/tech/ExpressIcon";
import { NestjsIcon } from "@/core/components/icons/tech/NestjsIcon";
import { PythonIcon } from "@/core/components/icons/tech/PythonIcon";
import { FastapiIcon } from "@/core/components/icons/tech/FastapiIcon";
import { PhpIcon } from "@/core/components/icons/tech/PhpIcon";
import { LaravelIcon } from "@/core/components/icons/tech/LaravelIcon";

// Datos / DB / ORM
import { TypeormIcon } from "@/core/components/icons/tech/TypeormIcon";
import { SqliteIcon } from "@/core/components/icons/tech/SqliteIcon";
import { MysqlIcon } from "@/core/components/icons/tech/MysqlIcon";
import { PostgresqlIcon } from "@/core/components/icons/tech/PostgresqlIcon";
import { MongodbIcon } from "@/core/components/icons/tech/MongodbIcon";
import { RedisIcon } from "@/core/components/icons/tech/RedisIcon";
import { PrismaIcon } from "@/core/components/icons/tech/PrismaIcon";

// DevOps & Cloud
import { DockerIcon } from "@/core/components/icons/tech/DockerIcon";
import { NginxIcon } from "@/core/components/icons/tech/NginxIcon";
import { GithubActionsIcon } from "@/core/components/icons/tech/GithubActionsIcon";
import { LinuxIcon } from "@/core/components/icons/tech/LinuxIcon";
import { GitIcon } from "@/core/components/icons/tech/GitIcon";
import { GithubIcon } from "@/core/components/icons/tech/GithubIcon";
import { TraefikIcon } from "@/core/components/icons/tech/TraefikIcon";

interface TechIconProps extends IconProps {
  name: TechIconName | string;
}

const TECH_ICON_MAP: Record<string, ComponentType<IconProps>> = {
  // Frontend
  react: ReactIcon,
  next: NextjsIcon,
  nextjs: NextjsIcon,
  typescript: TypescriptIcon,
  ts: TypescriptIcon,
  javascript: JavascriptIcon,
  js: JavascriptIcon,
  tailwind: TailwindIcon,
  tailwindcss: TailwindIcon,
  astro: AstroIcon,
  bootstrap: BootstrapIcon,
  mui: MuiIcon,
  materialui: MuiIcon,

  // Backend
  node: NodejsIcon,
  nodejs: NodejsIcon,
  express: ExpressIcon,
  expressjs: ExpressIcon,
  nest: NestjsIcon,
  nestjs: NestjsIcon,
  python: PythonIcon,
  fastapi: FastapiIcon,
  php: PhpIcon,
  laravel: LaravelIcon,

  // Datos
  typeorm: TypeormIcon,
  sqlite: SqliteIcon,
  mysql: MysqlIcon,
  postgres: PostgresqlIcon,
  postgresql: PostgresqlIcon,
  mongo: MongodbIcon,
  mongodb: MongodbIcon,
  redis: RedisIcon,
  prisma: PrismaIcon,

  // DevOps & Cloud
  docker: DockerIcon,
  nginx: NginxIcon,
  githubactions: GithubActionsIcon,
  actions: GithubActionsIcon,
  cicd: GithubActionsIcon,
  linux: LinuxIcon,
  git: GitIcon,
  github: GithubIcon,
  traefik: TraefikIcon,
};

export const TechIcon = ({ name, className = "w-5 h-5", size = 20 }: TechIconProps) => {
  const normalizedKey = name.toLowerCase().replace(/[\s._-]/g, "");
  const IconComponent = TECH_ICON_MAP[normalizedKey] ?? TECH_ICON_MAP[name.toLowerCase().trim()];

  if (!IconComponent) {
    return <Code2 className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};
