"use client";

import { useState, useEffect } from "react";

const fullName = "Apurva Raj.";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + fullName[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <section className="hero-pattern min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto w-full">

        <p className="text-[#06B6D4] font-mono text-sm md:text-base tracking-widest uppercase">
          Hi, I am
        </p>

        <h1 className="text-[#F8FAFC] text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight mt-2">
          {displayed}<span className="text-[#06B6D4] blink">_</span>
        </h1>

        <h2 className="text-[#94A3B8] text-lg md:text-xl xl:text-2xl max-w-3xl mt-4 leading-relaxed">
          Motivated B.Tech graduate from VIT University (8.97 CGPA), bridging the gap between Full Stack development and cybersecurity. Equipped with strong programming capabilities in Java and Python alongside remote internship experience in SOC incident analysis, SIEM tools (Wazuh), and network infrastructure. Eager to leverage technical proficiency and compliance awareness (GDPR/DPDP) to build and maintain secure, scalable applications.
        </h2>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#06B6D4] text-black font-mono font-medium text-sm px-6 py-3 rounded-lg hover:bg-[#06B6D4]/80 transition-colors duration-200">
            View Resume
          </a>
          <a href="#contact" className="border border-[#06B6D4] text-[#06B6D4] font-mono font-medium text-sm px-6 py-3 rounded-lg hover:bg-[#06B6D4]/10 transition-colors duration-200">
            Connect
          </a>
        </div>

      </div>
    </section>
  );
}