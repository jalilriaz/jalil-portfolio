"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Zaytrics",
    period: "March 2024 - Present",
    description: "Led frontend development, implemented complex state management, integrated REST APIs, and mentored junior developers.",
  },
  {
    role: "Frontend Development Intern",
    company: "Zaytrics",
    period: "Previous", // Assuming previous based on context
    description: "Developed responsive interfaces, applied TypeScript for type-safety, and participated in code reviews.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 max-w-5xl mx-auto w-full z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">Professional Experience</h2>
        <p className="text-white/60 text-lg">My journey of continuous growth and technical excellence.</p>
      </div>

      <div className="relative">
        {/* Glowing Vertical Timeline Line */}
        <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-slate-800">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Timeline Orb */}
              <div className="absolute left-[9px] top-6 w-3.5 h-3.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] outline outline-4 outline-[#0a0a0a]" />

              {/* Glassmorphic Card */}
              <div className="p-6 md:p-8 rounded-2xl backdrop-blur-md border border-slate-800 bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-heading">{exp.role}</h3>
                    <h4 className="text-blue-400 font-medium">{exp.company}</h4>
                  </div>
                  <span className="text-sm font-medium text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
