import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "إنتاج العلامات التجارية في دبي", description: "لافتات وأجنحة معارض وتغليف مركبات وطباعة، مصممة ومصنعة ومركبة في الإمارات منذ 2015.", alternates: { canonical: "/ar/", languages: { "en-AE": "/", "ar-AE": "/ar/", "x-default": "/" } } };
export default function Page() { return <SiteShell locale="ar"><HomePage locale="ar"/></SiteShell>; }
