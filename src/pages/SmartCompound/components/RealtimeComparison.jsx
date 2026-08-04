import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Star } from "lucide-react";
import { REALTIME_OPTIONS } from "../data";

export default function RealtimeComparison() {
  const { introAr, options, comparison } = REALTIME_OPTIONS;

  return (
    <section className="mb-12">
      <SectionTitle>تحديث عدّادات الإشغال — خيارَان</SectionTitle>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-4xl">{introAr}</p>

      {/* Side-by-side option cards */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {options.map((opt, i) => (
          <motion.div
            key={opt.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`rounded-2xl p-6 border ${
              opt.recommended
                ? "bg-brand-green/10 border-brand-green/30"
                : "bg-brand-card-dark border-white/5"
            }`}
          >
            {/* Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`text-xs px-2.5 py-1 rounded-full border ${
                  opt.recommended
                    ? "bg-brand-green/20 text-brand-green border-brand-green/30"
                    : "bg-white/5 text-gray-400 border-white/10"
                }`}
              >
                {opt.badgeAr}
              </span>
              {opt.recommended && (
                <span className="inline-flex items-center gap-1 text-xs text-brand-green">
                  <Star className="h-3 w-3" />
                  موصى به
                </span>
              )}
            </div>

            <h3 className="text-white font-bold text-lg mb-1">{opt.titleAr}</h3>
            <p className={`text-sm font-semibold mb-5 ${opt.recommended ? "text-brand-green" : "text-gray-300"}`}>
              {opt.priceNoteAr}
            </p>

            {/* Pros */}
            <p className="text-xs text-brand-green font-medium mb-2 uppercase tracking-wider">المزايا</p>
            <ul className="space-y-1.5 mb-5">
              {opt.prosAr.map((p, j) => (
                <li key={j} className="text-gray-300 text-xs flex gap-2 items-start leading-relaxed">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-green mt-0.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            {/* Cons */}
            <p className="text-xs text-amber-400 font-medium mb-2 uppercase tracking-wider">ما يجب أخذه في الاعتبار</p>
            <ul className="space-y-1.5">
              {opt.consAr.map((c, j) => (
                <li key={j} className="text-gray-400 text-xs flex gap-2 items-start leading-relaxed">
                  <XCircle className="h-3.5 w-3.5 text-amber-400 mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Comparison table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="bg-brand-card-dark border border-white/5 rounded-2xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="border-b border-white/5 text-gray-400 text-xs">
                <th className="text-right px-6 py-4 font-medium">البند</th>
                <th className="text-center px-4 py-4 font-medium">
                  <span className="text-brand-green">تحديث دوري كل 30 ثانية</span>
                  <span className="block text-gray-500 font-normal mt-0.5">المعتمد في السعر</span>
                </th>
                <th className="text-center px-6 py-4 font-medium">
                  <span className="text-white">تحديث لحظي</span>
                  <span className="block text-gray-500 font-normal mt-0.5">ترقية اختيارية</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparison.map((row, i) => (
                <tr
                  key={i}
                  className={`text-gray-300 ${row.highlight ? "bg-brand-green/5" : ""}`}
                >
                  <td className={`px-6 py-3.5 text-sm ${row.highlight ? "text-white font-bold" : "text-gray-400"}`}>
                    {row.labelAr}
                  </td>
                  <td
                    className={`px-4 py-3.5 text-center ${
                      row.highlight ? "text-brand-green font-bold text-base" : "text-white text-sm"
                    }`}
                  >
                    {row.pollingAr}
                  </td>
                  <td
                    className={`px-6 py-3.5 text-center ${
                      row.highlight ? "text-white font-bold text-base" : "text-gray-300 text-sm"
                    }`}
                  >
                    {row.realtimeAr}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <p className="text-gray-500 text-xs mt-3 leading-relaxed">
        القرار متروك لكم بعد رؤية فرق السعر، ويمكن طلب الترقية لاحقاً بعد التشغيل الفعلي دون إعادة بناء المنصة.
      </p>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <span className="w-1 h-6 rounded-full bg-brand-green inline-block" />
      {children}
    </h2>
  );
}
