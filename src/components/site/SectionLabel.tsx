export function SectionLabel({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-4 md:justify-start ${className}`}>
      <span className="block h-px w-6 bg-brand" />
      <span
        className={`micro ${tone === "dark" ? "text-brand-foreground/80" : "text-ink"}`}
      >
        {children}
      </span>
    </div>
  );
}

export function RedDash({ className = "" }: { className?: string }) {
  return <span className={`block h-px w-6 bg-brand ${className}`} />;
}
