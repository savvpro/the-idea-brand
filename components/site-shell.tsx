import { ReactNode } from "react";
import { Locale, site } from "@/lib/content";
import { Footer } from "./footer";
import { Header } from "./header";

export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: site.name,
    alternateName: site.arabicName,
    url: site.url,
    logo: `${site.url}/logo.png`,
    foundingDate: "2015",
    description: site.entity,
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
    areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "United Arab Emirates"],
    knowsAbout: ["3D signage", "Exhibition stand design", "Vehicle branding", "Wayfinding signage", "Large format printing", "POSM display stands", "Dubai signage permits", "RTA vehicle advertising permits"],
  };
  return <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={locale === "ar" ? "arabic" : "english"}><a href="#main" className="skip-link">Skip to content</a><Header locale={locale}/><main id="main">{children}</main><Footer locale={locale}/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/></div>;
}
