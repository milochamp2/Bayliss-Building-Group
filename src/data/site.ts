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
  { label: "Gallery", href: "/gallery" },
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
    logo: "/images/partners/stretch-electrics/logo.png",
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
  {
    name: "Hans On Plumbing Services",
    slug: "hans-on-plumbing",
    website: "https://www.hans-on-plumbing-services.com.au/",
    logo: "/images/partners/hans-on-plumbing/logo.png",
    description:
      "Hans On Plumbing Services is a reliable plumbing contractor providing comprehensive plumbing solutions across Melbourne and Victoria. Working alongside Bayliss Building Group on commercial and residential projects, they deliver quality plumbing installations, maintenance, and emergency services with professionalism and attention to detail.",
    services: [
      "Plumbing installations",
      "Commercial plumbing",
      "Residential plumbing",
      "Gas fitting",
      "Drainage solutions",
      "Maintenance & repairs",
    ],
    images: [],
  },
  {
    name: "The Australian Kitchen Co.",
    slug: "auskitchenco",
    website: "https://www.auskitchenco.com.au/",
    logo: "/images/partners/auskitchenco/logo.png.jpg",
    description:
      "The Australian Kitchen Co. is an Australian owned and operated company specialising in designing, supplying, and installing custom-built kitchens across Melbourne. From kitchen renovations to laundries, vanities, and wardrobes, they combine quality materials with skilled craftsmanship to transform spaces with precision and style.",
    services: [
      "Custom kitchen design",
      "Kitchen renovations",
      "Cabinetry & joinery",
      "Laundry fit-outs",
      "Vanities & wardrobes",
      "Supply & installation",
    ],
    images: [],
  },
  {
    name: "Bowens",
    slug: "bowens",
    website: "https://www.bowens.com.au/",
    logo: "/images/partners/bowens/bowens-logo.png",
    description:
      "Bowens is a leading Australian supplier of timber, hardware, and building products. As a trusted materials partner for Bayliss Building Group, they provide high-quality construction supplies for commercial, residential, and renovation projects across Melbourne and regional Victoria.",
    services: [
      "Timber & structural products",
      "Building hardware",
      "Cladding & facades",
      "Insulation & plasterboard",
      "Roofing & guttering",
      "Tools & trade supplies",
    ],
    images: [],
  },
  {
    name: "Direct Cranes",
    slug: "direct-cranes",
    website: "#",
    logo: "/images/partners/direct cranes/logo.png",
    description:
      "Direct Cranes is a trusted crane hire and rigging specialist working alongside Bayliss Building Group on commercial construction projects across Victoria. With a fleet of modern cranes and experienced operators, they provide safe and efficient lifting solutions for projects of all scales.",
    services: [
      "Crane hire",
      "Rigging & lifting",
      "Commercial construction",
      "Heavy equipment placement",
      "Site access solutions",
    ],
    images: [
      { src: "/images/partners/direct cranes/img 1.jpg", alt: "Direct Cranes on site" },
      { src: "/images/partners/direct cranes/img 2.jpg", alt: "Direct Cranes lifting operation" },
      { src: "/images/partners/direct cranes/img 3.jpg", alt: "Direct Cranes project work" },
      { src: "/images/partners/direct cranes/img 4.jpg", alt: "Direct Cranes commercial construction" },
      { src: "/images/partners/direct cranes/img 5.jpg", alt: "Direct Cranes crane hire" },
      { src: "/images/partners/direct cranes/img 6.jpg", alt: "Direct Cranes rigging services" },
    ],
  },
  {
    name: "Pro Plumbing Supplies",
    slug: "pro-plumbing",
    website: "https://proplumbingsupplies.com.au/",
    logo: "/images/partners/pro plumbing/pro plumbing logo.png",
    description:
      "Pro Plumbing Supplies is a family-owned plumbing distributor with over 50 years of combined industry experience, supplying trade and retail customers across Melbourne. Stocking a comprehensive range of commercial, domestic, and maintenance plumbing products from leading brands, they support Bayliss Building Group projects with reliable supply and expert trade advice.",
    services: [
      "Commercial plumbing supplies",
      "Bathroom & kitchen fixtures",
      "Laundry & drainage products",
      "Maintenance supplies",
      "Trade & retail distribution",
    ],
    images: [],
  },
  {
    name: "Pez Crete",
    slug: "pezcrete",
    website: "https://www.pezcrete.com.au/",
    logo: "",
    description:
      "Pez Crete are Melbourne's trusted concrete specialists with over 10 years of experience and 500+ completed projects. Working alongside Bayliss Building Group, they deliver precision concrete work across residential and commercial projects — from driveways and slabs to structural works, exposed aggregate, and pool surrounds.",
    services: [
      "Concrete placement",
      "Boxing & steel work",
      "Exposed aggregate",
      "Pool surrounds",
      "Structural concrete",
      "Driveways & footpaths",
    ],
    images: [
      { src: "https://www.pezcrete.com.au/gallery/img%201.jpeg", alt: "Pez Crete concrete project" },
      { src: "https://www.pezcrete.com.au/gallery/img%202.jpg", alt: "Pez Crete concrete work" },
      { src: "https://www.pezcrete.com.au/gallery/img%203.jpg", alt: "Pez Crete finished concrete" },
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
