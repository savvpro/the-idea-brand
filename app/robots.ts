import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  const agents = ["Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Google-Extended", "Applebot-Extended"];
  return { rules: agents.map(userAgent => ({ userAgent, allow: "/" })), sitemap: `${site.url}/sitemap.xml`, host: site.url };
}
