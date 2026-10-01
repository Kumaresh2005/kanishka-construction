import { writeFileSync } from "fs";
import { projects } from "./src/data/projects.js";
import { jobs } from "./src/data/jobs.js";

const BASE = "https://www.kanishkaconstructions.com";
const today = new Date().toISOString().split("T")[0];

const staticRoutes = [
  { path: "/", priority: "1.0", freq: "weekly" },
  { path: "/about", priority: "0.8", freq: "monthly" },
  { path: "/services", priority: "0.9", freq: "monthly" },
  { path: "/projects", priority: "0.9", freq: "weekly" },
  { path: "/careers", priority: "0.9", freq: "daily" },
  { path: "/contact", priority: "0.8", freq: "monthly" },
];

const urls = [
  ...staticRoutes,
  ...projects.map((p) => ({ path: `/projects/${p.id}`, priority: "0.7", freq: "monthly" })),
  ...jobs.map((j) => ({ path: `/careers/${j.id}`, priority: "0.8", freq: "weekly" })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${BASE}${u.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`Sitemap generated with ${urls.length} URLs`);
