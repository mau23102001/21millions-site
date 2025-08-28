// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import CookieBanner from "../components/ui/CookieBanner";

export const metadata: Metadata = {
  title: "21 Millions Enterprises S.A.C.",
  description: "Tesorería inteligente en Bitcoin para personas y empresas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Contenido de cada página */}
        {children}

        {/* Footer global con enlaces legales */}
        <footer className="border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-neutral-600">
                © {new Date().getFullYear()} 21 Millions Enterprises S.A.C. — Todos los derechos reservados.
              </div>

              <nav className="flex items-center gap-6 text-sm">
                <Link href="/legal/terminos" className="hover:opacity-80">
                  Términos y Condiciones
                </Link>
                <Link href="/privacidad" className="hover:opacity-80">
                  Política de Privacidad
                </Link>
                <Link href="/cookies" className="hover:opacity-80">
                  Política de Cookies
                </Link>
                <Link href="#contacto" className="hover:opacity-80">
                  Contacto
                </Link>
              </nav>
            </div>
          </div>
        </footer>

        {/* Banner de cookies */}
        <CookieBanner />
      </body>
    </html>
  );
}
