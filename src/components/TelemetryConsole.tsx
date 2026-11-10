import React from "react";

export function TelemetryConsole() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl border border-white/[0.08] bg-[#090e1a]/90 backdrop-blur-2xl shadow-2xl shadow-indigo-500/10 overflow-hidden text-left font-mono">
      {/* Window bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] border-b border-white/[0.06] text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-[11px] text-slate-500 font-medium">
          ecloudlab-agent-core :: telemetry://v2.4.0
        </span>
        <span className="flex items-center gap-1 text-[11px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          online
        </span>
      </div>

      {/* Terminal log lines */}
      <div className="p-5 text-xs sm:text-[13px] leading-relaxed space-y-2 text-slate-300">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
          <span className="text-cyan-400 font-semibold">[AGENT_ORCHESTRATOR]</span>
          <span className="text-slate-300">
            Initializing stateful graph runner with Gemini 1.5 Flash &amp; LangGraph...
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
          <span className="text-cyan-400 font-semibold">[PUBSUB_DISPATCHER]</span>
          <span className="text-slate-300">
            Consumer active on <span className="text-purple-400">projects/ecloudlab-prod/topics/telegram-events</span>
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
          <span className="text-cyan-400 font-semibold">[POLICY_VERIFIER]</span>
          <span className="text-slate-300">
            Deterministic guardrails active — User context isolated in Postgres RLS session.
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
          <span className="text-cyan-400 font-semibold">[LIVE_NODE]</span>
          <span className="text-emerald-400">
            ✓ Nexus Bank Agent deployed &amp; handling concurrent banking workflows.
          </span>
        </div>
      </div>
    </div>
  );
}

