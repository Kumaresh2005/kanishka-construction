import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "../components/ui/SocialIcons";
import SEO from "../components/ui/SEO";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import ContactForm from "../components/forms/ContactForm";
import QuoteForm from "../components/forms/QuoteForm";
import { company } from "../data/company";
import { cn } from "../utils/helpers";

const socialIcons = [
  { Icon: Facebook, href: company.social.facebook, label: "Facebook" },
  { Icon: Instagram, href: company.social.instagram, label: "Instagram" },
  { Icon: Linkedin, href: company.social.linkedin, label: "LinkedIn" },
  { Icon: Youtube, href: company.social.youtube, label: "YouTube" },
  { Icon: Twitter, href: company.social.twitter, label: "Twitter" },
];

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [company.phone],
    href: `tel:${company.phoneRaw}`,
    cta: "Tap to call",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: [company.phone],
    href: `https://wa.me/${company.whatsapp.replace("+", "")}?text=${encodeURIComponent(
      "Hi Kanishka Constructions, I would like to discuss a project with your team."
    )}`,
    cta: "Start a chat",
    external: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [company.email],
    href: `mailto:${company.email}`,
    cta: "Send an email",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [company.workingHours, "Sunday: Closed"],
  },
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState("quote");

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Kanishka Constructions Pvt. Ltd. in Nagpur. Call, WhatsApp, email or request a free construction quote for your project today."
      />
      <PageHeader
        title="Get In Touch"
        description="Have a project in mind? Our team is ready to help — reach out for a free consultation or quote."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact cards */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactCards.map((card, idx) => {
              const Wrapper = card.href ? "a" : "div";
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Wrapper
                    {...(card.href
                      ? {
                          href: card.href,
                          ...(card.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {}),
                        }
                      : {})}
                    className={cn(
                      "group block h-full text-center p-6 rounded-2xl border border-black/5 bg-white shadow-soft transition-all duration-300",
                      card.href && "hover:shadow-lift hover:-translate-y-1"
                    )}
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-yellow mb-4 group-hover:bg-brand-yellow group-hover:text-brand-navy transition-colors">
                      <card.icon size={21} />
                    </span>
                    <h3 className="text-base font-bold text-brand-navy mb-1.5">{card.title}</h3>
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-brand-gray break-words">
                        {line}
                      </p>
                    ))}
                    {card.cta && (
                      <p className="mt-3 text-xs font-semibold text-brand-blue-light">{card.cta}</p>
                    )}
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Forms + info */}
      <section className="py-14 md:py-20 bg-brand-gray-light">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Forms */}
            <div className="lg:col-span-3 min-w-0">
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-soft">
                <div
                  className="flex gap-2 p-1 bg-brand-gray-light rounded-xl mb-7"
                  role="tablist"
                  aria-label="Contact form options"
                >
                  <button
                    role="tab"
                    aria-selected={activeTab === "quote"}
                    onClick={() => setActiveTab("quote")}
                    className={cn(
                      "flex-1 min-w-0 px-2 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200",
                      activeTab === "quote"
                        ? "bg-brand-navy text-white shadow-soft"
                        : "text-brand-navy hover:bg-white"
                    )}
                  >
                    Request a Quote
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === "message"}
                    onClick={() => setActiveTab("message")}
                    className={cn(
                      "flex-1 min-w-0 px-2 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200",
                      activeTab === "message"
                        ? "bg-brand-navy text-white shadow-soft"
                        : "text-brand-navy hover:bg-white"
                    )}
                  >
                    Send a Message
                  </button>
                </div>

                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold text-brand-navy mb-1.5">
                    {activeTab === "quote" ? "Request a Free Quote" : "Send Us a Message"}
                  </h2>
                  <p className="text-sm text-brand-gray mb-6">
                    {activeTab === "quote"
                      ? "Share your project details and receive a no-obligation estimate within 48 hours."
                      : "Have a question? Fill in the form and our team will respond within 24 hours."}
                  </p>
                  {activeTab === "quote" ? <QuoteForm /> : <ContactForm />}
                </motion.div>
              </div>
            </div>

            {/* Office info */}
            <div className="lg:col-span-2 min-w-0 space-y-6">
              <div className="bg-brand-navy rounded-2xl p-6 md:p-7 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src="/company_logo.png"
                    alt="Kanishka Constructions Logo"
                    className="h-10 w-10 object-contain shrink-0"
                  />
                  <h3 className="text-lg font-bold">Head Office</h3>
                </div>
                <ul className="space-y-4 text-sm text-white/75">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-brand-yellow shrink-0 mt-0.5" />
                    <span>
                      {company.address.line1},<br />
                      {company.address.line2},<br />
                      {company.address.city}, {company.address.state} – {company.address.pin}
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={18} className="text-brand-yellow shrink-0" />
                    <a href={`tel:${company.phoneRaw}`} className="hover:text-white">
                      {company.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={18} className="text-brand-yellow shrink-0" />
                    <a href={`mailto:${company.email}`} className="hover:text-white break-all">
                      {company.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-brand-yellow shrink-0 mt-0.5" />
                    <span>{company.workingHours}</span>
                  </li>
                </ul>

                <hr className="my-6 border-white/10" />

                <p className="text-xs font-bold uppercase tracking-wider text-brand-yellow mb-3">
                  Follow Us
                </p>
                <div className="flex gap-2.5">
                  {socialIcons.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-brand-yellow hover:text-brand-navy transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-soft">
                <h3 className="text-base font-bold text-brand-navy mb-2">Careers Enquiries</h3>
                <p className="text-sm text-brand-gray mb-3">
                  Looking to join our team? Write to us directly.
                </p>
                <a
                  href={`mailto:${company.careersEmail}`}
                  className="text-sm font-semibold text-brand-blue-light hover:text-brand-navy break-all"
                >
                  {company.careersEmail}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section aria-label="Office location map">
        <div className="h-[340px] md:h-[440px] w-full bg-brand-gray-light">
          <iframe
            src={company.mapEmbedSrc}
            title={`${company.name} office location on Google Maps`}
            className="h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
