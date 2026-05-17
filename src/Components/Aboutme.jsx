import React from "react";
import {
  FaMobileAlt, FaBullhorn, FaPaintBrush,
  FaGlobe, FaRobot, FaChartBar,
} from "react-icons/fa";
import { Zap, Code, Award, TrendingUp } from "lucide-react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Projects from "./Projects";
import Team from "./Team";
/* eslint-enable no-unused-vars */

/* ─── services ──────────────────────────────────────────── */
const services = [
  {
    icon: <FaMobileAlt className="text-[#3AB54A] text-2xl" />,
    title: "Mobile App Development",
    desc: "High-performance cross-platform mobile apps for iOS and Android using Flutter, with clean architecture and smooth user experience.",
  },
  {
    icon: <FaGlobe className="text-[#3AB54A] text-2xl" />,
    title: "Web Development",
    desc: "Modern, responsive websites and web applications built with the latest technologies — from landing pages to full-scale platforms.",
  },
  {
    icon: <FaChartBar className="text-[#3AB54A] text-2xl" />,
    title: "ERP & CRM Systems",
    desc: "Custom enterprise resource planning and customer relationship management systems tailored to streamline your business operations.",
  },
  {
    icon: <FaRobot className="text-[#3AB54A] text-2xl" />,
    title: "Automation Solutions",
    desc: "Smart automation tools and workflows that save time, reduce errors, and boost productivity across your business processes.",
  },
  {
    icon: <FaBullhorn className="text-[#3AB54A] text-2xl" />,
    title: "Digital Marketing & Ads",
    desc: "Strategic digital marketing campaigns — social media, paid ads, SEO, and content — that grow your brand and convert audiences.",
  },
  {
    icon: <FaPaintBrush className="text-[#3AB54A] text-2xl" />,
    title: "Creative Design",
    desc: "Eye-catching brand identities, UI/UX design, and visual content that make your business memorable and professional.",
  },
];

/* ─── stats ─────────────────────────────────────────────── */
const stats = [
  { value: "2+", label: "Years of Experience", icon: <Award className="h-5 w-5 text-[#3AB54A]" /> },
  { value: "10+", label: "Projects Delivered", icon: <TrendingUp className="h-5 w-5 text-[#3AB54A]" /> },
  { value: "6", label: "Services", icon: <Zap className="h-5 w-5 text-[#3AB54A]" /> },
  { value: "100%", label: "Client Satisfaction", icon: <FaMobileAlt className="text-[#3AB54A] text-lg" /> },
];

/* ─── helpers ───────────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay: 0.1 },
};

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#3AB54A]/10 border border-[#3AB54A]/25 text-[#3AB54A] text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
    {children}
  </span>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
    <span className="text-[#3AB54A]">{children}</span>
  </h2>
);

const Card = ({ children, className = "" }) => (
  <div className={`bg-[#1a1550] border border-[#3AB54A]/10 rounded-2xl p-6 hover:border-[#3AB54A]/30 hover:shadow-lg hover:shadow-[#3AB54A]/5 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

/* ─── component ─────────────────────────────────────────── */
const Aboutme = () => (
  <div id="about" className="bg-[#191246]">

    {/* ── About AMG TECH ── */}
    <section className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
      <motion.div {...fadeUp} className="space-y-6">
        <SectionLabel><Code className="h-3 w-3" /> About Us</SectionLabel>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
          We are{" "}
          <span className="text-[#3AB54A]">AMG TECH</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          AMG TECH is a software company with{" "}
          <span className="text-white font-semibold">2+ years of experience</span> delivering
          end-to-end digital solutions. We build{" "}
          <span className="text-[#3AB54A] font-semibold">mobile apps</span>,{" "}
          <span className="text-[#3AB54A] font-semibold">web platforms</span>,{" "}
          <span className="text-[#3AB54A] font-semibold">ERP &amp; CRM systems</span>,{" "}
          <span className="text-[#3AB54A] font-semibold">automation tools</span>, and run{" "}
          <span className="text-[#3AB54A] font-semibold">digital marketing &amp; advertising</span>{" "}
          campaigns that help businesses grow.
        </p>
        <p className="text-gray-400 text-base leading-relaxed max-w-3xl">
          Our team combines technical expertise with creative thinking to deliver products
          that stand out and drive real results in today&rsquo;s competitive market.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3AB54A] text-white font-semibold rounded-xl shadow-lg shadow-[#3AB54A]/25 hover:bg-[#4dcf5e] hover:scale-105 transition-all duration-200 text-sm"
          >
            Work With Us
          </a>
        </div>
      </motion.div>
    </section>

    {/* ── Stats ── */}
    <section className="py-12 px-6 bg-[#150f3d]">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#1a1550] border border-[#3AB54A]/10 rounded-2xl p-6 text-center hover:border-[#3AB54A]/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Services ── */}
    <section className="py-20 px-6 bg-[#191246]">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-4">
          <SectionLabel><Zap className="h-3 w-3" /> What We Do</SectionLabel>
        </motion.div>
        <SectionTitle>Our Services</SectionTitle>
        <motion.div {...fadeUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Card key={i} className="flex flex-col gap-4">
              <div className="p-3 bg-[#3AB54A]/10 border border-[#3AB54A]/20 rounded-xl w-fit">
                {s.icon}
              </div>
              <div>
                <h3 className="text-white text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── Projects ── */}
    <Projects />

    {/* ── Team ── */}
    <Team />

  </div>
);

export default Aboutme;
