import React from "react";
import { motion } from "framer-motion";
import { FINANCIAL_LINES, PROJECT_INFO } from "../data";

const fmt = (n) => n.toLocaleString("ar-EG");

const CATEGORY_COLORS = {
  "تصميم":       "bg-sky-500/10 text-sky-400 border-sky-500/20",
  "تطوير":       "bg-brand-green/10 text-brand-green border-brand-green/20",
  "جودة":        "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "بنية تحتية":  "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "دعم":         "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "إدارة":       "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "ترخيص":       "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

export default function FinancialBreakdown() {
  return (
    <section className="mb-12">
      <SectionTitle>التفاصيل المالية</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="bg-brand-card-dark border border-white/5 rounded-2xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-white/5 text-gray-400 text-xs">
                <th className="text-right px-6 py-4 font-medium">الكود</th>
                <th className="text-right px-4 py-4 font-medium">البند</th>
                <th className="text-center px-4 py-4 font-medium">الفئة</th>
                <th className="text-center px-4 py-4 font-medium">الكمية</th>
                <th className="text-center px-4 py-4 font-medium">الوحدة</th>
                <th className="text-center px-4 py-4 font-medium">سعر الوحدة</th>
                <th className="text-center px-6 py-4 font-medium">الإجمالي</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {FINANCIAL_LINES.map((line, i) => {
                const colorClass = CATEGORY_COLORS[line.category] || "bg-gray-500/10 text-gray-400 border-gray-500/20";
                return (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="text-gray-300 hover:bg-white/2 transition-colors"
                  >
                    <td className="px-6 py-3.5 text-xs font-mono text-gray-500">{line.code}</td>
                    <td className="px-4 py-3.5 text-sm">{line.titleAr}</td>
                    <td className="px-4 py-3.5 text-center">
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${colorClass}`}>
                        {line.category}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-center text-xs">{line.qty}</td>
                    <td className="px-4 py-3.5 text-center text-xs text-gray-400">{line.unit}</td>
                    <td className="px-4 py-3.5 text-center text-xs">{fmt(line.unitPrice)} ج.م</td>
                    <td className="px-6 py-3.5 text-center font-medium text-white">{fmt(line.total)} ج.م</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="border-t border-white/10 px-6 py-5 space-y-3">
          <Row label="المجموع الفرعي" value={PROJECT_INFO.subtotalEGP} />
          <Row label={`احتياطي الطوارئ (${PROJECT_INFO.contingencyPercent}%)`} value={PROJECT_INFO.contingencyEGP} muted />
          <div className="border-t border-brand-green/20 pt-3">
            <Row label="الإجمالي النهائي" value={PROJECT_INFO.totalEGP} highlight />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Row({ label, value, highlight, muted }) {
  return (
    <div className="flex justify-between items-center">
      <span className={`text-sm ${highlight ? "text-white font-bold text-base" : muted ? "text-gray-500" : "text-gray-400"}`}>
        {label}
      </span>
      <span className={`font-semibold ${highlight ? "text-brand-green text-xl" : muted ? "text-gray-400" : "text-white"}`}>
        {value.toLocaleString("ar-EG")} ج.م
      </span>
    </div>
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
