import { Boxes, ClipboardCheck, Layers3, Ruler, ShieldCheck, Wrench } from "lucide-react";
import { Locale } from "@/lib/content";

type LanguageProfile = {
  headline: string;
  summary: string;
  applications: string[];
  systems: string[];
  deliverables: string[];
  checks: string[];
};

type ServiceProfile = LanguageProfile & { ar: LanguageProfile };

const profiles: Record<string, ServiceProfile> = {
  signage: {
    headline: "Specified for the site. Built to stay visible.",
    summary: "Every sign is resolved around viewing distance, structure, illumination, access and the authority path before fabrication begins.",
    applications: ["Shopfront fascias", "3D letters", "Wayfinding systems", "Lightboxes & pylons"],
    systems: ["Acrylic", "Aluminium", "Stainless steel", "LED modules"],
    deliverables: ["Site survey", "Permit-ready drawings", "Production artwork", "Installation"],
    checks: ["Viewing distance", "Power access", "Mounting structure", "Authority requirements"],
    ar: {
      headline: "مواصفات تناسب الموقع. وتنفيذ يبقى واضحاً.",
      summary: "نحدد مسافة الرؤية والهيكل والإضاءة والوصول ومسار الموافقات قبل بدء التصنيع.",
      applications: ["واجهات المحلات", "حروف ثلاثية الأبعاد", "أنظمة الإرشاد", "الصناديق الضوئية"],
      systems: ["أكريليك", "ألمنيوم", "ستانلس ستيل", "وحدات LED"],
      deliverables: ["مسح الموقع", "رسومات الموافقة", "ملف الإنتاج", "التركيب"],
      checks: ["مسافة الرؤية", "مصدر الكهرباء", "هيكل التثبيت", "متطلبات الجهة"],
    },
  },
  "exhibition-stands": {
    headline: "A complete brand environment, ready before doors open.",
    summary: "The stand is coordinated as one system—from spatial concept and venue rules to fabrication, logistics, installation and handover.",
    applications: ["Custom stands", "Modular booths", "Product launches", "Event environments"],
    systems: ["Timber & MDF", "Metal structures", "Print & fabric", "Lighting & AV integration"],
    deliverables: ["3D render", "Technical drawings", "Fabrication", "Install & dismantle"],
    checks: ["Venue manual", "Rigging & power", "Access schedule", "Reuse strategy"],
    ar: {
      headline: "بيئة متكاملة للعلامة، جاهزة قبل فتح الأبواب.",
      summary: "ننسق التصور وقواعد الموقع والتصنيع والخدمات اللوجستية والتركيب والتسليم كنظام واحد.",
      applications: ["أجنحة مخصصة", "أجنحة معيارية", "إطلاق المنتجات", "هوية الفعاليات"],
      systems: ["خشب وMDF", "هياكل معدنية", "طباعة وأقمشة", "إضاءة وشاشات"],
      deliverables: ["تصور ثلاثي الأبعاد", "رسومات فنية", "التصنيع", "التركيب والفك"],
      checks: ["دليل الموقع", "التعليق والكهرباء", "جدول الدخول", "إعادة الاستخدام"],
    },
  },
  "vehicle-branding": {
    headline: "Fleet graphics engineered around the vehicle.",
    summary: "Artwork, film, seams and installation are planned around body contours, daily use and the applicable advertising approval route.",
    applications: ["Full wraps", "Partial wraps", "Door branding", "Fleet numbering"],
    systems: ["Cast vinyl", "Polymeric film", "UV laminate", "Reflective accents"],
    deliverables: ["Vehicle survey", "Scaled artwork", "Colour proof", "Application & finishing"],
    checks: ["RTA requirements", "Window visibility", "Panel condition", "Fleet consistency"],
    ar: {
      headline: "رسومات أساطيل مصممة حول المركبة.",
      summary: "نخطط التصميم والخامة والفواصل والتركيب حول انحناءات المركبة والاستخدام اليومي ومسار التصريح.",
      applications: ["تغليف كامل", "تغليف جزئي", "هوية الأبواب", "ترقيم الأسطول"],
      systems: ["فينيل مصبوب", "أفلام بوليمرية", "طبقة حماية UV", "عناصر عاكسة"],
      deliverables: ["مسح المركبة", "تصميم بالمقياس", "عينة لون", "التطبيق والتشطيب"],
      checks: ["متطلبات RTA", "وضوح النوافذ", "حالة الهيكل", "اتساق الأسطول"],
    },
  },
  "office-and-retail-branding": {
    headline: "Turn walls, glass and circulation into one brand system.",
    summary: "Environmental graphics are coordinated with privacy, wayfinding, customer flow, finishes and installation access.",
    applications: ["Glass manifestation", "Wall graphics", "Privacy film", "Retail rollouts"],
    systems: ["Frosted film", "Printed vinyl", "One-way vision", "Dimensional graphics"],
    deliverables: ["Site measure", "Elevation layouts", "Material samples", "Phased installation"],
    checks: ["Sightlines", "Surface condition", "Privacy level", "Operating hours"],
    ar: {
      headline: "حوّل الجدران والزجاج والحركة إلى نظام علامة واحد.",
      summary: "ننسق الرسومات البيئية مع الخصوصية والإرشاد وحركة العملاء والتشطيبات والوصول للتركيب.",
      applications: ["رسومات الزجاج", "رسومات الجدران", "أفلام الخصوصية", "انتشار المتاجر"],
      systems: ["فيلم رملي", "فينيل مطبوع", "رؤية أحادية", "رسومات بارزة"],
      deliverables: ["قياس الموقع", "مخططات الواجهات", "عينات الخامة", "تركيب مرحلي"],
      checks: ["خطوط الرؤية", "حالة السطح", "مستوى الخصوصية", "ساعات العمل"],
    },
  },
  "display-stands-posm": {
    headline: "Display systems made to carry product and attention.",
    summary: "Structure, shelf loading, material finish, packing and rollout are developed together for repeatable retail performance.",
    applications: ["Floor-standing units", "Counter displays", "Product gondolas", "Promotional islands"],
    systems: ["MDF & laminate", "Powder-coated metal", "Acrylic", "Print & illumination"],
    deliverables: ["Prototype", "Production drawings", "Batch manufacture", "Packing & rollout"],
    checks: ["Product load", "Footprint", "Assembly method", "Unit consistency"],
    ar: {
      headline: "وحدات عرض تحمل المنتج وتجذب الانتباه.",
      summary: "نطور الهيكل وحمولة الرف والتشطيب والتغليف والانتشار معاً لأداء متكرر في المتاجر.",
      applications: ["وحدات أرضية", "عرض الكاونتر", "جندولات المنتجات", "جزر ترويجية"],
      systems: ["MDF ولامينيت", "معدن مطلي", "أكريليك", "طباعة وإضاءة"],
      deliverables: ["نموذج أولي", "رسومات إنتاج", "تصنيع الكميات", "تغليف وانتشار"],
      checks: ["حمولة المنتج", "المساحة", "طريقة التجميع", "اتساق الوحدات"],
    },
  },
  printing: {
    headline: "Print specified for scale, surface and viewing condition.",
    summary: "The print method, colour workflow, media and finish are selected around quantity, placement, durability and installation.",
    applications: ["Large-format graphics", "Campaign collateral", "Event print", "Business stationery"],
    systems: ["Vinyl & banner", "Paper & board", "Fabric", "Protective laminates"],
    deliverables: ["Artwork preflight", "Colour proof", "Print production", "Finishing & installation"],
    checks: ["Final dimensions", "Bleed & resolution", "Colour reference", "Indoor or outdoor use"],
    ar: {
      headline: "طباعة محددة حسب الحجم والسطح وظروف المشاهدة.",
      summary: "نختار طريقة الطباعة والخامة والتشطيب حسب الكمية والموقع والمتانة وطريقة التركيب.",
      applications: ["رسومات كبيرة", "مواد الحملات", "طباعة الفعاليات", "قرطاسية الأعمال"],
      systems: ["فينيل وبانر", "ورق وكرتون", "أقمشة", "طبقات حماية"],
      deliverables: ["فحص الملفات", "عينة لون", "الإنتاج", "التشطيب والتركيب"],
      checks: ["المقاسات النهائية", "الدقة والهوامش", "مرجع اللون", "داخلي أو خارجي"],
    },
  },
  "promotional-items-corporate-gifts": {
    headline: "Useful objects, consistently branded and presentation-ready.",
    summary: "Product selection, branding method, sample approval, packaging and quantity are coordinated before the order moves to production.",
    applications: ["Corporate gifts", "Uniforms", "Awards", "Event packs"],
    systems: ["Embroidery", "Screen & transfer print", "Laser engraving", "Custom packaging"],
    deliverables: ["Product shortlist", "Branded sample", "Batch production", "Packing"],
    checks: ["Use & audience", "Branding area", "Quantity", "Delivery date"],
    ar: {
      headline: "منتجات عملية بهوية متسقة وجاهزة للتقديم.",
      summary: "ننسق اختيار المنتج وطريقة وضع الشعار والعينة والتغليف والكمية قبل بدء الطلب.",
      applications: ["هدايا مؤسسية", "زي موحد", "جوائز", "حقائب الفعاليات"],
      systems: ["تطريز", "طباعة ونقل حراري", "حفر ليزر", "تغليف مخصص"],
      deliverables: ["قائمة منتجات", "عينة معتمدة", "إنتاج الكمية", "التغليف"],
      checks: ["الاستخدام والجمهور", "مساحة الشعار", "الكمية", "موعد التسليم"],
    },
  },
  "digital-signage-led-screens": {
    headline: "A display system planned around content, light and operation.",
    summary: "Screen format, brightness, mounting, connectivity and service access are resolved as one operational specification.",
    applications: ["LED walls", "Video walls", "Menu boards", "Interactive displays"],
    systems: ["Indoor LED", "Outdoor LED", "Commercial LCD", "Media players"],
    deliverables: ["Display layout", "Mounting detail", "System integration", "Testing & handover"],
    checks: ["Viewing distance", "Ambient light", "Content format", "Maintenance access"],
    ar: {
      headline: "نظام عرض مخطط حول المحتوى والإضاءة والتشغيل.",
      summary: "نحدد حجم الشاشة والسطوع والتثبيت والاتصال والوصول للصيانة ضمن مواصفة تشغيلية واحدة.",
      applications: ["جدران LED", "جدران فيديو", "لوحات قوائم", "شاشات تفاعلية"],
      systems: ["LED داخلي", "LED خارجي", "شاشات تجارية", "مشغلات وسائط"],
      deliverables: ["مخطط العرض", "تفاصيل التثبيت", "تكامل النظام", "الاختبار والتسليم"],
      checks: ["مسافة المشاهدة", "الإضاءة المحيطة", "صيغة المحتوى", "الوصول للصيانة"],
    },
  },
  "laser-cutting-engraving": {
    headline: "Precision profiles, markings and prototypes from production-ready files.",
    summary: "Material, thickness, kerf, finish and repeatability are checked before cutting or engraving begins.",
    applications: ["Cut letters", "Awards", "Nameplates", "Prototypes"],
    systems: ["Acrylic", "Wood & MDF", "Coated metals", "Laminated sheets"],
    deliverables: ["File review", "Material test", "Precision cutting", "Finishing"],
    checks: ["Material thickness", "Minimum detail", "Edge finish", "Quantity"],
    ar: {
      headline: "قص وحفر ونماذج دقيقة من ملفات جاهزة للإنتاج.",
      summary: "نفحص الخامة والسماكة ودقة القطع والتشطيب والتكرار قبل بدء التشغيل.",
      applications: ["حروف مقصوصة", "جوائز", "لوحات أسماء", "نماذج أولية"],
      systems: ["أكريليك", "خشب وMDF", "معادن مطلية", "ألواح مركبة"],
      deliverables: ["مراجعة الملف", "اختبار الخامة", "قص دقيق", "التشطيب"],
      checks: ["سماكة الخامة", "أدق تفصيل", "تشطيب الحافة", "الكمية"],
    },
  },
  "graphic-design": {
    headline: "Brand thinking translated into production-ready artwork.",
    summary: "Layouts are developed for the real format, material, language, fabrication method and rollout—not only for a screen presentation.",
    applications: ["Campaign adaptation", "Environmental graphics", "Event artwork", "Production templates"],
    systems: ["Brand guidelines", "Bilingual layout", "Colour standards", "Print-ready files"],
    deliverables: ["Concept routes", "Artwork system", "Mock-ups", "Final production files"],
    checks: ["Content hierarchy", "Arabic & English", "Scale", "Output method"],
    ar: {
      headline: "تفكير العلامة مترجم إلى ملفات جاهزة للإنتاج.",
      summary: "نطور التصميم للحجم والخامة واللغة وطريقة التصنيع والانتشار الفعلي، وليس للعرض على الشاشة فقط.",
      applications: ["تكييف الحملات", "رسومات المكان", "تصميم الفعاليات", "قوالب الإنتاج"],
      systems: ["دليل العلامة", "تصميم ثنائي اللغة", "معايير اللون", "ملفات جاهزة للطباعة"],
      deliverables: ["مسارات إبداعية", "نظام التصميم", "نماذج عرض", "ملفات نهائية"],
      checks: ["هرمية المحتوى", "العربية والإنجليزية", "المقياس", "طريقة الإخراج"],
    },
  },
  "sourcing-procurement": {
    headline: "Specified sourcing with a clear approval and delivery trail.",
    summary: "Products are compared against the brief, branding method, sample, quantity, documentation and delivery requirement.",
    applications: ["Corporate supply", "Government requirements", "Event procurement", "Multi-item kits"],
    systems: ["Approved samples", "Branding methods", "Custom packing", "Delivery schedules"],
    deliverables: ["Specification sheet", "Supplier comparison", "Sample approval", "Coordinated delivery"],
    checks: ["Compliance documents", "Lead time", "Minimum quantity", "Quality consistency"],
    ar: {
      headline: "توريد بمواصفات واضحة ومسار اعتماد وتسليم موثق.",
      summary: "نقارن المنتجات بالموجز وطريقة وضع الهوية والعينة والكمية والوثائق ومتطلبات التسليم.",
      applications: ["توريد الشركات", "متطلبات الجهات", "توريد الفعاليات", "حزم متعددة"],
      systems: ["عينات معتمدة", "طرق وضع الهوية", "تغليف مخصص", "جداول التسليم"],
      deliverables: ["ورقة مواصفات", "مقارنة الموردين", "اعتماد العينة", "تسليم منسق"],
      checks: ["وثائق المطابقة", "مدة التوريد", "الحد الأدنى", "اتساق الجودة"],
    },
  },
};

