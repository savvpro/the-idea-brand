import Image from "next/image";
import { Locale, portfolioImages } from "@/lib/content";

const portraitImages = new Set([
  "/Website Pictures/Signage/Love Shack Fancy - Dubai Marina.webp",
  "/Website Pictures/Office & Retail Branding/Office Branding - AMD Dubai.webp",
  "/Website Pictures/Display Stands & POSM/Display Stand - AWR.webp",
  "/Website Pictures/Display Stands & POSM/Flags - AWR.webp",
  "/Website Pictures/Display Stands & POSM/Lubricant Stands - ADNOC.webp",
]);

export function HomeGalleryLoop({ locale }: { locale: Locale }) {
  const ar = locale === "ar";

  return <section className="home-reel" aria-label={ar ? "معرض المشاريع" : "Project gallery"}>
    <div className="home-reel-head">
      <div><span className="eyebrow light">{ar ? "معرض المشاريع" : "PROJECT REEL"}</span><h2>{ar ? "أعمال حقيقية، تتحرك باستمرار." : "Real work, in motion."}</h2></div>
      <div className="home-reel-count"><strong>{String(portfolioImages.length).padStart(2, "0")}</strong><span>{ar ? "صورة مشروع" : "PROJECT IMAGES"}</span></div>
    </div>
    <div className="home-reel-window">
      <div className="home-reel-track">
        {[0, 1].map(group => <div className="home-reel-group" aria-hidden={group === 1} key={group}>
          {portfolioImages.map((item, index) => <figure className={`home-reel-card ${portraitImages.has(item.src) ? "home-reel-portrait" : ""}`} key={`${group}-${item.src}`}>
            <div className="home-reel-image"><Image src={item.src} alt={group === 0 ? item.title : ""} fill sizes="(max-width: 720px) 78vw, 420px"/></div>
            <figcaption><small>{String(index + 1).padStart(2, "0")}</small><div><span>{item.category}</span><strong>{item.title}</strong></div></figcaption>
          </figure>)}
        </div>)}
      </div>
    </div>
  </section>;
}
