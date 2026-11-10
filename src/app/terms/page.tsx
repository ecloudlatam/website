import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Ecloudlab",
  description: "Terms of Service and experimental AI usage policies for Ecloudlab.",
};

export default function TermsPage() {
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
          Terms &amp; Conditions
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
          Terms of Service
        </h1>
        <div className="text-xs font-mono text-neutral-500 pb-8 mb-8 border-b border-white/[0.08]">
          Effective Date: November 2026 · Version 1.2
        </div>

        <div className="rounded-3xl border border-white/[0.08] bg-[#080808] p-8 sm:p-12 space-y-8 text-neutral-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or utilizing any software, experimental prototypes, demonstration interfaces, or APIs developed by <strong>Ecloudlab</strong>, founded by Brian Pomaquero, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              2. Experimental Nature of AI Systems
            </h2>
            <p className="mb-3">
              Ecloudlab is an experimental software laboratory. Unless explicitly covered under a signed enterprise Service Level Agreement (SLA):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>Prototypes are provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis.</li>
              <li>Generative AI outputs and autonomous decisions may occasionally reflect probabilistic variations. Users must verify mission-critical data independently.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              3. Acceptable Use
            </h2>
            <p>
              You agree not to bypass safety guardrails, attempt prompt injection, overload multi-tenant queue buffers, or reverse-engineer proprietary agent graph topologies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              4. Contact &amp; Licensing
            </h2>
            <p>
              For enterprise partnerships, custom agent systems, or licensing, please contact:
            </p>
            <p className="mt-2 text-neutral-300">
              <strong>Email:</strong>{" "}
              <a href="mailto:ecloudlatam@gmail.com" className="text-white underline underline-offset-4">
                ecloudlatam@gmail.com
              </a>
              <br />
              <strong>Portfolio:</strong>{" "}
              <a
                href="https://www.brianpomaquero.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-4"
              >
                brianpomaquero.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
