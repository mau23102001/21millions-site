// app/privacidad/page.tsx
export const dynamic = "force-dynamic";

export default function PrivacidadPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 prose prose-neutral">
      <h1>Política de Privacidad</h1>
      <p><strong>Última actualización:</strong> 28/08/2025</p>

      <p>
        <strong>21 Millions Enterprises S.A.C.</strong> (en adelante, “21 Millions”), identificada
        con RUC N.º XXXXXXXXXXX y con domicilio fiscal en Lima – Perú, garantiza la protección de los
        datos personales que trata, conforme a la Ley N.º 29733 – Ley de Protección de Datos
        Personales, su Reglamento (D.S. 003-2013-JUS) y demás normas aplicables.
      </p>

      <h2>1) Responsable del Tratamiento</h2>
      <p>
        21 Millions es responsable del tratamiento de tus datos. Contacto:{" "}
        <a href="mailto:21millionspe@gmail.com">21millionspe@gmail.com</a>.
      </p>

      <h2>2) Datos que Tratamos</h2>
      <ul>
        <li>Datos de identificación: nombres, apellidos, DNI/RUC, razón social.</li>
        <li>Datos de contacto: correo, teléfono, ciudad/país.</li>
        <li>
          Datos de negocio: información de tesorería, políticas internas, flujos, procesos,
          exclusivamente para la consultoría contratada.
        </li>
        <li>
          Datos de navegación: direcciones IP, identificadores de dispositivo, eventos de uso
          (ver <a href="/cookies">Política de Cookies</a>).
        </li>
      </ul>

      <h2>3) Finalidades</h2>
      <ul>
        <li>Atender consultas y solicitudes de contacto.</li>
        <li>Gestionar la relación contractual y prestación de servicios.</li>
        <li>Cumplimiento normativo contable/tributario y de auditoría.</li>
        <li>
          Seguridad y prevención de fraudes; mejora de calidad y experiencia del sitio.
        </li>
        <li>
          Envío de comunicaciones informativas o comerciales propias (siempre con tu
          consentimiento, cuando corresponda, y con opción de baja).
        </li>
      </ul>

      <h2>4) Base Legal</h2>
      <ul>
        <li>Ejecución de contrato o medidas precontractuales.</li>
        <li>Cumplimiento de obligaciones legales.</li>
        <li>Interés legítimo (seguridad, mejora del servicio).</li>
        <li>Consentimiento del titular (p.ej., marketing, cookies no esenciales).</li>
      </ul>

      <h2>5) Plazo de Conservación</h2>
      <p>
        Conservamos los datos por el tiempo necesario para cumplir con las finalidades y los plazos
        legales aplicables (p.ej., contabilidad/tributación). Luego, se anonimiza o elimina de forma
        segura.
      </p>

      <h2>6) Encargados y Destinatarios</h2>
      <p>
        Podemos compartir datos con proveedores que actúan por cuenta de 21 Millions (alojamiento,
        correo, herramientas de soporte), bajo contrato de encargado y medidas de seguridad. No
        vendemos tus datos.
      </p>

      <h2>7) Transferencias Internacionales</h2>
      <p>
        Si por razones operativas algún proveedor procesa datos fuera del Perú, se aplicarán
        salvaguardas adecuadas (contratos modelo y medidas técnicas/organizativas). Puedes
        consultar detalles escribiendo a nuestro correo.
      </p>

      <h2>8) Derechos ARCO y Otros</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, cancelación y oposición, así como
        revocar tu consentimiento, escribiendo a{" "}
        <a href="mailto:21millionspe@gmail.com">21millionspe@gmail.com</a>. Deberás adjuntar copia de
        tu documento de identidad. También puedes presentar reclamos ante la Autoridad Nacional de
        Protección de Datos Personales (ANPD) del Perú.
      </p>

      <h2>9) Seguridad</h2>
      <p>
        Implementamos medidas técnicas y organizativas razonables para proteger la información. Sin
        embargo, ningún sistema es 100% infalible; el usuario también debe aplicar buenas prácticas.
      </p>

      <h2>10) Menores de Edad</h2>
      <p>
        Nuestros servicios están dirigidos a mayores de edad. No recopilamos conscientemente datos
        de menores. Si detectas un caso, escríbenos para eliminar la información.
      </p>

      <h2>11) Actualizaciones</h2>
      <p>
        Podemos actualizar esta Política. La versión vigente siempre estará publicada en{" "}
        <a href="/privacidad">/privacidad</a>.
      </p>

      <h2>12) Contacto</h2>
      <p>
        21 Millions Enterprises S.A.C. · Lima – Perú ·{" "}
        <a href="mailto:21millionspe@gmail.com">21millionspe@gmail.com</a>
      </p>
    </main>
  );
}
