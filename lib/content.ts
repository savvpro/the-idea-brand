export type Locale = "en" | "ar";

export const site = {
  name: "The Idea Brands",
  arabicName: "ذا آيديا براندز",
  founded: 2015,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  entity:
    "The Idea Brands is a Dubai-based brand production company, founded in 2015, that designs, fabricates and installs signage, exhibition stands, vehicle branding, display stands and printed materials across the UAE.",
};

export const services = [
  { slug: "signage", title: "Signage", ar: "اللافتات", icon: "sign", summary: "3D illuminated letters, neon, lightboxes and wayfinding, built for 45°C summers and Dubai’s approval rules.", arSummary: "لافتات مضيئة ثلاثية الأبعاد ونيون وصناديق ضوئية وأنظمة إرشاد مصممة لمناخ الإمارات ومتطلبات الجهات المختصة." },
  { slug: "exhibition-stands", title: "Exhibition Stands", ar: "أجنحة المعارض", icon: "booth", summary: "Custom stands for GITEX, Gulfood, VIV MEA and beyond. Rendered, built and handed over on time.", arSummary: "تصميم وتنفيذ أجنحة مخصصة لمعارض جيتكس وجلفود وغيرها، من التصور ثلاثي الأبعاد حتى التسليم." },
  { slug: "vehicle-branding", title: "Vehicle Branding", ar: "تغليف المركبات", icon: "car", summary: "Fleet wraps and door logos with RTA permit support, using UV-rated films that hold their colour.", arSummary: "تغليف الأساطيل وشعارات الأبواب بخامات مقاومة للأشعة فوق البنفسجية ودعم متطلبات تصريح هيئة الطرق." },
  { slug: "office-and-retail-branding", title: "Office & Retail Branding", ar: "هوية المكاتب والمتاجر", icon: "store", summary: "Frosted film, one-way vision and wall graphics that turn a space into a brand.", arSummary: "أفلام زجاجية ورسومات جدران ونوافذ تحول المكان إلى تجربة متكاملة للعلامة." },
  { slug: "display-stands-posm", title: "Display Stands & POSM", ar: "وحدات العرض", icon: "display", summary: "MDF, metal and acrylic units that win shelf space, shipped flat or installed.", arSummary: "وحدات عرض من الخشب والمعدن والأكريليك مصممة للانتشار داخل نقاط البيع." },
  { slug: "printing", title: "Print & Promotional", ar: "الطباعة والهدايا", icon: "print", summary: "Large-format, offset, invitation cards, uniforms and corporate gifts, managed under one roof.", arSummary: "طباعة كبيرة ورقمية وأوفست وبطاقات وهدايا وملابس مؤسسية من مصدر واحد." },
  { slug: "promotional-items-corporate-gifts", title: "Promotional Items & Corporate Gifts", ar: "الهدايا المؤسسية", icon: "gift", summary: "Uniforms, awards and gift boxes, sourced, branded and packed in Dubai.", arSummary: "ملابس وجوائز وصناديق هدايا يتم توريدها وتخصيصها وتغليفها في دبي." },
  { slug: "digital-signage-led-screens", title: "Digital Signage & LED Screens", ar: "الشاشات الرقمية", icon: "screen", summary: "Video walls, LED displays and interactive screens for spaces that need live content.", arSummary: "جدران فيديو وشاشات LED وحلول تفاعلية للمحتوى المتجدد." },
  { slug: "laser-cutting-engraving", title: "Laser Cutting & Engraving", ar: "القص والحفر بالليزر", icon: "laser", summary: "Precision cutting and engraving for acrylic, metal, wood, awards and prototypes.", arSummary: "قص وحفر دقيق للأكريليك والمعادن والخشب والجوائز والنماذج." },
  { slug: "graphic-design", title: "Graphic Design", ar: "التصميم الجرافيكي", icon: "design", summary: "Production-ready design, artwork adaptation and brand rollout across physical touchpoints.", arSummary: "تصاميم جاهزة للإنتاج وتكييف الهوية عبر مختلف نقاط التواصل المادية." },
  { slug: "sourcing-procurement", title: "Sourcing & Procurement", ar: "التوريد والمشتريات", icon: "source", summary: "Coordinated corporate and government supply with clear specifications and documentation.", arSummary: "توريد منظم للشركات والجهات الحكومية بمواصفات ووثائق واضحة." },
];

