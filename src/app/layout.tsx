import type { Metadata } from "next";
import { Fraunces, Work_Sans, Caveat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LightboxProvider from "@/components/Lightbox";
import "./globals.css";

// Variable serif with an optical-size axis — reads clearly at heading sizes
// while staying warm and a little unconventional, unlike a default text serif.
const fraunces = Fraunces({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

// Handwritten accent — used sparingly for exactly two personal touches
// (the hero signature and the sticky note), never for headings or UI.
const caveat = Caveat({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aleida Holguin — Portfolio",
  description:
    "Aleida Holguin — software engineer, computer science student, and community builder in El Paso. Explore AI research, personal projects, and the person behind the code.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <LightboxProvider>
          <main id="main-content" className="flex-1">{children}</main>
        </LightboxProvider>
        <Footer />
      </body>
    </html>
  );
}
