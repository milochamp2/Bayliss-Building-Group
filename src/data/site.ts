export const siteConfig = {
  name: "Bayliss Building Group",
  tagline: "Built with Strength. Delivered with Precision.",
  description:
    "Bayliss Building Group is a licensed building and carpentry company delivering high-quality construction solutions across commercial and residential sectors. Our focus is on reliability, safety, craftsmanship and strong project management to ensure every job is delivered on time and to the highest standard.",
  descriptionShort:
    "Licensed commercial construction and carpentry company in Victoria, Australia. Delivering strength, precision, and quality across every project.",
  profile:
    "Bayliss Building Group is a licensed construction and carpentry company specialising in commercial and residential building projects across Victoria. Our team delivers a wide range of construction services including structural carpentry, commercial fit-outs, building projects, and subcontract construction services. With a strong focus on safety, quality workmanship and reliability, Bayliss Building Group partners with developers, builders and commercial clients to deliver projects that meet strict industry standards and timelines. Our commitment to professionalism and attention to detail ensures every project is completed with precision and pride.",
  url: "https://baylissbuildinggroup.com.au",
  director: "Jarrod Bayliss",
  directorTitle: "Director",
  phone: "+61 3 9000 0000",
  phoneDisplay: "(03) 9000 0000",
  email: "info@baylissbuildinggroup.com.au",
  address: {
    city: "Melbourne",
    state: "Victoria",
    stateShort: "VIC",
    country: "Australia",
  },
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
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export interface PartnerImage {
  src: string;
  alt: string;
}

export interface Partner {
  name: string;
  slug: string;
  website: string;
  description: string;
  services: string[];
  logo?: string;
  images: PartnerImage[];
}

export const partners: Partner[] = [
  {
    name: "Stretch Electrics",
    slug: "stretch-electrics",
    website: "https://www.stretchelectrics.com.au/",
    description:
      "Stretch Electrics is a trusted electrical contractor providing electrical, air conditioning, data, and communications services across Melbourne and regional Victoria. With a proven track record working alongside Bayliss Building Group on commercial, education, and residential projects, they deliver reliable and compliant electrical solutions every time.",
    services: [
      "Electrical installations",
      "Air conditioning",
      "Data & communications",
      "Commercial fit-outs",
      "Residential electrical",
      "Excavation & trenching",
    ],
    images: [
      { src: "/images/partners/stretch-electrics/img 1.jpeg", alt: "Excavation and groundwork on a commercial construction site" },
      { src: "/images/partners/stretch-electrics/img 2.jpeg", alt: "Large commercial building under construction" },
      { src: "/images/partners/stretch-electrics/img 3.jpeg", alt: "Living room fit-out with integrated TV and electric fireplace" },
      { src: "/images/partners/stretch-electrics/img 4.jpeg", alt: "Electrical conduit and services trenching alongside a building" },
      { src: "/images/partners/stretch-electrics/img 5.jpeg", alt: "Stretch Electrics truck with mini excavator at commercial warehouse" },
      { src: "/images/partners/stretch-electrics/img 6.jpeg", alt: "Stretch Electrics truck at Chirnside Park Primary School project" },
      { src: "/images/partners/stretch-electrics/img 7.jpeg", alt: "Premium bathroom fit-out with freestanding bath and pendant lighting" },
      { src: "/images/partners/stretch-electrics/img 8.jpeg", alt: "Stretch Electrics vehicle at commercial retail site" },
      { src: "/images/partners/stretch-electrics/img 9.jpeg", alt: "Rustic outdoor pergola with string lighting installation" },
      { src: "/images/partners/stretch-electrics/img 10.jpeg", alt: "Outdoor entertaining area with pizza oven and timber structure" },
      { src: "/images/partners/stretch-electrics/img 11.jpeg", alt: "Commercial gym fit-out with TV installation and LED strip lighting" },
      { src: "/images/partners/stretch-electrics/img 12.jpeg", alt: "Covered deck with downlights and outdoor entertainment setup" },
      { src: "/images/partners/stretch-electrics/image 13.jpeg", alt: "Stretch Electrics project work" },
    ],
  },
];

export const services = [
  {
    title: "Commercial Construction",
    slug: "commercial-construction",
    description:
      "Full-scope commercial construction services across education, childcare, retail, office, warehouse, and government sectors. From ground-up builds to complex multi-stage projects, we deliver with precision, professionalism, and strict adherence to timelines.",
    shortDescription:
      "Schools, childcare centres, offices, retail, warehouses, and government projects — built to the highest standard.",
    icon: "Building2" as const,
    features: [
      "Schools and educational facilities",
      "Childcare centres",
      "Commercial buildings",
      "Office fit-outs",
      "Retail fit-outs",
      "Warehouse construction",
      "Government projects",
    ],
  },
  {
    title: "Carpentry & Structural Framing",
    slug: "carpentry-structural-framing",
    description:
      "Expert structural carpentry and framing services for commercial and residential projects. Our experienced team delivers precision-crafted frameworks that form the backbone of quality construction — from structural framing through to finishing carpentry.",
    shortDescription:
      "Structural framing, lock-up stages, fix carpentry, decking, cladding, and timber structures.",
    icon: "Hammer" as const,
    features: [
      "Structural framing",
      "Lock-up stages",
      "Fix carpentry",
      "Decking",
      "External cladding",
      "Timber structures",
    ],
  },
  {
    title: "Construction Management",
    slug: "construction-management",
    description:
      "Professional project coordination and site management from planning through to handover. We manage trades, timelines, budgets, and quality assurance to ensure every project is delivered on time and to the highest standard.",
    shortDescription:
      "Project coordination, site management, trade management, scheduling, and quality assurance.",
    icon: "ClipboardCheck" as const,
    features: [
      "Project coordination",
      "Site management",
      "Trade management",
      "Construction scheduling",
      "Quality assurance",
    ],
  },
  {
    title: "Fit-Outs",
    slug: "fitouts-refurbishments",
    description:
      "High-quality commercial fit-out and refurbishment services that transform existing spaces. From office environments to retail premises, we deliver interior construction solutions that meet modern standards and business needs.",
    shortDescription:
      "Office fit-outs, retail fit-outs, commercial refurbishments, and interior construction.",
    icon: "Paintbrush" as const,
    features: [
      "Office fit-outs",
      "Retail fit-outs",
      "Commercial refurbishments",
      "Interior construction",
    ],
  },
];

export const projects = [
  {
    title: "Melbourne East Primary School — Stage 2 Build",
    category: "Commercial Construction",
    location: "Melbourne East, VIC",
    year: "2024",
    description:
      "Full commercial construction of a new two-storey learning wing including classrooms, admin offices, and covered outdoor learning areas. Delivered within a live school environment with strict safety protocols.",
    image: "/projects/project-1.jpg",
    slug: "melbourne-east-primary-school",
  },
  {
    title: "Bayside Childcare Centre",
    category: "Commercial Construction",
    location: "Bayside, VIC",
    year: "2024",
    description:
      "Ground-up construction of a purpose-built childcare centre with indoor and outdoor play areas, kitchen facilities, and full compliance with childcare building regulations.",
    image: "/projects/project-2.jpg",
    slug: "bayside-childcare-centre",
  },
  {
    title: "Southbank Residential — Structural Framing",
    category: "Carpentry & Framing",
    location: "Southbank, VIC",
    year: "2023",
    description:
      "Complete structural timber framing package for a multi-level residential development, including lock-up stage, roof trusses, and external cladding.",
    image: "/projects/project-3.jpg",
    slug: "southbank-residential-framing",
  },
  {
    title: "Geelong Warehouse Build",
    category: "Commercial Construction",
    location: "Geelong, VIC",
    year: "2023",
    description:
      "New warehouse construction including structural steel coordination, concrete works, cladding, and fit-out of office and amenities areas.",
    image: "/projects/project-4.jpg",
    slug: "geelong-warehouse-build",
  },
  {
    title: "Richmond Office Fit-Out",
    category: "Fit-Out",
    location: "Richmond, VIC",
    year: "2023",
    description:
      "Commercial office fit-out across two levels including open-plan workspaces, meeting rooms, breakout areas, and full services coordination. Delivered on time within a live building.",
    image: "/projects/project-5.jpg",
    slug: "richmond-office-fitout",
  },
  {
    title: "Retail Precinct Fit-Out — Heidelberg",
    category: "Fit-Out",
    location: "Heidelberg, VIC",
    year: "2022",
    description:
      "Multi-tenancy retail fit-out including shopfront construction, internal partitions, services rough-in, and compliance upgrades for a neighbourhood retail precinct.",
    image: "/projects/project-6.jpg",
    slug: "heidelberg-retail-fitout",
  },
];

export const values = [
  {
    title: "Licensed Commercial Builder",
    description:
      "Fully licensed and insured to deliver commercial and residential construction projects across Victoria.",
    icon: "Shield" as const,
  },
  {
    title: "Reliable & Professional",
    description:
      "A dependable team that communicates transparently and delivers what we promise — on time, every time.",
    icon: "Clock" as const,
  },
  {
    title: "Strong Safety Systems",
    description:
      "Comprehensive safety procedures, SWMS documentation, risk assessments, PPE compliance, and site inductions on every project.",
    icon: "HardHat" as const,
  },
  {
    title: "High Quality Workmanship",
    description:
      "Experienced project delivery with attention to detail, ensuring every project is completed with precision and pride.",
    icon: "Handshake" as const,
  },
];

export const targetClients = [
  "Commercial developers",
  "Construction companies",
  "Architects",
  "Government projects",
  "Schools",
  "Childcare centres",
  "Retail businesses",
  "Private clients",
];

export const tenderOpportunities = [
  "School developments",
  "Childcare centre construction",
  "Retail and office fit-outs",
  "Government infrastructure projects",
  "Builder subcontracting",
];
