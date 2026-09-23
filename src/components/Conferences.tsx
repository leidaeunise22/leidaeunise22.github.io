import PageHeader from "@/components/PageHeader";
import AnimatedCard from "@/components/AnimatedCard";
import CardMedia from "@/components/CardMedia";
import { MicIcon } from "@/components/icons";
import { conferences } from "@/data/conferences";

export default function Conferences() {
  return (
    <PageHeader index={6} title="Conferences" icon={<MicIcon className="h-full w-full" />}>
      <ul className="conference-grid">
        {conferences.map((conf, index) => (
          <AnimatedCard key={`${conf.name}-${conf.date}`} index={index}>
            <p className="mono conference-location">↗ {conf.location}</p>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display font-semibold text-ink">{conf.name}</h3>
              <span className="text-sm text-ink/55">{conf.date}</span>
            </div>
            <p className="mt-1 text-sm text-ink/70">
              {conf.role} · {conf.location}
            </p>
            {conf.description ? <p className="mt-2 text-sm text-ink/70">{conf.description}</p> : null}
            <CardMedia
              images={conf.images}
              linkedinUrl={conf.linkedinUrl}
              title={conf.name}
              date={conf.date}
            />
          </AnimatedCard>
        ))}
      </ul>
    </PageHeader>
  );
}
