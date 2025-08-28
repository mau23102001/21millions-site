// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Genera un nonce base64 usando Web Crypto (Edge runtime)
function createNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin); // base64
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

  // --- Nonce único por request (lo dejamos por si luego lo usas) ---
  const nonce = createNonce();
  res.headers.set("x-nonce", nonce);

  // --- CSP (relajada SOLO en script-src para evitar errores rojos) ---
  // Nota:
  // - 'unsafe-inline' habilita los scripts inline que Next inyecta (runtime/__NEXT_DATA__).
  // - 'strict-dynamic' lo puedes mantener o quitar; aquí lo dejamos.
  // - añadimos blob: por compatibilidad con el runtime.
  const csp = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' https: blob:`,
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
