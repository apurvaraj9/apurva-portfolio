"use client";
import { useState, useEffect, useRef } from "react";

const categories = [
  {
    title: "Languages",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ["Java", "Python", "JavaScript", "SQL (MySQL)", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Chart.js", "Leaflet", "Vanilla JS"],
  },
  {
    title: "Backend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
    skills: ["Node.js", "Express.js", "Flask", "Django", "REST APIs", "LangGraph", "WordPress"],
  },
  {
    title: "Databases",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: ["MySQL", "SQLite", "Supabase", "SQL"],
  },
  {
    title: "Cyber Security",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    skills: ["Wazuh (SIEM)", "Wireshark", "SOC Analysis", "Incident Triage", "GDPR / DPDP", "Endpoint Security"],
  },
  {
    title: "Tools",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: ["Git", "GitHub Actions", "Docker", "Google Cloud", "PyPI", "VS Code", "pandas", "NumPy", "pytest"],
  },
];

function SkillCard({ category, index, sectionVisible }) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(hover: none)").matches);
  }, []);

  useEffect(() => {
    if (sectionVisible) {
      const t = setTimeout(() => setCardVisible(true), index * 100);
      return () => clearTimeout(t);
    }
  }, [sectionVisible, index]);

  const handleInteraction = () => {
    if (isMobile) setFlipped(f => !f);
  };

  return (
    <div
      className={`transition-all duration-500 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ perspective: "1000px", height: "200px" }}
      onClick={handleInteraction}
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onMouseLeave={() => !isMobile && setFlipped(false)}>
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
        }}>
        {/* Front */}
        <div className="absolute inset-0 rounded-xl border flex flex-col items-center justify-center gap-3 cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: "var(--color-card)",
            borderColor: "var(--color-border)",
            boxShadow: "var(--shadow-card)",
          }}>
          <span style={{ color: "var(--color-cyan)" }}>{category.icon}</span>
          <h3 className="font-semibold text-base" style={{ color: "var(--color-text)" }}>{category.title}</h3>
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            {isMobile ? "tap to explore" : "hover to explore"}
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-xl border p-4 flex flex-col justify-center gap-2"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "color-mix(in srgb, var(--color-cyan) 6%, var(--color-card))",
            borderColor: "var(--color-cyan)",
          }}>
          <h3 className="font-semibold text-sm mb-1" style={{ color: "var(--color-cyan)" }}>{category.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {category.skills.map(s => (
              <span key={s} className="px-2 py-0.5 rounded text-xs font-mono border"
                style={{ color: "var(--color-text)", borderColor: "var(--color-border)", backgroundColor: "color-mix(in srgb, var(--color-cyan) 10%, transparent)" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          setPulseKey(k => k + 1);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--color-text)" }}>
          Technical Skills
        </h2>

        {/* Pulse wave container */}
        <div className="relative mb-12">
          {sectionVisible && (
            <>
              <div key={`pulse-${pulseKey}-0`} className="pulse-ring" />
              <div key={`pulse-${pulseKey}-1`} className="pulse-ring pulse-ring-delay-1" />
              <div key={`pulse-${pulseKey}-2`} className="pulse-ring pulse-ring-delay-2" />
            </>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <SkillCard key={cat.title} category={cat} index={i} sectionVisible={sectionVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
