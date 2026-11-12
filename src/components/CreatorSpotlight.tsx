import React from "react";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export function CreatorSpotlight() {
  return (
    <section id="creator" className="py-20 border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              Founder &amp; Lead AI Engineer
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 tracking-tight mb-3">
              Brian Pomaquero
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Software engineer and AI researcher focused on autonomous agent architecture, deterministic orchestration, and serverless cloud infrastructure. Through Ecloudlab, Brian bridges experimental research into resilient, production-ready software systems.
            </p>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://www.brianpomaquero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              >
                <span>Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/edwardrian"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full border border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/pomaqueroquimiz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full border border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-gray-50 text-neutral-600 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Available for Advisory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
