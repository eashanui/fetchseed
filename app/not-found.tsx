import Link from "next/link";

export default function NotFound() {
  return (
    <div className="on-midnight flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="display text-[22vw] leading-none text-energy md:text-[10rem]">404</h1>
        <h2 className="mt-6 text-lg font-semibold">This page has not been planted yet</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-energy px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-midnight"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
