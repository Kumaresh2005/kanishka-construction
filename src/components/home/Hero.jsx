import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, PlayCircle, Star } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { company } from "../../data/company";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center overflow-hidden bg-brand-navy">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
          alt="Construction site with crane at sunset representing Kanishka Constructions projects"
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-brand-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/60 to-transparent" />
      </div>

      <Container className="relative pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 mb-6"
          >
            <span className="flex -space-x-1">
              {[1, 2, 3].map((i) => (
                <Star key={i} size={14} className="fill-brand-yellow text-brand-yellow" />
              ))}
            </span>
            <span className="text-white/90 text-xs md:text-sm font-medium">
              {company.yearsExperience}+ Years &middot; 15+ Projects Delivered Across Maharashtra
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-white leading-[1.08] text-balance"
          >
            Engineering Trust.
            <br />
            <span className="text-brand-yellow">Building Landmarks.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed"
          >
            Kanishka Constructions delivers premium residential, commercial,
            industrial and infrastructure projects — backed by {company.yearsExperience}+ years
            of engineering excellence, transparent processes and an unwavering commitment
            to quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <Button to="/contact" size="lg" icon={ArrowRight} className="w-full sm:w-auto">
              Get Free Consultation
            </Button>
            <Button
              href={`https://wa.me/${company.whatsapp.replace("+", "")}?text=${encodeURIComponent(
                "Hi Kanishka Constructions, I would like to enquire about your construction services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlineLight"
              size="lg"
              icon={MessageCircle}
              className="w-full sm:w-auto"
            >
              WhatsApp Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center gap-2.5 text-white group"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-brand-navy group-hover:scale-105 transition-transform">
                <Phone size={17} />
              </span>
              <span className="text-sm">
                <span className="block text-white/60 leading-none mb-0.5">Call us anytime</span>
                <span className="font-semibold">{company.phone}</span>
              </span>
            </a>
            <button
              type="button"
              className="flex items-center gap-2.5 text-white group"
              onClick={() =>
                document.getElementById("featured-projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 group-hover:bg-white/20 transition-colors">
                <PlayCircle size={18} />
              </span>
              <span className="text-sm font-semibold">See Our Work</span>
            </button>
          </motion.div>
        </div>
      </Container>

      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border-2 border-white/40 flex items-start justify-center p-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
        </motion.div>
      </div>
    </section>
  );
}
