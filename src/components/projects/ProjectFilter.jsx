import { cn } from "../../utils/helpers";

export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2.5 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2",
            active === cat
              ? "bg-brand-navy text-white border-brand-navy shadow-soft"
              : "bg-white text-brand-navy border-black/10 hover:border-brand-yellow"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
