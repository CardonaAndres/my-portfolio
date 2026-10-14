import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/core/constants/i18n.constant";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Verificar si la ruta ya tiene un prefijo de idioma soportado (/es o /en)
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 2. Si no tiene prefijo, redirigir al idioma por defecto (es)
  const targetPath = pathname === "/" ? "" : pathname;
  const redirectUrl = new URL(`/${DEFAULT_LOCALE}${targetPath}`, request.url);
  redirectUrl.search = request.nextUrl.search;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    // Omitir rutas internas de Next.js, assets estáticos y API routes
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
