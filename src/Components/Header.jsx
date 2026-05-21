import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS } from "../constants/index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? "bg-brand-dark/95 backdrop-blur-xl border-b border-brand-green/10 shadow-2xl shadow-black/50" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#home" className="select-none flex items-center gap-2">
          <Logo className="h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="px-4 py-2 text-sm text-gray-300 hover:text-brand-green hover:bg-brand-green/5 rounded-lg transition-all duration-200 font-medium">
              {label}
            </a>
          ))}
        </nav>

        {/* CTA button desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-brand-green text-white text-sm font-semibold rounded-xl hover:bg-brand-green-light transition-all duration-200 shadow-lg shadow-brand-green/20"
        >
          Get in Touch
        </a>

        {/* Mobile burger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-brand-green transition-colors p-2 rounded-lg hover:bg-brand-green/5">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-brand-dark/98 backdrop-blur-xl border-t border-brand-green/10 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-gray-300 hover:text-brand-green hover:bg-brand-green/5 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-4 py-3 bg-brand-green text-white font-semibold rounded-xl text-sm text-center hover:bg-brand-green-light transition-all duration-200"
          >
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
