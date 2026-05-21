import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import { OUT_OF_SCOPE, ASSUMPTIONS } from "../data";

export default function OutOfScope() {
  return (
    <section className="mb-12">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Out of scope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="bg-brand-card-dark border border-white/5 rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
            <span className="w-1 h-5 rounded-full bg-red-400 inline-block" />
            خارج نطاق العمل
          </h2>
          <ul className="space-y-3">
            {OUT_OF_SCOPE.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                <XCircle className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Assumptions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-brand-card-dark border border-white/5 rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-3">
            <span className="w-1 h-5 rounded-full bg-sky-400 inline-block" />
            الافتراضات
          </h2>
          <ul className="space-y-3">
            {ASSUMPTIONS.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                <CheckCircle2 className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
