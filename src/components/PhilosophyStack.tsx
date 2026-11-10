import React from "react";
import { GitBranch, CloudLightning, ShieldCheck, Cpu } from "lucide-react";

export function PhilosophyStack() {
  const pillars = [
    {
      icon: GitBranch,
      title: "Stateful Graph Orchestration",
      description:
        "Cyclic, state-aware agent loops powered by LangGraph ensure continuous verification, checkpointing, and dynamic self-correction.",
    },
    {
      icon: CloudLightning,
      title: "Serverless & Event-Driven",
      description:
        "Decoupled cloud architecture utilizing Pub/Sub, microservices, and serverless compute to handle fluctuating traffic without idle costs.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Data Isolation",
      description:
        "Strict multi-tenant isolation, row-level security policies, and zero persistent training leakage across customer boundaries.",
    },
    {
      icon: Cpu,
      title: "Auditable Guardrails",
      description:
        "Deterministic tool validations, human-in-the-loop review nodes, and full telemetry tracing before any critical action executes.",
    },
  ];

  const technologies = [
    { name: "Python 3.12", role: "Core Engine" },
    { name: "LangGraph", role: "Agent Loops" },
    { name: "Google Gemini", role: "Reasoning LLM" },
    { name: "OpenAI API", role: "Tool Execution" },
    { name: "Anthropic Claude", role: "Deep Analysis" },
    { name: "Supabase", role: "Vector & RLS" },
    { name: "Vercel", role: "Edge Compute" },
    { name: "Terraform", role: "IaC Cloud" },
    { name: "Docker", role: "Containers" },
    { name: "GCP Pub/Sub", role: "Event Queue" },
  ];

  return (
    <section id="philosophy" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-widest text-neutral-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span>Architectural Principles</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for Autonomous Intelligence
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
            Nuestra misión: Construir IA práctica, segura, serverless y orientada a la privacidad.
          </p>
        </div>

        {/* 4 Pillars Grid in Linear Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/[0.08] bg-[#080808] p-6 hover:border-white/[0.2] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center mb-5 text-white">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Matrix */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#080808] p-8 sm:p-10 text-center">
          <div className="text-xs font-mono font-medium tracking-widest text-neutral-500 uppercase mb-6">
            Core Production Tech Stack
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2.5">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/[0.18] transition-all"
              >
                <span className="text-xs font-medium text-neutral-200 group-hover:text-white">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-neutral-400 group-hover:text-neutral-300">
                  {tech.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
