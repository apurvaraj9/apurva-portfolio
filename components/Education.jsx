export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 lg:px-8 py-28 mt-10 mb-10">

      <h2 className="text-[#F8FAFC] text-2xl md:text-3xl font-bold mb-8">
        Education
      </h2>

      <div className="relative border-l border-slate-700 ml-4">

        <div className="relative mb-10 pl-8">
          <div className="absolute -left-[10px] top-1 w-5 h-5 rounded-full bg-[#06B6D4] animate-pulse" />
          <h3 className="text-[#F8FAFC] text-lg font-semibold">
            B.Tech in Computer Science & Engineering
          </h3>
          <p className="text-slate-300 text-sm mt-1">
            VIT University · CGPA: 8.97
          </p>
          <p className="text-[#94A3B8] text-xs mt-1">
            Software Development Fundamentals, Operating Systems, Computer Networks
          </p>
        </div>

        <div className="relative mb-10 pl-8">
          <div className="absolute -left-[8px] top-1 w-4 h-4 rounded-full bg-[#06B6D4] animate-pulse" />
          <h3 className="text-slate-200 text-base font-medium">
            Higher Secondary (Class XII) — Science
          </h3>
          <p className="text-[#94A3B8] text-sm mt-1">
            Amrita Vidyalayam, Kolkata · 83%
          </p>
        </div>

        <div className="relative pl-8">
          <div className="absolute -left-[6px] top-1 w-3 h-3 rounded-full bg-[#06B6D4] animate-pulse" />
          <h3 className="text-slate-300 text-sm font-medium">
            Secondary School (Class X)
          </h3>
          <p className="text-[#94A3B8] text-xs mt-1">
            Amrita Vidyalayam, Kolkata · CGPA: 8.2
          </p>
        </div>

      </div>

    </section>
  );
}