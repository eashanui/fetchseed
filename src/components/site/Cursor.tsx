"use client";

import { useEffect, useRef, useState } from "react";

/** Dot + trailing ring; ring tints ember over interactive elements. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || calm) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let frame = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const el = e.target as HTMLElement | null;
      const hot = !!el?.closest("a, button, input, textarea, [data-hot]");
      ring.current?.classList.toggle("is-hot", hot);
    };

    const loop = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (dot.current)
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (ring.current)
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move);
    document.documentElement.style.cursor = "none";

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      document.documentElement.style.cursor = "";
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        .fs-ring { transition: width .35s var(--ease-scene), height .35s var(--ease-scene), border-color .35s, opacity .3s; }
        .fs-ring.is-hot { width: 52px; height: 52px; border-color: var(--ember); }
      `}</style>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[999] size-1.5 rounded-full bg-ember"
      />
      <div
        ref={ring}
        className="fs-ring pointer-events-none fixed left-0 top-0 z-[998] size-8 rounded-full border border-green/70"
      />
    </>
  );
}
