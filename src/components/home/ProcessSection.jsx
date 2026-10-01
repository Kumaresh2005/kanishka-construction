import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/IconMap";
import { processSteps } from "../../data/company";

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-gray-light">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="How We Bring Your Project to Life"
          description="A proven, transparent six-stage process that keeps every project on time, on budget and to specification."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.08 }}
              className="relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <span className="absolute top-5 right-6 text-4xl font-extrabold text-brand-gray-light select-none">
                0{step.id}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-yellow mb-5">
                <Icon name={step.icon} size={22} />
              </span>
              <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
              <p className="text-sm text-brand-gray leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
