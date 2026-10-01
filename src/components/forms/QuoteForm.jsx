import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import FormField from "./FormField";
import SubmitStatus from "./SubmitStatus";
import Button from "../ui/Button";
import { validators } from "../../utils/helpers";
import { sendQuoteEmail } from "../../services/emailService";

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Industrial Construction",
  "Renovation & Remodeling",
  "Interior Fit-Outs",
  "Infrastructure Development",
  "Civil Engineering Consultancy",
  "Welding & Metal Fabrication",
  "Structural Steel Fabrication & Erection",
  "Industrial Piping & Pipeline Welding",
  "Architectural & Ornamental Metalwork",
  "Other",
];

const budgetRanges = [
  "Under ₹25 Lakhs",
  "₹25 – 50 Lakhs",
  "₹50 Lakhs – 1 Crore",
  "₹1 – 5 Crore",
  "Above ₹5 Crore",
  "Not sure yet",
];

const initialState = {
  name: "",
  phone: "",
  email: "",
  projectType: "",
  location: "",
  budget: "",
  requirements: "",
};

export default function QuoteForm({ compact = false }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {
      name: validators.required(form.name),
      phone: validators.phone(form.phone),
      email: validators.email(form.email),
      projectType: validators.required(form.projectType),
      location: validators.required(form.location),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((v) => !v);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;
    setSubmitting(true);
    try {
      await sendQuoteEmail(form);
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error("EmailJS quote form submission error:", err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          required
          placeholder="Your full name"
        />
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          placeholder="+91 78238 16184"
        />
      </div>
      <FormField
        label="Email Address"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
        required
        placeholder="you@example.com"
      />
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="Project Type"
          name="projectType"
          as="select"
          options={projectTypes}
          value={form.projectType}
          onChange={handleChange}
          error={errors.projectType}
          required
          placeholder="Select project type"
        />
        <FormField
          label="Project Location"
          name="location"
          value={form.location}
          onChange={handleChange}
          error={errors.location}
          required
          placeholder="City / Area"
        />
      </div>
      <FormField
        label="Estimated Budget"
        name="budget"
        as="select"
        options={budgetRanges}
        value={form.budget}
        onChange={handleChange}
        placeholder="Select budget range"
      />
      <FormField
        label="Project Requirements"
        name="requirements"
        as="textarea"
        rows={compact ? 3 : 4}
        value={form.requirements}
        onChange={handleChange}
        placeholder="Briefly describe your project requirements..."
      />

      <SubmitStatus status={status} />

      <Button
        type="submit"
        size="lg"
        icon={submitting ? Loader2 : Send}
        disabled={submitting}
        className={submitting ? "opacity-80 cursor-wait [&_svg]:animate-spin w-full" : "w-full"}
      >
        {submitting ? "Submitting..." : "Request Free Quote"}
      </Button>
    </form>
  );
}
