export const SECCIONES = [
  { valor: "parte_inferior", etiqueta: "Parte inferior" },
  { valor: "parte_superior", etiqueta: "Parte superior" },
  { valor: "abrigo", etiqueta: "Abrigo" },
  { valor: "vestidos_enterizos", etiqueta: "Vestidos y enterizos" },
  { valor: "basicos", etiqueta: "Basicos" },
];

export const TIPOS_POR_SECCION = {
  parte_inferior: [
    { valor: "falda", etiqueta: "Falda" },
    { valor: "pantalon_vestir", etiqueta: "Pantalon de vestir" },
    { valor: "jean", etiqueta: "Jean" },
    { valor: "legging", etiqueta: "Legging" },
    { valor: "short", etiqueta: "Short" },
    { valor: "jogger", etiqueta: "Jogger" },
  ],
  parte_superior: [
    { valor: "blusa", etiqueta: "Blusa" },
    { valor: "camisa", etiqueta: "Camisa" },
    { valor: "top", etiqueta: "Top / Crop top" },
    { valor: "polo", etiqueta: "Polo" },
  ],
  abrigo: [
    { valor: "chompa", etiqueta: "Chompa / Sweater" },
    { valor: "casaca", etiqueta: "Casaca" },
    { valor: "chaqueta", etiqueta: "Chaqueta" },
    { valor: "blazer", etiqueta: "Blazer" },
    { valor: "cardigan", etiqueta: "Cardigan" },
    { valor: "abrigo_largo", etiqueta: "Abrigo largo" },
  ],
  vestidos_enterizos: [
    { valor: "vestido_casual", etiqueta: "Vestido casual" },
    { valor: "vestido_fiesta", etiqueta: "Vestido de fiesta" },
    { valor: "vestido_largo", etiqueta: "Vestido largo" },
    { valor: "enterizo", etiqueta: "Enterizo / Jumpsuit" },
    { valor: "mono_corto", etiqueta: "Mono corto" },
  ],
  basicos: [
    { valor: "pijama", etiqueta: "Ropa de dormir / Pijama" },
    { valor: "ropa_deportiva", etiqueta: "Ropa deportiva" },
  ],
};

export const TIPOS = Object.values(TIPOS_POR_SECCION).flat();

export const seccionDeTipo = (tipo) => {
  const entrada = Object.entries(TIPOS_POR_SECCION).find(([, tipos]) =>
    tipos.some((t) => t.valor === tipo)
  );
  return entrada ? entrada[0] : null;
};

export const etiquetaDeTipo = (tipo) => {
  const encontrado = TIPOS.find((t) => t.valor === tipo);
  return encontrado ? encontrado.etiqueta : tipo;
};

export const etiquetaDeSeccion = (seccion) => {
  const encontrada = SECCIONES.find((s) => s.valor === seccion);
  return encontrada ? encontrada.etiqueta : seccion;
};

export const TALLAS_SUGERIDAS = ["XS", "S", "M", "L", "XL", "XXL"];
