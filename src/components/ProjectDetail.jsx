import FinovoSnap from "./../assets/images/Finovo-snap.webp";
import FinovoSnap2 from "./../assets/images/Finovo-snap2.webp";
import FinovoSnap3 from "./../assets/images/Finovo-snap3.webp";
import LedgerlySnap from "./../assets/images/Ledgerly-snap1.webp";
import LedgerlySnap2 from "./../assets/images/Ledgerly-snap2.webp";
import LedgerlySnap3 from "./../assets/images/Ledgerly-snap.webp";
import TorgistSnap from "./../assets/images/Torgist-snap.webp";
import TorgistSnap2 from "./../assets/images/Torgist-snap2.webp";
import TorgistSnap3 from "./../assets/images/Torgist-snap3.webp";

const projectDetails = [
  {
    name: "Finovo",
    description: "Finance is a Finance Landing page built with React and Tailwind CSS. It features a clean and modern design, responsive layout, and smooth animations. The project demonstrates frontend development skills, UI/UX design principles, and the ability to create visually appealing web interfaces.",
    tools: ["React", "Tailwind", "Git Pages", "Vite"],
    link: "https://manassehtodd.github.io/Finovo/",
    images: {
      main: FinovoSnap,
      side: FinovoSnap3,
      extra: FinovoSnap2
    }
  },
  {
    name: "Ledgerly",
    description: `Ledgerly is a polished demo finance dashboard web app built with React and Vite.
It helps users visualize and track their personal finances with a clean UI and responsive layout.
This is a demo project designed to showcase frontend engineering skills, data visualization, and user-centric design.`,
    tools: ["React","Tailwind CSS", "Recharts","React Router","JavaScript", "Context API + useState", "vercel", "Claude"],
    link: "https://zorvyn-ledgerly.vercel.app/",
    images: {
      main: LedgerlySnap,
      side: LedgerlySnap3,
      extra: LedgerlySnap2
    }
  },
  {
    name: "Torgist - Ghost Thread",
    description: `Anonymous emotional storytelling for Gen Z.
Torgist lets you drop your stories without your name attached. You write, the app slices your text into cards, reads the emotional energy behind each one, and gives it a visual vibe — color, gradient, aura. Then you share it or let it vanish.
No usernames. No followers. Just the story..`,
    tools: ["React + Vite", "Tailwind CSS", "Custom Hooks - useAutoSlicer, useAuraEngine", "ReactJS", "vercel"],
    link: "https://ghost-thread.vercel.app/",
    images: {
        main: TorgistSnap,
        side: TorgistSnap3,
    }
  }
];

export default projectDetails;