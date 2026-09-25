"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import mainLogo from "@/assets/main.png";

export function Logo({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <img
      src={mainLogo.src}
      alt="Fetchseed - technology, intelligence, growth"
      className={`${compact ? "h-12" : "h-10"} w-auto ${className}`}
    />
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-[0.8rem] font-semibold tracking-[0.06em] uppercase transition-colors duration-500";

export function Cta({
  to,
  children,
  variant = "energy",
  size = "md",
}: {
  to: string;
  children: ReactNode;
  variant?: "energy" | "outline" | "solid";
  size?: "sm" | "md";
}) {
  const pad = size === "sm" ? "px-5 py-2.5" : "px-7 py-3.5";
  const look =
    variant === "energy"
      ? "bg-energy text-midnight hover:brightness-110"
      : variant === "solid"
        ? "bg-primary text-primary-foreground hover:opacity-90"
        : "fuse border border-border text-foreground hover:text-ember";
  const el = (
    <Link href={to} className={`${base} ${pad} ${look}`}>
      {children}
    </Link>
  );
  return el;
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 text-muted-foreground ${className}`}>
      <span className="inline-block h-px w-8 bg-energy" />
      {children}
    </p>
  );
}

export function Ghost({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden
      className={`display pointer-events-none select-none text-[22vw] leading-none text-foreground/[0.045] md:text-[14vw] ${className}`}
    >
      {children}
    </span>
  );
}
