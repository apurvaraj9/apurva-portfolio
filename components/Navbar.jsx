"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 backdrop-blur-md bg-[#0B0F19]/70">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex items-center justify-between h-14">

        <a href="#" className="font-mono text-[#06B6D4] font-medium tracking-wider hover:text-[#06B6D4]/80 transition-colors duration-200">
          [AR.]
        </a>

        <ul className="hidden md:flex items-center gap-6">
          <li><a href="#experience" className="font-mono text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200">// experience</a></li>
          <li><a href="#skills" className="font-mono text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200">// skills</a></li>
          <li><a href="#projects" className="font-mono text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200">// projects</a></li>
          <li><a href="#education" className="font-mono text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200">// education</a></li>
          <li><a href="#contact" className="font-mono text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200">// contact</a></li>
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200 font-mono text-xl">
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0B0F19]/95 px-6 py-4">
          <ul className="flex flex-col gap-4">
            <li><a href="#experience" onClick={closeMenu} className="font-mono text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200">// experience</a></li>
            <li><a href="#skills" onClick={closeMenu} className="font-mono text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200">// skills</a></li>
            <li><a href="#projects" onClick={closeMenu} className="font-mono text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200">// projects</a></li>
            <li><a href="#education" onClick={closeMenu} className="font-mono text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200">// education</a></li>
            <li><a href="#contact" onClick={closeMenu} className="font-mono text-sm text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200">// contact</a></li>
          </ul>
        </div>
      )}

    </nav>
  );
}