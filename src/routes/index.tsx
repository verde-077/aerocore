import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Factory, HeartPulse, Hotel, Home as HomeIcon, Play, Plus, Leaf, Settings, ShieldCheck, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ArrowButton } from "@/components/site/ArrowButton";
import { SectionLabel } from "@/components/site/SectionLabel";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/lib/products";

import heroFilter from "@/assets/hero-panel-filter.jpg";
import layeredFilters from "@/assets/layered-filters.jpg";
import cleanAirBuilding from "@/assets/clean-air-building.jpg";
import filtrationTrust from "@/assets/filtration-trust.jpg";
import concreteWall from "@/assets/concrete-filter-wall.jpg";
import brochures from "@/assets/brochures.jpg";
import cleanerTomorrow from "@/assets/cleaner-tomorrow.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AeroCore UAE — Cleaner Air, Engineered Better" },
      {
        name: "description",
        content:
          "High-performance air filtration solutions for commercial, healthcare, industrial, hospitality and residential environments across the UAE.",
      },
      { property: "og:title", content: "AeroCore UAE — Cleaner Air, Engineered Better" },
      {
        property: "og:description",
        content:
          "Panel, pocket, HEPA, carbon and fine filters engineered for cleaner, healthier environments.",
      },
    ],
  }),
  component: Home,
});

const accordion = [
  {
    title: "Cleaner Environments",
    body: "Multi-stage filtration removes dust, pollen and fine particulate before it reaches occupied spaces.",
  },
  {
    title: "Higher Efficiency",
    body: "Low pressure drop media keeps air handling units running efficiently and reduces energy consumption.",
  },
  {
    title: "Wide Applications",
    body: "From commercial towers to hospitals, factories, hotels and homes across the region.",
  },
  {
    title: "Engineered Quality",
    body: "Tested frames, sealed media packs and consistent performance over the full service life.",
  },
];

const sectors = [
  { label: "Commercial", Icon: Building2 },
  { label: "Healthcare", Icon: HeartPulse },
  { label: "Industrial", Icon: Factory },
  { label: "Hospitality", Icon: Hotel },
  { label: "Residential", Icon: HomeIcon },
];

const why = [
  {
    label: "Quality",
    Icon: ShieldCheck,
    desc: "Rigorous testing & certified media performance.",
  },
  {
    label: "Performance",
    Icon: Settings,
    desc: "Low pressure drop for high energy efficiency.",
  },
  {
    label: "Reliability",
    Icon: Leaf,
    desc: "Consistent protection & extended service lifespan.",
  },
];

