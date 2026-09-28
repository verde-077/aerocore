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
  const bg = "bg-brand border-brand";
  const arrow = "text-white";
  const text = tone === "dark" ? "text-white font-medium" : "text-ink font-medium";

  return (
    <Link
      to={to as any}
      params={params as any}
      className="group inline-flex items-center gap-4"
    >
      <span
        className={`flex ${dimension} shrink-0 items-center justify-center rounded-full border ${bg} transition-all duration-300 ease-out group-hover:scale-[1.05] group-active:scale-[1.05] shadow-sm`}
      >
        <ArrowRight
          className={`h-4 w-4 ${arrow} transition-all duration-300 ease-out group-hover:translate-x-[3px] group-active:translate-x-[3px]`}
          strokeWidth={2}
        />
      </span>
      {label ? <span className={`micro ${text} transition-colors group-hover:text-brand`}>{label}</span> : null}
    </Link>
  );
}
