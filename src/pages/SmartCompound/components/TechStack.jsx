import React from "react";
import { motion } from "framer-motion";
import { Database, CheckCircle2, Info } from "lucide-react";
import { TECH_STACK, DATABASE_CHOICE } from "../data";

export default function TechStack() {
  return (
    <section className="mb-12">
      <SectionTitle>المنظومة التقنية</SectionTitle>

      {/* Stack grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {TECH_STACK.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="bg-brand-card-dark border border-white/5 rounded-2xl p-5"
          >
            <h3 className="text-brand-green font-bold text-sm mb-3">{group.titleAr}</h3>
            <ul className="space-y-1.5">
              {group.itemsAr.map((item, j) => (
                <li key={j} className="text-gray-400 text-xs flex gap-2 items-start leading-relaxed">
                  <span className="text-brand-green mt-0.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Database choice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="bg-brand-card-dark border border-white/5 rounded-2xl p-6"
      >
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-green/10 border border-brand-green/20 text-brand-green shrink-0">
            <Database className="h-4 w-4" />
          </span>
          لماذا PostgreSQL وليس MySQL؟
        </h3>

        {/* Headline summary */}
        <div className="bg-brand-green/10 border border-brand-green/20 rounded-xl p-4 mb-5">
          <p className="text-gray-200 text-sm leading-relaxed">{DATABASE_CHOICE.summaryAr}</p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-5">{DATABASE_CHOICE.introAr}</p>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {DATABASE_CHOICE.reasonsAr.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4">
              <p className="text-white font-semibold text-sm mb-2 flex gap-2 items-start">
                <span className="text-brand-green shrink-0">{i + 1}.</span>
                {r.titleAr}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">{r.descAr}</p>
            </div>
          ))}
        </div>

        {/* Fairness — MySQL advantages */}
        <div className="border-t border-white/5 pt-5">
          <p className="text-sky-400 font-semibold text-sm mb-3">{DATABASE_CHOICE.fairnessTitleAr}</p>
          <ul className="space-y-1.5 mb-4">
            {DATABASE_CHOICE.fairnessAr.map((item, i) => (
              <li key={i} className="text-gray-400 text-xs flex gap-2 items-start leading-relaxed">
                <CheckCircle2 className="h-3.5 w-3.5 text-sky-400 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-300 text-xs leading-relaxed bg-white/5 border border-white/5 rounded-xl p-4">
            {DATABASE_CHOICE.fairnessNoteAr}
          </p>
        </div>

        {/* Reassurance */}
        <div className="mt-5 flex gap-3 items-start bg-brand-green/5 border border-brand-green/20 rounded-xl p-4">
          <Info className="h-4 w-4 text-brand-green mt-0.5 shrink-0" />
          <p className="text-gray-300 text-xs leading-relaxed">{DATABASE_CHOICE.reassuranceAr}</p>
        </div>
      </motion.div>
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
