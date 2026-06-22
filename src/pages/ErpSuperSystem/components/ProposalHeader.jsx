import React from "react";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { fmt, MOBILE_ADDON_EGP } from "../data";

export default function ProposalHeader({ info, mobile, onToggleMobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mb-12"
    >
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-medium">
          مقترح مشروع تقني
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight mb-6">
        {info.titleAr}
      </h1>

      {/* Summary */}
      <p className="text-gray-400 text-center text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-8">
        {info.summaryAr}
      </p>

      {/* Mobile add-on toggle */}
      <div className="flex justify-center mb-10">
        <button
          onClick={onToggleMobile}
          aria-pressed={mobile}
          className={`group flex items-center gap-4 rounded-2xl border px-5 py-4 transition-colors text-right ${
            mobile
              ? "bg-brand-green/10 border-brand-green/40"
              : "bg-brand-card-dark border-white/10 hover:border-white/20"
          }`}
        >
          <span
            className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-colors ${
              mobile ? "bg-brand-green/20 text-brand-green" : "bg-white/5 text-gray-400"
            }`}
          >
            <Smartphone className="h-5 w-5" />
          </span>

          <span className="flex-1">
            <span className="block text-white font-semibold text-sm">
              إضافة تطبيق الموبايل (iOS + Android)
            </span>
            <span className="block text-gray-500 text-xs mt-0.5">
              {mobile
                ? `مُفعّل — ‎+${fmt(MOBILE_ADDON_EGP)} ج.م، ويمدّد المدة ~شهرين`
                : `اختياري — يضيف ‎${fmt(MOBILE_ADDON_EGP)} ج.م ويمدّد المدة ~شهرين`}
            </span>
          </span>

          {/* Switch */}
          <span
            className={`relative w-12 h-6 rounded-full shrink-0 transition-colors ${
              mobile ? "bg-brand-green" : "bg-white/15"
            }`}
          >
            <span
              className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all ${
                mobile ? "left-0.5" : "left-6"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="إجمالي التكلفة" value={`${fmt(info.totalEGP)} ج.م`} accent />
        <StatCard label="عدد الوحدات" value={`${fmt(info.modulesCount)} وحدات`} />
        <StatCard label="المنصات" value={info.platformsAr} />
        <StatCard label="المدة الإجمالية" value={`${info.durationWeeks} أسبوع`} />
      </div>
    </motion.div>
  );
}

function StatCard({ label, value, accent }) {
  return (
    <div className={`rounded-2xl p-5 border text-center ${accent ? "bg-brand-green/10 border-brand-green/30" : "bg-brand-card-dark border-white/5"}`}>
      <p className={`text-xl font-bold mb-1 ${accent ? "text-brand-green" : "text-white"}`}>{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
