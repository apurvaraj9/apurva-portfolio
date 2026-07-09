"use client";

import { useEffect, useRef } from "react";

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 25 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.7 + 0.3,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;
        p.opacity -= 0.003;

        if (p.y < 0 || p.opacity <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height;
          p.size = Math.random() * 3 + 1;
          p.speedY = Math.random() * 0.8 + 0.3;
          p.speedX = (Math.random() - 0.5) * 0.4;
          p.opacity = Math.random() * 0.7 + 0.3;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "rgba(6, 182, 212, 0.8)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full rounded-xl pointer-events-none z-0"
    />
  );
}

export default function ProjectCard({ title, githubUrl, description, bullets, tags }) {
  return (
    <div className="relative bg-slate-800/50 rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-slate-700/50">

      <ParticleCanvas />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#F8FAFC] text-lg font-bold hover:text-[#06B6D4] transition-colors duration-200">
            {title}
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#06B6D4] font-mono text-xs border border-[#06B6D4] px-2 py-1 rounded hover:bg-[#06B6D4]/10 transition-colors duration-200 whitespace-nowrap">
            GitHub
          </a>
        </div>

        <p className="text-[#94A3B8] text-sm leading-relaxed mt-2">
          {description}
        </p>

        <ul className="mt-3 space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex gap-3 text-[#94A3B8] text-sm leading-relaxed">
              <span className="text-[#06B6D4] mt-1">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs text-[#06B6D4] bg-cyan-950/50 px-2 py-1 rounded font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}