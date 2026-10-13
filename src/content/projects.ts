import { ProjectItem } from "@/lib/types";

export const projectsContent: ProjectItem[] = [
  {
    slug: "travel-easy",
    title: "Travel Easy", // Placeholder: [PROJECT TITLE]
    category: "App Design", // Placeholder: [PROJECT CATEGORY]
    year: "2025",
    image: "/images/projects/travel-easy.webp", // Placeholder: [PROJECT IMAGE]
    overview:
      "A minimal mobile travel companion designed to streamline trip itineraries, offline maps, and real-time transit guides with effortless typography and gesture-driven simplicity.",
    challenge:
      "Modern travel apps are frequently overloaded with cluttered recommendation banners, complex navigation menus, and slow offline sync that drains battery life while on the move.",
    solution:
      "We engineered a serene, distraction-free interface prioritizing high-contrast typography, seamless offline route caching, and single-handed gesture navigation for effortless travel planning.",
    client: "Culture Trip Inc.",
    role: "Lead Mobile Designer & Design Systems",
    liveUrl: "https://example.com/travel-easy",
    scope: ["Mobile UI/UX", "Design Systems", "Prototyping", "User Research"],
  },
  {
    slug: "gamma",
    title: "Gamma",
    category: "UX/UI Design",
    year: "2025",
    image: "/images/projects/gamma.webp",
    overview:
      "An intuitive creative presentation platform empowering storytellers to generate expressive slides and docs with dynamic editorial layouts and intelligent typography.",
    challenge:
      "Legacy presentation software relies on rigid static slide templates that stifle visual flow and require manual reformatting whenever content length changes.",
    solution:
      "Developed a fluid container layout engine that automatically adapts type scales, media grids, and editorial pacing as creators draft their presentations.",
    client: "Gamma Technologies",
    role: "Principal Product Designer",
    liveUrl: "https://example.com/gamma",
    scope: ["Design Systems", "Product Strategy", "Interaction Design"],
  },
  {
    slug: "stream-ai",
    title: "Stream AI",
    category: "Product Design",
    year: "2024",
    image: "/images/projects/stream-ai.webp",
    overview:
      "The next generation of real-time video collaboration and creative review workflows for distributed production studios and video editors worldwide.",
    challenge:
      "High-bandwidth video review workflows suffer from frame-inaccurate scrubbing, fragmented comment threads, and clumsy asset versioning across timezones.",
    solution:
      "Designed an ultra-responsive dark-mode studio interface featuring frame-locked visual annotations, instant branch comparison, and keyboard-first scrubbing shortcuts.",
    client: "Frame.io / Stream Labs",
    role: "Senior UX Designer",
    liveUrl: "https://example.com/stream-ai",
    scope: ["Full Product Design", "Design Architecture", "Motion Systems"],
  },
  {
    slug: "foome",
    title: "Foome",
    category: "Web Design",
    year: "2024",
    image: "/images/projects/foome.webp",
    overview:
      "A fresh culinary discovery platform connecting local food artisans with conscious consumers through tactile visual storytelling and curated weekly baskets.",
    challenge:
      "Local organic grocers lacked an evocative digital identity that translated the vibrant warmth and artisanal quality of neighborhood markets.",
    solution:
      "Crafted a tactile, responsive e-commerce experience celebrating organic ingredients through large-scale photography, micro-interactions, and frictionless checkout.",
    client: "SideChef Collective",
    role: "Creative Director & Web Designer",
    liveUrl: "https://example.com/foome",
    scope: ["E-commerce UI", "Creative Direction", "Web Development"],
  },
  {
    slug: "edbost",
    title: "Edbost",
    category: "Visual Design",
    year: "2023",
    image: "/images/projects/edbost.webp",
    overview:
      "Advancing creative intelligence and visual synthesis with state-of-the-art interactive machine learning experiments and generative model interfaces.",
    challenge:
      "Generative AI tools often look clinical and intimidating to digital artists, creating friction between technological capability and human intuition.",
    solution:
      "Created an immersive cinematic interface built on tactile sliders, immediate visual previews, and a sleek dark aesthetic inspired by analog synthesizers.",
    client: "Runway Research",
    role: "Visual Designer & Prototyper",
    liveUrl: "https://example.com/edbost",
    scope: ["Visual Identity", "Interface Design", "Art Direction"],
  },
];
