import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/IconMap";
import { services } from "../../data/services";

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive Construction Services"
          description="From concept to completion, we deliver end-to-end construction solutions tailored to every sector and scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (idx % 4) * 0.08 }}
            >
              <Link
                to={`/services#${service.id}`}
                className="group relative flex flex-col h-full rounded-2xl border border-black/5 bg-white p-6 shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-yellow mb-5 group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors duration-300">
                  <Icon name={service.icon} size={22} strokeWidth={2} />
                </span>
                <h3 className="text-lg font-bold text-brand-navy mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed mb-5 flex-1">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-light">
                  Learn More
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-blue-light transition-colors"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
