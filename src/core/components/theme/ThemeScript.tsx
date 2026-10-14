import { THEME_STORAGE_KEY } from "@/core/constants/theme.constant";

export const ThemeScript = () => {
  const scriptContent = `
    (function() {
      try {
        var storageKey = '${THEME_STORAGE_KEY}';
        var stored = localStorage.getItem(storageKey);
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || 'system';
        var isDark = theme === 'dark' || (theme === 'system' && prefersDark);
        var root = document.documentElement;
        if (isDark) {
          root.classList.add('dark');
        } else {
          root.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: scriptContent }}
      suppressHydrationWarning
    />
  );
};
