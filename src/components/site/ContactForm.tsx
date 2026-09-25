"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="border-t border-border pt-8">
        <p className="eyebrow text-green">Message queued</p>
        <h2 className="display mt-5 text-3xl md:text-5xl">We will be in touch.</h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. Your note is ready for the Fetchseed team.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 text-xs font-semibold uppercase tracking-[0.12em] text-ember transition-colors hover:text-green"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <label className="contact-field">
          <span>Name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="contact-field">
          <span>Work email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <label className="contact-field">
        <span>Organization</span>
        <input name="organization" autoComplete="organization" />
      </label>
      <label className="contact-field">
        <span>What are you trying to move forward?</span>
        <textarea name="message" required rows={5} />
      </label>
      <button
        type="submit"
        className="inline-flex rounded-full bg-energy px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-midnight transition-[filter,transform] hover:brightness-110 hover:-translate-y-0.5"
      >
        Send inquiry
      </button>
    </form>
  );
}
