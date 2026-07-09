"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  {
    title: "B.Tech in Computer Science & Engineering",
    sub: "VIT University · CGPA: 8.97",
    detail: "Software Development Fundamentals, Operating Systems, Computer Networks",
    size: "w-5 h-5",
    offset: "-left-[10px]",
  },
  {
    title: "Higher Secondary (Class XII) — Science",
    sub: "Amrita Vidyalayam, Kolkata · 83%",
    detail: null,
    size: "w-4 h-4",
    offset: "-left-[8px]",
  },
  {
    title: "Secondary School (Class X)",
    sub: "Amrita Vidyalayam, Kolkata · CGPA: 8.2",
    detail: null,
    size: "w-3 h-3",
    offset: "-left-[6px]",
  },
];

export default function Education() {
  const [pulsePosition, setPulsePosition] = useState(-1);
  const [litNodes, setLitNodes] = useState([false, false, false]);
  const [sectionVisible, setSectionVisible] = useState(false);
  const ref = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionVisible) return;

    const cycleDuration = 5000;
    const pauseDuration = 800;
    const totalCycle = cycleDuration + pauseDuration;
    const nodePositions = [0.15, 0.5, 0.85];

    let startTime = null;
    let animationId;
    let lastTimestamp = null;
    let elapsed = 0;

    const animate = (timestamp) => {
      if (lastTimestamp !== null) {
        const delta = Math.min(timestamp - lastTimestamp, 100);
        elapsed = (elapsed + delta) % totalCycle;
      }
      lastTimestamp = timestamp;

      if (elapsed < cycleDuration) {
        const progress = elapsed / cycleDuration;
        setPulsePosition(progress);

        setLitNodes([
          progress >= nodePositions[0] && progress < nodePositions[0] + 0.25,
          progress >= nodePositions[1] && progress < nodePositions[1] + 0.25,
          progress >= nodePositions[2] && progress < nodePositions[2] + 0.25,
        ]);
      } else {
        setPulsePosition(-1);
        setLitNodes([false, false, false]);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [sectionVisible]);

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 lg:px-8 py-28" ref={ref}>

      <h2 className="text-[#F8FAFC] text-2xl md:text-3xl font-bold mb-8">
        Education
      </h2>

      <div className="relative" ref={timelineRef}>

        <div className="relative border-l-2 border-slate-700 ml-4">

          {pulsePosition >= 0 && (
            <div
              className="absolute left-[-1px] w-[2px] pointer-events-none"
              style={{
                top: `${(pulsePosition - 0.08) * 100}%`,
                height: "8%",
                background: "linear-gradient(to bottom, transparent, rgba(6,182,212,1), transparent)",
                boxShadow: "0 0 8px rgba(6,182,212,0.8), 0 0 20px rgba(6,182,212,0.4)",
                transition: "top 0.05s linear",
              }}
            />
          )}

          <div className="relative mb-10 pl-8">
            <div
              className={`absolute ${nodes[0].offset} top-1 ${nodes[0].size} rounded-full transition-all duration-300 ${
                litNodes[0]
                  ? "bg-[#06B6D4] shadow-[0_0_12px_rgba(6,182,212,0.9),0_0_24px_rgba(6,182,212,0.5)]"
                  : "bg-slate-600"
              }`}
            />
            <h3 className={`text-lg font-semibold transition-all duration-300 ${litNodes[0] ? "text-[#06B6D4] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" : "text-[#F8FAFC]"}`}>
              B.Tech in Computer Science & Engineering
            </h3>
            <p className={`text-sm mt-1 transition-all duration-300 ${litNodes[0] ? "text-[#06B6D4]/80" : "text-slate-300"}`}>
              VIT University · CGPA: 8.97
            </p>
            <p className="text-[#94A3B8] text-xs mt-1">
              Software Development Fundamentals, Operating Systems, Computer Networks
            </p>
          </div>

          <div className="relative mb-10 pl-8">
            <div
              className={`absolute ${nodes[1].offset} top-1 ${nodes[1].size} rounded-full transition-all duration-300 ${
                litNodes[1]
                  ? "bg-[#06B6D4] shadow-[0_0_12px_rgba(6,182,212,0.9),0_0_24px_rgba(6,182,212,0.5)]"
                  : "bg-slate-600"
              }`}
            />
            <h3 className={`text-base font-medium transition-all duration-300 ${litNodes[1] ? "text-[#06B6D4] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" : "text-slate-200"}`}>
              Higher Secondary (Class XII) — Science
            </h3>
            <p className={`text-sm mt-1 transition-all duration-300 ${litNodes[1] ? "text-[#06B6D4]/80" : "text-[#94A3B8]"}`}>
              Amrita Vidyalayam, Kolkata · 83%
            </p>
          </div>

          <div className="relative pl-8">
            <div
              className={`absolute ${nodes[2].offset} top-1 ${nodes[2].size} rounded-full transition-all duration-300 ${
                litNodes[2]
                  ? "bg-[#06B6D4] shadow-[0_0_12px_rgba(6,182,212,0.9),0_0_24px_rgba(6,182,212,0.5)]"
                  : "bg-slate-600"
              }`}
            />
            <h3 className={`text-sm font-medium transition-all duration-300 ${litNodes[2] ? "text-[#06B6D4] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" : "text-slate-300"}`}>
              Secondary School (Class X)
            </h3>
            <p className={`text-xs mt-1 transition-all duration-300 ${litNodes[2] ? "text-[#06B6D4]/80" : "text-[#94A3B8]"}`}>
              Amrita Vidyalayam, Kolkata · CGPA: 8.2
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}