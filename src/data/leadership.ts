// Student leadership roles: clubs, orgs, government, teams you've led.

import type { SupportingMedia } from "./media";

// One step on an organization's timeline, most recent first.
export type LeadershipMilestone = {
  title: string;
  date?: string;
  tag?: string; // e.g. "Elected", "Promoted"
  summary?: string;
  bullets?: string[];
};

export type LeadershipRole = {
  organization: string;
  milestones: LeadershipMilestone[];
  highlights?: Array<{ label: string; title: string; description: string; tag?: string } & SupportingMedia>;
} & SupportingMedia;

export const leadership: LeadershipRole[] = [
  {
    organization: "Girls Who Code",
    highlights: [
      {
        label: "$300 raised",
        tag: "Fundraiser",
        title: "Ctrl + Alt + Caffeinate",
        images: [
          { src: "/images/gwccoffee1.jpeg", alt: "Girls Who Code team at the campus coffee fundraiser" },
          { src: "/images/gwccoffee2.jpeg", alt: "Aleida beside the Ctrl + Alt + Caffeinate fundraiser sign" },
        ],
        description:
          "I led our campus coffee fundraiser, where we made coffee and sold it to students, raising $300 for Girls Who Code. A chance to bring my barista experience into community leadership.",
      },
      {
        label: "$450 raised",
        tag: "Fundraiser",
        title: "Leading at Minerpalooza",
        images: [
          { src: "/images/gwcminer.jpeg", alt: "Girls Who Code fortune-telling fundraiser booth at Minerpalooza" },
          { src: "/images/gwcminer3.jpg", alt: "Girls Who Code members at their Minerpalooza booth" },
          { src: "/images/gwcminer4.jpg", alt: "The Minerpalooza fundraiser booth lit up in the evening" },
        ],
        description:
          "I led our Girls Who Code initiatives at Minerpalooza, raising $450 for the organization through our campus fundraising efforts.",
      },
      {
        label: "Community outreach",
        title: "Empowering young women",
        images: [
          { src: "/images/gwcwomen3.jpeg", alt: "Girls Who Code speaking at the El Paso Inc. Women of Impact event" },
          { src: "/images/gwcwomen2.jpeg", alt: "Girls Who Code presentation to young women" },
          { src: "/images/gwcwomen.jpeg", alt: "Attendees gathered at the young women’s outreach event" },
        ],
        description:
          "Girls Who Code spoke at an El Paso Inc. event to empower young women and encourage them to see themselves in tech. We brought our chapter’s commitment to representation beyond campus and into the community.",
      },
    ],
    milestones: [
      {
        title: "Vice President",
        date: "May 2025 – May 2026",
        tag: "Elected",
        bullets: [
          "Lead chapter operations and executive board to advance Girls Who Code's mission on campus.",
          "Facilitated 5+ coding and professional development sessions and workshops to enhance more than 15 members' technical/soft skills.",
          "Promote inclusivity and representation in tech through community-driven programming.",
          "Oversee event planning, outreach, and technical workshop execution for 20+ members.",
        ],
      },
      {
        title: "Project Manager",
        date: "Aug 2024",
        summary:
          "Led my first Girls Who Code workshop, planning and teaching a step-by-step introduction to building a website. I guided students through the process as they created their own sites, making web development approachable and giving members a hands-on way to explore what they could create with code.",
      },
    ],
    images: [
      { src: "/images/gwc.jpeg", alt: "Three Girls Who Code members in matching pink t-shirts" },
      { src: "/images/gwcgroup.jpg", alt: "Girls Who Code officer team group photo" },
      { src: "/images/gwcwomen.jpeg", alt: "Large Girls Who Code chapter meeting group photo" },
      { src: "/images/gwcaward25.jpeg", alt: "Girls Who Code officers holding UTEP Student Organization of the Year awards" },
      { src: "/images/gwcaward252.jpeg", alt: "Close-up of UTEP Student Engagement & Leadership Center awards" },
      { src: "/images/gwc5.jpg", alt: "Girls Who Code members running a Fortune Telling Booth fundraiser" },
      { src: "/images/gwcminer.jpeg", alt: "Girls Who Code members at the Fortune Telling Booth fundraiser" },
      { src: "/images/gwccoffee1.jpeg", alt: "Girls Who Code Ctrl+Alt+Caffeinate coffee fundraiser booth" },
      { src: "/images/gwccoffee2.jpeg", alt: "Aleida at the Girls Who Code coffee fundraiser booth" },
      { src: "/images/gwcgit.jpeg", alt: "Girls Who Code Git workflow workshop" },
      { src: "/images/gwcgit2.jpeg", alt: "Girls Who Code members at the Git workflow workshop" },
      { src: "/images/gwcml.jpg", alt: "Girls Who Code machine learning workshop presentation" },
      { src: "/images/app1.jpg", alt: "Girls Who Code app development workshop group photo" },
      { src: "/images/gwcworkshop1.jpg", alt: "Girls Who Code Study Hub project workshop" },
      { src: "/images/gwcphoto9.jpeg", alt: "Girls Who Code Study Hub project team with certificate of recognition" },
      { src: "/images/gwchallo.jpg", alt: "Girls Who Code Halloween chapter meeting" },
      { src: "/images/kids.jpg", alt: "Electronics kits set up for a Girls Who Code workshop" },
      { src: "/images/gwcwomen2.jpeg", alt: "Girls Who Code chapter members" },
      { src: "/images/gwcwomen3.jpeg", alt: "Girls Who Code chapter members" },
      { src: "/images/gwcminer3.jpg", alt: "Girls Who Code chapter event" },
      { src: "/images/gwcminer4.jpg", alt: "Girls Who Code chapter event" },
    ],
  },
  {
    organization: "SHPE/MAES",
    milestones: [
      {
        title: "Director of Technology",
        date: "Jul 2025 – May 2026",
        tag: "Promoted",
        bullets: [
          "Oversee two technical teams (website + mobile app), coordinating workflows and delegating tasks for a 100+ member chapter.",
          "Manage the GitHub repository, enabling collaboration across officers and maintaining reproducibility of code contributions.",
          "Direct and mentor the web committee, assigning tasks, reviewing progress, and ensuring quality control across all technical projects.",
          "Lead end-to-end mobile app development by designing and running hands-on workshops guiding members through planning, coding, and deployment.",
        ],
      },
      {
        title: "Webmaster Chair",
        summary:
          "Started on the officer board as Webmaster Chair. My initiatives and passion for the chapter's tech led to a promotion to lead mobile app development.",
      },
    ],
    images: [{ src: "/images/shpe.jpg", alt: "SHPE officer team group photo" }],
  },
];
