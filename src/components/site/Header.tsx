import { Link } from "@tanstack/react-router";
import { ArrowRight, Filter, Search, SlidersHorizontal, Sparkles, Wind, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { products } from "@/lib/products";

const nav = [
  { label: "Products", to: "/products" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

const filterIcons = [Wind, SlidersHorizontal, Filter, Layers, Sparkles];

export function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(64);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!headerRef.current) return;
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const matches = query
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : products;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 md:h-20 lg:h-22 xl:h-24 md:px-10 xl:max-w-[1600px] 2xl:max-w-[1760px]">
        {/* Left: AeroCore Logo */}
        <div className="flex items-center self-center">
          <Logo />
        </div>

        {/* Center: Textual Brand Title Lockup (Mobile & Desktop) */}
        <Link
          to="/"
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center transition-opacity hover:opacity-90"
          aria-label="AeroCore UAE home"
        >
          <span className="font-techno text-sm font-extrabold tracking-tight md:text-[17px] lg:text-[19px] xl:text-[20px]">
            <span className="text-brand">ΛERO</span>
            <span className="text-ink">CORE</span>
          </span>
          <span className="font-sans text-[7px] font-medium tracking-[0.20em] text-subtle uppercase md:text-[8px] md:tracking-[0.22em] lg:text-[9px] lg:tracking-[0.24em]">
            HVAC FILTERS &amp; PARTS
          </span>
        </Link>

        {/* Right: Desktop Navigation + Action Controls */}
        <div className="flex items-center gap-9">
          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to as any}
                className="micro font-medium text-ink/80 transition-colors duration-200 hover:text-brand"
                activeProps={{ className: "micro font-semibold text-brand" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Search products"
              onClick={() => setSearch((s) => !s)}
              className="text-ink/70 transition-all duration-200 hover:scale-105 hover:text-brand opacity-80 hover:opacity-100"
            >
              <Search className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-ink text-background transition-transform duration-300 hover:scale-105 active:scale-95 md:hidden"
            >
              <div className={`relative h-3.5 w-3.5 flex flex-col justify-center gap-1 transition-transform duration-300 ${open ? "rotate-90" : ""}`}>
                <span className={`block h-[1.5px] w-3.5 bg-background transition-all duration-300 ${open ? "translate-y-[2.75px] rotate-45" : ""}`} />
                <span className={`block h-[1.5px] w-3.5 bg-background transition-all duration-300 ${open ? "-translate-y-[2.75px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {search ? (
        <div className="border-t border-hairline bg-background">
          <div className="mx-auto max-w-[1240px] px-5 py-6 md:px-10">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search filters"
              className="w-full border-b border-hairline bg-transparent pb-3 text-lg font-display outline-none placeholder:text-subtle focus:border-brand"
            />
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {matches.map((p) => (
                <Link
                  key={p.slug}
                  to={"/products/$slug" as any}
                  params={{ slug: p.slug } as any}
                  onClick={() => setSearch(false)}
                  className="micro text-ink/70 hover:text-brand"
                >
                  {p.name}
                </Link>
              ))}
              {matches.length === 0 ? (
                <span className="micro text-subtle">No filters match</span>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      {open ? (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation drawer"
          style={{ top: `${headerHeight}px`, height: `calc(100vh - ${headerHeight}px)` }}
          className="fixed left-0 right-0 bottom-0 z-[9999] flex flex-col bg-background px-7 py-6 text-ink md:hidden overflow-y-auto border-t border-hairline shadow-2xl animate-in fade-in slide-in-from-top-3 duration-250 ease-out"
        >
          <div className="flex flex-1 flex-col justify-between pb-8">
            <div className="flex flex-col gap-1.5 pt-1">
              {[...nav, { label: "Resources", to: "/resources" as const }].map((item, idx) => {
                const numStr = `0${idx + 1}`;
                return (
                  <div
                    key={item.label}
                    className="animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards"
                    style={{ animationDelay: `${idx * 45}ms`, animationDuration: "200ms" }}
                  >
                    <Link
                      to={item.to as any}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-md border-l-2 border-transparent px-4 py-3.5 font-display text-[19px] font-medium text-ink transition-all duration-200 hover:border-brand hover:bg-brand/10 hover:text-brand active:bg-brand/20"
                      activeProps={{
                        className: "group flex items-center justify-between rounded-md border-l-2 border-brand bg-brand/10 px-4 py-3.5 font-display text-[19px] font-semibold text-brand"
                      }}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="micro-sm font-semibold text-subtle/50 transition-colors group-hover:text-brand/70">{numStr}</span>
                        <span className="tracking-wide">{item.label}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-brand transition-transform duration-200 ease-out group-hover:translate-x-1.5 group-active:translate-x-1.5" strokeWidth={1.8} />
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-hairline pt-6">
              <span className="micro px-4 font-semibold text-subtle/80 tracking-wider">OUR FILTERS</span>
              <div className="flex flex-col gap-1">
                {products.map((p, idx) => {
                  const IconComp = filterIcons[idx % filterIcons.length];
                  return (
                    <div
                      key={p.slug}
                      className="animate-in fade-in slide-in-from-bottom-2 fill-mode-backwards"
                      style={{ animationDelay: `${220 + idx * 30}ms`, animationDuration: "180ms" }}
                    >
                      <Link
                        to={"/products/$slug" as any}
                        params={{ slug: p.slug } as any}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-3 rounded-md px-4 py-2 text-xs leading-snug font-medium text-subtle transition-all duration-200 hover:bg-brand/10 hover:text-brand"
                        activeProps={{ className: "group flex items-center gap-3 rounded-md px-4 py-2 text-xs leading-snug font-semibold text-brand bg-brand/10" }}
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-band/60 text-subtle transition-colors group-hover:bg-brand/20 group-hover:text-brand">
                          <IconComp className="h-3 w-3" strokeWidth={1.5} />
                        </span>
                        <span>{p.name}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between px-4 border-t border-hairline pt-5">
                <div className="flex flex-col gap-0.5">
                  <span className="font-display text-xs font-extrabold tracking-tighter">
                    <span className="text-brand">AERO</span>
                    <span className="text-ink">CORE</span>
                    <span className="ml-1 text-ink font-bold">UAE</span>
                  </span>
                  <span className="micro-sm text-subtle/70">HVAC Air Filtration Solutions</span>
                </div>
                <span className="micro-sm font-medium text-brand/80">UAE / GCC</span>
              </div>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
