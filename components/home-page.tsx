import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, Compass, Factory, FileCheck2, Layers3, ShieldCheck, Sparkles, Sun, Wrench } from "lucide-react";
import { clientNames, faqs, Locale, route, services } from "@/lib/content";
import { PermitChecker } from "./permit-checker";
import { Reveal } from "./reveal";
import { WorkGrid } from "./work-grid";

const serviceIcons = [Factory, Layers3, Compass, Sparkles, Wrench, FileCheck2];

export function HomePage({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return <>
    <section className="hero">
      <div className="hero-copy">
        <div className="hero-kicker"><span className="live-dot"/>{ar ? "إنتاج العلامات التجارية في دبي · منذ 2015" : "DUBAI BRAND PRODUCTION · SINCE 2015"}</div>
        <h1>{ar ? <>من الفكرة<br/><em>إلى التركيب.</em></> : <>From idea<br/><em>to installed.</em></>}</h1>
        <p>{ar ? "لافتات وأجنحة معارض وتغليف مركبات وطباعة، نصممها ونصنعها ونركبها في جميع أنحاء الإمارات." : "Signage, exhibition stands, vehicle branding and print, designed, fabricated and fitted across the UAE since 2015."}</p>
        <div className="hero-actions"><Link className="button" href={route(locale, "get-a-quote")}>{ar ? "اطلب عرضاً" : "Get a quote"}<ArrowUpRight/></Link><Link className="text-link" href={route(locale, "work")}>{ar ? "شاهد أعمالنا" : "See our work"}<ArrowRight/></Link></div>
        <div className="hero-proof" aria-label={ar ? "حقائق أساسية" : "Key facts"}>
          <div><strong>2015</strong><span>{ar ? "تأسست في دبي" : "Founded in Dubai"}</span></div>
          <div><strong>UAE</strong><span>{ar ? "تنفيذ في الإمارات" : "Nationwide delivery"}</span></div>
          <div><strong>01</strong><span>{ar ? "فريق من الفكرة للتركيب" : "Team, end to end"}</span></div>
        </div>
      </div>
      <div className="hero-visual" aria-label={ar ? "تصور تجريدي لعملية الإنتاج" : "Abstract production process visual"}>
        <div className="visual-grid"/><div className="hero-orbit"/><div className="visual-slash"/>
        <div className="hero-visual-label"><span>{ar ? "ملف إنتاج" : "PRODUCTION FILE"}</span><b>TIB—001</b></div>
        <div className="visual-word"><span>IDEA</span><strong>MADE</strong></div>
        <div className="material-card material-one"><span>01</span><b>316</b><small>{ar ? "ستانلس ستيل" : "STAINLESS"}</small></div>
        <div className="material-card material-two"><span>02</span><b>45°</b><small>{ar ? "مصمم للحرارة" : "HEAT READY"}</small></div>
        <div className="hero-caption"><span><i>01</i>{ar ? "تصميم" : "DESIGN"}</span><span><i>02</i>{ar ? "تصنيع" : "FABRICATE"}</span><span><i>03</i>{ar ? "تركيب" : "INSTALL"}</span></div>
        <div className="hero-made-stamp"><span>{ar ? "صُنع في" : "MADE IN"}</span><strong>DXB</strong><small>25.2048° N<br/>55.2708° E</small></div>
      </div>
      <a href="#services" className="scroll-cue"><ArrowDown/>{ar ? "استكشف" : "EXPLORE"}</a>
    </section>

    <section className="trust-strip" aria-label={ar ? "عملاء مختارون" : "Selected clients"}><span>{ar ? "موثوق به من فرق لدى" : "TRUSTED BY TEAMS AT"}</span><div className="logo-marquee">{clientNames.concat(clientNames).map((name, i) => <strong key={`${name}-${i}`}>{name}</strong>)}</div><small>{ar ? "عرض الأسماء رهن موافقة استخدام العلامات" : "Names shown subject to logo-use permission"}</small></section>

    <section id="services" className="section services-section">
      <Reveal className="section-heading"><div><span className="eyebrow">{ar ? "ما نصنعه" : "WHAT WE MAKE"}</span><h2>{ar ? "علامتك. كل سطح." : <>Your brand.<br/>Every surface.</>}</h2></div><p>{ar ? "من واجهة المعرض إلى المركبات في الخارج والجناح في المعرض، يعمل فريق واحد من ملف علامة واحد." : "From the showroom fascia to the fleet outside and the stand at GITEX, one team works from one brand file."}</p></Reveal>
      <div className="service-grid">{services.slice(0, 6).map((service, i) => { const Icon = serviceIcons[i]; return <Reveal key={service.slug} className="service-card"><Link href={route(locale, `services/${service.slug}`)}><div className="service-top"><span>0{i + 1}</span><Icon/></div><h3>{ar ? service.ar : service.title}</h3><p>{ar ? service.arSummary : service.summary}</p><span className="card-link">{ar ? "استكشف الخدمة" : "Explore service"}<ArrowUpRight/></span></Link></Reveal>})}</div>
      <Link href={route(locale, "services")} className="all-link">{ar ? "عرض جميع الخدمات" : "View all services"}<span><ArrowRight/></span></Link>
    </section>

    <section className="why-section">
      <div className="why-sticky"><span className="eyebrow light">{ar ? "لماذا ذا آيديا براندز" : "WHY THE IDEA BRANDS"}</span><h2>{ar ? "الامتثال والحرفة، في شريك واحد." : "Compliance and craft, in one partner."}</h2><p>{ar ? "التصميم الجيد لا ينجح إذا رُفض التصريح أو بهتت الخامة في شمس الإمارات." : "A good design is no use if the permit is rejected or the finish fades in the UAE sun."}</p></div>
      <div className="why-list">
        <Reveal className="why-item"><span>01</span><div className="why-icon"><Layers3/></div><h3>{ar ? "شريك واحد، كل سطح" : "One partner, every surface"}</h3><p>{ar ? "لافتة الواجهة والأسطول وجناح جيتكس من فريق يعمل من ملف واحد." : "Showroom fascia, the fleet outside and the stand at GITEX, coordinated by one production team."}</p></Reveal>
        <Reveal className="why-item"><span>02</span><div className="why-icon"><ShieldCheck/></div><h3>{ar ? "نعرف القواعد" : "We know the rules"}</h3><p>{ar ? "قواعد واجهات DET وتصاريح RTA ومتطلبات البلدية تؤخذ في الاعتبار قبل التصنيع." : "DET shopfront rules, RTA vehicle permits and municipality requirements are considered before fabrication."}</p></Reveal>
        <Reveal className="why-item"><span>03</span><div className="why-icon"><Sun/></div><h3>{ar ? "مصنوع لهذا المناخ" : "Made for this climate"}</h3><p>{ar ? "اختيارات الخامات تراعي الشمس والرمال والرطوبة، لا صور العرض فقط." : "Material choices account for UAE sun, sand and humidity, not only how a render looks."}</p></Reveal>
      </div>
    </section>

    <section className="section work-section" id="selected-work">
      <Reveal className="section-heading"><div><span className="eyebrow">{ar ? "أعمال مختارة" : "SELECTED WORK"}</span><h2>{ar ? "الدليل في التنفيذ." : "Proof, made visible."}</h2></div><Link className="text-link" href={route(locale, "work")}>{ar ? "كل المشاريع" : "All projects"}<ArrowRight/></Link></Reveal>
      <WorkGrid locale={locale} limit={3}/>
    </section>

    <section className="process-section">
      <Reveal className="process-intro"><span className="eyebrow">{ar ? "الطريقة" : "THE PROCESS"}</span><h2>{ar ? "لا مفاجآت بين الرسم والتركيب." : "No surprises between sketch and install."}</h2></Reveal>
      <div className="process-line">{(ar ? ["الموجز", "التصميم والتصور", "الموافقة والتصاريح", "التصنيع", "التركيب", "خدمة ما بعد التنفيذ"] : ["Brief", "Design & 3D render", "Approval & permits", "Fabrication", "Installation", "Aftercare"]).map((name, i) => <div className="process-step" key={name}><span>{String(i + 1).padStart(2, "0")}</span><b>{name}</b>{i < 5 && <i/>}</div>)}</div>
    </section>

    <section className="guide-feature">
      <div className="guide-art"><div className="rule-line one"/><div className="rule-line two"/><div className="rule-line three"/><span>عربي</span><strong>ENGLISH</strong><div className="approval"><CheckCircle2/> DET 2026</div></div>
      <Reveal className="guide-copy"><span className="eyebrow">{ar ? "دليل الامتثال" : "COMPLIANCE GUIDE"}</span><h2>{ar ? "تغيرت قواعد لافتات دبي في 2026." : "Dubai’s sign rules changed in 2026."}</h2><p>{ar ? "اسم تجاري واحد. وضع أفقي. العربية فوق الإنجليزية. ومحتوى ثابت فقط. تعرف على التفاصيل قبل إرسال التصميم للتصنيع." : "One trade name. Horizontal placement. Arabic above English. Static content only. Understand the framework before your design reaches fabrication."}</p><Link className="button button-dark" href={route(locale, "guides/det-shopfront-signage-rules")}>{ar ? "اقرأ الدليل" : "Read the guide"}<ArrowUpRight/></Link></Reveal>
    </section>

    <section className="section checker-section"><Reveal className="section-heading"><div><span className="eyebrow">{ar ? "أداة التخطيط" : "PLANNING TOOL"}</span><h2>{ar ? "هل لافتة واجهتك جاهزة للمراجعة؟" : "Is your shopfront sign ready for review?"}</h2></div><p>{ar ? "ستة أسئلة أولية مبنية على إطار DET لعام 2026. أداة إرشادية وليست موافقة رسمية." : "Six first-pass questions based on the 2026 DET framework. A planning aid, not formal approval."}</p></Reveal><PermitChecker locale={locale}/></section>

    <section className="section faq-section"><Reveal className="section-heading"><div><span className="eyebrow">{ar ? "أسئلة شائعة" : "COMMON QUESTIONS"}</span><h2>{ar ? "إجابات واضحة قبل أن تبدأ." : "Clear answers before you start."}</h2></div></Reveal><div className="faq-list">{faqs.map(([q, answer], i) => <details key={q}><summary><span>0{i + 1}</span>{ar ? ["ماذا تفعل شركة اللافتات في دبي؟", "هل تساعدون في تصاريح البلدية وRTA؟", "كم يستغرق تنفيذ لافتة ثلاثية الأبعاد؟", "هل تنفذون أجنحة خارج دبي؟", "هل تعملون وفق دليل علامتنا؟"][i] : q}<b>+</b></summary><p>{ar ? ["تصمم شركة اللافتات وتصنع وتركب لافتات الأعمال، من الحروف المضيئة إلى أنظمة الإرشاد. كما ننفذ الأجنحة وتغليف المركبات ووحدات العرض والطباعة.", "نعد الرسومات والتصورات المطلوبة وندعم مسار الموافقة. سيتم تحديد نطاق التقديم النهائي مع العميل.", "يعتمد الوقت على التصميم والخامة والإضاءة وسهولة الوصول وموافقة الجهة. لكل عرض سعر برنامج مؤكد.", "نعم. تشمل الأعمال المقدمة مشروعاً في أبوظبي لمعرض VIV MEA 2025 إلى جانب مشاريع دبي.", "نعم. نطابق الألوان والتشطيبات وقواعد الوضع ونشارك التصورات قبل الإنتاج."][i] : answer}</p></details>)}</div></section>

    <section className="cta-band"><div><span className="eyebrow light">{ar ? "فكرة جاهزة؟" : "READY WHEN YOU ARE"}</span><h2>{ar ? "لديك فكرة؟ سنجعلها واقعاً." : "Got an idea? We’ll make it real."}</h2></div><div><Link className="button button-white" href={route(locale, "get-a-quote")}>{ar ? "اطلب عرضاً" : "Get a quote"}<ArrowUpRight/></Link><Link className="cta-text" href={route(locale, "contact")}>{ar ? "تواصل معنا" : "Talk to us"}<ArrowRight/></Link></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
  </>;
}
