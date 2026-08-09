import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const SCROLL_SPEED = 42;
const HOLD_TOP_MS = 900;
const HOLD_BOTTOM_MS = 1300;
const MAX_VIEWPORT = 520;

const WebsiteCard = ({ project, index }) => {
  const images = project.images ?? [];
  const [activeImg, setActiveImg] = useState(0);
  const [paused, setPaused] = useState(false);
  const [imgReady, setImgReady] = useState(false);
  const [viewportH, setViewportH] = useState(0);

  const viewportRef = useRef(null);
  const imgRef = useRef(null);
  const offsetRef = useRef(0);
  const phaseRef = useRef("hold-top");
  const phaseSinceRef = useRef(0);
  const rafRef = useRef(0);
  const lastTsRef = useRef(0);

  const host = project.website
    ? project.website.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  const syncViewport = (img) => {
    if (!img || !img.naturalHeight) return;
    const renderedH = img.offsetHeight || (img.naturalHeight * (img.clientWidth / img.naturalWidth));
    setViewportH(Math.min(renderedH, MAX_VIEWPORT));
    setImgReady(true);
  };

  useEffect(() => {
    offsetRef.current = 0;
    phaseRef.current = "hold-top";
    phaseSinceRef.current = performance.now();
    lastTsRef.current = 0;
    setImgReady(false);

    const img = imgRef.current;
    if (img) {
      img.style.transform = "translate3d(0, 0, 0)";
      if (img.complete && img.naturalHeight > 0) {
        // Wait a frame so layout width is correct
        requestAnimationFrame(() => syncViewport(img));
      }
    }
  }, [activeImg]);

  useEffect(() => {
    const onResize = () => {
      if (imgRef.current?.complete) syncViewport(imgRef.current);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeImg]);

  useEffect(() => {
    if (images.length === 0 || !imgReady || !viewportH) return;

    const advance = () => {
      if (images.length > 1) {
        setActiveImg((i) => (i + 1) % images.length);
      } else {
        offsetRef.current = 0;
        phaseRef.current = "hold-top";
        phaseSinceRef.current = performance.now();
        if (imgRef.current) {
          imgRef.current.style.transform = "translate3d(0, 0, 0)";
        }
      }
    };

    const tick = (ts) => {
      rafRef.current = requestAnimationFrame(tick);

      if (paused) {
        if (lastTsRef.current) {
          phaseSinceRef.current += ts - lastTsRef.current;
        }
        lastTsRef.current = ts;
        return;
      }

      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = Math.min((ts - lastTsRef.current) / 1000, 0.05);
      lastTsRef.current = ts;

      const img = imgRef.current;
      if (!img) return;

      const maxScroll = Math.max(0, img.offsetHeight - viewportH);
      const elapsed = ts - phaseSinceRef.current;

      if (maxScroll <= 4) {
        if (elapsed >= 2400) advance();
        return;
      }

      if (phaseRef.current === "hold-top") {
        if (elapsed >= HOLD_TOP_MS) {
          phaseRef.current = "scrolling";
          phaseSinceRef.current = ts;
        }
        return;
      }

      if (phaseRef.current === "hold-bottom") {
        if (elapsed >= HOLD_BOTTOM_MS) advance();
        return;
      }

      const next = Math.min(maxScroll, offsetRef.current + SCROLL_SPEED * dt);
      offsetRef.current = next;
      img.style.transform = `translate3d(0, ${-next}px, 0)`;

      if (next >= maxScroll) {
        phaseRef.current = "hold-bottom";
        phaseSinceRef.current = ts;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeImg, imgReady, paused, images.length, viewportH]);

  const needsScroll = imgRef.current
    ? imgRef.current.offsetHeight > viewportH + 4
    : viewportH >= MAX_VIEWPORT - 1;

  return (
    <motion.div
      className="group h-fit"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#0c0a24] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:border-brand-green/30 group-hover:shadow-[0_28px_90px_-18px_rgba(58,181,74,0.18)]">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.07] bg-white/[0.03]">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>

          <div className="flex-1 min-w-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/35 border border-white/[0.06]">
            <ExternalLink size={11} className="text-gray-600 shrink-0" />
            <span className="text-[11px] text-gray-400 truncate font-medium tracking-wide">
              {host ?? project.name}
            </span>
          </div>

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-green/80 hover:text-brand-green transition-colors"
            >
              Visit
              <ArrowUpRight size={12} />
            </a>
          )}
        </div>

        <div
          ref={viewportRef}
          className="relative overflow-hidden bg-transparent transition-[height] duration-500 ease-out"
          style={{ height: viewportH || "auto", minHeight: viewportH ? undefined : 120 }}
        >
          {images.map((src, i) => (
            <img
              key={src}
              ref={i === activeImg ? imgRef : null}
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
              className={`absolute top-0 left-0 w-full h-auto will-change-transform transition-opacity duration-500 ${
                i === activeImg ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onLoad={(e) => {
                if (i === activeImg) syncViewport(e.currentTarget);
              }}
              draggable={false}
            />
          ))}

          {needsScroll && (
            <>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#0c0a24]/40 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0c0a24]/70 to-transparent z-10" />
            </>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: activeImg === i ? "18px" : "6px",
                    height: "6px",
                    background: activeImg === i ? "#3AB54A" : "rgba(255,255,255,0.3)",
                  }}
                  aria-label={`Screenshot ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pt-4 px-1">
        {project.website ? (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold text-lg leading-snug inline-flex items-center gap-2 hover:text-brand-green transition-colors duration-300"
          >
            {project.name}
            <ArrowUpRight
              size={16}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </a>
        ) : (
          <h3 className="text-white font-bold text-lg leading-snug">{project.name}</h3>
        )}
        <p className="text-gray-500 text-sm leading-relaxed mt-1.5 line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default WebsiteCard;
