"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6">
      <div className="max-w-5xl mx-auto rounded-full border border-white/[0.1] bg-black/75 backdrop-blur-2xl px-4 sm:px-6 h-14 flex items-center justify-between shadow-2xl shadow-black/80 transition-all">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-white/[0.07] border border-white/[0.15] flex items-center justify-center group-hover:border-white/40 transition-colors">
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
              <circle cx="10" cy="13" r="1.5" fill="#ffffff" />
              <circle cx="14" cy="11" r="1.5" fill="#a1a1aa" />
              <circle cx="17" cy="15" r="1.5" fill="#71717a" />
            </svg>
          </div>
          <span className="font-semibold text-sm tracking-tight text-white group-hover:text-neutral-200 transition-colors">
            Ecloudlab
          </span>
          <span className="hidden sm:inline-flex items-center text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-neutral-400">
            LAB.01
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
          <Link href="#projects" className="hover:text-white transition-colors">
            The Lab
          </Link>
          <Link href="#simulator" className="hover:text-white transition-colors">
            Interactive Graph
          </Link>
          <Link href="#philosophy" className="hover:text-white transition-colors">
            Architecture
          </Link>
          <Link href="#creator" className="hover:text-white transition-colors">
            Founder
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://nexus-bank.ecloudlab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-white/[0.1] bg-white/[0.03] text-neutral-300 hover:bg-white/[0.08] hover:text-white transition-all"
          >
            <span>Nexus Bank</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
          <a
            href="mailto:ecloudlatam@gmail.com"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white text-black hover:bg-neutral-200 transition-all shadow-sm"
          >
            <Sparkles className="w-3 h-3" />
            <span>Inquire</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 text-neutral-400 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto rounded-2xl border border-white/[0.1] bg-black/95 backdrop-blur-2xl p-5 flex flex-col gap-3 shadow-2xl">
          <Link
            href="#projects"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-neutral-300 hover:text-white py-1"
          >
            The Lab / Projects
          </Link>
          <Link
            href="#simulator"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-neutral-300 hover:text-white py-1"
          >
            Interactive Graph
          </Link>
          <Link
            href="#philosophy"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-neutral-300 hover:text-white py-1"
          >
            Architecture &amp; Principles
          </Link>
          <Link
            href="#creator"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-neutral-300 hover:text-white py-1"
          >
            Brian Pomaquero (Founder)
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-neutral-300 hover:text-white py-1"
          >
            Contact
          </Link>
          <div className="pt-2 border-t border-white/[0.08] flex flex-col gap-2">
            <a
              href="https://nexus-bank.ecloudlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg border border-white/[0.12] bg-white/[0.04] text-neutral-200"
            >
              <span>Nexus Bank Live Agent</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:ecloudlatam@gmail.com"
              className="w-full text-center py-2 text-xs font-semibold rounded-lg bg-white text-black"
            >
              Contact Ecloudlab
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
