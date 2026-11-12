import React from "react";
import { GitBranch, CloudLightning, ShieldCheck, Cpu } from "lucide-react";

export function PhilosophyStack() {
  const pillars = [
    {
      icon: GitBranch,
      title: "Stateful Graph Orchestration",
      description:
        "Cyclic, state-aware agent loops powered by LangGraph ensure continuous verification, checkpointing, and self-correction.",
    },
    {
      icon: CloudLightning,
      title: "Serverless & Event-Driven",
      description:
        "Decoupled cloud architecture utilizing Pub/Sub and serverless compute to handle fluctuating traffic without idle costs.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Data Isolation",
      description:
        "Strict multi-tenant isolation, row-level security policies, and zero persistent training leakage across boundaries.",
    },
    {
      icon: Cpu,
      title: "Auditable Guardrails",
      description:
        "Deterministic tool validations, human-in-the-loop nodes, and full telemetry tracing before critical actions execute.",
    },
  ];

  const technologies = [
    "Python 3.12",
    "LangGraph",
    "Google Gemini",
    "OpenAI API",
    "Anthropic Claude",
    "Supabase",
    "Vercel",
    "Terraform",
    "Docker",
    "GCP Pub/Sub",
  ];

  return (
    <section id="philosophy" className="py-20 border-t border-neutral-100 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
            Principles
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
            Built for Autonomous Intelligence
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 max-w-xl">
            Practical, secure, serverless, and privacy-first AI engineering.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="w-9 h-9 rounded-lg border border-neutral-200 bg-gray-50 flex items-center justify-center mb-4 text-neutral-700">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Minimal Stack Row */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mr-2">
            Core Stack:
          </span>
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
