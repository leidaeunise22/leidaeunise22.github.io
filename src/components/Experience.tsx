import PageHeader from "@/components/PageHeader";
import AnimatedCard from "@/components/AnimatedCard";
import CardMedia from "@/components/CardMedia";
import { BriefcaseIcon } from "@/components/icons";
import { experience, projects, type ExperienceEntry } from "@/data/experience";

function EntryCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const colorClass = entry.organization === "Lockheed Martin"
    ? "entry-ai"
    : entry.organization === "Brookhaven National Laboratory"
      ? "entry-research"
      : entry.title === "Desert Rose Coffee App"
        ? "entry-coffee"
        : "";

  return (
    <AnimatedCard index={index} className={colorClass}>
      <p className="mono entry-organization">{entry.organization}</p>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display font-semibold text-ink">
          {entry.title}
        </h3>
        {entry.dateRange ? <span className="text-sm text-ink/55">{entry.dateRange}</span> : null}
      </div>
      <p className="mt-1 text-sm text-ink/55">{entry.location}</p>
      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink/70">
        {entry.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      {entry.links?.some((link) => link.href) ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.links
            .filter((link) => link.href)
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-cream bg-rose/15 px-3 py-1 text-xs font-semibold text-rose-deep shadow-sticker transition-colors hover:bg-rose/25"
              >
                {link.label} ↗
              </a>
            ))}
        </div>
      ) : null}
      <CardMedia
        images={entry.images}
        linkedinUrl={entry.linkedinUrl}
        title={`${entry.title} · ${entry.organization}`}
        date={entry.dateRange}
      />
    </AnimatedCard>
  );
}

export default function Experience() {
  return (
    <PageHeader index={3} title="Experience & Projects" icon={<BriefcaseIcon className="h-full w-full" />}>
      <ul className="entry-list">
        {experience.map((entry, index) => (
          <EntryCard key={`${entry.title}-${entry.organization}`} entry={entry} index={index} />
        ))}
      </ul>

      <div className="detail-section-title"><p className="mono section-kicker">BUILT WITH PERSONAL CONTEXT</p><h2>Outside the <em>job description.</em></h2></div>
      <ul className="entry-list">
        {projects.map((entry, index) => (
          <EntryCard
            key={`${entry.title}-${entry.organization}`}
            entry={entry}
            index={experience.length + index}
          />
        ))}
      </ul>
    </PageHeader>
  );
}
