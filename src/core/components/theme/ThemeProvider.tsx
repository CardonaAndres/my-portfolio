"use client";

import {
  createContext,
  useEffect,
  useState,
  useSyncExternalStore,
  useTransition,
} from "react";
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

const subscribeTheme = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
  };
};

const getStoredTheme = (): Theme => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (stored && ["light", "dark", "system"].includes(stored)) {
      return stored;
    }
  } catch {
    // Ignorar si localStorage no está disponible
  }
  return DEFAULT_THEME;
};

const getServerTheme = (): Theme => DEFAULT_THEME;

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider = ({
  children,
}: ThemeProviderProps) => {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getStoredTheme,
    getServerTheme
  );
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [, startTransition] = useTransition();

  // 1. Resolver y aplicar clases en el <html>
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
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      window.dispatchEvent(new Event("theme-change"));
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
