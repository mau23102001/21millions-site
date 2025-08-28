import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import CookieBanner from "../components/ui/CookieBanner";

export const metadata: Metadata = {
  title: "21 Millions Enterprises S.A.C.",
  description: "Tesorería inteligente en Bitcoin para personas y empresas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}

        <footer className="border-t border-neutral-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
            <div className="text-sm text-neutral-600">
              © {new Date().getFullYear()} 21 Millions Enterprises S.A.C. — Todos los derechos reservados.
            </div>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/legal/terminos" className="hover:opacity-80">Términos y Condiciones</Link>
              <Link href="/privacidad" className="hover:opacity-80">Política de Privacidad</Link>
              <Link href="/cookies" className="hover:opacity-80">Política de Cookies</Link>
              <Link href="#contacto" className="hover:opacity-80">Contacto</Link>
            </nav>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}
