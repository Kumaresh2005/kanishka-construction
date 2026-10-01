import { useEffect } from "react";
import { company } from "../../data/company";

function setMeta(name, content, attr = "name") {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function SEO({ title, description, image }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${company.shortName}`
      : `${company.shortName} | Premium Construction Company in Nagpur`;
    document.title = fullTitle;

    const desc =
      description ||
      "Kanishka Constructions Pvt. Ltd. is a premier construction company delivering residential, commercial, industrial and infrastructure projects across Nagpur and Maharashtra.";

    setMeta("description", desc);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:type", "website", "property");
    setMeta(
      "og:image",
      image || "/company_logo.png",
      "property"
    );
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);
    setMeta("twitter:image", image || "/company_logo.png");
  }, [title, description, image]);

  return null;
}
