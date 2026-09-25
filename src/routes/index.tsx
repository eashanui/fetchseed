import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CloudCog, Code2, FlaskConical, Globe2, Network, Workflow } from "lucide-react";
import { useRef } from "react";
import symbol from "@/assets/symbol.png";
import { ParticleMark } from "@/components/site/ParticleMark";
import { Kinetic, Reveal } from "@/components/site/Motion";
import { Cta, Eyebrow, Ghost } from "@/components/site/Ui";

const capabilities = [
  {
    title: "Digital Transformation",
    body: "Web, Mobile, Cloud, AI, Data Science and IoT — delivered as one architecture rather than six disconnected projects.",
    icon: Code2,
    accent: "ember",
  },
  {
    title: "Process Improvement",
    body: "Agile delivery discipline and measurable productivity gains across engineering and back-office operations.",
    icon: Workflow,
    accent: "green",
  },
  {
    title: "Innovation R&D",
    body: "Blockchain, Fintech, Robotics and machine-learning research run out of our own partner centres.",
    icon: FlaskConical,
    accent: "ember",
  },
  {
    title: "Network, Cloud & Security",
    body: "Corporate network, cloud and on-prem data centre design with IT security built in from day one.",
    icon: CloudCog,
    accent: "green",
  },
  {
    title: "Offshore Captive Services",
    body: "A wholly-owned subsidiary in Sri Lanka under your own name — incorporated, staffed and running.",
    icon: Globe2,
    accent: "ember",
  },
  {
    title: "Legal & Financial Process Outsourcing",
    body: "LPO and FPO capacity, from contract lifecycle work to accounting and bookkeeping.",
    icon: Network,
    accent: "green",
  },
];

const helps = [
  "Research centres",
  "Software application development",
  "Applications deployed in the cloud",
  "Incorporating deep learning",
  "Digital transformation",
  "Project management",
  "Legal process outsourcing",
  "Accounting & bookkeeping",
];

const flow = [
  {
    n: "01",
    t: "Organization issue or challenge",
    d: "We start with the constraint that actually hurts — cost, capacity, speed or compliance.",
  },
  {
    n: "02",
    t: "fetchseed consultation",
    d: "Engineers and operators map the problem against delivery, technology and location options.",
  },
  {
    n: "03",
    t: "Recommendation & solution",
    d: "A costed route: captive centre, crowdsourced delivery, transformation programme, or a blend.",
  },
  {
    n: "04",
    t: "Problem resolution",
    d: "We stand it up, run it in, and hand over an operation you own and can measure.",
  },
];

