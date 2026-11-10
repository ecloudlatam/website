import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { AgentGraphSimulator } from "./AgentGraphSimulator";

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 text-center" id="simulator">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimalist Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-neutral-300 text-xs font-medium mb-8 hover:border-white/20 transition-all">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>⚡ AI Innovation &amp; Experimental Software Lab</span>
        </div>

        {/* Monumental Linear/Vercel H1 */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
          Autonomous AI Agents. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Engineered for Production.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          We research, design, and deploy autonomous AI agents and intelligent systems solving complex, real-world problems.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-16">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-lg shadow-white/5 active:scale-95"
          >
            <span>View Active Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="https://www.brianpomaquero.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold rounded-full border border-white/[0.12] bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] hover:text-white transition-all active:scale-95"
          >
            <span>About the Founder</span>
          </a>
        </div>

        {/* Visual Multi-Node Agent Simulator */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-white/[0.05] via-white/[0.1] to-white/[0.05] blur-xl opacity-50 -z-10" />
          <AgentGraphSimulator />
        </div>

      </div>
    </section>
  );
}
