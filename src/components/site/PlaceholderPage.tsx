"use client";

import { Kinetic, Reveal } from "./Motion";
import { Cta, Eyebrow } from "./Ui";

export function PlaceholderPage({
  title,
  label,
  description,
}: {
  title: string;
  label: string;
  description: string;
}) {
  return (
    <section className="on-midnight min-h-[70svh] px-6 pb-32 pt-40 md:px-10 md:pb-48 md:pt-56">
      <div className="mx-auto max-w-[1400px]">
        <Eyebrow>{label}</Eyebrow>
        <Kinetic
          as="h1"
          text={title}
          className="display mt-8 max-w-[18ch] text-[13vw] md:text-[7vw]"
        />
        <Reveal delay={0.2} className="mt-10 max-w-xl">
          <p className="text-base leading-relaxed text-paper/70">{description}</p>
          <div className="mt-10">
            <Cta to="/contact">Start a conversation</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
