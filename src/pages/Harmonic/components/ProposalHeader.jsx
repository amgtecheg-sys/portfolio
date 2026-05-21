import React from "react";
import { motion } from "framer-motion";
import { PROJECT_INFO } from "../data";

const fmt = (n) => n.toLocaleString("ar-EG");

export default function ProposalHeader() {
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
        {PROJECT_INFO.titleAr}
      </h1>

      {/* Summary */}
      <p className="text-gray-400 text-center text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-10">
        {PROJECT_INFO.summaryAr}
      </p>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="إجمالي التكلفة" value={`${fmt(PROJECT_INFO.totalEGP)} ج.م`} accent />
        <StatCard label="التكلفة الأساسية" value={`${fmt(PROJECT_INFO.subtotalEGP)} ج.م`} />
        <StatCard label="الطوارئ" value={`${PROJECT_INFO.contingencyPercent}%`} />
        <StatCard label="المدة الإجمالية" value={`${PROJECT_INFO.durationWeeks} أسبوع`} />
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
