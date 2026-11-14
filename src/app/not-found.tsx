import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="max-w-md w-full text-center p-8 sm:p-10 rounded-2xl border border-neutral-200 bg-white">
        <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
          404 · No Encontrado
        </div>

        <h1 className="text-2xl font-bold text-neutral-900 mb-3">
          Página no encontrada
        </h1>

        <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
          No se pudo encontrar la página o el recurso solicitado.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al Inicio</span>
        </Link>
      </div>
    </div>
  );
}
