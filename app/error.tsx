"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="on-midnight flex min-h-screen items-center justify-center px-6">
        <div className="max-w-md text-center">
          <h1 className="display text-3xl">This page did not load</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Something went wrong on our end. Try again or head back home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => reset()}
              className="rounded-full bg-energy px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-midnight"
            >
              Try again
            </button>
            <a
              href="/"
              className="rounded-full border border-border px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.06em]"
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
