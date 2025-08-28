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
  // 🔐 HSTS (fuerza HTTPS en todo el dominio y subdominios; apto para preload)
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },

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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            // Relajamos script-src para permitir inline de Next y que hidrate.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self' https: data: blob:",
              "script-src 'self' 'unsafe-inline' https:",
              "style-src 'self' 'unsafe-inline' https:",
              "img-src 'self' data: https: blob:",
              "font-src 'self' https: data:",
              "connect-src 'self' https:",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self' https:"
            ].join("; "),
          },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
