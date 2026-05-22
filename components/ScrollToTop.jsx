"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button onClick={scrollToTop} className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full bg-[#06B6D4] text-black flex items-center justify-center hover:bg-[#06B6D4]/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
      ↑
    </button>
  );
}