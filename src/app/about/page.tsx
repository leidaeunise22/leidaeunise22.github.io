import type { Metadata } from "next";
import AboutMe from "@/components/AboutMe";

export const metadata: Metadata = { title: "About — Aleida Holguin" };

export default function AboutPage() {
  return <AboutMe />;
}
