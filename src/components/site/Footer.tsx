import { Link } from "@tanstack/react-router";
import { ArrowUp, Instagram, Linkedin, Youtube } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Products", to: "/products" as const },
  { label: "Solutions", to: "/solutions" as const },
  { label: "About", to: "/about" as const },
  { label: "Resources", to: "/resources" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-3.5">
          <Logo />
          <div className="flex flex-col">
            <span className="font-techno text-sm font-extrabold tracking-tight">
              <span className="text-brand">ΛERO</span>
              <span className="text-ink">CORE</span>
              <span className="ml-1 text-ink font-bold">UAE</span>
            </span>
            <span className="font-sans text-[7px] font-medium tracking-[0.20em] text-subtle uppercase">
              HVAC FILTERS &amp; PARTS
            </span>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <Link key={l.label} to={l.to as any} className="micro text-ink/70 hover:text-brand">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a href="https://linkedin.com" aria-label="LinkedIn" className="text-ink/60 hover:text-brand">
            <Linkedin className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="text-ink/60 hover:text-brand">
            <Instagram className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="text-ink/60 hover:text-brand">
            <Youtube className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-background"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-[1240px] px-5 pb-8 md:px-10">
        <p className="micro-sm text-subtle">
          © {new Date().getFullYear()} AeroCore UAE — Air Filtration Solutions
        </p>
      </div>
    </footer>
  );
}
