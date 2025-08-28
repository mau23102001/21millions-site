// app/layout.tsx
import './globals.css'
import { headers } from 'next/headers'
import Script from 'next/script'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  // El nonce puesto por el middleware
  const nonce = headers().get('x-nonce') || ''

  return (
    <html lang="es">
      <head>
        {/* Exponemos el nonce también vía meta por si en el futuro lo necesitas en el cliente */}
        <meta name="csp-nonce" content={nonce} />
      </head>
      <body>
        {children}

        {/* JSON-LD de FAQ con nonce seguro (antes estaba en page.tsx) */}
        <Script
          id="ld-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          nonce={nonce}
        >
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
                    "No. Somos consultores. Diseñamos la estrategia y te guiamos para que compres y custodies tú (o tu empresa) con buenas prácticas y controles internos."
                }
              },
              {
                "@type": "Question",
                name: "¿Cómo se refleja en la contabilidad (NIIF)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "En general, como activo intangible, con revelaciones y políticas de valuación/impairment documentadas. Entregamos formatos y anexos de soporte para auditoría."
                }
              }
            ]
          })}
        </Script>
      </body>
    </html>
  )
}