function Home() {
  const [open, setOpen] = useState<number | null>(0);
  const [activeProductIdx, setActiveProductIdx] = useState(0);

  return (
    <main>
      {/* 02 + 03 — Hero and hero information list */}
      <section className="mx-auto max-w-[1240px] px-5 pt-2.5 pb-10 md:px-10 md:pt-12 md:pb-16">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div>
              <Reveal delay={100}>
                <span className="micro font-medium text-brand">Air Filtration</span>
              </Reveal>
              <Reveal delay={200}>
                <h1 className="mt-2.5 font-display text-[clamp(40px,11vw,48px)] font-medium leading-[1.04] tracking-[-0.04em] text-ink sm:text-[3.4rem] md:text-[4rem] md:leading-[1.02] lg:text-[4.4rem]">
                  <span className="block mb-1">Cleaner Air</span>
                  <span className="block mb-1 font-semibold">Engineered</span>
                  <span className="block">Better.</span>
                </h1>
              </Reveal>
              <Reveal delay={350}>
                <div className="mt-7 flex justify-center md:mt-10 md:justify-start">
                  <ArrowButton to="/products" label="Explore Products" />
                </div>
              </Reveal>
            </div>
            <Reveal delay={450}>
              <p className="mt-8 mb-6 max-w-[18rem] text-sm leading-relaxed text-subtle md:mt-14 md:mb-0 md:max-w-[16rem]">
                High-performance filtration solutions for cleaner and healthier environments.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col">
            <Reveal delay={250}>
              <div className="relative group md:pr-12">
                <div className="mx-auto w-[86%] sm:w-[88%] overflow-hidden rounded-sm bg-band/40 md:w-[90%]">
                  <img
                    src={heroFilter}
                    alt="Industrial panel filter with black frame and white pleated media"
                    width={1408}
                    height={1200}
                    className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <button
                  type="button"
                  aria-label="Play product film"
                  className="absolute left-1/2 top-1/2 flex h-13 w-13 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/95 shadow-md backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-background md:h-14 md:w-14 md:left-[46%]"
                >
                  <Play className="h-4 w-4 text-ink transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />
                </button>

                {/* Red measure ticks hero progress indicator */}
                <div className="absolute right-0 top-4 hidden flex-col items-center gap-2.5 md:flex">
                  <span className="block h-8 w-px bg-brand" />
                  <span className="micro-sm font-semibold text-brand">01</span>
                  <span className="block h-5 w-px bg-hairline" />
                  <span className="micro-sm text-subtle/60">02</span>
                  <span className="block h-5 w-px bg-hairline" />
                  <span className="micro-sm text-subtle/60">03</span>
                </div>

                {/* Product annotation line visually connected to product edge */}
                <div className="mt-3 flex items-center justify-center gap-3 md:justify-end md:mt-2">
                  <span className="h-px w-8 bg-brand md:w-10" />
                  <span className="micro-sm font-medium text-subtle text-center md:text-right">
                    Industrial Panel Filter
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Accordion feature rows under product */}
            <div className="mt-8 md:mt-12 border-t border-hairline">
              {accordion.map((row, i) => (
                <div key={row.title} className="border-b border-hairline">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between py-3.5 text-left transition-colors hover:text-brand"
                  >
                    <span className="micro font-medium text-ink">{row.title}</span>
                    <Plus
                      className={`h-3.5 w-3.5 text-ink/70 transition-transform duration-300 ${
                        open === i ? "rotate-45 text-brand" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open === i ? "grid-rows-[1fr] pb-3.5 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-subtle text-left">
                      {row.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Purer Air */}
      <section className="bg-band py-10 md:py-14 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10 lg:max-w-[1360px]">
          <Reveal className="text-center md:text-left">
            <SectionLabel>Purer Air</SectionLabel>
            <h2 className="mt-2.5 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl lg:mt-3 lg:text-[clamp(36px,3.5vw,48px)] lg:leading-[1.08] lg:tracking-[-0.035em]">
              For a healthier tomorrow
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mt-8 group md:mt-10">
              <div className="mx-auto w-full lg:w-[min(1280px,calc(100vw-120px))]">
                <img
                  src={layeredFilters}
                  alt="Ultra-sharp 5-stage filter media composition featuring carbon honeycomb, white pleated, metallic fin, fine mesh, and synthetic felt filters"
                  width={2400}
                  height={1350}
                  loading="lazy"
                  className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />
              </div>

              {/* Callout Annotations */}
              <div className="mt-6 grid gap-4 md:mt-0">
                <Reveal delay={300} className="md:absolute md:left-2 md:top-1/2 md:-translate-y-1/2 lg:left-6">
                  <div className="flex items-center justify-center gap-3 md:justify-start">
                    <span className="micro-sm font-medium text-subtle text-center md:text-left lg:text-[11px] lg:tracking-[0.14em]">
                      Traps dust
                      <br className="hidden md:block" /> and particles
                    </span>
                    <span className="hidden h-px w-8 bg-brand md:block lg:w-12" />
                  </div>
                </Reveal>
                <Reveal delay={400} className="md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 lg:right-6">
                  <div className="flex items-center justify-center gap-3 md:justify-start">
                    <span className="hidden h-px w-8 bg-brand md:block lg:w-12" />
                    <span className="micro-sm font-medium text-subtle text-center md:text-left lg:text-[11px] lg:tracking-[0.14em]">
                      Filters harmful
                      <br className="hidden md:block" /> contaminants
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 — Clean Air For Every Space */}
      <section className="relative overflow-hidden">
        <img
          src={cleanAirBuilding}
          alt="Modern concrete and glass commercial building"
          width={1600}
          height={912}
          loading="lazy"
          className="h-[320px] w-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.02] md:h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-transparent md:bg-gradient-to-r" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center items-center text-center md:items-start md:text-left px-5 md:px-10">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold leading-tight text-ink md:text-4xl">
                Clean Air
                <br />
                <span className="font-medium text-ink/80">For Every Space</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-6 flex justify-center md:justify-start">
                <ArrowButton to="/solutions" label="See Solutions" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 — Applications */}
      <section className="border-b border-hairline bg-background">
        <div className="mx-auto max-w-[1240px] px-5 py-8 md:px-10">
          <div className="no-scrollbar flex overflow-x-auto gap-8 justify-between md:grid md:grid-cols-5 md:gap-4">
            {sectors.map(({ label, Icon }) => (
              <div
                key={label}
                className="group flex flex-col items-center text-center gap-2.5 min-w-[90px] shrink-0 cursor-pointer transition-all duration-300"
              >
                <Icon className="h-5 w-5 text-ink/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-ink" strokeWidth={1.4} />
                <span className="micro-sm font-medium text-subtle transition-colors group-hover:text-ink">{label}</span>
                <span className="h-0.5 w-4 rounded-full bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Our Filters */}
      <section className="mx-auto max-w-[1240px] px-5 py-12 md:px-10 md:py-16">
        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
          <SectionLabel>Our Filters</SectionLabel>
          <div className="mt-2 flex items-center gap-2 md:mt-0 md:hidden">
            <span className="micro-sm text-subtle">{`0${activeProductIdx + 1} / 0${products.length}`}</span>
          </div>
        </div>

        {/* Mobile Horizontal Carousel + Desktop Grid */}
        <div
          onScroll={(e) => {
            const target = e.currentTarget;
            const idx = Math.round(target.scrollLeft / (target.scrollWidth / products.length));
            setActiveProductIdx(Math.min(idx, products.length - 1));
          }}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory overflow-x-auto gap-5 pb-4 md:mt-12 md:grid md:grid-cols-5 md:gap-8 md:pb-0"
        >
          {products.map((p, i) => (
            <div key={p.slug} className="w-[72vw] shrink-0 snap-start sm:w-[45vw] md:w-auto">
              <Reveal delay={i * 70}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col rounded-sm border border-hairline/60 bg-background p-4 transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-sm text-center md:text-left"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-band/30 p-2">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-2">
                    <span className="micro font-medium whitespace-pre-line text-ink text-left">{p.shortName}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline transition-all duration-300 group-hover:border-brand group-hover:bg-brand">
                      <ChevronRight className="h-3.5 w-3.5 text-ink/70 transition-colors group-hover:text-brand-foreground" strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* 08 — Filtration You Can Trust (Quality) */}
      <section className="relative overflow-hidden bg-ink">
        <div className="pointer-events-none absolute inset-0 opacity-15 animate-airflow bg-gradient-to-r from-transparent via-white/40 to-transparent w-[200%]" />
        <img
          src={filtrationTrust}
          alt="Air filter with airflow streaks"
          width={1600}
          height={800}
          loading="lazy"
          className="h-[320px] w-full object-cover opacity-90 transition-transform duration-1000 ease-out hover:scale-[1.02] md:h-[400px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-transparent" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center items-center text-center md:items-start md:text-left px-5 md:px-10">
            <Reveal>
              <SectionLabel tone="dark" className="mb-4">
                Quality Standard
              </SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-2xl font-medium leading-tight text-background md:text-4xl">
                Filtration
                <br />
                <span className="font-semibold text-background">You Can Trust</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 flex justify-center md:justify-start">
                <ArrowButton to="/about" label="Our Quality" tone="dark" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09 — Why AeroCore */}
      <section className="relative border-b border-hairline bg-background">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-12 md:grid-cols-[1fr_0.9fr] md:px-10 md:py-16">
          <div className="text-center md:text-left">
            <Reveal>
              <SectionLabel>Why AeroCore</SectionLabel>
              <h3 className="mt-3 font-display text-2xl font-medium text-ink md:text-3xl">
                Engineered for maximum operational confidence
              </h3>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {why.map(({ label, Icon, desc }, i) => (
                <Reveal key={label} delay={i * 100}>
                  <div className="flex flex-col items-center text-center gap-3 rounded-sm border border-hairline/80 bg-band/30 p-4 transition-all duration-300 hover:border-brand/40 hover:bg-background md:items-start md:text-left">
                    <Icon className="h-5 w-5 text-brand" strokeWidth={1.5} />
                    <span className="micro font-semibold text-ink">{label}</span>
                    <p className="text-xs text-subtle leading-relaxed">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={200}>
            <div className="overflow-hidden rounded-sm border border-hairline">
              <img
                src={concreteWall}
                alt="Filter bank mounted on a concrete plant room wall"
                width={1600}
                height={912}
                loading="lazy"
                className="h-full max-h-[280px] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02] md:max-h-[340px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10 — Brochures & Datasheets */}
      <section className="border-t border-hairline bg-background">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-12 md:grid-cols-2 md:px-10 md:py-16">
          <div className="text-center md:text-left">
            <Reveal>
              <SectionLabel>Brochures &amp; Datasheets</SectionLabel>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                Technical Specifications &amp; Data
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-subtle mx-auto md:mx-0">
                Access our latest product brochures, test certificates and technical documents.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-6 flex justify-center md:justify-start">
                <ArrowButton to="/resources" label="View Resources" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="group overflow-hidden rounded-sm">
              <img
                src={brochures}
                alt="AeroCore product brochures"
                width={1200}
                height={912}
                loading="lazy"
                className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11 — Built For A Cleaner Tomorrow */}
      <section className="relative overflow-hidden">
        <img
          src={cleanerTomorrow}
          alt="Glass and steel high-rise facade at dusk"
          width={1600}
          height={800}
          loading="lazy"
          className="h-[320px] w-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.02] md:h-[380px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center items-center text-center md:items-start md:text-left px-5 md:px-10">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold leading-tight text-background md:text-4xl">
                Built For
                <br />
                <span className="font-medium text-background/90">A Cleaner Tomorrow</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-6 flex justify-center md:justify-start">
                <ArrowButton to="/about" label="About AeroCore" tone="dark" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

