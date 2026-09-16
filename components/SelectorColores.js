"use client";

import { useState } from "react";

const PALETA = [
  { nombre: "Negro", hex: "#000000" },
  { nombre: "Blanco", hex: "#FFFFFF" },
  { nombre: "Gris", hex: "#9CA3AF" },
  { nombre: "Beige", hex: "#E8DCC8" },
  { nombre: "Camel", hex: "#C19A6B" },
  { nombre: "Marron", hex: "#78350F" },
  { nombre: "Rojo", hex: "#DC2626" },
  { nombre: "Rosado", hex: "#F9A8D4" },
  { nombre: "Fucsia", hex: "#DB2777" },
  { nombre: "Morado", hex: "#7C3AED" },
  { nombre: "Azul", hex: "#2563EB" },
  { nombre: "Celeste", hex: "#7DD3FC" },
  { nombre: "Verde", hex: "#16A34A" },
  { nombre: "Amarillo", hex: "#FACC15" },
  { nombre: "Naranja", hex: "#EA580C" },
  { nombre: "Dorado", hex: "#D4AF37" },
  { nombre: "Plateado", hex: "#C0C0C0" },
];

export default function SelectorColores({ value, onChange }) {
  const seleccionados = value
    ? value.split(",").map((c) => c.trim()).filter(Boolean)
    : [];
  const [otro, setOtro] = useState("");

  const alternar = (nombre) => {
    const yaEsta = seleccionados.includes(nombre);
    const nuevos = yaEsta
      ? seleccionados.filter((c) => c !== nombre)
      : [...seleccionados, nombre];
    onChange(nuevos.join(", "));
  };

  const agregarOtro = () => {
    const limpio = otro.trim();
    if (!limpio || seleccionados.includes(limpio)) return;
    onChange([...seleccionados, limpio].join(", "));
    setOtro("");
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-3">
        {PALETA.map((c) => {
          const activo = seleccionados.includes(c.nombre);
          return (
            <button
              key={c.nombre}
              type="button"
              onClick={() => alternar(c.nombre)}
              title={c.nombre}
              className={`flex items-center gap-1.5 border rounded-full pl-1.5 pr-3 py-1 text-xs transition ${
                activo ? "border-black bg-gray-100 font-semibold text-gray-900" : "border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              <span
                className="w-4 h-4 rounded-full border border-black/10 flex-shrink-0"
                style={{ backgroundColor: c.hex }}
              />
              {c.nombre}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={otro}
          onChange={(e) => setOtro(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              agregarOtro();
            }
          }}
          placeholder="Otro color..."
          className="border border-gray-300 rounded px-3 py-1.5 text-sm flex-1 bg-white text-gray-900 placeholder-gray-400"
        />
        <button
          type="button"
          onClick={agregarOtro}
          className="text-sm px-3 py-1.5 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition"
        >
          + Agregar
        </button>
      </div>

      {seleccionados.length > 0 && (
        <p className="text-xs text-gray-400 mt-2">Seleccionados: {seleccionados.join(", ")}</p>
      )}
    </div>
  );
}
