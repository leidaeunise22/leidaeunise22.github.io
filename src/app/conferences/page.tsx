import type { Metadata } from "next";
import Conferences from "@/components/Conferences";

export const metadata: Metadata = { title: "Conferences — Aleida Holguin" };

export default function ConferencesPage() {
  return <Conferences />;
}
