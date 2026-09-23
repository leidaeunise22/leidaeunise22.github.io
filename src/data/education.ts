import type { SupportingMedia } from "./media";

export type EducationEntry = {
  degree: string;
  school: string;
  location: string;
  dateRange: string;
  gpa?: string;
  coursework?: string[];
} & SupportingMedia;

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
    school: "The University of Texas at El Paso (UTEP)",
    location: "El Paso, TX",
    dateRange: "Graduation: Fall 2026",
    gpa: "3.25",
    coursework: [
      "Software Engineering I",
      "Agile Programming",
      "Data Structures & Algorithms",
      "Advanced Object-Oriented Programming",
    ],
  },
];
