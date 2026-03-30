import React from "react";

export function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-glass">
          <div className="shimmer"></div>
          <div className="av">JR</div>
          <div className="aname">Jalil Riaz</div>
          <div className="atitle">// Frontend Developer | React &amp; TypeScript Specialist</div>
          <p className="abio">Frontend developer from <strong>Pakistan</strong>, passionate about building <strong>scalable, high-performance</strong> web applications. I write <strong>clean, typed code</strong> and deliver responsive, mobile-first interfaces that delight users.</p>
          <div className="atags">
            <span className="atag">React.js</span><span className="atag">Next.js</span><span className="atag">TypeScript</span>
            <span className="atag">Tailwind CSS</span><span className="atag">Material UI</span><span className="atag">REST APIs</span>
          </div>
        </div>
        <div className="about-right">
          <span className="stag">About Me</span>
          <h2 className="section-title">
            <span className="word"><span>Crafting pixels</span></span><br />
            <span className="word"><span>with purpose</span></span>
          </h2>
          <p className="ssub" style={{ marginBottom: "1.1rem" }}>I&apos;m a <strong style={{ color: "var(--text)" }}>frontend developer</strong> at <strong style={{ color: "var(--text)" }}>Zaytrics, Islamabad</strong>, building reusable, scalable components using React.js and TypeScript for a large-scale digital product platform.</p>
          <p className="ssub">I specialize in the <strong style={{ color: "var(--text)" }}>React ecosystem</strong> -  from component-based architecture to SSR with Next.js, complex state management, REST API integrations, and responsive, mobile-first UIs. Currently pursuing my <strong style={{ color: "var(--text)" }}>BS in Computer Science</strong> from Virtual University of Pakistan.</p>
          <div className="xcards">
            <div className="xcard"><div className="xi">⚡</div><div className="xl">Performance</div><div className="xs">Optimized, high-speed web apps</div></div>
            <div className="xcard"><div className="xi">🎨</div><div className="xl">Responsive Design</div><div className="xs">Mobile-first, cross-browser</div></div>
            <div className="xcard"><div className="xi">🔒</div><div className="xl">Type Safety</div><div className="xs">TypeScript everywhere</div></div>
            <div className="xcard"><div className="xi">🚀</div><div className="xl">API Integration</div><div className="xs">REST APIs, JSON, Google Calendar</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
