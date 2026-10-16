import { ProjectItem } from "@/lib/types";

export const projectsContent: ProjectItem[] = [
  {
    slug: "startrek",
    title: "Startrek — Production ERP for KD Export",
    category: "Production Software / ERP",
    year: "2025",
    image: "/images/projects/startrek.webp",
    overview:
      "Built and shipped a supply-chain platform used by a real business. The system includes six role-based user types, an audit-logged state machine for export dispatch, and concurrency-safe stock deduction to prevent duplicate or over-capacity dispatches. Note: The ERP is proprietary operational software and its private source code/instance is not publicly exposed; the link below directs to KD Export's public corporate website.",
    challenge:
      "Manual export dispatch spreadsheets and uncoordinated inventory logs led to risks of duplicate allocations, capacity overflows in cold-storage rooms, and unverified bundle weight calculations during high-throughput international shipping windows.",
    solution:
      "Architected and deployed a multi-tenant relational ERP with PostgreSQL and Prisma. Enforced concurrency-safe inventory deductions with transactional locking, automated bundle calculation assertions, room capacity bounds, and an append-only audit trail across all export dispatches.",
    client: "KD Export",
    role: "Full-Stack Engineer & Systems Architect",
    liveUrl: "https://kdexport.co.in/",
    linkLabel: "Visit KD Export (Public Site)",
    scope: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Concurrency Safety",
      "Automated Testing",
      "RBAC",
    ],
  },
  {
    slug: "raceiq",
    title: "RaceIQ — Real-Time Race Decision Engine",
    category: "AI / Motorsport Strategy",
    year: "2026",
    image: "/images/projects/raceiq-hero.webp",
    overview:
      "Co-built a race decision engine for TrackShift 2026 in connection with the Haas F1 Team. The system inferred hidden opponent battery state from public telemetry using an 8-state Hidden Markov Model and optimized attack, hold, and defend decisions using a two-tier dynamic-programming and rolling-horizon model-predictive-control engine.",
    challenge:
      "In modern motorsport racing, opponent battery state of charge (SoC) is classified competitive intelligence. Race engineers must infer deployment patterns and remaining electrical energy in real time to optimize strategic overtake, defense, and pit delta decisions without direct telemetry access.",
    solution:
      "Developed an 8-state Hidden Markov Model (HMM) capable of inferring latent battery deployment regimes from public speed, gear, and throttle telemetry. Coupled this inference engine to a two-tier optimization architecture combining global dynamic programming for long-stint pacing and a rolling-horizon Model Predictive Control (MPC) engine for lap-by-lap tactical decisions.",
    client: "TrackShift 2026 (Haas F1 Connection)",
    role: "Systems & Optimization Engineer",
    liveUrl: "https://github.com/xlord101/RaceIQ",
    linkLabel: "View on GitHub",
    scope: [
      "Python",
      "React",
      "Hidden Markov Models",
      "Model Predictive Control",
      "Dynamic Programming",
      "Telemetry Inference",
    ],
  },
  {
    slug: "issuepilot",
    title: "Hermes → IssuePilot — AI-Native Issue Recommendation Agent",
    category: "AI Agents / Developer Tools",
    year: "2025",
    image: "/images/projects/issuepilot.webp",
    overview:
      "Built an AI-assisted agent that scores and recommends open-source issues using LLM-assisted signals. Added a verify-before-deliver step to reduce the risk of recommending stale or incorrect issues. The project emphasizes verification and reliable recommendations rather than blindly trusting model scores or platform labels.",
    challenge:
      "New open-source contributors often get stuck sifting through stale 'good first issue' labels that are already resolved, claimed in unmerged PRs, or require undocumented domain context beyond beginner scope.",
    solution:
      "Engineered an automated agent pipeline using Python, LangChain, and FastAPI that evaluates issue freshness, repository activity, and pull request overlap. Implemented a deterministic verification filter prior to delivery to ensure recommended issues are currently unassigned and actionable.",
    role: "AI Engineer & Developer",
    liveUrl: "https://github.com/xlord101/open-source-contribution-agent",
    linkLabel: "View on GitHub",
    scope: [
      "Python",
      "LangChain",
      "FastAPI",
      "MongoDB",
      "GitHub Actions",
      "AI Agents",
    ],
  },
  {
    slug: "house-of-666",
    title: "House of 666 — Cafe & Restaurant Experience",
    category: "Client Work / Web Experience",
    year: "2024 – 2025",
    image: "/images/projects/house-of-666-hero.png",
    overview:
      "Designed and engineered an atmospheric, responsive web experience and digital menu for House of 666 cafe & resto — where royal Kolhapuri heritage meets seaside cafe vibes. Focused on immersive aesthetics, rich visual storytelling, fluid micro-interactions, and frictionless mobile navigation for diners discovering menu offerings and ambiance.",
    challenge:
      "The client needed a digital presence that matched their physical ambiance and heritage aesthetic while delivering fast load times, mobile-optimized menu browsing, and easy visitor access on cellular networks.",
    solution:
      "Built a lightweight, responsive web experience with Next.js and Tailwind CSS featuring tactile imagery, warm amber typography, and seamless touch navigation optimized across mobile and desktop devices.",
    client: "House of 666",
    role: "Lead Web Designer & Frontend Developer",
    liveUrl: "https://house-of-666.netlify.app/",
    linkLabel: "Visit Live Website",
    scope: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Mobile-First Design",
      "Client Delivery",
    ],
  },
  {
    slug: "in-the-lab",
    title: "Next Breakthrough — In the Workshop",
    category: "Stealth / Experimental Systems",
    year: "2026",
    image: "/images/projects/upcoming.svg",
    overview:
      "Something ambitious is brewing behind closed doors. Currently heads-down engineering at the intersection of autonomous agents, distributed systems, and real-world software workflows. Stress-testing architectures, breaking edge cases, and converting copious amounts of caffeine into production code. When it's ready to ship, it'll land right here.",
    challenge:
      "Building tools that solve genuine friction points rather than following temporary hype cycles.",
    solution:
      "Deep engineering in progress. Code in flight, benchmarks being tested. Check back soon or follow along on GitHub for early commits.",
    role: "Creator & Engineer",
    liveUrl: "https://github.com/xlord101",
    linkLabel: "Watch on GitHub",
    scope: [
      "Autonomous Agents",
      "Distributed Systems",
      "High Performance",
      "Stay Tuned",
    ],
  },
];
