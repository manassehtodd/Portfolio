import { profile } from "../data/profile";
import projects from "../data/projects.json";
import { ArrowUpRight, ArrowDown } from "./Icons";

const liveCount = projects.filter((p) => p.link).length;

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__meta mono">
        <span>Portfolio / 2026 edition</span>
        <span className="hide-sm">Frontend developer</span>
        <span>{profile.location}</span>
      </div>

      <h1 id="hero-title" className="hero__name">
        <span className="line">
          <span>Manasseh</span>
        </span>
        <span className="line">
          <span>
            Todd<em aria-hidden="true">.</em>
          </span>
        </span>
      </h1>

      <div className="hero__grid">
        <p className="hero__lede">
          I build fast, considered websites for brands, schools and small businesses, from the
          first layout to the checkout button.
        </p>

        <div className="hero__side">
          <dl className="hero__facts">
            <div>
              <dt className="mono">Shipped</dt>
              <dd>{liveCount} live sites</dd>
            </div>
            <div>
              <dt className="mono">Building since</dt>
              <dd>2025</dd>
            </div>
            <div>
              <dt className="mono">Stack</dt>
              <dd>React · TypeScript · Supabase</dd>
            </div>
          </dl>
          <div className="hero__actions">
            <a className="btn btn--solid" href={`mailto:${profile.email}`}>
              Start a project
            </a>
            <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer">
              Résumé <ArrowUpRight />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <a href="#work" className="hero__cue mono">
        <ArrowDown /> Index of work
      </a>
    </section>
  );
}
