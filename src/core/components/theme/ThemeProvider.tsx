"use client";

import { createContext, useEffect, useState, useTransition } from "react";
import type { ReactNode } from "react";
import type {
  ResolvedTheme,
  Theme,
  ThemeContextValue,
} from "@/core/interfaces/theme.interface";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
} from "@/core/constants/theme.constant";

export const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider = ({
  children,
  defaultTheme = DEFAULT_THEME,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [, startTransition] = useTransition();

  // 1. Cargar tema guardado en cliente al montar
  useEffect(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (stored && ["light", "dark", "system"].includes(stored)) {
        setThemeState(stored);
      }
    } catch {
      // Ignorar si localStorage no está disponible
    }
  }, []);

  // 2. Resolver y aplicar clases en el <html>
  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (currentTheme: Theme) => {
      const isSystemDark = mediaQuery.matches;
      const isDark =
        currentTheme === "dark" || (currentTheme === "system" && isSystemDark);
      const activeResolved: ResolvedTheme = isDark ? "dark" : "light";

      startTransition(() => {
        setResolvedTheme(activeResolved);
      });

      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    applyTheme(theme);

    const handleSystemChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {
      // Ignorar
    }
  };

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
