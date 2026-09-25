import { Kinetic, Reveal } from "@/components/site/Motion";
import { Cta, Eyebrow, Ghost } from "@/components/site/Ui";

const values = [
  {
    t: "Trust & Compliance",
    d: "A UK-registered parent, clean corporate structures, and subsidiaries incorporated properly the first time.",
  },
  {
    t: "Technical Depth",
    d: "Deep learning, computer vision, cloud and security practitioners — not account managers reselling capacity.",
  },
  {
    t: "Global-Local Delivery",
    d: "Governed to the standards of your head office, staffed and run by people who live in the market.",
  },
];

export function Company() {
  return (
    <>
      <section className="on-midnight relative overflow-hidden px-6 pb-28 pt-40 md:px-10 md:pb-40 md:pt-56">
        <div className="mx-auto max-w-[1400px]">
          <Eyebrow>Company</Eyebrow>
          <Kinetic
            as="h1"
            text="A consultancy engineered like a product"
            className="display mt-8 max-w-[18ch] text-[13vw] md:text-[7vw]"
          />
          <Reveal delay={0.2} className="mt-10 max-w-xl">
            <p className="text-base leading-relaxed text-paper/70">
              Fetchseed Ltd is registered in the United Kingdom and exists to make offshore
              capability boringly reliable — while the technology inside it stays anything but.
            </p>
          </Reveal>
        </div>
        <div className="pointer-events-none absolute -left-10 bottom-0 hidden md:block">
          <Ghost>01</Ghost>
        </div>
      </section>

      <section className="bg-background py-28 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="display text-3xl md:text-[2.6rem]">
                “We facilitate offshore services — captive and otherwise — and crowdsourced
                delivery.”
              </p>
            </Reveal>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              The mandate, in one line
            </p>
          </div>
          <div className="space-y-8 md:col-span-6 md:col-start-7">
            <Reveal y={40}>
              <p className="text-[0.975rem] leading-relaxed text-muted-foreground">
                Our partner-run cost and research centres sit across South Asia. Between them they
                cover deep learning, computer vision, large-scale software delivery, cloud
                engineering, IT security, legal process outsourcing and financial process
                outsourcing. Some clients use one team for one product. Others use us to stand up an
                entire R&D centre in Sri Lanka, incorporated under their own parent company's name.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[0.975rem] leading-relaxed text-muted-foreground">
                Alongside that, we run digital transformation and process improvement consulting for
                organizations that already have systems, people and constraints — where the work is
                modernizing what exists rather than starting from a blank repository.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="fuse rounded-lg border border-border bg-card p-8">
                <span className="eyebrow text-muted-foreground">Two engines</span>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="display text-xl">Offshore & R&D</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Captive subsidiaries, cost centres, crowdsourced delivery.
                    </p>
                  </div>
                  <div>
                    <h3 className="display text-xl text-green">Digital & Process</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Transformation programmes and measurable process improvement.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="on-midnight py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Eyebrow>What we hold to</Eyebrow>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.12} className={i === 1 ? "md:translate-y-10" : ""}>
                <div className="border-t border-border pt-8">
                  <h3 className="display text-2xl md:text-3xl">{v.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-20">
            <Cta to="/services">Explore the services</Cta>
          </Reveal>
        </div>
      </section>
    </>
  );
}
