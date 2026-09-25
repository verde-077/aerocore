import { useEffect, useState } from "react";

export function IntroCurtain() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    if (sessionStorage.getItem("aerocore-intro") === "seen") {
      setPhase("done");
      return;
    }
    setMounted(true);
    const t1 = setTimeout(() => setPhase("out"), 500);
    const t2 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("aerocore-intro", "seen");
    }, 900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!mounted || phase === "done") return null;

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        phase === "out" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        <span className="font-display text-xl font-semibold tracking-[0.22em] text-ink animate-fade-in">
          AEROCORE
        </span>
        <span className="mt-3 flex items-center gap-3">
          <span className="block h-px w-10 origin-left animate-[scale-in_0.7s_ease-out] bg-brand" />
          <span className="micro-sm text-subtle">UAE</span>
        </span>
      </div>
    </div>
  );
}
