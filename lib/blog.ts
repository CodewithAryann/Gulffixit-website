export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  keywords: string[];
  date: string; // ISO
  readMinutes: number;
  coverImage: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ac-maintenance-schedule-dubai",
    title: "The AC Maintenance Schedule Every Dubai Home Actually Needs",
    category: "AC Services",
    excerpt:
      "Dubai's climate runs AC units harder than almost anywhere else. Here's the realistic service schedule that prevents breakdowns instead of reacting to them.",
    metaDescription:
      "A practical AC maintenance schedule for Dubai homes and apartments, covering filter cleaning, gas checks, coil servicing and when to call a technician.",
    keywords: ["ac maintenance dubai", "ac service schedule", "central ac dubai"],
    date: "2026-05-12",
    readMinutes: 6,
    coverImage: "/images/blog/ac-maintenance.jpg",
    content: [
      {
        type: "p",
        text: "Most AC breakdowns we get called out for in Dubai aren't sudden failures — they're the predictable result of a unit that hasn't been serviced in a year or more. The heat load here is unusual, and a maintenance schedule built for a milder climate won't cut it.",
      },
      { type: "h2", text: "Why Dubai's climate changes the schedule" },
      {
        type: "p",
        text: "A central AC system here can run close to continuously for six months of the year. That accelerates filter clogging, coil fouling and refrigerant pressure issues far faster than manufacturer guidelines assume.",
      },
      { type: "h2", text: "Monthly checks you can do yourself" },
      {
        type: "list",
        items: [
          "Rinse or replace filters every 3–4 weeks during peak summer",
          "Check the outdoor unit for blocked airflow or debris",
          "Listen for new rattling, grinding or hissing sounds",
          "Confirm condensate drainage isn't pooling near the indoor unit",
        ],
      },
      { type: "h2", text: "What a technician should check twice a year" },
      {
        type: "list",
        items: [
          "Refrigerant gas pressure and any signs of a slow leak",
          "Coil cleaning, both evaporator and condenser",
          "Electrical connections and capacitor health",
          "Ductwork for leaks or insulation breakdown",
        ],
      },
      {
        type: "quote",
        text: "A unit that's serviced twice a year typically costs less to run and lasts years longer than one that's only looked at when it fails.",
      },
      { type: "h2", text: "Signs you shouldn't wait for the next scheduled visit" },
      {
        type: "p",
        text: "Weak airflow, a sudden spike in your DEWA bill, or the unit cycling on and off rapidly are all signs worth a same-week inspection rather than waiting for a routine check.",
      },
    ],
  },
  {
    slug: "electrical-safety-checklist-older-buildings",
    title: "Electrical Safety Checklist for Older Buildings in Dubai",
    category: "Electrical",
    excerpt:
      "Older apartments and villas often carry electrical setups that haven't kept pace with modern load demands. Here's what to check before it becomes a hazard.",
    metaDescription:
      "An electrical safety checklist for older Dubai properties, covering panel capacity, warning signs of faulty wiring, and when a rewiring upgrade is worth it.",
    keywords: ["electrical safety dubai", "rewiring dubai", "older building electrical"],
    date: "2026-04-28",
    readMinutes: 5,
    coverImage: "/images/blog/electrical.jpg",
    content: [
      {
        type: "p",
        text: "Properties built more than 15 years ago were wired for a different era of appliance load. Today's mix of AC units, kitchen appliances and electronics can push old panels past what they were designed for.",
      },
      { type: "h2", text: "Warning signs worth acting on" },
      {
        type: "list",
        items: [
          "Breakers that trip repeatedly under normal use",
          "Warm or discoloured switch plates and outlets",
          "Flickering lights unrelated to the bulb itself",
          "A faint burning smell near the distribution board",
        ],
      },
      { type: "h2", text: "Panel capacity is the real bottleneck" },
      {
        type: "p",
        text: "Most of the calls we get aren't about a single faulty wire — they're about a distribution board that was sized for far fewer appliances than the property now runs.",
      },
      { type: "h2", text: "When a partial rewire makes sense" },
      {
        type: "p",
        text: "A full rewire isn't always necessary. In many cases, upgrading the panel and the circuits feeding high-draw rooms — kitchens, AC units — solves the problem without touching the rest of the property.",
      },
    ],
  },
  {
    slug: "interior-fit-out-cost-breakdown-dubai",
    title: "What an Interior Fit-Out Actually Costs in Dubai",
    category: "Fit-Out",
    excerpt:
      "Fit-out quotes vary wildly because the scope behind them varies wildly. Here's how to read a quote and know what you're actually paying for.",
    metaDescription:
      "A cost breakdown for interior fit-out projects in Dubai, covering partitioning, MEP work, finishes and the variables that move a quote up or down.",
    keywords: ["fit out cost dubai", "office fit out dubai", "fit out quote breakdown"],
    date: "2026-04-10",
    readMinutes: 7,
    coverImage: "/images/blog/fitout.jpg",
    content: [
      {
        type: "p",
        text: "Two fit-out quotes for what looks like the same space can come in tens of thousands of dirhams apart, and it's rarely because one contractor is simply cheaper. Usually the scope is different.",
      },
      { type: "h2", text: "The four cost blocks in any fit-out" },
      {
        type: "list",
        items: [
          "Partitioning and structural changes",
          "MEP — electrical, AC ducting, plumbing where relevant",
          "Finishes — flooring, paint, ceilings, joinery",
          "Project management and permit handling",
        ],
      },
      { type: "h2", text: "What moves the number most" },
      {
        type: "p",
        text: "MEP coordination is the single biggest swing factor. A space that needs new ducting routes or a relocated electrical panel will cost meaningfully more than one that doesn't, even at identical square footage.",
      },
      {
        type: "quote",
        text: "The cheapest quote on paper is rarely the cheapest project once variations start coming in mid-build.",
      },
      { type: "h2", text: "Questions worth asking before you sign" },
      {
        type: "list",
        items: [
          "Is the quote fixed-price or subject to variation orders?",
          "Who handles authority approvals and permit fees?",
          "What's included in the warranty period after handover?",
        ],
      },
    ],
  },
  {
    slug: "villa-renovation-planning-guide",
    title: "Planning a Villa Renovation Without the Usual Delays",
    category: "Renovation",
    excerpt:
      "Most renovation delays trace back to the planning stage, not the construction stage. Here's how to sequence a villa renovation properly.",
    metaDescription:
      "A planning guide for villa renovations in Dubai — sequencing trades correctly, avoiding common delay points, and what to lock in before work starts.",
    keywords: ["villa renovation dubai", "renovation planning", "villa remodel dubai"],
    date: "2026-03-22",
    readMinutes: 6,
    coverImage: "/images/blog/villa.png",
    content: [
      {
        type: "p",
        text: "Renovation timelines slip almost always for the same reason: a decision that should have been made before work started gets made halfway through instead.",
      },
      { type: "h2", text: "Lock these in before demolition" },
      {
        type: "list",
        items: [
          "Final layout and any structural changes",
          "Tile, paint and fixture selections",
          "Electrical and plumbing point locations",
          "A realistic trade sequencing schedule",
        ],
      },
      { type: "h2", text: "The trade order that avoids rework" },
      {
        type: "p",
        text: "Structural and MEP work always comes before finishes. Picking a tile after the floor screed is already down is one of the most common — and costly — sequencing mistakes.",
      },
      { type: "h2", text: "Building in a buffer" },
      {
        type: "p",
        text: "Material lead times in Dubai can shift by weeks depending on the supplier. A realistic program builds in buffer time rather than assuming everything arrives exactly on schedule.",
      },
    ],
  },
  {
    slug: "choosing-the-right-partition-type",
    title: "Gypsum, Glass or Block: Choosing the Right Partition Type",
    category: "Partitions",
    excerpt:
      "The partition material you choose affects cost, acoustics and timeline more than most people expect going into a fit-out.",
    metaDescription:
      "A comparison of gypsum, glass and block partitions for commercial and residential spaces in Dubai, covering cost, sound insulation and install time.",
    keywords: ["partition types dubai", "gypsum partition", "glass partition office"],
    date: "2026-03-05",
    readMinutes: 5,
    coverImage: "/images/blog/gypsum.jpg",
    content: [
      {
        type: "p",
        text: "Partition choice is often treated as a finishing decision when it's really a structural and acoustic one. Getting it wrong is expensive to undo once walls are up.",
      },
      { type: "h2", text: "Gypsum partitions" },
      {
        type: "p",
        text: "Fast to install and the most common choice for office fit-outs. Acoustic performance depends heavily on the insulation layer used inside the stud cavity.",
      },
      { type: "h2", text: "Glass partitions" },
      {
        type: "p",
        text: "Common in modern office layouts for natural light. Single-glazed glass offers minimal sound insulation — double-glazed or laminated options are worth it for meeting rooms.",
      },
      { type: "h2", text: "Block partitions" },
      {
        type: "p",
        text: "Slower to install and used less often in fit-outs, but the right choice where load-bearing capacity or strong fire-rating requirements apply.",
      },
      {
        type: "quote",
        text: "Acoustic rating, not appearance, is usually the deciding factor once a space is actually in use.",
      },
    ],
  },
  {
    slug: "bathroom-retiling-what-to-expect",
    title: "Re-Tiling a Bathroom: What the Process Actually Involves",
    category: "Plaster & Tiling",
    excerpt:
      "A re-tiling job is rarely just tiles. Here's what's usually hiding underneath, and why waterproofing is the step that matters most.",
    metaDescription:
      "What to expect during a bathroom re-tiling project in Dubai, including waterproofing, substrate repair, and realistic project timelines.",
    keywords: ["bathroom retiling dubai", "tiling project dubai", "waterproofing bathroom"],
    date: "2026-02-18",
    readMinutes: 5,
    coverImage: "/images/blog/tiling.png",
    content: [
      {
        type: "p",
        text: "Tiling is the visible part of a re-tiling project, but it's rarely the part that determines whether the job lasts. What happens underneath the tile matters more.",
      },
      { type: "h2", text: "What's usually found once tiles come off" },
      {
        type: "list",
        items: [
          "Failed or missing waterproofing membrane",
          "Cracked or uneven substrate",
          "Plumbing penetrations that were never properly sealed",
        ],
      },
      { type: "h2", text: "Why waterproofing is the step that matters most" },
      {
        type: "p",
        text: "A beautifully tiled bathroom with poor waterproofing underneath will leak into the floor below within a year or two. It's the step that's easiest to skip and most expensive to have skipped.",
      },
      { type: "h2", text: "Realistic timeline" },
      {
        type: "p",
        text: "A single bathroom strip-out and re-tile typically runs five to seven working days once waterproofing cure time is factored in — rushing this step is where most failures start.",
      },
    ],
  },
  {
    slug: "exterior-painting-dubai-climate",
    title: "Why Exterior Paint Fails Faster in Dubai (and How to Prevent It)",
    category: "Painting",
    excerpt:
      "UV exposure and heat cycling break down exterior paint here faster than in most climates. The prep work matters more than the paint brand.",
    metaDescription:
      "Why exterior paint deteriorates faster in Dubai's climate, and the surface preparation steps that extend the life of an exterior repaint.",
    keywords: ["exterior painting dubai", "villa repaint dubai", "weatherproof paint dubai"],
    date: "2026-02-02",
    readMinutes: 4,
    coverImage: "/images/blog/paint.png",
    content: [
      {
        type: "p",
        text: "An exterior repaint that would last seven or eight years in a milder climate often shows chalking and cracking within three or four years here, mostly down to UV intensity and surface heat cycling.",
      },
      { type: "h2", text: "Where most exterior paint jobs go wrong" },
      {
        type: "p",
        text: "It's rarely the paint itself. Skipping proper surface prep — old paint removal, crack filling, primer suited to the substrate — is the most common reason a repaint fails early.",
      },
      { type: "h2", text: "What actually extends the lifespan" },
      {
        type: "list",
        items: [
          "UV-resistant exterior-grade paint, not interior-grade",
          "A primer matched to the existing surface condition",
          "Proper crack and joint sealing before painting",
        ],
      },
    ],
  },
  {
    slug: "false-ceiling-design-considerations",
    title: "False Ceilings: What to Plan for Before Installation",
    category: "Ceilings",
    excerpt:
      "A false ceiling isn't just a finish — it has to account for lighting, AC ducting and access panels before a single board goes up.",
    metaDescription:
      "What to plan before installing a suspended false ceiling, including lighting layout, AC ducting clearance, and access panel placement.",
    keywords: ["false ceiling dubai", "suspended ceiling installation", "ceiling design office"],
    date: "2026-01-20",
    readMinutes: 4,
    coverImage: "/images/blog/False-Ceiling-Installation.png",
    content: [
      {
        type: "p",
        text: "False ceilings get treated as a purely cosmetic choice, but they're really a coordination problem — everything that needs to sit above the ceiling line has to be planned before installation starts.",
      },
      { type: "h2", text: "What needs to be decided first" },
      {
        type: "list",
        items: [
          "Lighting layout and fixture types",
          "AC ducting routes and required clearance",
          "Sprinkler and detector placement where applicable",
          "Access panel locations for future maintenance",
        ],
      },
      { type: "h2", text: "The cost of skipping access panels" },
      {
        type: "p",
        text: "Without planned access points, any future maintenance above the ceiling means cutting into finished boards. A handful of well-placed access panels avoids that entirely.",
      },
    ],
  },
  {
    slug: "plumbing-overhaul-multi-unit-buildings",
    title: "Plumbing Overhauls in Older Multi-Unit Buildings: What to Expect",
    category: "Plumbing",
    excerpt:
      "Plumbing issues in older buildings rarely stay isolated to one unit for long. Here's how a building-wide overhaul is usually approached.",
    metaDescription:
      "How a plumbing overhaul is approached in older multi-unit residential buildings in Dubai, including common failure points and sequencing.",
    keywords: ["plumbing overhaul dubai", "building plumbing repair", "old pipe replacement"],
    date: "2026-01-08",
    readMinutes: 5,
    coverImage: "/images/blog/plumbing.png",
    content: [
      {
        type: "p",
        text: "In older buildings, a leak in one unit is often a symptom of a pipe network that's reaching the end of its working life across multiple floors, not an isolated fault.",
      },
      { type: "h2", text: "Common failure points in older networks" },
      {
        type: "list",
        items: [
          "Corroded galvanised supply lines",
          "Degraded seals at riser connections",
          "Undersized drainage for current occupancy levels",
        ],
      },
      { type: "h2", text: "How an overhaul is typically sequenced" },
      {
        type: "p",
        text: "Work usually moves floor by floor, isolating water supply to affected units only where possible, to avoid shutting down the whole building during the project.",
      },
      {
        type: "quote",
        text: "Replacing risers proactively is almost always cheaper than repeated emergency repairs to the same network.",
      },
    ],
  },
];
