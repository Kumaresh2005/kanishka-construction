import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "../ui/SocialIcons";
import Container from "../ui/Container";
import { company } from "../../data/company";
import { services } from "../../data/services";

const socialIcons = [
  { Icon: Facebook, href: company.social.facebook, label: "Facebook" },
  { Icon: Instagram, href: company.social.instagram, label: "Instagram" },
  { Icon: Linkedin, href: company.social.linkedin, label: "LinkedIn" },
  { Icon: Youtube, href: company.social.youtube, label: "YouTube" },
  { Icon: Twitter, href: company.social.twitter, label: "Twitter" },
];

const quickLinks = [
  { label: "About Us", to: "/about" },
  { label: "Our Projects", to: "/projects" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white">
      <Container className="py-14 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-4 min-w-0">
          <Link to="/" className="flex items-center gap-3 mb-5 group" aria-label="Kanishka Constructions home">
            <img
              src="/company_logo.png"
              alt="Kanishka Constructions Logo"
              className="h-12 w-12 object-contain shrink-0 drop-shadow-md transition-transform duration-200 group-hover:scale-105"
            />
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight text-white">KANISHKA</span>
              <span className="block text-xs font-semibold tracking-[0.25em] uppercase text-brand-yellow">
                Constructions
              </span>
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
            Building trust through quality construction for over {company.yearsExperience} years.
            Residential, commercial, industrial and infrastructure projects delivered with
            precision across Maharashtra.
          </p>
          <div className="flex items-center gap-3">
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

        <div className="lg:col-span-2 min-w-0">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-yellow mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-white/70 hover:text-white flex items-center gap-1.5 group"
                >
                  <ArrowRight size={13} className="text-brand-yellow shrink-0 transition-transform group-hover:translate-x-1" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 min-w-0">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-yellow mb-5">
            Our Services
          </h3>
          <ul className="space-y-3">
            {services.slice(0, 7).map((s) => (
              <li key={s.id}>
                <Link
                  to={`/services#${s.id}`}
                  className="text-sm text-white/70 hover:text-white flex items-center gap-1.5 group"
                >
                  <ArrowRight size={13} className="text-brand-yellow shrink-0 transition-transform group-hover:translate-x-1" />
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/services"
                className="text-sm text-brand-yellow font-semibold hover:underline flex items-center gap-1.5 pt-1"
              >
                <ArrowRight size={13} />
                View All {services.length} Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 min-w-0">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-yellow mb-5">
            Contact Info
          </h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-yellow shrink-0 mt-0.5" />
              <span>
                {company.address.line1}, {company.address.line2},<br />
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
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50 text-center md:text-left">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <p>{company.registration}</p>
        </Container>
      </div>
    </footer>
  );
}
