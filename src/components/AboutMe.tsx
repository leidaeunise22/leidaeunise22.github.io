import Link from "next/link";
import PageHeader from "./PageHeader";
import PhotoSlot from "./PhotoSlot";
import { about } from "@/data/about";
import { profile } from "@/data/profile";

const details = ["Good coffee is worth the extra minute.", "My favorite walking companions.", "The soundtrack I grew up with.", "Always curious about somewhere new.", "A different kind of practice.", "One stitch at a time."];

export default function AboutMe() {
  return (
    <PageHeader index={1} title="About Me">
      <section className="about-story">
        <div className="about-portrait"><PhotoSlot src={profile.headshotUrl} alt="Aleida Holguin" sizes="(max-width: 700px) 90vw, 430px"/><span className="mono">EL PASO, TEXAS / HOME BASE</span></div>
        <div className="about-story-copy"><p className="mono section-kicker">HI, I’M ALEIDA.</p><h2>Many interests.<br/><em>One curious person.</em></h2><p>{about.bio}</p><Link href="/experience" className="text-link">See what I’m building ↗</Link></div>
      </section>
      <section className="offscreen-section"><div className="detail-section-title"><p className="mono section-kicker">WHEN THE LAPTOP CLOSES</p><h2>My other <em>tabs.</em></h2></div><div className="personality-grid">{about.facts.map((fact, index) => <article key={fact}><span className="mono">0{index + 1}</span><h3>{fact}</h3><p>{details[index]}</p></article>)}</div></section>
    </PageHeader>
  );
}
