import React from "react";
import { ArrowUpRight, Github, Linkedin, User } from "lucide-react";

export function CreatorSpotlight() {
  return (
    <section id="creator" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-widest text-neutral-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>Founder &amp; Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            The Mind Behind Ecloudlab
          </h2>
        </div>

        {/* Creator Bento Box */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#080808] p-8 sm:p-12 hover:border-white/[0.2] transition-all">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Avatar Column */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-2xl bg-neutral-900 border border-white/[0.15] flex items-center justify-center mb-4 relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-white/[0.03] group-hover:bg-white/[0.06] transition-colors" />
                <User className="w-16 h-16 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.04] text-neutral-300 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Advisory</span>
              </div>
            </div>

            {/* Bio Column */}
            <div className="md:col-span-8 flex flex-col justify-center text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                Brian Pomaquero
              </h3>
              <div className="text-xs font-mono font-medium text-neutral-400 mb-4 tracking-wide uppercase">
                Founder &amp; Lead AI Engineer
              </div>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                Software engineer and AI researcher passionate about autonomous agent architecture, deterministic orchestration, and high-performance serverless cloud infrastructure. Through Ecloudlab, Brian bridges experimental research into resilient, production-ready software systems for enterprise automation and next-generation human-AI workflows.
              </p>

              {/* Verified Links */}
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://www.brianpomaquero.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-sm active:scale-95"
                >
                  <span>Personal Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/edwardrian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full border border-white/[0.12] bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] hover:text-white transition-all active:scale-95"
                  aria-label="Brian Pomaquero on GitHub (@edwardrian)"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub (@edwardrian)</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/pomaqueroquimiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-full border border-white/[0.12] bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] hover:text-white transition-all active:scale-95"
                  aria-label="Brian Pomaquero on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
