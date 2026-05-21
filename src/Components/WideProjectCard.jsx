import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TAG_STYLES } from "../constants/projects";
import SkeletonImage from "./SkeletonImage";

const WideProjectCard = ({ project, index, categoryColor, CategoryIcon }) => {
  const [activeImg, setActiveImg] = useState(0);
  const tag = TAG_STYLES[project.tag] ?? { color: "#9ca3af", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" };

  return (
    <motion.div
      className="group w-full bg-brand-card-dark border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.15] hover:shadow-2xl hover:shadow-black/40 transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <div className="flex flex-col lg:flex-row">

        {/* Left — image preview */}
        <div className="relative lg:w-[58%] h-64 lg:h-auto overflow-hidden bg-black/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImg}
              className="w-full h-full"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
            >
              <SkeletonImage
                src={project.images[activeImg]}
                alt={`${project.name} screenshot ${activeImg + 1}`}
                className="w-full h-full object-cover object-top"
                skeletonClassName="h-full"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-card-dark/60 pointer-events-none hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-card-dark/60 pointer-events-none lg:hidden" />

          {/* Tag badge */}
          <div
            className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider z-10"
            style={{ color: tag.color, background: tag.bg, border: `1px solid ${tag.border}`, backdropFilter: "blur(8px)" }}
          >
            {project.tag}
          </div>

          {/* Thumbnail switcher */}
          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-3 flex gap-2 z-10">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="relative w-12 h-8 rounded-md overflow-hidden border-2 transition-all duration-200"
                  style={{
                    borderColor: activeImg === i ? tag.color : "rgba(255,255,255,0.2)",
                    opacity:     activeImg === i ? 1 : 0.55,
                  }}
                >
                  <img src={img} alt={`thumb ${i + 1}`} className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right — content */}
        <div className="flex flex-col justify-center p-6 lg:p-8 lg:w-[42%]">
          <div
            className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider mb-4 self-start"
            style={{ color: tag.color, background: tag.bg, border: `1px solid ${tag.border}` }}
          >
            {CategoryIcon && <CategoryIcon size={10} />}
            {project.tag}
          </div>

          <h3
            className="text-white font-black text-xl lg:text-2xl leading-tight mb-3 transition-colors duration-300"
            style={{ ["--hover-color"]: categoryColor }}
          >
            <span className="group-hover:text-[var(--hover-color)] transition-colors duration-300">
              {project.name}
            </span>
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Image counter dots */}
          {project.images.length > 1 && (
            <div className="flex gap-2 items-center">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width:      activeImg === i ? "20px" : "6px",
                    height:     "6px",
                    background: activeImg === i ? tag.color : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
              <span className="text-gray-600 text-xs ml-1">{activeImg + 1} / {project.images.length}</span>
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
};

export default WideProjectCard;
