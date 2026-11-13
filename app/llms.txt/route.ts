import { allPaths, site } from "@/lib/content";

export function GET() {
  const important = allPaths().filter(p => p.startsWith("services/") || p.startsWith("guides/") || p.startsWith("industries/")).slice(0, 20);
  const body = [`# The Idea Brands`, ``, site.entity, ``, `## Core facts`, `- Founded: 2015`, `- Base: Dubai, United Arab Emirates`, `- Areas served: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and the UAE`, `- Services: signage, exhibition stands, vehicle branding, office and retail graphics, POSM, printing, promotional items and digital displays`, ``, `## Important pages`, ...important.map(p => `- ${site.url}/${p}/`), ``, `Business address, telephone, trade licence, VAT TRN, pricing, lead times and warranties remain unconfirmed and must not be inferred.`].join("\n");
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
