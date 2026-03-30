import React from "react";

export function Projects() {
  return (
    <section id="projects">
      <div className="ph">
        <div>
          <span className="stag">Projects</span>
          <h2 className="section-title"><span className="word"><span>Things</span></span>&nbsp;<span className="word"><span>I&apos;ve built</span></span></h2>
        </div>
        <a href="#contact" className="btn-ghost magnet">All Work →</a>
      </div>
      <div className="pgrid">
        <div className="pcard big">
          <div className="pthumb"><div className="ptbg g1"></div><div className="pglyph">🦷</div><span className="pbadge bg-neon">Featured</span><div className="pacts"><a href="#" className="pabtn">↗</a></div></div>
          <div className="pbody"><div className="pname">Elite Dental Centre Management</div><div className="pdesc">Comprehensive dental clinic management platform with responsive, mobile-first design. Integrated Google Calendar API for real-time appointment booking and built dynamic admin dashboards for revenue tracking.</div><div className="pstack"><span className="stk">React.js</span><span className="stk">Next.js</span><span className="stk">Tailwind CSS</span><span className="stk">REST APIs</span><span className="stk">Google Calendar API</span></div></div>
        </div>
        <div className="pcard">
          <div className="pthumb"><div className="ptbg g2"></div><div className="pglyph">DPP</div><span className="pbadge bp-neon">Platform</span><div className="pacts"><a href="#" className="pabtn">↗</a></div></div>
          <div className="pbody"><div className="pname">Digital Product Platform (DPP)</div><div className="pdesc">Designed and developed the frontend architecture for a platform managing digital products with component-based structure that improved maintainability and reduced load times.</div><div className="pstack"><span className="stk">React.js</span><span className="stk">TypeScript</span><span className="stk">REST APIs</span></div></div>
        </div>
        <div className="pcard">
          <div className="pthumb"><div className="ptbg g3"></div><div className="pglyph">🏢</div><span className="pbadge bg-neon">Corporate</span><div className="pacts"><a href="#" className="pabtn">↗</a></div></div>
          <div className="pbody"><div className="pname">Software Dev Agency Website</div><div className="pdesc">High-quality, responsive corporate website to showcase software services and client portfolios with cross-browser compatibility and optimized UI/UX.</div><div className="pstack"><span className="stk">React.js</span><span className="stk">JavaScript</span><span className="stk">Tailwind CSS</span></div></div>
        </div>
        <div className="pcard big">
          <div className="pthumb"><div className="ptbg g4"></div><div className="pglyph">🎫</div><span className="pbadge br-neon">Multilingual</span><div className="pacts"><a href="#" className="pabtn">↗</a></div></div>
          <div className="pbody"><div className="pname">Najadwil — Digital Ticketing</div><div className="pdesc">Multilingual ticketing application with RTL (Right-to-Left) layout support, i18n internationalization, and calendar-based booking features for seamless user experience.</div><div className="pstack"><span className="stk">React.js</span><span className="stk">i18next</span><span className="stk">CSS3</span></div></div>
        </div>
        <div className="pcard">
          <div className="pthumb"><div className="ptbg g1"></div><div className="pglyph">👤</div><span className="pbadge bg-neon">Portfolio</span><div className="pacts"><a href="https://jalil-riaz-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="pabtn">↗</a></div></div>
          <div className="pbody"><div className="pname">Personal Developer Portfolio</div><div className="pdesc">High-performance personal portfolio with modern UI/UX principles, smooth animations, and fully responsive, mobile-first layouts to showcase frontend projects.</div><div className="pstack"><span className="stk">React.js</span><span className="stk">Next.js</span><span className="stk">Tailwind CSS</span></div></div>
        </div>
      </div>
    </section>
  );
}
