"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg border border-neutral-200 bg-neutral-50 flex items-center justify-center group-hover:border-neutral-400 transition-colors">
            <svg
              className="w-4 h-4 text-neutral-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>
          <span className="font-semibold text-sm tracking-tight text-neutral-900">
            Ecloudlab
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-500">
          <Link href="#projects" className="hover:text-neutral-900 transition-colors">
            Proyectos
          </Link>
          <Link href="#philosophy" className="hover:text-neutral-900 transition-colors">
            Principios
          </Link>
          <Link href="#creator" className="hover:text-neutral-900 transition-colors">
            Fundador
          </Link>
          <Link href="#contact" className="hover:text-neutral-900 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://nexus-bank.ecloudlab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full border border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <span>Nexus Bank</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
          <a
            href="mailto:ecloudlatam@gmail.com"
            className="inline-flex items-center px-4 py-1.5 text-xs font-medium rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
          >
            Cotizar
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 text-neutral-600 hover:text-neutral-900 focus:outline-none"
          aria-label="Abrir menú de navegación"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-4 py-5 flex flex-col gap-3">
          <Link
            href="#projects"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 py-1"
          >
            Proyectos
          </Link>
          <Link
            href="#philosophy"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 py-1"
          >
            Principios
          </Link>
          <Link
            href="#creator"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 py-1"
          >
            Fundador
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 py-1"
          >
            Contacto
          </Link>
          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href="https://nexus-bank.ecloudlab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-full border border-neutral-200 text-neutral-800"
            >
              <span>Nexus Bank</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:ecloudlatam@gmail.com"
              className="w-full text-center py-2 text-xs font-medium rounded-full bg-neutral-900 text-white"
            >
              Cotizar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
