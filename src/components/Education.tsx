import PageHeader from "./PageHeader";
import CardMedia from "./CardMedia";
import { education } from "@/data/education";

export function EducationSection() {
  return <section id="about-education" aria-labelledby="education-section-heading">
    <div className="detail-section-title"><p className="mono section-kicker">THE FOUNDATION</p><h2 id="education-section-heading">Education</h2></div>
    {education.map(entry => <section className="education-layout" key={entry.degree}>
    <div className="degree-panel"><span className="mono">THE UNIVERSITY OF TEXAS AT EL PASO</span><div className="degree-monogram" aria-hidden="true">CS<span>+ math</span></div><span className="mono">EL PASO, TX / FALL 2026</span></div>
    <div className="degree-copy"><p className="mono section-kicker">THE FOUNDATION</p><h2>{entry.degree}</h2><p>{entry.school}</p><div className="degree-meta"><span>{entry.dateRange}</span>{entry.gpa && <span>GPA / {entry.gpa}</span>}</div><CardMedia images={entry.images} linkedinUrl={entry.linkedinUrl} title={entry.degree}/></div>
  </section>)}
  </section>;
}

export default function Education() {
  return (
    <PageHeader index={2} title="Education">
      <EducationSection />
    </PageHeader>
  );
}
