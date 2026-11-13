"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Check, FileUp, MessageCircle, Phone, Mail } from "lucide-react";
import { Locale, services } from "@/lib/content";

type FormState = { needs: string[]; size: string; quantity: string; deadline: string; event: string; files: string[]; name: string; company: string; email: string; phone: string; channel: string; message: string; };
const initial: FormState = { needs: [], size: "", quantity: "", deadline: "", event: "", files: [], name: "", company: "", email: "", phone: "", channel: "WhatsApp", message: "" };

export function QuoteWizard({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const labels = ar ? ["المطلوب", "التفاصيل", "الملفات", "التواصل"] : ["What you need", "Project details", "Your files", "Contact"];
  const set = (key: keyof FormState, value: FormState[keyof FormState]) => setData(prev => ({ ...prev, [key]: value }));
  const toggleNeed = (slug: string) => set("needs", data.needs.includes(slug) ? data.needs.filter(n => n !== slug) : [...data.needs, slug]);
  const onFiles = (e: ChangeEvent<HTMLInputElement>) => set("files", Array.from(e.target.files || []).map(f => f.name));
  const canNext = step === 1 ? data.needs.length > 0 : step === 2 ? !!data.deadline : true;

  async function submit(e: FormEvent) {
    e.preventDefault(); setStatus("sending");
    try {
      const response = await fetch("/api/quote", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error();
      setStatus("sent");
    } catch { setStatus("error"); }
  }

  if (status === "sent") return <div className="quote-success"><span><Check/></span><p className="eyebrow">{ar ? "تم استلام الطلب" : "BRIEF RECEIVED"}</p><h2>{ar ? "شكراً. سنراجع التفاصيل ونتواصل معك." : "Thank you. We’ll review the details and get back to you."}</h2><p>{ar ? "مدة الرد الرسمية بانتظار تأكيد العميل." : "The response-time SLA will be published once confirmed by the client."}</p></div>;

  return (
    <form className="quote-wizard" onSubmit={submit}>
      <div className="progress-head"><span>{ar ? `الخطوة ${step} من 4` : `Step ${step} of 4`}</span><strong>{labels[step - 1]}</strong></div>
      <div className="progress-track"><span style={{ width: `${step * 25}%` }}/></div>
      {step === 1 && <fieldset><legend>{ar ? "ما الذي تريد تنفيذه؟" : "What can we make for you?"}</legend><p>{ar ? "اختر كل ما ينطبق." : "Select everything that applies."}</p><div className="need-grid">{services.slice(0, 8).map((s, i) => <button type="button" aria-pressed={data.needs.includes(s.slug)} className={data.needs.includes(s.slug) ? "selected" : ""} onClick={() => toggleNeed(s.slug)} key={s.slug}><span>{String(i + 1).padStart(2, "0")}</span>{ar ? s.ar : s.title}{data.needs.includes(s.slug) && <Check/>}</button>)}</div></fieldset>}
      {step === 2 && <fieldset><legend>{ar ? "أخبرنا عن النطاق والموعد." : "Tell us about scope and timing."}</legend><div className="form-grid"><label>{ar ? "المقاس أو المساحة" : "Size or area"}<input value={data.size} onChange={e => set("size", e.target.value)} placeholder={ar ? "مثال: 6 × 3 متر" : "e.g. 6 × 3 metres"}/></label><label>{ar ? "الكمية" : "Quantity"}<input value={data.quantity} onChange={e => set("quantity", e.target.value)} placeholder={ar ? "مثال: 12 وحدة" : "e.g. 12 units"}/></label><label>{ar ? "الموعد المطلوب" : "Required date"}<input required type="date" value={data.deadline} onChange={e => set("deadline", e.target.value)}/></label><label>{ar ? "اسم الفعالية (إن وجد)" : "Event name (if relevant)"}<input value={data.event} onChange={e => set("event", e.target.value)} placeholder="GITEX, Gulfood…"/></label></div><label>{ar ? "ملاحظات المشروع" : "Anything else we should know?"}<textarea value={data.message} onChange={e => set("message", e.target.value)} rows={5}/></label></fieldset>}
      {step === 3 && <fieldset><legend>{ar ? "أضف الملفات المتاحة." : "Share whatever you have."}</legend><p>{ar ? "يمكنك إرفاق موجز المشروع أو الشعار أو صور الموقع. ويمكنك المتابعة بدون ملف." : "Upload a brief, logo or site photos. You can also continue without a file."}</p><label className="dropzone"><FileUp/><strong>{ar ? "اختر الملفات" : "Choose files"}</strong><span>PDF, JPG, PNG, ZIP · max 20 MB each</span><input type="file" multiple onChange={onFiles} accept=".pdf,.jpg,.jpeg,.png,.zip"/></label>{data.files.length > 0 && <ul className="file-list">{data.files.map(name => <li key={name}><Check/>{name}</li>)}</ul>}<p className="form-note">{ar ? "ملاحظة: ربط التخزين النهائي وCRM يتم بعد تأكيد حسابات العميل." : "Note: production file storage and CRM delivery will be connected once the client accounts are confirmed."}</p></fieldset>}
      {step === 4 && <fieldset><legend>{ar ? "كيف نتواصل معك؟" : "Where should we reply?"}</legend><div className="form-grid"><label>{ar ? "الاسم" : "Name"}<input required value={data.name} onChange={e => set("name", e.target.value)}/></label><label>{ar ? "الشركة" : "Company"}<input value={data.company} onChange={e => set("company", e.target.value)}/></label><label>{ar ? "البريد الإلكتروني" : "Email"}<input required type="email" value={data.email} onChange={e => set("email", e.target.value)}/></label><label>{ar ? "رقم الهاتف" : "Phone"}<input required type="tel" value={data.phone} onChange={e => set("phone", e.target.value)}/></label></div><div className="channel-group"><span>{ar ? "قناة التواصل المفضلة" : "Preferred channel"}</span>{[["WhatsApp", MessageCircle], ["Call", Phone], ["Email", Mail]].map(([name, Icon]) => { const I = Icon as typeof MessageCircle; return <button type="button" className={data.channel === name ? "selected" : ""} onClick={() => set("channel", String(name))} key={String(name)}><I/>{String(name)}</button>})}</div></fieldset>}
      <div className="wizard-actions">{step > 1 && <button className="button button-ghost" type="button" onClick={() => setStep(step - 1)}>{ar ? <ArrowRight/> : <ArrowLeft/>}{ar ? "السابق" : "Back"}</button>}<span/>{step < 4 ? <button className="button" disabled={!canNext} type="button" onClick={() => setStep(step + 1)}>{ar ? "التالي" : "Continue"}{ar ? <ArrowLeft/> : <ArrowRight/>}</button> : <button className="button" disabled={status === "sending"} type="submit">{status === "sending" ? (ar ? "جارٍ الإرسال…" : "Sending…") : (ar ? "إرسال الطلب" : "Send request")}<ArrowRight/></button>}</div>
      {status === "error" && <p role="alert" className="error-text">{ar ? "تعذر الإرسال. حاول مرة أخرى." : "We couldn’t send this. Please try again."}</p>}
    </form>
  );
}
