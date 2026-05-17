import React from "react";
import { FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => (
  <footer className="bg-[#150f3d] border-t border-[#3AB54A]/10 py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Logo + copy */}
      <div className="flex items-center gap-3">
        <Logo className="h-10 w-auto" />
        <p className="text-gray-500 text-sm">
          © 2026 AMG TECH. All rights reserved.
        </p>
      </div>

      {/* Socials */}
      <div className="flex items-center gap-3">
        {[
          { href: "https://www.linkedin.com/company/amg-tech-official/", icon: <FaLinkedin />, color: "hover:text-blue-400" },
          { href: "https://wa.me/201275835080", icon: <FaWhatsapp />, color: "hover:text-[#3AB54A]" },
          { href: "https://t.me/+201275835080", icon: <FaTelegram />, color: "hover:text-sky-400" },
        ].map(({ href, icon, color }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-500 ${color} transition-colors duration-200 text-lg`}
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
