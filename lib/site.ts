// lib/site.ts
// Central configuration — update company details here and they propagate
// across metadata, structured data, footer, and contact components.

export const site = {
  name: "Gulf Fixit",
  legalName: "Gulf Fixit Technical Services",
  tagline: "Dubai's Maintenance, Fit-Out & MEP Specialists",
  url: "https://www.gulffixit.com",
  description:
    "Gulf Fixit delivers professional fit-out, MEP, and maintenance services across Dubai — from AC repair and electrical works to complete interior renovations. Licensed technicians, transparent pricing, 24/7 callout.",
  phonePrimary: "+971545999795",
  phonePrimaryDisplay: "+971 54 599 9795",
  phoneSecondary: "+97143797288",
  phoneSecondaryDisplay: "+971 4 3797 288",
  email: "sales@gulffixit.com",
  whatsapp: "971545999795",
  address: {
    streetAddress: "Al ASMAWI Office Building, 1st Floor #17 Ras Al Khor Industrial Area 2, Dubai, UAE",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    latitude: 25.1412,
    longitude: 55.2278,
  },
  hours: "Open 24 hours — 7 days a week",
  social: {
    facebook:
      "https://www.facebook.com/GulfFixit.ae",
    instagram: "https://www.instagram.com/gulffixit1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    tiktok: "https://www.tiktok.com/@gulffixit",
    linkedin: "https://www.linkedin.com/company/gulffixit/",
  },
};

