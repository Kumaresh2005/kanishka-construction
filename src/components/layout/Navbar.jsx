import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { company } from "../../data/company";
import { services } from "../../data/services";
import { cn } from "../../utils/helpers";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services", hasDropdown: true },
  { label: "Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0 group" aria-label="Kanishka Constructions home">
          <img
            src="/company_logo.png"
            alt="Kanishka Constructions Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="leading-tight">
            <span
              className={cn(
                "block text-base md:text-lg font-extrabold tracking-tight transition-colors",
                scrolled || mobileOpen ? "text-brand-navy" : "text-white"
              )}
            >
              KANISHKA
            </span>
            <span
              className={cn(
                "block text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase transition-colors",
                scrolled || mobileOpen ? "text-brand-blue-light" : "text-brand-yellow"
              )}
            >
              Constructions
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-1 px-4 py-2 rounded-md text-sm font-semibold transition-colors",
                      scrolled ? "text-brand-ink hover:text-brand-blue-light" : "text-white hover:text-brand-yellow",
                      isActive && (scrolled ? "text-brand-blue-light" : "text-brand-yellow")
                    )
                  }
                >
                  {link.label}
                  <ChevronDown size={14} className={cn("transition-transform", servicesOpen && "rotate-180")} />
                </NavLink>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px] max-w-[90vw]"
                    >
                      <div className="bg-white rounded-xl shadow-lift border border-black/5 p-4 grid grid-cols-2 gap-1">
                        {services.map((s) => (
                          <Link
                            key={s.id}
                            to={`/services#${s.id}`}
                            className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-brand-blue-50 transition-colors group"
                          >
                            <span className="mt-0.5 h-2 w-2 rounded-full bg-brand-yellow shrink-0 group-hover:scale-125 transition-transform" />
                            <span>
                              <span className="block text-sm font-semibold text-brand-navy">{s.title}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 rounded-md text-sm font-semibold transition-colors",
                    scrolled ? "text-brand-ink hover:text-brand-blue-light" : "text-white hover:text-brand-yellow",
                    isActive && (scrolled ? "text-brand-blue-light" : "text-brand-yellow")
                  )
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${company.phoneRaw}`}
            className={cn(
              "hidden xl:flex items-center gap-2 text-sm font-semibold whitespace-nowrap",
              scrolled ? "text-brand-navy" : "text-white"
            )}
          >
            <Phone size={16} className="text-brand-yellow" />
            {company.phone}
          </a>
          <Button to="/contact" size="sm" icon={undefined}>
            Get Free Quote
          </Button>
        </div>

        <button
          className={cn(
            "lg:hidden flex items-center justify-center h-10 w-10 rounded-md",
            scrolled || mobileOpen ? "text-brand-navy" : "text-white"
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-black/5"
          >
            <Container className="py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-3 rounded-lg text-base font-semibold text-brand-ink border-b border-black/5 last:border-none",
                      isActive && "text-brand-blue-light bg-brand-blue-50"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-brand-navy border-2 border-brand-navy rounded-lg py-3"
                >
                  <Phone size={16} /> Call {company.phone}
                </a>
                <Button to="/contact" fullWidthMobile={false} className="w-full">
                  Get Free Quote
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
