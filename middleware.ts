// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Genera un nonce base64 usando Web Crypto (Edge runtime)
function createNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  // base64
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  // btoa está disponible en Edge runtime
  return btoa(bin);
}

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

  // --- Nonce único por request ---
  const nonce = createNonce();
  // Exponemos el nonce para que el layout lo lea con headers()
  res.headers.set("x-nonce", nonce);

  // --- CSP estricta con nonce ---
  const csp = [
    `default-src 'self'`,
    // Nota: 'strict-dynamic' permite que scripts con nonce carguen otros scripts seguros
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:`,
    `style-src 'self' 'unsafe-inline' https:`,
    `img-src 'self' data: https:`,
    `font-src 'self' data: https:`,
    `connect-src 'self' https:`,
    `frame-ancestors 'self'`,
    `base-uri 'self'`,
    `form-action 'self'`,
  ].join("; ");

  res.headers.set("Content-Security-Policy", csp);
  return res;
}

// Evitar que aplique a assets estáticos
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png).*)"],
};
