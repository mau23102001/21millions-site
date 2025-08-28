import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "21 Millions Enterprises S.A.C.",
  description:
    "Tesorería inteligente en Bitcoin para personas y empresas. Estrategia, acompañamiento contable y compliance local.",
  icons: { icon: "/icon.png" }, // usa app/icon.png
  openGraph: {
    title: "21 Millions Enterprises S.A.C.",
    description:
      "Tesorería inteligente en Bitcoin para personas y empresas.",
    url: "https://www.21millions.pe", // cámbialo cuando tengas tu dominio
    siteName: "21 Millions",
    images: ["/og-21m.png"], // opcional: pon una imagen 1200x630 en /public
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "21 Millions Enterprises S.A.C.",
    description:
      "Tesorería inteligente en Bitcoin para personas y empresas.",
    images: ["/og-21m.png"], // opcional
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
