import type { MetadataRoute } from "next";

const baseUrl = "https://bashgit.com";

const routes = ["", "/services", "/expertise", "/process", "/insights", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.8 : 0.7
  }));
}