export const serviceChildren: Record<string, string[]> = {
  signage: ["3d-illuminated-signs", "neon-signs", "led-signs", "acrylic-and-stainless-steel-letters", "lightbox-and-flex-signs", "wayfinding-signage", "indoor-outdoor-signage"],
  "exhibition-stands": ["custom-exhibition-stands", "modular-and-portable-displays", "event-branding"],
  printing: ["large-format-printing", "digital-printing", "offset-printing", "invitation-cards"],
};

export const childTitles: Record<string, [string, string]> = {
  "3d-illuminated-signs": ["3D Illuminated Signs", "لافتات مضيئة ثلاثية الأبعاد"],
  "neon-signs": ["Neon Signs", "لافتات نيون"],
  "led-signs": ["LED Signs", "لافتات LED"],
  "acrylic-and-stainless-steel-letters": ["Acrylic & Stainless Steel Letters", "حروف أكريليك وستانلس ستيل"],
  "lightbox-and-flex-signs": ["Lightbox & Flex Signs", "صناديق ضوئية ولافتات فلكس"],
  "wayfinding-signage": ["Wayfinding Signage", "لافتات إرشادية"],
  "indoor-outdoor-signage": ["Indoor & Outdoor Signage", "لافتات داخلية وخارجية"],
  "custom-exhibition-stands": ["Custom Exhibition Stands", "أجنحة معارض مخصصة"],
  "modular-and-portable-displays": ["Modular & Portable Displays", "وحدات عرض متنقلة"],
  "event-branding": ["Event Branding", "هوية الفعاليات"],
  "large-format-printing": ["Large Format Printing", "الطباعة كبيرة الحجم"],
  "digital-printing": ["Digital Printing", "الطباعة الرقمية"],
  "offset-printing": ["Offset Printing", "طباعة الأوفست"],
  "invitation-cards": ["Invitation Cards", "بطاقات الدعوة"],
};

export const industries = [
  ["automotive", "Automotive", "قطاع السيارات"],
  ["energy-and-industrial", "Energy & Industrial", "الطاقة والصناعة"],
  ["retail-and-fnb", "Retail & F&B", "التجزئة والمطاعم"],
  ["real-estate-and-hospitality", "Real Estate & Hospitality", "العقارات والضيافة"],
  ["corporate-and-government", "Corporate & Government", "الشركات والجهات الحكومية"],
  ["healthcare", "Healthcare", "الرعاية الصحية"],
  ["technology-and-events", "Technology & Events", "التقنية والفعاليات"],
] as const;

export const guides = [
  ["dubai-signage-permit-guide", "Dubai signage permit guide", "دليل تصريح اللافتات في دبي", "Dubai Municipality", "Permit drawings, authority checkpoints and what to prepare before fabrication."],
  ["det-shopfront-signage-rules", "DET shopfront signage rules", "قواعد لافتات واجهات المحلات", "DET · Updated Nov 2026", "One trade name, horizontal placement, Arabic above English and static content."],
  ["rta-vehicle-advertising-permit", "RTA vehicle advertising permit", "تصريح إعلانات المركبات", "RTA", "What requires a permit, Arabic content rules, clear windows and the approval path."],
  ["sign-cost-guide-dubai", "What changes the cost of a sign in Dubai?", "ما الذي يحدد تكلفة اللافتة؟", "Cost guide", "Size, material, lighting, access, permits and installation are the main cost drivers."],
  ["exhibition-stand-cost-guide", "Exhibition stand cost guide", "دليل تكلفة أجنحة المعارض", "Planning guide", "A practical breakdown of stand area, structure, finishes, AV, logistics and reuse."],
  ["materials-for-uae-climate", "Materials for the UAE climate", "خامات مناسبة لمناخ الإمارات", "Materials guide", "How heat, UV, humidity and coastal air should shape material choices."],
] as const;

