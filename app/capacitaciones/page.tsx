"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Shield, FileCheck2, Mail, Phone, MapPin, CalendarDays, MapPinIcon } from "lucide-react";

export const dynamic = "force-dynamic";

/** Datos de contacto */
const EMAIL = "21millionspe@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/51941437729?text=Hola%20quiero%20agendar%20una%20reunion%20gratuita";

/** Paleta dorado */
const gold = "bg-[#C9A227]";
const goldHover = "hover:bg-[#B38F1B]";
const goldUnderline = "decoration-[#C9A227]";

export default function CapacitacionesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    const body = document.body;
    if (mobileOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-[60] bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Izquierda */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-21m.png"
              alt="21 Millions Enterprises S.A.C."
              width={40}
              height={40}
              priority
              className="rounded"
            />
            <span className="font-semibold tracking-tight">21 Millions Enterprises S.A.C.</span>
          </div>

          {/* Nav desktop */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-neutral-700">Inicio</Link>
            <a href="/#servicios" className="hover:text-neutral-700">Servicios</a>
            <a href="/#proceso" className="hover:text-neutral-700">Cómo trabajamos</a>
            <a href="/#btc-en-perspectiva" className="hover:text-neutral-700">BTC en perspectiva</a>
            <a href="/#niif" className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</a>
            <a href="/#faq" className="hover:text-neutral-700">FAQ</a>
            <Link href="/capacitaciones" className="hover:text-neutral-700 underline underline-offset-4">
              Capacitaciones/Charlas
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              aria-label="Escríbenos por WhatsApp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener"
              className="hidden sm:inline-block"
            >
              {/* Botón más compacto */}
              <Button className={`px-4 py-2 text-sm rounded-xl ${gold} ${goldHover} text-black`}>
                Escríbenos por WhatsApp
              </Button>
            </a>
            <a href={`mailto:${EMAIL}`} className="sr-only">Escríbenos por email</a>

            {/* Móvil: hamburguesa */}
            <button
              aria-label="Abrir menú"
              className="md:hidden p-2 rounded-lg border"
              onClick={() => setMobileOpen(true)}
            >
              <span className="sr-only">Abrir menú</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil con FONDO BLANCO y scroll interno */}
        {mobileOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden fixed inset-0 z-[70] bg-white shadow-xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="px-4 py-4 border-b flex items-center justify-between">
              <span className="font-medium">Menú</span>
              <button
                aria-label="Cerrar menú"
                className="p-2 rounded-lg border"
                onClick={() => setMobileOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="px-4 py-6 flex flex-col gap-4 text-base">
              <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Inicio</Link>
              <a href="/#servicios" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Servicios</a>
              <a href="/#proceso" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Cómo trabajamos</a>
              <a href="/#btc-en-perspectiva" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">BTC en perspectiva</a>
              <a href="/#niif" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</a>
              <a href="/#faq" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">FAQ</a>
              <Link href="/capacitaciones" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">
                Capacitaciones/Charlas
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="hover:text-neutral-700">
                Escríbenos por WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-amber-50 via-white to-white" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 relative z-[10]">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className={`underline ${goldUnderline} decoration-8 underline-offset-4`}>Capacitaciones</span> / Charlas
          </h1>
          <p className="mt-3 text-neutral-700 max-w-2xl">
            Compartimos educación y buenas prácticas sobre Bitcoin, autocustodia y tesorería responsable. 
            Aquí encontrarás eventos y talleres recientes.
          </p>
        </div>
      </section>

      {/* CERTUS */}
      <section className="py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-0">
              <div className="lg:col-span-5 relative h-64 lg:h-auto">
                <Image
                  src="/CERTUS.jpg"
                  alt="Capacitación en CERTUS - Callao"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="lg:col-span-7">
                <CardHeader>
                  <CardTitle className="text-xl">Capacitación en CERTUS – Callao</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <div className="flex flex-wrap gap-4 text-neutral-600">
                    <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Septiembre 2025</span>
                    <span className="inline-flex items-center gap-2"><MapPinIcon className="h-4 w-4" /> Sede Callao</span>
                  </div>

                  <p>
                    Taller práctico <em>“Bitcoin y las criptomonedas: el nuevo lenguaje del dinero”</em> para estudiantes
                    de CERTUS. Vimos fundamentos de Bitcoin, seguridad personal (custodia propia), riesgos comunes y
                    casos reales de uso en tesorería.
                  </p>

                  <ul className="list-disc pl-5 space-y-1">
                    <li>Marco conceptual: por qué existe Bitcoin y su escasez programada.</li>
                    <li>Buenas prácticas de autocustodia y prevención de estafas.</li>
                    <li>Aplicaciones en finanzas personales y tesorería empresarial.</li>
                  </ul>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <div className="inline-flex items-center gap-2 text-neutral-600">
                      <Shield className="h-4 w-4" /> Enfoque educativo, sin custodia ni captación de fondos.
                    </div>
                    <div className="inline-flex items-center gap-2 text-neutral-600">
                      <FileCheck2 className="h-4 w-4" /> Metodología documentada y auditable.
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-3">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener"
                    >
                      <Button className={`px-4 py-2 text-sm rounded-xl ${gold} ${goldHover} text-black`}>
                        Escríbenos por WhatsApp
                      </Button>
                    </a>
                    <Link href="/" className="text-sm underline hover:opacity-80">Volver al inicio</Link>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="py-8 border-t border-neutral-200 text-center text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" /> +51 941 437 729
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> Lima, Perú
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
