import React from "react";
import { FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Logo from "./Logo";
import { CONTACT_INFO, socialsFooter } from "../constants";

const Footer = () => (
  <footer className="bg-brand-dark-3 border-t border-brand-green/10 py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Logo + copy */}
      <div className="flex items-center gap-3">
        <Logo className="h-10 w-auto" />
        <p className="text-gray-500 text-sm">© 2026 AMG TECH. All rights reserved.</p>
      </div>

      {/* Socials */}
      <div className="flex items-center gap-3">
        {socialsFooter.map(({ href, icon, color }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={`text-gray-500 ${color} transition-colors duration-200 text-lg`}>
            {icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
