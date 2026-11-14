import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ecloudlab — Desarrollo de Software y Soluciones con IA",
    short_name: "Ecloudlab",
    description:
      "Desarrollo de software a medida, aplicaciones web y móviles, arquitectura en la nube y soluciones autónomas con IA por Brian Pomaquero.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
