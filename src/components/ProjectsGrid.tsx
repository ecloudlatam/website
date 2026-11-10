import React from "react";
import { ArrowUpRight, Bot, Mic, Network, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-widest text-neutral-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>The Lab · Vitrina de Experimentos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experimental AI Software
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Production-grade autonomous agents, cyclic graph state machines, and research prototypes engineered for enterprise reliability and privacy.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          
          {/* BENTO CARD #1: NEXUS BANK AGENT (LARGE 8 COLS) */}
          <div className="lg:col-span-8 rounded-3xl border border-white/[0.1] bg-[#080808] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-white/[0.2] transition-all">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Active / Production</span>
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  FLAGSHIP EXPERIMENT
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center gap-3">
                <span>Nexus Bank Agent</span>
                <Bot className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
              </h3>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                Autonomous multi-user AI banking copilot on Telegram with Google Cloud Pub/Sub, LangGraph, and Gemini. Executes transaction categorization, balance inquiries, and autonomous advisory loops with sub-second latency and bank-grade isolation.
              </p>

              {/* Minimalist Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["LangGraph", "Google Gemini", "Google Cloud Pub/Sub", "Telegram Bot API", "Python", "PostgreSQL / Supabase"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Bottom link row */}
            <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
              <a
                href="https://nexus-bank.ecloudlab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-neutral-300 transition-colors group/btn"
              >
                <span>Launch Live Agent</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-xs font-mono text-neutral-500">
                nexus-bank.ecloudlab.com
              </span>
            </div>
          </div>

          {/* BENTO CARD #2: OMNIVOICE AI (4 COLS) */}
          <div className="lg:col-span-4 rounded-3xl border border-white/[0.08] bg-[#080808] p-8 flex flex-col justify-between hover:border-white/[0.18] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-amber-500/25 bg-amber-500/10 text-amber-300 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Beta / Prototype
                </span>
                <span className="text-xs font-mono text-neutral-500">LAB.02</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span>OmniVoice AI</span>
                <Mic className="w-5 h-5 text-neutral-400" />
              </h3>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                Real-time multilingual voice agent framework delivering sub-300ms conversational flows with emotional cadence matching, dynamic interruption handling, and zero-loss audio streaming.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["WebRTC", "Whisper", "FastAPI", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Private Research</span>
              <span>Docs soon</span>
            </div>
          </div>

          {/* BENTO CARD #3: DOCUSENSE GRAPH (4 COLS) */}
          <div className="lg:col-span-4 rounded-3xl border border-white/[0.08] bg-[#080808] p-8 flex flex-col justify-between hover:border-white/[0.18] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-300 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  Research
                </span>
                <span className="text-xs font-mono text-neutral-500">LAB.03</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span>DocuSense Graph</span>
                <Network className="w-5 h-5 text-neutral-400" />
              </h3>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                Hierarchical Graph-RAG system unifying unstructured corporate documentation, tabular data, and relational entity extraction into queryable neural knowledge graphs.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Graph RAG", "Neo4j", "Claude 3.5", "pgvector"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Internal Eval</span>
              <span>Whitepaper in prep</span>
            </div>
          </div>

          {/* BENTO CARD #4: ECLOUD SHIELD (WIDE 8 COLS) */}
          <div className="lg:col-span-8 rounded-3xl border border-white/[0.08] bg-[#080808] p-8 sm:p-10 flex flex-col justify-between hover:border-white/[0.18] transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-300 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Core Infrastructure
                </span>
                <span className="text-xs font-mono text-neutral-500">LAB.04</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <span>Ecloud Shield &amp; Deterministic Guardrails</span>
                <ShieldCheck className="w-5 h-5 text-neutral-400" />
              </h3>

              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
                Runtime policy validation layer intercepting prompt injection, unintended API side-effects, and multi-tenant privilege escalation across all deployed agents.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Deterministic Tool Checks", "Row-Level Security", "Audit Telemetry", "OAuth 2.1"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Embedded in all Ecloudlab agents</span>
              <span className="text-emerald-400">Zero Leakage Boundary</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
