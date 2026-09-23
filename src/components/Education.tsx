import PageHeader from "@/components/PageHeader";
import AnimatedCard from "@/components/AnimatedCard";
import CardMedia from "@/components/CardMedia";
import StickerBadge from "@/components/StickerBadge";
import { EducationIcon } from "@/components/icons";
import { education } from "@/data/education";

export default function Education() {
  return (
    <PageHeader index={2} title="Education" icon={<EducationIcon className="h-full w-full" />}>
      <ul className="space-y-6">
        {education.map((entry, index) => (
          <AnimatedCard key={`${entry.degree}-${entry.school}`} index={index}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display font-semibold text-ink">{entry.degree}</h3>
              <span className="text-sm text-ink/55">{entry.dateRange}</span>
            </div>
            <p className="mt-1 text-sm text-ink/70">
              {entry.school} · {entry.location}
            </p>
            {entry.gpa ? <p className="mt-2 text-sm text-ink/70">GPA: {entry.gpa}</p> : null}
            {entry.coursework?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.coursework.map((course, i) => (
                  <StickerBadge key={course} tone="sage" rotate={i % 2 === 0 ? -1.5 : 1.5}>
                    {course}
                  </StickerBadge>
                ))}
              </div>
            ) : null}
            <CardMedia
              images={entry.images}
              linkedinUrl={entry.linkedinUrl}
              title={entry.degree}
              date={entry.dateRange}
            />
          </AnimatedCard>
        ))}
      </ul>
    </PageHeader>
  );
}
