import React from "react";

export function Skills() {
  return (
    <section id="skills">
      <span className="stag">Skills &amp; Stack</span>
      <h2 className="section-title">
        <span className="word"><span>What I</span></span>&nbsp;
        <span className="word"><span>work with</span></span>
      </h2>
      <div className="skills-layout">
        <div>
          <div className="scat">
            <div className="scat-title">Frontend</div>
            <div className="srow"><div className="shead"><span>JavaScript (ES6+)</span><span className="spct">92%</span></div><div className="strack"><div className="sfill" data-w="92"></div></div></div>
            <div className="srow"><div className="shead"><span>React.js / Next.js</span><span className="spct">90%</span></div><div className="strack"><div className="sfill" data-w="90"></div></div></div>
            <div className="srow"><div className="shead"><span>TypeScript</span><span className="spct">85%</span></div><div className="strack"><div className="sfill" data-w="85"></div></div></div>
            <div className="srow"><div className="shead"><span>HTML5 / CSS3</span><span className="spct">95%</span></div><div className="strack"><div className="sfill" data-w="95"></div></div></div>
          </div>
          <div className="scat">
            <div className="scat-title">Backend &amp; Database</div>
            <div className="srow"><div className="shead"><span>Node.js / Express.js</span><span className="spct">80%</span></div><div className="strack"><div className="sfill" data-w="80"></div></div></div>
            <div className="srow"><div className="shead"><span>MongoDB / Mongoose</span><span className="spct">78%</span></div><div className="strack"><div className="sfill" data-w="78"></div></div></div>
            <div className="srow"><div className="shead"><span>REST API Design</span><span className="spct">83%</span></div><div className="strack"><div className="sfill" data-w="83"></div></div></div>
            <div className="srow"><div className="shead"><span>JWT Authentication</span><span className="spct">76%</span></div><div className="strack"><div className="sfill" data-w="76"></div></div></div>
          </div>
        </div>
        <div>
          <div className="scat-title">Tech Stack</div>
          <div className="tgrid">
            <div className="tchip"><div className="ti">⚛️</div><div className="tn">React.js</div></div>
            <div className="tchip"><div className="ti">🟩</div><div className="tn">Node.js</div></div>
            <div className="tchip"><div className="ti">🌿</div><div className="tn">MongoDB</div></div>
            <div className="tchip"><div className="ti">🚂</div><div className="tn">Express.js</div></div>
            <div className="tchip"><div className="ti">🟦</div><div className="tn">TypeScript</div></div>
            <div className="tchip"><div className="ti">▲</div><div className="tn">Next.js</div></div>
            <div className="tchip"><div className="ti">📦</div><div className="tn">Redux</div></div>
            <div className="tchip"><div className="ti">🔑</div><div className="tn">JWT Auth</div></div>
            <div className="tchip"><div className="ti">🎨</div><div className="tn">Tailwind</div></div>
            <div className="tchip"><div className="ti">🐙</div><div className="tn">Git/GitHub</div></div>
            <div className="tchip"><div className="ti">🌐</div><div className="tn">REST APIs</div></div>
            <div className="tchip"><div className="ti">▲</div><div className="tn">Vercel</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
