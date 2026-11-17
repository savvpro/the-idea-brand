"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Locale, portfolioImages } from "@/lib/content";

export function PortfolioGallery({ locale, serviceSlug, compact = false }: { locale: Locale; serviceSlug?: string; compact?: boolean }) {
  const ar = locale === "ar";
  const source = serviceSlug ? portfolioImages.filter(item => item.serviceSlug === serviceSlug) : portfolioImages;
  const categories = ["All", ...Array.from(new Set(source.map(item => item.category)))];
  const [filter, setFilter] = useState("All");
  const visible = (filter === "All" ? source : source.filter(item => item.category === filter)).slice(0, compact ? 6 : source.length);

  if (!source.length) return null;

  return <section className={`portfolio-gallery-section ${compact ? "portfolio-gallery-compact" : ""}`}>
    <div className="portfolio-gallery-head">
      <div>
        <span className="eyebrow light">{ar ? "من أعمالنا" : "REAL WORK"}</span>
        <h2>{ar ? "صُمم. صُنع. ورُكب." : "Designed. Made. Installed."}</h2>
      </div>
      <div className="portfolio-gallery-summary">
        <strong>{String(source.length).padStart(2, "0")}</strong>
        <p>{ar ? "صور حقيقية من مشاريع نفذها فريقنا في الإمارات." : "Real project photography from work delivered by our team across the UAE."}</p>
      </div>
    </div>
    {!serviceSlug && <div className="portfolio-filter" aria-label={ar ? "تصفية معرض الصور" : "Filter project gallery"}>
      {categories.map(category => {
        const count = category === "All" ? source.length : source.filter(item => item.category === category).length;
        return <button type="button" className={filter === category ? "active" : ""} onClick={() => setFilter(category)} key={category}>
          <span>{category === "All" && ar ? "الكل" : category}</span>
          <small>{String(count).padStart(2, "0")}</small>
        </button>;
      })}
    </div>}
    <div className="portfolio-photo-grid">
      {visible.map((item, index) => <figure className="portfolio-photo" key={item.src}>
        <div className="portfolio-photo-media">
          <Image src={item.src} alt={item.title} fill sizes={compact ? "(max-width: 720px) 100vw, 33vw" : "(max-width: 720px) 100vw, (max-width: 1050px) 50vw, 33vw"}/>
        </div>
        <figcaption>
          <small>{String(index + 1).padStart(2, "0")}</small>
          <div><span>{item.category}</span><strong>{item.title}</strong></div>
          <ArrowUpRight/>
        </figcaption>
      </figure>)}
    </div>
  </section>;
}
