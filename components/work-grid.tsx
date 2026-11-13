"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, Locale, route } from "@/lib/content";

export function WorkGrid({ locale, limit }: { locale: Locale; limit?: number }) {
  const [filter, setFilter] = useState("All");
  const ar = locale === "ar";
  const showcase = Boolean(limit);
  const tags = ["All", ...Array.from(new Set(caseStudies.map(item => item.service)))];
  const items = caseStudies.filter(item => filter === "All" || item.service === filter).slice(0, limit || 99);
  return <>
    <div className={`work-toolbar ${showcase ? "work-toolbar-showcase" : ""}`}>
      <div className="filter-row" aria-label={ar ? "تصفية المشاريع" : "Filter projects"}>
        {tags.map((tag, i) => <button className={filter === tag ? "active" : ""} onClick={() => setFilter(tag)} key={tag}><span>{String(i).padStart(2, "0")}</span>{tag}</button>)}
      </div>
      <div className="work-count"><strong>{String(items.length).padStart(2, "0")}</strong><span>{ar ? "مشاريع ظاهرة" : "projects shown"}</span></div>
    </div>
    <div className={showcase ? `work-showcase work-showcase-${items.length}` : "work-grid"}>
      {items.map((item, i) => {
        const monogram = item.client.split(" ").map(w => w[0]).join("").replace(/[^A-Z]/gi, "").slice(0, 4);
        return <Link href={route(locale, `work/${item.slug}`)} className={`work-card work-card-${item.color} ${showcase ? `showcase-card showcase-card-${i + 1}` : i === 0 ? "work-wide" : ""}`} key={item.slug}>
          <div className="work-art">
            <div className="art-lines"/>
            <span className="project-index">PROJECT / {String(i + 1).padStart(2, "0")}</span>
            <span className="work-art-service">{item.service}</span>
            <strong>{monogram}</strong>
            <div className="work-art-frame"/>
            <small>{item.place}</small>
          </div>
          <div className="work-copy">
            <div className="work-copy-meta"><span>{item.service}</span><b>{item.year || "UAE"}</b></div>
            <div className="work-copy-main"><p>{ar ? "تنفيذ العلامة التجارية" : item.title}</p><h3>{item.client}</h3></div>
            <div className="work-card-action"><span>{ar ? "عرض دراسة الحالة" : "View case study"}</span><i><ArrowUpRight/></i></div>
          </div>
        </Link>;
      })}
    </div>
  </>;
}
