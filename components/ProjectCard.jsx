export default function ProjectCard({ title, githubUrl, description, bullets, tags }) {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6 hover:-translate-y-2 transition-all duration-300">

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
  );
}