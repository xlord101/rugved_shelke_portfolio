export interface StickerCategory {
  id: string;
  title: string;
  description: string;
  badge: string;
  tag: string;
  features: string[];
}

export const stickerDumpContent = {
  brandName: "StickerDump.exe",
  eyebrow: "STICKERS & NFC PRODUCTS",
  headline: "Small things. Big personality.",
  supportingCopy:
    "StickerDump.exe is where playful sticker designs meet personalized products. Made for your laptop, your everyday carry, your space, and the way you express yourself.",
  
  links: {
    instagramProfile: "https://www.instagram.com/stickerdump.exe/",
    instagramPost: "https://www.instagram.com/p/DeRbvGPjKDU/",
    portfolioReturn: "/",
  },

  assets: {
    logo: "/images/stickerdump/stickerdump-logo.png",
    nfcCardMockup: "/images/stickerdump/nfc-card-mockup.png",
    nfcPoster: "/images/stickerdump/nfc-poster.png",
    beYourOwnCeo: "/images/stickerdump/be-your-own-ceo.png",
  },

  pricing: {
    small: "₹9",
    large: "₹14",
    minOrder: "6 stickers",
    steps: [
      {
        num: "01",
        title: "Browse the available designs",
        desc: "Explore our featured packs, pop culture drops, and aesthetic sticker cuts.",
      },
      {
        num: "02",
        title: "Choose stickers & quantities",
        desc: "Pick your sizes and counts (minimum order: 6 stickers across any mix).",
      },
      {
        num: "03",
        title: "Confirm on Instagram",
        desc: "Drop a DM to @stickerdump.exe to verify print availability and delivery details.",
      },
    ],
    customNote:
      "Have custom artwork, club badges, or hackathon runs in mind? Inquire via Instagram to ask about print run availability.",
  },

  stickersSection: {
    heading: "Your stuff. Your stickers.",
    subheading: "Little details that make ordinary things feel a little more like you.",
    categories: [
      {
        id: "cyber-dev",
        title: "Terminal, Code & Cyberpunk",
        description: "Monospace wits, git commits, Linux daemons, and pixel art built for developer laptops.",
        badge: "Developer Staples",
        tag: "Dev Edition",
        features: ["Die-cut Vinyl", "Matte Waterproof", "Zero Residue Peel"],
      },
      {
        id: "memes-culture",
        title: "Pop Culture & Internet Lore",
        description: "Iconic meme drops, cinematic one-liners, and niche internet artifacts with bold character.",
        badge: "Street & Culture",
        tag: "Lore Drop",
        features: ["Ultra-vivid 300 DPI", "UV Laminated", "Scuff-Resistant"],
      },
      {
        id: "anime-y2k",
        title: "Anime, Y2K & Retro Grunge",
        description: "Vaporwave typography, holographic sparkles, and retro aesthetics that stand out anywhere.",
        badge: "Aesthetic Prints",
        tag: "Y2K Series",
        features: ["High Gloss Finish", "Scratch-Shield", "Vibrant Inks"],
      },
      {
        id: "custom-runs",
        title: "Custom Brand & Community Batches",
        description: "Personal artwork, startup stickers, hackathons, and community prints tailored to your vibe.",
        badge: "Bespoke Prints",
        tag: "Custom Order",
        features: ["Custom Die-Cuts", "Batch Scalable", "Ask on Instagram"],
      },
    ] as StickerCategory[],
  },

  nfcSection: {
    heading: "Your introduction, one tap away.",
    subheading:
      "StickerDump is expanding beyond stickers into personalized NFC cards—bringing a physical card together with a digital destination.",
    conceptExplanation:
      "A compatible NFC-enabled smartphone can tap a properly configured card to open a digital destination, depending on the card's configuration and device compatibility. No external apps required.",
    potentialUses: [
      {
        title: "Personal Portfolio & Resume",
        desc: "Instant showcase for builders, developers, designers, and students sharing live projects.",
      },
      {
        title: "Digital Contact Card (vCard)",
        desc: "Exchange phone numbers, emails, and LinkedIn handles in a single touch at meetups.",
      },
      {
        title: "Social & Link-in-Bio",
        desc: "Direct collaborators and clients straight to your curated digital home or storefront.",
      },
      {
        title: "Freelance & Studio Identity",
        desc: "Leave a tactile, unforgettable impression that clients can tap again anytime.",
      },
    ],
  },

  behindTheBrand: {
    heading: "Made with a little chaos.",
    story:
      "StickerDump.exe was started by Rugved Shelke—driven by the conviction that the physical things we carry every day deserve personal expression. In a world crowded with sterile tech, we cut through the noise with tactile stickers, vibrant ink, and experimental NFC products.",
  },

  finalCta: {
    heading: "Found something you like?",
    subheading: "Explore the designs, ask about custom options, or get in touch to place an order.",
  },
};
