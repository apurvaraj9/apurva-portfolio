import "./globals.css";

export const metadata = {
  title: "Apurva Raj | Software Developer Portfolio & Cyber Security Specialist",
  description:
    "Professional portfolio of Apurva Raj, a highly motivated B.Tech graduate from VIT University based in Kolkata. Specializing in Full Stack Development, SOC incident analysis, and secure application infrastructure.",
  keywords:
    "Apurva Raj, Apurva Raj Kolkata, VIT University graduate, Software Developer Kolkata, Full Stack Developer, Cyber Security Intern, fnCyber, Video Summarizer, Time Tracker",
  authors: [{ name: "Apurva Raj" }],
  openGraph: {
    title: "Apurva Raj | Software Developer Portfolio & Cyber Security Specialist",
    description:
      "Professional portfolio of Apurva Raj, a highly motivated B.Tech graduate from VIT University based in Kolkata.",
    url: "https://apurvaraj.pages.dev",
    siteName: "Apurva Raj Portfolio",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}