"use client";

import { useEffect, useState } from "react";
import type { FooterDictionary } from "@/core/interfaces/i18n.interface";

interface FooterProps {
  dict: FooterDictionary;
}

export const Footer = ({ dict }: FooterProps) => {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-border bg-card/50 py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {currentYear} DevPortfolio. {dict.rights}
        </p>
        <p className="text-xs">
          {dict.designedWith}
        </p>
      </div>
    </footer>
  );
};
