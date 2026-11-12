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
    <footer id="contact" className="w-full border-t border-neutral-200 bg-white py-12 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-100">
          <div>
            <Link href="/" className="font-semibold text-sm text-neutral-900">
              Ecloudlab
            </Link>
            <p className="text-xs text-neutral-500 mt-1 max-w-sm">
              Autonomous AI agents and experimental software laboratory.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500">
            <Link href="#projects" className="hover:text-neutral-900 transition-colors">
              Projects
            </Link>
            <Link href="/privacy" className="hover:text-neutral-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900 transition-colors">
              Terms
            </Link>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 bg-gray-50 hover:border-neutral-400 text-xs font-mono text-neutral-700 transition-colors"
              aria-label="Copy contact email"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-neutral-400" />
                  <span>ecloudlatam@gmail.com</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © 2026 Ecloudlab. Founded by{" "}
            <a
              href="https://www.brianpomaquero.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
            >
              Brian Pomaquero
            </a>
            .
          </div>

          <div className="inline-flex items-center gap-1.5 text-neutral-500 font-mono text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
