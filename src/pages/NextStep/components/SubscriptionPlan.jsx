import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Info } from "lucide-react";
import { fmt, SUBSCRIPTION_TIERS } from "../data";

export default function SubscriptionPlan() {
  const s = SUBSCRIPTION_TIERS;

  return (
    <section className="mb-12">
      <SectionTitle>الاشتراك السنوي للتشغيل والدعم (اختياري)</SectionTitle>

      {/* Transparency note */}
      <div className="flex gap-3 items-start bg-white/5 border border-white/5 rounded-xl p-4 mb-6">
        <Info className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
        <p className="text-gray-300 text-xs leading-relaxed">{s.noteAr}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 gap-4"
      >
        {/* Price card */}
        <div className="bg-brand-green/10 border border-brand-green/30 rounded-2xl p-6 text-center flex flex-col justify-center">
          <p className="text-gray-400 text-xs mb-1">الاشتراك الشهري</p>
          <p className="text-brand-green font-bold text-3xl mb-4">{fmt(s.monthlyEGP)} ج.م</p>

          <div className="border-t border-brand-green/20 pt-4">
            <p className="text-gray-400 text-xs mb-1">الاشتراك السنوي</p>
            <p className="text-white font-bold text-xl">{fmt(s.annualEGP)} ج.م</p>
          </div>

          <p className="text-gray-400 text-xs mt-4">{s.capacityAr}</p>
        </div>

        {/* Includes */}
        <div className="md:col-span-2 bg-brand-card-dark border border-white/5 rounded-2xl p-6">
          <h3 className="text-brand-green font-bold text-sm mb-4">ما يشمله الاشتراك</h3>
          <ul className="grid sm:grid-cols-2 gap-2">
            {s.includesAr.map((item, i) => (
              <li key={i} className="text-gray-300 text-xs flex gap-2 items-start leading-relaxed">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-green mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          {/* Warranty */}
          <div className="mt-5 flex gap-3 items-start bg-brand-green/5 border border-brand-green/20 rounded-xl p-4">
            <ShieldCheck className="h-4 w-4 text-brand-green mt-0.5 shrink-0" />
            <p className="text-gray-200 text-xs leading-relaxed font-medium">{s.warrantyAr}</p>
          </div>
        </div>
      </motion.div>

      {/* Extras */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="mt-4 bg-brand-card-dark border border-white/5 rounded-2xl p-6"
      >
        <h3 className="text-gray-300 font-bold text-sm mb-4">{s.extrasTitleAr}</h3>
        <div className="flex flex-wrap gap-2">
          {s.extrasAr.map((item, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5"
            >
              {item}
            </span>
          ))}
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
