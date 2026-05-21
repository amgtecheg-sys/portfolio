import React from "react";
import { SiGoogledrive } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import { TAG_STYLES, IMAGES } from "../constants/projects";
import { motion } from "framer-motion";
const ProjectCard = ({ project, index }) => {
  const tag = TAG_STYLES[project.tag] ?? { color: "#9ca3af", bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.1)" };
  const hasLinks = project.googlePlay || project.appStore || project.huaweiAppStore || project.drive;

  return (
    <motion.div
      className="group bg-brand-card-dark border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.15] hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 break-inside-avoid mb-5"
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden">
        <img src={project.image} alt={project.name} className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/50 pointer-events-none" />

        {/* Tag badge */}
        <div
          className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider"
          style={{ color: tag.color, background: tag.bg, border: `1px solid ${tag.border}`, backdropFilter: "blur(8px)" }}
        >
          {project.tag}
        </div>

        {/* Hover arrow */}
        <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight size={13} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-[15px] leading-snug mb-1.5 group-hover:text-brand-green transition-colors duration-300">{project.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4">{project.description}</p>

        {hasLinks && (
          <>
            <div className="w-full h-px bg-white/[0.06] mb-4" />
            <div className="flex flex-wrap items-center gap-2">
              {project.googlePlay && (
                <a href={project.googlePlay} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200">
                  <img src={IMAGES.googlePlay} alt="Google Play" className="h-8 w-auto" />
                </a>
              )}
              {project.appStore && (
                <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200">
                  <img src={IMAGES.appStore} alt="App Store" className="h-8 w-auto" />
                </a>
              )}
              {project.huaweiAppStore && (
                <a href={project.huaweiAppStore} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity hover:scale-105 transform duration-200">
                  <img src={IMAGES.huawei} alt="Huawei AppGallery" className="h-8 w-auto" />
                </a>
              )}
              {project.drive && (
                <a
                  href={project.drive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 rounded-lg hover:text-brand-green hover:border-brand-green/30 transition-all duration-200 text-xs font-medium"
                >
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

export default ProjectCard;