export const locations = [
  ["signage-company-dubai", "Signage company in Dubai", "شركة لافتات في دبي", "Dubai Municipality · DET", "Showroom, retail, office and fleet production across Dubai mainland and free zones."],
  ["signage-company-abu-dhabi", "Signage company in Abu Dhabi", "شركة لافتات في أبوظبي", "DMT · TAMM", "Exhibition and brand production for Abu Dhabi, including work delivered at VIV MEA."],
  ["signage-company-sharjah", "Signage company in Sharjah", "شركة لافتات في الشارقة", "Sharjah Municipality", "Facade and showroom branding in Sharjah, grounded in local approval requirements."],
  ["exhibition-stand-builder-dubai", "Exhibition stand builder in Dubai", "بناء أجنحة المعارض في دبي", "DWTC · Expo City", "Stand design, fabrication, installation and dismantling for Dubai’s major venues."],
] as const;

export const caseStudies = [
  { slug: "asbis-gitex-2023", client: "ASBIS", title: "Exhibition stand", place: "GITEX, Dubai", year: "2023", service: "Exhibitions", color: "red", image: "/Website Pictures/Exhibition Stands/Exhibition Stand - ASBIS.webp" },
  { slug: "iffco-animal-nutrition-viv-mea-2025", client: "IFFCO Animal Nutrition", title: "Exhibition stand", place: "VIV MEA, Abu Dhabi", year: "2025", service: "Exhibitions", color: "sand", image: "/Website Pictures/Exhibition Stands/IFFCO Exhibition Stand - VIV MEA 2026.webp" },
  { slug: "chery-sharjah-showroom", client: "Chery", title: "Showroom branding & facade", place: "Sharjah", year: "", service: "Signage", color: "ink", image: "/Website Pictures/Office & Retail Branding/Office Branding - Chery.webp" },
  { slug: "motul-service-centre-signage", client: "Motul", title: "Service centre signage", place: "UAE", year: "", service: "Signage", color: "red" },
  { slug: "adnoc-dagenite-display-stands", client: "ADNOC / Dagenite", title: "Display stands", place: "UAE", year: "", service: "POSM", color: "sand", image: "/Website Pictures/Display Stands & POSM/Lubricant Stands - ADNOC.webp" },
  { slug: "atlas-copco-ncc-fleet-branding", client: "Atlas Copco & NCC", title: "Fleet branding", place: "UAE", year: "", service: "Vehicle", color: "ink", image: "/Website Pictures/Vehicle Branding/Vehicle Branding - ATLAS Copco.webp" },
  { slug: "aw-rostamani-gac-event-branding", client: "AW Rostamani / GAC", title: "Ramadan & corporate event branding", place: "UAE", year: "", service: "Events", color: "red", image: "/Website Pictures/Display Stands & POSM/Flags - AWR.webp" },
  { slug: "mopar-wall-floor-graphics", client: "Mopar / AW Rostamani", title: "Wall & floor graphics", place: "UAE", year: "", service: "Retail", color: "sand", image: "/Website Pictures/Office & Retail Branding/Office Branding - AWR.webp" },
];

export type PortfolioImage = { src: string; title: string; category: string; serviceSlug: string };

