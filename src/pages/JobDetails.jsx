import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Clock,
  Users,
  CalendarDays,
  CheckCircle2,
  ArrowLeft,
  Building2,
  IndianRupee,
} from "lucide-react";
import SEO from "../components/ui/SEO";
import Container from "../components/ui/Container";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import JobApplicationForm from "../components/careers/JobApplicationForm";
import JobCard from "../components/careers/JobCard";
import { getJobById, jobs } from "../data/jobs";
import { formatDate } from "../utils/helpers";
import NotFound from "./NotFound";

export default function JobDetails() {
  const { id } = useParams();
  const job = getJobById(id);

  if (!job) return <NotFound />;

  const relatedJobs = jobs
    .filter((j) => j.department === job.department && j.id !== job.id)
    .slice(0, 3);

  const meta = [
    { icon: MapPin, label: "Location", value: job.location },
    { icon: Briefcase, label: "Role Type", value: job.type },
    { icon: IndianRupee, label: "Stipend", value: job.stipend },
    { icon: Clock, label: "Experience", value: job.experience },
    { icon: CalendarDays, label: "Duration", value: job.duration || "3–6 Months" },
    { icon: Users, label: "Openings", value: `${job.openings} position${job.openings > 1 ? "s" : ""}` },
    { icon: Building2, label: "Department", value: job.department },
    { icon: CalendarDays, label: "Posted On", value: formatDate(job.postedDate) },
  ];

  return (
    <>
      <SEO
        title={`${job.title} — Careers`}
        description={`Apply for the ${job.title} (${job.stipend}) at Kanishka Constructions in ${job.location}. ${job.experience}. ${job.openings} opening(s) available.`}
      />

      <section className="relative bg-brand-navy pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/10 blur-3xl" />
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Careers", to: "/careers" }, { label: job.title }]} />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant="yellow">{job.department}</Badge>
            <Badge variant="outline">{job.type}</Badge>
            {job.isPaid ? (
              <Badge variant="success">Stipend: {job.stipend}</Badge>
            ) : (
              <Badge variant="outline">Unpaid Internship</Badge>
            )}
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance"
          >
            {job.title}
          </motion.h1>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <MapPin size={15} className="text-brand-yellow" /> {job.location}
            </span>
            <span className="flex items-center gap-2 font-medium text-white">
              <Clock size={15} className="text-brand-yellow" /> {job.experience}
            </span>
            <span className="flex items-center gap-2 font-medium text-brand-yellow">
              <IndianRupee size={15} className="text-brand-yellow" /> {job.stipend}
            </span>
            <span className="flex items-center gap-2">
              <Users size={15} className="text-brand-yellow" /> {job.openings} Opening
              {job.openings > 1 ? "s" : ""}
            </span>
          </div>

          <div className="mt-7">
            <Button
              href="#apply"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Apply Now
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 min-w-0">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">About the Role</h2>
              <p className="text-brand-gray leading-relaxed mb-10">{job.description}</p>

              <h2 className="text-2xl font-bold text-brand-navy mb-5">Key Responsibilities</h2>
              <ul className="space-y-3 mb-10">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-brand-ink/90">
                    <CheckCircle2 size={18} className="text-brand-yellow shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-brand-navy mb-5">Requirements</h2>
              <ul className="space-y-3 mb-10">
                {job.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-brand-ink/90">
                    <CheckCircle2 size={18} className="text-brand-yellow shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/careers"
                className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-blue-light transition-colors"
              >
                <ArrowLeft size={18} /> Back to All Openings
              </Link>
            </div>

            <aside className="min-w-0 space-y-6">
              <div className="bg-brand-gray-light rounded-2xl p-6 md:p-7 lg:sticky lg:top-28">
                <h3 className="text-lg font-bold text-brand-navy mb-5">Job Summary</h3>
                <ul className="space-y-4">
                  {meta.map((m) => (
                    <li key={m.label} className="flex items-start gap-3">
                      <m.icon size={18} className="text-brand-yellow-dark shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-brand-gray">{m.label}</p>
                        <p className="text-sm font-semibold text-brand-navy">{m.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Button
                  href="#apply"
                  className="w-full mt-6"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Apply for This Role
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20 bg-brand-gray-light scroll-mt-24" id="apply">
        <Container className="max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full text-brand-blue-light bg-brand-blue-50">
              Application Form
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-balance">
              Apply for {job.title}
            </h2>
            <p className="mt-3 text-brand-gray">
              Fill in your details below. Our HR team responds to every application within 7 working days.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-9 shadow-soft">
            <JobApplicationForm jobTitle={job.title} />
          </div>
        </Container>
      </section>

      {relatedJobs.length > 0 && (
        <section className="py-14 md:py-20 bg-white">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">
              Other Openings in {job.department}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedJobs.map((j, idx) => (
                <JobCard key={j.id} job={j} index={idx} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
