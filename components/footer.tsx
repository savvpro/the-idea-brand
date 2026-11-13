import Link from "next/link";
import { ArrowRight, ArrowUp, ArrowUpRight, BookOpen, MapPin, PanelsTopLeft } from "lucide-react";
import { guides, industries, Locale, route, services } from "@/lib/content";
import { BrandMark } from "./brand-mark";

export function Footer({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-top">
        <div><span className="eyebrow light">{ar ? "لنتحدث عن مشروعك" : "HAVE A PROJECT IN MIND?"}</span><h2>{ar ? <>حوّل الفكرة<br/><em>إلى واقع.</em></> : <>From idea<br/><em>to installed.</em></>}</h2><p>{ar ? "أرسل لنا الموجز. سنساعدك على تحديد الخامة والنطاق والمسار الصحيح قبل بدء الإنتاج." : "Bring the brief. We’ll help define the right material, scope and approval path before production starts."}</p></div>
        <Link className="footer-circle" href={route(locale, "get-a-quote")}><span>{ar ? "ابدأ الآن" : "Start a project"}</span><ArrowUpRight/></Link>
      </div>
      <div className="footer-action-rail">
        <Link href={route(locale, "get-a-quote")}><span>01</span><div><small>{ar ? "لديك موجز؟" : "HAVE A BRIEF?"}</small><strong>{ar ? "اطلب عرضاً" : "Request a quote"}</strong></div><ArrowUpRight/></Link>
        <Link href={route(locale, "work")}><span>02</span><div><small>{ar ? "شاهد الدليل" : "SEE THE PROOF"}</small><strong>{ar ? "استكشف أعمالنا" : "Explore our work"}</strong></div><PanelsTopLeft/></Link>
        <Link href={route(locale, "guides")}><span>03</span><div><small>{ar ? "خطط بشكل أفضل" : "PLAN IT RIGHT"}</small><strong>{ar ? "اقرأ الأدلة" : "Read the guides"}</strong></div><BookOpen/></Link>
      </div>
      <div className="footer-grid">
        <div className="footer-brand"><BrandMark locale={locale} light/><p>{ar ? "شركة إنتاج علامات تجارية مقرها دبي، تصمم وتصنع وتركب في جميع أنحاء الإمارات منذ 2015." : "A Dubai brand production company designing, fabricating and installing across the UAE since 2015."}</p><div className="footer-location"><MapPin/><span>Dubai<br/><small>United Arab Emirates</small></span></div><div className="since"><span>{ar ? "منذ" : "EST."}</span><strong>2015</strong></div></div>
        <div className="footer-column"><h3><span>01</span>{ar ? "الخدمات" : "Services"}</h3>{services.slice(0, 7).map(s => <Link href={route(locale, `services/${s.slug}`)} key={s.slug}>{ar ? s.ar : s.title}<ArrowRight/></Link>)}</div>
        <div className="footer-column"><h3><span>02</span>{ar ? "القطاعات" : "Industries"}</h3>{industries.slice(0, 5).map(([slug, en, arabic]) => <Link href={route(locale, `industries/${slug}`)} key={slug}>{ar ? arabic : en}<ArrowRight/></Link>)}<h3 className="footer-subhead"><span>03</span>{ar ? "أدلة" : "Guides"}</h3>{guides.slice(0, 2).map(([slug, en, arabic]) => <Link href={route(locale, `guides/${slug}`)} key={slug}>{ar ? arabic : en}<ArrowRight/></Link>)}</div>
        <div className="footer-column footer-contact"><h3><span>04</span>{ar ? "تواصل" : "Contact"}</h3><p>{ar ? "بيانات التواصل النهائية بانتظار تأكيد العميل." : "Final contact details are awaiting client confirmation."}</p><Link className="footer-contact-link" href={route(locale, "contact")}>{ar ? "صفحة التواصل" : "Open contact page"}<ArrowUpRight/></Link><div className="footer-meta"><Link href={route(locale, "privacy-policy")}>{ar ? "الخصوصية" : "Privacy"}</Link><Link href={route(locale, "terms")}>{ar ? "الشروط" : "Terms"}</Link></div></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} The Idea Brands</span><span className="footer-availability"><i/>{ar ? "نستقبل مشاريع جديدة" : "Accepting new projects"}</span><a href="#main">{ar ? "إلى الأعلى" : "Back to top"}<ArrowUp/></a></div>
    </footer>
  );
}
