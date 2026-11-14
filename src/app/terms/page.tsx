import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description: "Términos de Servicio y políticas de uso de software y sistemas de IA en Ecloudlab.",
  alternates: {
    canonical: "https://ecloudlab.com/terms",
  },
};

export default function TermsPage() {
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
          Términos y Condiciones
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
          Términos de Servicio
        </h1>
        <div className="text-xs font-mono text-neutral-400 pb-8 mb-8 border-b border-neutral-100">
          Fecha de vigencia: Noviembre 2026 · Versión 1.2
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-10 space-y-8 text-neutral-600 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              1. Aceptación de los Términos
            </h2>
            <p>
              Al acceder o utilizar cualquier software, prototipo experimental, interfaz de demostración o API desarrollada por <strong className="text-neutral-900">Ecloudlab</strong>, fundado por Brian Pomaquero, aceptas quedar sujeto a estos Términos de Servicio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              2. Naturaleza Experimental de los Sistemas de IA
            </h2>
            <p className="mb-3">
              Ecloudlab desarrolla software a medida y sistemas experimentales de IA. Salvo que exista un Acuerdo de Nivel de Servicio (SLA) firmado:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-500">
              <li>Los prototipos y demos se ofrecen &ldquo;tal cual&rdquo; y &ldquo;según disponibilidad&rdquo;.</li>
              <li>Las respuestas generadas por IA y decisiones autónomas pueden presentar variaciones probabilísticas; se recomienda validar de forma independiente la información crítica.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              3. Uso Aceptable
            </h2>
            <p>
              Aceptas no eludir los controles de seguridad, intentar inyección de prompts, sobrecargar las colas multi-tenant ni realizar ingeniería inversa sobre nuestras arquitecturas propietarias.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-neutral-900 mb-3">
              4. Contacto y Licenciamiento
            </h2>
            <p>
              Para proyectos de software a medida, alianzas empresariales o licenciamiento, contáctanos en:
            </p>
            <p className="mt-2 text-neutral-600">
              <strong className="text-neutral-900">Correo:</strong>{" "}
              <a href="mailto:ecloudlatam@gmail.com" className="text-neutral-900 underline underline-offset-4">
                ecloudlatam@gmail.com
              </a>
              <br />
              <strong className="text-neutral-900">Portafolio:</strong>{" "}
              <a
                href="https://www.brianpomaquero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 underline underline-offset-4"
              >
                brianpomaquero.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
