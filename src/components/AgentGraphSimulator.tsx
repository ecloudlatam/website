"use client";

import React, { useState, useEffect } from "react";
import { Activity, Cpu, Database, Play, RefreshCw, Shield, Terminal, Zap } from "lucide-react";

interface NodeInfo {
  id: string;
  name: string;
  role: string;
  tech: string;
  status: "idle" | "processing" | "ready";
  latency: string;
  payload: Record<string, any>;
}

export function AgentGraphSimulator() {
  const [activeTab, setActiveTab] = useState<"topology" | "terminal" | "state">("topology");
  const [selectedNode, setSelectedNode] = useState<string>("langgraph");
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(2);

  const nodes: Record<string, NodeInfo> = {
    inbound: {
      id: "inbound",
      name: "Telegram Inbound",
      role: "Client Webhook Event",
      tech: "Telegram Bot API / Cloud Run",
      status: "ready",
      latency: "24ms",
      payload: {
        event_id: "evt_994821a",
        sender_id: "usr_telegram_8819",
        intent: "CHECK_BALANCE_AND_CATEGORIZE",
        timestamp: "2026-11-10T13:24:00Z",
      },
    },
    pubsub: {
      id: "pubsub",
      name: "Event Bus Buffer",
      role: "Lossless Message Queue",
      tech: "Google Cloud Pub/Sub",
      status: "ready",
      latency: "12ms",
      payload: {
        topic: "projects/ecloudlab-prod/topics/telegram-events",
        ack_deadline: 30,
        concurrency: 128,
        ordering_key: "usr_telegram_8819",
      },
    },
    langgraph: {
      id: "langgraph",
      name: "Agent Orchestrator",
      role: "Stateful Graph Engine",
      tech: "LangGraph / Python 3.12",
      status: "ready",
      latency: "110ms",
      payload: {
        graph_id: "banking_copilot_v2",
        current_node: "execute_tools_and_verify",
        recursion_limit: 25,
        checkpoint_id: "chk_81920_state",
      },
    },
    gemini: {
      id: "gemini",
      name: "Gemini 1.5 Flash",
      role: "Multimodal Foundation Model",
      tech: "Google Vertex AI API",
      status: "ready",
      latency: "215ms",
      payload: {
        model: "gemini-1.5-flash-002",
        temperature: 0.1,
        tokens_in: 342,
        tokens_out: 89,
        tool_choice: "banking_actions",
      },
    },
    guardrails: {
      id: "guardrails",
      name: "Ecloud Shield",
      role: "Deterministic Policy Gate",
      tech: "Deterministic Guardrails",
      status: "ready",
      latency: "8ms",
      payload: {
        policy_checks: ["rls_enforced", "no_pii_leak", "rate_limit_pass"],
        validation_status: "PASSED",
        risk_score: 0.001,
      },
    },
    database: {
      id: "database",
      name: "PostgreSQL / RLS",
      role: "Isolated Multi-Tenant Store",
      tech: "Supabase Postgres / pgvector",
      status: "ready",
      latency: "18ms",
      payload: {
        isolation: "TENANT_ROW_LEVEL_SECURITY",
        connection_pool: "PgBouncer",
        records_mutated: 1,
      },
    },
  };

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    const steps = ["inbound", "pubsub", "langgraph", "gemini", "guardrails", "database"];
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setSelectedNode(step);
        setActiveStep(idx);
        if (idx === steps.length - 1) {
          setTimeout(() => setIsSimulating(false), 800);
        }
      }, idx * 600);
    });
  };

  const currentNode = nodes[selectedNode] || nodes.langgraph;

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-white/[0.08] bg-[#050505]/90 backdrop-blur-2xl shadow-2xl shadow-black overflow-hidden text-left">
      {/* Top Bar with Controller */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-white/[0.01] gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.15]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.15]" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/[0.15]" />
          </div>
          <span className="text-xs font-mono font-medium text-neutral-400">
            ecloudlab-agent-runtime :: topology.graph
          </span>
        </div>

        {/* Tab switchers & trigger */}
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg bg-white/[0.04] p-0.5 border border-white/[0.08] text-xs">
            <button
              onClick={() => setActiveTab("topology")}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                activeTab === "topology"
                  ? "bg-white text-black shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Interactive Graph
            </button>
            <button
              onClick={() => setActiveTab("terminal")}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                activeTab === "terminal"
                  ? "bg-white text-black shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Execution Trace
            </button>
            <button
              onClick={() => setActiveTab("state")}
              className={`px-3 py-1 rounded-md font-medium transition-all ${
                activeTab === "state"
                  ? "bg-white text-black shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              State JSON
            </button>
          </div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg border border-white/[0.12] bg-white/[0.06] text-white hover:bg-white/[0.1] active:scale-95 transition-all disabled:opacity-50"
            title="Simulate Event Pipeline Execution"
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin text-cyan-400" />
                <span>Running...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-emerald-400" />
                <span>Trigger Event</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main View Area */}
      <div className="p-6">
        {activeTab === "topology" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Visual Flow Representation (8 cols) */}
            <div className="lg:col-span-7 bg-black/60 rounded-xl border border-white/[0.06] p-5 relative overflow-hidden">
              <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Click any node to inspect runtime state:</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Cyclic Loop Active
                </span>
              </div>

              {/* Node Layout Flow */}
              <div className="grid grid-cols-3 gap-3">
                {/* Node 1: Inbound */}
                <button
                  onClick={() => setSelectedNode("inbound")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedNode === "inbound"
                      ? "border-white bg-white/[0.08] shadow-lg shadow-white/5"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-neutral-400">01</span>
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-xs font-semibold text-white">Telegram Inbound</div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">Webhook 24ms</div>
                </button>

                {/* Node 2: Pub/Sub */}
                <button
                  onClick={() => setSelectedNode("pubsub")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedNode === "pubsub"
                      ? "border-white bg-white/[0.08] shadow-lg shadow-white/5"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-neutral-400">02</span>
                    <Activity className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div className="text-xs font-semibold text-white">Pub/Sub Queue</div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">Buffer 12ms</div>
                </button>

                {/* Node 3: LangGraph Core */}
                <button
                  onClick={() => setSelectedNode("langgraph")}
                  className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                    selectedNode === "langgraph"
                      ? "border-white bg-white/[0.08] shadow-lg shadow-white/10 ring-1 ring-white/30"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-neutral-400">03</span>
                    <Cpu className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-white">LangGraph Loop</div>
                  <div className="text-[10px] text-cyan-400 font-mono mt-0.5">Orchestrator</div>
                </button>

                {/* Node 4: Gemini */}
                <button
                  onClick={() => setSelectedNode("gemini")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedNode === "gemini"
                      ? "border-white bg-white/[0.08] shadow-lg shadow-white/5"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-neutral-400">04</span>
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <div className="text-xs font-semibold text-white">Gemini 1.5 Flash</div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">Model 215ms</div>
                </button>

                {/* Node 5: Guardrails */}
                <button
                  onClick={() => setSelectedNode("guardrails")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedNode === "guardrails"
                      ? "border-white bg-white/[0.08] shadow-lg shadow-white/5"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-neutral-400">05</span>
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs font-semibold text-white">Ecloud Shield</div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">Policy 8ms</div>
                </button>

                {/* Node 6: Database */}
                <button
                  onClick={() => setSelectedNode("database")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedNode === "database"
                      ? "border-white bg-white/[0.08] shadow-lg shadow-white/5"
                      : "border-white/[0.07] bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-neutral-400">06</span>
                    <Database className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                  <div className="text-xs font-semibold text-white">Postgres RLS</div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">Isolated 18ms</div>
                </button>
              </div>

              {/* Status bar */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>Selected: <strong className="text-white">{currentNode.name}</strong></span>
                <span>Latency Budget: <strong className="text-emerald-400">387ms Total</strong></span>
              </div>
            </div>

            {/* Node Inspector Panel (5 cols) */}
            <div className="lg:col-span-5 bg-black/80 rounded-xl border border-white/[0.08] p-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                <div className="font-semibold text-white">{currentNode.name}</div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.08] text-neutral-300">
                  {currentNode.tech}
                </span>
              </div>

              <div className="text-[11px] text-neutral-400 mb-4">
                Role: <span className="text-neutral-200">{currentNode.role}</span>
              </div>

              <div className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1.5">
                Live State Payload:
              </div>
              <pre className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-neutral-300 overflow-x-auto leading-relaxed">
                {JSON.stringify(currentNode.payload, null, 2)}
              </pre>
            </div>

          </div>
        )}

        {activeTab === "terminal" && (
          <div className="font-mono text-xs leading-relaxed space-y-2 p-4 bg-black/80 rounded-xl border border-white/[0.06] text-neutral-300">
            <div className="text-neutral-500">// Real-time state execution stream :: Telegram &lt;-&gt; Nexus Bank Copilot</div>
            <div className="flex items-baseline gap-2">
              <span className="text-neutral-500">13:24:00.102</span>
              <span className="text-cyan-400 font-semibold">[INBOUND_EVENT]</span>
              <span>POST /api/webhook/telegram :: payload verified (HMAC-SHA256)</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-neutral-500">13:24:00.126</span>
              <span className="text-indigo-400 font-semibold">[PUBSUB_DISPATCH]</span>
              <span>Published to &apos;telegram-events&apos; (message_id=9928120)</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-neutral-500">13:24:00.138</span>
              <span className="text-white font-semibold">[LANGGRAPH_CORE]</span>
              <span>Resuming checkpoint for usr_8819 :: invoking node &apos;reasoning_loop&apos;</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-neutral-500">13:24:00.353</span>
              <span className="text-purple-400 font-semibold">[GEMINI_INFERENCE]</span>
              <span>Gemini 1.5 Flash returned ToolCall(&apos;get_account_balance&apos;) in 215ms</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-neutral-500">13:24:00.361</span>
              <span className="text-emerald-400 font-semibold">[ECLOUD_SHIELD]</span>
              <span>Deterministic guardrail PASSED :: SQL restricted to user tenant ID</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-neutral-500">13:24:00.379</span>
              <span className="text-cyan-300 font-semibold">[POSTGRES_RLS]</span>
              <span>SELECT balance FROM accounts WHERE user_id = $1 :: executed (18ms)</span>
            </div>
            <div className="flex items-baseline gap-2 text-emerald-400 font-medium">
              <span className="text-neutral-500">13:24:00.412</span>
              <span>[DELIVERY_SUCCESS]</span>
              <span>Response synthesized and delivered to Telegram user in 310ms total.</span>
            </div>
          </div>
        )}

        {activeTab === "state" && (
          <div className="font-mono text-xs p-4 bg-black/80 rounded-xl border border-white/[0.06] text-neutral-300">
            <div className="text-neutral-500 mb-2">// Global Agent State Graph Snapshot (LangGraph Checkpoint)</div>
            <pre className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[11px] text-neutral-300 overflow-x-auto leading-relaxed">
{JSON.stringify(
  {
    thread_id: "telegram:conversation:8819",
    active_agent: "NexusBankSupervisor",
    status: "IDLE_AWAITING_INPUT",
    checkpoint: {
      version: "2.4.0",
      timestamp: "2026-11-10T13:24:00.412Z",
      recursion_depth: 3,
      context_tokens: 342,
    },
    safety_parameters: {
      zero_retention_agreement: true,
      row_level_security: "ENABLED",
      tenant_isolation_boundary: "STRICT",
      human_in_the_loop_threshold: "TRANSACTIONS_OVER_1000_USD"
    },
    nodes: Object.keys(nodes)
  },
  null,
  2
)}
            </pre>
          </div>
        )}
      </div>

    </div>
  );
}

