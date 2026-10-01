import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

export default function ProjectGallery({ images, projectName }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  // Keyboard controls + body scroll lock while the lightbox is open
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, images.length, close]);

  const prev = (e) => {
    e?.stopPropagation();
    setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = (e) => {
    e?.stopPropagation();
    setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIndex(idx)}
            aria-label={`View ${projectName} image ${idx + 1} of ${images.length} in full screen`}
            className="group relative aspect-square rounded-xl overflow-hidden focus-visible:outline-2 focus-visible:outline-brand-yellow"
          >
            <img
              src={img}
              alt={`${projectName} gallery image ${idx + 1}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-colors duration-300 flex items-center justify-center">
              <Expand className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Project image viewer"
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 text-white/80 hover:text-white h-11 w-11 flex items-center justify-center rounded-full bg-white/10"
              aria-label="Close gallery"
            >
              <X size={22} />
            </button>
            <button
              onClick={prev}
              className="absolute left-3 md:left-6 text-white/80 hover:text-white h-11 w-11 flex items-center justify-center rounded-full bg-white/10"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              src={images[activeIndex]}
              alt={`${projectName} gallery image ${activeIndex + 1}`}
              className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={next}
              className="absolute right-3 md:right-6 text-white/80 hover:text-white h-11 w-11 flex items-center justify-center rounded-full bg-white/10"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
