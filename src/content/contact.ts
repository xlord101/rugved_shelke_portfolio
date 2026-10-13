import { ContactContent } from "@/lib/types";

export const contactContent: ContactContent = {
  headline:
    "If you prefer not to fill out forms, feel free to email me directly and let's talk about the next big thing!",
  email: "hello@soren.com", // Placeholder: [CONTACT EMAIL]
  phone: "(+20) 115 123-4567", // Placeholder: [CONTACT PHONE]
  socials: [
    { label: "X (Twitter)", handle: "@soren.weil", url: "https://x.com" }, // Placeholder: [SOCIAL 1]
    { label: "Instagram", handle: "@its-soren", url: "https://instagram.com" }, // Placeholder: [SOCIAL 2]
    { label: "LinkedIn", handle: "@weil.soren", url: "https://linkedin.com" }, // Placeholder: [SOCIAL 3]
  ],
  projectTypes: [
    "Multipage Website Design",
    "Landing Page Design",
    "Framer Website Development",
    "Framer Landing Page Development",
  ],
  budgetRanges: ["$1k – $5k", "$5k – $10k", "$10k – $20k", "> $20k"],
  availabilityNotice: "One spot available for May, 2026",
};
