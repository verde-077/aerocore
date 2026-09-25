import { Link } from "@tanstack/react-router";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const color = tone === "dark" ? "text-brand-foreground" : "text-ink";
  return (
    <Link to="/" className={`inline-block ${color}`} aria-label="AeroCore UAE home">
      <span className="font-display text-base font-semibold tracking-[0.16em]">
        AEROCORE
      </span>
      <span className="mt-1 flex items-center gap-2">
        <span className="block h-px w-8 bg-current opacity-40" />
        <span className="micro-sm opacity-70">UAE</span>
      </span>
    </Link>
  );
}
