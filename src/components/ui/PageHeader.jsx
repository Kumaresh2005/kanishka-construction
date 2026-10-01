import { motion } from "framer-motion";
import Container from "./Container";
import Breadcrumbs from "./Breadcrumbs";

export default function PageHeader({ title, description, breadcrumbs = [] }) {
  return (
    <section className="relative bg-brand-navy pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand-blue-light/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <Breadcrumbs items={breadcrumbs} />
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