export function Home() {
  const calm = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const markOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ---------- HERO: the signature moment ---------- */}
      <section ref={heroRef} className="on-midnight relative min-h-[100svh] overflow-hidden">
        <div aria-hidden className="hero-dotfield pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 size-[min(42rem,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green/10"
        />
        <div className="pointer-events-none absolute left-6 top-28 hidden font-mono text-[0.6rem] uppercase tracking-[0.22em] text-paper/35 md:left-10 md:block">
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-green shadow-[0_0_12px_var(--green)]" />
            Systems online
          </p>
          <p className="mt-2 text-paper/20">FS / NETWORK_01</p>
        </div>
        <div className="pointer-events-none absolute right-6 top-28 hidden w-48 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-paper/35 md:right-10 md:block">
          <div className="flex justify-between border-b border-paper/10 pb-2">
            <span>Delivery nodes</span>
            <span className="text-ember">07</span>
          </div>
          <div className="mt-2 flex justify-between border-b border-paper/10 pb-2">
            <span>R&amp;D capacity</span>
            <span className="text-green">LK / LIVE</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span>Build state</span>
            <span className="text-paper/65">READY</span>
          </div>
        </div>
        <motion.div
          style={calm ? {} : { y: markY, opacity: markOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <ParticleMark className="h-[86vmin] w-[86vmin] md:h-[98vmin] md:w-[98vmin]" />
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(60% 50% at 50% 45%, transparent, var(--midnight) 85%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28">
          <motion.p
            className="eyebrow text-paper/60"
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.34em" }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Technology · Intelligence · Growth
          </motion.p>

          <Kinetic
            as="h1"
            text="Scale offshore. Build smarter."
            delay={0.35}
            className="display mt-6 max-w-[16ch] text-[15vw] md:text-[9.5vw] lg:text-[8.2vw] xl:text-[9rem]"
          />
          <Kinetic
            as="h1"
            text="Grow global."
            delay={0.85}
            className="display text-energy text-[15vw] md:text-[9.5vw] lg:text-[8.2vw] xl:text-[9rem]"
          />

          <div className="pointer-events-none absolute bottom-8 right-6 hidden font-mono text-[0.58rem] uppercase tracking-[0.16em] text-paper/25 md:right-10 md:block">
            <p>lat 06.9271° N</p>
            <p className="mt-1">lon 79.8612° E</p>
            <p className="mt-1 text-green/70">// build globally</p>
          </div>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.9} className="max-w-md">
              <p className="text-base leading-relaxed text-paper/70">
                Two engines, one company: wholly-owned offshore delivery and R&D centres in Sri
                Lanka, and digital transformation consulting for the systems you already run.
              </p>
            </Reveal>
            <Reveal delay={1.05} className="flex flex-wrap gap-3">
              <Cta to="/contact">Start a conversation</Cta>
              <Cta to="/services" variant="outline">
                See what we do
              </Cta>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- COMPANY INTRO ---------- */}
      <section className="relative overflow-hidden bg-background py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>The company</Eyebrow>
              <Reveal delay={0.1} className="mt-10">
                <p className="display text-4xl md:text-5xl">
                  Registered in the UK.
                  <br />
                  <span className="text-green">Rooted in South Asia.</span>
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Reveal y={40}>
                <p className="display text-[1.7rem] leading-[1.2] md:text-[2.3rem]">
                  Fetchseed Ltd. combines offshore service delivery, captive and non-captive, with
                  the flexibility of crowdsourced solutions.
                </p>
              </Reveal>
              <Reveal delay={0.15} className="mt-8 max-w-xl">
                <p className="text-[0.975rem] leading-relaxed text-muted-foreground">
                  Our partner-run cost and research centres across South Asia span deep learning,
                  computer vision, large-scale software delivery, cloud, IT security, legal process
                  outsourcing and financial process outsourcing. That means a client can buy a
                  single engineering squad or a fully incorporated subsidiary from the same
                  conversation.
                </p>
              </Reveal>
              <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["UK", "Registered entity"],
                  ["LK", "Delivery & R&D"],
                  ["7+", "Capability domains"],
                ].map(([k, v], i) => (
                  <Reveal key={k} delay={0.1 * i}>
                    <p className="display text-3xl md:text-4xl">{k}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{v}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-6 bottom-0 hidden md:block">
          <Ghost>Fetchseed</Ghost>
        </div>
      </section>

      {/* ---------- CAPABILITIES (asymmetric editorial) ---------- */}
      <section className="capability-section on-midnight relative overflow-hidden py-28 md:py-44">
        <img
          src={symbol.src}
          alt=""
          aria-hidden
          className="capability-symbol pointer-events-none absolute right-[-12vw] top-1/2 w-[62vw] max-w-[900px] -translate-y-1/2"
        />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="capability-heading border-t border-paper/15 pt-8 md:flex md:items-end md:justify-between">
            <div>
              <Eyebrow className="text-paper/60">Capabilities</Eyebrow>
              <Kinetic
                text="What we are good at"
                className="display mt-8 max-w-[14ch] text-5xl text-paper md:text-7xl"
              />
            </div>
            <Reveal delay={0.2} className="mt-8 max-w-xs md:mb-2 md:mt-0">
              <p className="text-sm leading-relaxed text-paper/60">
                The technical disciplines that turn difficult operating problems into systems people
                can rely on.
              </p>
            </Reveal>
          </div>

          <div className="f-capabilities mt-20 grid gap-x-14 gap-y-0 md:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal
                key={c.title}
                delay={(i % 3) * 0.08}
                y={i % 2 ? 24 : 12}
                className="f-capability"
              >
                <article
                  className={`capability-item capability-${c.accent} group relative border-t border-paper/15 py-10`}
                >
                  <div className="flex items-start gap-4">
                    <div className="capability-icon mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl border border-paper/20">
                      <c.icon aria-hidden className="size-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="display max-w-md text-xl text-paper transition-colors duration-500 md:text-2xl">
                        {c.title}
                      </h3>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/55">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WE HELP ORGANIZATIONS ---------- */}
      <section className="on-midnight py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>We help organizations</Eyebrow>
              <Kinetic
                text="with the work that has to actually ship"
                className="display mt-8 text-4xl md:text-5xl"
              />
            </div>
            <ul className="md:col-span-7 md:col-start-6">
              {helps.map((h, i) => (
                <Reveal key={h} delay={i * 0.05} x={18} y={0}>
                  <li className="group flex items-baseline gap-6 border-b border-border py-6">
                    <span className="eyebrow w-8 shrink-0 text-muted-foreground">{`0${i + 1}`}</span>
                    <span className="display text-xl transition-colors duration-500 group-hover:text-ember md:text-3xl">
                      {h}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- ENGAGEMENT FLOW ---------- */}
      <section className="relative bg-background py-28 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Eyebrow>How an engagement runs</Eyebrow>
          <Kinetic
            text="Four moves from problem to resolution"
            className="display mt-8 max-w-[20ch] text-4xl md:text-6xl"
          />

          <div className="process-line relative mt-20">
            <ol className="grid gap-12 md:grid-cols-4 md:gap-8">
              {flow.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.14}>
                  <li className="process-step relative pt-16">
                    <span className="absolute left-0 top-0 flex size-12 items-center justify-center rounded-full bg-background text-sm font-semibold ring-1 ring-border">
                      {s.n}
                    </span>
                    <h3 className="display mt-6 text-xl md:text-2xl">{s.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- CLOSING CTA ---------- */}
      <section className="bg-background pb-28 md:pb-40">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl bg-energy px-8 py-16 text-midnight md:px-16 md:py-24">
              <p className="eyebrow text-midnight/70">Next step</p>
              <h2 className="display mt-6 max-w-[22ch] text-4xl md:text-6xl">
                Ready to take your business offshore, or take it digital?
              </h2>
              <div className="mt-10">
                <Cta to="/contact" variant="solid">
                  Talk to Fetchseed
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
