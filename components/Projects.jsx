"use client";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ScamSach",
    year: "2026",
    tech: ["Python", "Next.js", "LangGraph", "Groq", "Supabase", "Docker"],
    github: "https://github.com/apurvaraj9/scamsach",
    live: "https://scamsach.vercel.app",
    bullets: [
      "Built a full-stack AI agent that investigates suspicious SMS and WhatsApp messages for India, streaming a live verdict, scam type, and bilingual (English + Hindi) explanation as each step runs.",
      "Designed a LangGraph agentic pipeline (intake → local rules → planner → tool execution → scoring → judge) where an LLM plans its own investigation from a tool menu while hard rule-scores prevent the model from overruling clear evidence.",
      "Engineered prompt-injection defence, PII masking before any LLM or log sees the message, and SSRF-safe link expansion (HEAD-only to known shorteners, never contacting the scam site).",
      "Shipped with Supabase auth and case history, a feedback loop that feeds a labelled eval set, GitHub Actions CI (76 pytest tests + offline eval gate), and gitleaks secret scanning on every push.",
    ],
  },
  {
    title: "Weather-Aware Truck Routing",
    year: "2026",
    tech: ["React", "Django", "TomTom API", "Open-Meteo", "Leaflet", "Docker"],
    github: "https://github.com/apurvaraj9/weather-truck-routing",
    bullets: [
      "Built a React + Django web app that fetches 3 alternative routes from the TomTom Routing API, places weather checkpoints along each route, and computes the truck's ETA at every checkpoint.",
      "Integrated Open-Meteo forecasts to classify each checkpoint as Low / Moderate / High / Severe based on wind speed (with load-weight rules), rainfall and snowfall, then recommends the safest route using a defined preference order.",
      "Rendered all routes, checkpoint risk levels, ETAs and a 0–48 h corridor weather heatmap on an interactive Leaflet/OpenStreetMap map; Django serves the built React app via WhiteNoise with no separate static server.",
      "Covered every risk-table boundary, load rule, checkpoint-spacing and mileage calculation with 57 automated tests; deployed as a single Docker image on Render with a render.yaml Blueprint.",
    ],
  },
  {
    title: "Fuel Route API",
    year: "2026",
    tech: ["Django", "Python", "OSRM", "GeoJSON", "Leaflet", "Render"],
    github: "https://github.com/apurvaraj9/fuel-route-api",
    live: "https://fuel-route-api-h6na.onrender.com/",
    bullets: [
      "Built a Django 6.1 REST API that accepts any US start/finish location and returns cost-optimal fuel stops for a truck with a 500-mile range and 10 MPG, using dynamic programming over 8,000+ real OPIS station prices.",
      "Resolved city names offline against ~39k US centroids derived from public ZIP-code data, called OSRM for free routing geometry, and filtered stations to a 10-mile corridor around the route before running the optimiser.",
      "Returned a full JSON fuel plan (stop name, price, gallons, cost, off-route miles) plus a GeoJSON FeatureCollection and an interactive Leaflet map endpoint; typical processing time after route receipt is ~0.3 s coast-to-coast.",
      "Deployed live on Render's free tier with a Postman collection, health endpoint, and structured error responses; no API key required for basic use.",
    ],
  },
  {
    title: "Log Guard",
    year: "2026",
    tech: ["Python", "openpyxl", "defusedxml", "pytest", "GitHub Actions", "PyPI"],
    github: "https://github.com/apurvaraj9/log-guard",
    pypi: "https://pypi.org/project/logguard-cli/",
    bullets: [
      "Built a Python CLI tool to detect and mask sensitive data — emails, phone numbers, API keys, IP addresses, and credit card numbers — in log files and Excel spreadsheets using regex patterns.",
      "Published as a PyPI package (pip install logguard-cli) with a --check flag for CI/pre-commit hooks, enabling automated sensitive-data prevention in development pipelines.",
      "Implemented recursive directory scanning and custom regex support via JSON config files, giving teams full control over what patterns count as sensitive in their environment.",
      "Wrote a comprehensive test suite of 65+ tests using pytest and set up GitHub Actions CI to run tests automatically on every push, ensuring reliability and regression safety.",
    ],
  },
  {
    title: "Video Summarizer",
    year: "2026",
    tech: ["Node.js", "Express", "Whisper AI", "LLaMA 3", "ffmpeg"],
    github: "https://github.com/apurvaraj9/video-summarizer",
    bullets: [
      "Built a full-stack AI web app that transcribes and summarizes MP4 videos and YouTube URLs using Groq's Whisper Large V3 and LLaMA 3.3 70B models via a Node.js/Express REST API.",
      "Engineered a smart audio chunking system using ffmpeg to split audio files exceeding Groq's 25MB API limit, enabling accurate summarization of videos of any length.",
      "Integrated yt-dlp for direct YouTube URL support alongside local MP4 uploads, with a clean two-tab frontend built in vanilla HTML, CSS, and JavaScript.",
      "Designed a clean REST API with clear separation of concerns between audio extraction, transcription, and summarization layers.",
    ],
  },
  {
    title: "Time Tracker",
    year: "2026",
    tech: ["Python", "Flask", "SQLite", "pandas", "Chart.js"],
    github: "https://github.com/apurvaraj9/time-tracker",
    bullets: [
      "Built a Windows desktop app that detects the active window title every 5 seconds and auto-categorizes screen time into productive categories (Coding, Meetings, Browsing, etc.) using keyword matching.",
      "Designed a SQLite database schema and wrote Python functions to persist and query session data, enabling daily usage reports with a text-based bar chart in the terminal.",
      "Built a Flask REST API with two JSON endpoints serving categorized time data to a browser-based dashboard, demonstrating full-stack Python-to-web integration.",
      "Created an interactive web dashboard using Chart.js displaying a doughnut chart and live session log with 30-second auto-refresh for real-time productivity visibility.",
    ],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent(c => (c + 1) % projects.length), 4000);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => { setCurrent(c => (c - 1 + projects.length) % projects.length); };
  const next = () => { setCurrent(c => (c + 1) % projects.length); };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--color-text)" }}>
          Projects
        </h2>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 3000)}>
          {/* Card */}
          <div className="min-h-[420px]">
            <ProjectCard project={projects[current]} />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button onClick={prev} className="p-2 rounded-lg border transition-all duration-200 hover:opacity-80"
              style={{ borderColor: "var(--color-border)", color: "var(--color-cyan)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    backgroundColor: i === current ? "var(--color-cyan)" : "var(--color-border)",
                  }} />
              ))}
            </div>

            <button onClick={next} className="p-2 rounded-lg border transition-all duration-200 hover:opacity-80"
              style={{ borderColor: "var(--color-border)", color: "var(--color-cyan)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

          {/* Counter */}
          <p className="text-center mt-3 text-xs font-mono" style={{ color: "var(--color-muted)" }}>
            {current + 1} / {projects.length}
          </p>
        </div>
      </div>
    </section>
  );
}
