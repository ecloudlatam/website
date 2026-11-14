import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de Privacidad y estándares de protección de datos en Ecloudlab.",
  alternates: {
    canonical: "https://ecloudlab.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-sm tracking-tight text-neutral-900">
            Ecloudlab
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 flex-1">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
          Documentación Legal
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
          Política de Privacidad
        </h1>
        <div className="text-xs font-mono text-neutral-400 pb-8 mb-8 border-b border-neutral-100">
          Fecha de vigencia: Noviembre 2026 · Versión 1.2
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-10 space-y-8 text-neutral-600 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              1. Compromiso con la Privacidad y Seguridad
            </h2>
            <p>
              En <strong className="text-neutral-900">Ecloudlab</strong> (<a href="https://ecloudlab.com" className="text-neutral-900 underline underline-offset-4">ecloudlab.com</a>), fundado por Brian Pomaquero, diseñamos y desarrollamos software a medida y agentes autónomos de IA. Mantenemos un compromiso fundamental con arquitecturas que protegen la privacidad, límites estrictos contra fugas de datos y aislamiento multi-tenant.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              2. Recolección de Datos y Retención Mínima
            </h2>
            <p className="mb-3">
              Cuando interactúas con las interfaces y plataformas de Ecloudlab (como{" "}
              <a
                href="https://nexus-bank.ecloudlab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline underline-offset-4"
              >
                Nexus Bank Agent
              </a>{" "}
              o{" "}
              <a
                href="https://fact.ecloudlab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline underline-offset-4"
              >
                Nexus Shop
              </a>
              ), recopilamos únicamente los datos mínimos estrictamente necesarios para atender tus solicitudes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-500">
              <li>
                <strong className="text-neutral-900">Consultas Directas:</strong> Al escribir a{" "}
                <code className="text-neutral-900 font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded">ecloudlatam@gmail.com</code>, tu correo se utiliza exclusivamente para responder tu solicitud.
              </li>
              <li>
                <strong className="text-neutral-900">Consultas a Agentes:</strong> Las solicitudes entrantes se procesan dinámicamente en contenedores de sesión aislados y no se venden, comparten ni utilizan para entrenar modelos públicos externos.
              </li>
              <li>
                <strong className="text-neutral-900">Telemetría del Sistema:</strong> Se registra temporalmente telemetría no identificable (latencia, agente de usuario) para prevención de anomalías.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              3. Proveedores de Modelos Fundacionales
            </h2>
            <p>
              Nuestros flujos de orquestación se comunican con proveedores empresariales de IA (Google Vertex AI / Gemini, Anthropic Claude, OpenAI). Todas las transmisiones vía API se realizan mediante canales cifrados TLS y bajo acuerdos comerciales de cero retención de datos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              4. Contacto y Derechos
            </h2>
            <p>
              Tienes derecho a solicitar el acceso, corrección o eliminación de cualquier registro asociado a tu consulta. Para más información, contacta a Brian Pomaquero en{" "}
              <a href="mailto:ecloudlatam@gmail.com" className="text-neutral-900 underline underline-offset-4">
                ecloudlatam@gmail.com
              </a>{" "}
              o a través de su portafolio en{" "}
              <a
                href="https://www.brianpomaquero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline underline-offset-4"
              >
                brianpomaquero.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
