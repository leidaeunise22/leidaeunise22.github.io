import PageHeader from "@/components/PageHeader";
import AnimatedCard from "@/components/AnimatedCard";
import CardMedia from "@/components/CardMedia";
import { TrophyIcon } from "@/components/icons";
import { awards } from "@/data/awards";

export default function Awards() {
  return (
    <PageHeader index={5} title="Awards & Scholarships" icon={<TrophyIcon className="h-full w-full" />}>
      <ul className="space-y-6">
        {awards.map((award, index) => (
          <AnimatedCard key={`${award.title}-${award.issuer}`} index={index}>
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
