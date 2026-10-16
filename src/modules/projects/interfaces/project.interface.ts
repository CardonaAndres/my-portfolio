import type { Locale } from "@/core/interfaces/i18n.interface";

export type ProjectCategory = "all" | "fullstack" | "ai" | "backend" | "cloud";

export type ProjectMediaType = "image" | "video";

export interface ProjectMedia {
  type: ProjectMediaType;
  url: string;
  poster?: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "square";
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  docs?: string;
}

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  isFeatured?: boolean;
  status: {
    es: string;
    en: string;
  };
  year: string;
  title: {
    es: string;
    en: string;
  };
  tagline: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  architecture?: {
    es: string;
    en: string;
  };
  media: ProjectMedia;
  technologies: string[];
  highlights: {
    es: string[];
    en: string[];
  };
  metrics: ProjectMetric[];
  links: ProjectLinks;
}

export interface ProjectsSectionProps {
  locale: Locale;
}
