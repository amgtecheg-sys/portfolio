import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { CARD_VARIANTS } from "../constants/team";

const TeamCard = ({ member }) => (
  <motion.div
    variants={CARD_VARIANTS}
    className="group relative h-full"
    style={{ perspective: "1000px" }}
  >
    <div className="relative w-full h-full transition-transform duration-700 ease-in-out" style={{ transformStyle: "preserve-3d" }}>
      <div className="relative h-full bg-brand-card border border-brand-green/10 rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden group-hover:border-brand-green/30 transition-all duration-500">

        {/* Glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green/0 to-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

        {/* Avatar */}
        <div className="relative mb-5">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-brand-green/40"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ margin: "-8px" }}
          />
          <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-xl scale-125 pointer-events-none" />
          <img
            src={member.avatar}
            alt={member.name}
            className="relative w-32 h-32 rounded-full object-cover border-2 border-brand-green/50 shadow-lg shadow-brand-green/20 group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: member.objectPosition ?? "center top" }}
          />
        </div>

        {/* Name */}
        <h3 className="text-white text-lg font-bold mb-1 leading-tight">
          Eng. {member.name}
        </h3>

        {/* Leader badge */}
        {member.leader && (
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-dark-3 bg-brand-green px-2.5 py-0.5 rounded-full mb-2">
            Team Leader
          </span>
        )}

        {/* Role */}
        <p className="text-brand-green/80 text-xs font-medium mt-1 leading-relaxed px-2">
          {member.role}
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-brand-green/20 mt-auto mb-4" />

        {/* LinkedIn */}
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 text-xs font-semibold hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-200 group/btn"
          >
            <FaLinkedin className="text-sm group-hover/btn:scale-110 transition-transform" />
            Connect
          </a>
        ) : (
          <span className="text-gray-600 text-xs">—</span>
        )}

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-green/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
      </div>
    </div>
  </motion.div>
);

export default TeamCard;
