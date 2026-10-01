export const projectCategories = [
  "All",
  "Industrial",
];

export const projects = [
  {
    id: "konsari-heavy-industrial-plant",
    name: "Konsari Heavy Industrial Steel Plant",
    category: "Industrial",
    location: "Konsari, Maharashtra",
    status: "Completed",
    completionDate: "Completed",
    client: "Lloyds Infrastructure & Industrial Works",
    area: "20,000 sq. ft.",
    duration: "18 months",
    description:
      "A flagship heavy industrial manufacturing and structural steel facility executed at Konsari, Maharashtra. The project encompassed comprehensive heavy structural steel fabrication and erection, high-tonnage multi-tier structural framing, pre-engineered building (PEB) industrial sheds, overhead crane runway gantry systems, and heavy mechanical equipment infrastructure. Deployed with high-capacity hydraulic mobile cranes, pick-and-carry equipment, and aerial boom lifts, the facility was engineered and delivered with uncompromising industrial safety and structural precision.",
    specifications: [
      { label: "Structure Type", value: "Heavy Structural Steel & PEB System" },
      { label: "Scope of Work", value: "Structural Fabrication, Tower & Bay Erection" },
      { label: "Equipment Deployed", value: "Heavy Hydraulic Cranes, Franna Cranes, Aerial Lifts" },
      { label: "Facility Type", value: "Industrial Steel Plant & Heavy Fabrication Bays" },
      { label: "Crane Gantry", value: "Heavy-Duty Overhead EOT Crane Runway System" },
      { label: "Safety & Quality", value: "Zero-Incident Industrial Safety Compliant" },
    ],
    heroImage: "/project_photos/project1/project1.jpeg",
    gallery: [
      "/project_photos/project1/project1.jpeg",
      "/project_photos/project1/project gallery 1.jpeg",
      "/project_photos/project1/project gallery 2.jpeg",
      "/project_photos/project1/project gallery 3.jpeg",
    ],
    featured: true,
  },
  {
    id: "surjagad-heavy-industrial-facility",
    name: "Surjagad Heavy Industrial & Steel Processing Facility",
    category: "Industrial",
    location: "Surjagad, Maharashtra",
    status: "Completed",
    completionDate: "Completed",
    client: "Lloyds Metals & Energy / Industrial Infrastructure",
    area: "25,000 sq. ft.",
    duration: "14 months",
    description:
      "A high-complexity heavy industrial structural and mineral processing infrastructure project executed at Surjagad, Maharashtra. The project encompassed the precision erection of heavy industrial structural steel framing, high-tonnage crawler crane tandem lifting, rotary kiln and processing equipment structural enclosures, overhead material handling conveyor galleries, and expansive portal-frame manufacturing sheds. Completed under stringent high-altitude safety guidelines and heavy engineering specifications, this facility stands as a critical asset in the region's industrial infrastructure.",
    specifications: [
      { label: "Structure Type", value: "Heavy Industrial Structural Steel & PEB Bays" },
      { label: "Scope of Work", value: "Heavy Erection, Rotary Enclosures & Conveyor Galleries" },
      { label: "Equipment Deployed", value: "Heavy Crawler Cranes, Mobile Telescopic Cranes, Boom Lifts" },
      { label: "Facility Type", value: "Mineral Processing & Heavy Industrial Infrastructure" },
      { label: "Material Handling", value: "Overhead Conveyor Galleries & Crane Gantry Systems" },
      { label: "Safety & Quality", value: "Zero-Incident High-Risk Heavy Lifting Protocol" },
    ],
    heroImage: "/project_photos/project2/project2.jpeg",
    gallery: [
      "/project_photos/project2/project2.jpeg",
      "/project_photos/project2/project gallary 1.jpeg",
      "/project_photos/project2/project2 gallary 2.jpeg",
      "/project_photos/project2/peoject2 gallary 3.jpeg",
    ],
    featured: true,
  },
  {
    id: "gadchiroli-heavy-industrial-infrastructure",
    name: "Gadchiroli Industrial Plant & Material Handling Facility",
    category: "Industrial",
    location: "Gadchiroli, Maharashtra",
    status: "Completed",
    completionDate: "Completed",
    client: "Industrial Infrastructure Division",
    area: "20,000 sq. ft.",
    duration: "15 months",
    description:
      "A specialized heavy industrial steel erection and bulk material handling infrastructure project executed in Gadchiroli, Maharashtra. The scope covered structural steel fabrication and erection for multi-tier industrial plant bays, overhead conveyor trestles and pipe racks, rotary equipment structural housings, and heavy portal-frame assembly. Executed utilizing high-capacity mobile telescopic cranes and pick-and-carry equipment, the project was delivered to high-tolerance industrial standards with full structural integrity and comprehensive safety compliance.",
    specifications: [
      { label: "Structure Type", value: "Heavy Industrial Steel & Pipe Rack Trestles" },
      { label: "Scope of Work", value: "Plant Bay Erection, Conveyor Galleries & Equipment Housing" },
      { label: "Equipment Deployed", value: "Telescopic Mobile Cranes, Franna Cranes, Tower Cranes" },
      { label: "Material Handling", value: "Overhead Conveyor Trestles & Heavy Cable Galleries" },
      { label: "Facility Type", value: "Mineral Processing & Heavy Plant Infrastructure" },
      { label: "Safety & Quality", value: "Zero-Incident High-Altitude Rigging Protocol" },
    ],
    heroImage: "/project_photos/project3/project3.jpeg",
    gallery: [
      "/project_photos/project3/project3.jpeg",
      "/project_photos/project3/project3 gallary1.jpeg",
      "/project_photos/project3/project gallay 2.jpeg",
    ],
    featured: true,
  },
];

export const getProjectById = (id) => projects.find((p) => p.id === id);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
