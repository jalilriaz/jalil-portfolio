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
          <b>MERN Stack Developer &middot; Full-Stack Web Developer</b> &middot; <span id="typed-role"></span>
          <span className="type-cursor"></span>
        </p>
        <p className="hero-desc">
          Detail-oriented MERN Stack Developer with 1.5+ years of experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js — delivering scalable backends, clean REST APIs, and responsive, mobile-first interfaces.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-neon magnet">View Projects</a>
          <a href="#contact" className="btn-ghost magnet">Get in Touch →</a>
        </div>
        <div className="hero-stats">
          <div><div className="sn" data-count="1.5">1.5+</div><div className="sl">Yrs Experience</div></div>
          <div><div className="sn" data-count="10">0</div><div className="sl">Projects Shipped</div></div>
          <div><div className="sn" data-count="4">0</div><div className="sl">Key Projects</div></div>
        </div>
      </div>

      {/* FLOATING TECH ICONS */}
      <div className="hero-floats">
        {/* fi1 — React */}
        <div className="float-icon fi1">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2.5" fill="currentColor"/><ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none"/><ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/></svg>
          <span>React</span>
        </div>
        {/* fi2 — Node.js */}
        <div className="float-icon fi2">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5L2.5 7v10l9.5 5.5 9.5-5.5V7L12 1.5zm0 2.1l7.5 4.33v8.64L12 20.9l-7.5-4.33V7.93L12 3.6z" opacity=".6"/><path d="M12 6.5v11M7 9l5 3 5-3" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
          <span>Node.js</span>
        </div>
        {/* fi3 — Express.js */}
        <div className="float-icon fi3">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5"/><text x="12" y="17" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="monospace" fill="currentColor">Ex</text></svg>
          <span>Express</span>
        </div>
        {/* fi4 — MongoDB */}
        <div className="float-icon fi4">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C9.5 6 7 8.5 7 13a5 5 0 0010 0c0-4.5-2.5-7-5-11z"/><path d="M12 13v9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
          <span>MongoDB</span>
        </div>
        {/* fi5 — TypeScript */}
        <div className="float-icon fi5">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/><text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="monospace" fill="currentColor">TS</text></svg>
          <span>TypeScript</span>
        </div>
        {/* fi6 — Git */}
        <div className="float-icon fi6">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.2"/></svg>
          <span>Git</span>
        </div>
      </div>
    </section>
  );
}
