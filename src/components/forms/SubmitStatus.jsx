import { CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SubmitStatus({ status }) {
  return (
    <AnimatePresence>
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="flex items-start gap-3 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-800"
          role="status"
        >
          <CheckCircle2 size={20} className="shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Submitted successfully!</p>
            <p className="text-sm text-emerald-700">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
          </div>
        </motion.div>
      )}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4 text-red-800"
          role="alert"
        >
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-sm">Failed to send message</p>
            <p className="text-sm text-red-700">
              Something went wrong while sending. Please try again or reach out to us directly via WhatsApp or phone.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
