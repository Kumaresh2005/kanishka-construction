import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../projects/ProjectCard";
import { getFeaturedProjects } from "../../data/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="featured-projects" className="py-16 md:py-24 bg-brand-gray-light">
      <Container>
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Featured Projects"
          description="A glimpse into the landmark residential, commercial, industrial and infrastructure projects we've delivered."
        />

        <div
          className={
            featured.length === 1
              ? "max-w-xl mx-auto"
              : featured.length === 2
              ? "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {featured.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-blue-light transition-colors"
          >
            Explore All Projects <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
