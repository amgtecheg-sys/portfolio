import React from "react";
import { motion } from "framer-motion";
import { MILESTONES } from "../data";

const PHASE_COLORS = ["#3AB54A", "#22C55E", "#16A34A", "#15803D"];

export default function ProjectTimeline() {
  return (
    <section className="mb-12">
      <SectionTitle>مراحل المشروع والجدول الزمني</SectionTitle>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute right-6 top-0 bottom-0 w-px bg-brand-green/20 hidden md:block" />

        <div className="space-y-6">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 md:pr-16 relative"
            >
              {/* Phase number bubble */}
              <div
                className="hidden md:flex absolute right-0 w-12 h-12 rounded-full items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg"
                style={{ backgroundColor: PHASE_COLORS[i] }}
              >
                {i + 1}
              </div>

              {/* Card */}
              <div className="flex-1 bg-brand-card-dark border border-white/5 rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-xs"
                    style={{ backgroundColor: PHASE_COLORS[i] }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-white font-bold text-base">{m.titleAr}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20">
                    {m.weeksAr}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{m.descAr}</p>
                <div className="flex flex-wrap gap-2">
                  {m.deliverablesAr.map((d, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/5">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
