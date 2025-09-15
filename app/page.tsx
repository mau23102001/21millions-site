"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

// recharts
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

/** ===== Formspree ===== */
const FORMSPREE_ID = "mdklypye";

/** ===== Datos para el gráfico (aprox + proyección ilustrativa) ===== */
const btcSeries = [
  { year: 2010, real: 0.05, projection: null },
  { year: 2013, real: 100, projection: null },
  { year: 2017, real: 19000, projection: null },
  { year: 2020, real: 29000, projection: null },
  { year: 2021, real: 69000, projection: null },
  { year: 2022, real: 16500, projection: null },
  { year: 2024, real: 73000, projection: null },
  { year: 2025, real: 100000, projection: 100000 },
  { year: 2030, real: null, projection: 250000 },
  { year: 2035, real: null, projection: 750000 },
  { year: 2040, real: null, projection: 1500000 },
  { year: 2045, real: null, projection: 3000000 },
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
              width={84}
              tickFormatter={(v) => fmtMoney(Number(v))}
            />
            <Tooltip formatter={(v) => [fmtMoney(Number(v)), "Precio"]} labelFormatter={(l) => `Año ${l}`} />
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
        La línea discontinua es una proyección ilustrativa inspirada en tesis de adopción. No es
        recomendación de inversión.
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

  // Evita scroll del body cuando el menú móvil está abierto
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

  // tracking CTA (?cta=...) y mensaje por defecto del formulario
  const [ctaParam, setCtaParam] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const v = new URLSearchParams(window.location.search).get("cta");
      setCtaParam(v);
    }
  }, []);

  // ======= Estado del formulario (contacto) =======
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Precarga mensaje si llega ?cta=plan-inicio
  useEffect(() => {
    if (ctaParam === "plan-inicio" && !form.message) {
      setForm((f) => ({ ...f, message: "Hola, quiero mi plan de inicio." }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctaParam]);

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          cta: ctaParam ?? "",
          _subject: "Nuevo contacto — 21 Millions Enterprises",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        const msg =
          (Array.isArray(data?.errors) && data.errors.map((x: any) => x.message).join(", ")) ||
          "No se pudo enviar. Intenta nuevamente.";
        setErrorMsg(msg);
        setStatus("error");
      }
    } catch {
      setErrorMsg("Error de red al enviar. Revisa tu conexión.");
      setStatus("error");
    }
  }

  return (
    <>
      <div className="min-h-screen bg-white text-neutral-900 font-sans">
        {/* Header */}
        <header className="sticky top-0 z-[60] bg-white/80 backdrop-blur border-b border-neutral-200">
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

            {/* Nav */}
            <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6 text-sm">
              <a href="#servicios" className="hover:text-neutral-700">Servicios</a>
              <a href="#proceso" className="hover:text-neutral-700">Cómo trabajamos</a>
              <a href="#btc-en-perspectiva" className="hover:text-neutral-700">BTC en perspectiva</a>
              <a href="#niif" className="hover:text-neutral-700">Contabilidad &amp; Cumplimiento</a>
              <a href="#faq" className="hover:text-neutral-700">FAQ</a>
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
                {/* compacto */}
                <Button className={`${gold} ${goldHover} text-black px-4 py-2 rounded-xl text-sm`}>
                  Escríbenos por WhatsApp
                </Button>
              </a>
              <a href={`mailto:${EMAIL}`} className="sr-only">
                Escríbenos por email
              </a>

              {/* Móvil */}
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
                  <a href="#servicios" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                    Servicios
                  </a>
                  <a href="#proceso" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                    Cómo trabajamos
                  </a>
                  <a href="#btc-en-perspectiva" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                    BTC en perspectiva
                  </a>
                  <a href="#niif" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                    Contabilidad &amp; Cumplimiento
                  </a>
                  <a href="#faq" className="hover:text-neutral-700" onClick={() => setMobileOpen(false)}>
                    FAQ
                  </a>
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
                    <Button className={`${gold} ${goldHover} text-black w-full`}>
                      Escríbenos por WhatsApp
                    </Button>
                  </a>
                </nav>
              </div>
            </div>
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
                  Convertimos tu caja ociosa en una estrategia de tesorería de largo plazo, con reglas claras, seguridad
                  y cumplimiento local. Integra Bitcoin con criterio y buen gobierno para{" "}
                  <strong>proteger tu poder de compra frente a la inflación</strong>.
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
                    <Shield className="h-4 w-4" /> Solo enfoque no custodia (no custodiamos ni captamos fondos)
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="h-4 w-4" /> Metodología documentada y auditable
                  </div>
                </div>
              </div>

              {/* ¿Qué es Bitcoin? */}
              <div className="lg:col-span-5">
                <Card className="shadow-xl rounded-2xl text-center">
                  <CardHeader className="flex flex-col items-center gap-3">
                    <Image src="/btc-icon.png" alt="Bitcoin" width={40} height={40} className="rounded-full" />
                    <CardTitle className="text-xl tracking-tight">¿Qué es Bitcoin?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-neutral-700 font-sans">
                    <p>
                      Bitcoin <strong>no es una empresa</strong>. Es una <strong>tecnología digital independiente</strong>,
                      abierta, más <strong>escasa</strong> cada 4 años y descentralizada.
                    </p>
                    <p>
                      Cualquier persona puede adquirir y resguardar Bitcoin como <strong>reserva de valor global</strong>.
                    </p>
                    <div className="flex flex-col items-start gap-2 text-neutral-600 text-xs mt-2">
                      <div className="flex items-center gap-2">
                        <Globe className="h-3.5 w-3.5" /> Emisión limitada: solo existen 21 millones de Bitcoin
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-3.5 w-3.5" /> Seguridad respaldada por su red global
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

        {/* PROBLEMA / DOLOR */}
        <section id="problema" className="py-16 lg:py-24 bg-neutral-50 scroll-mt-24 relative z-[10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight">Problema/dolor que solucionamos</h2>
              <p className="mt-2 text-neutral-700">
                Ayudamos a personas y empresas a <strong>dejar de perder poder adquisitivo</strong> por la inflación y el
                exceso de liquidez sin estrategia.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card className="rounded-2xl">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-xl bg-white shadow-sm border">
                    <User className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">Para personas</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700">
                  Estructuramos un plan de ahorro en Bitcoin que <strong>protege el valor de tu esfuerzo</strong> y te
                  permite mantener el control de tu dinero.
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-xl bg-white shadow-sm border">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">Para empresas</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700">
                  Definimos una <strong>política de tesorería</strong> que separa <em>caja mínima operativa</em> de{" "}
                  <em>caja excedente</em>, establece reglas claras de compra y resguardo y reduce riesgos operativos y contables.
                </CardContent>
              </Card>
            </div>

            <p className="mt-8 text-sm text-neutral-600">
              El costo de no actuar es la <strong>devaluación</strong> anual del dinero; nuestro servicio te da un{" "}
              <strong>sistema sencillo, medible y ejecutable hoy</strong>.
            </p>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="relative z-[300] isolate py-16 lg:py-24 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Servicios</h2>
              <p className="mt-2 text-neutral-700">
                Portafolios y tesorerías con estrategia clara, documentación completa y seguimiento periódico.
              </p>
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
                    tab === "personas" ? "bg-white shadow font-medium text-neutral-800" : "text-neutral-600 hover:text-neutral-800"
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
                    tab === "empresas" ? "bg-white shadow font-medium text-neutral-800" : "text-neutral-600 hover:text-neutral-800"
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  Empresas
                </button>
              </div>
            </div>

            {/* Panel PERSONAS */}
            {tab === "personas" ? (
              <div id="panel-personas" role="tabpanel" aria-labelledby="tab-personas" className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Plan de inicio (simple y prudente)</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>
                      Levantamiento simple de tu situación y objetivos. Vemos tu situación y objetivos para definir
                      cuánto empezar, sin afectar tu día a día.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Fondo de emergencia (3–6 meses)</li>
                      <li>Excedente de ahorro vs. gastos</li>
                      <li>% inicial sugerido (1–5%)</li>
                      <li>Horizonte y metas realistas</li>
                    </ul>
                    <p className="text-xs text-neutral-500">Resultado: 1 hoja con tu plan de inicio y calendario mensual.</p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Compras periódicas sin estrés</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>
                      Reglas claras para comprar sin estrés y conservar a largo plazo. Definimos montos y fechas fijas
                      para comprar sin mirar el precio día a día.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Aportes mensuales o por ventanas</li>
                      <li>Umbrales y rebalance</li>
                      <li>Límites máximos por periodo</li>
                      <li>Checklist anti-impulso</li>
                    </ul>
                    <p className="text-xs text-neutral-500">Incluye un simulador de aportes y un recordatorio mensual (opcional).</p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Custodia segura</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>
                      Custodia siempre en tus manos. Te guiamos a configurarlo bien desde el inicio. Te guiamos paso a
                      paso para crear y resguardar tu billetera sin terceros.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Elección de billetera: hardware/software (pros y contras)</li>
                      <li>Configuración guiada (offline, verificación y direcciones)</li>
                      <li>Respaldo de frase de recuperación (seed) y prueba de restauración</li>
                      <li>Buenas prácticas de uso y micro-depósito de prueba</li>
                    </ul>
                    <p className="text-xs text-neutral-500">21ME no custodia ni tiene acceso a tus fondos.</p>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Acompañamiento &amp; Control</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>
                      Control simple y soporte básico para mantener el rumbo. Te ayudamos a mantener el plan con orden y
                      sin sobresaltos.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Bitácora y plantilla de valorización</li>
                      <li>Revisión trimestral</li>
                      <li>Orientación tributaria básica (Perú)</li>
                      <li>FAQs y soporte por correo</li>
                    </ul>
                    <p className="text-xs text-neutral-500">Paquete trimestral con resumen y próximas acciones.</p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              // Panel EMPRESAS
              <div id="panel-empresas" role="tabpanel" aria-labelledby="tab-empresas" className="mt-8 grid md:grid-cols-3 gap-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Diagnóstico de Tesorería</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>Revisión de caja, políticas actuales y oportunidades de asignación.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Caja mínima operativa vs. caja excedente</li>
                      <li>Mapa de riesgos y ventanas de compra</li>
                      <li>Propuesta de % inicial y calendario</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Política BTC en el Balance</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>Documento formal para comité/directorio: objetivos, límites y rebalance.</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Gobernanza &amp; firmas</li>
                      <li>NIIF (activo intangible) y revelaciones</li>
                      <li>Procedimientos operativos (sin custodia por 21ME)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Implementación &amp; Seguimiento</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>
                      Implementación práctica con <strong>custodia en manos del cliente</strong> y acompañamiento
                      periódico.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Plan operativo de compras (aportes periódicos/ventanas) y rebalance</li>
                      <li>Configuración de monederos y/o multisig (si aplica)</li>
                      <li>Bitácora, conciliaciones y revisión trimestral</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>

        {/* BTC en perspectiva */}
        <section id="btc-en-perspectiva" className="py-16 lg:py-24 scroll-mt-24 relative z-[10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-bold tracking-tight">Bitcoin en perspectiva</h2>
                <p className="mt-2 text-neutral-700">
                  Oferta limitada (21 millones), halving cada ~4 años y un mercado global 24/7 han impulsado un
                  crecimiento de largo plazo. La escala log ayuda a ver la tendencia.
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-6">
                <h2 className="text-3xl font-bold tracking-tight">Contabilidad &amp; Cumplimiento</h2>
                <p className="mt-3 text-neutral-700">
                  Tratamos a Bitcoin como activo intangible (NIIF) con notas de revelación y políticas internas alineadas
                  a auditorías y a la documentación notarial de tu organización.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-700 list-disc pl-5">
                  <li>Modelo contable NIIF para BTC (Perú)</li>
                  <li>Políticas internas y notas de revelación</li>
                  <li>Formato de conciliación y valorización</li>
                  <li>Acta/carta de directorio para notaría (cuando corresponda)</li>
                </ul>
                <p className="mt-4 text-xs text-neutral-500">
                  21ME no realiza custodia, intermediación financiera ni captación de fondos. Diseñamos la política y los
                  procesos; la ejecución y custodia quedan en manos del cliente.
                </p>
              </div>
              <div className="lg:col-span-6">
                <Card className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Entregables incluidos</CardTitle>
                  </CardHeader>
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
                    No. Diseñamos la estrategia y los controles para que compres y custodies tú (o tu empresa) con buenas
                    prácticas y segregación de funciones.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a2">
                  <AccordionTrigger>¿Cómo se refleja en la contabilidad (NIIF Perú)?</AccordionTrigger>
                  <AccordionContent>
                    En general, como activo intangible (NIC 38) con revelaciones y pruebas de deterioro (NIC 36).
                    Entregamos plantillas y formatos de soporte para auditoría.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a3">
                  <AccordionTrigger>¿Qué porcentaje recomiendan asignar?</AccordionTrigger>
                  <AccordionContent>
                    Depende de tu caja, tolerancia al riesgo y horizonte. Empezamos con diagnósticos prudentes (1–5%) y
                    revisamos trimestralmente.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a4">
                  <AccordionTrigger>¿Qué pasa si el precio cae?</AccordionTrigger>
                  <AccordionContent>
                    La política define porcentajes prudentes, ventanas y rebalance. No especulamos; priorizamos
                    continuidad y control de riesgos para sostener el plan a largo plazo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="a5">
                  <AccordionTrigger>¿Puedo pagar en soles, dólares o Bitcoin?</AccordionTrigger>
                  <AccordionContent>Sí. Aceptamos S/., USD o Bitcoin, según el alcance del servicio.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="a6">
                  <AccordionTrigger>¿Qué no hacen?</AccordionTrigger>
                  <AccordionContent>
                    No intermediamos, no captamos fondos, no custodiamos y no gestionamos portafolios. Somos consultores
                    de tesorería y compliance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* QUIÉNES SOMOS / CONFIANZA */}
        <section className="py-12 lg:py-16 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold tracking-tight">Quiénes somos / Confianza</h3>
            <div className="mt-4 grid md:grid-cols-2 gap-6 text-sm text-neutral-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Razón social: 21 MILLIONS ENTERPRISES S.A.C.</li>
                <li>Naturaleza: Sociedad Anónima Cerrada en Perú.</li>
                <li>Objeto: consultoría en políticas de tesorería para adopción de Bitcoin (sin custodia ni captación).</li>
              </ul>
              <p className="text-xs text-neutral-500">
                21 MILLIONS ENTERPRISES S.A.C. brinda consultoría en políticas de tesorería para la adopción de Bitcoin.
                No realiza custodia, intermediación financiera, captación de dinero del público ni gestión de portafolios.
                La información del sitio es educativa y no constituye recomendación de inversión.
              </p>
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
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${EMAIL}`} className="underline hover:opacity-80">
                      {EMAIL}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> +51 941 437 729
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Calle Las Camelias 877, Int. 302 San Isidro, Lima, Perú
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <Card className="bg-white text-neutral-900 rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg">Déjanos tus datos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Mensajes de estado */}
                    <div aria-live="polite" className="mb-4">
                      {status === "success" && (
                        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                          ✓ Mensaje enviado. Te responderemos pronto.
                        </div>
                      )}
                      {status === "error" && (
                        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                          {errorMsg || "No se pudo enviar. Intenta nuevamente."}
                        </div>
                      )}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input type="hidden" name="cta" value={ctaParam ?? ""} />
                      <input
                        name="name"
                        required
                        placeholder="Nombre y apellido"
                        className="w-full border rounded-xl px-4 py-3"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      />
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="Correo"
                        className="w-full border rounded-xl px-4 py-3"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      />
                      <input
                        name="company"
                        placeholder="Empresa (opcional)"
                        className="w-full border rounded-xl px-4 py-3"
                        value={form.company}
                        onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                      />
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Cuéntanos breve tu caso"
                        className="w-full border rounded-xl px-4 py-3"
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      />
                      <Button
                        type="submit"
                        className={`w-full ${gold} ${goldHover} text-black`}
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? "Enviando..." : "Enviar"}
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
