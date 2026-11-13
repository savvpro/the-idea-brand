"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { industries, Locale, nav, route, services } from "@/lib/content";
import { BrandMark } from "./brand-mark";

const mobileNavDetails: Record<string, [string, string]> = {
  services: ["What we make", "ما نصنعه"],
  industries: ["Where we work", "القطاعات التي نخدمها"],
  work: ["Selected projects", "مشاريع مختارة"],
  guides: ["Plan it right", "خطط بشكل صحيح"],
  about: ["The studio since 2015", "الاستوديو منذ 2015"],
};

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<"services" | "industries" | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const ar = locale === "ar";

  const closeMobileMenu = () => {
    setOpen(false);
    setExpandedMobileMenu(null);
  };

  const toggleMobileMenu = () => {
    if (open) setExpandedMobileMenu(null);
    setOpen(!open);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
        menuButtonRef.current?.focus();
      }
    };

    const closeOnDesktop = () => {
      if (window.innerWidth > 1050) setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${open ? "menu-open" : ""}`}>
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
            <button ref={menuButtonRef} className={`menu-button ${open ? "is-open" : ""}`} onClick={toggleMobileMenu} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? (ar ? "إغلاق القائمة" : "Close menu") : (ar ? "فتح القائمة" : "Open menu")}>{open ? <X/> : <Menu/>}</button>
          </div>
        </div>
      </header>
      {open && (
        <nav id="mobile-navigation" className="mobile-menu" aria-label={ar ? "التنقل الرئيسي" : "Mobile navigation"}>
          <div className="mobile-menu-head">
            <div><span>{ar ? "القائمة الرئيسية" : "Main navigation"}</span><strong>The Idea Brands</strong></div>
            <small><i />Dubai · UAE</small>
          </div>
          <div className="mobile-menu-links">{nav.map(([slug, en, arabic], i) => {
            const submenu = slug === "services" || slug === "industries";
            const expanded = expandedMobileMenu === slug;
            return <div className={`mobile-menu-item ${expanded ? "is-expanded" : ""}`} key={slug}>
              <div className="mobile-menu-row">
                <Link className="mobile-menu-main" onClick={closeMobileMenu} href={route(locale, slug)}><span className="mobile-menu-index">0{i + 1}</span><div className="mobile-menu-label"><strong>{ar ? arabic : en}</strong><small>{ar ? mobileNavDetails[slug]?.[1] : mobileNavDetails[slug]?.[0]}</small></div></Link>
                {submenu ? <button className="mobile-submenu-toggle" type="button" onClick={() => setExpandedMobileMenu(expanded ? null : slug)} aria-expanded={expanded} aria-controls={`mobile-${slug}-submenu`} aria-label={`${expanded ? (ar ? "إغلاق" : "Close") : (ar ? "فتح" : "Open")} ${ar ? arabic : en}`}><ChevronDown/></button> : <Link className="mobile-menu-arrow" onClick={closeMobileMenu} href={route(locale, slug)} aria-label={ar ? arabic : en}><ArrowUpRight/></Link>}
              </div>
              {expanded && <div id={`mobile-${slug}-submenu`} className="mobile-submenu">
                {slug === "services" ? services.map((service, index) => <Link onClick={closeMobileMenu} href={route(locale, `services/${service.slug}`)} key={service.slug}><span>{String(index + 1).padStart(2, "0")}</span><strong>{ar ? service.ar : service.title}</strong><ArrowUpRight/></Link>) : industries.map(([industrySlug, enTitle, arTitle], index) => <Link onClick={closeMobileMenu} href={route(locale, `industries/${industrySlug}`)} key={industrySlug}><span>{String(index + 1).padStart(2, "0")}</span><strong>{ar ? arTitle : enTitle}</strong><ArrowUpRight/></Link>)}
              </div>}
            </div>;
          })}</div>
          <div className="mobile-menu-bottom"><Link onClick={closeMobileMenu} className="mobile-language" href={ar ? "/" : "/ar/"}><span>{ar ? "Language" : "اللغة"}</span><strong>{ar ? "English" : "العربية"}</strong></Link><Link onClick={closeMobileMenu} className="button" href={route(locale, "get-a-quote")}>{ar ? "ابدأ مشروعاً" : "Start a project"}<ArrowUpRight size={17}/></Link></div>
        </nav>
      )}
    </>
  );
}
