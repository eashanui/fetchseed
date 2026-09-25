import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Ui";

export function Footer() {
  return (
    <footer className="on-midnight border-t border-paper/10">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Fetchseed Ltd — a UK-registered technology consultancy building offshore delivery and
              R&D capability in South Asia, and taking organizations digital.
            </p>
          </div>
          <div className="flex gap-3">
            {[
              { Icon: Twitter, label: "X" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="fuse flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-500 hover:text-ember"
              >
                <Icon className="size-4" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-border pt-8 text-sm text-muted-foreground md:grid-cols-4">
          <p>27 Gangarama Road, Thumbovila, Piliyandala 10300, Sri Lanka</p>
          <a href="tel:+94112619675" className="hover:text-paper">
            +94 11 261 9675
          </a>
          <a href="mailto:info@fetchseed.com" className="hover:text-paper">
            info@fetchseed.com
          </a>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <Link href="/company" className="hover:text-paper">
              Company
            </Link>
            <Link href="/services" className="hover:text-paper">
              Services
            </Link>
            <Link href="/innovations" className="hover:text-paper">
              Innovations
            </Link>
          </div>
        </div>

        <p className="eyebrow mt-10 text-muted-foreground/70">
          © {new Date().getFullYear()} Fetchseed Ltd · Technology · Intelligence · Growth
        </p>
      </div>
    </footer>
  );
}
