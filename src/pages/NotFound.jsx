import { motion } from "framer-motion";
import { Home, ArrowLeft, Phone, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/ui/SEO";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { company } from "../data/company";

const helpfulLinks = [
  { label: "Our Services", to: "/services" },
  { label: "Our Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Explore Kanishka Constructions' services, projects and careers instead."
      />
      <section className="relative min-h-[85vh] flex items-center bg-brand-navy overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/85 to-brand-navy" />
        </div>

        <Container className="relative text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[5.5rem] sm:text-[8rem] md:text-[10rem] font-extrabold leading-none text-brand-yellow"
          >
            404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white text-balance"
          >
            This Page Is Still Under Construction
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-white/70 max-w-lg mx-auto leading-relaxed"
          >
            The page you're looking for may have been moved, renamed or never existed.
            Let's get you back on solid ground.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button to="/" size="lg" icon={Home} iconPosition="left" className="w-full sm:w-auto">
              Back to Home
            </Button>
            <Button
              href={`tel:${company.phoneRaw}`}
              variant="outlineLight"
              size="lg"
              icon={Phone}
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Call Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-white/40 mb-4">
              <Search size={13} /> Popular Pages
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-white/10 border border-white/15 hover:bg-brand-yellow hover:text-brand-navy hover:border-brand-yellow transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
