"use client";

import { useEffect, useRef, useState } from "react";
import symbol from "@/assets/symbol.png";

const symbolUrl = symbol.src;

type P = {
  tx: number;
  ty: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  o: number;
  ember: boolean;
  ph: number;
};

/**
 * Living circuit-vine: particles sampled from the real leaf mark silhouette,
 * coalescing into the mark on load, drifting, and blooming near the cursor.
 * prefers-reduced-motion / no-canvas -> static mark image.
 */
export function ParticleMark({ className = "" }: { className?: string }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [calm, setCalm] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCalm(true);
      return;
    }
    const cv = canvas.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) {
      setCalm(true);
      return;
    }

    let frame = 0;
    let particles: P[] = [];
    let w = 0;
    let h = 0;
    let dpr = 1;
    let t0 = 0;
    const mouse = { x: -9999, y: -9999 };
    const resize = () => {
      const r = cv.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const img = new Image();
    img.src = symbolUrl;
    img.onload = () => {
      const sw = img.naturalWidth;
      const sh = img.naturalHeight;
      const off = document.createElement("canvas");
      off.width = sw;
      off.height = sh;
      const octx = off.getContext("2d");
      if (!octx) {
        setCalm(true);
        return;
      }
      octx.drawImage(img, 0, 0, sw, sh);
      const data = octx.getImageData(0, 0, sw, sh).data;

      const dense = w > 900 ? 5 : w > 520 ? 6 : 7;
      const scale = Math.min(w * 0.55, h * 0.78) / Math.max(sw, sh);
      const ox = (w - sw * scale) / 2;
      const oy = (h - sh * scale) / 2;
      const pts: P[] = [];

      for (let y = 0; y < sh; y += dense) {
        for (let x = 0; x < sw; x += dense) {
          const i = (y * sw + x) * 4;
          const r = data[i] ?? 0;
          const g = data[i + 1] ?? 0;
          const b = data[i + 2] ?? 0;
          const a = data[i + 3] ?? 0;
          if (a < 40) continue;
          const ember = r > 180 && g > 100 && b < 120;
          pts.push({
            tx: ox + x * scale,
            ty: oy + y * scale,
            x: w / 2 + (Math.random() - 0.5) * w * 1.1,
            y: h / 2 + (Math.random() - 0.5) * h * 1.3,
            vx: 0,
            vy: 0,
            o: 0.25 + Math.random() * 0.75,
            ember,
            ph: Math.random() * Math.PI * 2,
          });
        }
      }
      particles = pts;
      t0 = performance.now();
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);
      const settle = Math.min(1, (now - t0) / 1400);

      for (const p of particles) {
        const ease = 0.012 + 0.07 * settle;
        const drift = Math.sin(now / 1400 + p.ph) * 1.5;
        p.vx += (p.tx + drift - p.x) * ease;
        p.vy += (p.ty + drift * 0.6 - p.y) * ease;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distanceSquared = dx * dx + dy * dy;
        let proximity = 0;
        if (distanceSquared < 60000) {
          proximity = 1 - distanceSquared / 60000;
          const force = proximity * proximity * 5.2;
          p.vx += (dx / (Math.sqrt(distanceSquared) + 0.01)) * force;
          p.vy += (dy / (Math.sqrt(distanceSquared) + 0.01)) * force;
        }

        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        const alpha = Math.min(
          1,
          (p.o * settle + proximity * 0.5) * (0.62 + 0.38 * Math.sin(now / 900 + p.ph)),
        );
        const size = p.ember ? 1.7 + proximity * 1.8 : 1.25 + proximity * 1.2;
        ctx.beginPath();
        ctx.fillStyle = p.ember
          ? `rgba(247,148,29,${Math.max(0.15, alpha)})`
          : `rgba(28,176,120,${Math.max(0.1, alpha * 0.9)})`;
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    const onWindowPointerMove = (event: PointerEvent) => {
      const bounds = cv.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (!inside) {
        mouse.x = -9999;
        mouse.y = -9999;
        return;
      }

      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
    };
    const onWindowPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onWindowPointerMove);
    window.addEventListener("pointerleave", onWindowPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onWindowPointerMove);
      window.removeEventListener("pointerleave", onWindowPointerLeave);
    };
  }, []);

  if (calm) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img src={symbolUrl} alt="Fetchseed mark" className="max-h-[70%] w-auto opacity-90" />
      </div>
    );
  }

  return <canvas ref={canvas} aria-hidden className={className} />;
}
