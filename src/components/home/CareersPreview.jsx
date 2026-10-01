import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, TrendingUp } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { jobs } from "../../data/jobs";

const perks = [
  { icon: Briefcase, text: `${jobs.length}+ Open Positions` },
  { icon: Users, text: "140+ Team Members" },
  { icon: TrendingUp, text: "Real Career Growth" },
];

export default function CareersPreview() {
  return (
    <section className="py-16 md:py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />
      <Container className="relative grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full text-brand-yellow bg-white/10">
            Join Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight text-white text-balance mb-4">
            Build Your Career With Kanishka
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
            We're always looking for passionate engineers, architects and site professionals
            who want to build landmarks, not just careers. Explore current openings and
            grow with a company that invests in its people.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {perks.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Icon size={15} className="text-brand-yellow" />
                </span>
                {text}
              </div>
            ))}
          </div>
          <Button to="/careers" size="lg" icon={ArrowRight}>
            View Open Positions
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          {jobs.slice(0, 4).map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
            >
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm truncate">{job.title}</p>
                <p className="text-white/50 text-xs mt-0.5">{job.location} &middot; {job.type}</p>
              </div>
              <span className="shrink-0 text-xs font-semibold text-brand-navy bg-brand-yellow px-3 py-1.5 rounded-full">
                {job.openings} Open
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
