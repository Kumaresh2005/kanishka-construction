import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";
import { stats } from "../../data/company";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(value);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 md:py-20 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30" />
      <Container className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="text-center"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-yellow mb-1.5">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-xs sm:text-sm text-white/70 font-medium leading-snug">{stat.label}</p>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}
