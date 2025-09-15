"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Calendar, MapPin, Shield, FileCheck2 } from "lucide-react";

export const dynamic = "force-dynamic";

const EMAIL = "21millionspe@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/51941437729?text=Hola%20quiero%20agendar%20una%20reunion%20gratuita";

export default function CapacitacionesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // paleta dorada
  const gold = "bg-[#C9A227]";
  const goldHover = "hover:bg-[#B38F1B]";
  const goldUnderline = "decoration-[#C9A227]";

  // Evita scroll del body con el menú abierto
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Header (igual que home) */}
      <header className="sticky top-0 z-[60] bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-21m.png" alt="21 Millions Enterprises S.A.C." width={40} height={40} priority className="rounded" />
            <span className="font-semibold tracking-tight">21 Millions Enterprises S.A.C.</span>
          </div>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6 text-sm">
            {/* Los anchors apuntan al home */}
            <Link href="/#servicios" className="hover:text-neutral-700">Servicios</Link>
            <Link href="/#proceso" className="hover:text-neutral-700">Cómo trabajamos</Link>
            <Link href="/#btc-en-perspectiva" className="hover:text-neutral-700">BTC en perspectiva</Link>
            <Link href="/#niif" className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</Link>
            <Link href="/#faq" className="hover:text-neutral-700">FAQ</Link>
            <Link href="/capacitaciones" className="hover:text-neutral-700">Capacitaciones/Charlas</Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              aria-label="Escríbenos por WhatsApp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-block"
            >
              <Button className={`${gold} ${goldHover} text-black px-4 py-2 rounded-xl text-sm`}>
                Escríbenos por WhatsApp
              </Button>
            </a>

            <button
              aria-label="Abrir menú"
              className="md:hidden p-2 rounded-lg border"
              onClick={() => setMobileOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil: overlay blanco sólido */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[80] md:hidden">
            <div className="absolute inset-0 bg-white" />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <span className="font-medium">Menú</span>
                <button
                  aria-label="Cerrar menú"
                  className="p-2 rounded-lg border"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="px-4 py-6 flex flex-col gap-4 text-base overflow-y-auto">
                <Link href="/#servicios" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  Servicios
                </Link>
                <Link href="/#proceso" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  Cómo trabajamos
                </Link>
                <Link href="/#btc-en-perspectiva" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  BTC en perspectiva
                </Link>
                <Link href="/#niif" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  Contabilidad &amp; Cumplimiento
                </Link>
                <Link href="/#faq" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  FAQ
                </Link>
                <Link href="/capacitaciones" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  Capacitaciones/Charlas
                </Link>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button className={`${gold} ${goldHover} text-black w-full`}>Escríbenos por WhatsApp</Button>
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero sección de la página de Capacitaciones */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-amber-50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18 relative z-[10]">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className={`underline ${goldUnderline} decoration-8 underline-offset-4`}>Capacitaciones</span> / Charlas
          </h1>
          <p className="mt-3 text-neutral-700 max-w-2xl">
            Compartimos educación y buenas prácticas sobre Bitcoin, autocustodia y tesorería responsable.
            Aquí encontrarás eventos y talleres recientes.
          </p>
        </div>
      </section>

      {/* Card del evento CERTUS */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-2xl">
            <CardContent className="p-4 md:p-6">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                {/* Imagen */}
                <figure>
                  <Image
                    src="/CERTUS.jpg"
                    alt="Capacitación en CERTUS | Callao"
                    width={960}
                    height={540}
                    className="w-full h-auto rounded-xl border"
                    priority
                  />
                  <figcaption className="sr-only">Taller en CERTUS | Callao</figcaption>
                </figure>

                {/* Texto */}
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                    Capacitación en CERTUS — Callao
                  </h2>

                  <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar className="h-4 w-4" /> <span className="mr-2">Septiembre 2025</span>
                    <MapPin className="h-4 w-4" /> <span>Sede Callao</span>
                  </div>

                  <p className="mt-4 text-neutral-700">
                    Taller práctico <em>“Bitcoin y las criptomonedas: el nuevo lenguaje del dinero”</em> para estudiantes de CERTUS.
                    Conversamos sobre fundamentos de Bitcoin, seguridad personal (custodia propia), riesgos comunes y casos reales de uso en tesorería.
                  </p>

                  <ul className="mt-4 space-y-2 text-neutral-700 list-disc pl-5">
                    <li>Marco conceptual: por qué existe Bitcoin y cómo funciona su escasez programada.</li>
                    <li>Buenas prácticas de autocustodia y prevención de estafas.</li>
                    <li>Aplicaciones en finanzas personales y tesorería empresarial.</li>
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" /> Enfoque educativo, sin custodia ni captación de fondos.
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="h-4 w-4" /> Metodología documentada y auditable.
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener">
                      <Button className={`${gold} ${goldHover} text-black`}>Escríbenos por WhatsApp</Button>
                    </a>
                    <Link href="/" className="inline-flex items-center text-sm hover:opacity-80">
                      Volver al inicio
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pie mínimo (opcional) */}
      <footer className="pb-10" />
    </div>
  );
}
