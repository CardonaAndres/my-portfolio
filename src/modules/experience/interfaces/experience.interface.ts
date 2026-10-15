import type { Locale } from "@/core/interfaces/i18n.interface";

export interface ExperienceMetric {
  label: string;
  value: string;
}

export interface ExperienceProduct {
  id: string;
  title: {
    es: string;
    en: string;
  };
  role?: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  achievements?: {
    es: string[];
    en: string[];
  };
  metrics?: ExperienceMetric[];
  technologies: string[];
  url?: string;
  type?: "production" | "internal" | "client";
  isFeatured?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: {
    es: string;
    en: string;
  };
  period: {
    es: string;
    en: string;
  };
  location: string;
  isCurrent?: boolean;
  contractType?: {
    es: string;
    en: string;
  };
  summary?: {
    es: string;
    en: string;
  };
  products: ExperienceProduct[];
}

export interface ExperienceSectionProps {
  locale: Locale;
}
