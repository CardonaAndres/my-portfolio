"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/core/components/icons";
import type { FooterDictionary } from "@/core/interfaces/i18n.interface";
import { SITE_CONFIG } from "@/core/config/site.config";

interface FooterProps {
  dict: FooterDictionary;
}

export const Footer = ({ dict }: FooterProps) => {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-border bg-card/40 py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Redes sociales visibles en móvil (en desktop está la barra vertical flotante lateral) */}
        <div className="flex lg:hidden items-center gap-4 text-muted-foreground">
          <a
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <GithubIcon className="w-6 h-6" size={24} />
          </a>
          <a
            href={SITE_CONFIG.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#0A66C2] transition-colors"
          >
            <LinkedinIcon className="w-6 h-6" size={24} />
          </a>
          <a
            href={SITE_CONFIG.links.email}
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <p>
          &copy; {currentYear} {SITE_CONFIG.shortName}. {dict.rights}
        </p>
        <p className="text-xs text-muted-foreground/80">
          {dict.designedWith}
        </p>
      </div>
    </footer>
  );
};
