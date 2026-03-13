export const siteConfig = {
  name: "Bayliss Building Group",
  description:
    "Licensed commercial construction and carpentry company in Victoria, Australia. Delivering strength, precision, and quality across every project.",
  url: "https://baylissbuildinggroup.com.au",
  phone: "+61 3 9000 0000",
  phoneDisplay: "(03) 9000 0000",
  email: "info@baylissbuildinggroup.com.au",
  address: {
    street: "Level 1, 123 Construction Drive",
    city: "Melbourne",
    state: "VIC",
    postcode: "3000",
    country: "Australia",
  },
  license: "CDB-U 00000",
  abn: "00 000 000 000",
  social: {
    linkedin: "#",
    instagram: "#",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Commercial Construction",
    slug: "commercial-construction",
    description:
      "End-to-end delivery of commercial builds including offices, retail spaces, industrial facilities, and mixed-use developments. We manage every phase from site preparation through to handover.",
    shortDescription:
      "Full-scale commercial builds from ground up — offices, retail, industrial, and mixed-use developments.",
    icon: "Building2" as const,
    features: [
      "New builds and ground-up construction",
      "Office and retail fitouts",
      "Industrial and warehouse facilities",
      "Mixed-use developments",
      "Design and construct partnerships",
    ],
  },
  {
    title: "Carpentry & Structural Framing",
    slug: "carpentry-structural-framing",
    description:
      "Expert structural carpentry and timber framing for commercial and residential projects. Our team delivers precision-crafted frameworks that form the backbone of quality construction.",
    shortDescription:
      "Precision structural carpentry and timber framing for commercial and residential projects.",
    icon: "Hammer" as const,
    features: [
      "Structural timber framing",
      "Commercial carpentry",
      "Formwork and temporary structures",
      "Roof framing and trusses",
      "Custom joinery and finishing",
    ],
  },
  {
    title: "Construction Management",
    slug: "construction-management",
    description:
      "Professional project oversight from planning to completion. We coordinate trades, manage timelines, control budgets, and ensure quality standards are met across every stage.",
    shortDescription:
      "End-to-end project coordination — timelines, budgets, trades, and quality management.",
    icon: "ClipboardCheck" as const,
    features: [
      "Project planning and scheduling",
      "Budget management and cost control",
      "Trade coordination and procurement",
      "Quality assurance and compliance",
      "Progress reporting and documentation",
    ],
  },
  {
    title: "Fit-Outs & Refurbishments",
    slug: "fitouts-refurbishments",
    description:
      "Transform existing spaces with high-quality commercial fit-outs and refurbishments. From concept through completion, we deliver spaces that meet modern standards and business needs.",
    shortDescription:
      "High-quality commercial fit-outs and refurbishments that transform existing spaces.",
    icon: "Paintbrush" as const,
    features: [
      "Office fit-outs and refurbishments",
      "Retail and hospitality spaces",
      "Heritage and adaptive reuse",
      "Accessibility upgrades",
      "Sustainable retrofitting",
    ],
  },
];

export const projects = [
  {
    title: "Docklands Office Tower — Level 4 Fit-Out",
    category: "Commercial Fit-Out",
    location: "Docklands, VIC",
    year: "2024",
    description:
      "Complete Level 4 commercial fit-out for a corporate tenant including open-plan workspaces, meeting rooms, and breakout areas. Delivered on time within a live building environment.",
    image: "/projects/project-1.jpg",
    slug: "docklands-office-fitout",
  },
  {
    title: "Heidelberg Retail Complex",
    category: "Commercial Construction",
    location: "Heidelberg, VIC",
    year: "2024",
    description:
      "Ground-up construction of a 2,400sqm neighbourhood retail complex with four tenancies, shared amenities, and basement car parking.",
    image: "/projects/project-2.jpg",
    slug: "heidelberg-retail-complex",
  },
  {
    title: "Southbank Residential Framing",
    category: "Carpentry & Framing",
    location: "Southbank, VIC",
    year: "2023",
    description:
      "Structural timber framing package for a six-storey residential development, including roof trusses and formwork for the podium level.",
    image: "/projects/project-3.jpg",
    slug: "southbank-residential-framing",
  },
  {
    title: "Geelong Warehouse Conversion",
    category: "Refurbishment",
    location: "Geelong, VIC",
    year: "2023",
    description:
      "Adaptive reuse of a heritage-listed wool store into a modern co-working and events space. Careful integration of original fabric with contemporary design.",
    image: "/projects/project-4.jpg",
    slug: "geelong-warehouse-conversion",
  },
  {
    title: "Frankston Community Centre",
    category: "Commercial Construction",
    location: "Frankston, VIC",
    year: "2023",
    description:
      "New community centre featuring multipurpose halls, administration offices, and landscaped outdoor areas. Designed to meet Green Star sustainability benchmarks.",
    image: "/projects/project-5.jpg",
    slug: "frankston-community-centre",
  },
  {
    title: "Richmond Hospitality Fit-Out",
    category: "Commercial Fit-Out",
    location: "Richmond, VIC",
    year: "2022",
    description:
      "Fast-tracked restaurant and bar fit-out in a heritage shopfront. Included custom joinery, commercial kitchen infrastructure, and compliance upgrades.",
    image: "/projects/project-6.jpg",
    slug: "richmond-hospitality-fitout",
  },
];

export const values = [
  {
    title: "Quality Without Compromise",
    description:
      "Every joint, every finish, every detail is held to the highest standard. We build structures our clients are proud of for decades.",
    icon: "Shield" as const,
  },
  {
    title: "On Time, On Budget",
    description:
      "Disciplined project management and transparent communication ensure we deliver what we promise — without surprises.",
    icon: "Clock" as const,
  },
  {
    title: "Safety First",
    description:
      "Zero-harm culture drives everything we do. Rigorous safety systems, ongoing training, and full compliance on every site.",
    icon: "HardHat" as const,
  },
  {
    title: "Trusted Partnerships",
    description:
      "We build lasting relationships with clients, architects, and trades based on integrity, reliability, and mutual respect.",
    icon: "Handshake" as const,
  },
];
