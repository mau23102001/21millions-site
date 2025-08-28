// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "21 Millions Enterprises S.A.C.",
  description: "Tesorería en Bitcoin para personas y empresas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-neutral-900">
        {children}
        <FooterLegal />
        <CookieBanner />
      </body>
    </html>
  );
}

/* -------------------- Footer con enlaces legales -------------------- */
function FooterLegal() {
  return (
    <footer className="py-10 border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-neutral-600">
          © {new Date().getFullYear()} 21 Millions Enterprises S.A.C. — Todos los derechos
          reservados.
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="/terminos" className="hover:opacity-80">Términos y Condiciones</a>
          <a href="/privacidad" className="hover:opacity-80">Política de Privacidad</a>
          <a href="/cookies" className="hover:opacity-80">Política de Cookies</a>
          <a href="mailto:21millionspe@gmail.com" className="hover:opacity-80">Contacto</a>
        </nav>
      </div>
      <p className="mt-3 text-center text-xs text-neutral-500 px-4">
        21 Millions Enterprises S.A.C. — Lima, Perú. Correo oficial: 21millionspe@gmail.com.
      </p>
    </footer>
  );
}

/* -------------------- Banner de Cookies (client) -------------------- */
"use client";
import { useState, useEffect } from "react";

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Muestra el banner sólo si no existe consentimiento guardado
    const consent = typeof window !== "undefined" ? localStorage.getItem("cookie-consent") : "all";
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookie-consent", "none");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-neutral-900 text-white p-4 text-sm z-[999]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p>
          Usamos cookies para mejorar tu experiencia. Puedes aceptarlas o rechazarlas.{" "}
          <a href="/cookies" className="underline text-yellow-400">Ver política</a>
        </p>
        <div className="flex gap-2">
          <button
            onClick={rejectAll}
            className="px-3 py-1 rounded bg-neutral-700 hover:bg-neutral-600"
          >
            Rechazar
          </button>
          <button
            onClick={acceptAll}
            className="px-3 py-1 rounded bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
