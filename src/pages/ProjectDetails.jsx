import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Building2, Ruler, ArrowRight, ArrowLeft } from "lucide-react";
import SEO from "../components/ui/SEO";
import Container from "../components/ui/Container";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectCard from "../components/projects/ProjectCard";
import QuoteForm from "../components/forms/QuoteForm";
import { getProjectById, projects } from "../data/projects";
import NotFound from "./NotFound";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) return <NotFound />;

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={`${project.name} | Construction Portfolio`}
        description={project.description}
        keywords={`${project.name}, ${project.category} construction, ${project.location}, Kanishka Constructions projects`}
        image={project.heroImage}
        canonical={`/projects/${project.id}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": project.name,
          "description": project.description,
          "image": project.heroImage,
          "creator": {
            "@type": "Organization",
            "name": "Kanishka Constructions Pvt. Ltd."
          },
          "locationCreated": {
            "@type": "Place",
            "name": project.location
          }
        }}
      />

      {/* Hero */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.name}
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/85 to-brand-navy/70" />
        </div>
        <Container className="relative">
          <Breadcrumbs items={[{ label: "Projects", to: "/projects" }, { label: project.name }]} />
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant="yellow">{project.category}</Badge>
            <Badge variant={project.status === "Completed" ? "success" : "progress"}>
              {project.status}
            </Badge>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance max-w-3xl"
          >
            {project.name}
          </motion.h1>
          <p className="mt-3 flex items-center gap-2 text-white/70 text-sm md:text-base">
            <MapPin size={16} className="text-brand-yellow" /> {project.location}
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 min-w-0">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">Project Overview</h2>
              <p className="text-brand-gray leading-relaxed mb-10">{project.description}</p>

              <h2 className="text-2xl font-bold text-brand-navy mb-5">Project Gallery</h2>
              <ProjectGallery images={project.gallery} projectName={project.name} />

              <div className="mt-10">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-blue-light transition-colors"
                >
                  <ArrowLeft size={18} /> Back to All Projects
                </Link>
              </div>
            </div>

            <aside className="min-w-0 space-y-6">
              <div className="bg-brand-gray-light rounded-2xl p-6 md:p-7">
                <h3 className="text-lg font-bold text-brand-navy mb-5">Project Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Building2 size={18} className="text-brand-yellow-dark shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-brand-gray">Client</p>
                      <p className="text-sm font-semibold text-brand-navy">{project.client}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Ruler size={18} className="text-brand-yellow-dark shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-brand-gray">Area</p>
                      <p className="text-sm font-semibold text-brand-navy">{project.area}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar size={18} className="text-brand-yellow-dark shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-brand-gray">Completion</p>
                      <p className="text-sm font-semibold text-brand-navy">{project.completionDate}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar size={18} className="text-brand-yellow-dark shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-brand-gray">Duration</p>
                      <p className="text-sm font-semibold text-brand-navy">{project.duration}</p>
                    </div>
                  </li>
                </ul>

                <hr className="my-5 border-black/10" />

                <h4 className="text-sm font-bold text-brand-navy mb-4">Specifications</h4>
                <ul className="space-y-3">
                  {project.specifications.map((spec) => (
                    <li key={spec.label} className="flex justify-between gap-3 text-sm">
                      <span className="text-brand-gray shrink-0">{spec.label}</span>
                      <span className="font-semibold text-brand-navy text-right min-w-0 break-words">
                        {spec.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-navy rounded-2xl p-6 md:p-7 text-center">
                <h3 className="text-lg font-bold text-white mb-2">Have a Similar Project?</h3>
                <p className="text-white/70 text-sm mb-5">
                  Let's discuss how we can bring your vision to life.
                </p>
                <Button to="/contact" className="w-full" icon={ArrowRight}>
                  Get Free Consultation
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-14 md:py-20 bg-brand-gray-light">
          <Container>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">
              More {project.category} Projects
            </h2>
            <div
              className={
                relatedProjects.length === 1
                  ? "max-w-xl mx-auto"
                  : relatedProjects.length === 2
                  ? "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                  : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              }
            >
              {relatedProjects.map((p, idx) => (
                <ProjectCard key={p.id} project={p} index={idx} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 bg-white">
        <Container className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2 text-center">
            Start Your Project With Us
          </h2>
          <p className="text-brand-gray text-center mb-8">
            Share your requirements and get a free, no-obligation quote.
          </p>
          <div className="bg-brand-gray-light rounded-2xl p-6 md:p-8">
            <QuoteForm compact />
          </div>
        </Container>
      </section>
    </>
  );
}
