import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, HeartHandshake, TrendingUp } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import JobCard from "../components/careers/JobCard";
import JobApplicationForm from "../components/careers/JobApplicationForm";
import { jobs, departments, jobTypes } from "../data/jobs";

const perks = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Structured learning path with potential for full-time pre-placement offers (PPO) upon completion.",
  },
  {
    icon: HeartHandshake,
    title: "Live Site Exposure",
    description: "Hands-on experience on real construction sites, structural works, and active client projects.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship by Experts",
    description: "Daily guidance from senior civil engineers, project managers, and lead architects.",
  },
  {
    icon: Briefcase,
    title: "Valuable Credentials",
    description: "Internship certificate, letter of recommendation (LOR), and real project portfolio entries.",
  },
];

export default function Careers() {
  const [deptFilter, setDeptFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const filteredJobs = useMemo(() => {
    return jobs.filter((j) => {
      const deptMatch = deptFilter === "All" || j.department === deptFilter;
      const typeMatch = typeFilter === "All" || j.type === typeFilter;
      return deptMatch && typeMatch;
    });
  }, [deptFilter, typeFilter]);

  return (
    <>
      <SEO
        title="Careers & Civil Engineering Internships | Kanishka Constructions"
        description="Explore civil engineering, architectural, site supervisor, and welding job opportunities and internships at Kanishka Constructions across Maharashtra."
        keywords="construction jobs Gadchiroli, civil engineering internships Nagpur, AutoCAD jobs Maharashtra, site supervisor jobs, Kanishka constructions careers"
        canonical="/careers"
      />
      <PageHeader
        title="Careers at Kanishka Constructions"
        description="Kickstart your engineering career with live project exposure across Maharashtra. Explore our open internship opportunities below."
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Perks */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <SectionHeading
            eyebrow="Why Work With Us"
            title="A Career That Builds More Than Structures"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perks.map((perk) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-center p-6 rounded-2xl bg-brand-gray-light hover:shadow-card transition-shadow duration-300"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-yellow mb-4">
                  <perk.icon size={22} />
                </span>
                <h3 className="text-base font-bold text-brand-navy mb-2">{perk.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Job Listings */}
      <section className="py-14 md:py-20 bg-brand-gray-light" id="openings">
        <Container>
          <SectionHeading eyebrow="Open Positions" title="Current Internship Openings" />

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            >
              <option value="All">All Departments</option>
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            >
              <option value="All">All Role Types</option>
              {jobTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <p className="text-center text-sm text-brand-gray mb-6">
            Showing {filteredJobs.length} of {jobs.length} internship positions (Freshers Welcome)
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredJobs.map((job, idx) => (
              <JobCard key={job.id} job={job} index={idx} />
            ))}
          </div>
        </Container>
      </section>

      {/* Submit Resume (General) */}
      <section className="py-14 md:py-20 bg-white" id="submit-resume">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Don't See a Fit?"
            title="Submit Your Resume"
            description="Didn't find a suitable vacancy? Submit your resume and we'll reach out when a matching opportunity opens up."
            className="mb-10"
          />
          <div className="bg-brand-gray-light rounded-2xl p-6 md:p-9">
            <JobApplicationForm isGeneral />
          </div>
        </Container>
      </section>
    </>
  );
}
