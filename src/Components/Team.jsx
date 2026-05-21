import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { TEAM_MEMBERS, CONTAINER_VARIANTS } from "../constants/team";
import TeamCard from "./TeamCard";

const Team = () => (
  <section id="team" className="py-28 px-6 bg-brand-dark-3 relative overflow-hidden">

    {/* Background blobs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-green/[0.04] rounded-full blur-[100px]" />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">

      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-green/10 border border-brand-green/25 text-brand-green text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
          <Users className="h-3.5 w-3.5" /> Our Team
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Meet the{" "}
          <span className="text-brand-green relative">
            Minds
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
              <path d="M0 6 Q50 0 100 4 Q150 8 200 2" stroke="var(--color-brand-green)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
            </svg>
          </span>{" "}
          Behind AMG
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          The passionate people who turn bold ideas into real products.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {TEAM_MEMBERS.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-center text-gray-600 text-xs mt-14 tracking-widest uppercase"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Building the future, one line at a time.
      </motion.p>
    </div>
  </section>
);

export default Team;
