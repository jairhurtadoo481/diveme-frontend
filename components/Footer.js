import Link from "next/link";
import { SECCIONES } from "../lib/catalogoRopa";

const INSTAGRAM_URL = "https://www.instagram.com/divemeperu/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61586438874735";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const numeroWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP;
  const whatsappUrl = numeroWhatsapp
    ? `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent("Hola! Tengo una consulta.")}`
    : null;

  return (
    <footer className="bg-white border-t border-black/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Marca */}
          <div>
            <h3 className="font-display text-2xl tracking-[0.1em] text-[var(--diveme-texto)] mb-4">DIVEME</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Moda femenina con estilo. Ropa de mujer pensada para cada ocasion.
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="font-semibold text-[var(--diveme-texto)] mb-4 uppercase tracking-wide text-xs">Categorias</h4>
            <ul className="space-y-2">
              {SECCIONES.map((s) => (
                <li key={s.valor}>
                  <Link
                    href={`/mujer?seccion=${s.valor}`}
                    className="text-gray-500 hover:text-[var(--diveme-texto)] text-sm transition"
                  >
                    {s.etiqueta}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/ofertas" className="text-[var(--diveme-acento)] font-semibold text-sm transition hover:opacity-70">
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>

          {/* Informacion */}
          <div>
            <h4 className="font-semibold text-[var(--diveme-texto)] mb-4 uppercase tracking-wide text-xs">Informacion</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/seguimiento" className="text-gray-500 hover:text-[var(--diveme-texto)] text-sm transition">
                  Seguimiento de Pedidos
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 hover:text-[var(--diveme-texto)] text-sm transition">
                  Politica de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 hover:text-[var(--diveme-texto)] text-sm transition">
                  Terminos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-500 hover:text-[var(--diveme-texto)] text-sm transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-[var(--diveme-texto)] mb-4 uppercase tracking-wide text-xs">Contacto</h4>
            <ul className="space-y-2">
              {whatsappUrl && (
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[var(--diveme-texto)] text-sm transition"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[var(--diveme-texto)] text-sm transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[var(--diveme-texto)] text-sm transition"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              {"©"} {currentYear} Diveme. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[var(--diveme-texto)] transition"
              >
                <span className="text-sm font-semibold">Facebook</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[var(--diveme-texto)] transition"
              >
                <span className="text-sm font-semibold">Instagram</span>
              </a>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[var(--diveme-texto)] transition"
                >
                  <span className="text-sm font-semibold">WhatsApp</span>
                </a>
              )}
            </div>
          </div>

          {/* Links discretos para admin y trabajador */}
          <div className="mt-6 pt-6 border-t border-black/10 flex justify-center gap-4">
            <Link href="/admin/login" className="text-xs text-gray-400 hover:text-gray-600 transition underline">
              Admin
            </Link>
            <span className="text-gray-300">{"•"}</span>
            <Link href="/mayorista/login" className="text-xs text-gray-400 hover:text-gray-600 transition underline">
              Mayorista
            </Link>
            <span className="text-gray-300">{"•"}</span>
            <Link href="/trabajador/login" className="text-xs text-gray-400 hover:text-gray-600 transition underline">
              Trabajador
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
