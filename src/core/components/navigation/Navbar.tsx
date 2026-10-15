"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import type { Locale, NavDictionary } from "@/core/interfaces/i18n.interface";
import { LanguageSwitcher } from "@/core/components/i18n/LanguageSwitcher";
import { ThemeToggle } from "@/core/components/theme/ThemeToggle";

interface NavbarProps {
  currentLocale: Locale;
  dict: NavDictionary;
}

export const Navbar = ({ currentLocale, dict }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Cerrar menú móvil cuando cambia la ruta durante el render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems = [
    { label: dict.home, href: `/${currentLocale}` },
    { label: dict.projects, href: `/${currentLocale}#projects` },
    { label: dict.experience, href: `/${currentLocale}#experience` },
    { label: dict.skills, href: `/${currentLocale}#skills` },
    { label: dict.contact, href: `/${currentLocale}#contact` },
  ];

  return (
    <header className="sticky top-3 sm:top-5 z-50 w-full px-4 sm:px-6 pointer-events-none">
      <div className="mx-auto max-w-5xl pointer-events-auto">
        {/* Barra Flotante / Cápsula Principal */}
        <div className="h-14 sm:h-15 px-3 sm:px-4 rounded-full border border-border/80 bg-background/85 backdrop-blur-xl shadow-xs dark:shadow-md dark:shadow-black/40 flex items-center justify-between transition-all duration-200">
          
          {/* Lado Izquierdo: Logotipo / Monograma */}
          <Link
            href={`/${currentLocale}`}
            className="flex items-center gap-2.5 group pl-1 select-none"
            aria-label="Andrés Cardona - Inicio"
            onClick={() => setMobileOpen(false)}
          >
            {/* Monograma AC Sólido con indicador de disponibilidad */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold shadow-xs shadow-blue-600/30 group-hover:scale-105 transition-transform">
              AC
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-background" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Andrés
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                dev
              </span>
            </div>
          </Link>

          {/* Centro: Segmented Pill Dock con Enlaces (Desktop) */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-0.5 p-1 rounded-full bg-muted/40 border border-border/50 text-xs font-medium"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-background/90 hover:shadow-xs transition-all duration-150 tracking-tight"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Lado Derecho: Acciones (Idioma, Tema, CTA y Menú Móvil) */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher currentLocale={currentLocale} />
            <ThemeToggle />

            {/* CTA Contacto Rápido Sólido (Desktop Grande) */}
            <Link
              href={`/${currentLocale}#contact`}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs shadow-blue-600/25 hover:shadow-blue-500/35 active:scale-95 transition-all duration-150"
            >
              <span>{dict.contact}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Botón Menú Móvil */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={mobileOpen}
              className="inline-flex md:hidden items-center justify-center w-8 h-8 rounded-full border border-border/80 bg-muted/40 text-foreground hover:bg-muted active:scale-95 transition-all"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        {mobileOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación móvil"
            className="md:hidden mt-2 rounded-2xl border border-border/80 bg-background/95 backdrop-blur-xl p-3 shadow-xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-muted/80 flex items-center justify-between transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}

            <div className="pt-2 mt-1 border-t border-border/60">
              <Link
                href={`/${currentLocale}#contact`}
                onClick={() => setMobileOpen(false)}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/25 transition-all"
              >
                <span>{dict.contact}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
