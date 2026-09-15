"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SECCIONES } from "../lib/catalogoRopa";

export default function CategoriasDestacadas() {
  const [visible, setVisible] = useState(false);
  const contenedorRef = useRef(null);

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observador.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (contenedorRef.current) observador.observe(contenedorRef.current);
    return () => observador.disconnect();
  }, []);

  return (
    <section className="bg-white py-20" ref={contenedorRef}>
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-[var(--diveme-acento)] mb-2">
          Descubre
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-center mb-12 text-[var(--diveme-texto)]">
          Compra por categoria
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {SECCIONES.map((s, i) => (
            <Link
              key={s.valor}
              href={`/mujer?seccion=${s.valor}`}
              className={`reveal-item ${visible ? "visible" : ""} group border border-black/10 rounded-lg p-10 flex items-center justify-center h-32 transition-all duration-300 bg-[var(--diveme-fondo)] hover:bg-[var(--diveme-texto)] cursor-pointer`}
              style={{ animationDelay: visible ? `${i * 90}ms` : "0ms" }}
            >
              <span className="font-display text-lg md:text-xl text-[var(--diveme-texto)] group-hover:text-white transition text-center">
                {s.etiqueta}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
