import "./globals.css";

export const metadata = {
  title: "Apurva Raj | Software Developer Portfolio & Cyber Security Specialist",
  description:
    "Professional portfolio of Apurva Raj, a highly motivated B.Tech graduate from VIT University based in Kolkata. Full Stack Developer specializing in Java, Python, Node.js, React, and Cyber Security (SOC Analysis, SIEM, Wazuh).",
  keywords:
    "Apurva Raj, Apurva Raj Kolkata, VIT University graduate, Software Developer Kolkata, Full Stack Developer, Cyber Security Junior Analyst, fnCyber, Video Summarizer, Time Tracker, Log Guard",
  authors: [{ name: "Apurva Raj" }],
  openGraph: {
    title: "Apurva Raj | Software Developer & Cyber Security Specialist",
    description:
      "Portfolio of Apurva Raj — Full Stack Developer and Cyber Security Analyst. Projects: Video Summarizer, Time Tracker, Log Guard.",
    url: "https://apurvaraj.pages.dev",
    siteName: "Apurva Raj Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', t);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased" style={{ backgroundColor: "var(--color-bg)", color: "var(--color-text)" }}>
        {children}
      </body>
    </html>
  );
}
