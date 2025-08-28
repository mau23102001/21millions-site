"use client";

import React, { useState } from "react";
import Image from "next/image";
import Script from "next/script";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";

import {
  CheckCircle,
  Shield,
  LineChart,
  Briefcase,
  Building2,
  User,
  Banknote,
  FileCheck2,
  Scale,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";

export const dynamic = "force-dynamic";

/** ===== Datos de contacto (ajusta por los reales) ===== */
const EMAIL = "21millionspe@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/51999999999?text=Hola%20quiero%20agendar%20un%20diagnostico";

/** ===== Página ===== */
export default function Landing21Millions() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Estado CONTROLADO para los tabs de Servicios
  const [tab, setTab] = useState<"personas" | "empresas">("empresas");

  return (
    <>
      <div className="min-h-screen bg-white text-neutral-900">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Izquierda: logo + nombre */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo-21m.png"
                alt="21 Millions Enterprises S.A.C."
                width={40}
                height={40}
                priority
                className="rounded"
              />
              <span className="font-semibold tracking-tight">
                21 Millions Enterprises S.A.C.
              </span>
            </div>

            {/* Centro: navegación (desktop) */}
            <nav
              aria-label="Navegación principal"
              className="hidden md:flex items-center gap-6 text-sm"
            >
              <a href="#servicios" className="hover:text-neutral-700">
                Servicios
              </a>
              <a href="#proceso" className="hover:text-neutral-700">
                Cómo trabajamos
              </a>
              <a href="#niif" className="hover:text-neutral-700">
                NIIF &amp; SUNAT
              </a>
              <a href="#faq" className="hover:text-neutral-700">
                FAQ
              </a>
            </nav>

            {/* Derecha: CTA */}
            <div className="flex items-center gap-3">
              <a
                aria-label="Agendar diagnóstico por WhatsApp"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener"
                className="hidden sm:inline-block"
              >
                <Button className="bg-brand hover:bg-brand-dark text-black">
                  Agenda diagnóstico
                </Button>
              </a>
              <a href={`mailto:${EMAIL}`} className="sr-only">
                Escríbenos por email
              </a>

              {/* Botón hamburguesa (móvil) */}
              <button
                aria-label="Abrir menú"
                className="md:hidden p-2 rounded-lg border"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <span className="sr-only">Abrir menú</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          {mobileOpen && (
            <nav id="mobile-menu" className="md:hidden border-t">
              <div className="px-4 py-3 flex flex-col gap-3 text-sm">
                <a href="#servicios" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  Servicios
                </a>
                <a href="#proceso" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  Cómo trabajamos
                </a>
                <a href="#niif" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  NIIF &amp; SUNAT
                </a>
                <a href="#faq" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  FAQ
                </a>
                <a href="#contacto" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                  Contacto
                </a>
              </div>
            </nav>
          )}
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* Fondo detrás */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-yellow-50 via-white to-white" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-10 items-center"
            >
              {/* Texto principal */}
              <div className="lg:col-span-7">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  Tesorería inteligente en Bitcoin para{" "}
                  <span className="underline decoration-yellow-400 decoration-8 underline-offset-4">personas</span> y{" "}
                  <span className="underline decoration-yellow-400 decoration-8 underline-offset-4">empresas</span>.
                </h1>
                <p className="mt-6 text-lg text-neutral-700 max-w-2xl">
                  Convertimos caja ociosa en una política de reserva de valor con enfoque de largo plazo.
                  Diseño de estrategia, acompañamiento contable y compliance local.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contacto">
                    <Button size="lg" className="bg-brand hover:bg-brand-dark text-black">
                      Agenda tu diagnóstico gratuito
                    </Button>
                  </a>
                  <a href="#servicios" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80">
                    Ver servicios <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" /> Enfoque no-custodia / sin trading por cuenta del cliente
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="h-4 w-4" /> Metodología documentada y auditable
                  </div>
                </div>
              </div>

              {/* Tarjeta lateral */}
              <div className="lg:col-span-5">
                <Card className="shadow-xl rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-xl">Caso rápido: Asignación 5% de caja</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Caja disponible</span>
                      <strong>S/ 4,000,000</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Asignación inicial</span>
                      <strong>5% (S/ 200,000)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Estrategia</span>
                      <span>DCAs trimestrales + rebalance</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Horizonte</span>
                      <span>36–60 meses</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-600">
                      <CheckCircle className="h-4 w-4" /> Política de inversión aprobada por comité de tesorería
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-y border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {["Política de tesorería", "Análisis de flujo de caja", "Modelo contable NIIF", "Compliance SUNAT"].map(
              (t, i) => (
                <div key={i} className="text-center text-sm text-neutral-600">
                  {t}
                </div>
              )
            )}
          </div>
        </section>

        {/* ================== SERVICIOS (AJUSTE MÍNIMO) ================== */}
        <section id="servicios" className="py-16 lg:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Servicios</h2>
              <p className="mt-2 text-neutral-700">
                Portafolios y tesorerías con estrategia clara, documentación y seguimiento periódico.
              </p>
            </div>

            <div className="mt-8 relative">
              <Tabs value={tab} onValueChange={(v) => setTab(v as "personas" | "empresas")}>
                <TabsList className="grid grid-cols-2 max-w-md relative z-20">
                  <TabsTrigger value="personas" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Personas naturales
                  </TabsTrigger>
                  <TabsTrigger value="empresas" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    Empresas
                  </TabsTrigger>
                </TabsList>

                {/* Personas */}
                <TabsContent value="personas" className="mt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-lg">Plan Ahorro BTC</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>Definición de % de ingresos, calendario de compras y custodia personal segura.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Estrategia DCA y umbrales</li>
                          <li>Configuración de billeteras (cold / multisig)</li>
                          <li>Checklist de seguridad</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-lg">Plan Patrimonial</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>Marco de objetivos a 5–10 años integrando BTC como reserva personal.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Gestión de riesgo y liquidez</li>
                          <li>Plan de herencia y acceso</li>
                          <li>Rebalanceo anual</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-lg">Onboarding & Seguridad</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>Sesión guiada: compras, transferencias y registros de respaldo.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Buenas prácticas KYC/AML</li>
                          <li>Pruebas de restauración</li>
                          <li>Plan de incidentes</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Empresas */}
                <TabsContent value="empresas" className="mt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-lg">Diagnóstico de Tesorería</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>Revisión de caja, políticas actuales y oportunidades de asignación.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Mapa de riesgos</li>
                          <li>Ventanas de compra</li>
                          <li>Propuesta de % inicial</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-lg">Política BTC en el Balance</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>Documento formal para comité: objetivos, límites, rebalance y custodia.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Gobernanza & firmas</li>
                          <li>NIIF (activo intangible) y revelaciones</li>
                          <li>Procedimientos operativos</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-lg">Implementación & Seguimiento</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-2">
                        <p>Acompañamiento en la ejecución y reportes trimestrales para directorio.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>KPIs y tablero</li>
                          <li>Compliance SUNAT</li>
                          <li>Auditoría interna</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        {/* ================== FIN SERVICIOS ================== */}

        {/* Proceso */}
        <section id="proceso" className="py-16 lg:py-24 bg-neutral-50 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Cómo trabajamos</h2>
              <p className="mt-2 text-neutral-700">Ruta clara, documentada y auditable de principio a fin.</p>
            </div>
            <div className="mt-10 grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Briefcase,
                  title: "1. Diagnóstico",
                  desc: "Balance, flujos y caja ociosa. Identificamos % prudente de inicio.",
                },
                {
                  icon: LineChart,
                  title: "2. Estrategia",
                  desc: "Calendario de compras, rebalance y umbrales; sin trading especulativo.",
                },
                {
                  icon: Shield,
                  title: "3. Custodia",
                  desc: "Arquitectura de seguridad: cold/multisig, roles y procedimientos.",
                },
                {
                  icon: FileCheck2,
                  title: "4. Reportes",
                  desc: "Estados trimestrales, revelaciones NIIF y anexo de compliance.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="p-2 rounded-xl bg-white shadow-sm border">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-700">{desc}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* NIIF & SUNAT */}
        <section id="niif" className="py-16 lg:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-6">
                <h2 className="text-3xl font-bold tracking-tight">NIIF & SUNAT sin dolor</h2>
                <p className="mt-3 text-neutral-700">
                  Tratamos a Bitcoin como activo intangible (NIIF), con notas de revelación y políticas de
                  depreciación/impairment cuando corresponda. Documentamos el criterio y el procedimiento contable para
                  auditorías.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-700 list-disc pl-5">
                  <li>Guía de registro contable y anexos</li>
                  <li>Revelaciones y políticas internas</li>
                  <li>Checklist tributario SUNAT</li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Documentos incluidos</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4" /> Política de Tesorería BTC
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="h-4 w-4" /> Minuta para comité de tesorería
                    </div>
                    <div className="flex items-center gap-2">
                      <Banknote className="h-4 w-4" /> Modelo de asientos contables (ejemplo)
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" /> Procedimiento operativo estándar (POE)
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 lg:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Preguntas frecuentes</h2>
              <p className="mt-2 text-neutral-700">Respuestas claras para decisiones informadas.</p>
            </div>
            <div className="mt-8">
              <Accordion>
                <AccordionItem value="a1">
                  <AccordionTrigger>¿Ustedes compran o custodian Bitcoin por mí?</AccordionTrigger>
                  <AccordionContent>
                    No. Somos consultores. Diseñamos la estrategia y te guiamos para que compres y custodies tú (o tu
                    empresa) con buenas prácticas y controles internos.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a2">
                  <AccordionTrigger>¿Cómo se refleja en la contabilidad (NIIF)?</AccordionTrigger>
                  <AccordionContent>
                    En general, como activo intangible, con revelaciones y políticas de valuación/impairment
                    documentadas. Entregamos formatos y anexos de soporte para auditoría.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a3">
                  <AccordionTrigger>¿Qué porcentaje recomiendan asignar?</AccordionTrigger>
                  <AccordionContent>
                    Depende de tu caja, tu tolerancia al riesgo y tu horizonte. Empezamos con diagnósticos conservadores
                    (1–5%) y revisamos trimestralmente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a4">
                  <AccordionTrigger>¿Puedo pagar en soles, dólares o Bitcoin?</AccordionTrigger>
                  <AccordionContent>Sí. Aceptamos S/., USD o BTC, según el alcance del servicio.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Contacto */}
        <section id="contacto" className="py-16 lg:py-24 bg-neutral-900 text-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-bold tracking-tight">Agenda un diagnóstico gratuito</h2>
                <p className="mt-3 text-neutral-300 max-w-2xl">
                  Conversemos 30 minutos para entender tu situación y proponerte una ruta de acción clara.
                </p>
                <div className="mt-6 space-y-2 text-sm text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {EMAIL}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> +51 999 999 999
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Lima, Perú
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <Card className="bg-white text-neutral-900 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Déjanos tus datos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Si usas Formspree, reemplaza your-id */}
                    <form method="POST" action="https://formspree.io/f/your-id" className="space-y-4">
                      <input name="name" required placeholder="Nombre y apellido" className="w-full border rounded-xl px-4 py-3" />
                      <input name="email" type="email" required placeholder="Correo" className="w-full border rounded-xl px-4 py-3" />
                      <input name="company" placeholder="Empresa (opcional)" className="w-full border rounded-xl px-4 py-3" />
                      <textarea name="message" rows={4} placeholder="Cuéntanos breve tu caso" className="w-full border rounded-xl px-4 py-3" />
                      <Button type="submit" className="w-full bg-brand hover:bg-brand-dark text-black">
                        Enviar
                      </Button>
                    </form>
                    <p className="mt-3 text-xs text-neutral-500">Al enviar aceptas nuestra política de privacidad.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-neutral-600">
              © {new Date().getFullYear()} 21 Millions Enterprises S.A.C. — Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:opacity-80">Términos</a>
              <a href="#" className="hover:opacity-80">Privacidad</a>
              <a href="#contacto" className="hover:opacity-80">Contacto</a>
            </div>
          </div>
          <div className="mt-3 text-center text-xs text-neutral-500 px-4">
            RUC 2060XXXXXXX · 21 Millions Enterprises S.A.C. · Lima, Perú. No brindamos asesoría de inversión. Servicio de consultoría y acompañamiento.
          </div>
        </footer>
      </div>

      {/* Schema.org FAQPage (seguro con next/script) */}
      <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "¿Ustedes compran o custodian Bitcoin por mí?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "No. Somos consultores. Diseñamos la estrategia y te guiamos para que compres y custodies tú (o tu empresa) con buenas prácticas y controles internos.",
              },
            },
            {
              "@type": "Question",
              name: "¿Cómo se refleja en la contabilidad (NIIF)?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "En general, como activo intangible, con revelaciones y políticas de valuación/impairment documentadas. Entregamos formatos y anexos de soporte para auditoría.",
              },
            },
          ],
        })}
      </Script>
    </>
  );
}
