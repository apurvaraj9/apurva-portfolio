"use client";
import { useEffect, useRef } from "react";

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Read cyan color from CSS variable
    const getCyan = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--color-particle").trim();
      return v || "rgba(6,182,212,0.8)";
    };

    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * 300,
      y: Math.random() * 200,
      r: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles.forEach(p => { p.x = Math.random() * canvas.width; });
    };

    resize();
    window.addEventListener("resize", resize);

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cyan = getCyan();
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < -5) { p.y = canvas.height + 5; p.x = Math.random() * canvas.width; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = cyan.replace(/[\d.]+\)$/, `${p.opacity})`);
        ctx.shadowBlur = 6;
        ctx.shadowColor = cyan;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
}

export default function ProjectCard({ project }) {
  return (
    <div className="relative rounded-xl overflow-hidden border h-full"
      style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)", boxShadow: "var(--shadow-card)" }}>
      <ParticleCanvas />
      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold" style={{ color: "var(--color-cyan)" }}>{project.title}</h3>
          <span className="text-xs font-mono px-2 py-0.5 rounded border"
            style={{ color: "var(--color-muted)", borderColor: "var(--color-border)" }}>
            {project.year}
          </span>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map(t => (
            <span key={t} className="text-xs font-mono px-2 py-0.5 rounded border"
              style={{ color: "var(--color-cyan)", borderColor: "var(--color-border)", backgroundColor: "color-mix(in srgb, var(--color-cyan) 8%, transparent)" }}>
              {t}
            </span>
          ))}
        </div>

        {/* Bullet points */}
        <ul className="flex-1 space-y-2 mb-5">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm" style={{ color: "var(--color-muted)" }}>
              <span style={{ color: "var(--color-cyan)" }} className="mt-0.5 flex-shrink-0">▸</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded border transition-all duration-200 hover:opacity-80"
              style={{ color: "var(--color-cyan)", borderColor: "var(--color-border)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {project.pypi && (
            <a href={project.pypi} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded border transition-all duration-200 hover:opacity-80"
              style={{ color: "var(--color-cyan)", borderColor: "var(--color-border)", backgroundColor: "color-mix(in srgb, var(--color-cyan) 8%, transparent)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
              PyPI
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
