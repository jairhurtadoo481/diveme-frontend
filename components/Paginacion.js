"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Paginacion({ paginaActual, totalPaginas }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (totalPaginas <= 1) return null;

  const irA = (pagina) => {
    const params = new URLSearchParams(searchParams.toString());
    if (pagina <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(pagina));
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      <button
        onClick={() => irA(paginaActual - 1)}
        disabled={paginaActual <= 1}
        className="px-4 py-2 border border-black/15 rounded text-sm font-medium text-gray-700 hover:border-black/40 transition disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {"←"} Anterior
      </button>
      <span className="text-sm text-gray-500">
        Pagina {paginaActual} de {totalPaginas}
      </span>
      <button
        onClick={() => irA(paginaActual + 1)}
        disabled={paginaActual >= totalPaginas}
        className="px-4 py-2 border border-black/15 rounded text-sm font-medium text-gray-700 hover:border-black/40 transition disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Siguiente {"→"}
      </button>
    </div>
  );
}
