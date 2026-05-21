import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES } from "../constants/projects";
import ProjectCard from "./ProjectCard";
import WideProjectCard from "./WideProjectCard";
import EmptyState from "./EmptyState";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const active = CATEGORIES.find((c) => c.id === activeTab);
  const isWideLayout = active.projects.some((p) => p.wide);

  return (
    <section className="py-24 bg-brand-dark" id="projects">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-green/10 border border-brand-green/25 text-brand-green text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
          Our <span className="text-brand-green">Projects</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">Mobile apps, web platforms, and enterprise systems — built with precision.</p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="max-w-6xl mx-auto px-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="flex flex-wrap gap-3 justify-center">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="relative flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer"
                style={{
                  background: isActive ? `${cat.color}15` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? cat.color + "45" : "rgba(255,255,255,0.07)"}`,
                  color: isActive ? cat.color : "#6b7280",
                  boxShadow: isActive ? `0 0 24px ${cat.color}15` : "none",
                }}
              >
                <Icon size={15} />
                {cat.label}
                <span
                  className="text-[11px] px-1.5 py-0.5 rounded-md font-bold"
                  style={{
                    background: isActive ? `${cat.color}20` : "rgba(255,255,255,0.04)",
                    color: isActive ? cat.color : "#4b5563",
                  }}
                >
                  {cat.projects.length}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full"
                    style={{ background: cat.color }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {active.projects.length > 0 ? (
              isWideLayout ? (
                <div className="flex flex-col gap-6">
                  {active.projects.map((project, i) => (
                    <WideProjectCard key={project.id} project={project} index={i} categoryColor={active.color} CategoryIcon={active.icon} />
                  ))}
                </div>
              ) : (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                  {active.projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </div>
              )
            ) : (
              <EmptyState label={active.label} color={active.color} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
