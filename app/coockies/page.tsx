// app/cookies/page.tsx
export const metadata = {
  title: "Política de Cookies | 21 Millions Enterprises S.A.C.",
  description: "Cómo usamos cookies necesarias y analíticas en 21millionspe.com",
};

export default function CookiesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose prose-neutral">
      <h1>Política de Cookies</h1>
      <p>
        En <strong>21 Millions Enterprises S.A.C.</strong> usamos cookies necesarias para
        el funcionamiento del sitio y, con tu consentimiento, cookies analíticas (opcional).
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Son pequeños archivos de texto que tu navegador almacena para recordar
        preferencias y mejorar la experiencia de navegación.
      </p>

      <h2>Tipos de cookies</h2>
      <ul>
        <li><strong>Necesarias:</strong> permiten que el sitio funcione (seguridad, sesión, etc.).</li>
        <li><strong>Analíticas (opcionales):</strong> nos ayudan a entender el uso del sitio.</li>
      </ul>

      <h2>Gestión del consentimiento</h2>
      <p>
        Puedes aceptar todas, limitarte a las necesarias o cambiar tu preferencia desde
        el banner de cookies. También puedes borrar cookies desde tu navegador.
      </p>

      <h2>Contacto</h2>
      <p>
        Si tienes dudas sobre esta política, escríbenos a <a href="mailto:21millionspe@gmail.com">21millionspe@gmail.com</a>.
      </p>
    </main>
  );
}
