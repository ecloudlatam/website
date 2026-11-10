import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Ecloudlab",
  description: "Privacy Policy and data protection standards at Ecloudlab.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-full border border-white/[0.1] bg-black/75 backdrop-blur-2xl px-5 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold text-sm tracking-tight text-white flex items-center gap-2">
            <span>⚡</span> Ecloudlab
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Lab</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 flex-1">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
          Legal Documentation
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
          Privacy Policy
        </h1>
        <div className="text-xs font-mono text-neutral-500 pb-8 mb-8 border-b border-white/[0.08]">
          Effective Date: November 2026 · Version 1.2
        </div>

        <div className="rounded-3xl border border-white/[0.08] bg-[#080808] p-8 sm:p-12 space-y-8 text-neutral-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              1. Commitment to Privacy &amp; Agent Safety
            </h2>
            <p>
              At <strong>Ecloudlab</strong> (<a href="https://ecloudlab.com" className="text-white underline underline-offset-4">ecloudlab.com</a>), founded by Brian Pomaquero, we research and develop autonomous AI agents and experimental software systems. We hold a fundamental commitment to privacy-preserving architectures, zero-leak data boundaries, and strict multi-tenant isolation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              2. Data Collection &amp; Minimal Retention
            </h2>
            <p className="mb-3">
              When you interact with Ecloudlab demonstration interfaces and prototypes (such as{" "}
              <a
                href="https://nexus-bank.ecloudlab.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4"
              >
                Nexus Bank Agent
              </a>
              ), we collect only the minimal data strictly necessary to fulfill your requests:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>
                <strong className="text-white">Direct Inquiries:</strong> When contacting{" "}
                <code className="text-white font-mono text-xs bg-white/[0.06] px-1.5 py-0.5 rounded">ecloudlatam@gmail.com</code>, your email address is used solely to reply to your inquiry.
              </li>
              <li>
                <strong className="text-white">Agent Prompts:</strong> Inbound queries are processed dynamically within isolated session containers and are not sold, shared, or utilized to train external public LLMs.
              </li>
              <li>
                <strong className="text-white">System Telemetry:</strong> Non-personally identifiable server telemetry (IP latency, browser user-agents) is logged temporarily for anomaly prevention.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              3. Foundation Model Providers
            </h2>
            <p>
              Our agent orchestration pipelines interface with enterprise AI providers (Google Vertex AI / Gemini, Anthropic Claude, OpenAI). All API transmissions take place over encrypted TLS channels and comply with commercial zero-data-retention agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              4. Contact &amp; Rights
            </h2>
            <p>
              You have the right to request access, correction, or deletion of any records associated with your inquiry. For questions, contact Lead AI Engineer &amp; Founder Brian Pomaquero at{" "}
              <a href="mailto:ecloudlatam@gmail.com" className="text-white underline underline-offset-4">
                ecloudlatam@gmail.com
              </a>{" "}
              or via his portfolio at{" "}
              <a
                href="https://www.brianpomaquero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4"
              >
                brianpomaquero.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
