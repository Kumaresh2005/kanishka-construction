import { motion } from "framer-motion";
import { Target, Eye, Award, CheckCircle2 } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessSection from "../components/home/ProcessSection";
import Button from "../components/ui/Button";
import { company, owner } from "../data/company";
import { ArrowRight, Phone, Mail, HardHat, ShieldCheck, Flame } from "lucide-react";

const values = [
  "Integrity in every commitment we make",
  "Safety as a non-negotiable standard",
  "Craftsmanship that stands the test of time",
  "Transparency with clients at every stage",
  "Innovation in materials and methods",
  "Respect for people, communities & environment",
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Kanishka Constructions Pvt. Ltd. — our story, mission, values and the leadership team driving construction excellence in Nagpur."
      />
      <PageHeader
        title="About Kanishka Constructions"
        description="Building trust, one landmark project at a time across Maharashtra."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lift aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80"
                alt="Kanishka Constructions office building"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden sm:flex items-center gap-4 absolute -bottom-8 -right-6 bg-brand-navy/95 backdrop-blur-sm border border-white/10 text-white rounded-2xl p-5 shadow-lift max-w-[260px]">
              <img
                src="/company_logo.png"
                alt="Kanishka Constructions Logo"
                className="h-12 w-12 object-contain shrink-0"
              />
              <div>
                <p className="text-2xl font-extrabold text-brand-yellow leading-tight">{company.yearsExperience}+ Years</p>
                <p className="text-xs text-white/70 mt-1">Engineering excellence in construction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full text-brand-blue-light bg-brand-blue-50">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-5 text-balance">
              From a Small Site Office to a Trusted Construction Leader
            </h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              Founded in {company.founded} in Nagpur, Kanishka Constructions Pvt. Ltd. began with a
              single residential project and an unwavering commitment to quality. Today, we are a
              full-service construction company delivering residential, commercial, industrial and
              infrastructure projects across Maharashtra.
            </p>
            <p className="text-brand-gray leading-relaxed mb-6">
              Our growth has been built on repeat business and referrals — a testament to the
              trust our clients place in our engineering rigor, transparent processes and
              on-time delivery record across {company.yearsExperience}+ years and 15+ completed projects.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {values.slice(0, 4).map((v) => (
                <li key={v} className="flex items-start gap-2.5 text-sm text-brand-ink">
                  <CheckCircle2 size={17} className="text-brand-yellow shrink-0 mt-0.5" />
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 md:py-24 bg-brand-gray-light">
        <Container>
          <SectionHeading
            eyebrow="What Drives Us"
            title="Our Mission, Vision & Values"
            description="The principles that guide every decision, every design and every day on-site."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To deliver construction projects that exceed expectations in quality, safety and timeliness — building lasting value for our clients and communities.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be Maharashtra's most trusted construction company, recognized for engineering excellence, integrity and innovation in every project we undertake.",
              },
              {
                icon: Award,
                title: "Our Values",
                text: "Integrity, safety, craftsmanship, transparency and respect — the non-negotiable standards behind every Kanishka project.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-7 shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-yellow mb-5">
                  <item.icon size={22} />
                </span>
                <h3 className="text-lg font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Stats />

      {/* Leadership & Founder Spotlight */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <Container>
          <SectionHeading
            eyebrow="Leadership & Hands-On Expertise"
            title="The Contractor Behind Kanishka"
            description="Direct leadership on-site and in the workshop, ensuring every project is delivered to the highest standards."
          />

          <div className="mt-12 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-black text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lift border border-brand-yellow/30 relative">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Owner Portrait */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-sm">
                  <div className="rounded-2xl overflow-hidden shadow-2xl bg-black border-2 border-brand-yellow/40 aspect-[4/5]">
                    <img
                      src={owner.image}
                      alt={owner.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.src = "/owner/owner.jpeg";
                      }}
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center">
                    <div>
                      <p className="text-base font-bold text-white flex items-center justify-center gap-1.5">
                        <ShieldCheck size={18} className="text-brand-yellow" />
                        {owner.name}
                      </p>
                      <p className="text-xs text-brand-yellow font-medium mt-0.5">{owner.title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Owner Bio & Highlights */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/30 mb-3">
                  <Flame size={13} /> Founder & Lead Contractor
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
                  {owner.name}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-brand-yellow mb-6">
                  {owner.title}
                </p>

                <div className="space-y-4 text-white/85 text-sm sm:text-base leading-relaxed">
                  {owner.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/15">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-yellow mb-3">
                    Core Capabilities & Project Execution
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {owner.specialties.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                        <CheckCircle2 size={15} className="text-brand-yellow shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button to="/contact" size="md" icon={ArrowRight}>
                    Get in Touch with Subrat
                  </Button>
                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow hover:text-white transition-colors py-2 px-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <Phone size={15} />
                    Call: {company.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <ProcessSection />

      <section className="py-14 bg-brand-navy text-center">
        <Container>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to Know More About Our Work?
          </h2>
          <Button to="/projects" size="lg" icon={ArrowRight}>
            Explore Our Projects
          </Button>
        </Container>
      </section>
    </>
  );
}
