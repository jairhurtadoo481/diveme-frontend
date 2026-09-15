import { obtenerProductos } from "../lib/api";
import ProductoCard from "../components/ProductoCard";
import HeroInicio from "../components/HeroInicio";
import CategoriasDestacadas from "../components/CategoriasDestacadas";

export default async function Home() {
  let destacados = [];
  let error = null;

  try {
    const data = await obtenerProductos({ destacado: "true", limit: 8 });
    destacados = data.productos;
  } catch (e) {
    error = e.message;
  }

  return (
    <div>
      <HeroInicio />
      <CategoriasDestacadas />

      <section className="border-t border-black/10">
        <div className="relative h-[320px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/fondo4.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="font-display text-4xl mb-2">Destacados</h2>
            <p className="text-white/80 text-sm uppercase tracking-wide">Productos recomendados</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
          {error && <p className="text-red-600">{error}</p>}

          {!error && destacados.length === 0 && (
            <p className="text-gray-500">Aun no hay productos destacados.</p>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {destacados.map((producto) => (
              <ProductoCard key={producto._id} producto={producto} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}