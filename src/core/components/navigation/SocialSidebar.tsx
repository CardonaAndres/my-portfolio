import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/core/components/icons";
import { SITE_CONFIG } from "@/core/config/site.config";

export const SocialSidebar = () => {
  return (
    <aside
      aria-label="Enlaces sociales laterales"
      className="fixed bottom-0 left-6 z-40 hidden lg:flex flex-col items-center gap-5"
    >
      <a
        href={SITE_CONFIG.links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub de Andrés Cardona"
        title="GitHub"
        className="p-1 text-muted-foreground hover:text-foreground hover:-translate-y-1 transition-all duration-200"
      >
        <GithubIcon className="w-7 h-7" size={28} />
      </a>

      <a
        href={SITE_CONFIG.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn de Andrés Cardona"
        title="LinkedIn"
        className="p-1 text-muted-foreground hover:text-[#0A66C2] hover:-translate-y-1 transition-all duration-200"
      >
        <LinkedinIcon className="w-7 h-7" size={28} />
      </a>

      <a
        href={SITE_CONFIG.links.email}
        aria-label="Enviar correo a Andrés Cardona"
        title="Email"
        className="p-1 text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
      >
        <Mail className="w-7 h-7" />
      </a>

      {/* Línea vertical decorativa que conecta con el borde inferior */}
      <span className="w-[1.5px] h-24 bg-border transition-colors group-hover:bg-primary" />
    </aside>
  );
};
