import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Props = {
  to: ComponentProps<typeof Link>["to"];
  params?: Record<string, string>;
  label?: string;
  tone?: "light" | "dark";
  size?: "sm" | "md";
};

export function ArrowButton({ to, params, label, tone = "light", size = "md" }: Props) {
  const dimension = size === "sm" ? "h-8 w-8" : "h-11 w-11";
  const border = tone === "dark" ? "border-brand/80" : "border-brand/60";
  const arrow = tone === "dark" ? "text-brand-foreground" : "text-ink";
  const text = tone === "dark" ? "text-brand-foreground font-medium" : "text-ink font-medium";

  return (
    <Link
      to={to as any}
      params={params as any}
      className="group inline-flex items-center gap-4"
    >
      <span
        className={`flex ${dimension} shrink-0 items-center justify-center rounded-full border ${border} transition-all duration-300 ease-out group-hover:scale-[1.04] group-active:scale-[1.04] group-hover:bg-brand group-hover:border-brand`}
      >
        <ArrowRight
          className={`h-3.5 w-3.5 ${arrow} transition-all duration-300 ease-out group-hover:translate-x-[3px] group-active:translate-x-[3px] group-hover:text-brand-foreground`}
          strokeWidth={1.5}
        />
      </span>
      {label ? <span className={`micro ${text} transition-colors group-hover:text-brand`}>{label}</span> : null}
    </Link>
  );
}
