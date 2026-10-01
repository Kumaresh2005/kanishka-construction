import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import FormField from "../forms/FormField";
import SubmitStatus from "../forms/SubmitStatus";
import Button from "../ui/Button";
import { validators } from "../../utils/helpers";
import { jobs } from "../../data/jobs";
import { sendJobApplicationEmail } from "../../services/emailService";

const noticePeriods = ["Immediate", "15 Days", "30 Days", "60 Days", "90 Days"];

const initialState = {
  name: "",
  email: "",
  phone: "",
  position: "",
  qualification: "",
  experience: "",
  location: "",
  expectedSalary: "",
  noticePeriod: "",
  resume: "",
  coverLetter: "",
};

export default function JobApplicationForm({ jobTitle, isGeneral = false }) {
  const [form, setForm] = useState({ ...initialState, position: jobTitle || "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files?.[0];
      setFileName(file ? file.name : "");
      setForm((f) => ({ ...f, [name]: file ? file.name : "" }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {
      name: validators.required(form.name),
      email: validators.email(form.email),
      phone: validators.phone(form.phone),
      position: validators.required(form.position),
      qualification: validators.required(form.qualification),
      experience: validators.required(form.experience),
      location: validators.required(form.location),
      resume: validators.required(form.resume),
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
      await sendJobApplicationEmail(form);
      setStatus("success");
      setForm({ ...initialState, position: jobTitle || "" });
      setFileName("");
    } catch (err) {
      console.error("EmailJS job application error:", err);
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
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="you@example.com"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
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
        {isGeneral ? (
          <FormField
            label="Position Applying For"
            name="position"
            as="select"
            options={jobs.map((j) => j.title)}
            value={form.position}
            onChange={handleChange}
            error={errors.position}
            required
            placeholder="Select a position"
          />
        ) : (
          <FormField
            label="Position Applying For"
            name="position"
            value={form.position}
            onChange={handleChange}
            error={errors.position}
            required
            className="opacity-90"
          />
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="Highest Qualification"
          name="qualification"
          value={form.qualification}
          onChange={handleChange}
          error={errors.qualification}
          required
          placeholder="e.g. B.E. Civil Engineering"
        />
        <FormField
          label="Total Experience"
          name="experience"
          value={form.experience}
          onChange={handleChange}
          error={errors.experience}
          required
          placeholder="e.g. 3 years"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="Current Location"
          name="location"
          value={form.location}
          onChange={handleChange}
          error={errors.location}
          required
          placeholder="City, State"
        />
        <FormField
          label="Expected Salary (₹ p.a.)"
          name="expectedSalary"
          value={form.expectedSalary}
          onChange={handleChange}
          placeholder="e.g. 6,00,000"
        />
      </div>

      <FormField
        label="Notice Period"
        name="noticePeriod"
        as="select"
        options={noticePeriods}
        value={form.noticePeriod}
        onChange={handleChange}
        placeholder="Select notice period"
      />

      <FormField
        label="Upload Resume"
        name="resume"
        as="file"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        error={errors.resume}
        required
        fileLabel={fileName || "Click to upload resume (PDF, DOC — max 5MB)"}
      />

      <FormField
        label="Cover Letter"
        name="coverLetter"
        as="textarea"
        value={form.coverLetter}
        onChange={handleChange}
        placeholder="Tell us why you're a great fit for this role..."
      />

      <SubmitStatus status={status} />

      <Button
        type="submit"
        size="lg"
        icon={submitting ? Loader2 : Send}
        disabled={submitting}
        className={submitting ? "opacity-80 cursor-wait [&_svg]:animate-spin w-full sm:w-auto" : "w-full sm:w-auto"}
      >
        {submitting ? "Submitting Application..." : "Submit Application"}
      </Button>
    </form>
  );
}
