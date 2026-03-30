"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectData {
  title: string;
  desc: string;
  stack: string[];
  images: string[];
  badge: string;
  badgeColor: string;
  link?: string;
  isBig?: boolean;
}

const ProjectCard = ({ project }: { project: ProjectData }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % project.images.length);
    }, 3500); // Cross-fade every 3.5 seconds
    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <div className={`pcard ${project.isBig ? 'big' : ''}`}>
      <div className="pthumb relative overflow-hidden group">
        {project.images && project.images.length > 0 ? (
          project.images.map((img, i) => (
            <Image
              key={img}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 absolute inset-0 group-hover:scale-105 ${
                i === currentImg ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))
        ) : (
          <div className="ptbg g1 absolute inset-0"></div>
        )}
        <div className="absolute inset-0 bg-black/10 z-20 pointer-events-none"></div>
        <span className={`pbadge ${project.badgeColor} z-30`}>{project.badge}</span>
        <div className="pacts z-30">
          <a href={project.link || "#"} target={project.link?.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="pabtn">↗</a>
        </div>
      </div>
      <div className="pbody">
        <div className="pname">{project.title}</div>
        <div className="pdesc">{project.desc}</div>
        <div className="pstack">
          {project.stack.map((s) => (
            <span key={s} className="stk">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export function Projects() {
  const projectsData: ProjectData[] = [
    {
      title: "Elite Dental Centre Management",
      desc: "Comprehensive dental clinic management platform with responsive, mobile-first design. Integrated Google Calendar API for real-time appointment booking and built dynamic admin dashboards for revenue tracking.",
      stack: ["React.js", "Next.js", "Tailwind CSS", "REST APIs", "Google Calendar"],
      images: ["/projects/elite-dental-1.png", "/projects/elite-dental-2.png"],
      badge: "Featured",
      badgeColor: "bg-neon",
      isBig: true,
    },
    {
      title: "Digital Product Platform (DPP)",
      desc: "Designed and developed the frontend architecture for a platform managing digital products with component-based structure that improved maintainability and reduced load times.",
      stack: ["React.js", "TypeScript", "REST APIs"],
      images: ["/projects/dpp-manager-1.png", "/projects/dpp-manager-2.png", "/projects/dpp-manager-3.png"],
      badge: "Platform",
      badgeColor: "bp-neon",
    },
    {
      title: "Software Dev Agency Website",
      desc: "High-quality, responsive corporate website to showcase software services and client portfolios with cross-browser compatibility and optimized UI/UX.",
      stack: ["React.js", "JavaScript", "Tailwind CSS"],
      images: ["/projects/dd-brothers-1.png", "/projects/dd-brothers-2.png"],
      badge: "Corporate",
      badgeColor: "bg-neon",
    },
    {
      title: "Najadwil — Digital Ticketing",
      desc: "Multilingual ticketing application with RTL (Right-to-Left) layout support, i18n internationalization, and calendar-based booking features for seamless user experience.",
      stack: ["React.js", "i18next", "CSS3"],
      images: ["/projects/najadwil-1.png", "/projects/najadwil-2.png"],
      badge: "Multilingual",
      badgeColor: "br-neon",
      isBig: true,
    },
    {
      title: "Personal Developer Portfolio",
      desc: "High-performance personal portfolio with modern UI/UX principles, smooth animations, and fully responsive, mobile-first layouts to showcase frontend projects.",
      stack: ["React.js", "Next.js", "Tailwind CSS"],
      images: [], // Fallback to gradient
      badge: "Portfolio",
      badgeColor: "bg-neon",
      link: "https://jalil-riaz-portfolio.vercel.app/",
    },
  ];

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
        {projectsData.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} />
        ))}
      </div>
    </section>
  );
}
