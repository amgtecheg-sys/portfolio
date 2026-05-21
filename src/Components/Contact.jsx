import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaTelegram } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { CONTACT_INFO, fadeUp, socials } from "../constants";

const Contact = () => (
  <section id="contact" className="py-24 px-6 md:px-12 bg-brand-dark">
    <motion.div {...fadeUp} className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/25 text-brand-green text-xs font-semibold rounded-full uppercase tracking-widest">
          Get in Touch
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-center mb-3">
        <span className="text-brand-green">Contact Us</span>
      </h2>
      <p className="text-center text-gray-400 text-sm mb-14 max-w-md mx-auto">Have a project in mind or want to work with us? We&rsquo;d love to hear from you.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left — Info */}
        <div className="space-y-4">
          {/* Email */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-4 bg-brand-card border border-brand-green/10 rounded-2xl p-5 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 group"
          >
            <div className="p-3 bg-brand-green/10 border border-brand-green/20 rounded-xl group-hover:bg-brand-green/20 transition">
              <FaEnvelope className="text-brand-green text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-0.5">Email</p>
              <p className="text-gray-300 text-sm group-hover:text-white transition">{CONTACT_INFO.email}</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center gap-4 bg-brand-card border border-brand-green/10 rounded-2xl p-5 hover:border-brand-green/30 hover:shadow-lg hover:shadow-brand-green/5 transition-all duration-300 group"
          >
            <div className="p-3 bg-brand-green/10 border border-brand-green/20 rounded-xl group-hover:bg-brand-green/20 transition">
              <FaPhone className="text-brand-green text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-0.5">Phone</p>
              <p className="text-gray-300 text-sm group-hover:text-white transition">{CONTACT_INFO.phoneDisplay}</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 bg-brand-card border border-brand-green/10 rounded-2xl p-5">
            <div className="p-3 bg-brand-green/10 border border-brand-green/20 rounded-xl">
              <FaMapMarkerAlt className="text-brand-green text-lg" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-0.5">Location</p>
              <p className="text-gray-300 text-sm">Egypt</p>
            </div>
          </div>

          {/* Socials */}
          <div className="bg-brand-card border border-brand-green/10 rounded-2xl p-5">
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
        <form action="https://formspree.io/f/xzdjeqdz" method="POST" className="bg-brand-card border border-brand-green/10 rounded-2xl p-6 space-y-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-300 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-300 text-sm font-medium">Email</label>
            <input
              type="email"
              name="_replyto"
              required
              placeholder="your@email.com"
              className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-gray-300 text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Tell us about your project..."
              className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-green/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl shadow-lg shadow-brand-green/20 hover:bg-brand-green-light hover:shadow-brand-green/40 hover:scale-[1.02] transition-all duration-200 text-sm"
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
