import FinovoSnap from "./../assets/images/Finovo-snap.png";
import FinovoSnap2 from "./../assets/images/Finovo-snap2.jpg";
import FinovoSnap3 from "./../assets/images/Finovo-snap3.jpg";
import LedgerlySnap from "./../assets/images/Ledgerly-snap1.png";
import LedgerlySnap2 from "./../assets/images/Ledgerly-snap2.png";
import LedgerlySnap3 from "./../assets/images/Ledgerly-snap.png";
import TorgistSnap from "./../assets/images/Torgist-snap.png";
import TorgistSnap2 from "./../assets/images/Torgist-snap2.png";
import TorgistSnap3 from "./../assets/images/Torgist-snap3.png";

const projectDetails = [
  {
    name: "Finovo",
    description: "Finance tracking app...",
    tools: ["React", "Tailwind", "Firebase"],
    link: "https://github.com/...",
    images: {
      main: FinovoSnap,
      side: FinovoSnap3,
      extra: FinovoSnap2
    }
  },
  {
    name: "Ledgerly",
    description: "Expense dashboard...",
    tools: ["React", "Context API"],
    link: "https://github.com/...",
    images: {
      main: LedgerlySnap,
      side: LedgerlySnap3,
      extra: LedgerlySnap2
    }
  },
  {
    name: "Torgist - Ghost Thread",
    description: "A Ghost Thread app...",
    tools: ["React", "Tailwind", "Firebase"],
    link: "https://github.com/...",
    images: {
        main: TorgistSnap,
        side: TorgistSnap3,
    }
  }
];

export default projectDetails;