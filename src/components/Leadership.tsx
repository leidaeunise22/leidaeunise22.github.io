import PageHeader from "@/components/PageHeader";
import AnimatedCard from "@/components/AnimatedCard";
import CardMedia from "@/components/CardMedia";
import { CompassIcon } from "@/components/icons";
import { leadership } from "@/data/leadership";

export default function Leadership() {
  return (
    <PageHeader index={4} title="Student Leadership" icon={<CompassIcon className="h-full w-full" />}>
      <ul className="space-y-6">
        {leadership.map((role, index) => (
          <AnimatedCard key={`${role.title}-${role.organization}`} index={index}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display font-semibold text-ink">
                {role.title} · {role.organization}
              </h3>
              <span className="text-sm text-ink/55">{role.dateRange}</span>
            </div>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink/70">
              {role.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <CardMedia
              images={role.images}
              linkedinUrl={role.linkedinUrl}
              title={`${role.title} · ${role.organization}`}
              date={role.dateRange}
            />
          </AnimatedCard>
        ))}
      </ul>
    </PageHeader>
  );
}
