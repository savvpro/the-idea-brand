"use client";

import { useState } from "react";
import { Check, ChevronRight, RotateCcw, ShieldCheck, TriangleAlert } from "lucide-react";
import { Locale } from "@/lib/content";

const questions = [
  "Is there only one trade name on the shopfront?",
  "Is the sign horizontal?",
  "Is Arabic positioned above English?",
  "Is the content static, without video or animation?",
  "Is the sign limited to the permitted shopfront area?",
  "Have brightness and authority drawings been checked?",
];

const arabicQuestions = [
  "هل يظهر اسم تجاري واحد فقط؟",
  "هل اللافتة أفقية؟",
  "هل العربية أعلى الإنجليزية؟",
  "هل المحتوى ثابت بلا فيديو أو حركة؟",
  "هل اللافتة ضمن مساحة الواجهة المسموحة؟",
  "هل تم فحص السطوع ورسومات الجهة المختصة؟",
];

export function PermitChecker({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [answers, setAnswers] = useState<boolean[]>([]);
  const done = answers.length === questions.length;
  const passed = answers.filter(Boolean).length;
  const current = answers.length;
  const progress = ((current + 1) / questions.length) * 100;

  if (done) {
    const successful = passed === questions.length;
    return <div className="checker-result" aria-live="polite">
      <div className={`checker-result-mark ${successful ? "pass" : "warn"}`}>
        {successful ? <Check/> : <TriangleAlert/>}
        <strong>{String(passed).padStart(2, "0")}<small>/ 06</small></strong>
      </div>
      <div className="checker-result-copy">
        <p className="eyebrow">{ar ? "نتيجة المراجعة الأولية" : "PRE-CHECK RESULT"}</p>
        <h3>{successful ? (ar ? "المؤشرات الأولية جيدة." : "Your first checks look good.") : (ar ? "هناك نقاط تحتاج مراجعة." : "Some details need attention.")}</h3>
        <p>{ar ? "هذه أداة إرشادية وليست موافقة رسمية. يجب مراجعة الجهة المختصة قبل التصنيع." : "This is a planning aid, not authority approval. Requirements must be verified before fabrication."}</p>
        <button onClick={() => setAnswers([])}><RotateCcw/>{ar ? "ابدأ من جديد" : "Start again"}</button>
      </div>
    </div>;
  }

  const localizedQuestions = ar ? arabicQuestions : questions;

  return <div className="permit-checker">
    <aside className="checker-status" aria-label={ar ? "تقدم المراجعة" : "Review progress"}>
      <div className="checker-file"><span>{ar ? "مراجعة أولية" : "DET PRE-CHECK"}</span><b>FILE / 06</b></div>
      <div className="checker-emblem"><ShieldCheck/><span>{String(current + 1).padStart(2, "0")}</span></div>
      <div className="checker-status-copy"><small>{ar ? "حالة الملف" : "FILE STATUS"}</small><strong>{ar ? "قيد المراجعة" : "IN REVIEW"}</strong></div>
      <div className="checker-steps" aria-hidden="true">
        {questions.map((_, index) => <i className={index < current ? "complete" : index === current ? "current" : ""} key={index}/>) }
      </div>
    </aside>

    <div className="checker-question">
      <div className="checker-question-head">
        <div className="checker-count"><span>{String(current + 1).padStart(2, "0")}</span> / 06</div>
        <span>{ar ? "نقطة التحقق" : "CHECKPOINT"}</span>
      </div>
      <div className="checker-progress" aria-hidden="true"><i style={{ width: `${progress}%` }}/></div>
      <h3>{localizedQuestions[current]}</h3>
      <p className="checker-help">{ar ? "أجب بناءً على التصميم الحالي للواجهة." : "Answer using the current shopfront artwork and specification."}</p>
      <div className="checker-actions">
        <button onClick={() => setAnswers([...answers, true])}>
          <span><b>{ar ? "نعم" : "Yes"}</b><small>{ar ? "تم التحقق" : "Confirmed"}</small></span><ChevronRight/>
        </button>
        <button onClick={() => setAnswers([...answers, false])}>
          <span><b>{ar ? "لا / غير متأكد" : "No / not sure"}</b><small>{ar ? "يحتاج إلى مراجعة" : "Needs review"}</small></span><ChevronRight/>
        </button>
      </div>
    </div>
  </div>;
}
