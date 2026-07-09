"use client";

import { useState, useEffect } from "react";

const fullName = "Apurva Raj.";
const roles = [
  "Full Stack Developer_",
  "Cyber Security Analyst_",
  "Java & Python Engineer_",
];

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const [nameComplete, setNameComplete] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    if (displayedName.length < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedName(fullName.slice(0, displayedName.length + 1));
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setNameComplete(true);
    }
  }, [displayedName]);

  useEffect(() => {
    if (!nameComplete) return;

    const currentRole = roles[roleIndex];

    if (!isErasing && displayedRole.length < currentRole.length) {
      const timer = setTimeout(() => {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      }, 80);
      return () => clearTimeout(timer);
    }

    if (!isErasing && displayedRole.length === currentRole.length) {
      const timer = setTimeout(() => setIsErasing(true), 2000);
      return () => clearTimeout(timer);
    }

    if (isErasing && displayedRole.length > 0) {
      const timer = setTimeout(() => {
        setDisplayedRole(displayedRole.slice(0, -1));
      }, 40);
      return () => clearTimeout(timer);
    }

    if (isErasing && displayedRole.length === 0) {
      setIsErasing(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [nameComplete, displayedRole, isErasing, roleIndex]);

  return (
    <section className="hero-pattern min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto w-full">

        <p className="text-[#06B6D4] font-mono text-sm md:text-base tracking-widest uppercase">
          Hi, I am
        </p>

        <h1 className="text-[#F8FAFC] text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tight mt-2">
          {displayedName}<span className="text-[#06B6D4] blink">_</span>
        </h1>

        {nameComplete && (
          <h2 className="text-[#06B6D4] font-mono text-xl md:text-2xl font-medium mt-4 h-8">
            {displayedRole}
          </h2>
        )}

        <p className="text-[#94A3B8] text-lg md:text-xl xl:text-2xl max-w-3xl mt-4 leading-relaxed">
          B.Tech CS graduate from VIT University with an 8.97 CGPA, based in Kolkata. I build full stack web applications and have hands-on experience in cybersecurity through SOC analysis and SIEM tools. Currently looking for opportunities where I can build secure, scalable software.
        </p>

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