"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills",     label: "Skills" },
  { href: "#projects",   label: "Projects" },
  { href: "#education",  label: "Education" },
  { href: "#contact",    label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{ backgroundColor: "color-mix(in srgb, var(--color-bg) 80%, transparent)", borderBottom: "1px solid var(--color-border)" }}>
      <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono font-bold text-lg" style={{ color: "var(--color-cyan)" }}>
          [AR.]
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-100"
              style={{ color: "var(--color-muted)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--color-cyan)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--color-muted)"}>
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(o => !o)}
            className="text-xl p-1" style={{ color: "var(--color-cyan)" }}
            aria-label="Toggle menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3" style={{ backgroundColor: "var(--color-bg)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm font-medium py-1"
              style={{ color: "var(--color-muted)" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Glow border */}
      <div className="navbar-glow-border" />
    </header>
  );
}
