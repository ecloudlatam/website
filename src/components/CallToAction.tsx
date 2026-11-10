import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/[0.1] bg-gradient-to-b from-white/[0.04] to-black p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Have an AI Vision to Bring to Life?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Whether you require autonomous workflow automation, custom agent architecture, or enterprise AI consulting, we are ready to collaborate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="mailto:ecloudlatam@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-lg shadow-white/5 active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch with Ecloudlab</span>
            </a>
            <a
              href="https://nexus-bank.ecloudlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold rounded-full border border-white/[0.12] bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] hover:text-white transition-all active:scale-95"
            >
              <span>Test Live Agent</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
