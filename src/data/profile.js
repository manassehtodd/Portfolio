export const profile = {
  name: "Manasseh Todd",
  role: "Frontend developer",
  location: "Warri, Nigeria",
  timeZone: "Africa/Lagos",
  email: "manassehtodd1@gmail.com",
  resume:
    "https://docs.google.com/document/d/1IwmQ6Fb6PLMP4TrPqvlt5XFdppmeG-j3vIZLdoqc1OI/edit?usp=sharing",
  available: true,
};

export const socials = [
  { label: "GitHub", href: "https://github.com/manassehtodd" },
  { label: "LinkedIn", href: "https://linkedin.com/in/manasseh-todd-942b54291" },
  { label: "WhatsApp", href: "https://wa.me/2347031011530" },
  { label: "Telegram", href: "https://t.me/Toddmanasseh" },
  { label: "Instagram", href: "https://www.instagram.com/_littodd/" },
];

// Newest first. "end: null" means current.
export const experience = [
  {
    company: "Xnyder HQ",
    role: "Frontend & Outreach Developer",
    start: "May 2026",
    end: null,
    note: "Builds client interfaces from Figma, and works on outreach to bring new projects in.",
    tools: "React, JavaScript, Tailwind CSS, StyleX UI, Figma",
  },
  {
    company: "De Lady's Beauty World",
    role: "Web Developer",
    start: "Oct 2026",
    end: null,
    note: "Built deladysbeautyworld.com: the store, KoraPay checkout, an AI skincare routine maker and an installable admin app with push alerts for new orders.",
    tools: "React, Supabase, Zustand, KoraPay",
  },
  {
    company: "Mimi Beauty Essentials",
    role: "Frontend Developer",
    start: "Jun 2025",
    end: null,
    note: "Built mimibeautyessential.com, the brand's live store, and keeps it running.",
    tools: "React, Supabase, Zustand, Vercel",
  },
  {
    company: "Freelance",
    role: "Frontend Developer · Remote",
    start: "Jun 2025",
    end: null,
    note: "Turns client designs into fast, responsive websites for small businesses, schools and professionals.",
    tools: "React, Tailwind CSS, Supabase",
  },
];

export const education = [
  {
    school: "NIIT, Port Harcourt",
    course: "Advanced Certificate in Software Engineering",
    period: "Jan 2025 – Present",
  },
  {
    school: "NIIT, Port Harcourt",
    course: "Advanced Certificate in Cyber Security & Ethical Hacking",
    period: "Feb 2025 – Mar 2026",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    group: "Backend & data",
    items: ["Supabase", "PostgreSQL", "MySQL", "Node.js & Express", "Java Servlets", "Paystack"],
  },
  {
    group: "Workflow",
    items: ["Git & GitHub", "Vercel", "Figma", "Zustand", "Vitest", "Bash"],
  },
];
