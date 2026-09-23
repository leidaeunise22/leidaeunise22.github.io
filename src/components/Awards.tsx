import PageHeader from "@/components/PageHeader";
import AnimatedCard from "@/components/AnimatedCard";
import CardMedia from "@/components/CardMedia";
import WashiTape from "@/components/WashiTape";
import { TrophyIcon } from "@/components/icons";
import { awards } from "@/data/awards";

// Pinned awards first; everything else keeps its data order.
const sortedAwards = [...awards.filter((award) => award.pinned), ...awards.filter((award) => !award.pinned)];

export default function Awards() {
  return (
    <PageHeader index={5} title="Awards & Scholarships" icon={<TrophyIcon className="h-full w-full" />}>
      <ul className="space-y-6">
        {sortedAwards.map((award, index) => (
          <AnimatedCard key={`${award.title}-${award.issuer}`} index={index}>
            {award.pinned ? (
              <>
                <WashiTape tone="gold" rotate={-3} className="-top-3 left-1/2 -translate-x-1/2" />
                <span className="mb-2 inline-block rounded-full bg-rose-deep px-2 py-0.5 text-xs font-semibold text-cream">
                  Leadership Award
                </span>
              </>
            ) : null}
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display font-semibold text-ink">{award.title}</h3>
              <span className="text-sm text-ink/55">{award.date}</span>
            </div>
            <p className="mt-1 text-sm text-ink/70">{award.issuer}</p>
            {award.description ? <p className="mt-2 text-sm text-ink/70">{award.description}</p> : null}
            <CardMedia
              images={award.images}
              linkedinUrl={award.linkedinUrl}
              title={award.title}
              date={award.date}
            />
          </AnimatedCard>
        ))}
      </ul>
    </PageHeader>
  );
}
