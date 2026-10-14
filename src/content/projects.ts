import { ProjectItem } from "@/lib/types";

export const projectsContent: ProjectItem[] = [
  {
    slug: "raceiq",
    title: "RaceIQ — Real-Time Race Decision Engine",
    category: "AI / Motorsport Strategy",
    year: "2026",
    image: "/images/projects/raceiq.svg",
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
    slug: "startrek",
    title: "Startrek — Production ERP for KD Export",
    category: "Production Software / ERP",
    year: "2025",
    image: "/images/projects/startrek.svg",
    overview:
      "Built and shipped a supply-chain platform used by a real business. The system includes six role-based user types, an audit-logged state machine for export dispatch, and concurrency-safe stock deduction to prevent duplicate or over-capacity dispatches. Post-launch reliability work included automated tests for bundle calculations, room capacity, and dispatch idempotency. Note: The external link directs to KD Export's public company landing page; the internal ERP application, proprietary source code, and commercial data are strictly private.",
    challenge:
      "Manual export dispatch spreadsheets and uncoordinated inventory logs led to risks of duplicate allocations, capacity overflows in cold-storage rooms, and unverified bundle weight calculations during high-throughput international shipping windows.",
    solution:
      "Architected and deployed a multi-tenant relational ERP with PostgreSQL and Prisma. Enforced concurrency-safe inventory deductions with transactional locking, automated bundle calculation assertions, room capacity bounds, and an append-only audit trail across all export dispatches.",
    client: "KD Export",
    role: "Full-Stack Engineer & Systems Architect",
    liveUrl: "https://kdexport.co.in/",
    linkLabel: "Visit KD Export",
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
    slug: "issuepilot",
    title: "Hermes → IssuePilot — AI-Native Issue Recommendation Agent",
    category: "AI Agents / Developer Tools",
    year: "2025",
    image: "/images/projects/issuepilot.svg",
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
    slug: "freelance-web-development",
    title: "Freelance Web Development — Client Projects",
    category: "Client Work / Web Development",
    year: "2024 – 2025",
    image: "/images/projects/freelance.svg",
    overview:
      "Designed and delivered websites for three clients, taking ownership from requirements and implementation through post-launch fixes. Client projects include KD Export (corporate export landing page), House of 666 (restaurant and cafe website), and Rojekar Brothers (digital product catalogue).",
    challenge:
      "Small businesses and regional brands require performant, visually distinctive web presences tailored to their specific operational needs — from industrial export catalogs to restaurant menus — on tight turnaround schedules.",
    solution:
      "Engineered and deployed bespoke web presences with Next.js, React, and Tailwind CSS. Built the public corporate portal for KD Export, an atmospheric digital menu and location site for House of 666, and a structured product catalog for Rojekar Brothers.",
    role: "Independent Web Developer & Designer",
    liveUrl: "https://kdexport.co.in/",
    linkLabel: "Visit KD Export",
    links: [
      { label: "Visit KD Export", url: "https://kdexport.co.in/" },
      { label: "Visit House of 666", url: "https://house-of-666.netlify.app/" },
    ],
    scope: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "WordPress",
      "Client Delivery",
      "Responsive Design",
    ],
  },
  {
    slug: "lifeflow",
    title: "LifeFlow — Blood Donation Coordination",
    category: "Healthcare / Workflow Automation",
    year: "2024",
    image: "/images/projects/lifeflow.svg",
    overview:
      "A blood-donation coordination project associated with a blood-bank dashboard and communication workflows, designed to improve donor tracking and emergency response visibility.",
    challenge:
      "Emergency blood requests often face delays due to fragmented donor availability records and cumbersome manual coordination between donors and local blood banks.",
    solution:
      "Built a responsive coordination dashboard tracking blood group inventory, donor eligibility intervals, and notification queues for rapid response during acute shortages.",
    role: "Full-Stack Developer",
    liveUrl: "https://github.com/xlord101/blood-bank-dashboard",
    linkLabel: "View on GitHub",
    scope: [
      "Full-Stack Development",
      "Workflow Automation",
      "Healthcare Coordination",
      "Inventory Tracking",
    ],
  },
];
