import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { company } from "../../data/company";

export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-20 bg-brand-yellow overflow-hidden">
      <div
        className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-2xl"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy text-balance mb-2">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-brand-navy/70 text-base md:text-lg max-w-xl">
            Get a free, no-obligation consultation with our construction experts today.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto"
        >
          <Button to="/contact" variant="secondary" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
            Request a Quote
          </Button>
          <Button
            href={`tel:${company.phoneRaw}`}
            variant="outline"
            size="lg"
            icon={Phone}
            className="w-full sm:w-auto border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
          >
            {company.phone}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
