import { useEffect } from "react";
import { company } from "../../data/company";

const SITE_URL = "https://www.kanishkaconstructions.com";
const DEFAULT_IMAGE = `${SITE_URL}/project_photos/owner/owner.jpeg`;
const DEFAULT_KEYWORDS =
  "Kanishka Constructions, Subrat Sarkar, construction company Gadchiroli, builders in Ashti Chamorshi, contractor Nagpur, welding services Maharashtra, structural steel fabrication, industrial piping, civil contractor, turnkey construction";

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

function setLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  canonical,
  type = "website",
  schema,
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${company.shortName}`
      : `${company.shortName} | Building Contractor & Welding Services | Subrat Sarkar`;
    document.title = fullTitle;

    const desc =
      description ||
      "Kanishka Constructions Pvt. Ltd. led by Subrat Sarkar delivers premium residential, commercial, industrial construction, certified welding, and structural steel fabrication across Maharashtra.";

    const kw = keywords || DEFAULT_KEYWORDS;

    const imgUrl = image
      ? image.startsWith("http")
        ? image
        : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`
      : DEFAULT_IMAGE;

    const currentPath = window.location.pathname;
    const canUrl = canonical
      ? canonical.startsWith("http")
        ? canonical
        : `${SITE_URL}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
      : `${SITE_URL}${currentPath === "/" ? "" : currentPath}`;

    // Standard Meta
    setMeta("description", desc);
    setMeta("keywords", kw);
    setMeta("author", "Subrat Sarkar, Kanishka Constructions Pvt. Ltd.");
    setLink("canonical", canUrl);

    // Open Graph
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", desc, "property");
    setMeta("og:type", type, "property");
    setMeta("og:url", canUrl, "property");
    setMeta("og:image", imgUrl, "property");
    setMeta("og:site_name", company.name, "property");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);
    setMeta("twitter:image", imgUrl);

    // JSON-LD Route Schema
    let scriptTag = document.getElementById("page-structured-data");
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "page-structured-data";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, keywords, image, canonical, type, schema]);

  return null;
}
