import { Code2, Layout, Server, Database, Shield, Wrench } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Java", "Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "Tailwind CSS", "Chart.js"],
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "Flask", "REST APIs"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["SQLite", "MySQL", "pandas"],
  },
  {
    category: "Cyber Security",
    icon: Shield,
    items: ["Wazuh", "Wireshark", "SIEM", "SOC Analysis", "GDPR", "DPDP", "Firewall Basics", "Endpoint Security"],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "ffmpeg", "yt-dlp", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 lg:px-8 py-28">

      <h2 className="text-[#F8FAFC] text-2xl md:text-3xl font-bold mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, index) => {
          const Icon = group.icon;
          return (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-[#06B6D4]/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#06B6D4]/10 group-hover:bg-[#06B6D4]/20 transition-all duration-300">
                  <Icon size={18} className="text-[#06B6D4]" />
                </div>
                <h3 className="text-[#06B6D4] font-mono text-sm font-medium tracking-wider uppercase">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span key={i} className="text-xs text-[#94A3B8] border border-slate-700 hover:border-[#06B6D4] hover:text-[#06B6D4] hover:shadow-[0_0_8px_rgba(6,182,212,0.3)] px-3 py-1 rounded-full font-mono transition-all duration-200 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}