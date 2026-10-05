"use client";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--color-text)" }}>
          Experience
        </h2>

        <div className={`relative rounded-xl p-6 border overflow-hidden transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", boxShadow: "var(--shadow-card)" }}>
          {/* Scanning line animation */}
          {visible && <div className="scanning-line" />}

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold" style={{ color: "var(--color-cyan)" }}>Junior Analyst</h3>
                <p className="font-semibold" style={{ color: "var(--color-text)" }}>fnCyber</p>
              </div>
              <div className="mt-1 md:mt-0 text-sm" style={{ color: "var(--color-muted)" }}>
                August 2025 – November 2025 &nbsp;·&nbsp; Remote
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "SOC & Incident Analysis: Monitored and analyzed security alerts using SIEM tools (Wazuh), performing incident triage and packet analysis via Wireshark to identify potential threats.",
                "Security Infrastructure: Gained hands-on experience in system administration and networking, managing firewall basics and endpoint security to maintain a hardened environment.",
                "Compliance & Frameworks: Applied industry-standard ethical practices and compliance procedures, including GDPR and DPDP, within core Security Operations Center (SOC) workflows.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm" style={{ color: "var(--color-muted)" }}>
                  <span style={{ color: "var(--color-cyan)" }} className="mt-0.5 flex-shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-5">
              {["Wazuh", "Wireshark", "SIEM", "SOC", "GDPR", "DPDP", "Network Security"].map(tag => (
                <span key={tag} className="px-2 py-1 rounded text-xs font-mono border"
                  style={{ color: "var(--color-cyan)", borderColor: "var(--color-border)", backgroundColor: "color-mix(in srgb, var(--color-cyan) 8%, transparent)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
