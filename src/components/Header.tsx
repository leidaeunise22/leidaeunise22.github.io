"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/data/profile";

const links = [["/about", "About"], ["/education", "Education"], ["/experience", "Work"],  ["/leadership", "Leadership"],  ["/awards", "Awards"], ["/conferences", "Conferences"]];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a href="#main-content" className="skip-link">Skip to content</a><div className="header-inner page-shell"><Link href="/" onClick={()=>setOpen(false)} className="brand" aria-label="Aleida Holguin home">ah<span>✳</span><span className="brand-caption mono">ALEIDA<br/>HOLGUIN</span></Link><button className="menu-toggle mono" aria-expanded={open} aria-controls="primary-nav" onClick={()=>setOpen(!open)}>{open ? "CLOSE −" : "MENU +"}</button><nav id="primary-nav" aria-label="Main navigation" className={open ? "header-nav is-open" : "header-nav"}>{links.map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)} aria-current={pathname===href ? "page" : undefined}>{label}</Link>)}<a className="nav-contact" href={`mailto:${profile.email}`}>Let’s talk ↗</a></nav></div></header>;
}
