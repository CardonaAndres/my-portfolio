import type { HeroDictionary, Locale } from "@/core/interfaces/i18n.interface";

export interface HeroProps {
  dict: HeroDictionary;
  locale: Locale;
}

export interface EngineeringPillar {
  id: string;
  number: string;
  category: string;
  metric: string;
  highlight?: string;
  chips: readonly string[];
}

export interface TechItem {
  name: string;
  label: string;
}

export interface TechCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  items: readonly TechItem[];
}
