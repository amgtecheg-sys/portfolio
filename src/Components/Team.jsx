/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Users } from "lucide-react";

const teamMembers = [
    {
        name: "Ahmed Ezz",
        role: "Senior Mobile Developer & iOS",
        leader: true,
        avatar: "/team/ezz.jpg",
        linkedin: "https://www.linkedin.com/in/ahmedezz242/",
    },
    {
        name: "Abdelrahman Montaser",
        role: "Mid Level Flutter Developer & Backend (Node.js)",
        avatar: "/team/image.png",
        linkedin: "https://www.linkedin.com/in/abdelrahman-montaser-839600280",
    },
    {
        name: "Mohamed Gabr",
        role: "Mid Level Full Stack Developer",
        avatar: "/team/Gabr.jpeg",
        linkedin: "https://www.linkedin.com/in/mohamed-gbr-222776278/",
    },
    {
        name: "Rawan Nada",
        role: "UI/UX Designer",
        avatar: "/team/Rawan.jpeg",
        linkedin: "https://www.linkedin.com/in/rawannada/",
    },
    {
        name: "Ahmed Elnabawy",
        role: "Data Entry & Data Analysis",
        avatar: "/team/elnabawy.jpeg",
        linkedin: "https://www.linkedin.com/in/ahmed-elnabawy-459597218/",
    },
    {
        name: "Ahmed Elnghonemy",
        role: "Senior Graphic Designer",
        avatar: "/team/ghonemy.jpeg",
        linkedin: null,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const Team = () => (
    <section id="team" className="py-28 px-6 bg-[#150f3d] relative overflow-hidden">

        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3AB54A]/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3AB54A]/4 rounded-full blur-[100px]" />
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
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#3AB54A]/10 border border-[#3AB54A]/25 text-[#3AB54A] text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
                    <Users className="h-3.5 w-3.5" /> Our Team
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                    Meet the{" "}
                    <span className="text-[#3AB54A] relative">
                        Minds
                        <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                            <path d="M0 6 Q50 0 100 4 Q150 8 200 2" stroke="#3AB54A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
                        </svg>
                    </span>{" "}
                    Behind AMG
                </h2>
                <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                    The passionate people who turn bold ideas into real products.
                </p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {teamMembers.map((member, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        className="group relative"
                        style={{ perspective: "1000px" }}
                    >
                        {/* Flip Card Wrapper */}
                        <div
                            className="relative w-full transition-transform duration-700 ease-in-out"
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {/* --- FRONT --- */}
                            <div className="relative bg-[#1a1550] border border-[#3AB54A]/10 rounded-2xl p-8 flex flex-col items-center text-center overflow-hidden group-hover:border-[#3AB54A]/30 transition-all duration-500">

                                {/* Glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#3AB54A]/0 to-[#3AB54A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                                {/* Avatar */}
                                <div className="relative mb-5">
                                    {/* Animated ring */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-[#3AB54A]/40"
                                        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                        style={{ margin: "-6px" }}
                                    />
                                    <div className="absolute inset-0 bg-[#3AB54A]/20 rounded-full blur-xl scale-125 pointer-events-none" />
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="relative w-28 h-28 rounded-full object-cover border-2 border-[#3AB54A]/50 shadow-lg shadow-[#3AB54A]/20 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="text-white text-lg font-bold mb-1 leading-tight">
                                    Eng. {member.name}
                                </h3>

                                {/* Leader badge */}
                                {member.leader && (
                                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#150f3d] bg-[#3AB54A] px-2.5 py-0.5 rounded-full mb-2">
                                        Team Leader
                                    </span>
                                )}

                                {/* Role */}
                                <p className="text-[#3AB54A]/80 text-xs font-medium mt-1 leading-relaxed px-2">
                                    {member.role}
                                </p>

                                {/* Divider */}
                                <div className="w-12 h-px bg-[#3AB54A]/20 my-4" />

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
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3AB54A]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom tagline */}
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
