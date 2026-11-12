import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const timeFmt = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: profile.timeZone,
});

function useLocalTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(id);
  }, []);
  return timeFmt.format(now);
}

export default function Header() {
  const time = useLocalTime();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a href="#top" className="site-header__mark" aria-label="Manasseh Todd, back to top">
        MT<span aria-hidden="true">—</span>
      </a>
      <nav aria-label="Primary">
        <ul className="site-header__nav">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <p className="site-header__status">
        {profile.available && <span className="dot" aria-hidden="true" />}
        <span className="site-header__status-text">
          {profile.available ? "Available" : "Booked"} · Warri{" "}
        </span>
        <time aria-label={`Local time in Warri: ${time}`}>{time}</time>
      </p>
    </header>
  );
}
