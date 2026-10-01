import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchX } from "lucide-react";
import SEO from "../components/ui/SEO";
import PageHeader from "../components/ui/PageHeader";
import Container from "../components/ui/Container";
import ProjectFilter from "../components/projects/ProjectFilter";
import ProjectCard from "../components/projects/ProjectCard";
import { projects, projectCategories } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <SEO
        title="Construction Portfolio & Completed Projects | Kanishka Constructions"
        description="Browse completed residential, commercial, industrial, and infrastructure projects delivered with precision by Kanishka Constructions across Maharashtra."
        keywords="construction portfolio Nagpur, completed construction projects Maharashtra, commercial buildings Gadchiroli, residential villas Ashti, industrial construction portfolio"
        canonical="/projects"
      />
      <PageHeader
        title="Our Projects"
        description="A portfolio of quality, precision and trust — spanning residential, commercial, industrial and infrastructure sectors."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <section className="py-12 md:py-16 bg-white">
        <Container>
          <ProjectFilter
            categories={projectCategories}
            active={activeCategory}
            onChange={setActiveCategory}
          />

          <p className="text-center text-sm text-brand-gray mt-6 mb-2">
            Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          </p>

          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={
                  filteredProjects.length === 1
                    ? "max-w-xl mx-auto mt-6"
                    : filteredProjects.length === 2
                    ? "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-6"
                    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
                }
              >
                {filteredProjects.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <SearchX size={40} className="text-brand-gray mb-4" />
                <p className="text-brand-gray">No projects found in this category yet.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>
    </>
  );
}