const childOverrides: Record<string, Partial<LanguageProfile>> = {
  "3d-illuminated-signs": { headline: "Dimensional letters with light designed into the build.", applications: ["Front-lit letters", "Halo-lit letters", "Edge-lit letters", "Combination lighting"], systems: ["Acrylic faces", "Aluminium returns", "Stainless steel", "LED modules"] },
  "neon-signs": { headline: "Neon character with a safer, controllable modern build.", applications: ["Logo features", "Interior statements", "Window signs", "Event backdrops"], systems: ["LED neon flex", "Acrylic backing", "Low-voltage drivers", "Dimmer control"] },
  "led-signs": { headline: "Illumination specified for legibility, efficiency and service access.", applications: ["Channel letters", "Lightboxes", "Edge lighting", "Architectural accents"], systems: ["LED modules", "Power supplies", "Diffusers", "Heat-managed housings"] },
  "acrylic-and-stainless-steel-letters": { headline: "Cut and fabricated lettering with controlled depth and finish.", applications: ["Reception logos", "Facade letters", "Direction markers", "Brand statements"], systems: ["Cast acrylic", "Mirror stainless", "Brushed stainless", "Painted aluminium"] },
  "lightbox-and-flex-signs": { headline: "Evenly illuminated sign faces built for clear long-range reading.", applications: ["Shopfront lightboxes", "Flex-face signs", "Menu boxes", "Pylon panels"], systems: ["Aluminium cabinet", "Acrylic face", "Flex face", "LED illumination"] },
  "wayfinding-signage": { headline: "A sign family that makes complex spaces easier to use.", applications: ["Directories", "Directional signs", "Room identification", "Parking guidance"], systems: ["Modular aluminium", "Printed graphics", "Applied lettering", "Tactile elements"] },
  "indoor-outdoor-signage": { headline: "One identity system, specified differently for every environment.", applications: ["Interior identification", "External facades", "Building directories", "Site signage"], systems: ["Acrylic & metal", "Exterior coatings", "UV-rated print", "Illumination"] },
  "custom-exhibition-stands": { headline: "A stand designed around the brand, visitor journey and show objective.", applications: ["Island stands", "Corner stands", "Double-deck concepts", "Product demonstrations"], systems: ["Custom joinery", "Metal structure", "Feature lighting", "Integrated AV"] },
  "modular-and-portable-displays": { headline: "Reusable exhibition systems that travel, adapt and install efficiently.", applications: ["Shell-scheme upgrades", "Roadshows", "Pop-up displays", "Repeat exhibitions"], systems: ["Modular frames", "Fabric graphics", "Portable counters", "Reusable cases"] },
  "event-branding": { headline: "A coordinated event identity across every physical touchpoint.", applications: ["Stage branding", "Registration areas", "Directional graphics", "Photo moments"], systems: ["Printed panels", "Fabric backdrops", "Floor graphics", "Temporary structures"] },
  "large-format-printing": { headline: "Large graphics produced for distance, durability and installation.", applications: ["Banners", "Wall graphics", "Window graphics", "Event skins"], systems: ["Self-adhesive vinyl", "Mesh & flex", "One-way vision", "Fabric"] },
  "digital-printing": { headline: "Fast, flexible print for short runs and variable formats.", applications: ["Brochures", "Invitations", "Small-format POS", "Variable-data print"], systems: ["Coated stocks", "Synthetic media", "Specialty papers", "Digital finishing"] },
  "offset-printing": { headline: "Consistent colour and unit cost for considered print runs.", applications: ["Corporate stationery", "Catalogues", "Packaging sleeves", "High-volume collateral"], systems: ["Coated paper", "Uncoated paper", "Board", "Special finishes"] },
  "invitation-cards": { headline: "Invitation pieces designed as a tactile first impression.", applications: ["Corporate events", "Launch invitations", "Wedding stationery", "VIP mailers"], systems: ["Premium stocks", "Foil", "Embossing", "Custom envelopes"] },
};

