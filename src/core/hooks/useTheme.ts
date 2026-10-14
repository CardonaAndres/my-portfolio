"use client";

import { useContext } from "react";
import { ThemeContext } from "@/core/components/theme/ThemeProvider";
import type { ThemeContextValue } from "@/core/interfaces/theme.interface";

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme debe ser utilizado dentro de un <ThemeProvider />.");
  }

  return context;
};
