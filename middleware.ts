import type {NextRequest} from "next/server";

import {NextResponse} from "next/server";

export function middleware(req: NextRequest) {
  // Verificar si hay cookie de autenticación
  const authorizationCookie = req.cookies.get("Authorization")?.value;

  const {pathname} = req.nextUrl;
  const protectedRoutes = ["/system"];

  function isProtectedPath(pathname: string) {
    return protectedRoutes.some((p) => pathname.startsWith(p));
  }

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }
  if (authorizationCookie) {
    return NextResponse.next();
  }

  const url = new URL("/login", req.url);

  return NextResponse.redirect(url);
}

// Configurar qué rutas deben pasar por el middleware
export const config = {
  matcher: [
    /*
     * Proteger todas las rutas bajo /system
     * Excluir archivos estáticos y API routes
     */
    "/system/:path*",
  ],
};
