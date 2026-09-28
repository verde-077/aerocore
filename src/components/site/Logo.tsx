import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/aerocore-logo.jpg";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ tone = "light", className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-7 md:h-8",
    md: "h-9 md:h-11 lg:h-15 xl:h-16",
    lg: "h-11 md:h-14 lg:h-18",
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center justify-center transition-opacity hover:opacity-95 ${className}`}
      aria-label="AeroCore HVAC Filters & Parts home"
    >
      <div
        className={`inline-flex items-center justify-center rounded-sm transition-all ${tone === "dark" ? "bg-white p-1.5 shadow-sm" : ""
          }`}
      >
        <img
          src={logoImg}
          alt="AeroCore HVAC Filters & Parts"
          className={`w-auto ${sizeClasses[size]} object-contain object-center`}
          loading="eager"
        />
      </div>
    </Link>
  );
}