const groupLabels = {
  en: ["Built for", "Material systems", "Delivered with", "Project checks"],
  ar: ["مناسب لـ", "أنظمة الخامات", "يشمل التسليم", "فحوصات المشروع"],
};

export function ServiceDetailSection({ locale, serviceSlug, parentSlug, title }: { locale: Locale; serviceSlug: string; parentSlug?: string; title: string }) {
  const ar = locale === "ar";
  const base = profiles[parentSlug || serviceSlug] || profiles.signage;
  const detail: LanguageProfile = ar ? base.ar : { ...base, ...(childOverrides[serviceSlug] || {}) };
  const groups = [detail.applications, detail.systems, detail.deliverables, detail.checks];
  const icons = [Boxes, Layers3, Wrench, ClipboardCheck];

  return <section className="service-detail-section">
    <div className="service-detail-intro">
      <span className="eyebrow light">{ar ? "تفاصيل الخدمة" : "SERVICE SPECIFICATION"}</span>
      <h2>{detail.headline}</h2>
      <p>{detail.summary}</p>
      <div className="service-detail-code"><Ruler/><span>{ar ? "النطاق" : "SCOPE"}</span><b>{title}</b></div>
    </div>
    <div className="service-detail-ledger">
      {groups.map((items, groupIndex) => {
        const Icon = icons[groupIndex];
        return <article key={groupLabels.en[groupIndex]}>
          <div><span>0{groupIndex + 1}</span><Icon/></div>
          <h3>{ar ? groupLabels.ar[groupIndex] : groupLabels.en[groupIndex]}</h3>
          <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
        </article>;
      })}
      <div className="service-detail-note"><ShieldCheck/><span>{ar ? "تثبت المواصفات النهائية بعد مسح الموقع واعتماد الخامات والمتطلبات." : "Final specification is confirmed after the site, materials and applicable requirements are reviewed."}</span></div>
    </div>
  </section>;
}
