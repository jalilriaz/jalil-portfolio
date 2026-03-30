"use client";

import React, { useEffect, useRef } from "react";

export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let animationFrameId: number;
    const pts: Array<{ x: number, y: number, r: number, vx: number, vy: number, a: number, h: number }> = [];

    const rsz = () => {
      W = cvs.width = window.innerWidth;
      H = cvs.height = window.innerHeight;
    };

    const mkPt = () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 0.8 + 0.2,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      a: Math.random() * 0.35 + 0.08,
      h: Math.random() > 0.55 ? 165 : Math.random() > 0.5 ? 260 : 320,
    });

    rsz();
    window.addEventListener("resize", rsz);

    for (let i = 0; i < 110; i++) {
        pts.push(mkPt());
    }

    const drawPts = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.h},100%,65%,${p.a})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 80) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,255,224,${0.04 * (1 - d / 80)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(drawPts);
    };

    drawPts();

    return () => {
      window.removeEventListener("resize", rsz);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
}
