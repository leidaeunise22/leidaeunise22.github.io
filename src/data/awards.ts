// Awards, honors, and scholarships you've received.

import type { SupportingMedia } from "./media";

export type Award = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  pinned?: boolean; // shown first on the Awards page with a highlight
} & SupportingMedia;

export const awards: Award[] = [
  // Most recent first.
  {
    title: "TACCSTER & OSPOsium Scholarship",
    issuer: "The University of Texas at Austin",
    date: "September 2026",
    description:
      "Awarded a scholarship to attend TACCSTER and OSPOsium, research and open-source symposiums hosted at UT Austin's Texas Advanced Computing Center.",
  },
  {
    title: "Leaders of Mines",
    pinned: true,
    issuer: "The University of Texas at El Paso",
    date: "May 2026",
    description:
      "UTEP's oldest and most distinguished student leadership award, honoring juniors and seniors who show sustained, values-driven leadership and meaningful contributions to UTEP and the greater El Paso community. Selection rewards leadership beyond a title: initiative, collaboration, service, and mentorship.",
    images: [
      { src: "/images/leaderaward.jpg", alt: "Aleida holding her Leaders of Mines award and flowers" },
      { src: "/images/leader3.jpg", alt: "Aleida smiling while holding her Leaders of Mines award" },
    ],
  },
  {
    title: "CAHSI Conference Scholar",
    issuer: "Computing Alliance of Hispanic-Serving Institutions (CAHSI)",
    date: "2025 · 2026",
    description: "Awarded CAHSI scholarships to attend the Great Minds in STEM (GMiS) conference in 2025 and 2026.",
  },
  {
    title: "Grace Hopper Kalama Scholar",
    issuer: "AnitaB.org — Grace Hopper Celebration",
    date: "2025",
    description: "Selected as a Kalama Scholar to attend the Grace Hopper Celebration.",
  },
  {
    title: "Google Conference Scholar",
    issuer: "Google",
    date: "2024",
    description: "Awarded a scholarship by Google to attend the Great Minds in STEM (GMiS) conference in Fort Worth, TX.",
  },
  {
    title: "Dean's List",
    issuer: "The University of Texas at El Paso",
    date: "Fall 2022 · Spring 2023",
  },
];
