import PageHeader from "./PageHeader";
import CardMedia from "./CardMedia";
import PhotoSlot from "./PhotoSlot";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section id="about-education" className="education-section" aria-labelledby="education-section-heading">
      <div className="education-section-title"><h2 id="education-section-heading">Education</h2><p>Where my curiosity takes shape.</p></div>
      {education.map(entry => (
        <article className="education-record" key={entry.degree}>
          <div className="education-school">
            <svg className="education-emblem" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth=".7" />
              <ellipse cx="50" cy="50" rx="43" ry="16" transform="rotate(-35 50 50)" stroke="currentColor" strokeWidth=".7" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
              <circle cx="25" cy="27" r="3" fill="currentColor" />
            </svg>
            <span className="education-school-name">UTEP</span>
            <p>{entry.school}</p>
          </div>
          <div className="education-details">
            <h3>{entry.degree}</h3>
            {entry.minor && <p className="education-minor">Minor in {entry.minor}</p>}
            <dl className="education-facts">
              <div><dt>Graduation</dt><dd>{entry.dateRange.replace(/^Graduation:\s*/, "")}</dd></div>
              <div><dt>Location</dt><dd>{entry.location}</dd></div>
              {entry.gpa && <div><dt>GPA</dt><dd>{entry.gpa}</dd></div>}
            </dl>
            <div className="education-extras">
            {entry.coursework?.some(course => course.trim()) && (
              <div className="education-coursework">
                <h4>Selected coursework</h4>
                <ul>{entry.coursework.filter(course => course.trim()).map(course => <li key={course}>{course}</li>)}</ul>
              </div>
            )}
            {entry.schoolPhoto && (
              <figure className="education-polaroid">
                <div className="education-school-photo"><PhotoSlot src={entry.schoolPhoto.src} alt={entry.schoolPhoto.alt} sizes="(max-width: 700px) 80vw, 320px" /></div>
                <figcaption>Great Minds in STEM</figcaption>
              </figure>
            )}
            </div>
            <CardMedia images={entry.images} linkedinUrl={entry.linkedinUrl} title={entry.degree}/>
          </div>
        </article>
      ))}
    </section>
  );
}

export default function Education() {
  return (
    <PageHeader index={2} title="Education">
      <EducationSection />
    </PageHeader>
  );
}
