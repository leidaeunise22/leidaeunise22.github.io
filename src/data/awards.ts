// Awards, honors, and scholarships you've received.

import type { SupportingMedia } from "./media";

export type Award = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
} & SupportingMedia;

export const awards: Award[] = [
  {
    title: "Dean's List",
    issuer: "The University of Texas at El Paso",
    date: "Fall 2022 · Spring 2023",
  },
  {
    title: "Leader of Mines",
    issuer: "The University of Texas at El Paso",
    date: "2023",
    images: [
      { src: "/images/leaderaward.jpg", alt: "Aleida holding her Leader of Mines award and flowers" },
      { src: "/images/leader3.jpg", alt: "Aleida smiling while holding her Leader of Mines award" },
    ],
  },
  {
    title: "Google Conference Scholar",
    issuer: "Google",
    date: "2024",
    description: "Awarded a scholarship to attend a Google-sponsored conference.",
  },
  {
    title: "Grace Hopper Kalama Scholar",
    issuer: "AnitaB.org — Grace Hopper Celebration",
    date: "2025",
    description: "Selected as a Kalama Scholar to attend the Grace Hopper Celebration.",
  },
];
