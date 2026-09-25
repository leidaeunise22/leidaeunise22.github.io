import Link from "next/link";
import PhotoSlot from "./PhotoSlot";

export default function ExploreGrid() {
  return (
    <>
      <section id="selected-work" className="selected-work page-shell">
        <div className="section-top"><div><p className="mono section-kicker">01 / IDEAS INTO SOMETHING REAL</p><h2>Code with <em>context.</em></h2></div><Link className="text-link" href="/experience">All experience & projects ↗</Link></div>
        <div className="work-grid">
          <Link href="/experience#lockheed-martin" className="work-feature work-ai"><div className="project-art ai-art" aria-hidden="true"><span className="mono art-label">AGENT / REASONING LOOP</span><div className="agent-orbit"><span>observe</span><span>reason</span><span>act</span><div className="agent-center">ai<span>↗</span></div></div><span className="mono art-bottom">INPUT → REASON → TOOL CALL → RESOLVE</span></div><div className="project-copy"><span className="mono">LOCKHEED MARTIN / SOFTWARE ENGINEERING</span><h3>Teaching agents to troubleshoot.<span>↗</span></h3><p>Autonomous incident triage for smart manufacturing, powered by retrieval and a reason–act–observe loop.</p><div className="project-tags">Python · LangGraph · RAG</div></div></Link>
          <Link href="/experience#brookhaven" className="work-feature work-bnl">
            <div className="project-art bnl-art" aria-hidden="true">
              <span className="mono art-label">BROOKHAVEN / NEURAL REPRESENTATIONS</span>
              <div className="brain-slices">
                {[0, 1, 2, 3].map(slice => (
                  <svg key={slice} viewBox="0 0 140 170" className="brain-slice">
                    <path d="M68 18C45 7 22 27 22 47C4 57 7 84 19 96C10 117 27 141 45 140C49 159 63 158 68 148ZM74 18C97 7 120 27 120 47C138 57 135 84 123 96C132 117 115 141 97 140C93 159 79 158 74 148Z" />
                    <path d="M48 32Q28 45 44 60T38 94Q27 117 50 121M56 70Q39 83 55 100M94 32Q114 45 98 60T104 94Q115 117 92 121M86 70Q103 83 87 100" />
                  </svg>
                ))}
              </div>
              <span className="mono art-bottom">SPACE × TIME / 4D fMRI</span>
            </div>
            <div className="project-copy">
              <span className="mono">BROOKHAVEN NATIONAL LAB / ML RESEARCH</span>
              <h3>Reconstructing the brain.<span>↗</span></h3>
              <p>Training implicit neural representations on 4D fMRI data to reconstruct brain volumes over time. A summer spent turning complex imaging data into a clearer picture.</p>
              <div className="project-tags">Python · PyTorch · Implicit neural representations</div>
            </div>
          </Link>
          <Link href="/experience#desert-rose" className="work-feature work-coffee"><div className="project-art coffee-art" aria-hidden="true"><span className="mono art-label">FROM BEHIND THE COUNTER</span><span className="coffee-wordmark">desert<br/><em>rose.</em></span><span className="coffee-mark">✳</span><span className="mono art-bottom">GOOD COFFEE. BETTER SYSTEMS.</span></div><div className="project-copy"><span className="mono">DESERT ROSE / A PERSONAL PROJECT</span><h3>From barista to builder.<span>↗</span></h3><p>Checklists, inventory, and recipes in one app, built for the coffee shop that got me through college.</p><div className="project-tags">Next.js · TypeScript · Firebase</div></div></Link>
        </div>
      </section>
      <section className="human-section page-shell"><div className="human-photo"><PhotoSlot src="/images/gwc.jpeg" alt="Aleida with the Girls Who Code community" sizes="(max-width: 700px) 90vw, 440px"/></div><div className="human-copy"><p className="mono section-kicker">02 / THERE’S A HUMAN IN HERE</p><h2>More than<br/>a <em>commit history.</em></h2><p>I lead student organizations, make a good cup of coffee, and believe the best part of tech is the people you get to build with.</p><Link className="text-link" href="/about">A little more about me ↗</Link></div></section>
    </>
  );
}
