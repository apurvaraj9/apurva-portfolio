"use client";
import { useEffect, useRef } from "react";

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 400;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ#$%&<>{}[]|=+-*/";
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    const getCyan = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--color-matrix").trim();
      return v || "#06B6D4";
    };

    const getBg = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--color-bg").trim();
      return v || "#0B0F19";
    };

    const draw = () => {
      const bg = getBg();
      const cyan = getCyan();

      // Parse bg color for fade overlay
      ctx.fillStyle = bg.startsWith("#")
        ? hexToRgba(bg, 0.05)
        : "rgba(11,15,25,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = cyan;
      ctx.font = `${fontSize}px monospace`;
      ctx.globalAlpha = 0.18;

      columns = Math.floor(canvas.width / fontSize);
      while (drops.length < columns) drops.push(Math.floor(Math.random() * -50));
      drops = drops.slice(0, columns);

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
      ctx.globalAlpha = 1;
    };

    const id = setInterval(draw, 50);
    return () => { clearInterval(id); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-24 px-4 overflow-hidden">
      <MatrixRain />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--color-text)" }}>
          Get In Touch
        </h2>
        <p className="mb-10 max-w-md mx-auto" style={{ color: "var(--color-muted)" }}>
          Open to full-time roles and freelance projects. Whether it is a software position or a cybersecurity role — I would love to hear from you.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a href="mailto:apurvaraj304@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "var(--color-cyan)", color: "#0B0F19" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Send Email
          </a>
          <a href="https://github.com/apurvaraj9" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border transition-all duration-200 hover:scale-105"
            style={{ borderColor: "var(--color-cyan)", color: "var(--color-cyan)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/apurvaraj304" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border transition-all duration-200 hover:scale-105"
            style={{ borderColor: "var(--color-cyan)", color: "var(--color-cyan)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        <p className="text-sm font-mono" style={{ color: "var(--color-muted)" }}>
          apurvaraj304@gmail.com
        </p>
      </div>
    </section>
  );
}
