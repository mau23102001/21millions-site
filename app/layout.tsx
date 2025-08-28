import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.21millionspe.com"),
  title: "21 Millions Enterprises S.A.C.",
  description:
    "Tesorería inteligente en Bitcoin para personas y empresas. Estrategia, acompañamiento contable y compliance local.",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  alternates: { canonical: "https://www.21millionspe.com" },
  openGraph: {
    title: "21 Millions Enterprises S.A.C.",
    description:
      "Tesorería inteligente en Bitcoin para personas y empresas.",
    url: "https://www.21millionspe.com",
    siteName: "21 Millions",
    images: [{ url: "/og-21m.png", width: 1200, height: 630 }],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "21 Millions Enterprises S.A.C.",
    description:
      "Tesorería inteligente en Bitcoin para personas y empresas.",
    images: ["/og-21m.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}

        {/* Schema.org de la organización */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "21 Millions Enterprises S.A.C.",
            url: "https://www.21millionspe.com",
            logo: "https://www.21millionspe.com/icon.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "contacto@21millions.pe",
                areaServed: "PE",
                availableLanguage: ["es"],
              },
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
