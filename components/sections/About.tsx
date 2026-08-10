import React from "react";

export function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-glass">
          <div className="shimmer"></div>
          <div className="av">JR</div>
          <div className="aname">Jalil Riaz</div>
          <div className="atitle">// MERN Stack Developer | Full-Stack Web Developer</div>
          <p className="abio">MERN Stack Developer from <strong>Pakistan</strong>, passionate about building <strong>full-stack, production-ready</strong> web applications. I design <strong>REST APIs</strong>, model <strong>MongoDB</strong> schemas, and deliver responsive, mobile-first frontends using React.js — writing <strong>clean, typed code</strong> across the entire stack.</p>
          <div className="atags">
            <span className="atag">MongoDB</span><span className="atag">Express.js</span><span className="atag">React.js</span>
            <span className="atag">Node.js</span><span className="atag">TypeScript</span><span className="atag">REST APIs</span>
          </div>
        </div>
        <div className="about-right">
          <span className="stag">About Me</span>
          <h2 className="section-title">
            <span className="word"><span>Crafting pixels</span></span><br />
            <span className="word"><span>with purpose</span></span>
          </h2>
          <p className="ssub" style={{ marginBottom: "1.1rem" }}>I&apos;m a <strong style={{ color: "var(--text)" }}>MERN Stack Developer</strong> at <strong style={{ color: "var(--text)" }}>Zaytrics, Islamabad</strong>, building full-stack features for a large-scale digital product platform — REST APIs with Express &amp; Node, MongoDB data modeling, and React.js frontends with TypeScript.</p>
          <p className="ssub">I specialize in the full <strong style={{ color: "var(--text)" }}>MERN ecosystem</strong> — from MongoDB schema design and JWT authentication to React component architecture, Redux state management, and Next.js SSR. Currently pursuing my <strong style={{ color: "var(--text)" }}>BS in Computer Science</strong> from Virtual University of Pakistan.</p>
          <div className="xcards">
            <div className="xcard"><div className="xi">⚡</div><div className="xl">Performance</div><div className="xs">Optimized full-stack apps</div></div>
            <div className="xcard"><div className="xi">🔗</div><div className="xl">REST API Design</div><div className="xs">Express.js + Node.js backends</div></div>
            <div className="xcard"><div className="xi">🗄️</div><div className="xl">Database</div><div className="xs">MongoDB &amp; Mongoose schemas</div></div>
            <div className="xcard"><div className="xi">🔒</div><div className="xl">Auth &amp; Security</div><div className="xs">JWT, protected routes</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
