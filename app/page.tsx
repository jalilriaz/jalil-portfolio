"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CanvasBackground } from "@/components/CanvasBackground";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      /* ── HERO ENTRANCE ── */
      const tl = gsap.timeline({ delay: 0.1 });
      tl.to(".hero-chip", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(".hero-pre", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "<.2")
        .to(".hero-name .line", { opacity: 1, y: "0%", duration: 0.8, stagger: 0.12, ease: "power4.out" }, "<.1")
        .to(".hero-role", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=.3")
        .to(".hero-desc", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=.3")
        .to(".hero-btns", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=.3")
        .to(".hero-stats", { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=.2")
        .add(() => {
          document.querySelectorAll(".sn").forEach((el) => {
            const htmlEl = el as HTMLElement;
            let n = 0;
            const target = Number(htmlEl.dataset.count);
            const step = target / 40;
            const t = setInterval(() => {
              n = Math.min(n + step, target);
              htmlEl.textContent = Math.floor(n) + "+";
              if (n >= target) clearInterval(t);
            }, 30);
          });
        })
        .to(".logo", { opacity: 1, duration: 0.5 }, "<")
        .to(".nav-links li", { opacity: 1, y: 0, stagger: 0.08, duration: 0.4, ease: "power2.out" }, "<.1")
        .to(".nav-hire", { opacity: 1, duration: 0.4 }, "<.2");

      /* ── SCROLL-TRIGGERED WORD SPLITS ── */
      gsap.utils.toArray(".section-title .word span").forEach((span: any) => {
        gsap.to(span, {
          opacity: 1,
          y: "0%",
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: { trigger: span, start: "top 90%", toggleActions: "play none none none" },
        });
      });
      gsap.utils.toArray(".stag").forEach((el: any) => {
        gsap.to(el, { opacity: 1, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%" } });
      });
      gsap.utils.toArray(".ssub").forEach((el: any) => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });

      /* ── ABOUT ── */
      ScrollTrigger.create({
        trigger: ".about-grid",
        start: "top 75%",
        onEnter: () => {
          gsap.to(".about-glass", { opacity: 1, x: 0, rotateY: 0, duration: 1, ease: "power4.out" });
          gsap.to(".atag", { opacity: 1, y: 0, stagger: 0.07, duration: 0.5, delay: 0.4, ease: "back.out(2)" });
          gsap.to(".about-right > *", { opacity: 1, x: 0, stagger: 0.1, duration: 0.7, delay: 0.2, ease: "power3.out" });
          gsap.to(".xcard", { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, delay: 0.5, ease: "power3.out" });
        },
      });

      /* ── SKILLS ── */
      ScrollTrigger.create({
        trigger: "#skills",
        start: "top 70%",
        onEnter: () => {
          gsap.to(".scat-title", { opacity: 1, stagger: 0.12, duration: 0.5, ease: "power2.out" });
          gsap.to(".srow", {
            opacity: 1,
            x: 0,
            stagger: 0.09,
            duration: 0.55,
            delay: 0.2,
            ease: "power3.out",
            onComplete: () => {
              document.querySelectorAll(".sfill").forEach((f) => {
                const htmlEl = f as HTMLElement;
                htmlEl.style.width = htmlEl.dataset.w + "%";
              });
            },
          });
          gsap.to(".tchip", { opacity: 1, scale: 1, stagger: { amount: 0.6, from: "start" }, duration: 0.5, delay: 0.2, ease: "back.out(1.8)" });
        },
      });

      /* ── PROJECTS ── */
      ScrollTrigger.create({
        trigger: "#projects",
        start: "top 75%",
        onEnter: () => {
          gsap.to(".ph > div > *", { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" });
          gsap.to(".ph .btn-ghost", { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: "power3.out" });
          gsap.to(".pcard", { opacity: 1, y: 0, scale: 1, stagger: { amount: 0.45, from: "start" }, duration: 0.7, delay: 0.1, ease: "power4.out" });
        },
      });

      /* ── CONTACT ── */
      ScrollTrigger.create({
        trigger: "#contact",
        start: "top 75%",
        onEnter: () => {
          gsap.to(".cleft > *", { opacity: 1, x: 0, stagger: 0.1, duration: 0.7, ease: "power3.out" });
          gsap.to(".srow2", { opacity: 1, x: 0, stagger: 0.1, duration: 0.6, delay: 0.3, ease: "power3.out" });
          gsap.to(".cform", { opacity: 1, x: 0, duration: 0.8, delay: 0.2, ease: "power3.out" });
        },
      });

      /* ── FOOTER ── */
      ScrollTrigger.create({
        trigger: "footer",
        start: "top 95%",
        onEnter: () => {
          gsap.to("footer", { opacity: 1, duration: 0.8, ease: "power2.out" });
        },
      });

      /* ── MAGNETIC BUTTONS ── */
      document.querySelectorAll(".magnet").forEach((btn) => {
        btn.addEventListener("mousemove", (e: any) => {
          const r = btn.getBoundingClientRect();
          const dx = (e.clientX - r.left - r.width / 2) * 0.35;
          const dy = (e.clientY - r.top - r.height / 2) * 0.35;
          gsap.to(btn, { x: dx, y: dy, duration: 0.3, ease: "power2.out" });
        });
        btn.addEventListener("mouseleave", () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,.4)" }));
      });
    }, containerRef); // Scope to container

    /* ── SCROLL PROGRESS & PARALLAX & NAVBAR ── */
    const onScroll = () => {
      const s = window.scrollY;
      const h = document.body.scrollHeight - window.innerHeight;
      const pct = (s / h) * 100;
      const prog = document.getElementById("prog");
      if (prog) prog.style.width = pct + "%";

      const nav = document.getElementById("navbar");
      if (nav) nav.classList.toggle("scrolled", s > 60);

      const orb1 = document.querySelector(".orb1") as HTMLElement;
      const orb2 = document.querySelector(".orb2") as HTMLElement;
      const orb3 = document.querySelector(".orb3") as HTMLElement;
      if (orb1) orb1.style.transform = `translateY(${s * 0.08}px)`;
      if (orb2) orb2.style.transform = `translateY(${-s * 0.05}px)`;
      if (orb3) orb3.style.transform = `translateY(${s * 0.06}px)`;
    };
    window.addEventListener("scroll", onScroll);

    /* ── TYPING EFFECT ── */
    const phrases = ["Building scalable web apps", "Turning designs into reality", "Obsessed with clean code", "Crafting seamless interfaces"];
    let pi = 0, ci = 0, del = false;
    const typed = document.getElementById("typed-role");
    let typeTimeout: NodeJS.Timeout;
    function typeLoop() {
      if (!typed) return;
      if (!del) {
        typed.textContent = phrases[pi].slice(0, ++ci);
        if (ci === phrases[pi].length) {
          del = true;
          typeTimeout = setTimeout(typeLoop, 2200);
          return;
        }
      } else {
        typed.textContent = phrases[pi].slice(0, --ci);
        if (ci === 0) {
          del = false;
          pi = (pi + 1) % phrases.length;
        }
      }
      typeTimeout = setTimeout(typeLoop, del ? 45 : 85);
    }
    typeLoop();

    /* ── CHIP TEXT ── */
    const chipPhrases = ["Available for new projects", "Open to collaborate", "React & TypeScript specialist"];
    let chipI = 0;
    const chipEl = document.getElementById("chip-text");
    let chipTimeout: NodeJS.Timeout;
    if (chipEl) chipEl.textContent = chipPhrases[0];
    function rotateChip() {
      if (!chipEl) return;
      gsap.to(chipEl, {
        opacity: 0,
        y: -8,
        duration: 0.3,
        onComplete: () => {
          chipEl.textContent = chipPhrases[(chipI = (chipI + 1) % chipPhrases.length)];
          gsap.fromTo(chipEl, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 });
        },
      });
      chipTimeout = setTimeout(rotateChip, 3000);
    }
    chipTimeout = setTimeout(rotateChip, 3000);

    return () => {
      ctx.revert(); // clean up GSAP animations
      window.removeEventListener("scroll", onScroll);
      clearTimeout(typeTimeout);
      clearTimeout(chipTimeout);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div id="prog"></div>
      <CanvasBackground />
      <CustomCursor />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
