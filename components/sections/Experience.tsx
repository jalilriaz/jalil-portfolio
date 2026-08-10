import React from "react";

interface ExperienceData {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  stack: string[];
}

const experiences: ExperienceData[] = [
  {
    role: "MERN Stack Developer",
    company: "Zaytrics — Islamabad",
    period: "Sep 2024 – Present",
    bullets: [
      "Architected and maintained REST APIs using Node.js and Express.js, powering the DPP platform's core features.",
      "Designed MongoDB schemas with Mongoose for scalable data modeling and optimized query performance.",
      "Built reusable, component-based React.js frontends integrated with backend APIs via Axios and Redux.",
      "Implemented JWT authentication flows for secure user login and protected route access.",
      "Mentored junior developers, conducted code reviews, and enforced best practices across the codebase.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "Redux"],
  },
  {
    role: "MERN Stack Developer — Intern",
    company: "Zaytrics — Islamabad",
    period: "Apr 2024 – Aug 2024",
    bullets: [
      "Developed and tested RESTful API endpoints in Express.js, integrated with MongoDB collections using Mongoose.",
      "Built responsive frontend components using React.js and TypeScript with strict type safety and reusability.",
      "Gained production experience integrating Google Calendar API for real-time appointment management.",
      "Participated in daily standups, sprint planning, and code reviews in an Agile development environment.",
    ],
    stack: ["MongoDB", "React.js", "Node.js", "REST APIs", "Google Calendar API"],
  },
];

export function Experience() {
  return (
    <section id="experience">
      <span className="stag">Experience</span>
      <h2 className="section-title">
        <span className="word"><span>Where I&apos;ve</span></span>&nbsp;
        <span className="word"><span>worked</span></span>
      </h2>
      <div className="exp-timeline">
        <div className="exp-line" />
        {experiences.map((exp, index) => (
          <div className="exp-card" key={index}>
            <div className="exp-orb" />
            <div className="exp-glass">
              <div className="exp-header">
                <div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                </div>
                <span className="exp-period">{exp.period}</span>
              </div>
              <ul className="exp-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className="exp-stack">
                {exp.stack.map((s) => (
                  <span key={s} className="stk">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