export const portfolioImages: PortfolioImage[] = [
  { src: "/Website Pictures/Exhibition Stands/Exhibition Stand - ASBIS.webp", title: "ASBIS exhibition stand", category: "Exhibition Stands", serviceSlug: "exhibition-stands" },
  { src: "/Website Pictures/Exhibition Stands/IFFCO Exhibition Stand - VIV MEA 2026.webp", title: "IFFCO exhibition stand", category: "Exhibition Stands", serviceSlug: "exhibition-stands" },
  { src: "/Website Pictures/Exhibition Stands/Exhibition Stand - AMAP.webp", title: "AMAP exhibition stand", category: "Exhibition Stands", serviceSlug: "exhibition-stands" },
  { src: "/Website Pictures/Exhibition Stands/Exhibition Stand - Qualikems.webp", title: "Qualikems exhibition stand", category: "Exhibition Stands", serviceSlug: "exhibition-stands" },
  { src: "/Website Pictures/Exhibition Stands/Exhibition Stand - University of Dubai.webp", title: "University of Dubai exhibition stand", category: "Exhibition Stands", serviceSlug: "exhibition-stands" },
  { src: "/Website Pictures/Signage/ASBIS - Dubai.webp", title: "ASBIS signage, Dubai", category: "Signage", serviceSlug: "signage" },
  { src: "/Website Pictures/Signage/Dunlop - Abu Dhabi.webp", title: "Dunlop signage, Abu Dhabi", category: "Signage", serviceSlug: "signage" },
  { src: "/Website Pictures/Signage/Legacy Of Smiles - Dubai Marina.webp", title: "Legacy of Smiles signage", category: "Signage", serviceSlug: "signage" },
  { src: "/Website Pictures/Signage/Love Shack Fancy - Dubai Marina.webp", title: "LoveShackFancy signage", category: "Signage", serviceSlug: "signage" },
  { src: "/Website Pictures/Signage/Mr Fat Smoke - Abu Dhabi.webp", title: "Mr Fat Smoke signage", category: "Signage", serviceSlug: "signage" },
  { src: "/Website Pictures/Vehicle Branding/Vehicle Branding - ATLAS Copco.webp", title: "Atlas Copco vehicle branding", category: "Vehicle Branding", serviceSlug: "vehicle-branding" },
  { src: "/Website Pictures/Vehicle Branding/Vehicle Branding - Mai Laundry.webp", title: "Mai Laundry vehicle branding", category: "Vehicle Branding", serviceSlug: "vehicle-branding" },
  { src: "/Website Pictures/Vehicle Branding/Vehicle Branding - Spinneys.webp", title: "Spinneys vehicle branding", category: "Vehicle Branding", serviceSlug: "vehicle-branding" },
  { src: "/Website Pictures/Vehicle Branding/Vehicle Branding - UAE Mart.webp", title: "UAE Mart vehicle branding", category: "Vehicle Branding", serviceSlug: "vehicle-branding" },
  { src: "/Website Pictures/Vehicle Branding/Vehicle Branding - Unilever.webp", title: "Unilever vehicle branding", category: "Vehicle Branding", serviceSlug: "vehicle-branding" },
  { src: "/Website Pictures/Office & Retail Branding/Office Branding - Chery.webp", title: "Chery office branding", category: "Office & Retail", serviceSlug: "office-and-retail-branding" },
  { src: "/Website Pictures/Office & Retail Branding/Office Branding - AWR.webp", title: "AWR office branding", category: "Office & Retail", serviceSlug: "office-and-retail-branding" },
  { src: "/Website Pictures/Office & Retail Branding/Office Branding - AMD Dubai.webp", title: "AMD office branding, Dubai", category: "Office & Retail", serviceSlug: "office-and-retail-branding" },
  { src: "/Website Pictures/Office & Retail Branding/Retail Branding - AMAP Dubai.webp", title: "AMAP retail branding, Dubai", category: "Office & Retail", serviceSlug: "office-and-retail-branding" },
  { src: "/Website Pictures/Office & Retail Branding/Retail Branding - AWR Dubai.webp", title: "AWR retail branding, Dubai", category: "Office & Retail", serviceSlug: "office-and-retail-branding" },
  { src: "/Website Pictures/Display Stands & POSM/Battery Stands - Duracell.webp", title: "Duracell battery stands", category: "Display Stands & POSM", serviceSlug: "display-stands-posm" },
  { src: "/Website Pictures/Display Stands & POSM/Display Stand - AWR 1.webp", title: "AWR display stand", category: "Display Stands & POSM", serviceSlug: "display-stands-posm" },
  { src: "/Website Pictures/Display Stands & POSM/Display Stand - AWR.webp", title: "AWR retail display", category: "Display Stands & POSM", serviceSlug: "display-stands-posm" },
  { src: "/Website Pictures/Display Stands & POSM/Display Stand = Aurora.webp", title: "Aurora display stand", category: "Display Stands & POSM", serviceSlug: "display-stands-posm" },
  { src: "/Website Pictures/Display Stands & POSM/Flags - AWR.webp", title: "AWR branded flags", category: "Display Stands & POSM", serviceSlug: "display-stands-posm" },
  { src: "/Website Pictures/Display Stands & POSM/Lubricant Stands - ADNOC.webp", title: "ADNOC lubricant stands", category: "Display Stands & POSM", serviceSlug: "display-stands-posm" },
  { src: "/Website Pictures/Promotional Items & corporate gifts/Premium Promotional Gift Sets.webp", title: "Premium promotional gift sets", category: "Corporate Gifts", serviceSlug: "promotional-items-corporate-gifts" },
  { src: "/Website Pictures/Promotional Items & corporate gifts/Office Gift Sets.webp", title: "Office gift sets", category: "Corporate Gifts", serviceSlug: "promotional-items-corporate-gifts" },
  { src: "/Website Pictures/Promotional Items & corporate gifts/Custom corporate Gifts.webp", title: "Custom corporate gifts", category: "Corporate Gifts", serviceSlug: "promotional-items-corporate-gifts" },
  { src: "/Website Pictures/Promotional Items & corporate gifts/Corporate Office Gift Sets.webp", title: "Corporate office gift sets", category: "Corporate Gifts", serviceSlug: "promotional-items-corporate-gifts" },
];

