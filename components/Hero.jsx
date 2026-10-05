"use client";
import { useState, useEffect } from "react";

const fullName = "Apurva Raj.";
const roles = [
  "Full Stack Developer_",
  "Cyber Security Analyst_",
  "Java & Python Engineer_",
  "SOC Incident Analyst_",
];

export default function Hero() {
  const [displayName, setDisplayName] = useState("");
  const [nameTyped, setNameTyped] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Type the name once
  useEffect(() => {
    if (nameTyped) return;
    if (displayName.length < fullName.length) {
      const t = setTimeout(() => setDisplayName(fullName.slice(0, displayName.length + 1)), 100);
      return () => clearTimeout(t);
    } else {
      setNameTyped(true);
    }
  }, [displayName, nameTyped]);

  // Cycle through roles
  useEffect(() => {
    if (!nameTyped) return;
    const role = roles[roleIndex];
    if (typing) {
      if (charIndex < role.length) {
        const t = setTimeout(() => { setDisplayRole(role.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => { setDisplayRole(role.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [nameTyped, typing, charIndex, roleIndex]);

  return (
    <section className="hero-pattern min-h-[85vh] flex flex-col items-center justify-center text-center px-4">
      <p className="font-mono text-sm mb-4" style={{ color: "var(--color-cyan)" }}>
        &gt; Hello, World. I am
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 min-h-[1.2em]" style={{ color: "var(--color-text)" }}>
        {displayName}
        {!nameTyped && <span className="blink" style={{ color: "var(--color-cyan)" }}>|</span>}
      </h1>

      <div className="font-mono text-xl md:text-2xl mb-8 min-h-[2em]" style={{ color: "var(--color-cyan)" }}>
        {nameTyped && (
          <>
            {displayRole}
            <span className="blink">|</span>
          </>
        )}
      </div>

      <p className="max-w-xl text-base mb-10" style={{ color: "var(--color-muted)" }}>
        B.Tech CSE graduate from VIT University. Building secure, scalable applications with Java,
        Python, and Node.js — while analyzing threats in the SOC.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="#projects"
          className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{ backgroundColor: "var(--color-cyan)", color: "#0B0F19" }}>
          View My Projects
        </a>
        <a href="#contact"
          className="px-6 py-3 rounded-lg font-semibold border transition-all duration-200 hover:scale-105"
          style={{ borderColor: "var(--color-cyan)", color: "var(--color-cyan)" }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--color-cyan)"; e.currentTarget.style.color = "#0B0F19"; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--color-cyan)"; }}>
          Contact Me
        </a>
      </div>
    </section>
  );
}
