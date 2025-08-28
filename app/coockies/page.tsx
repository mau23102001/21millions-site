// app/cookies/page.tsx
export const metadata = {
  title: "Política de Cookies | 21 Millions Enterprises S.A.C.",
  description:
    "Información sobre el uso de cookies en 21 Millions Enterprises S.A.C.: tipos, finalidades, base legal y cómo gestionarlas.",
};

export default function CookiesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold tracking-tight">Política de Cookies</h1>
      <p className="mt-3 text-neutral-700">
        Última actualización: {new Date().toLocaleDateString("es-PE")}
      </p>

      <div className="prose prose-neutral mt-8">
        <p>
          21 Millions Enterprises S.A.C. (“21 Millions”, “nosotros”) utiliza
          cookies y tecnologías similares para el funcionamiento del sitio,
          medir su rendimiento y, de forma opcional, para análisis de uso.
        </p>

        <h2>¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en tu
          navegador. Algunas son necesarias para que el sitio funcione
          correctamente; otras ayudan a comprender cómo se utiliza para
          mejorar la experiencia.
        </p>

        <h2>Tipos de cookies que usamos</h2>
        <ul>
          <li>
            <strong>Necesarias:</strong> habilitan funciones básicas (navegación,
            seguridad, formularios). No requieren consentimiento.
          </li>
          <li>
            <strong>Analíticas (opcionales):</strong> nos permiten medir tráfico
            y mejorar el contenido. Se instalan solo si otorgas tu
            consentimiento.
          </li>
        </ul>

        <h2>Gestión del consentimiento</h2>
        <p>
          Puedes aceptar únicamente las cookies necesarias o todas desde el
          banner inicial. En cualquier momento puedes borrar o bloquear cookies
          desde la configuración de tu navegador.
        </p>

        <h2>Conservación y terceros</h2>
        <p>
          Las cookies necesarias se mantienen por el tiempo imprescindible para
          su finalidad. Las analíticas, cuando estén activas, se conservan por
          los plazos que indique el proveedor.
        </p>

        <h2>Contacto</h2>
        <p>
          Si tienes dudas sobre esta política, escríbenos a{" "}
          <a href="mailto:21millionspe@gmail.com">21millionspe@gmail.com</a>.
        </p>
      </div>
    </main>
  );
}
