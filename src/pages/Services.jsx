import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Icon from "../components/ui/IconMap";
import { services } from "../data/services";
import { company } from "../data/company";

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          const y = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 120);
      }
    }
  }, [hash]);

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore Kanishka Constructions' full range of services: Residential, Commercial, Industrial, Welding & Metal Fabrication, Structural Steel, Renovation, Interior, Infrastructure and Engineering."
      />
      <PageHeader
        title="Our Construction Services"
        description="End-to-end construction solutions engineered for every sector, scale and budget."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Quick nav */}
      <div className="sticky top-[64px] md:top-[76px] z-30 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-soft">
        <Container>
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-3">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-brand-navy bg-brand-gray-light hover:bg-brand-yellow transition-colors whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 md:py-20 scroll-mt-32 ${idx % 2 === 0 ? "bg-white" : "bg-brand-gray-light"}`}
        >
          <Container>
            <div
              className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
                idx % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl overflow-hidden shadow-lift aspect-[4/3]"
              >
                <img
                  src={service.image}
                  alt={`${service.title} by Kanishka Constructions`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-yellow mb-5">
                  <Icon name={service.icon} size={22} />
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{service.title}</h2>
                <p className="text-brand-gray leading-relaxed mb-6">{service.description}</p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-brand-ink">
                      <CheckCircle2 size={17} className="text-brand-yellow shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button to="/contact" icon={ArrowRight}>
                    Get a Quote
                  </Button>
                  <Button href={`tel:${company.phoneRaw}`} variant="outline" icon={Phone}>
                    Talk to an Expert
                  </Button>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-16 bg-brand-navy text-center">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Our experts will assess your project and recommend the right approach — completely free of charge.
          </p>
          <Button to="/contact" size="lg" icon={ArrowRight}>
            Get Free Consultation
          </Button>
        </Container>
      </section>
    </>
  );
}
