import type { ReactNode } from "react";
import type { Metadata } from "next";
import "@/core/assets/css/globals.css";
import { ThemeScript } from "@/core/components/theme/ThemeScript";
import { ThemeProvider } from "@/core/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "DevPortfolio | Software Developer",
  description: "Portafolio profesional de desarrollo de software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
