# Kanishka Constructions Pvt. Ltd. — Website

A production-ready, mobile-first marketing and lead-generation website for a construction
company, built with React + Vite + Tailwind CSS v4.

## Tech Stack

| Purpose | Library |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 (Rolldown) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router v7 |
| Animation | Framer Motion |
| Icons | Lucide React (+ local SVG brand icons) |

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project Structure

```
src/
├── data/                 # ← All content lives here (edit these first)
│   ├── company.js        #   Contact info, stats, why-choose-us, process steps
│   ├── services.js       #   12 services (including Welding, Structural Steel, Piping & Architectural Metalwork)
│   ├── projects.js       #   Portfolio projects + galleries + specifications
│   └── jobs.js           #   Job openings
├── components/
│   ├── layout/           # Navbar, Footer, FloatingButtons, Layout
│   ├── ui/               # Button, Container, SectionHeading, Badge, SEO,
│   │                     # Breadcrumbs, PageHeader, IconMap, SocialIcons, PageLoader
│   ├── home/             # Home page sections
│   ├── projects/         # ProjectCard, ProjectFilter, ProjectGallery
│   ├── careers/          # JobCard, JobApplicationForm
│   └── forms/            # FormField, SubmitStatus, ContactForm, QuoteForm
├── pages/                # One component per route
└── utils/helpers.js      # cn(), validators, formatDate, slugify
```

## Editing Content

All copy, projects, jobs and services are data-driven — **no JSX edits needed** for
routine content changes.

- **Company details / phone / email / address / social** → `src/data/company.js`
- **Add a project** → append to `projects` in `src/data/projects.js`. The `id` becomes
  the URL (`/projects/<id>`), and the project appears in the filter automatically.
  Set `featured: true` to surface it on the home page.
- **Add a job** → append to `jobs` in `src/data/jobs.js`. The `id` becomes the URL
  (`/careers/<id>`). Department and type filters populate automatically.
- **Add a service** → append to `services` in `src/data/services.js`. Set `icon` to any
  name registered in `src/components/ui/IconMap.jsx`.

> **Icons:** `IconMap.jsx` uses an explicit import registry rather than
> `import * as Icons`. A namespace import pulls Lucide's entire icon set into the
> bundle (~740 KB). Register new icon names there.

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services (anchor links per service) |
| `/projects` | Filterable portfolio |
| `/projects/:id` | Project detail + gallery lightbox |
| `/careers` | Job listings + general resume submission |
| `/careers/:id` | Job detail + application form |
| `/contact` | Contact + quote form + map |
| `*` | 404 |

## Connecting the Forms

All four forms (Contact, Quote, Job Application, General Resume) currently simulate
submission with a timeout and show a success state. Validation, error states, loading
states and accessibility are already wired up.

To connect a real backend, replace the `setTimeout` block inside each form's
`handleSubmit`:

```js
// src/components/forms/ContactForm.jsx (and QuoteForm, JobApplicationForm)
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;
  setSubmitting(true);
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) throw new Error("Request failed");
    setStatus("success");
    setForm(initialState);
  } catch {
    setStatus("error");
  } finally {
    setSubmitting(false);
  }
};
```

For the job application, send `multipart/form-data` so the résumé file uploads — the
file input currently stores only the filename in state.

## Before Going Live

1. **Google Maps** — replace `mapEmbedSrc` in `src/data/company.js` with the real embed
   URL for the office (Google Maps → Share → Embed a map).
2. **Domain** — update the canonical URL and Open Graph URLs in `index.html`, and
   `BASE` in `generate-sitemap.mjs`, then run `node generate-sitemap.mjs`.
3. **Images** — project and service images point at Unsplash for demo purposes. Replace
   with real photography; serve as WebP at ~1600px wide for hero images.
4. **Contact details** — the phone, email, address and CIN/GSTIN in
   `src/data/company.js` are placeholders.
5. **SPA rewrites** — configure the host to rewrite all paths to `index.html`, or deep
   links (e.g. `/projects/silver-oak-residency`) will 404 on refresh:
   - *Netlify* — `_redirects`: `/*  /index.html  200`
   - *Vercel* — handled automatically
   - *Nginx* — `try_files $uri $uri/ /index.html;`

## SEO

- Per-page `<title>`, meta description and Open Graph tags via the `SEO` component
- `GeneralContractor` JSON-LD structured data in `index.html`
- `public/sitemap.xml` (28 URLs) generated from the data files — re-run
  `node generate-sitemap.mjs` after adding projects or jobs
- `public/robots.txt`
- Semantic landmarks, one `<h1>` per page, descriptive `alt` text, lazy-loaded images

## Verified

Tested headlessly with Playwright across all routes:

- **Responsive:** 320 / 375 / 390 / 414 / 768 / 1024 / 1440px — zero horizontal scroll
- **Console:** no JavaScript or React errors on any route
- **Links:** 36 internal links, zero broken
- **Interaction:** 20/20 — mobile menu, project filters, career filters, gallery
  lightbox (click + keyboard), form validation, success states, 404 recovery
- **Accessibility:** one `<h1>` per page, all images have `alt`, all icon-only buttons
  have `aria-label`, visible focus rings, `aria-invalid` + `aria-describedby` on fields
