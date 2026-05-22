"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Video Summarizer",
    githubUrl: "https://github.com/apurvaraj9/video-summarizer",
    description: "A full-stack AI web application that transcribes and summarizes videos using state-of-the-art AI models.",
     bullets: [
      "Built a full-stack AI web application that transcribes and summarizes MP4 videos and YouTube URLs using Whisper Large V3 and LLaMA 3.3 70B models via a Node.js/Express REST API.",
      "Engineered a smart audio chunking system using ffmpeg to automatically split audio files exceeding the 25MB API limit, enabling accurate summarization of videos of any length.",
      "Integrated yt-dlp for direct YouTube URL support alongside local MP4 uploads, with a clean two-tab frontend built in vanilla HTML, CSS, and JavaScript.",
      "Designed a minimal and intuitive frontend interface with real-time status updates, error handling, and support for both file uploads and URL-based summarization in a single page.",
    ],
    tags: ["Node.js", "Express", "Whisper AI", "LLaMA 3", "ffmpeg"],
  },
  {
    title: "Time Tracker",
    githubUrl: "https://github.com/apurvaraj9/time-tracker",
    description: "A Windows desktop app that automatically tracks and categorizes screen time with a live web dashboard.",
    bullets: [
      "Built a Windows desktop app that detects the active window title every 5 seconds and auto-categorizes screen time into productive categories using keyword matching.",
      "Designed a SQLite database schema and wrote Python functions to persist and query session data, enabling daily usage reports with a text-based bar chart in the terminal.",
      "Built a Flask REST API with two JSON endpoints that serve categorized time data to a browser-based dashboard, demonstrating full-stack integration between a Python backend and a web frontend.",
      "Created an interactive web dashboard using Chart.js displaying a doughnut chart and live session log with 30-second auto-refresh, giving real-time visibility into daily productivity.",
    ],
    tags: ["Python", "Flask", "SQLite", "pandas", "Chart.js"],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === projects.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 lg:px-8 py-28 mt-10">

      <h2 className="text-[#F8FAFC] text-2xl md:text-3xl font-bold mb-8">
        Selected Work
      </h2>

      <div className="relative">

        <div className="overflow-hidden rounded-xl">
          <div className="transition-all duration-500">
            <ProjectCard {...projects[current]} />
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">

          <button onClick={prev} className="text-[#94A3B8] hover:text-[#06B6D4] font-mono text-sm border border-slate-700 hover:border-[#06B6D4] px-4 py-2 rounded-lg transition-all duration-200">
            ← Prev
          </button>

          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button key={index} onClick={() => setCurrent(index)} className={`w-2 h-2 rounded-full transition-all duration-200 ${current === index ? "bg-[#06B6D4] w-4" : "bg-slate-600"}`} />
            ))}
          </div>

          <button onClick={next} className="text-[#94A3B8] hover:text-[#06B6D4] font-mono text-sm border border-slate-700 hover:border-[#06B6D4] px-4 py-2 rounded-lg transition-all duration-200">
            Next →
          </button>

        </div>

      </div>

    </section>
  );
}