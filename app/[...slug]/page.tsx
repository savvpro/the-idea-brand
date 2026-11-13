import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content-page";
import { SiteShell } from "@/components/site-shell";
import { allPaths, childTitles, guides, industries, locations, Locale, route, services, site, titleFromSlug } from "@/lib/content";

type Props = { params: Promise<{ slug: string[] }> };

function resolve(slug: string[]) {
  const locale: Locale = slug[0] === "ar" ? "ar" : "en";
  const parts = locale === "ar" ? slug.slice(1) : slug;
  return { locale, path: parts.join("/") };
}

export function generateStaticParams() {
  return allPaths().flatMap(path => [{ slug: path.split("/") }, { slug: ["ar", ...path.split("/")] }]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const { locale, path } = resolve(slug); const ar = locale === "ar"; const parts = path.split("/");
  let title = titleFromSlug(parts.at(-1) || "The Idea Brands");
  if (parts[0] === "services" && parts.length === 2) { const item = services.find(x => x.slug === parts[1]); if (item) title = ar ? item.ar : item.title; }
  if (parts[0] === "services" && parts.length === 3 && childTitles[parts[2]]) title = ar ? childTitles[parts[2]][1] : childTitles[parts[2]][0];
  if (parts[0] === "guides") { const item = guides.find(x => x[0] === parts[1]); if (item) title = ar ? item[2] : item[1]; }
  if (parts[0] === "industries") { const item = industries.find(x => x[0] === parts[1]); if (item) title = ar ? item[2] : item[1]; }
  if (parts[0] === "locations") { const item = locations.find(x => x[0] === parts[1]); if (item) title = ar ? item[2] : item[1]; }
  const canonical = route(locale, path);
  const enPath = route("en", path); const arPath = route("ar", path);
  return { title, description: ar ? "تصميم وتصنيع وتركيب العلامات التجارية في الإمارات منذ 2015." : `${title}, designed, fabricated and installed across the UAE by The Idea Brands.`, alternates: { canonical, languages: { "en-AE": enPath, "ar-AE": arPath, "x-default": enPath } }, openGraph: { title, description: site.entity, url: canonical, locale: ar ? "ar_AE" : "en_AE" } };
}

export default async function Page({ params }: Props) {
  const { slug } = await params; const { locale, path } = resolve(slug);
  if (!path || !allPaths().includes(path)) notFound();
  return <SiteShell locale={locale}><ContentPage locale={locale} path={path}/></SiteShell>;
}
