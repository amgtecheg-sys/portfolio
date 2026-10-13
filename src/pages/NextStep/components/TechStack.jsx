import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "../data";

export default function TechStack() {
  return (
    <section className="mb-12">
      <SectionTitle>المنظومة التقنية</SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
