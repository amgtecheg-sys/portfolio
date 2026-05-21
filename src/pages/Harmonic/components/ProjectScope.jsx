import React from "react";
import { motion } from "framer-motion";
import { SCOPE_ITEMS } from "../data";
import { CheckCircle2 } from "lucide-react";

export default function ProjectScope() {
  return (
    <section className="mb-12">
      <SectionTitle>نطاق المشروع</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {SCOPE_ITEMS.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-brand-card-dark border border-white/5 rounded-2xl p-6"
          >
            <h3 className="text-brand-green font-bold text-lg mb-4">{section.titleAr}</h3>
            <ul className="space-y-3">
              {section.itemsAr.map((item, j) => (
                <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-brand-green mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
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
