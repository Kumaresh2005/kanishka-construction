import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_gljh93g",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "BmM61Qox1PhIXOTR4",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_34e7k9x",
  recipientEmail: "kanishkaconstruction2023@gmail.com",
};

/**
 * Send contact inquiry email via EmailJS
 */
export async function sendContactEmail(data) {
  const templateParams = {
    // Standard and fallback variable names to match template setup
    to_email: EMAILJS_CONFIG.recipientEmail,
    recipient_email: EMAILJS_CONFIG.recipientEmail,
    name: data.name,
    from_name: data.name,
    email: data.email,
    from_email: data.email,
    reply_to: data.email,
    phone: data.phone,
    phone_number: data.phone,
    subject: data.subject || "New Contact Message",
    message: data.message,
    form_type: "Contact Message",
  };

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams,
    EMAILJS_CONFIG.publicKey
  );
}

/**
 * Send quote request email via EmailJS
 */
export async function sendQuoteEmail(data) {
  const templateParams = {
    to_email: EMAILJS_CONFIG.recipientEmail,
    recipient_email: EMAILJS_CONFIG.recipientEmail,
    name: data.name,
    from_name: data.name,
    email: data.email,
    from_email: data.email,
    reply_to: data.email,
    phone: data.phone,
    phone_number: data.phone,
    project_type: data.projectType,
    projectType: data.projectType,
    location: data.location,
    budget: data.budget || "Not specified",
    requirements: data.requirements || "None specified",
    subject: `New Quote Request: ${data.projectType || "General Inquiry"}`,
    message: `Project Type: ${data.projectType}\nLocation: ${data.location}\nBudget: ${data.budget || "Not specified"}\nRequirements: ${data.requirements || "None"}`,
    form_type: "Quote Request",
  };

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams,
    EMAILJS_CONFIG.publicKey
  );
}

/**
 * Send job application email via EmailJS
 */
export async function sendJobApplicationEmail(data) {
  const templateParams = {
    to_email: EMAILJS_CONFIG.recipientEmail,
    recipient_email: EMAILJS_CONFIG.recipientEmail,
    name: data.name,
    from_name: data.name,
    email: data.email,
    from_email: data.email,
    reply_to: data.email,
    phone: data.phone,
    phone_number: data.phone,
    subject: `New Job Application: ${data.position || "General Application"} - ${data.name}`,
    message: `Position: ${data.position}\nQualification: ${data.qualification}\nExperience: ${data.experience}\nCurrent Location: ${data.location}\nExpected Salary: ${data.expectedSalary || "Not specified"}\nNotice Period: ${data.noticePeriod || "Not specified"}\nResume File: ${data.resume || "Attached"}\nCover Letter: ${data.coverLetter || "None"}`,
    form_type: "Job Application",
  };

  return emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    templateParams,
    EMAILJS_CONFIG.publicKey
  );
}
