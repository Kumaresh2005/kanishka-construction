import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight, Calendar } from "lucide-react";
import Badge from "../ui/Badge";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      className="group"
    >
      <Link
        to={`/projects/${project.id}`}
        className="block relative rounded-2xl overflow-hidden bg-white border border-black/5 shadow-soft hover:shadow-lift transition-all duration-300 h-full"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.heroImage}
            alt={`${project.name} — ${project.category} project in ${project.location}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge variant="yellow">{project.category}</Badge>
            <Badge variant={project.status === "Completed" ? "success" : "progress"}>
              {project.status}
            </Badge>
          </div>
          <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-1 group-hover:translate-y-0">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-brand-navy mb-2 leading-snug group-hover:text-brand-blue-light transition-colors">
            {project.name}
          </h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-brand-gray">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} /> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} /> {project.completionDate}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
