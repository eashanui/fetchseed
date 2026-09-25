"use client";

import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { SmoothScroll } from "./SmoothScroll";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
