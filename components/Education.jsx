"use client";
import { useState, useEffect, useRef } from "react";

const nodes = [
  {
    degree: "B.Tech in Computer Science",
    institution: "VIT University",
    period: "2019 – 2023",
    detail: "CGPA: 8.97 · Coursework: Software Development, Operating Systems, Computer Networks",
  },
  {
    degree: "Class XII",
    institution: "Amrita Vidyalayam",
    period: "2019",
    detail: "Kolkata · Science stream",
  },
];

const nodePositions = [0.2, 0.7];
const cycleDuration = 5000;
const pauseDuration = 800;
const litDuration = 0.3;

export default function Education() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  // dotTops: absolute top (px) of each dot relative to wrapper, so they align with card tops
  const [dotTops, setDotTops] = useState([]);

  const frameRef = useRef(null);
  const lastTimeRef = useRef(null);
  const elapsedRef = useRef(0);

  // Measure card positions to place dots correctly
  useEffect(() => {
    const measure = () => {
      if (!wrapperRef.current) return;
      const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
      const tops = cardRefs.current.map(el => {
        if (!el) return 0;
        const cardTop = el.getBoundingClientRect().top;
        // Place dot aligned with the top edge of the card + 20px (first line center)
        return cardTop - wrapperTop + 20;
      });
      setDotTops(tops);
    };
    // Wait for layout to settle before measuring
    const raf = requestAnimationFrame(() => {
      setTimeout(measure, 50);
    });
    window.addEventListener("resize", measure);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", measure); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const total = cycleDuration + pauseDuration;
    const tick = (timestamp) => {
      if (lastTimeRef.current == null) lastTimeRef.current = timestamp;
      const delta = Math.min(timestamp - lastTimeRef.current, 100);
      lastTimeRef.current = timestamp;
      elapsedRef.current = (elapsedRef.current + delta) % total;
      const p = elapsedRef.current < cycleDuration
        ? elapsedRef.current / cycleDuration
        : 1;
      setProgress(p);
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frameRef.current); lastTimeRef.current = null; };
  }, [visible]);

  const litNodes = nodePositions.map(pos => progress >= pos && progress < pos + litDuration);

  return (
    <section id="education" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--color-text)" }}>
          Education
        </h2>

        {/* Outer flex: [line column] [cards column] */}
        <div className="flex gap-8" ref={wrapperRef}>

          {/* ── Line column (32px wide) ───────────────────────── */}
          <div className="relative flex-none" style={{ width: "32px" }}>
            {/* Static grey line */}
            <div
              className="absolute"
              style={{
                left: "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                transform: "translateX(-50%)",
                backgroundColor: "var(--color-border)",
              }}
            />

            {/* Glowing animated line */}
            {visible && (
              <div
                className="absolute pointer-events-none"
                style={{
                  left: "50%",
                  top: 0,
                  width: "2px",
                  height: `${progress * 100}%`,
                  transform: "translateX(-50%)",
                  background: "linear-gradient(to bottom, transparent, var(--color-cyan))",
                  boxShadow: "0 0 8px var(--color-cyan)",
                  transition: "height 0.05s linear",
                }}
              />
            )}

            {/* Dots — absolutely positioned to match card tops */}
            {nodes.map((_, i) => (
              <div
                key={i}
                className="absolute transition-all duration-500"
                style={{
                  left: "50%",
                  top: dotTops[i] ?? (i === 0 ? 20 : 160),
                  width: "16px",
                  height: "16px",
                  transform: litNodes[i]
                    ? "translate(-50%, -50%) scale(1.35)"
                    : "translate(-50%, -50%) scale(1)",
                  borderRadius: "50%",
                  border: "2px solid var(--color-cyan)",
                  backgroundColor: litNodes[i] ? "var(--color-cyan)" : "var(--color-bg)",
                  boxShadow: litNodes[i] ? "0 0 14px var(--color-cyan)" : "none",
                  zIndex: 10,
                }}
              />
            ))}
          </div>

          {/* ── Cards column ─────────────────────────────────── */}
          <div className="flex-1 flex flex-col gap-8">
            {nodes.map((node, i) => (
              <div
                key={i}
                ref={el => { cardRefs.current[i] = el; }}
                className={`rounded-xl border p-5 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                style={{
                  transitionDelay: `${i * 200}ms`,
                  backgroundColor: "var(--color-card)",
                  borderColor: litNodes[i] ? "var(--color-cyan)" : "var(--color-border)",
                  boxShadow: litNodes[i]
                    ? "0 0 20px color-mix(in srgb, var(--color-cyan) 20%, transparent)"
                    : "var(--shadow-card)",
                }}
              >
                <h3 className="font-bold text-lg transition-colors duration-500"
                  style={{ color: litNodes[i] ? "var(--color-cyan)" : "var(--color-text)" }}>
                  {node.degree}
                </h3>
                <p className="font-semibold mt-0.5 transition-colors duration-500"
                  style={{ color: litNodes[i] ? "var(--color-cyan)" : "var(--color-muted)" }}>
                  {node.institution}
                </p>
                <p className="text-sm mt-1" style={{ color: "var(--color-muted)" }}>{node.period}</p>
                <p className="text-sm mt-2" style={{ color: "var(--color-muted)" }}>{node.detail}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
