/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";

const techStack = [
  { label: "Mobile Apps" },
  { label: "Web & Systems" },
  { label: "ERP / CRM" },
  { label: "Marketing" },
  { label: "Automation" },
];

const Navbar = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#191246] overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-[#3AB54A]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#3AB54A]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-[#191246]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col md:flex-row items-center justify-between gap-16 w-full">

        {/* Left — text */}
        <div className="max-w-2xl space-y-7 text-center md:text-left">

          {/* Badge */}
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#3AB54A]/10 border border-[#3AB54A]/25 text-[#3AB54A] text-xs font-semibold rounded-full uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 bg-[#3AB54A] rounded-full animate-pulse" />
            2+ Years of Experience
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            AMG{" "}
            <span className="text-[#3AB54A]">TECH</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            className="text-xl md:text-2xl text-gray-300 font-medium min-h-[2rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typewriter
              words={[
                "Mobile App Development",
                "Web Development",
                "ERP & CRM Systems",
                "Digital Marketing",
                "Automation Solutions",
                "Creative Design",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We build software solutions — mobile apps, web platforms, ERP &amp; CRM systems,
            automation tools, and digital marketing campaigns that help businesses grow.
          </motion.p>

          {/* Tags */}
          <motion.div
            className="flex items-center gap-3 justify-center md:justify-start flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {techStack.map(({ label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-2 bg-white/[0.04] border border-[#3AB54A]/15 rounded-xl"
              >
                <span className="w-1.5 h-1.5 bg-[#3AB54A] rounded-full" />
                <span className="text-gray-300 text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3AB54A] text-white font-semibold rounded-xl shadow-lg shadow-[#3AB54A]/25 hover:bg-[#4dcf5e] hover:shadow-[#3AB54A]/40 hover:scale-105 transition-all duration-200 text-sm"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/201275835080"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-[#3AB54A]/20 text-gray-300 font-semibold rounded-xl hover:bg-[#3AB54A]/10 hover:text-white hover:border-[#3AB54A]/40 transition-all duration-200 text-sm"
            >
              <FaWhatsapp className="h-4 w-4 text-[#3AB54A]" />
              WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right — logo */}
        <motion.div
          className="relative flex-shrink-0 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Glow ring */}
          <div className="absolute inset-0 bg-[#3AB54A]/15 rounded-full scale-[1.5] blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[#191246]/60 rounded-full scale-[1.2] blur-2xl pointer-events-none" />

          <motion.div
            className="relative"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Logo className="relative w-80 md:w-[440px] drop-shadow-2xl" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Navbar;
