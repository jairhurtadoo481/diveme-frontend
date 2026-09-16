export default function manifest() {
  return {
    name: "Diveme",
    short_name: "Diveme",
    description: "Diveme - Moda femenina. Ropa de mujer con estilo.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f4",
    theme_color: "#faf7f4",
    icons: [
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
