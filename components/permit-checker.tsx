"use client";

import { useState } from "react";
import { Check, ChevronRight, RotateCcw, TriangleAlert } from "lucide-react";
import { Locale } from "@/lib/content";

const questions = ["Is there only one trade name on the shopfront?", "Is the sign horizontal?", "Is Arabic positioned above English?", "Is the content static, without video or animation?", "Is the sign limited to the permitted shopfront area?", "Have brightness and authority drawings been checked?"];

export function PermitChecker({ locale }: { locale: Locale }) {
  const ar = locale === "ar"; const [answers, setAnswers] = useState<boolean[]>([]);
  const done = answers.length === questions.length; const passed = answers.filter(Boolean).length;
  const q = ar ? ["هل يظهر اسم تجاري واحد فقط؟", "هل اللافتة أفقية؟", "هل العربية أعلى الإنجليزية؟", "هل المحتوى ثابت بلا فيديو أو حركة؟", "هل اللافتة ضمن مساحة الواجهة المسموحة؟", "هل تم فحص السطوع ورسومات الجهة المختصة؟"] : questions;
  if (done) return <div className="checker-result"><span className={passed === 6 ? "pass" : "warn"}>{passed === 6 ? <Check/> : <TriangleAlert/>}</span><p className="eyebrow">{ar ? `${passed} من 6` : `${passed} OF 6 CHECKS`}</p><h3>{passed === 6 ? (ar ? "المؤشرات الأولية جيدة." : "Your first checks look good.") : (ar ? "هناك نقاط تحتاج مراجعة." : "Some details need attention.")}</h3><p>{ar ? "هذه أداة إرشادية وليست موافقة رسمية. يجب مراجعة الجهة المختصة قبل التصنيع." : "This is a planning aid, not authority approval. Requirements must be verified before fabrication."}</p><button onClick={() => setAnswers([])}><RotateCcw/>{ar ? "ابدأ من جديد" : "Start again"}</button></div>;
  return <div className="permit-checker"><div className="checker-count"><span>{String(answers.length + 1).padStart(2, "0")}</span> / 06</div><h3>{q[answers.length]}</h3><div><button onClick={() => setAnswers([...answers, true])}>{ar ? "نعم" : "Yes"}<ChevronRight/></button><button onClick={() => setAnswers([...answers, false])}>{ar ? "لا / غير متأكد" : "No / not sure"}<ChevronRight/></button></div></div>;
}
