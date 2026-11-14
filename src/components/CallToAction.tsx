import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 border-t border-neutral-100 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
          ¿Necesitas Software a Medida o una Solución con IA?
        </h2>
        <p className="text-sm sm:text-base text-neutral-500 max-w-lg mx-auto mb-8 leading-relaxed">
          Ya sea una aplicación web o móvil, plataforma SaaS, integración de APIs, automatización o agentes de IA, construyámoslo juntos.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:ecloudlatam@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contáctanos</span>
          </a>
          <a
            href="https://nexus-bank.ecloudlab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-medium rounded-full border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <span>Probar Agente en Vivo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
