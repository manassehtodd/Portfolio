import { skills } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="section__head">
        <p className="section__label mono">(02)</p>
        <h2 id="about-title" className="section__title">
          About
        </h2>
      </div>

      <div className="about__grid">
        <figure className="about__portrait">
          <img
            src="/manasseh.webp"
            alt="Manasseh Todd, in glasses and a navy polo, in front of a slatted wood wall"
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mono">Warri, Delta State · WAT (UTC+1)</figcaption>
        </figure>

        <div className="about__copy">
          <p className="about__lead">
            I'm Manasseh, a full-stack developer who builds the whole thing, but still obsesses
            over the parts people touch: how fast a page appears, how a button feels and whether
            checkout works on a cheap Android phone.
          </p>
          <div className="about__body">
            <p>
              I started with landing pages in 2025. Today I build complete products, covering
              interface, database, sign-in, payments and admin tools, for businesses across Warri
              and Port Harcourt: live stores, school platforms and sites that clients run
              themselves. I work with React and TypeScript on the front, Supabase and Postgres
              behind it, Paystack and KoraPay for payments, and server-side Java. I'm also
              studying software engineering at NIIT.
            </p>
            <p>
              I like small teams, clear briefs and leaving code that the next person can read.
            </p>
          </div>

          <div className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skills__col">
                <h3 className="mono">{s.group}</h3>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
