import Link from "next/link";
import type { Locale, NavDictionary } from "@/core/interfaces/i18n.interface";
import { LanguageSwitcher } from "@/core/components/i18n/LanguageSwitcher";
import { ThemeToggle } from "@/core/components/theme/ThemeToggle";

interface NavbarProps {
  currentLocale: Locale;
  dict: NavDictionary;
}

export const Navbar = ({ currentLocale, dict }: NavbarProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo / Nombre */}
        <Link
          href={`/${currentLocale}`}
          className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Dev<span className="text-primary">.Portfolio</span>
        </Link>

        {/* Enlaces de navegación */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link
            href={`/${currentLocale}`}
            className="hover:text-foreground transition-colors"
          >
            {dict.home}
          </Link>
          <Link
            href={`/${currentLocale}#projects`}
            className="hover:text-foreground transition-colors"
          >
            {dict.projects}
          </Link>
          <Link
            href={`/${currentLocale}#experience`}
            className="hover:text-foreground transition-colors"
          >
            {dict.experience}
          </Link>
          <Link
            href={`/${currentLocale}#skills`}
            className="hover:text-foreground transition-colors"
          >
            {dict.skills}
          </Link>
          <Link
            href={`/${currentLocale}#contact`}
            className="hover:text-foreground transition-colors"
          >
            {dict.contact}
          </Link>
        </nav>

        {/* Acciones: Selector de idioma y Selector de Tema */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={currentLocale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
