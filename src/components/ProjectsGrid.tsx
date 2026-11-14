import React from "react";
import { ArrowUpRight } from "lucide-react";

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            Proyectos
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
            Sistemas Activos
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 max-w-xl">
            Plataformas de software en producción y agentes de IA autónomos diseñados con foco en confiabilidad y privacidad.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LAB.01 — Nexus Bank Agent */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-400 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>En Producción</span>
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  LAB.01
                </span>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Nexus Bank Agent
              </h3>

              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                Copiloto bancario autónomo multiusuario en Telegram con Google Cloud Pub/Sub, LangGraph y Gemini. Ejecuta categorización de transacciones, consultas de saldo y ciclos de asesoría con latencia sub-segundo.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["LangGraph", "Gemini", "GCP Pub/Sub", "Python", "Supabase"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-gray-50 border border-neutral-200 text-neutral-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
              <a
                href="https://nexus-bank.ecloudlab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                <span>Abrir Agente en Vivo</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <span className="font-mono text-neutral-400">
                nexus-bank.ecloudlab.com
              </span>
            </div>
          </div>

          {/* LAB.02 — Nexus Shop */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-neutral-400 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>En Producción</span>
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  LAB.02
                </span>
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Nexus Shop
              </h3>

              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                Plataforma de catálogo de productos y servicios, control de inventario y facturación electrónica SRI. Administra tu negocio desde el panel web o emite comprobantes electrónicos desde un bot de Telegram con IA.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Plataforma Web", "Facturación SRI", "Inventario", "Bot Telegram", "Asistente IA"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-gray-50 border border-neutral-200 text-neutral-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
              <a
                href="https://fact.ecloudlab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                <span>Abrir Nexus Shop</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <span className="font-mono text-neutral-400">
                fact.ecloudlab.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
