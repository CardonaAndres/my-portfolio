import type { Theme } from "@/core/interfaces/theme.interface";

export const THEME_STORAGE_KEY = "portfolio_theme" as const;

export const DEFAULT_THEME: Theme = "system" as const;

export const THEMES = ["light", "dark", "system"] as const;
