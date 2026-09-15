import Link from "next/link";

export default function ProductoCard({ producto }) {
  const imagen = producto.imagenes && producto.imagenes.length > 0
    ? producto.imagenes[0]
    : null;

  const tieneOferta = producto.precioOferta !== null && producto.precioOferta !== undefined;

  return (
    <Link
      href={`/producto/${producto._id}`}
      className="group block h-full"
    >
      <div className="bg-white overflow-hidden flex flex-col h-full transition-all duration-300">
        <div className="aspect-[3/4] bg-[var(--diveme-fondo)] overflow-hidden relative flex-shrink-0">
          {imagen ? (
            <img
              src={imagen}
              alt={producto.nombre}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400 text-sm">Sin imagen</span>
            </div>
          )}
          {tieneOferta && (
            <span className="absolute top-3 left-3 bg-[var(--diveme-texto)] text-white text-[10px] px-3 py-1.5 uppercase tracking-widest font-semibold">
              Oferta
            </span>
          )}
        </div>
        <div className="pt-4 flex flex-col flex-grow justify-between">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">{producto.marca}</p>
            <h3 className="font-display text-base text-[var(--diveme-texto)] mt-1 line-clamp-2 group-hover:opacity-70 transition">{producto.nombre}</h3>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              {tieneOferta ? (
                <>
                  <span className="text-sm font-semibold text-[var(--diveme-acento)]">S/ {producto.precioOferta}</span>
                  <span className="text-gray-400 line-through text-xs">S/ {producto.precio}</span>
                </>
              ) : (
                <span className="text-sm font-semibold text-[var(--diveme-texto)]">S/ {producto.precio}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}