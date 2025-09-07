"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

import {
  Shield,
  LineChart as LineChartIcon,
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

// recharts (alias para no chocar con LineChart de lucide)
import {
  LineChart as RLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export const dynamic = "force-dynamic";

/** ===== Datos de contacto ===== */
const EMAIL = "21millionspe@gmail.com";
const WHATSAPP_LINK =
  "https://wa.me/51941437729?text=Hola%20quiero%20agendar%20una%20reunion%20gratuita";

/** ===== Datos para el gráfico (aprox + proyección ilustrativa) ===== */
const btcSeries = [
  { year: 2010, real: 0.05,   projection: null },
  { year: 2013, real: 100,    projection: null },
  { year: 2017, real: 19000,  projection: null },
  { year: 2020, real: 29000,  projection: null },
  { year: 2021, real: 69000,  projection: null },
  { year: 2022, real: 16500,  projection: null },
  { year: 2024, real: 73000,  projection: null },
  { year: 2025, real: 100000, projection: 100000 }, // actualizamos 2025 a 100k
  { year: 2030, real: null,   projection: 250000 },
  { year: 2035, real: null,   projection: 750000 },
  { year: 2040, real: null,   projection: 1500000 },
  { year: 2045, real: null,   projection: 3000000 },
];

function GrowthChart() {
  const fmtMoney = (n: number) =>
    "$" + Number(n).toLocaleString("en-US", { maximumFractionDigits: 0 });

  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="text-lg font-semibold">Evolución de Bitcoin</h3>
        <span className="text-xs text-neutral-500">Valores aprox. · escala log</span>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RLineChart data={btcSeries} margin={{ top: 8, right: 12, bottom: 8, left: 12 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis
              scale="log"
              domain={["dataMin", "auto"]}
              allowDecimals={false}
              width={84} // asegura que se vea “1,000,000”
              tickFormatter={(v) => fmtMoney(Number(v))}
            />
            <Tooltip
              formatter={(v) => [fmtMoney(Number(v)), "Precio"]}
              labelFormatter={(l) => `Año ${l}`}
            />
            <Legend />
            <Line type="monotone" dataKey="real" name="Histórico" dot={false} isAnimationActive />
            <Line
              type="monotone"
              dataKey="projection"
              name="Proyección (ilustrativa)"
              strokeDasharray="6 6"
              dot={false}
              isAnimationActive
            />
          </RLineChart>
        </ResponsiveContainer>
      </div>

      <p className="mt-2 text-xs text-neutral-500">
        La línea discontinua es una proyección ilustrativa inspirada en la tesis de adopción de Michael
        Saylor (Strategy). No es recomendación de inversión.
      </p>
    </div>
  );
}

export default function Landing21Millions() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tab, setTab] = useState<"personas" | "empresas">("empresas");

  // paleta “dorado”
  const gold = "bg-[#C9A227]";
  const goldHover = "hover:bg-[#B38F1B]";
  const goldUnderline = "decoration-[#C9A227]";

  return (
    <>
      <div className="min-h-screen bg-white text-neutral-900 font-sans">
        {/* Header */}
        <header className="sticky top-0 z-[60] bg-white/80 backdrop-blur border-b border-neutral-200">
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
              <a href="#servicios" className="hover:text-neutral-700">Servicios</a>
              <a href="#proceso" className="hover:text-neutral-700">Cómo trabajamos</a>
              <a href="#btc-en-perspectiva" className="hover:text-neutral-700">BTC en perspectiva</a>
              <a href="#niif" className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</a>
              <a href="#faq" className="hover:text-neutral-700">FAQ</a>
            </nav>

            {/* Derecha: CTA */}
            <div className="flex items-center gap-3">
              <a
                aria-label="Escríbenos por WhatsApp"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener"
                className="hidden sm:inline-block"
              >
                <Button className={`${gold} ${goldHover} text-black`}>
                  Escríbenos por WhatsApp
                </Button>
              </a>
              <a href={`mailto:${EMAIL}`} className="sr-only">Escríbenos por email</a>

              {/* Botón hamburguesa (móvil) */}
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

          {/* Menú móvil */}
          {mobileOpen && (
            <nav
              id="mobile-menu"
              className="md:hidden fixed inset-0 z-[70] bg-white border-t"
              onClick={() => setMobileOpen(false)}
            >
              <div className="px-4 py-6 flex flex-col gap-4 text-base">
                <a href="#servicios" className="hover:text-neutral-700">Servicios</a>
                <a href="#proceso" className="hover:text-neutral-700">Cómo trabajamos</a>
                <a href="#btc-en-perspectiva" className="hover:text-neutral-700">BTC en perspectiva</a>
                <a href="#niif" className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</a>
                <a href="#faq" className="hover:text-neutral-700">FAQ</a>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-[10]">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-7">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  Tesorería inteligente en Bitcoin para{" "}
                  <span className={`underline ${goldUnderline} decoration-8 underline-offset-4`}>personas</span> y{" "}
                  <span className={`underline ${goldUnderline} decoration-8 underline-offset-4`}>empresas</span>.
                </h1>
                <p className="mt-6 text-lg text-neutral-700 max-w-2xl">
                  Te ayudamos a convertir caja ociosa en una estrategia de ahorro/tesorería de largo plazo,
                  con reglas claras, seguridad y cumplimiento local. <strong>Protege tu poder de compra
                  frente a la inflación</strong> integrando Bitcoin con criterio y buen gobierno.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contacto">
                    <Button size="lg" className={`${gold} ${goldHover} text-black`}>
                      Agenda una reunión gratuita
                    </Button>
                  </a>
                  <a href="#servicios" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80">
                    Ver servicios <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" /> Solo enfoque no custodia
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="h-4 w-4" /> Metodología documentada y auditable
                  </div>
                </div>
              </div>

              {/* === Card educativo: ¿Qué es Bitcoin? === */}
              <div className="lg:col-span-5">
                <Card className="shadow-xl rounded-2xl text-center">
                  <CardHeader className="flex flex-col items-center gap-3">
                    <Image
                      src="/btc-icon.png"
                      alt="Bitcoin"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <CardTitle className="text-xl tracking-tight">¿Qué es Bitcoin?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-neutral-700 font-sans">
                    <p>
                      Bitcoin <strong>no es una empresa</strong>. Es una{" "}
                      <strong>tecnología digital independiente</strong>, abierta, más <strong>escasa</strong> cada 4 años y descentralizada.
                    </p>
                    <p>
                      Cualquier persona puede adquirir y resguardar Bitcoin como <strong>reserva de valor global</strong>.
                    </p>
                    <div className="flex flex-col items-start gap-2 text-neutral-600 text-xs mt-2">
                      <div className="flex items-center gap-2">
                        <Globe className="h-3.5 w-3.5" />
                        Emisión limitada: solo existen 21 millones de Bitcoin
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-3.5 w-3.5" />
                        Seguridad respaldada por su red global
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="relative z-[10] border-y border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {[
              "Política de tesorería",
              "Caja mínima operativa y excedente",
              "Modelo contable (NIIF Perú)",
              "Tus Bitcoin · custodia propia",
            ].map((t, i) => (
              <div key={i} className="text-center text-sm text-neutral-600">
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* =================== SERVICIOS =================== */}
        <section id="servicios" className="relative z-[300] isolate py-16 lg:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Servicios</h2>
              <p className="mt-2 text-neutral-700">
                Portafolios y tesorerías con estrategia clara, documentación y seguimiento periódico.
              </p>
              {/* Se elimina “tab actual” */}
            </div>

            {/* Tabs */}
            <div className="mt-6 max-w-md">
              <div
                role="tablist"
                aria-label="Cambiar tipo de cliente"
                className="inline-flex w-full rounded-xl border bg-neutral-50 p-1 shadow-sm"
              >
                <button
                  id="tab-personas"
                  type="button"
                  role="tab"
                  aria-selected={tab === "personas"}
                  aria-controls="panel-personas"
                  onClick={() => setTab("personas")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setTab("personas");
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition w-full cursor-pointer select-none ${
                    tab === "personas"
                      ? "bg-white shadow font-medium text-neutral-800"
                      : "text-neutral-600 hover:text-neutral-800"
                  }`}
                >
                  <User className="h-4 w-4" />
                  Personas naturales
                </button>

                <button
                  id="tab-empresas"
                  type="button"
                  role="tab"
                  aria-selected={tab === "empresas"}
                  aria-controls="panel-empresas"
                  onClick={() => setTab("empresas")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setTab("empresas");
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition w-full cursor-pointer select-none ${
                    tab === "empresas"
                      ? "bg-white shadow font-medium text-neutral-800"
                      : "text-neutral-600 hover:text-neutral-800"
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  Empresas
                </button>
              </div>
            </div>

            {/* Panel (solo uno montado) */}
            {tab === "personas" ? (
              <div id="panel-personas" role="tabpanel" aria-labelledby="tab-personas" className="mt-8 grid md:grid-cols-3 gap-6">
                <Card className="rounded-2xl">
                  <CardHeader><CardTitle className="text-lg">Asesoría Personal</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>Planificación financiera y tesorería adaptada a personas naturales.</p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader><CardTitle className="text-lg">Ahorro en BTC</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>Estrategias de ahorro a largo plazo con Bitcoin como reserva de valor.</p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader><CardTitle className="text-lg">Seguridad y Custodia</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>Recomendaciones sobre almacenamiento seguro y control personal.</p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <div id="panel-empresas" role="tabpanel" aria-labelledby="tab-empresas" className="mt-8 grid md:grid-cols-3 gap-6">
                <Card className="rounded-2xl">
                  <CardHeader><CardTitle className="text-lg">Diagnóstico de Tesorería</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>Revisión de caja, políticas actuales y oportunidades de asignación.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Caja mínima operativa</li>
                      <li>Caja excedente</li>
                      <li>Mapa de riesgos</li>
                      <li>Ventanas de compra</li>
                      <li>Propuesta de % inicial</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader><CardTitle className="text-lg">Política BTC en el Balance</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>Documento formal para comité: objetivos, límites, rebalance y custodia.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Gobernanza &amp; firmas</li>
                      <li>NIIF (activo intangible) y revelaciones</li>
                      <li>Procedimientos operativos</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader><CardTitle className="text-lg">Implementación &amp; Seguimiento</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>Implementación práctica con <strong>custodia en manos del cliente</strong> y acompañamiento periódico.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Plan operativo de compras (DCA / ventanas) y rebalance</li>
                      <li>Configuración de monederos y/o multisig (si aplica)</li>
                      <li>Procedimiento de firma, resguardo y bitácora de movimientos</li>
                      <li>Acompañamiento trimestral y revisión documental básica</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
        {/* ================= FIN SERVICIOS ================= */}

        {/* Proceso */}
        <section id="proceso" className="py-16 lg:py-24 bg-neutral-50 scroll-mt-24 relative z-[10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Cómo trabajamos</h2>
              <p className="mt-2 text-neutral-700">
                Mismo flujo para personas y empresas: ruta clara, documentada y auditable de principio a fin.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, title: "1. Diagnóstico", desc: "Balance, flujos y caja ociosa. Identificamos % prudente de inicio." },
                { icon: LineChartIcon, title: "2. Estrategia", desc: "Calendario de compras, rebalance y umbrales; sin trading especulativo." },
                { icon: Shield, title: "3. Custodia", desc: "Arquitectura de seguridad: cold/multisig, roles y procedimientos." },
                { icon: FileCheck2, title: "4. Reportes", desc: "Estados trimestrales, revelaciones NIIF y anexo de compliance." },
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

        {/* BTC en perspectiva (Gráfico) */}
        <section id="btc-en-perspectiva" className="py-16 lg:py-24 scroll-mt-24 relative z-[10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold tracking-tight">Bitcoin en perspectiva</h2>
                <p className="mt-2 text-neutral-700">
                  Oferta limitada (21 millones), halvings cada ~4 años y un mercado global 24/7 han
                  impulsado un crecimiento de largo plazo. La escala log ayuda a ver la tendencia.
                </p>
                <ul className="mt-4 text-sm text-neutral-700 list-disc pl-5">
                  <li>Oferta fija de 21M</li>
                  <li>Red descentralizada y abierta</li>
                  <li>Custodia propia y liquidez global</li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                <GrowthChart />
              </div>
            </div>
          </div>
        </section>

        {/* Contabilidad & Cumplimiento */}
        <section id="niif" className="py-16 lg:py-24 scroll-mt-24 relative z-[10]">
          <div className="max-w-7xl mx_auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-6">
                <h2 className="text-3xl font-bold tracking-tight">Contabilidad &amp; Cumplimiento</h2>
                <p className="mt-3 text-neutral-700">
                  Tratamos a Bitcoin como activo intangible (NIIF) con notas de revelación y políticas
                  internas alineadas a auditorías y a la documentación notarial de tu organización.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-700 list-disc pl-5">
                  <li>Modelo contable NIIF para BTC (Perú)</li>
                  <li>Políticas internas y notas de revelación</li>
                  <li>Formato de conciliación y valorización</li>
                  <li>Acta/carta de directorio para notaría (cuando corresponda)</li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <Card className="rounded-2xl">
                  <CardHeader><CardTitle className="text-lg">Documentos incluidos</CardTitle></CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <Scale className="h-4 w-4" /> Política de Tesorería BTC (resumen ejecutivo)
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCheck2 className="h-4 w-4" /> Plantillas de políticas y revelaciones NIIF
                    </div>
                    <div className="flex items-center gap-2">
                      <Banknote className="h-4 w-4" /> Formato de asientos y conciliación (ejemplo)
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" /> Guía POE de operaciones internas con BTC
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 lg:py-24 scroll-mt-24 relative z-[10]">
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
                  <AccordionContent>Sí. Aceptamos S/., USD o Bitcoin, según el alcance del servicio.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="a5">
                  <AccordionTrigger>¿Qué problema/dolor solucionamos como empresa?</AccordionTrigger>
                  <AccordionContent>
                    Ayudamos a personas y empresas a <strong>dejar de perder poder adquisitivo</strong> por la inflación
                    y el exceso de liquidez sin estrategia. Para personas, estructuramos un plan de ahorro en Bitcoin
                    que protege el valor de su esfuerzo y ordena su custodia. Para empresas, definimos una política de
                    tesorería que separa <em>caja mínima operativa</em> de <em>caja excedente</em>, establece reglas
                    claras de compra y resguardo, y reduce riesgos operativos y contables. El costo de no actuar es la
                    erosión anual del dinero y decisiones ad-hoc; nuestro servicio te da un sistema sencillo, medible y
                    ejecutable hoy.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Contacto */}
        <section id="contacto" className="py-16 lg:py-24 bg-neutral-900 text-white scroll-mt-24 relative z-[10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-3xl font-bold tracking-tight">Agenda una reunión gratuita</h2>
                <p className="mt-3 text-neutral-300 max-w-2xl">
                  Conversemos 30 minutos para entender tu situación y proponerte una ruta de acción clara.
                </p>
                <div className="mt-6 space-y-2 text-sm text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {EMAIL}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> +51 941 437 729
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Lima, Perú
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <Card className="bg-white text-neutral-900 rounded-2xl">
                  <CardHeader><CardTitle className="text-lg">Déjanos tus datos</CardTitle></CardHeader>
                  <CardContent>
                    <form method="POST" action="https://formspree.io/f/your-id" className="space-y-4">
                      <input name="name" required placeholder="Nombre y apellido" className="w-full border rounded-xl px-4 py-3" />
                      <input name="email" type="email" required placeholder="Correo" className="w-full border rounded-xl px-4 py-3" />
                      <input name="company" placeholder="Empresa (opcional)" className="w-full border rounded-xl px-4 py-3" />
                      <textarea name="message" rows={4} placeholder="Cuéntanos breve tu caso" className="w-full border rounded-xl px-4 py-3" />
                      <Button type="submit" className={`w-full ${gold} ${goldHover} text-black`}>
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
      </div>
    </>
  );
}
