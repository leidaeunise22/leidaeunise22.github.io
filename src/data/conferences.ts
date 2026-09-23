// Conferences you've attended, presented at, or received scholarships to attend.

import type { SupportingMedia } from "./media";

export type ConferenceEntry = {
  name: string;
  role: "Attendee" | "Presenter" | "Scholar" | string;
  location: string;
  date: string;
  description?: string;
} & SupportingMedia;

export const conferences: ConferenceEntry[] = [
  // Most recent first.
  {
    name: "Great Minds in STEM (GMiS) Conference",
    role: "CAHSI Scholar",
    location: "Albuquerque, NM",
    date: "October 2026",
    description:
      "Awarded a CAHSI scholarship to attend my third Great Minds in STEM conference.",
  },
  {
    name: "TACC Symposium for Texas Researchers (TACCSTER)",
    role: "Scholar",
    location: "Austin, TX",
    date: "September 2026",
    description:
      "Awarded a scholarship to attend TACCSTER, the Texas Advanced Computing Center's annual symposium where researchers from across Texas share science powered by supercomputing, AI, and large-scale data.",
  },
  {
    name: "OSPOsium",
    role: "Scholar",
    location: "Austin, TX",
    date: "September 2026",
    description:
      "Awarded a scholarship to attend the inaugural UT System Open Source Program Office Symposium at TACC, bringing together scientists, engineers, and students who use open-source software to advance research, plus a student career day with technical interviews and résumé workshops.",
  },
  {
    name: "Grace Hopper Celebration",
    role: "Kalama Scholar",
    location: "Chicago, IL",
    date: "October 2025",
    description:
      "Selected as an AnitaB.org Kalama Scholar to attend the world's largest gathering of women and nonbinary technologists.",
    images: [
      { src: "/images/ghc1.jpg", alt: "Grace Hopper Celebration 2025 keynote stage" },
      { src: "/images/disney.jpg", alt: "Disney-sponsored evening event at the Grace Hopper Celebration" },
      { src: "/images/disney2.jpg", alt: "Aleida at the Disney-sponsored Grace Hopper Celebration event" },
    ],
  },
  {
    name: "Great Minds in STEM (GMiS) Conference",
    role: "CAHSI Scholar",
    location: "San Diego, CA",
    date: "October 2025",
    description:
      "Awarded a CAHSI scholarship to return to Great Minds in STEM and connect with industry engineers alongside fellow UTEP students.",
    images: [
      { src: "/images/gwcgmis.jpeg", alt: "Aleida with fellow UTEP students at the Great Minds in STEM conference" },
      { src: "/images/gwcgmis2.jpeg", alt: "Aleida at the Great Minds in STEM conference step-and-repeat" },
      { src: "/images/gwcgmis2-alt.jpg", alt: "Great Minds in STEM conference badge and lanyard" },
    ],
  },
  {
    name: "Brookhaven National Laboratory Lab-Wide Symposium",
    role: "Presenter",
    location: "Yaphank, NY",
    date: "Aug 2025",
    description:
      "Presented machine learning research progress and authored an abstract aligning project objectives with DOE mission priorities.",
    images: [
      { src: "/images/bnl3.jpg", alt: "Aleida presenting her research poster at the BNL Lab-Wide Symposium" },
      { src: "/images/poster.jpg", alt: "Research poster: Scalable Spatiotemporal Learning on High Fidelity Scientific Data" },
      { src: "/images/bnl-poster.png", alt: "Full research poster graphic from the BNL Lab-Wide Symposium" },
    ],
  },
  {
    name: "Great Minds in STEM (GMiS) Conference",
    role: "Google Conference Scholar",
    location: "Fort Worth, TX",
    date: "October 2024",
    description:
      "Awarded a Google Conference Scholarship to attend my first Great Minds in STEM conference.",
  },
];
