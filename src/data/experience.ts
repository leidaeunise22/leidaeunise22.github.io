// Jobs, internships, and notable projects.

import type { SupportingMedia } from "./media";

export type ExperienceEntry = {
  title: string;
  organization: string;
  location: string;
  dateRange: string;
  bullets: string[];
  // Optional live links shown as buttons. Leave `href` empty to hide one until it's ready.
  links?: Array<{ label: string; href: string }>;
} & SupportingMedia;

export const experience: ExperienceEntry[] = [
  {
    title: "Software Engineer Intern",
    organization: "Lockheed Martin",
    location: "Remote",
    dateRange: "May 2026 – Present",
    bullets: [
      "Architecting an autonomous AI incident triage agent for smart manufacturing operations across 20+ factory sites, using Python and a ReAct (Reason-Act-Observe) loop with OpenAI-style function calling to diagnose equipment failures and reduce manual troubleshooting time.",
      "Building a Retrieval-Augmented Generation (RAG) pipeline with ChromaDB and custom embeddings to semantically search operational documentation, plus a log analysis tool that filters logs by asset ID to surface root-cause evidence.",
      "Migrating the agent to LangGraph, architecting the core LLM node and conditional routing logic to direct execution between tool calls and deterministic actions, with a safety guard preventing infinite tool-calling loops in production.",
      "Automating ticket lifecycle management and engineer notifications with ServiceNow-style incident records, and authoring a 12-test unit suite validating log filtering, ticket updates, and notification integrity.",
    ],
    images: [{ src: "/images/lockheed.jpg", alt: "Lockheed Martin company display" }],
  },
  {
    title: "Machine Learning Research Intern",
    organization: "Brookhaven National Laboratory",
    location: "Yaphank, NY",
    dateRange: "Jun 2025 – Aug 2025",
    bullets: [
      "Trained an implicit neural representation (INR) model on 4D fMRI imaging data to reconstruct full brain volumes over time.",
      "Implemented PyTorch Dataset and DataLoader classes to stream large-scale 4D spatiotemporal data from .nii.gz (NIFTI) files.",
      "Designed the initial GitHub repository structure and version control workflow to support collaborative machine learning research.",
      "Conducted literature reviews to build foundational knowledge of data-driven modeling, multimodal datasets, and irregular time series.",
      "Presented research progress in a lab-wide symposium; authored an abstract aligning project objectives with DOE mission priorities.",
    ],
    images: [
      { src: "/images/bnl.jpg", alt: "Aleida at the Brookhaven National Laboratory entrance sign" },
      { src: "/images/bnlwinter.jpg", alt: "Accelerator control room at Brookhaven National Laboratory" },
      { src: "/images/bnlwinter2.jpg", alt: "Particle accelerator facility at Brookhaven National Laboratory" },
      { src: "/images/bnlwinter3.jpg", alt: "Research equipment at Brookhaven National Laboratory" },
    ],
  },
  {
    title: "Google Tech Exchange Program",
    organization: "Google",
    location: "Remote",
    dateRange: "Jan 2024 – May 2024",
    bullets: [
      "Selected in a group of 250 students out of 1,500 nationwide for a semester-long program focused on underrepresented computer science talent.",
      "Completed rigorous coursework in Data Structures & Algorithms and Software Development taught by Google engineers.",
      "Participated in weekly technical interview prep and mock interviews with Google software engineers, receiving feedback and coaching.",
      "Built Schedule Sphere, a full-stack scheduling app using Python, the Google Gemini API, and user input; led development of the business page to generate optimized work schedules.",
    ],
  },
];

export const projects: ExperienceEntry[] = [
  {
    title: "Desert Rose Coffee App",
    organization: "Next.js, TypeScript, Firebase",
    location: "El Paso, TX",
    dateRange: "",
    bullets: [
      "Built an operations app for the coffee shop where I work part-time, the job that got me through college.",
      "Helps baristas and admins handle daily checklists, inventory, drink recipes, and training guides in one place.",
      "Currently implementing customer-facing ordering integrated with the shop's POS system API.",
    ],
    links: [{ label: "View app", href: "" }],
  },
  {
    title: "Girls Who Code UTEP Website",
    organization: "HTML, CSS, JavaScript, Firebase",
    location: "El Paso, TX",
    dateRange: "",
    bullets: ["Established the chapter's first website to share events, resources, and ways to get involved."],
    links: [{ label: "Visit site", href: "https://leidaeunise22.github.io/GWC_Website/" }],
  },
  {
    title: "Reddtatstoo & Reddsairbrush Portfolio",
    organization: "React, TypeScript, Vite",
    location: "El Paso, TX",
    dateRange: "",
    bullets: ["Designed and built a portfolio for my dad to showcase his amazing airbrush and tattoo work."],
    links: [{ label: "Visit site", href: "https://leidaeunise22.github.io/reddsairbrush/" }],
  },
  {
    title: "SHPE/MAES Website Redesign",
    organization: "Web",
    location: "El Paso, TX",
    dateRange: "",
    bullets: ["Redesigned the chapter website to modernize its look and make information easier to find."],
    links: [{ label: "Visit site", href: "" }],
  },
  {
    title: "UTEP SHPE/MAES Mobile App",
    organization: "React Native, TypeScript",
    location: "El Paso, TX",
    dateRange: "",
    bullets: [
      "Lead development of a React Native (Expo) mobile app for a 100+ member engineering organization.",
      "Manage and mentor a team of student developers, conduct code reviews, and coordinate releases via GitHub.",
      "Manage GitHub workflows including branching, pull requests, and code reviews for a team of student developers.",
    ],
    images: [{ src: "/images/shpeapp.jpg", alt: "SHPE MAES app listing on the App Store" }],
  },
];
