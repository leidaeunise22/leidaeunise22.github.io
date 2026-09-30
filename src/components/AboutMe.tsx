import Link from "next/link";
import PageHeader from "./PageHeader";
import PhotoSlot from "./PhotoSlot";
import CardMedia from "./CardMedia";
import { aboutPhotos } from "@/data/journal";
import { about } from "@/data/about";
import { EducationSection } from "./Education";
import AboutInterests from "./AboutInterests";

export default function AboutMe() {
  return (
    <PageHeader index={1} title="About Me">
      <EducationSection />
      <section className="about-story" aria-labelledby="about-story-heading">
        <div className="about-portrait"><PhotoSlot src="/images/gmisheadshot.jpg" alt="Aleida Holguin at Great Minds in STEM" sizes="(max-width: 700px) 90vw, 430px"/></div>
        <div className="about-story-copy"><p className="about-greeting">Hello, I’m Aleida.</p><h2 id="about-story-heading">A life beyond<br/>the laptop.</h2><p>{about.bio}</p><Link href="/experience#projects" className="text-link">See what I’m building ↗</Link></div>
      </section>
      <AboutInterests />
      <section className="journal-section">
        <div className="detail-section-title"><h2>Life in good company.</h2><p className="about-journal-intro">A few moments from my camera roll.</p></div>
        <CardMedia images={aboutPhotos} title="Life in good company" showCaptions />
      </section>
    </PageHeader>
  );
}
