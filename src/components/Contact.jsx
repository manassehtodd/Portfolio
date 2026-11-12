import { useState } from "react";
import { profile, socials } from "../data/profile";
import { ArrowUpRight } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <footer id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="section__head">
        <p className="section__label mono">(04)</p>
        <h2 id="contact-title" className="section__title">
          Have a project in mind?
        </h2>
      </div>

      <a className="contact__email" href={`mailto:${profile.email}`}>
        {profile.email.split("@")[0]}
        <wbr />@{profile.email.split("@")[1]}
      </a>

      <div className="contact__row">
        <button type="button" className="btn" onClick={copy}>
          {copied ? "Copied to clipboard" : "Copy email"}
        </button>
        <span className="mono contact__live" aria-live="polite">
          {copied ? "Email address copied." : ""}
        </span>
        <p className="contact__reply mono">I usually reply within a day.</p>
      </div>

      <ul className="socials">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noopener noreferrer">
              <span>{s.label}</span>
              <ArrowUpRight />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="colophon mono">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="hide-sm">Designed & built by me · React + Vite · Set in Archivo</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
