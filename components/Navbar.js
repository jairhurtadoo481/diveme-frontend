"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CarritoIndicador from "./CarritoIndicador";

export default function Navbar() {
  const router = useRouter();
  const [busqueda, setBusqueda] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(false);

  const manejarBuscar = (e) => {
    e.preventDefault();
    if (busqueda.trim()) {
      router.push(`/buscar?q=${encodeURIComponent(busqueda.trim())}`);
      setMenuAbierto(false);
    }
  };

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="bg-[var(--diveme-fondo)] border-b border-black/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20 gap-4">
        <Link
          href="/"
          className="font-display text-2xl md:text-3xl tracking-[0.15em] text-[var(--diveme-texto)] hover:opacity-70 transition"
        >
          DIVEME
        </Link>

        <form onSubmit={manejarBuscar} className="hidden md:block flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full rounded-full px-4 py-2 text-sm text-[var(--diveme-texto)] outline-none border border-black/15 focus:border-black/40 transition bg-white"
          />
        </form>

        <nav className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-[0.15em] whitespace-nowrap items-center">
          <Link href="/" className="text-[var(--diveme-texto)] hover:opacity-60 transition">
            Inicio
          </Link>
          <Link href="/mujer" className="text-[var(--diveme-texto)] hover:opacity-60 transition">
            Tienda
          </Link>
          <Link href="/ofertas" className="text-[var(--diveme-acento)] hover:opacity-70 transition">
            Ofertas
          </Link>
          <Link href="/seguimiento" className="text-[var(--diveme-texto)] hover:opacity-60 transition">
            Mi pedido
          </Link>
          <CarritoIndicador />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <CarritoIndicador />
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Abrir menu"
          >
            <span className="w-6 h-0.5 bg-[var(--diveme-texto)]"></span>
            <span className="w-6 h-0.5 bg-[var(--diveme-texto)]"></span>
            <span className="w-6 h-0.5 bg-[var(--diveme-texto)]"></span>
          </button>
        </div>
      </div>

      {menuAbierto && (
        <div className="md:hidden bg-[var(--diveme-fondo)] border-t border-black/10 px-4 py-4">
          <form onSubmit={manejarBuscar} className="mb-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full rounded-full px-4 py-2 text-sm text-[var(--diveme-texto)] outline-none border border-black/15 focus:border-black/40 transition bg-white"
            />
          </form>

          <nav className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-[0.15em]">
            <Link href="/" onClick={cerrarMenu} className="text-[var(--diveme-texto)] hover:opacity-60 transition">
              Inicio
            </Link>
            <Link href="/mujer" onClick={cerrarMenu} className="text-[var(--diveme-texto)] hover:opacity-60 transition">
              Tienda
            </Link>
            <Link href="/ofertas" onClick={cerrarMenu} className="text-[var(--diveme-acento)] hover:opacity-70 transition">
              Ofertas
            </Link>
            <Link href="/seguimiento" onClick={cerrarMenu} className="text-[var(--diveme-texto)] hover:opacity-60 transition">
              Mi pedido
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
