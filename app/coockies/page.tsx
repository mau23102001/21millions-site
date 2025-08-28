// app/cookies/page.tsx
export const dynamic = "force-dynamic";

export default function CookiesPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 prose prose-neutral">
      <h1>Política de Cookies</h1>
      <p><strong>Última actualización:</strong> 28/08/2025</p>

      <p>
        Esta Política explica cómo <strong>21 Millions Enterprises S.A.C.</strong> (“21 Millions”)
        utiliza cookies y tecnologías similares en este sitio web. Para más detalles sobre datos
        personales, revisa nuestra <a href="/privacidad">Política de Privacidad</a>.
      </p>

      <h2>1) ¿Qué son las cookies?</h2>
      <p>
        Son pequeños archivos que se almacenan en tu navegador y permiten recordar información
        sobre tu visita, mejorar la experiencia, mantener la sesión, entre otros fines.
      </p>

      <h2>2) Tipos de cookies que usamos</h2>
      <ul>
        <li>
          <strong>Esenciales</strong>: necesarias para el funcionamiento del sitio (seguridad,
          balanceo, sesión). No requieren consentimiento.
        </li>
        <li>
          <strong>De preferencias</strong>: recuerdan elecciones (idioma, vista). Requieren
          consentimiento.
        </li>
        <li>
          <strong>Analíticas</strong>: nos ayudan a comprender el uso del sitio (de forma agregada).
          Requieren consentimiento. Actualmente no cargamos herramientas de terceros sin tu
          consentimiento.
        </li>
        <li>
          <strong>Marketing</strong>: para personalizar anuncios o medir campañas. No utilizamos
          cookies publicitarias propias; sólo podrían emplearse si en el futuro habilitamos
          proveedores y tú lo consientes.
        </li>
      </ul>

      <h2>3) Gestión del consentimiento</h2>
      <p>
        Al entrar al sitio verás un banner que te permite <strong>Aceptar</strong> o{" "}
        <strong>Rechazar</strong> cookies no esenciales. También puedes modificar tu decisión
        borrando las cookies en tu navegador o ajustando su configuración.
      </p>

      <h2>4) Terceros</h2>
      <p>
        Si en el futuro integramos servicios de terceros (p.ej., analítica), te informaremos en
        esta página y el banner pedirá tu consentimiento antes de cargarlos.
      </p>

      <h2>5) Cómo deshabilitar cookies desde el navegador</h2>
      <p>
        Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Ten en cuenta
        que bloquear cookies esenciales puede afectar el funcionamiento del sitio.
      </p>

      <h2>6) Cambios en esta Política</h2>
      <p>
        Podemos actualizar esta Política; la versión vigente estará disponible en{" "}
        <a href="/cookies">/cookies</a>.
      </p>

      <h2>7) Contacto</h2>
      <p>
        21 Millions Enterprises S.A.C. · Lima – Perú ·{" "}
        <a href="mailto:21millionspe@gmail.com">21millionspe@gmail.com</a>
      </p>
    </main>
  );
}
