import { obtenerProductos } from "../../lib/api";
import ProductoCard from "../../components/ProductoCard";

export default async function BuscarPage({ searchParams }) {
  const params = await searchParams;
  const q = params?.q || "";

  let productos = [];
  let error = null;

  if (q) {
    try {
      const data = await obtenerProductos({ q, limit: 100 });
      productos = data.productos;
    } catch (e) {
      error = e.message;
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="font-display text-2xl mb-6 text-gray-900">
          {q ? `Resultados para "${q}"` : "Buscar productos"}
        </h1>

        {error && <p className="text-red-600">{error}</p>}

        {!error && q && productos.length === 0 && (
          <p className="text-gray-500">No se encontraron productos para "{q}".</p>
        )}

        {!q && <p className="text-gray-500">Escribe algo en el buscador de arriba.</p>}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8">
          {productos.map((producto) => (
            <ProductoCard key={producto._id} producto={producto} />
          ))}
        </div>
      </div>
    </div>
  );
}