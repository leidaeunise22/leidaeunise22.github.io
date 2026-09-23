"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/leadership", label: "Leadership" },
  { href: "/awards", label: "Awards" },
  { href: "/conferences", label: "Conferences" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b-2 border-dashed border-rose-deep/20 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream bg-rose-deep font-display text-sm font-semibold text-cream shadow-sticker">
            {profile.initials.first}
            {profile.initials.last}
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            {profile.name}
          </span>
        </Link>
        <nav className="flex gap-1 overflow-x-auto text-sm whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-3 py-1.5 font-medium transition-colors ${
                  active ? "text-rose-deep" : "text-ink/60 hover:text-ink"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-rose/25"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
