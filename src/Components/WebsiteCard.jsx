import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SkeletonImage from "./SkeletonImage";

const WebsiteCard = ({ project, index }) => {
  const [activeImg, setActiveImg] = useState(0);
  const images = project.images ?? [];

  return (
    <motion.div
      className="group bg-brand-card-dark border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.14] transition-all duration-300"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImg}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SkeletonImage
              src={images[activeImg]}
              alt={`${project.name} screenshot ${activeImg + 1}`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              skeletonClassName="h-full"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImg(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: activeImg === i ? "16px" : "6px",
                  height: "6px",
                  background: activeImg === i ? "#fff" : "rgba(255,255,255,0.35)",
                }}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          {project.website ? (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-base leading-snug mb-1 inline-block group-hover:text-brand-green transition-colors duration-300"
            >
              {project.name}
            </a>
          ) : (
            <h3 className="text-white font-bold text-base leading-snug mb-1">
              {project.name}
            </h3>
          )}
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green/40 transition-all duration-300"
            aria-label={`Visit ${project.name}`}
          >
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default WebsiteCard;
