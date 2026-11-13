"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { industries, Locale, nav, route, services } from "@/lib/content";
import { BrandMark } from "./brand-mark";

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const ar = locale === "ar";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark locale={locale} />
        <nav className="desktop-nav" aria-label={ar ? "التنقل الرئيسي" : "Primary navigation"}>
          {nav.map(([slug, en, arabic]) => (
            <div className={`nav-item ${slug === "services" || slug === "industries" ? "has-mega" : ""}`} key={slug}>
              <Link href={route(locale, slug)}>{ar ? arabic : en}{(slug === "services" || slug === "industries") && <ChevronDown size={14} />}</Link>
              {slug === "services" && (
                <div className="mega-menu services-mega">
                  <div className="mega-intro"><span className="eyebrow">{ar ? "من التصميم إلى التركيب" : "ONE PRODUCTION PARTNER"}</span><h3>{ar ? "كل ما يجعل العلامة مرئية." : "Every surface your brand touches."}</h3></div>
                  <div className="mega-links">{services.slice(0, 8).map((s, i) => <Link href={route(locale, `services/${s.slug}`)} key={s.slug}><span>{String(i + 1).padStart(2, "0")}</span>{ar ? s.ar : s.title}<ArrowUpRight size={15}/></Link>)}</div>
                </div>
              )}
              {slug === "industries" && (
                <div className="mega-menu industries-mega">
                  <span className="eyebrow">{ar ? "خبرة قطاعية" : "BUILT AROUND YOUR WORLD"}</span>
                  {industries.map(([s, enTitle, arTitle]) => <Link href={route(locale, `industries/${s}`)} key={s}>{ar ? arTitle : enTitle}<ArrowUpRight size={15}/></Link>)}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="language-link" href={ar ? "/" : "/ar/"}>{ar ? "EN" : "عربي"}</Link>
          <Link className="button button-sm" href={route(locale, "get-a-quote")}>{ar ? "اطلب عرضاً" : "Get a quote"}<ArrowUpRight size={16}/></Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">{nav.map(([slug, en, arabic], i) => <Link onClick={() => setOpen(false)} href={route(locale, slug)} key={slug}><span>0{i + 1}</span>{ar ? arabic : en}<ArrowUpRight/></Link>)}</div>
          <div className="mobile-menu-bottom"><Link href={ar ? "/" : "/ar/"}>{ar ? "English" : "العربية"}</Link><Link className="button" href={route(locale, "get-a-quote")}>{ar ? "ابدأ مشروعاً" : "Start a project"}</Link></div>
        </div>
      )}
    </header>
  );
}