export const clientNames = ["ADNOC", "ENOC", "CHERY", "GAC", "MOTUL", "MOPAR", "CEAT", "ATLAS COPCO", "ASBIS", "AW ROSTAMANI"];

export const faqs = [
  ["What does a signage company in Dubai do?", "A signage company designs, fabricates, permits and installs business signs, from 3D illuminated letters to wayfinding systems. The Idea Brands also produces exhibition stands, vehicle wraps, display stands and print, so one partner handles the full brand rollout."],
  ["Do you handle Dubai Municipality and RTA permits?", "We prepare the drawings and mock-ups authorities need and support the approval process. The exact submission scope will be confirmed with the client before publication."],
  ["How long does a 3D sign take?", "Timing depends on approved design, material, lighting, access and authority approval. We publish a confirmed programme with each quotation rather than invent a generic lead time."],
  ["Do you build exhibition stands outside Dubai?", "Yes. The portfolio includes work delivered in Abu Dhabi for VIV MEA 2025, alongside Dubai exhibition projects."],
  ["Can you work with our brand guidelines?", "Yes. The production workflow covers colour matching, finishes, placement rules and pre-production renders for approval."],
] as const;

export const nav = [
  ["services", "Services", "الخدمات"],
  ["industries", "Industries", "القطاعات"],
  ["work", "Work", "أعمالنا"],
  ["guides", "Guides", "الأدلة"],
  ["about", "About", "من نحن"],
] as const;

export function route(locale: Locale, path = "") {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return `${locale === "ar" ? "/ar" : ""}/${clean}${clean ? "/" : ""}`;
}

export function titleFromSlug(slug: string) {
  return slug.split("-").map((part) => part === "and" ? "&" : part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

export function allPaths() {
  const paths = ["about", "about/process", "about/workshop", "about/careers", "services", "industries", "work", "guides", "locations", "blog", "faq", "get-a-quote", "contact", "privacy-policy", "terms"];
  services.forEach((service) => paths.push(`services/${service.slug}`));
  Object.entries(serviceChildren).forEach(([parent, children]) => children.forEach((child) => paths.push(`services/${parent}/${child}`)));
  industries.forEach(([slug]) => paths.push(`industries/${slug}`));
  guides.forEach(([slug]) => paths.push(`guides/${slug}`));
  locations.forEach(([slug]) => paths.push(`locations/${slug}`));
  caseStudies.forEach(({ slug }) => paths.push(`work/${slug}`));
  return paths;
}
