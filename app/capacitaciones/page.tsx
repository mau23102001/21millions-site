"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Calendar, MapPin, Shield, FileCheck2 } from "lucide-react";

export const dynamic = "force-dynamic";

/** ===== Datos de contacto ===== */
const EMAIL = "21millionspe@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/51941437729?text=Hola%20quiero%20agendar%20una%20reunion%20gratuita";

export default function CapacitacionesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // paleta “dorado”
  const gold = "bg-[#C9A227]";
  const goldHover = "hover:bg-[#B38F1B]";
  const goldUnderline = "decoration-[#C9A227]";
  const ctaBtn = `h-9 px-4 rounded-xl text-sm ${gold} ${goldHover} text-black`;

  return (
    <>
      <div className="min-h-screen bg-white text-neutral-900 font-sans">
        {/* Header (compartido / consistente) */}
        <header className="sticky top-0 z-[60] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-neutral-200">
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

            {/* Nav (desktop) */}
            <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-neutral-700">Inicio</Link>
              <Link href="/#servicios" className="hover:text-neutral-700">Servicios</Link>
              <Link href="/#proceso" className="hover:text-neutral-700">Cómo trabajamos</Link>
              <Link href="/#btc-en-perspectiva" className="hover:text-neutral-700">BTC en perspectiva</Link>
              <Link href="/#niif" className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</Link>
              <Link href="/#faq" className="hover:text-neutral-700">FAQ</Link>
              <Link href="/capacitaciones" className="hover:text-neutral-700">Capacitaciones/Charlas</Link>
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
                <Button className={ctaBtn}>Escríbenos por WhatsApp</Button>
              </a>

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

          {/* Mobile overlay menu – opaco y con items */}
          {mobileOpen && (
            <div className="md:hidden fixed inset-0 z-[70] bg-white/95 backdrop-blur-sm overflow-y-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-16 flex items-center justify-between border-b">
                  <span className="text-base font-medium">Menú</span>
                  <button
                    aria-label="Cerrar menú"
                    className="p-2 rounded-lg border"
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="sr-only">Cerrar</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="py-6 flex flex-col gap-4 text-base">
                  <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Inicio</Link>
                  <Link href="/#servicios" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Servicios</Link>
                  <Link href="/#proceso" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Cómo trabajamos</Link>
                  <Link href="/#btc-en-perspectiva" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">BTC en perspectiva</Link>
                  <Link href="/#niif" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</Link>
                  <Link href="/#faq" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">FAQ</Link>
                  <Link href="/capacitaciones" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Capacitaciones/Charlas</Link>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                    Escríbenos por WhatsApp
                  </a>
                </nav>
              </div>
            </div>
          )}
        </header>

        {/* Hero / título de sección */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-amber-50 via-white to-white" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-[10]">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Capacitaciones <span className="text-neutral-400">/</span> Charlas
            </h1>
            <div className={`mt-2 h-1 w-24 rounded ${gold}`}></div>
            <p className="mt-4 max-w-3xl text-neutral-700">
              Compartimos educación y buenas prácticas sobre Bitcoin, autocustodia y tesorería responsable.
              Aquí encontrarás eventos y talleres recientes.
            </p>
          </div>
        </section>

        {/* Listado de actividades */}
        <section className="py-8 lg:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Imagen (siempre visible y con tamaño fijo para Next/Image) */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border bg-white p-2">
                  <Image
                    src="/CERTUS.jpg"
                    alt="Capacitación en CERTUS - Callao"
                    width={960}
                    height={540}
                    className="w-full h-auto rounded-xl object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Detalle */}
              <div className="lg:col-span-7">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">Capacitación en CERTUS – Callao</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-neutral-700">
                    <div className="flex flex-wrap items-center gap-4 text-neutral-600">
                      <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> Septiembre 2025</span>
                      <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Sede Callao</span>
                    </div>

                    <p>
                      Taller práctico <em>“Bitcoin y las criptomonedas: el nuevo lenguaje del dinero”</em> para estudiantes de CERTUS.
                      Conversamos sobre fundamentos de Bitcoin, seguridad personal (custodia propia), riesgos comunes y
                      casos reales de uso en tesorería.
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                      <li>Marco conceptual: por qué existe Bitcoin y cómo funciona su escasez programada.</li>
                      <li>Buenas prácticas de autocustodia y prevención de estafas.</li>
                      <li>Aplicaciones en finanzas personales y tesorería empresarial.</li>
                    </ul>

                    <div className="flex flex-wrap items-center gap-4 text-neutral-600 pt-1">
                      <span className="inline-flex items-center gap-2 text-xs"><Shield className="h-4 w-4" /> Enfoque educativo, sin custodia ni captación de fondos.</span>
                      <span className="inline-flex items-center gap-2 text-xs"><FileCheck2 className="h-4 w-4" /> Metodología documentada y auditable.</span>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener">
                        <Button className={ctaBtn}>Escríbenos por WhatsApp</Button>
                      </a>
                      <Link href="/" className="inline-flex items-center text-sm font-medium hover:opacity-80">
                        Volver al inicio
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
