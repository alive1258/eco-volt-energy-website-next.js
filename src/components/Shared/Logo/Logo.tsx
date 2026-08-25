import { Zap } from "lucide-react";

/* ================= LOGO MARK (SVG) ================= */
/* A bolt-in-circle glyph — evokes clean power without needing an external
   asset. Reused as-is on both light (Navbar) and dark (Footer) backgrounds
   since the circle carries its own brand fill. */
export const LogoMark = ({ className = "w-9 h-9" }: { className?: string }) => (
  <span
    className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white ${className}`}
  >
    <Zap size={18} className="fill-current" />
  </span>
);

/* ================= LOGO (MARK + WORDMARK) ================= */
const SIZES = {
  sm: { icon: "w-8 h-8", text: "text-base", sub: "text-[9px]" },
  md: { icon: "w-10 h-10", text: "text-lg", sub: "text-[10px]" },
  lg: { icon: "w-12 h-12", text: "text-xl", sub: "text-[11px]" },
} as const;

interface LogoProps {
  variant?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
}

const Logo = ({ variant = "dark", size = "md", className = "" }: LogoProps) => {
  const { icon, text, sub } = SIZES[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={icon} />
      <span className="leading-tight">
        <span
          className={`block font-bold tracking-tight ${text} ${
            variant === "dark" ? "text-brand-900" : "text-white"
          }`}
        >
          EcoVolt
        </span>
        <span
          className={`block font-semibold uppercase tracking-[0.25em] ${sub} ${
            variant === "dark" ? "text-brand-600" : "text-brand-300"
          }`}
        >
          Energy
        </span>
      </span>
    </span>
  );
};

export default Logo;
