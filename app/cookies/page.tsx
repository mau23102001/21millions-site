// app/cookies/page.tsx
export const metadata = {
  title: "Política de Cookies | 21 Millions Enterprises S.A.C.",
  description:
    "Uso de cookies necesarias y analíticas opcionales en 21 Millions Enterprises S.A.C.",
};

export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Política de Cookies</h1>
      <p className="mt-4 text-neutral-700">
        En 21 Millions Enterprises S.A.C. utilizamos cookies necesarias para el
        funcionamiento del sitio y, con tu consentimiento, cookies analíticas
        para medir y mejorar su rendimiento. Puedes aceptar todas o solo las
        necesarias desde el banner de cookies.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Tipos de cookies</h2>
      <ul className="mt-2 list-disc pl-6 text-neutral-700 space-y-2">
        <li>
          <strong>Necesarias:</strong> Imprescindibles para que el sitio
          funcione (p. ej., seguridad, preferencias básicas).
        </li>
        <li>
          <strong>Analíticas (opcionales):</strong> Nos ayudan a medir visitas
          y detectar mejoras. Se cargan solo si otorgas tu consentimiento.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Gestión de consentimiento</h2>
      <p className="mt-2 text-neutral-700">
        Puedes cambiar tu preferencia cuando lo desees. Si quieres restablecer
        el banner, borra la preferencia guardada en tu navegador:
      </p>
      <pre className="mt-3 rounded-lg bg-neutral-50 border p-3 text-sm overflow-x-auto">
        localStorage.removeItem("cookie-consent-21m")
      </pre>

      <h2 className="mt-8 text-xl font-semibold">Contacto</h2>
      <p className="mt-2 text-neutral-700">
        Si tienes dudas sobre esta Política, escríbenos a{" "}
        <a
          href="mailto:21millionspe@gmail.com"
          className="underline hover:opacity-80"
        >
          21millionspe@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
