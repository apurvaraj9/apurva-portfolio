export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 lg:px-8 py-16 mt-20 text-center">

      <h2 className="text-[#F8FAFC] text-3xl font-bold">
        Get In Touch
      </h2>

      <p className="text-[#94A3B8] text-base max-w-md mx-auto mt-2">
        I am currently looking for new opportunities. <br />
        Drop an email, my inbox is always open!
      </p>

      <a href="mailto:apurvaraj304@gmail.com" className="inline-block mt-8 px-8 py-4 border border-[#06B6D4] text-[#06B6D4] font-mono font-medium rounded-lg hover:bg-[#06B6D4] hover:text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
        apurvaraj304@gmail.com
      </a>

      <div className="flex items-center justify-center gap-6 mt-8">
        <a href="https://github.com/apurvaraj9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#94A3B8] hover:text-[#06B6D4] font-mono text-sm border border-slate-700 hover:border-[#06B6D4] px-4 py-2 rounded-lg transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub Profile
        </a>
      </div>

      <p className="text-slate-500 text-xs mt-12 font-mono tracking-widest">
        © 2026 APURVA RAJ. BUILT WITH NEXT.JS & TAILWIND.
      </p>

    </section>
  );
}