import type { MetadataRoute } from "next";
import { allPaths, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", ...allPaths()];
  return paths.flatMap(path => {
    const suffix = path ? `${path}/` : "";
    return [{ url: `${site.url}/${suffix}`, lastModified: now, changeFrequency: path.startsWith("guides") || path === "blog" ? "monthly" as const : "yearly" as const, priority: path === "" ? 1 : path.startsWith("services") ? .8 : .6 }, { url: `${site.url}/ar/${suffix}`, lastModified: now, changeFrequency: "monthly" as const, priority: path === "" ? .9 : .6 }];
  });
}
