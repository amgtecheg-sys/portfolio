/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { SiGoogledrive } from "react-icons/si";
import { Smartphone, Globe, Monitor, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const appStoreIcon = "/Images/App Store.svg";
const googlePlayIcon = "/Images/Google Play.svg";
const huaweiIcon = "/Images/AppGallery.svg";
const quizImage = "/Images/core-academy.jpg";
const todoImage = "/Images/ons.png";
const islamic = "/Images/islamic.png";
const yalamatch = "/Images/yala-match.png";
const babaImage = "/Images/BABa.png";
const babaDash1 = "/Images/Baba_dachboard.png";
const babaDash2 = "/Images/Baba_dachboard2.png";

const tagStyles = {
  Sports: { color: "#3AB54A", bg: "rgba(58,181,74,0.12)", border: "rgba(58,181,74,0.3)" },
  EdTech: { color: "#60a5fa", bg: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.3)" },
  "Super App": { color: "#c084fc", bg: "rgba(192,132,252,0.12)", border: "rgba(192,132,252,0.3)" },
  Service: { color: "#3AB54A", bg: "rgba(58,181,74,0.12)", border: "rgba(58,181,74,0.3)" },
  "E-commerce": { color: "#f9a8d4", bg: "rgba(249,168,212,0.12)", border: "rgba(249,168,212,0.3)" },
  Dashboard: { color: "#c084fc", bg: "rgba(192,132,252,0.12)", border: "rgba(192,132,252,0.3)" },
};

const categories = [
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: Smartphone,
    color: "#3AB54A",
    projects: [
      {
        id: 1,
        name: "BaBa App",
        tag: "Super App",
        description: "A multi-service super app connecting users with vendors for ordering, booking, and real-time delivery tracking.",
        image: babaImage,
        huaweiAppStore: "https://appgallery.huawei.com/app/C117147745",
        appStore: "https://apps.apple.com/eg/app/baba-%D8%A8%D8%A7%D8%A8%D8%A7/id6756750299",
        googlePlay: "https://play.google.com/store/apps/details?id=app.superbaba",
      },
      {
        id: 2,
        name: "Islamic Brand",
        tag: "E-commerce",
        description: "A modern mobile app for modest fashion — explore high-quality Islamic clothing with elegant contemporary designs.",
        image: islamic,
        googlePlay: "https://play.google.com/store/apps/details?id=com.islamic.brand",
        huaweiAppStore: "https://appgallery.huawei.com/app/C117105149",
        appStore: "https://apps.apple.com/eg/app/islamic-brand/id6760112874",
      },
      {
        id: 3,
        name: "Yala Match",
        tag: "Sports",
        description: "Football field booking app with owner and admin dashboards for managing bookings and monitoring activities.",
        image: yalamatch,
        googlePlay: "https://play.google.com/store/apps/details?id=app.yalamatch",
        appStore: "https://apps.apple.com/eg/app/yalamatch/id6751447545",
        huaweiAppStore: "https://appgallery.huawei.com/app/C117202075",
      },
      {
        id: 4,
        name: "CoreAcademy",
        tag: "EdTech",
        description: "Educational platform for a programming academy with dedicated interfaces for students and teachers.",
        image: quizImage,
        googlePlay: "https://play.google.com/store/apps/details?id=com.core.academy.student",
        appStore: "https://apps.apple.com/eg/app/core-academy-student/id6747823762",
      },
      {
        id: 5,
        name: "OnNextStay",
        tag: "Service",
        description: "Cleaning service app with separate roles for admin, clients, and cleaners — easy booking and management.",
        image: todoImage,
      },
    ],
  },
  {
    id: "web",
    label: "Websites",
    icon: Globe,
    color: "#60a5fa",
    projects: [],
  },
  {
    id: "systems",
    label: "Systems",
    icon: Monitor,
    color: "#a78bfa",
    projects: [
      {
        id: 20,
        name: "BaBa Dashboard",
        tag: "Dashboard",
        description: "Full admin dashboard for the BaBa super app — vendors, orders, delivery agents, and real-time analytics.",
        image: babaDash1,
      },
      {
        id: 21,
        name: "BaBa Dashboard II",
        tag: "Dashboard",
        description: "Extended admin panel — detailed order management, delivery tracking, and vendor performance reports.",
        image: babaDash2,
      },
    ],
  },
];

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const tag = tagStyles[project.tag] || { color: "#9ca3af", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" };
  const hasLinks = project.googlePlay || project.appStore || project.huaweiAppStore || project.drive;

  return (
    <motion.div
      className="group bg-[#13103a] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.15] hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 break-inside-avoid mb-5"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {/* Image — full natural height, no crop */}
      <div className="relative w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/50 pointer-events-none" />

        {/* Tag badge */}
        <div
          className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider"
          style={{
            color: tag.color,
            background: tag.bg,
            border: `1px solid ${tag.border}`,
            backdropFilter: "blur(8px)",
          }}
        >
          {project.tag}
        </div>

        {/* Arrow on hover */}
        <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight size={13} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-[15px] leading-snug mb-1.5 group-hover:text-[#3AB54A] transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {hasLinks && (
          <>
            <div className="w-full h-px bg-white/[0.06] mb-4" />
            <div className="flex flex-wrap items-center gap-2">
              {project.googlePlay && (
                <a href={project.googlePlay} target="_blank" rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200">
                  <img src={googlePlayIcon} alt="Google Play" className="h-8 w-auto" />
                </a>
              )}
              {project.appStore && (
                <a href={project.appStore} target="_blank" rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200">
                  <img src={appStoreIcon} alt="App Store" className="h-8 w-auto" />
                </a>
              )}
              {project.huaweiAppStore && (
                <a href={project.huaweiAppStore} target="_blank" rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200">
                  <img src={huaweiIcon} alt="Huawei" className="h-8 w-auto" />
                </a>
              )}
              {project.drive && (
                <a href={project.drive} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 rounded-lg hover:text-[#3AB54A] hover:border-[#3AB54A]/30 transition-all duration-200 text-xs font-medium">
                  <SiGoogledrive size={11} /> Drive
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

// ─── Empty state ──────────────────────────────────────────────────────────────
const EmptyState = ({ label, color }) => (
  <motion.div
    className="flex flex-col items-center justify-center py-24 text-center col-span-3"
    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
  >
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
      style={{ background: `${color}10`, border: `1px solid ${color}20` }}>
      <span className="text-xl">🚧</span>
    </div>
    <p className="text-gray-600 text-sm font-medium">{label} projects coming soon</p>
  </motion.div>
);

// ─── Main ─────────────────────────────────────────────────────────────────────
const Projects = () => {
  const [activeTab, setActiveTab] = useState("mobile");
  const active = categories.find((c) => c.id === activeTab);

  return (
    <section className="py-24 bg-[#191246]" id="projects">

      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#3AB54A]/10 border border-[#3AB54A]/25 text-[#3AB54A] text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
          Our <span className="text-[#3AB54A]">Projects</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
          Mobile apps, web platforms, and enterprise systems — built with precision.
        </p>
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
          {categories.map((cat) => {
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

      {/* Masonry grid — 3 columns */}
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {active.projects.length > 0 ? (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                {active.projects.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
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
