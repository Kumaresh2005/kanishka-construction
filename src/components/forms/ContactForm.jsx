import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import FormField from "./FormField";
import SubmitStatus from "./SubmitStatus";
import Button from "../ui/Button";
import { validators } from "../../utils/helpers";
import { sendContactEmail } from "../../services/emailService";

const initialState = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
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
      email: validators.email(form.email),
      phone: validators.phone(form.phone),
      message: validators.required(form.message),
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
      await sendContactEmail(form);
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      console.error("EmailJS contact form submission error:", err);
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
      <div className="grid sm:grid-cols-2 gap-5">
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
        <FormField
          label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="How can we help?"
        />
      </div>
      <FormField
        label="Message"
        name="message"
        as="textarea"
        value={form.message}
        onChange={handleChange}
        error={errors.message}
        required
        placeholder="Tell us about your project or query..."
      />

      <SubmitStatus status={status} />

      <Button
        type="submit"
        size="lg"
        icon={submitting ? Loader2 : Send}
        disabled={submitting}
        className={submitting ? "opacity-80 cursor-wait [&_svg]:animate-spin" : ""}
      >
        {submitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
