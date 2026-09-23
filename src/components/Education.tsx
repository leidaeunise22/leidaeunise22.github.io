import PageHeader from "./PageHeader";
import CardMedia from "./CardMedia";
import { education } from "@/data/education";

export default function Education() {
  return <PageHeader index={2} title="Education">{education.map(entry => <section className="education-layout" key={entry.degree}>
    <div className="degree-panel"><span className="mono">THE UNIVERSITY OF TEXAS AT EL PASO</span><div className="degree-monogram" aria-hidden="true">CS<span>+ math</span></div><span className="mono">EL PASO, TX / FALL 2026</span></div>
    <div className="degree-copy"><p className="mono section-kicker">THE FOUNDATION</p><h2>{entry.degree}</h2><p>{entry.school}</p><div className="degree-meta"><span>{entry.dateRange}</span>{entry.gpa && <span>GPA / {entry.gpa}</span>}</div><h3 className="mono coursework-label">CURRENT TOOLKIT / SELECTED COURSEWORK</h3><ol className="coursework-list">{entry.coursework?.map((course,index)=><li key={course}><span className="mono">0{index+1}</span>{course}<span aria-hidden="true">↗</span></li>)}</ol><CardMedia images={entry.images} linkedinUrl={entry.linkedinUrl} title={entry.degree}/></div>
  </section>)}</PageHeader>;
}
