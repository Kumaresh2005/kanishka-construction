import { motion } from "framer-motion";
import { cn } from "../../utils/helpers";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}) {
  return (
    <div
      className={cn(
        "max-w-2xl mb-10 md:mb-14",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={cn(
            "inline-block text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full",
            light
              ? "text-brand-yellow bg-white/10"
              : "text-brand-blue-light bg-brand-blue-50"
          )}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={cn(
          "text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight text-balance",
          light ? "text-white" : "text-brand-navy"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-white/75" : "text-brand-gray"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
