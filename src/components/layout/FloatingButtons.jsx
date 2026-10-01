import { Phone, MessageCircle } from "lucide-react";
import { company } from "../../data/company";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 md:bottom-8 md:right-8 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${company.whatsapp.replace("+", "")}?text=${encodeURIComponent(
          "Hi Kanishka Constructions, I would like to enquire about your services."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift hover:scale-105 active:scale-95 transition-transform"
      >
        <MessageCircle size={26} fill="white" className="text-[#25D366]" />
      </a>
      <a
        href={`tel:${company.phoneRaw}`}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow text-brand-navy shadow-lift hover:scale-105 active:scale-95 transition-transform animate-none"
      >
        <Phone size={24} strokeWidth={2.4} />
      </a>
    </div>
  );
}