export type ServiceItem = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  cardImage: string;
  tagline: string;
  intro: string[];
  highlights: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "fit-outs",
    name: "Interior Fit-Outs",
    shortName: "Fit-Outs",
    metaTitle: "Interior Fit-Out Company in Dubai",
    metaDescription:
      "Commercial and residential fit-out contractor in Dubai. Gulf Fixit delivers turnkey interior fit-outs — design, build and handover for offices, retail and homes.",
    heroImage: "/images/fit-out/fit-out-main.png",
    cardImage: "/images/services/fit-out.png",
    tagline: "Turnkey interiors, built to your brief and your deadline",
    intro: [
      "Gulf Fixit runs complete interior fit-out projects across Dubai — from a single office floor to a multi-unit retail rollout. One contractor manages design coordination, civil work, MEP, joinery and finishing, so you're not chasing five different trades.",
      "We work from architectural drawings or help develop a concept from scratch, then carry it through approvals, procurement, site execution and snagging — with a fixed program and weekly progress reporting.",
    ],
    highlights: [
      { title: "Commercial fit-outs", desc: "Offices, retail units, showrooms, F&B and clinics, built to brand and authority compliance standards." },
      { title: "Residential renovation", desc: "Full villa and apartment refurbishments, including kitchens, bathrooms and built-in joinery." },
      { title: "Design & build", desc: "In-house coordination of architects, MEP consultants and DM/Trakhees approvals where required." },
      { title: "Project management", desc: "Single point of contact, fixed milestones, and daily site supervision through to handover." },
    ],
    process: [
      { step: "01", title: "Site survey & brief", desc: "We visit the space, take measurements and confirm scope, budget range and timeline." },
      { step: "02", title: "Design & quotation", desc: "Detailed BOQ, 2D/3D layout options where needed, and a fixed-price proposal." },
      { step: "03", title: "Approvals & procurement", desc: "We handle authority submissions and material procurement in parallel to avoid delays." },
      { step: "04", title: "Execution", desc: "Civil, MEP, partitions, flooring and joinery executed in sequence with a dedicated supervisor." },
      { step: "05", title: "Handover", desc: "Snagging, deep clean and a documented handover with warranty on workmanship." },
    ],
    faqs: [
      { q: "How long does a typical office fit-out take in Dubai?", a: "A standard office fit-out of 2,000–5,000 sq ft typically takes 4–8 weeks from approved design to handover, depending on authority approval timelines and material lead times. We confirm an exact program once scope is fixed." },
      { q: "Do you handle DM or Trakhees approval drawings?", a: "Yes. We prepare and submit fit-out drawings to Dubai Municipality, Trakhees, or the relevant free zone authority as part of the project, and manage the NOC and completion certificate process." },
      { q: "Can you work around an occupied space?", a: "Yes, we regularly phase fit-out and renovation works in occupied offices, retail units and homes, scheduling noisy or disruptive works outside operating hours where required." },
    ],
    keywords: ["fit out company Dubai", "interior fit out Dubai", "office fit out contractor Dubai", "retail fit out Dubai", "villa renovation Dubai"],
  },
  {
    slug: "air-conditioning",
    name: "Air Conditioning Services",
    shortName: "Air Conditioning",
    metaTitle: "AC Repair & Maintenance Dubai",
    metaDescription:
      "AC repair, installation and annual maintenance contracts in Dubai. Split, ducted and central AC units serviced by licensed technicians — same-day callout available.",
    heroImage: "/images/ac/ac.png",
    cardImage: "/images/services/ac-work.png",
    tagline: "Cooling systems that keep working through the Dubai summer",
    intro: [
      "From a single split unit to a building's central chiller plant, Gulf Fixit installs, repairs and maintains air conditioning systems across Dubai. Our technicians are trained on the major brands used in UAE residential and commercial buildings.",
      "We also run Annual Maintenance Contracts (AMCs) for landlords, facilities managers and businesses who want scheduled servicing instead of reacting to breakdowns.",
    ],
    highlights: [
      { title: "AC repair & servicing", desc: "Gas top-up, coil cleaning, drainage clearing and fault diagnosis for split and window units." },
      { title: "Ducted & central AC", desc: "Maintenance and repair for ducted split systems, FCUs and chiller-fed installations." },
      { title: "New installation", desc: "Supply and installation of new split and ducted units, sized correctly for the space." },
      { title: "Annual maintenance contracts", desc: "Scheduled quarterly or bi-annual servicing with priority breakdown response." },
    ],
    process: [
      { step: "01", title: "Diagnosis call", desc: "Describe the issue by phone or WhatsApp — we give an initial assessment and callout window." },
      { step: "02", title: "On-site inspection", desc: "A technician inspects the unit, checks gas pressure, electricals and drainage." },
      { step: "03", title: "Transparent quote", desc: "You approve the repair cost before any work starts — no surprise charges." },
      { step: "04", title: "Repair or service", desc: "Work is completed on-site in most cases, with parts sourced same-day where possible." },
    ],
    faqs: [
      { q: "How often should AC units be serviced in Dubai?", a: "We recommend servicing split units every 3 months and ducted/central systems every 3–6 months, given Dubai's dust levels and near-continuous summer usage. An AMC keeps this on schedule automatically." },
      { q: "Do you offer same-day AC repair?", a: "In most areas of Dubai, yes — same-day or next-day callout is available for breakdowns, subject to technician availability." },
      { q: "What AC brands do you service?", a: "Our technicians work on all major brands sold in the UAE, including Daikin, Carrier, Mitsubishi, LG, Gree and Super General, across split, ducted and central systems." },
    ],
    keywords: ["AC repair Dubai", "AC maintenance Dubai", "air conditioning service Dubai", "AC company Dubai", "AC AMC Dubai"],
  },
  {
    slug: "electrical-works",
    name: "Electrical Works",
    shortName: "Electrical",
    metaTitle: "Electrician & Electrical Maintenance Dubai",
    metaDescription:
      "Licensed electrical contractor in Dubai for wiring, DB upgrades, lighting installation and fault-finding. Residential and commercial electrical works, available 24/7.",
    heroImage: "/images/projects/electrical/1.jpeg",
    cardImage: "/images/services/electrical.png",
    tagline: "Safe, compliant electrical work for homes and businesses",
    intro: [
      "Gulf Fixit's electrical team handles everything from a single socket fault to full rewiring of a villa or commercial unit, working to UAE electrical safety standards throughout.",
      "All work is carried out by qualified electricians, with isolation and testing procedures followed on every job — no shortcuts on safety, regardless of job size.",
    ],
    highlights: [
      { title: "Fault-finding & repairs", desc: "Tripping breakers, dead sockets, flickering lights and intermittent faults diagnosed and fixed." },
      { title: "Wiring & rewiring", desc: "New circuits, full property rewiring and upgrades to distribution boards." },
      { title: "Lighting installation", desc: "Downlights, pendant fittings, outdoor and landscape lighting, and smart lighting setups." },
      { title: "Commercial electrical", desc: "Office and retail electrical fit-out, power distribution and compliance certification." },
    ],
    process: [
      { step: "01", title: "Describe the fault", desc: "Tell us what's happening — we triage urgency and schedule a technician." },
      { step: "02", title: "Inspection & isolation", desc: "Safe isolation of the affected circuit before any diagnostic work begins." },
      { step: "03", title: "Fix & test", desc: "Repair or installation carried out, then tested under load before we leave." },
      { step: "04", title: "Sign-off", desc: "You receive a summary of the work done and any recommendations for follow-up." },
    ],
    faqs: [
      { q: "Are your electricians licensed for Dubai?", a: "Yes, our electrical team is trained and experienced in UAE residential and commercial electrical standards, and we pull permits where the work scope requires it." },
      { q: "Can you upgrade an old distribution board?", a: "Yes, DB upgrades and consumer unit replacements are one of our most common jobs in older Dubai villas and buildings — we size the new board to current and future load." },
      { q: "Do you do emergency electrical callouts?", a: "Yes, we offer priority callout for urgent issues like power loss, burning smells, or exposed wiring — call our line directly for fastest response." },
    ],
    keywords: ["electrician Dubai", "electrical maintenance Dubai", "electrical contractor Dubai", "DB upgrade Dubai", "emergency electrician Dubai"],
  },
  {
    slug: "plumbing-works",
    name: "Plumbing Works",
    shortName: "Plumbing",
    metaTitle: "Plumber & Plumbing Maintenance Dubai",
    metaDescription:
      "Plumbing repair, installation and maintenance across Dubai — leak detection, pipe replacement, water heater installation and bathroom fit-out plumbing.",
    heroImage: "/images/plumbing-works/bg.png",
    cardImage: "/images/services/plumbing-1.png",
    tagline: "Leak-free plumbing for villas, apartments and commercial units",
    intro: [
      "From a dripping tap to a full bathroom re-pipe, Gulf Fixit's plumbing team covers residential and commercial properties across Dubai, including leak detection without breaking tiles unnecessarily.",
      "We also support fit-out and renovation projects with first-fix and second-fix plumbing, water heater installation, and pump and tank maintenance.",
    ],
    highlights: [
      { title: "Leak detection & repair", desc: "Locating hidden leaks behind walls, under floors or in risers, with minimal disruption." },
      { title: "Pipe & fitting replacement", desc: "Repiping for older properties, replacing corroded or leaking sections of supply and drainage lines." },
      { title: "Water heater services", desc: "Installation, repair and descaling of electric and gas water heaters." },
      { title: "Bathroom & kitchen plumbing", desc: "Full plumbing rough-in and fixture installation for renovations and fit-outs." },
    ],
    process: [
      { step: "01", title: "Report the issue", desc: "Describe the symptom — slow drain, low pressure, visible leak or noise." },
      { step: "02", title: "On-site diagnosis", desc: "Technician inspects, and uses leak-detection methods where the source isn't visible." },
      { step: "03", title: "Quote & approval", desc: "Fixed quote provided before repair, replacement or installation begins." },
      { step: "04", title: "Repair & pressure test", desc: "Work completed and pressure-tested to confirm the issue is fully resolved." },
    ],
    faqs: [
      { q: "Can you detect leaks without breaking the floor?", a: "In most cases yes — we use acoustic and moisture-based detection methods first, and only open up flooring or walls once the leak location is confirmed." },
      { q: "Do you install water heaters?", a: "Yes, we supply and install both electric and gas water heaters, and can replace an existing unit on the same day in most cases." },
      { q: "Do you handle plumbing for full bathroom renovations?", a: "Yes, our plumbing team works alongside our fit-out division to handle first-fix and second-fix plumbing for complete bathroom and kitchen renovations." },
    ],
    keywords: ["plumber Dubai", "plumbing maintenance Dubai", "leak detection Dubai", "water heater installation Dubai", "plumbing company Dubai"],
  },
  {
    slug: "painting-carpentry",
    name: "Painting & Carpentry",
    shortName: "Painting & Carpentry",
    metaTitle: "Painting & Carpentry Services Dubai",
    metaDescription:
      "Professional painting and custom carpentry in Dubai — interior and exterior painting, wood flooring, built-in wardrobes and bespoke joinery.",
    heroImage: "/images/painting/painting.png",
    cardImage: "/images/services/Painting-1.png",
    tagline: "Clean finishes and custom joinery, done by tradespeople who care about the details",
    intro: [
      "Gulf Fixit's painting and carpentry team handles everything from a single-room repaint to full villa exteriors, plus bespoke joinery — wardrobes, kitchen cabinetry, TV units and feature walls built to measure.",
      "We prep surfaces properly before painting and use moisture- and UV-resistant products suited to Dubai's climate, so finishes hold up over time.",
    ],
    highlights: [
      { title: "Interior painting", desc: "Walls, ceilings and trim, with full surface prep, filling and sanding before finishing coats." },
      { title: "Exterior painting", desc: "Weather-resistant exterior coatings for villas and low-rise buildings." },
      { title: "Custom carpentry", desc: "Built-in wardrobes, kitchen cabinets, TV units and feature joinery, made to measure." },
      { title: "Wood flooring & doors", desc: "Supply and installation of wood and laminate flooring, plus door supply and fitting." },
    ],
    process: [
      { step: "01", title: "Site visit", desc: "We assess surfaces or measure for carpentry, and discuss finish and material options." },
      { step: "02", title: "Quotation", desc: "Itemized quote covering materials, labor and an estimated completion date." },
      { step: "03", title: "Preparation", desc: "Surfaces are properly prepped — filled, sanded and primed — before any finish coat." },
      { step: "04", title: "Finishing & handover", desc: "Final coats or joinery installation, followed by a walkthrough and touch-ups if needed." },
    ],
    faqs: [
      { q: "Do you do both interior and exterior painting?", a: "Yes, we handle full interior repaints as well as villa and building exteriors, using paints rated for UAE heat and UV exposure on outdoor surfaces." },
      { q: "Can you build custom wardrobes to fit an existing space?", a: "Yes, our carpentry team measures the space on-site and builds wardrobes, cabinetry and joinery to fit exactly, including awkward layouts and sloped ceilings." },
      { q: "How long does a typical villa repaint take?", a: "A standard 3–4 bedroom villa interior repaint typically takes 4–7 days depending on the number of rooms and finish quality requested." },
    ],
    keywords: ["painting company Dubai", "carpentry services Dubai", "villa painting Dubai", "custom wardrobes Dubai", "joinery Dubai"],
  },
  {
    slug: "plaster-tiling",
    name: "Plaster & Tiling Works",
    shortName: "Plaster & Tiling",
    metaTitle: "Plastering & Tiling Contractor Dubai",
    metaDescription:
      "Wall plastering and floor & wall tiling services in Dubai for renovations, new fit-outs and repairs. Precise, level finishes for residential and commercial spaces.",
    heroImage: "/images/plaster/1.png",
    cardImage: "/images/services/Tiling.png",
    tagline: "Level walls and precise tiling, finished to a professional standard",
    intro: [
      "Whether you're patching a damaged wall section or tiling an entire villa, Gulf Fixit's plaster and tiling crews deliver level, durable finishes for residential, commercial and retail spaces across Dubai.",
      "We work with all common tile formats — porcelain, ceramic, marble and large-format slabs — and handle waterproofing for wet areas before tiling begins.",
    ],
    highlights: [
      { title: "Wall & ceiling plastering", desc: "Smooth gypsum and cement plaster finishes, including repair of cracked or damaged sections." },
      { title: "Floor & wall tiling", desc: "Precision tiling for bathrooms, kitchens, living areas and commercial floors." },
      { title: "Waterproofing", desc: "Membrane waterproofing for bathrooms and wet areas prior to tiling." },
      { title: "Patch repairs", desc: "Localized plaster and tile repairs that blend seamlessly with existing finishes." },
    ],
    process: [
      { step: "01", title: "Assessment", desc: "We inspect the surface or area and confirm material requirements." },
      { step: "02", title: "Quotation", desc: "Fixed quote covering materials and labor, with tile/material options if needed." },
      { step: "03", title: "Surface prep", desc: "Waterproofing, screeding or plaster base applied as required before finishing." },
      { step: "04", title: "Finish & grouting", desc: "Tiling, grouting and final plaster coats completed to a level, clean finish." },
    ],
    faqs: [
      { q: "Do you waterproof before tiling bathrooms?", a: "Yes, waterproofing membrane is applied to all wet area floors and walls before tiling, as standard practice on every bathroom job." },
      { q: "Can you match existing tiles for a small repair?", a: "We do our best to source a close match for small repairs, though exact matches aren't always possible if the original tile is discontinued — we'll advise honestly before starting." },
      { q: "What tile materials do you work with?", a: "Porcelain, ceramic, natural stone, marble and large-format slabs — we can also advise on the right material for high-traffic or wet-area use." },
    ],
    keywords: ["tiling contractor Dubai", "plastering services Dubai", "bathroom tiling Dubai", "waterproofing Dubai", "wall plaster repair Dubai"],
  },
  {
    slug: "partitions-ceilings",
    name: "Partitions & False Ceilings",
    shortName: "Partitions & Ceilings",
    metaTitle: "Gypsum Partitions & False Ceiling Dubai",
    metaDescription:
      "Office partitions, glass partitions and false ceiling installation in Dubai for commercial fit-outs and home renovations. Acoustic and fire-rated options available.",
    heroImage: "/images/partitions/bg.png",
    cardImage: "/images/services/partitions.png",
    tagline: "Defined spaces, clean lines, finished fast for live office moves",
    intro: [
      "Gulf Fixit designs and installs gypsum and glass partitions, plus suspended false ceilings, for offices, retail units and residential renovations across Dubai.",
      "We work with fire-rated and acoustic-rated systems where required by building regulations, and coordinate ceiling work around lighting, AC ducting and fire systems already in place.",
    ],
    highlights: [
      { title: "Gypsum partitions", desc: "Single and double-skin partition walls, including sound-insulated and fire-rated options." },
      { title: "Glass partitions", desc: "Framed and frameless glass office partitions for a modern, open feel." },
      { title: "False ceilings", desc: "Suspended gypsum board ceilings with integrated lighting cut-outs and access panels." },
      { title: "Acoustic & fire-rated systems", desc: "Specified systems for meeting rooms, server rooms and fire-compliance zones." },
    ],
    process: [
      { step: "01", title: "Layout review", desc: "We review floor plans or visit site to confirm partition layout and ceiling design." },
      { step: "02", title: "Quotation", desc: "Itemized quote based on linear meterage, materials and finish requirements." },
      { step: "03", title: "Framing & boarding", desc: "Metal stud framing and board installation, coordinated around MEP services." },
      { step: "04", title: "Finishing", desc: "Jointing, sanding and paint-ready finish, or full paint finish on request." },
    ],
    faqs: [
      { q: "Can partition work be done after office hours?", a: "Yes, we regularly schedule partition and ceiling installation outside business hours or over weekends to avoid disrupting an occupied office." },
      { q: "Do you offer fire-rated partition systems?", a: "Yes, fire-rated and acoustic-rated partition systems are available and specified where required by the building's fire and life safety requirements." },
      { q: "How long does false ceiling installation take for a standard office?", a: "A typical 2,000–3,000 sq ft office ceiling installation takes around 1–2 weeks, depending on the complexity of lighting and ducting coordination." },
    ],
    keywords: ["partition contractor Dubai", "false ceiling Dubai", "gypsum partition Dubai", "glass partition Dubai", "office partition installation Dubai"],
  },
  {
    slug: "handyman-services",
    name: "Handyman Services",
    shortName: "Handyman",
    metaTitle: "Handyman Services Dubai",
    metaDescription:
      "On-demand handyman services in Dubai for general repairs, furniture assembly, fixture installation and small maintenance jobs — fast response, fair pricing.",
    heroImage: "/images/services/handyman-work.png",
    cardImage: "/images/services/handyman-work.png",
    tagline: "One call for all the small jobs that pile up",
    intro: [
      "Not every job needs a specialist crew. Gulf Fixit's handyman service covers the general repairs, installations and small maintenance tasks that keep a home or office running smoothly.",
      "Book a single visit for a list of jobs — our technicians are equipped to handle multiple small tasks in one callout, saving you from booking separate trades.",
    ],
    highlights: [
      { title: "General repairs", desc: "Doors, locks, cabinet hinges, curtain rails and other everyday fixes." },
      { title: "Furniture & fixture assembly", desc: "Flat-pack furniture assembly, shelving, and wall-mounted fixture installation." },
      { title: "TV & mirror mounting", desc: "Secure wall-mounting for TVs, mirrors and artwork, with cable management." },
      { title: "Multi-task callouts", desc: "Bundle several small jobs into a single scheduled visit." },
    ],
    process: [
      { step: "01", title: "List your jobs", desc: "Tell us everything you need done — we can usually combine tasks into one visit." },
      { step: "02", title: "Schedule a visit", desc: "We confirm a time window that works for you, including evenings where available." },
      { step: "03", title: "On-site work", desc: "Technician arrives with standard tools and tackles your job list in order." },
      { step: "04", title: "Walkthrough", desc: "We confirm everything's done to satisfaction before closing out the visit." },
    ],
    faqs: [
      { q: "Can I book a handyman for several small jobs at once?", a: "Yes — this is the most common way our handyman service is used. List everything you need and we'll confirm if it fits a single visit." },
      { q: "Do you bring your own tools and parts?", a: "Our technicians carry standard tools and common fixings. Specific replacement parts (a particular tap, light fitting, etc.) are best purchased in advance or we can source them with a small lead time." },
      { q: "Is there a minimum job size?", a: "No minimum — we handle everything from a single picture hung on the wall to a half-day list of small repairs." },
    ],
    keywords: ["handyman Dubai", "handyman services Dubai", "furniture assembly Dubai", "TV mounting Dubai", "home repairs Dubai"],
  },
];

export const navServiceLinks = services.map((s) => ({
  label: s.shortName,
  href: `/services/${s.slug}`,
}));

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
