"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

type ConsentState = "unset" | "necessary" | "all";
const LS_KEY = "cookie-consent-21m";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = (localStorage.getItem(LS_KEY) as ConsentState | null) ?? null;
      if (!saved || saved === "unset") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const setConsent = useCallback((value: ConsentState) => {
    try {
      localStorage.setItem(LS_KEY, value);
    } catch {}
    setVisible(false);
  }, []);

  // Permite cerrar con ESC
  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  if (!visible) return null;

  return (
    /* IMPORTANTÍSIMO:
       pointer-events-none evita que el contenedor fijo capture clics
       en el resto de la página. Sólo el card interior (auto) recibe clics. */
    <div className="fixed inset-x-0 bottom-0 z-[10] pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="pointer-events-auto rounded-2xl border bg-white p-4 shadow-lg">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-neutral-700">
              <p className="mb-1">
                Usamos cookies necesarias para el funcionamiento del sitio y analíticas (opcionales) para mejorar tu
                experiencia. Consulta nuestra{" "}
                <Link href="/cookies" className="underline hover:opacity-80">Política de Cookies</Link>, nuestra{" "}
                <Link href="/privacidad" className="underline hover:opacity-80">Política de Privacidad</Link>{" "}
                y los{" "}
                <Link href="/legal/terminos" className="underline hover:opacity-80">Términos y Condiciones</Link>.
              </p>
            </div>

            <div className="flex w-full items-center gap-2 md:w-auto">
              <button
                type="button"
                onClick={() => setConsent("necessary")}
                className="w-full rounded-xl border px-4 py-2 text-sm md:w-auto"
              >
                Solo necesarias
              </button>
              <button
                type="button"
                onClick={() => setConsent("all")}
                className="w-full rounded-xl bg-yellow-400 px-4 py-2 text-sm font-medium text-black md:w-auto"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
