"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cta, Logo } from "./Ui";

const links = [
  { to: "/", label: "Home" },
  { to: "/company", label: "Company" },
  { to: "/services", label: "Services" },
  { to: "/innovations", label: "Innovations" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const calm = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-700 ${
        solid
          ? "border-b border-paper/10 bg-midnight/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 md:px-10">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Fetchseed home">
          <motion.span
            className="inline-block"
            initial={calm ? false : { rotate: -8, scale: 0.94, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <Logo compact />
          </motion.span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className="group relative text-sm text-paper/70 transition-colors duration-300 hover:text-paper"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-energy transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <Cta to="/contact" size="sm">
            Start a conversation
          </Cta>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-6 bg-paper transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-paper transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-paper/10 bg-midnight/95 px-6 pb-8 pt-4 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="display block py-3 text-3xl text-paper"
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-4">
            <Cta to="/contact" size="sm">
              Start a conversation
            </Cta>
          </div>
        </div>
      )}
    </header>
  );
}
