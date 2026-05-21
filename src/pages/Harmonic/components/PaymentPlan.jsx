import React from "react";
import { motion } from "framer-motion";
import { PAYMENT_MILESTONES, PROJECT_INFO } from "../data";

const fmt = (n) => n.toLocaleString("ar-EG");

export default function PaymentPlan() {
  return (
    <section className="mb-12">
      <SectionTitle>خطة الدفع</SectionTitle>
      <div className="grid gap-4">
        {PAYMENT_MILESTONES.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-brand-card-dark border border-white/5 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Step number */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green/10 border border-brand-green/20 text-brand-green font-bold text-sm shrink-0">
              {i + 1}
            </div>

            {/* Info */}
            <div className="flex-1">
              <p className="text-white font-medium text-sm">{m.milestoneAr}</p>
              <p className="text-gray-500 text-xs mt-1">{m.timingAr}</p>
            </div>

            {/* Progress bar */}
            <div className="hidden sm:block w-32">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{m.percent}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-brand-green"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                />
              </div>
            </div>

            {/* Amount */}
            <div className="text-right shrink-0">
              <p className="text-brand-green font-bold text-base">{fmt(m.amount)} ج.م</p>
              <p className="text-gray-500 text-xs">{m.percent}% من الإجمالي</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Total reminder */}
      <div className="mt-4 flex justify-end">
        <div className="bg-brand-green/10 border border-brand-green/20 rounded-xl px-5 py-3 text-right">
          <p className="text-xs text-gray-400 mb-0.5">الإجمالي</p>
          <p className="text-brand-green font-bold text-lg">{fmt(PROJECT_INFO.totalEGP)} ج.م</p>
        </div>
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
