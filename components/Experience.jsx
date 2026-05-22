export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 lg:px-8 py-28">

      <h2 className="text-[#F8FAFC] text-2xl md:text-3xl font-bold mb-8">
        Experience
      </h2>

      <div className="bg-slate-800/50 rounded-xl p-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <a href="https://www.fncyber.com/" target="_blank" rel="noopener noreferrer" className="text-[#06B6D4] font-mono text-sm hover:underline">
            fnCyber Security
          </a>
          <span className="text-[#94A3B8] font-mono text-sm">
            Aug 2025 — Nov 2025
          </span>
        </div>

        <h3 className="text-[#F8FAFC] text-xl font-semibold mt-3">
          Junior Analyst
        </h3>

        <p className="text-[#06B6D4] font-mono text-sm mt-1">
          Remote Internship · Cyber Security
        </p>

        <ul className="mt-4 space-y-2">
          <li className="flex gap-3 text-[#94A3B8] text-base leading-relaxed">
            <span className="text-[#06B6D4] mt-1">▹</span>
            <span>SOC &amp; Incident Analysis: Monitored and analyzed security alerts using SIEM tools (Wazuh), performing incident triage and packet analysis via Wireshark to identify potential threats.</span>
          </li>
          <li className="flex gap-3 text-[#94A3B8] text-base leading-relaxed">
            <span className="text-[#06B6D4] mt-1">▹</span>
            <span>Security Infrastructure: Gained hands-on experience in system administration and networking, managing firewall basics and endpoint security to maintain a hardened environment.</span>
          </li>
          <li className="flex gap-3 text-[#94A3B8] text-base leading-relaxed">
            <span className="text-[#06B6D4] mt-1">▹</span>
            <span>Compliance &amp; Frameworks: Applied industry-standard ethical practices and compliance procedures, including GDPR and DPDP, within core Security Operations Center (SOC) workflows.</span>
          </li>
        </ul>

      </div>

    </section>
  );
}