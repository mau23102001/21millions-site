"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Mail, Phone, MapPin, CalendarDays, GraduationCap, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export const dynamic = "force-dynamic";

/** ===== Contacto ===== */
const EMAIL = "21millionspe@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/51941437729?text=Hola%20quiero%20agendar%20una%20reunion%20gratuita";

export default function CapacitacionesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // paleta “dorado”
  const gold = "bg-[#C9A227]";
  const goldHover = "hover:bg-[#B38F1B]";
  const goldUnderline = "decoration-[#C9A227]";

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-[60] bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Izquierda */}
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Ir al inicio" className="flex items-center gap-3">
              <Image src="/logo-21m.png" alt="21 Millions Enterprises S.A.C." width={40} height={40} priority className="rounded" />
              <span className="font-semibold tracking-tight">21 Millions Enterprises S.A.C.</span>
            </Link>
          </div>

          {/* Nav */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#servicios" className="hover:text-neutral-700">Servicios</Link>
            <Link href="/#proceso" className="hover:text-neutral-700">Cómo trabajamos</Link>
            <Link href="/#btc-en-perspectiva" className="hover:text-neutral-700">BTC en perspectiva</Link>
            <Link href="/#niif" className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</Link>
            <Link href="/#faq" className="hover:text-neutral-700">FAQ</Link>
            <Link href="/capacitaciones" className="font-medium underline underline-offset-4">Capacitaciones/Charlas</Link>
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
              <Button className={`${gold} ${goldHover} text-black`}>Escríbenos por WhatsApp</Button>
            </a>

            {/* Móvil */}
            <button
              aria-label="Abrir menú"
              className="md:hidden p-2 rounded-lg border"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">Abrir menú</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden fixed inset-0 z-[70] bg-white border-t"
            onClick={() => setMobileOpen(false)}
          >
            <div className="px-4 py-6 flex flex-col gap-4 text-base">
              <Link href="/#servicios" className="hover:text-neutral-700">Servicios</Link>
              <Link href="/#proceso" className="hover:text-neutral-700">Cómo trabajamos</Link>
              <Link href="/#btc-en-perspectiva" className="hover:text-neutral-700">BTC en perspectiva</Link>
              <Link href="/#niif" className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</Link>
              <Link href="/#faq" className="hover:text-neutral-700">FAQ</Link>
              <Link href="/capacitaciones" className="hover:text-neutral-700">Capacitaciones/Charlas</Link>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 relative z-[10]">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-start justify-between"
          >
            <div>
              <p className="text-sm text-neutral-500 flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <Link href="/" className="hover:underline">Volver al inicio</Link>
              </p>
              <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                <span className={`underline ${goldUnderline} decoration-8 underline-offset-4`}>Capacitaciones</span> & Charlas
              </h1>
              <p className="mt-4 text-neutral-700 max-w-2xl">
                Compartimos conocimiento y buenas prácticas sobre Bitcoin y tesorería con estudiantes,
                emprendedores y equipos corporativos. Esta sección muestra algunas actividades para
                reforzar la confianza y el impacto social de nuestro trabajo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CERTUS */}
      <section className="py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6">
            <Card className="rounded-2xl overflow-hidden">
              <Image
                src="/CERTUS.jpeg"
                width={1280}
                height={720}
                alt="Taller en CERTUS - Callao por 21 Millions Enterprises"
                className="w-full h-auto object-cover"
                priority
              />
            </Card>
          </div>

          <div className="lg:col-span-6">
            <Card className="rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-xl bg-white shadow-sm border">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Capacitación en CERTUS – Callao</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-4 text-neutral-700">
                <div className="flex flex-wrap gap-4 text-neutral-600">
                  <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Septiembre 2025</span>
                  <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Sede Callao</span>
                </div>
                <p>
                  Taller práctico <em>“Bitcoin y las criptomonedas: el nuevo lenguaje del dinero”</em>
                  para estudiantes de CERTUS. Conversamos sobre fundamentos de Bitcoin, seguridad
                  personal (custodia propia), riesgos comunes y casos reales de uso en tesorería.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Marco conceptual: por qué existe Bitcoin y cómo funciona su escasez programada.</li>
                  <li>Buenas prácticas de autocustodia y prevención de estafas.</li>
                  <li>Aplicaciones en finanzas personales y tesorería empresarial.</li>
                </ul>
                <p className="text-xs text-neutral-500">
                  Agradecemos a CERTUS por la invitación y el interés de los alumnos en formarse con criterio y buenas prácticas.
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener">
                <Button className={`${gold} ${goldHover} text-black`}>Solicitar una charla</Button>
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80">
                <Mail className="h-4 w-4" /> Escríbenos por correo
              </a>
            </div>

            <div className="mt-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +51 941 437 729</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer mínimo */}
      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-neutral-600">
          © {new Date().getFullYear()} 21 Millions Enterprises S.A.C.
        </div>
      </footer>
    </div>
  );
}
