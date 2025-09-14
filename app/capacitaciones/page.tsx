"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Calendar, MapPin, X } from "lucide-react";

export const dynamic = "force-dynamic";

/** ===== Datos ===== */
const EMAIL = "21millionspe@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/51941437729?text=Hola%20quiero%20agendar%20una%20reunion%20gratuita";

/** ===== Estilos comunes ===== */
const ctaSm = "h-9 px-4 rounded-xl text-sm bg-[#C9A227] hover:bg-[#B38F1B] text-black";

export default function CapacitacionesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white text-neutral-900 font-sans">
        {/* Header */}
        <header className="sticky top-0 z-[60] border-b border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Izquierda */}
            <div className="flex items-center gap-3">
              <Image src="/logo-21m.png" alt="21 Millions Enterprises S.A.C." width={40} height={40} priority className="rounded" />
              <span className="font-semibold tracking-tight">21 Millions Enterprises S.A.C.</span>
            </div>

            {/* Nav desktop (enlaza a secciones del home) */}
            <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-neutral-700">Inicio</Link>
              <Link href="/#servicios" className="hover:text-neutral-700">Servicios</Link>
              <Link href="/#proceso" className="hover:text-neutral-700">Cómo trabajamos</Link>
              <Link href="/#btc-en-perspectiva" className="hover:text-neutral-700">BTC en perspectiva</Link>
              <Link href="/#niif" className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</Link>
              <Link href="/#faq" className="hover:text-neutral-700">FAQ</Link>
              <Link href="/capacitaciones" className="hover:text-neutral-700">Capacitaciones/Charlas</Link>
            </nav>

            {/* CTA + Burger */}
            <div className="flex items-center gap-3">
              <a aria-label="Escríbenos por WhatsApp" href={WHATSAPP_LINK} target="_blank" rel="noopener" className="hidden sm:inline-block">
                <Button className={ctaSm}>Escríbenos por WhatsApp</Button>
              </a>

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

          {/* Overlay móvil */}
          {mobileOpen && (
            <div className="md:hidden fixed inset-0 z-[70] bg-white/95 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <span className="text-base font-medium">Menú</span>
                <button aria-label="Cerrar menú" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg border">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="px-4 sm:px-6 lg:px-8 pb-12">
                <ul className="flex flex-col gap-4 text-lg">
                  <li><Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Inicio</Link></li>
                  <li><Link href="/#servicios" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Servicios</Link></li>
                  <li><Link href="/#proceso" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Cómo trabajamos</Link></li>
                  <li><Link href="/#btc-en-perspectiva" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">BTC en perspectiva</Link></li>
                  <li><Link href="/#niif" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</Link></li>
                  <li><Link href="/#faq" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">FAQ</Link></li>
                  <li>
                    <Link href="/capacitaciones" onClick={() => setMobileOpen(false)} className="hover:text-neutral-700">
                      Capacitaciones/Charlas
                    </Link>
                  </li>
                  <li className="pt-2">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener" onClick={() => setMobileOpen(false)}>
                      <Button className={ctaSm}>Escríbenos por WhatsApp</Button>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </header>

        {/* Hero simple */}
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="underline decoration-[#C9A227] decoration-8 underline-offset-4">Capacitaciones</span> / Charlas
            </h1>
            <p className="mt-3 max-w-3xl text-neutral-700">
              Compartimos educación y buenas prácticas sobre Bitcoin, autocustodia y tesorería responsable. Aquí encontrarás eventos y talleres recientes.
            </p>
          </div>
        </section>

        {/* CERTUS card */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="rounded-2xl">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {/* Imagen */}
                  <div className="relative w-full overflow-hidden rounded-xl border bg-white">
                    {/* Asegúrate de tener /public/CERTUS.jpg */}
                    <Image
                      src="/CERTUS.jpg"
                      alt="Capacitación en CERTUS - Callao"
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>

                  {/* Texto */}
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight">Capacitación en CERTUS — Callao</h2>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-neutral-600">
                      <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Septiembre 2025</div>
                      <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Sede Callao</div>
                    </div>

                    <p className="mt-4 text-neutral-700">
                      Taller práctico <em>“Bitcoin y las criptomonedas: el nuevo lenguaje del dinero”</em> para estudiantes de CERTUS.
                      Conversamos sobre fundamentos de Bitcoin, seguridad personal (custodia propia), riesgos comunes y casos reales de uso en tesorería.
                    </p>

                    <ul className="mt-4 list-disc pl-5 text-neutral-700 space-y-1">
                      <li>Marco conceptual: por qué existe Bitcoin y cómo funciona su escasez programada.</li>
                      <li>Buenas prácticas de autocustodia y prevención de estafas.</li>
                      <li>Aplicaciones en finanzas personales y tesorería empresarial.</li>
                    </ul>

                    <div className="mt-5 flex flex-wrap items-center gap-4">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener">
                        <Button className={ctaSm}>Escríbenos por WhatsApp</Button>
                      </a>
                      <Link href="/" className="text-sm underline hover:opacity-80">Volver al inicio</Link>
                    </div>

                    <p className="mt-3 text-xs text-neutral-500 flex flex-wrap items-center gap-4">
                      <span>Enfoque educativo, sin custodia ni captación de fondos.</span>
                      <span>Metodología documentada y auditable.</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
