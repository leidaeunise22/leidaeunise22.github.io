import PageHeader from "@/components/PageHeader";
import AnimatedCard from "@/components/AnimatedCard";
import CardMedia from "@/components/CardMedia";
import { BriefcaseIcon } from "@/components/icons";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <PageHeader index={3} title="Experience & Projects" icon={<BriefcaseIcon className="h-full w-full" />}>
      <ul className="space-y-6">
        {experience.map((entry, index) => (
          <AnimatedCard key={`${entry.title}-${entry.organization}`} index={index}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display font-semibold text-ink">
                {entry.title} · {entry.organization}
              </h3>
              <span className="text-sm text-ink/55">{entry.dateRange}</span>
            </div>
            <p className="mt-1 text-sm text-ink/55">{entry.location}</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink/70">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <CardMedia
              images={entry.images}
              linkedinUrl={entry.linkedinUrl}
              title={`${entry.title} · ${entry.organization}`}
              date={entry.dateRange}
            />
          </AnimatedCard>
        ))}
      </ul>
    </PageHeader>
  );
}
