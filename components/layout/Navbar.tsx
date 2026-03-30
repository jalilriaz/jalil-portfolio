"use client";
import React from "react";

export function Navbar() {
  return (
    <nav id="navbar">
      <div className="logo">&lt;jalil <span>/ &gt;</span></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-hire">Hire Me →</a>
    </nav>
  );
}
