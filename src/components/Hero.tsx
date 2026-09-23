"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PhotoSlot from "./PhotoSlot";
import { profile } from "@/data/profile";

const nodes = [{x:50,y:38},{x:25,y:92},{x:75,y:92},{x:12,y:150},{x:38,y:150},{x:62,y:150},{x:88,y:150}];
const traversal = [0,1,3,4,2,5,6];

function AlgorithmSketch() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setStep(previous => {
        if (previous >= traversal.length - 1) return previous;
        return previous + 1;
      });
    }, reduced ? 100 : 600);
    const finish = window.setTimeout(() => setRunning(false), (reduced ? 100 : 600) * 8);
    return () => { window.clearInterval(timer); window.clearTimeout(finish); };
  }, [running, reduced]);
  return (
    <div className="algorithm-sketch">
      <div className="mono sketch-heading"><span>01 / A LITTLE CS BREAK</span><span>O(V + E)</span></div>
      <svg viewBox="0 0 300 185" role="img" aria-label="Binary tree showing a depth-first traversal">
        {nodes.slice(1).map((node,index) => { const parent = nodes[Math.floor(index / 2)]; return <line key={index} x1={parent.x * 3} y1={parent.y} x2={node.x * 3} y2={node.y} stroke="currentColor" strokeOpacity=".25" />; })}
        {nodes.map((node,index) => <g key={index} className={traversal.slice(0,step+1).includes(index) ? "tree-node visited" : "tree-node"}><circle cx={node.x * 3} cy={node.y} r="16"/><text x={node.x * 3} y={node.y + 4} textAnchor="middle">{String.fromCharCode(65 + index)}</text></g>)}
      </svg>
      <div className="sketch-controls"><span className="mono" aria-live="polite">{step < 0 ? "depth_first_search(tree)" : traversal.slice(0,step+1).map(n=>String.fromCharCode(65+n)).join(" → ")}</span><button disabled={running} onClick={()=>{setStep(-1);setRunning(true);}} aria-label="Run depth-first tree traversal">{running ? "Running…" : step >= 0 ? "Replay ↻" : "Run ↗"}</button></div>
    </div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  return (
    <section className="portfolio-hero page-shell">
      <div className="hero-eyebrow mono"><span><i className="status-dot"/> HELLO, WORLD. I’M ALEIDA.</span><span>EL PASO, TX ↗</span></div>
      <div className="hero-main">
        <div className="hero-copy">
          <motion.h1 initial={reduced ? false : {opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}><span>Curiosity,</span><br/><em>compiled.</em><span className="title-star" aria-hidden="true">✳</span></motion.h1>
          <p className="hero-intro">I’m {profile.firstName} — a software engineer,<br className="desktop-break"/> CS student, and a people person.</p>
          <p className="hero-description">From AI agents to the coffee shop down the street, I build things for the worlds I’m part of.</p>
          <div className="hero-actions"><a href="#selected-work" className="solid-button">Explore my work <span>↘</span></a><a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-link">The résumé ↗</a></div>
          <div className="hero-footnote mono"><span className="code-symbol">&lt;/&gt;</span> A LITTLE LOGIC. A LOT OF HEART.</div>
        </div>
        <motion.div className="hero-visual" initial={reduced ? false : {opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.15}}>
          <div className="portrait-frame"><PhotoSlot src={profile.headshotUrl} alt="Aleida Holguin" sizes="(max-width: 700px) 80vw, 400px"/><span className="portrait-label mono">ALEIDA HOLGUIN </span></div>
          <span className="handwritten-note">engineer brain,<br/>creative soul ↴</span>
          {/* <span className="portrait-stamp" aria-hidden="true">built with<br/><strong>curiosity</strong><br/>since day one</span> */}
          <AlgorithmSketch/>
        </motion.div>
      </div>
      <div className="hero-bottom mono"><span>SOFTWARE ENGINEERING · MACHINE LEARNING · COMMUNITY</span><Link href="/about">MEET THE HUMAN BEHIND THE CODE ↗</Link></div>
    </section>
  );
}
