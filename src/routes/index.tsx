import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Factory, HeartPulse, Hotel, Home as HomeIcon, Plus, Leaf, Settings, ShieldCheck, ChevronRight } from "lucide-react";
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
      {/* 01. Hero Section */}
      <section className="mx-auto max-w-[1240px] px-5 pt-2.5 pb-10 md:px-10 md:pt-12 md:pb-16 lg:max-w-[1360px] lg:pt-16 lg:pb-24 xl:max-w-[1600px] xl:pt-20 xl:pb-28 2xl:max-w-[1760px]">
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-24 items-start">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div>
              <Reveal delay={100}>
                <span className="micro font-medium text-brand xl:text-sm">Air Filtration</span>
              </Reveal>
              <Reveal delay={200}>
                <h1 className="mt-2.5 font-display font-medium text-[clamp(38px,10vw,46px)] leading-[1.04] tracking-[-0.035em] text-ink sm:text-[3.2rem] md:text-[3.8rem] md:leading-[1.02] lg:text-[clamp(4.2rem,5vw,5.4rem)] lg:leading-[1.01] xl:text-[clamp(5.2rem,5.6vw,6.5rem)] xl:leading-[0.99]">
                  <span className="block mb-1">Cleaner Air</span>
                  <span className="block mb-1 font-semibold">Engineered</span>
                  <span className="block">Better.</span>
                </h1>
              </Reveal>
              <Reveal delay={350}>
                <div className="mt-7 flex justify-center md:mt-10 md:justify-start lg:mt-10 xl:mt-12">
                  <ArrowButton to="/products" label="Explore Products" />
                </div>
              </Reveal>
            </div>
            <Reveal delay={450}>
              <p className="mt-8 mb-6 max-w-[18rem] text-sm leading-relaxed text-subtle md:mt-14 md:mb-0 md:max-w-[16rem] lg:mt-12 lg:max-w-[24rem] lg:text-base xl:mt-14 xl:max-w-[28rem] xl:text-lg">
                High-performance filtration solutions for cleaner and healthier environments.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col">
            <Reveal delay={250}>
              <div className="relative group md:pr-12">
                <div className="mx-auto w-[86%] sm:w-[88%] overflow-hidden rounded-sm bg-band/40 md:w-[90%] xl:w-full">
                  <img
                    src={heroFilter}
                    alt="Industrial panel filter with black frame and white pleated media"
                    width={1408}
                    height={1200}
                    className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="absolute right-0 top-4 hidden flex-col items-center gap-2.5 md:flex xl:-right-6">
                  <span className="block h-8 w-px bg-brand" />
                  <span className="micro-sm font-semibold text-brand">01</span>
                  <span className="block h-5 w-px bg-hairline" />
                  <span className="micro-sm text-subtle/60">02</span>
                  <span className="block h-5 w-px bg-hairline" />
                  <span className="micro-sm text-subtle/60">03</span>
                </div>

                <div className="mt-3 flex items-center justify-center gap-3 md:justify-end md:mt-2 xl:mt-4">
                  <span className="h-px w-8 bg-brand md:w-10 xl:w-14" />
                  <span className="micro-sm font-medium text-subtle text-center md:text-right xl:text-xs">
                    Industrial Panel Filter
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="mt-8 md:mt-12 border-t border-hairline xl:mt-16">
              {accordion.map((row, i) => (
                <div key={row.title} className="border-b border-hairline">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between py-3.5 text-left transition-colors hover:text-brand xl:py-4"
                  >
                    <span className="micro font-medium text-ink xl:text-xs">{row.title}</span>
                    <Plus
                      className={`h-3.5 w-3.5 text-ink/70 transition-transform duration-300 xl:h-4 xl:w-4 ${
                        open === i ? "rotate-45 text-brand" : ""
                      }`}
                      strokeWidth={1.5}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open === i ? "grid-rows-[1fr] pb-3.5 opacity-100 xl:pb-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-subtle text-left xl:text-base">
                      {row.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. Purer Air */}
      <section className="bg-band py-10 md:py-14 lg:pt-24 lg:pb-20 xl:py-32">
        <div className="mx-auto max-w-[1240px] px-5 md:px-10 lg:max-w-[1360px] xl:max-w-[1600px] 2xl:max-w-[1760px]">
          <Reveal className="text-center md:text-left">
            <SectionLabel>Purer Air</SectionLabel>
            <h2 className="mt-2.5 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl lg:mt-3 lg:text-[clamp(36px,3.5vw,48px)] lg:leading-[1.08] lg:tracking-[-0.035em] xl:text-5xl">
              For a healthier tomorrow
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mt-8 group md:mt-10 lg:mt-12 xl:mt-16">
              <div className="mx-auto w-full lg:w-[min(1280px,calc(100vw-120px))] xl:w-full">
                <img
                  src={layeredFilters}
                  alt="Ultra-sharp 5-stage filter media composition featuring carbon honeycomb, white pleated, metallic fin, fine mesh, and synthetic felt filters"
                  width={2400}
                  height={1350}
                  loading="lazy"
                  className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />
              </div>

              <div className="mt-6 grid gap-4 md:mt-4 lg:mt-8 lg:flex lg:justify-between lg:px-4 xl:mt-10">
                <Reveal delay={300}>
                  <div className="flex items-center justify-center gap-3 md:justify-start">
                    <span className="h-px w-8 bg-brand lg:w-12 xl:w-16" />
                    <span className="micro-sm font-medium text-subtle text-center md:text-left lg:text-[12px] lg:tracking-[0.14em] xl:text-xs xl:tracking-[0.18em]">
                      Traps dust and particles
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={400}>
                  <div className="flex items-center justify-center gap-3 md:justify-start">
                    <span className="micro-sm font-medium text-subtle text-center md:text-left lg:text-[12px] lg:tracking-[0.14em] xl:text-xs xl:tracking-[0.18em]">
                      Filters harmful contaminants
                    </span>
                    <span className="h-px w-8 bg-brand lg:w-12 xl:w-16" />
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03. Clean Air For Every Space Banner */}
      <section className="relative overflow-hidden">
        <img
          src={cleanAirBuilding}
          alt="Modern concrete and glass commercial building"
          width={1600}
          height={912}
          loading="lazy"
          className="h-[320px] w-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.02] md:h-[400px] lg:h-[460px] xl:h-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-transparent md:bg-gradient-to-r" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center items-center text-center md:items-start md:text-left px-5 md:px-10 lg:max-w-[1360px] lg:px-16 xl:max-w-[1600px] xl:px-20 2xl:max-w-[1760px]">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold leading-tight text-ink md:text-4xl lg:text-5xl xl:text-6xl">
                Clean Air
                <br />
                <span className="font-medium text-ink/80">For Every Space</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-6 flex justify-center md:justify-start lg:mt-8 xl:mt-10">
                <ArrowButton to="/solutions" label="See Solutions" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 03b. Applications Sector Bar */}
      <section className="border-b border-hairline bg-background lg:-mt-2 lg:pt-4 lg:pb-6 xl:pt-6 xl:pb-8">
        <div className="mx-auto max-w-[1240px] px-5 py-8 md:px-10 lg:max-w-[1360px] lg:py-6 xl:max-w-[1600px] 2xl:max-w-[1760px]">
          <div className="no-scrollbar flex overflow-x-auto gap-8 justify-between md:grid md:grid-cols-5 md:gap-4">
            {sectors.map(({ label, Icon }) => (
              <div
                key={label}
                className="group flex flex-col items-center text-center gap-2.5 min-w-[90px] shrink-0 cursor-pointer transition-all duration-300 xl:gap-3.5"
              >
                <Icon className="h-5 w-5 text-ink/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-ink lg:h-6 lg:w-6 xl:h-7 xl:w-7" strokeWidth={1.4} />
                <span className="micro-sm font-medium text-subtle transition-colors group-hover:text-ink lg:text-xs xl:text-sm">{label}</span>
                <span className="h-0.5 w-4 rounded-full bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100 xl:w-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Our Filters */}
      <section className="mx-auto max-w-[1240px] px-5 py-12 md:px-10 md:py-16 lg:max-w-[1360px] lg:px-12 lg:py-24 xl:max-w-[1600px] xl:py-32 2xl:max-w-[1760px]">
        <div className="flex flex-col items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
          <SectionLabel>Our Filters</SectionLabel>
          <div className="mt-2 flex items-center gap-2 md:mt-0 md:hidden">
            <span className="micro-sm text-subtle">{`0${activeProductIdx + 1} / 0${products.length}`}</span>
          </div>
        </div>

        <div
          onScroll={(e) => {
            const target = e.currentTarget;
            const idx = Math.round(target.scrollLeft / (target.scrollWidth / products.length));
            setActiveProductIdx(Math.min(idx, products.length - 1));
          }}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory overflow-x-auto gap-5 pb-4 md:mt-12 md:grid md:grid-cols-5 md:gap-6 lg:gap-8 md:pb-0 xl:mt-14"
        >
          {products.map((p, i) => (
            <div key={p.slug} className="w-[72vw] shrink-0 snap-start sm:w-[45vw] md:w-auto">
              <Reveal delay={i * 70}>
                <Link
                  to={"/products/$slug" as any}
                  params={{ slug: p.slug } as any}
                  className="group flex h-full flex-col rounded-sm border border-hairline/60 bg-background p-4 lg:p-5 xl:p-6 transition-all duration-400 ease-out hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-sm text-center md:text-left"
                >
                  <div className="relative aspect-square xl:aspect-[4/3] w-full overflow-hidden bg-band/30 p-2 lg:p-3 xl:p-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="mt-4 flex items-end justify-between gap-2 lg:mt-5 xl:mt-6">
                    <span className="micro font-medium whitespace-pre-line text-ink text-left lg:text-xs xl:text-sm">{p.shortName}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline transition-all duration-300 group-hover:border-brand group-hover:bg-brand lg:h-8 lg:w-8 xl:h-9 xl:w-9">
                      <ChevronRight className="h-3.5 w-3.5 text-ink/70 transition-colors group-hover:text-brand-foreground xl:h-4 xl:w-4" strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* 05. Why AeroCore */}
      <section className="relative border-b border-hairline bg-background">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-12 md:grid-cols-[1fr_0.9fr] md:px-10 md:py-16 lg:max-w-[1360px] lg:gap-14 lg:py-24 xl:max-w-[1600px] xl:gap-20 xl:py-32 2xl:max-w-[1760px]">
          <div className="text-center md:text-left">
            <Reveal>
              <SectionLabel>Why AeroCore</SectionLabel>
              <h3 className="mt-3 font-display text-2xl font-medium text-ink md:text-3xl lg:text-4xl xl:text-5xl">
                Engineered for maximum operational confidence
              </h3>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-6 lg:gap-5 xl:mt-8 xl:gap-6">
              {why.map(({ label, Icon, desc }, i) => (
                <Reveal key={label} delay={i * 100}>
                  <div className="flex flex-col items-center text-center gap-3 rounded-sm border border-hairline/80 bg-band/30 p-4 lg:p-6 xl:p-8 transition-all duration-300 hover:border-brand/40 hover:bg-background md:items-start md:text-left">
                    <Icon className="h-5 w-5 text-brand lg:h-7 lg:w-7 xl:h-8 xl:w-8" strokeWidth={1.5} />
                    <span className="micro font-semibold text-ink lg:text-sm lg:font-bold xl:text-base">{label}</span>
                    <p className="text-xs text-subtle leading-relaxed lg:text-[13px] xl:text-sm">{desc}</p>
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
                className="h-full max-h-[280px] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02] md:max-h-[340px] lg:max-h-[420px] xl:max-h-[480px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06. Technical Specifications & Data */}
      <section className="border-t border-hairline bg-background">
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-12 md:grid-cols-2 md:px-10 md:py-16 lg:max-w-[1360px] lg:gap-16 lg:py-24 xl:max-w-[1600px] xl:gap-20 xl:py-32 2xl:max-w-[1760px]">
          <div className="text-center md:text-left">
            <Reveal>
              <SectionLabel>Brochures &amp; Datasheets</SectionLabel>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl lg:text-4xl xl:text-5xl">
                Technical Specifications &amp; Data
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-subtle mx-auto md:mx-0 lg:max-w-md lg:text-base xl:max-w-lg xl:text-lg">
                Access our latest product brochures, test certificates and technical documents.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-6 flex justify-center md:justify-start lg:mt-8 xl:mt-10">
                <ArrowButton to="/resources" label="View Resources" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="group overflow-hidden rounded-sm lg:px-4">
              <img
                src={brochures}
                alt="AeroCore product brochures"
                width={1200}
                height={912}
                loading="lazy"
                className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 07. Built For A Cleaner Tomorrow Banner */}
      <section className="relative overflow-hidden">
        <img
          src={cleanerTomorrow}
          alt="Glass and steel high-rise facade at dusk"
          width={1600}
          height={800}
          loading="lazy"
          className="h-[320px] w-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.02] md:h-[380px] lg:h-[440px] xl:h-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center items-center text-center md:items-start md:text-left px-5 md:px-10 lg:max-w-[1360px] lg:px-16 xl:max-w-[1600px] xl:px-20 2xl:max-w-[1760px]">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold leading-tight text-background md:text-4xl lg:text-5xl xl:text-6xl">
                Built For
                <br />
                <span className="font-medium text-background/90">A Cleaner Tomorrow</span>
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-6 flex justify-center md:justify-start lg:mt-8 xl:mt-10">
                <ArrowButton to="/about" label="About AeroCore" tone="dark" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
