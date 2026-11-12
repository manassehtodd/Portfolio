import { experience, education } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="section__head">
        <p className="section__label mono">(03)</p>
        <h2 id="experience-title" className="section__title">
          Experience
        </h2>
      </div>

      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline__row">
            <p className="timeline__period mono">
              {job.start} – {job.end ?? <span className="now">Present</span>}
            </p>
            <div className="timeline__main">
              <h3>
                {job.role} <span className="at">at</span> {job.company}
              </h3>
              <p>{job.note}</p>
            </div>
            <p className="timeline__tools mono">{job.tools}</p>
          </li>
        ))}
      </ol>

      <h3 className="subhead mono">Education</h3>
      <ol className="timeline timeline--compact">
        {education.map((e) => (
          <li key={e.course} className="timeline__row">
            <p className="timeline__period mono">{e.period}</p>
            <div className="timeline__main">
              <h3>{e.course}</h3>
              <p>{e.school}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
