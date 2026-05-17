import React from "react";
import {
  FaLinkedin, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaWhatsapp, FaTelegram,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, delay: 0.1 },
};

const socials = [
  {
    href: "https://www.linkedin.com/company/amg-tech-official/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    hoverClass: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-500/5",
  },
  {
    href: "https://wa.me/201275835080",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    hoverClass: "hover:text-[#3AB54A] hover:border-[#3AB54A]/30 hover:bg-[#3AB54A]/5",
  },
  {
    href: "https://t.me/+201275835080",
    icon: <FaTelegram />,
    label: "Telegram",
    hoverClass: "hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-500/5",
  },
];

const Contact = () => (
  <section id="contact" className="py-24 px-6 md:px-12 bg-[#191246]">
    <motion.div {...fadeUp} className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#3AB54A]/10 border border-[#3AB54A]/25 text-[#3AB54A] text-xs font-semibold rounded-full uppercase tracking-widest">
          Get in Touch
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-center mb-3">
        <span className="text-[#3AB54A]">Contact Us</span>
      </h2>
      <p className="text-center text-gray-400 text-sm mb-14 max-w-md mx-auto">
        Have a project in mind or want to work with us? We&rsquo;d love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Left — Info */}
        <div className="space-y-4">

          {/* Email */}
          <a
            href="mailto:amgtech.eg@gmail.com"
            className="flex items-center gap-4 bg-[#1a1550] border border-[#3AB54A]/10 rounded-2xl p-5 hover:border-[#3AB54A]/30 hover:shadow-lg hover:shadow-[#3AB54A]/5 transition-all duration-300 group"
          >
            <div className="p-3 bg-[#3AB54A]/10 border border-[#3AB54A]/20 rounded-xl group-hover:bg-[#3AB54A]/20 transition">
              <FaEnvelope className="text-[#3AB54A] text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-0.5">Email</p>
              <p className="text-gray-300 text-sm group-hover:text-white transition">amgtech.eg@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+201275835080"
            className="flex items-center gap-4 bg-[#1a1550] border border-[#3AB54A]/10 rounded-2xl p-5 hover:border-[#3AB54A]/30 hover:shadow-lg hover:shadow-[#3AB54A]/5 transition-all duration-300 group"
          >
            <div className="p-3 bg-[#3AB54A]/10 border border-[#3AB54A]/20 rounded-xl group-hover:bg-[#3AB54A]/20 transition">
              <FaPhone className="text-[#3AB54A] text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-0.5">Phone</p>
              <p className="text-gray-300 text-sm group-hover:text-white transition">+20 127 583 5080</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 bg-[#1a1550] border border-[#3AB54A]/10 rounded-2xl p-5">
            <div className="p-3 bg-[#3AB54A]/10 border border-[#3AB54A]/20 rounded-xl">
              <FaMapMarkerAlt className="text-[#3AB54A] text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-0.5">Location</p>
              <p className="text-gray-300 text-sm">Egypt</p>
            </div>
          </div>

          {/* Socials */}
          <div className="bg-[#1a1550] border border-[#3AB54A]/10 rounded-2xl p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">Find us on</p>
            <div className="flex items-center gap-3">
              {socials.map(({ href, icon, label, hoverClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`flex items-center justify-center w-10 h-10 bg-white/[0.04] border border-white/[0.08] rounded-xl text-gray-400 text-lg transition-all duration-200 ${hoverClass}`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <form
          action="https://formspree.io/f/xzdjeqdz"
          method="POST"
          className="bg-[#1a1550] border border-[#3AB54A]/10 rounded-2xl p-6 space-y-5"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-300 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#3AB54A]/50 focus:bg-white/[0.06] transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-300 text-sm font-medium">Email</label>
            <input
              type="email"
              name="_replyto"
              required
              placeholder="your@email.com"
              className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#3AB54A]/50 focus:bg-white/[0.06] transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-300 text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Tell us about your project..."
              className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#3AB54A]/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 inline-flex items-center justify-center gap-2 bg-[#3AB54A] text-white font-semibold rounded-xl shadow-lg shadow-[#3AB54A]/20 hover:bg-[#4dcf5e] hover:shadow-[#3AB54A]/40 hover:scale-[1.02] transition-all duration-200 text-sm"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>

      </div>
    </motion.div>
  </section>
);

export default Contact;
