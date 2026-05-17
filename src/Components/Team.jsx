/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { Users } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7, delay: 0.1 },
};

const teamMembers = [
    {
        name: "Eng. Ahmed Ezz",
        role: "Senior Mobile Developer & iOS",
        leader: true,
        avatar: "/team/ezz.jpg",
        linkedin: "https://www.linkedin.com/in/ahmedezz242/",
    },
    {
        name: "Eng. Abdelrahman Montaser",
        role: "Mid Level Flutter Developer & Backend (Node.js)",
        avatar: "/team/image.png",
        linkedin: "https://www.linkedin.com/in/abdelrahman-montaser-839600280",
    },
    {
        name: "Eng. Mohamed Gabr",
        role: "Mid Level Full Stack Developer",
        avatar: "/team/Gabr.jpeg",
        linkedin: "https://www.linkedin.com/in/mohamed-gbr-222776278/",
    },
        {
        name: "Eng. Rawan Nada",
        role: "UI/UX Designer ",
        avatar: "/team/Rawan.jpeg",
        linkedin: "https://www.linkedin.com/in/rawannada/",
    },
        {
        name: "Eng. Ahmed Elnabawy",
        role: "Data Entry & data analysis",
        avatar: "/team/elnabawy.jpeg",
        linkedin: "https://www.linkedin.com/in/ahmed-elnabawy-459597218/",
    },
];

const Team = () => (
    <section id="team" className="py-24 px-6 bg-[#150f3d]">
        <div className="max-w-5xl mx-auto">

            {/* Label */}
            <motion.div {...fadeUp} className="text-center mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#3AB54A]/10 border border-[#3AB54A]/25 text-[#3AB54A] text-xs font-semibold rounded-full uppercase tracking-widest">
                    <Users className="h-3 w-3" /> Our Team
                </span>
            </motion.div>

            <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-black text-center mb-4">
                <span className="text-[#3AB54A]">Meet the Team</span>
            </motion.h2>

            <motion.p {...fadeUp} className="text-center text-gray-400 text-sm mb-14 max-w-md mx-auto">
                The passionate people behind AMG TECH who turn ideas into reality.
            </motion.p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, i) => (
                    <motion.div
                        key={i}
                        className="group bg-[#1a1550] border border-[#3AB54A]/10 rounded-2xl p-8 hover:border-[#3AB54A]/30 hover:shadow-xl hover:shadow-[#3AB54A]/5 transition-all duration-300 flex flex-col items-center text-center max-w-sm w-full"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                        {/* Avatar */}
                        <div className="relative mb-5">
                            <div className="absolute inset-0 bg-[#3AB54A]/20 rounded-full blur-xl scale-125 pointer-events-none" />
                            <img
                                src={member.avatar}
                                alt={member.name}
                                className="relative w-36 h-36 rounded-full object-cover border-2 border-[#3AB54A]/40 shadow-lg shadow-[#3AB54A]/15"
                            />
                        </div>

                        <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                        {member.leader && (
                            <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#150f3d] bg-[#3AB54A] px-2.5 py-0.5 rounded-full mb-2">
                                Team Leader
                            </span>
                        )}
                        <p className="text-[#3AB54A] text-sm font-semibold mb-5">{member.role}</p>

                        {/* Socials */}
                        <div className="flex items-center gap-3">
                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-400 text-lg hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/5 transition-all duration-200"
                                >
                                    <FaLinkedin />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Team;
