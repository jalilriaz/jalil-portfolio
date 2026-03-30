import React from "react";

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid"></div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <div className="hero-inner">
        <div className="hero-chip">
          <span className="chip-dot"></span><span id="chip-text"></span>
        </div>
        <div className="hero-pre">// Hello, World — I&apos;m</div>
        <h1 className="hero-name">
          <span className="line">Jalil</span>
          <span className="line"><span className="g">Riaz</span></span>
        </h1>
        <p className="hero-role">
          <b>Frontend Developer &middot; React &amp; TypeScript Specialist</b> &middot; <span id="typed-role"></span>
          <span className="type-cursor"></span>
        </p>
        <p className="hero-desc">
          Detail-oriented Frontend Developer with 2+ years of experience delivering scalable, high-performance web applications and responsive, mobile-first interfaces using React.js, TypeScript, and Next.js.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-neon magnet">View Projects</a>
          <a href="#contact" className="btn-ghost magnet">Get in Touch →</a>
        </div>
        <div className="hero-stats">
          <div><div className="sn" data-count="2">0</div><div className="sl">Yrs Experience</div></div>
          <div><div className="sn" data-count="10">0</div><div className="sl">Projects Shipped</div></div>
          <div><div className="sn" data-count="5">0</div><div className="sl">Key Projects</div></div>
        </div>
      </div>

      {/* FLOATING TECH ICONS */}
      <div className="hero-floats">
        <div className="float-icon fi1">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2.5" fill="currentColor"/><ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none"/><ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/></svg>
          <span>React</span>
        </div>
        <div className="float-icon fi2">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 19.5h3.2L12 7.8l6.8 11.7H22L12 2z"/></svg>
          <span>Next.js</span>
        </div>
        <div className="float-icon fi3">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/><text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)" fill="currentColor">TS</text></svg>
          <span>TypeScript</span>
        </div>
        <div className="float-icon fi4">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm4 0h-2v-2h2v2zm-4-4H9V8h2v4zm4 0h-2V8h2v4z" fill="none" stroke="currentColor" strokeWidth="1.2"/><path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth=".8" opacity=".4"/></svg>
          <span>Tailwind</span>
        </div>
        <div className="float-icon fi5">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/><text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="var(--font-mono)" fill="currentColor">JS</text></svg>
          <span>JavaScript</span>
        </div>
        <div className="float-icon fi6">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.2"/></svg>
          <span>Git</span>
        </div>
      </div>
    </section>
  );
}
