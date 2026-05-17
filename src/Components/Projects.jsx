/* eslint-disable no-unused-vars */
import React from "react";
import { SiGoogledrive } from "react-icons/si";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const appStoreIcon = "/Images/App Store.svg";
const googlePlayIcon = "/Images/Google Play.svg";
const huaweiIcon = "/Images/AppGallery.svg";
const quizImage = "/Images/core-academy.jpg";
const todoImage = "/Images/ons.png";
const islamic = "/Images/islamic.png";
const yalamatch = "/Images/yala-match.png";
const babaImage = "/Images/BABa.png";

const projects = [
  {
    id: 1,
    name: "BaBa App",
    tag: "Super App",
    description:
      "A multi-service app connecting users with vendors for browsing, ordering, and booking. Features delivery management and real-time order tracking.",
    image: babaImage,
    huaweiAppStore: "https://appgallery.huawei.com/app/C117147745",
    appStore: "https://apps.apple.com/eg/app/baba-%D8%A8%D8%A7%D8%A8%D8%A7/id6756750299",
    googlePlay: "https://play.google.com/store/apps/details?id=app.superbaba",
  },
  {
    id: 2,
    name: "Islamic Brand",
    tag: "E-commerce",
    description:
      "A modern mobile application for modest fashion — users can explore high-quality Islamic clothing with elegant contemporary designs.",
    image: islamic,
    googlePlay: "https://play.google.com/store/apps/details?id=com.islamic.brand",
    huaweiAppStore: "https://appgallery.huawei.com/app/C117105149",
  },
  {
    id: 3,
    name: "OnNextStay",
    tag: "Service",
    description:
      "A cleaning service app with separate roles for admin, clients, and cleaners — enabling easy booking and management of home/villa cleaning services.",
    image: todoImage,
  },
  {
    id: 4,
    name: "Yala Match",
    tag: "Sports",
    description:
      "A football field booking app with separate dashboards for field owners and admins to manage bookings and monitor activities.",
    image: yalamatch,
    googlePlay: "https://play.google.com/store/apps/details?id=app.yalamatch",
    appStore: "https://apps.apple.com/eg/app/yalamatch/id6751447545",
    huaweiAppStore: "https://appgallery.huawei.com/app/C117202075",
    downloads: "100+",
  },
  {
    id: 5,
    name: "CoreAcademy",
    tag: "EdTech",
    description:
      "An educational platform for a programming academy offering multiple courses, with separate interfaces for students and teachers.",
    image: quizImage,
    googlePlay: "https://play.google.com/store/apps/details?id=com.core.academy.student",
    appStore: "https://apps.apple.com/eg/app/core-academy-student/id6747823762",
  },
];

const tagColors = {
  Sports: "text-[#3AB54A] bg-[#3AB54A]/10 border-[#3AB54A]/25",
  EdTech: "text-blue-400  bg-blue-500/10  border-blue-500/20",
  "Super App": "text-purple-400 bg-purple-500/10 border-purple-500/20",
  Service: "text-[#3AB54A] bg-[#3AB54A]/10 border-[#3AB54A]/25",
  "E-commerce": "text-white     bg-white/5      border-white/15",
};

const Projects = () => (
  <section className="py-20 px-6 bg-[#191246]" id="projects">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#3AB54A]/10 border border-[#3AB54A]/25 text-[#3AB54A] text-xs font-semibold rounded-full uppercase tracking-widest">
            Portfolio
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          <span className="text-[#3AB54A]">Our Projects</span>
        </h2>

        {/* Grid — each card takes its natural image height */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {projects.map((project, i) => (
            <motion.div
              key={`${project.id}-${i}`}
              className="group break-inside-avoid bg-[#1a1550] border border-[#3AB54A]/10 rounded-2xl overflow-hidden hover:border-[#3AB54A]/30 hover:shadow-xl hover:shadow-[#3AB54A]/5 transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {/* Image — natural size, no fixed ratio */}
              <div className="w-full overflow-hidden bg-[#150f3d]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-base font-bold">{project.name}</h3>
                  {project.tag && (
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${tagColors[project.tag] || "text-gray-400 bg-white/5 border-white/10"}`}>
                      {project.tag}
                    </span>
                  )}
                </div>

                {project.downloads && (
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#3AB54A] mb-3">
                    <Download size={12} />
                    <span className="font-semibold">{project.downloads}</span>
                    <span className="text-gray-500">downloads</span>
                  </div>
                )}

                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.googlePlay && (
                    <a href={project.googlePlay} target="_blank" rel="noopener noreferrer"
                      className="inline-block transition-transform duration-200 hover:scale-105">
                      <img src={googlePlayIcon} alt="Google Play" className="w-32 h-10" />
                    </a>
                  )}
                  {project.appStore && (
                    <a href={project.appStore} target="_blank" rel="noopener noreferrer"
                      className="inline-block transition-transform duration-200 hover:scale-105">
                      <img src={appStoreIcon} alt="App Store" className="w-28 h-10" />
                    </a>
                  )}
                  {project.drive && (
                    <a href={project.drive} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-[#3AB54A]/10 hover:border-[#3AB54A]/30 hover:text-[#3AB54A] transition-all duration-200 text-xs font-medium">
                      <SiGoogledrive className="text-xs" /> Drive
                    </a>
                  )}
                  {project.huaweiAppStore && (
                    <a href={project.huaweiAppStore} target="_blank" rel="noopener noreferrer"
                      className="inline-block transition-transform duration-200 hover:scale-105">
                      <img src={huaweiIcon} alt="Huawei Store" className="w-32 h-10" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  </section>
);

export default Projects;
