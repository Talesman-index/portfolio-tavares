import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.tavares.studio";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Video",
        // Désactive l'exploration du fichier d'arrière-plan décoratif par Googlebot-Video
        disallow: ["/assets/herop.mp4"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
