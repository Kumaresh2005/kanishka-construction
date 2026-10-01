import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-brand-gray">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="flex items-center gap-1 hover:text-brand-yellow transition-colors">
            <Home size={14} />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight size={14} className="opacity-60" />
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1.5">
            {item.to ? (
              <Link to={item.to} className="hover:text-brand-yellow transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white font-medium">{item.label}</span>
            )}
            {idx < items.length - 1 && <ChevronRight size={14} className="opacity-60" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
