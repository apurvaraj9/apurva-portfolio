"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Layout, Server, Database, Shield, Wrench } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Java", "Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Flask", "REST APIs"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["SQLite", "MySQL", "pandas"],
  },
  {
    category: "Cyber Security",
    icon: Shield,
    items: ["Wazuh", "Wireshark", "SIEM", "SOC Analysis", "GDPR", "DPDP", "Firewall Basics", "Endpoint Security"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "ffmpeg", "yt-dlp", "Linux"],
  },
];

function SkillCard({ group, cardIndex, sectionVisible }) {
  const Icon = group.icon;
  const [flipped, setFlipped] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(hover: none)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (sectionVisible) {
      const timer = setTimeout(() => setVisible(true), cardIndex * 120);
      return () => clearTimeout(timer);
    }
  }, [sectionVisible, cardIndex]);

  const handleInteraction = () => {
    if (isMobile) setFlipped((prev) => !prev);
  };

  return (
    <div
      className="relative h-48"
      style={{
        perspective: "1000px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onMouseLeave={() => !isMobile && setFlipped(false)}
      onClick={handleInteraction}
    >
      <div
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="absolute inset-0 bg-slate-800/50 rounded-xl border border-slate-700/50 flex flex-col items-center justify-center gap-4"
        >
          <div className="p-4 rounded-xl bg-[#06B6D4]/10">
            <Icon size={32} className="text-[#06B6D4]" />
          </div>
          <h3 className="text-[#06B6D4] font-mono text-sm font-medium tracking-wider uppercase">
            {group.category}
          </h3>
          <p className="text-slate-600 text-xs font-mono">
            {isMobile ? "tap to explore" : "hover to explore"}
          </p>
        </div>

        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 bg-slate-800/80 rounded-xl border border-[#06B6D4]/30 p-4 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-3">
            <Icon size={16} className="text-[#06B6D4]" />
            <h3 className="text-[#06B6D4] font-mono text-xs font-medium tracking-wider uppercase">
              {group.category}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 overflow-y-auto">
            {group.items.map((skill, i) => (
              <span
                key={i}
                className="text-xs text-[#94A3B8] border border-slate-700 hover:border-[#06B6D4] hover:text-[#06B6D4] hover:shadow-[0_0_8px_rgba(6,182,212,0.3)] px-2 py-1 rounded-full font-mono transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          setPulseKey((k) => k + 1);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 lg:px-8 py-28 relative" ref={ref}>
      <h2 className="text-[#F8FAFC] text-2xl md:text-3xl font-bold mb-8">
        Skills
      </h2>

      <div className="relative">
        {pulseKey > 0 && (
          <>
            <div key={`pulse1-${pulseKey}`} className="pulse-ring" />
            <div key={`pulse2-${pulseKey}`} className="pulse-ring pulse-ring-delay-1" />
            <div key={`pulse3-${pulseKey}`} className="pulse-ring pulse-ring-delay-2" />
          </>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {skills.map((group, index) => (
            <SkillCard
              key={index}
              group={group}
              cardIndex={index}
              sectionVisible={sectionVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}