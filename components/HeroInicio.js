import Link from "next/link";

export default function HeroInicio() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] h-[640px]">
        <div className="hidden md:block relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/fondo1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative overflow-hidden flex items-center justify-center text-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/fondo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/35" />

          <div className="relative px-4 max-w-xl mx-auto text-white">
            <p className="text-xs tracking-[0.4em] uppercase mb-6 text-white/80">
              Moda femenina
            </p>
            <h1 className="font-display text-6xl md:text-7xl leading-[0.95] mb-6">
              DIVEME
            </h1>
            <p className="text-white/85 text-base md:text-lg max-w-xl mx-auto mb-12">
              Ropa de mujer con estilo propio. Piezas pensadas para acompanarte todos los dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mujer"
                className="border border-white text-white px-10 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-black transition"
              >
                Ver coleccion
              </Link>
              <Link
                href="/ofertas"
                className="border border-white/70 text-white px-10 py-3 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-black transition"
              >
                Ver ofertas
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/fondo2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
