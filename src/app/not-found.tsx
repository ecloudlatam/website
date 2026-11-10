import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="max-w-md w-full text-center p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0c1220]/70 backdrop-blur-xl shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-7 h-7 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
          404 :: Node Not Found
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Route Out of Scope
        </h1>

        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
          The requested agent endpoint or documentation path could not be located in the Ecloudlab cluster.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Lab Center</span>
        </Link>
      </div>
    </div>
  );
}

