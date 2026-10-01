export const cn = (...classes) => classes.filter(Boolean).join(" ");

export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const validators = {
  required: (value) => (value && value.toString().trim() ? "" : "This field is required"),
  email: (value) =>
    !value
      ? "Email is required"
      : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ? ""
      : "Enter a valid email address",
  phone: (value) =>
    !value
      ? "Phone number is required"
      : /^[+]?[\d\s-]{10,15}$/.test(value)
      ? ""
      : "Enter a valid phone number",
};
