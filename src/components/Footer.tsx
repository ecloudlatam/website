"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Copy } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const email = "ecloudlatam@gmail.com";
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const input = document.createElement("input");
        input.value = email;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <footer id="contact" className="w-full border-t border-white/[0.08] bg-black pt-16 pb-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Summary */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-7 h-7 rounded-lg bg-white/[0.07] border border-white/[0.15] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              </div>
              <span className="font-semibold text-base text-white">Ecloudlab</span>
            </Link>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Autonomous AI agents and experimental software laboratory. Advancing intelligent, resilient software systems from research to real-world production.
            </p>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-xs font-mono text-neutral-300 transition-all active:scale-95"
              aria-label="Copy contact email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>ecloudlatam@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Navigation Column 1: The Lab */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-medium tracking-wider text-neutral-300 uppercase mb-4">
              The Lab
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://nexus-bank.ecloudlab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Nexus Bank Agent ↗
                </a>
              </li>
              <li>
                <Link href="#projects" className="text-neutral-400 hover:text-white transition-colors">
                  OmniVoice AI (Beta)
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-neutral-400 hover:text-white transition-colors">
                  DocuSense Graph
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="text-neutral-400 hover:text-white transition-colors">
                  Core Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Founder */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-medium tracking-wider text-neutral-300 uppercase mb-4">
              Leadership
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://www.brianpomaquero.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Brian Pomaquero ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/edwardrian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  GitHub (@edwardrian) ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pomaqueroquimiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  LinkedIn Profile ↗
                </a>
              </li>
              <li>
                <a
                  href="mailto:ecloudlatam@gmail.com"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Direct Inquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Legal & Status */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-medium tracking-wider text-neutral-300 uppercase mb-4">
              Legal &amp; Security
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://nexus-bank.ecloudlab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Production Telemetry Status
                </a>
              </li>
              <li>
                <a
                  href="mailto:ecloudlatam@gmail.com"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  Responsible Disclosure
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 Ecloudlab. All rights reserved. Founded &amp; engineered by{" "}
            <a
              href="https://www.brianpomaquero.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 underline underline-offset-4 hover:text-white"
            >
              Brian Pomaquero
            </a>
            .
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>All Agent Nodes Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
