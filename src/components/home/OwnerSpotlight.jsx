import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Phone, Mail, ArrowRight, ShieldCheck, Flame, HardHat } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { owner, company } from "../../data/company";

export default function OwnerSpotlight() {
  return (
    <section className="py-16 md:py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-light/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Owner Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative glow / border */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-brand-yellow/40 via-white/10 to-brand-yellow/20 blur-sm opacity-70" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-brand-black border-2 border-brand-yellow/40 aspect-[4/5]">
                <img
                  src={owner.image}
                  alt={owner.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback to alternative path if needed
                    e.currentTarget.src = "/owner/owner.jpeg";
                  }}
                />
                
                {/* Gradient overlay for bottom badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />

                {/* Floating experience badge inside card */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-navy/90 backdrop-blur-md rounded-xl p-3 border border-white/15 shadow-lift flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white flex items-center gap-1.5">
                      <ShieldCheck size={16} className="text-brand-yellow" />
                      {owner.name}
                    </p>
                    <p className="text-xs text-brand-yellow font-medium">{owner.title}</p>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30">
                    Lead Contractor
                  </span>
                </div>
              </div>

              {/* Direct call banner below photo */}
              <div className="mt-4 flex items-center justify-center gap-4 text-xs sm:text-sm text-white/80 bg-white/5 border border-white/10 rounded-xl py-2.5 px-4">
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="inline-flex items-center gap-1.5 hover:text-brand-yellow transition-colors font-medium"
                >
                  <Phone size={14} className="text-brand-yellow" />
                  {company.phone}
                </a>
                <span className="text-white/30">|</span>
                <span className="inline-flex items-center gap-1.5 text-brand-yellow font-medium">
                  <HardHat size={14} /> On-Site Supervision
                </span>
              </div>
            </div>
          </motion.div>

          {/* Owner Narrative & Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 mb-4">
              <Flame size={13} className="text-brand-yellow" />
              Leadership & Hands-On Execution
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
              {owner.name}
            </h2>
            <p className="text-lg sm:text-xl font-semibold text-brand-yellow mb-6">
              {owner.title}
            </p>

            {/* Description paragraphs */}
            <div className="space-y-4 text-white/85 text-sm sm:text-base leading-relaxed">
              {owner.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key specialties grid */}
            <div className="mt-7 pt-6 border-t border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-yellow mb-3">
                Key Areas of Expertise & Project Execution
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {owner.specialties.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 size={16} className="text-brand-yellow shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact" size="lg" icon={ArrowRight}>
                Consult With Subrat Sarkar
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-brand-navy"
              >
                View Services & Capabilities
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
