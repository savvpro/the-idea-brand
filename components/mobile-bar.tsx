import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { Locale, route, site } from "@/lib/content";

export function MobileBar({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  return <div className="mobile-bar"><Link href={site.phone ? `tel:${site.phone}` : route(locale, "contact")}><Phone/>{ar ? "اتصال" : "Call"}</Link><Link href={site.whatsapp ? `https://wa.me/${site.whatsapp}` : route(locale, "contact")}><MessageCircle/>{ar ? "واتساب" : "WhatsApp"}</Link><Link href={route(locale, "get-a-quote")}><Send/>{ar ? "عرض سعر" : "Quote"}</Link></div>;
}
