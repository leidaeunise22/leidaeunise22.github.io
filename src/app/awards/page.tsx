import type { Metadata } from "next";
import Awards from "@/components/Awards";

export const metadata: Metadata = { title: "Awards — Aleida Holguin" };

export default function AwardsPage() {
  return <Awards />;
}
