import { Compass, Factory, FileCheck2, PencilRuler } from "lucide-react";
import { Locale } from "@/lib/content";

export function AboutDetails({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const principles = ar ? [
    { title: "نحوّل الفكرة إلى مواصفة", text: "نربط التصميم بالمقاس والخامة والإضاءة وطريقة التركيب قبل بدء الإنتاج." },
    { title: "نصمم للموقع الحقيقي", text: "تؤثر البيئة والوصول والجهة المختصة واستخدام المساحة في كل قرار تنفيذي." },
    { title: "ننسق الإنتاج كفريق واحد", text: "يبقى الموجز والتصور والملفات والتصنيع والتركيب ضمن مسار مسؤولية واضح." },
    { title: "نسلّم عملاً قابلاً للمراجعة", text: "تُراجع الخامات والتشطيبات والمقاسات والتسليم مقابل النطاق المعتمد." },
  ] : [
    { title: "Turn the idea into a specification", text: "Design is connected to dimensions, material, lighting and installation before production begins." },
    { title: "Design for the real site", text: "Environment, access, authority requirements and how the space operates shape every production decision." },
    { title: "Coordinate one production path", text: "The brief, render, files, fabrication and installation stay within one accountable workflow." },
    { title: "Hand over work that can be checked", text: "Materials, finishes, dimensions and delivery are reviewed against the approved scope." },
  ];
  const icons = [PencilRuler, Compass, Factory, FileCheck2];

  return <section className="about-details">
    <div className="about-details-intro">
      <span className="eyebrow light">{ar ? "كيف نعمل" : "HOW WE OPERATE"}</span>
      <h2>{ar ? "تفكير إبداعي. مسؤولية إنتاجية." : <>Creative thinking.<br/>Production accountability.</>}</h2>
      <p>{ar ? "منذ 2015، تعمل ذا آيديا براندز من دبي على تحويل أنظمة العلامات إلى أشياء ومساحات يمكن رؤيتها واستخدامها." : "Since 2015, The Idea Brands has worked from Dubai to turn brand systems into physical objects and spaces people can see and use."}</p>
      <div className="about-origin">
        <span><small>{ar ? "تأسست" : "FOUNDED"}</small><strong>2015</strong></span>
        <span><small>{ar ? "الموقع" : "BASED IN"}</small><strong>DXB</strong></span>
        <span><small>{ar ? "النطاق" : "DELIVERY"}</small><strong>UAE</strong></span>
      </div>
    </div>
    <div className="about-principles">
      {principles.map((principle, index) => {
        const Icon = icons[index];
        return <article key={principle.title}>
          <div><span>0{index + 1}</span><Icon/></div>
          <h3>{principle.title}</h3>
          <p>{principle.text}</p>
        </article>;
      })}
      <div className="about-surfaces">
        <span>{ar ? "من ملف واحد إلى" : "FROM ONE BRAND FILE TO"}</span>
        <div>{(ar ? ["واجهات", "مساحات", "مركبات", "معارض", "نقاط بيع", "طباعة"] : ["FACADES", "SPACES", "VEHICLES", "EXHIBITIONS", "POSM", "PRINT"]).map(item => <b key={item}>{item}</b>)}</div>
      </div>
    </div>
  </section>;
}
