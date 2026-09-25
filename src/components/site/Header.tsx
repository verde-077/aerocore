import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { products } from "@/lib/products";

const nav = [
  { label: "Products", to: "/products" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const matches = query
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    : products;

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 md:h-20 md:px-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:top-auto md:left-auto md:translate-x-0 md:translate-y-0">
          <Logo />
        </div>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="micro font-medium text-ink/80 transition-colors duration-200 hover:text-brand"
              activeProps={{ className: "micro font-semibold text-brand" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4 md:ml-0">
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
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-ink text-background transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <div className={`relative h-3.5 w-3.5 flex flex-col justify-center gap-1 transition-transform duration-300 ${open ? "rotate-90" : ""}`}>
              <span className={`block h-[1.5px] w-3.5 bg-background transition-all duration-300 ${open ? "translate-y-[2.75px] rotate-45" : ""}`} />
              <span className={`block h-[1.5px] w-3.5 bg-background transition-all duration-300 ${open ? "-translate-y-[2.75px] -rotate-45" : ""}`} />
            </div>
          </button>
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
                  to="/products/$slug"
                  params={{ slug: p.slug }}
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
        <div className="fixed inset-0 z-50 flex flex-col bg-ink px-6 py-6 text-background md:px-10">
          <div className="flex items-center justify-between">
            <Logo tone="dark" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-background/30"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="mt-16 flex flex-1 flex-col gap-8 md:mt-24 md:flex-row md:gap-24">
            <nav className="flex flex-col gap-5">
              {[...nav, { label: "Resources", to: "/resources" as const }].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-background/90 transition-colors hover:text-brand md:text-4xl"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4">
              <span className="micro text-background/50">Our Filters</span>
              {products.map((p) => (
                <Link
                  key={p.slug}
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  onClick={() => setOpen(false)}
                  className="micro text-background/80 transition-colors hover:text-brand"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
