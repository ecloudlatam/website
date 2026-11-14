import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Minimal Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-gray-50 text-neutral-600 text-xs font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>Desarrollo de Software a Medida e IA</span>
        </div>

        {/* Clean Minimalist Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 mb-6 leading-[1.1]">
          Soluciones de Software e IA Autónoma.
        </h1>

        {/* Concise Subtitle */}
        <p className="text-base sm:text-lg text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Diseñamos y desarrollamos todo tipo de software a medida: aplicaciones web y móviles, plataformas SaaS, APIs en la nube, automatización de procesos y agentes de IA autónomos.
        </p>

        {/* Simple Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-medium rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
          >
            <span>Explorar Proyectos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="https://nexus-bank.ecloudlab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-medium rounded-full border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <span>Nexus Bank en Vivo</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
