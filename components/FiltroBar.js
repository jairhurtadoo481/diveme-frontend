"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { TIPOS, TIPOS_POR_SECCION, etiquetaDeSeccion } from "../lib/catalogoRopa";

export default function FiltroBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tipoActivo = searchParams.get("tipo") || "";
  const seccionActiva = searchParams.get("seccion") || "";
  const tiposVisibles = seccionActiva ? TIPOS_POR_SECCION[seccionActiva] || TIPOS : TIPOS;

  const actualizarFiltro = (clave, valor) => {
    const params = new URLSearchParams(searchParams.toString());
    if (valor) {
      params.set(clave, valor);
    } else {
      params.delete(clave);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const limpiarFiltros = () => {
    router.push(pathname);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mb-10">
      {seccionActiva && (
        <span className="text-xs uppercase tracking-widest text-gray-400 mr-1">
          {etiquetaDeSeccion(seccionActiva)}
        </span>
      )}
      <div className="flex flex-wrap gap-2 flex-1">
        <button
          onClick={() => actualizarFiltro("tipo", "")}
          className={`text-sm px-4 py-2 rounded-full border font-medium transition ${
            tipoActivo === ""
              ? "bg-[var(--diveme-texto)] text-white border-[var(--diveme-texto)]"
              : "border-black/15 text-gray-600 hover:border-black/40"
          }`}
        >
          Todos
        </button>
        {tiposVisibles.map((tipo) => (
          <button
            key={tipo.valor}
            onClick={() => actualizarFiltro("tipo", tipo.valor)}
            className={`text-sm px-4 py-2 rounded-full border font-medium transition ${
              tipoActivo === tipo.valor
                ? "bg-[var(--diveme-texto)] text-white border-[var(--diveme-texto)]"
                : "border-black/15 text-gray-600 hover:border-black/40"
            }`}
          >
            {tipo.etiqueta}
          </button>
        ))}
      </div>

      {(tipoActivo || seccionActiva) && (
        <button
          onClick={limpiarFiltros}
          className="text-sm font-medium text-[var(--diveme-acento)] hover:opacity-70 transition"
        >
          Limpiar
        </button>
      )}
    </div>
  );
}
