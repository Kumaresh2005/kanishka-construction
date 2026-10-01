import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Clock, ArrowRight, IndianRupee } from "lucide-react";
import Badge from "../ui/Badge";

export default function JobCard({ job, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
      className="group bg-white rounded-2xl border border-black/5 p-5 md:p-6 shadow-soft hover:shadow-card hover:border-brand-yellow/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-blue-light transition-colors">
              {job.title}
            </h3>
            <p className="text-xs text-brand-gray mt-0.5">{job.department}</p>
          </div>
          <Badge variant="navy" className="shrink-0">
            {job.openings} {job.openings > 1 ? "Openings" : "Opening"}
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-3">
          {job.isPaid ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800">
              <IndianRupee size={12} /> {job.stipend}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-gray-light text-brand-gray border border-black/5">
              {job.stipend}
            </span>
          )}
          <span className="text-xs text-brand-gray">&middot; {job.duration}</span>
        </div>

        <p className="text-sm text-brand-gray leading-relaxed mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-brand-gray mb-5">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} /> {job.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase size={13} /> {job.type}
          </span>
          <span className="flex items-center gap-1.5 font-medium text-brand-navy">
            <Clock size={13} className="text-brand-yellow-dark" /> {job.experience}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-black/5">
        <Link
          to={`/careers/${job.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-blue-light transition-colors"
        >
          View Details &amp; Apply
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
