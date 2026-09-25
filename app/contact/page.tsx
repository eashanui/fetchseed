import { ContactForm } from "@/components/site/ContactForm";
import { Kinetic, Reveal } from "@/components/site/Motion";
import { Eyebrow } from "@/components/site/Ui";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="on-midnight relative overflow-hidden px-6 pb-28 pt-40 md:px-10 md:pb-40 md:pt-56">
        <div className="mx-auto max-w-[1400px]">
          <Eyebrow>Contact</Eyebrow>
          <Kinetic
            as="h1"
            text="Start with the constraint"
            className="display mt-8 max-w-[18ch] text-[13vw] md:text-[7vw]"
          />
          <Reveal delay={0.2} className="mt-10 max-w-xl">
            <p className="text-base leading-relaxed text-paper/70">
              Tell us what is slowing the organization down: cost, capacity, speed, compliance, or
              the next system that needs to work better.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-4">
            <Eyebrow>Make contact</Eyebrow>
            <Reveal delay={0.1} className="mt-8">
              <p className="display max-w-sm text-3xl md:text-4xl">
                Bring us the problem behind the brief.
              </p>
            </Reveal>
            <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
              <p>info@fetchseed.com</p>
              <p className="mt-2">+94 11 261 9675</p>
              <p className="mt-6 max-w-xs leading-relaxed">
                27 Gangarama Road, Thumbovila, Piliyandala 10300, Sri Lanka
              </p>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
