// next.config.mjs
/** @type {import('next').NextConfig} */

// --- Content Security Policy ---
// Ajusta connect-src / img-src / form-action si agregas servicios externos
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  // Si envías formularios a Formspree u otro proveedor, déjalo aquí:
  "connect-src 'self' https://formspree.io",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  // 'unsafe-inline' sólo para CSS de Next/Tailwind en SSR. No agregues inline JS.
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self'",
  // Si tu formulario POSTea a un externo, decláralo aquí (Formspree de ejemplo):
  "form-action 'self' https://formspree.io"
].join('; ')

// Cabeceras de seguridad
const securityHeaders = [
  // Activa HSTS. Si todo funciona en HTTPS por semanas, puedes enviar a hstspreload.org
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Doble protección anti-iframe (legacy + CSP frame-ancestors)
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Deshabilita permisos del navegador que no usas
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // Política CSP
  { key: 'Content-Security-Policy', value: csp },
]

const nextConfig = {
  reactStrictMode: true,

  // Añadimos cabeceras a todas las rutas
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },

  // Si algún día cargas imágenes externas, agrégalas aquí (o usa remotePatterns)
  images: {
    // domains: ['tu-cdn.com'],
  },
}

export default nextConfig
