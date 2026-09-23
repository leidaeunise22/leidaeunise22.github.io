import PageHeader from "@/components/PageHeader";
import AnimatedCard from "@/components/AnimatedCard";
import CardMedia from "@/components/CardMedia";
import WashiTape from "@/components/WashiTape";
import { CompassIcon } from "@/components/icons";
import { leadership } from "@/data/leadership";
import { awards } from "@/data/awards";

// Pinned above the timelines; content lives in the Awards data so the two pages stay in sync.
const pinnedAward = awards.find((award) => award.title === "Leaders of Mines");

export default function Leadership() {
  return (
    <PageHeader index={4} title="Student Leadership" icon={<CompassIcon className="h-full w-full" />}>
      <ul className="space-y-6">
        {pinnedAward ? (
          <AnimatedCard index={0}>
            <WashiTape tone="gold" rotate={-3} className="-top-3 left-1/2 -translate-x-1/2" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="rounded-full bg-rose-deep px-2 py-0.5 text-xs font-semibold text-cream">
                Leadership Award
              </span>
              <span className="text-sm text-ink/55">{pinnedAward.date}</span>
            </div>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink">
              {pinnedAward.title} · {pinnedAward.issuer}
            </h3>
            {pinnedAward.description ? (
              <p className="mt-1 text-sm text-ink/70">{pinnedAward.description}</p>
            ) : null}
            <CardMedia
              images={pinnedAward.images}
              linkedinUrl={pinnedAward.linkedinUrl}
              title={pinnedAward.title}
              date={pinnedAward.date}
            />
          </AnimatedCard>
        ) : null}
        {leadership.map((role, index) => {
          const current = role.milestones[0];
          return (
            <AnimatedCard key={role.organization} index={index + 1}>
              <h3 className="font-display text-lg font-semibold text-ink">{role.organization}</h3>

              <ol className="mt-4 space-y-5 border-l-2 border-rose/60 pl-6">
                {role.milestones.map((milestone, step) => {
                  const isCurrent = step === 0;
                  return (
                    <li key={milestone.title} className="relative">
                      <span
                        aria-hidden="true"
                        className={`absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-cream ${
                          isCurrent ? "bg-rose-deep" : "bg-rose"
                        }`}
                      />
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h4 className="font-display font-semibold text-ink">{milestone.title}</h4>
                        {milestone.tag ? (
                          <span className="rounded-full bg-rose-deep px-2 py-0.5 text-xs font-semibold text-cream">
                            {milestone.tag}
                          </span>
                        ) : null}
                        {milestone.date ? (
                          <span className="text-sm text-ink/55">{milestone.date}</span>
                        ) : null}
                      </div>
                      {milestone.summary ? (
                        <p className="mt-1 text-sm text-ink/70">{milestone.summary}</p>
                      ) : null}
                      {milestone.bullets ? (
                        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink/70">
                          {milestone.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ol>

              <CardMedia
                images={role.images}
                linkedinUrl={role.linkedinUrl}
                title={`${current.title} · ${role.organization}`}
                date={current.date}
              />
            </AnimatedCard>
          );
        })}
      </ul>
    </PageHeader>
  );
}
