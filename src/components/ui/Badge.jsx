import { cn } from "../../utils/helpers";

const styles = {
  yellow: "bg-brand-yellow text-brand-navy",
  navy: "bg-brand-navy text-white",
  outline: "border border-white/40 text-white bg-white/5 backdrop-blur-sm",
  success: "bg-emerald-100 text-emerald-700",
  progress: "bg-amber-100 text-amber-700",
  gray: "bg-brand-gray-light text-brand-ink",
};

export default function Badge({ children, variant = "yellow", className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
