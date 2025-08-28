// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // --- Redirección a www.21millionspe.com ---
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";
  if (host === "21millionspe.com") {
    url.hostname = "www.21millionspe.com";
    return NextResponse.redirect(url);
  }

  // --- Respuesta base ---
  const res = NextResponse.next();

  // *** CSP: sin nonce y sin 'strict-dynamic' ***
  // Permitimos inline (que Next inyecta) y blob: para el runtime.
  // Añadimos script-src-elem y script-src-attr para ser explícitos.
  const scriptSrc =
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https: blob:";
  const scriptSrcElem =
    "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https: blob:";
  const scriptSrcAttr = "script-src-attr 'self' 'unsafe-inline'";

  const csp = [
    "default-src 'self'",
    scriptSrc,
    scriptSrcElem,
    scriptSrcAttr,
    "style-src 'self' 'unsafe-inline' https:",
    "img-src 'self' data: https:",
    "font-src 'self' data: https:",
    "connect-src 'self' https: wss:",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; ");

  res.headers.set("Content-Security-Policy", csp);
  return res;
}

// Evitar que aplique a assets estáticos
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png).*)"],
};
