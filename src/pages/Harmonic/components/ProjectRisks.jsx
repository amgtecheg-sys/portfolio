import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ShieldCheck } from "lucide-react";
import { RISKS } from "../data";

export default function ProjectRisks() {
  return (
    <section className="mb-12">
      <SectionTitle>المخاطر وخطط التخفيف</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {RISKS.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-brand-card-dark border border-white/5 rounded-2xl p-5 space-y-3"
          >
            <div className="flex gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 shrink-0">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-amber-400 font-medium mb-1">الخطر</p>
                <p className="text-gray-200 text-sm leading-relaxed">{r.riskAr}</p>
              </div>
            </div>
            <div className="flex gap-3 pt-2 border-t border-white/5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-green/10 border border-brand-green/20 shrink-0">
                <ShieldCheck className="h-4 w-4 text-brand-green" />
              </div>
              <div>
                <p className="text-xs text-brand-green font-medium mb-1">خطة التخفيف</p>
                <p className="text-gray-400 text-sm leading-relaxed">{r.mitigationAr}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
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
