import type { ReactNode } from "react";
import Link from "next/link";

const chapters = [
  { href: "/about", label: "About", headline: "The person", accent: "behind the code.", description: "An engineer’s curiosity. A creative’s heart. A few things that make me, me.", note: "A LIFE BEYOND THE EDITOR", symbol: ":)" },
  { href: "/education", label: "Education", headline: "Always a", accent: "work in progress.", description: "Studying computer science, asking better questions, and connecting theory to the things I build.", note: "LEARNING IS AN ITERATIVE PROCESS", symbol: "{}" },
  { href: "/experience", label: "Experience", headline: "Curiosity meets", accent: "the real world.", description: "AI agents, scientific research, and software for my community. Here’s what I’ve been working on.", note: "IDEAS → EXPERIMENTS → IMPACT", symbol: "</>" },
  { href: "/leadership", label: "Leadership", headline: "Building things.", accent: "Bringing people.", description: "Creating spaces where students can learn, lead, and see themselves in tech.", note: "BETTER TOGETHER, BY DESIGN", symbol: "✳" },
  { href: "/awards", label: "Awards", headline: "Small steps.", accent: "Meaningful milestones.", description: "Recognition for the work, the community, and the curiosity that keeps me moving forward.", note: "A FEW MOMENTS TO REMEMBER", symbol: "✧" },
  { href: "/conferences", label: "Conferences", headline: "New places.", accent: "Bigger perspectives.", description: "Research shared, conversations started, and a growing community beyond my campus.", note: "FIELD NOTES FROM ALONG THE WAY", symbol: "↗" },
];

type PageHeaderProps = { index: number; title: string; icon?: ReactNode; children: ReactNode };

export default function PageHeader({ index, title, children }: PageHeaderProps) {
  const chapter = chapters[index - 1];
  const next = chapters[index % chapters.length];
  return (
    <div className={`detail-page detail-${chapter.label.toLowerCase()} page-shell`}>
      <header className="detail-heading">
        <div className="detail-breadcrumb mono"><Link href="/">HOME</Link><span>/ {String(index).padStart(2, "0")} — {title.toUpperCase()}</span></div>
        <div className="detail-title-row">
          <div><h1>{chapter.headline}<br/><em>{chapter.accent}</em></h1><p>{chapter.description}</p></div>
          <span className="detail-symbol" aria-hidden="true">{chapter.symbol}</span>
        </div>
        <div className="detail-heading-bottom mono"><span>{chapter.note}</span><span>ALEIDA HOLGUIN / {String(index).padStart(2, "0")}</span></div>
      </header>
      {children}
      <Link href={next.href} className="next-chapter"><span className="mono">KEEP EXPLORING / NEXT CHAPTER</span><span>{next.label}<span aria-hidden="true">↗</span></span></Link>
    </div>
  );
}
