import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, AlertTriangle } from "lucide-react";
import { PHASES } from "../data";

const PRIORITY_STYLES = {
  high:   { label: "عالي",   className: "bg-red-500/10 text-red-400 border-red-500/20" },
  medium: { label: "متوسط", className: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  low:    { label: "منخفض", className: "bg-green-500/10 text-green-400 border-green-500/20" },
};

const PHASE_COLORS = ["#3AB54A", "#22C55E", "#16A34A", "#15803D"];

export default function ProjectPhases() {
  const [open, setOpen] = useState(0);

  return (
    <section className="mb-12">
      <SectionTitle>تفاصيل المراحل والمهام</SectionTitle>
      <div className="space-y-4">
        {PHASES.map((phase, i) => {
          const isOpen = open === i;
          const totalHours = phase.tasks.reduce((s, t) => s + t.hours, 0);
          const totalDays  = phase.tasks.reduce((s, t) => s + t.days,  0);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-brand-card-dark border border-white/5 rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center gap-4 px-6 py-5 text-right hover:bg-white/2 transition-colors"
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-xl text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: PHASE_COLORS[i] }}
                >
                  {phase.number}
                </span>
                <div className="flex-1 text-right">
                  <p className="text-white font-semibold">{phase.titleAr}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{phase.durationAr}</p>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {totalHours} ساعة
                  </span>
                  <span className="text-gray-600">|</span>
                  <span>{totalDays} يوم</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-white/5 pt-4">
                      {/* Goals */}
                      <div className="mb-5">
                        <p className="text-xs text-brand-green font-medium mb-2 uppercase tracking-wider">أهداف المرحلة</p>
                        <ul className="grid sm:grid-cols-2 gap-1.5">
                          {phase.goalsAr.map((g, j) => (
                            <li key={j} className="text-gray-400 text-xs flex gap-2">
                              <span className="text-brand-green mt-0.5">•</span>{g}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dependency */}
                      <p className="text-xs text-gray-500 mb-5 flex gap-2 items-start">
                        <span className="text-amber-400 mt-0.5 shrink-0">⚠</span>
                        {phase.dependencyAr}
                      </p>

                      {/* Tasks table */}
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm min-w-[560px]">
                          <thead>
                            <tr className="text-gray-500 text-xs border-b border-white/5">
                              <th className="text-right pb-2 font-medium">الكود</th>
                              <th className="text-right pb-2 font-medium">المهمة</th>
                              <th className="text-center pb-2 font-medium">الأولوية</th>
                              <th className="text-center pb-2 font-medium">الساعات</th>
                              <th className="text-center pb-2 font-medium">الأيام</th>
                              <th className="text-right pb-2 font-medium">المخاطر</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {phase.tasks.map((task, j) => {
                              const p = PRIORITY_STYLES[task.priority] || PRIORITY_STYLES.medium;
                              return (
                                <tr key={j} className="text-gray-300">
                                  <td className="py-3 text-xs text-gray-500 font-mono">{task.code}</td>
                                  <td className="py-3 text-sm pr-2">{task.titleAr}</td>
                                  <td className="py-3 text-center">
                                    <span className={`text-xs px-2 py-0.5 rounded-full border ${p.className}`}>
                                      {p.label}
                                    </span>
                                  </td>
                                  <td className="py-3 text-center text-xs">{task.hours}</td>
                                  <td className="py-3 text-center text-xs">{task.days}</td>
                                  <td className="py-3 text-xs text-gray-500 max-w-[200px] leading-relaxed">
                                    {task.riskAr && (
                                      <span className="flex gap-1 items-start">
                                        <AlertTriangle className="h-3 w-3 text-amber-400 mt-0.5 shrink-0" />
                                        {task.riskAr}
                                      </span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                          <tfoot>
                            <tr className="border-t border-brand-green/20 text-brand-green font-semibold">
                              <td colSpan={3} className="pt-3 text-sm">المجموع</td>
                              <td className="pt-3 text-center text-sm">{totalHours}</td>
                              <td className="pt-3 text-center text-sm">{totalDays}</td>
                              <td />
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
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
