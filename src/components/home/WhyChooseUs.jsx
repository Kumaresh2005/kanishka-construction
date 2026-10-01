import { motion } from "framer-motion";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/IconMap";
import { whyChooseUs } from "../../data/company";

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-2 min-w-0">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Built on Trust, Delivered with Precision"
              description="Two decades of construction excellence, backed by a team that treats every project like it's their own."
              align="left"
              className="mb-8 lg:mb-0 mx-0"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-lift aspect-[4/5] hidden lg:block">
              <img
                src="/kc_blueprint.png"
                alt="Kanishka Constructions engineers reviewing blueprints on site"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-3 min-w-0 grid sm:grid-cols-2 gap-5">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-5 rounded-2xl border border-black/5 hover:border-brand-yellow/40 hover:shadow-card transition-all duration-300"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-light mb-4">
                  <Icon name={item.icon} size={20} strokeWidth={2} />
                </span>
                <h3 className="text-base font-bold text-brand-navy mb-1.5">{item.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
