# Vexoo — Editable Editorial Portfolio Template

A high-fidelity recreation of the **Vexoo** personal portfolio template built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

Designed with a minimal monochrome editorial aesthetic, frosted glass bento grid, scroll-driven text reveal, dynamic live timezone clock, theme toggle (Dark / Light modes), and centralized content architecture for effortless future customization.

---

## 🌟 Key Features

1. **Monochrome Editorial Design System**:
   - Near-black `#000000` deep canvas with subtle film grain noise overlay.
   - Frosted glass cards (`backdrop-blur-xl`) with subtle hairline borders.
   - Large display typography (`Plus Jakarta Sans`) with tight letter spacing.
   - Seamless Dark and Light mode toggle with persistent state.

2. **Asymmetric Bento Grid (Homepage)**:
   - Oversized identity title positioned behind the cards with glassmorphism blur.
   - Interactive navigation cards: **About**, **Portfolio**, **Contact**, **Resume**.
   - High-contrast black & white portrait photo card.
   - Interactive Tool Stack widget featuring Figma, Claude, Notion, and Framer.

3. **Complete Multi-Page Structure**:
   - `/` — Homepage asymmetric bento grid.
   - `/about` — Oversized heading, scroll-reveal biography text, portrait photo, 5-column testimonial quote grid, career experience timeline, large closing display heading, and editorial footer.
   - `/portfolio` — Editorial project showcase with 2-1-2 asymmetric card layout and hover zoom effects.
   - `/portfolio/[slug]` — Pre-rendered dynamic project case study pages with client metadata, narrative sections, scope tags, and next project teaser.
   - `/contact` — Direct email & phone display with interactive inquiry form (project type multi-select chips, budget chips, textarea, availability status, validation, and demo submission state).
   - `/404` / `not-found` — Minimal editorial not-found page with quick return to home.

4. **Dynamic Header & Editorial Footer**:
   - Live location and ticking local time clock (`Kolhāpur • 8:30 PM`) configured via timezone.
   - Dark/Light mode theme toggle.
   - Dynamic back navigation (`← Home` / `← Back`).
   - Shared multi-column footer across all subpages.

5. **Centralized Editable Content Architecture**:
   - All text, links, metadata, and assets are centralized in `src/content/`.
   - Modifying a name, biography, or project requires editing only a single TypeScript data file without touching any UI component.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Node.js 20+
- npm, pnpm, or bun

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
├── public/
│   └── images/
│       ├── portrait-card.png        # Small homepage portrait
│       ├── portrait-large.jpg       # About page portrait
│       └── projects/                # Project mockup assets
│           ├── travel-easy.webp
│           ├── gamma.webp
│           ├── stream-ai.webp
│           ├── foome.webp
│           └── edbost.webp
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout, Plus Jakarta Sans, ThemeProvider
│   │   ├── globals.css              # Theme tokens, scrollbar, Tailwind v4
│   │   ├── page.tsx                 # Homepage route
│   │   ├── not-found.tsx            # Custom 404 page
│   │   ├── about/page.tsx           # About page route
│   │   ├── portfolio/page.tsx       # Portfolio grid route
│   │   ├── portfolio/[slug]/page.tsx# Dynamic project detail route
│   │   └── contact/page.tsx         # Contact route
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Shared header with live clock & theme toggle
│   │   │   ├── Footer.tsx           # Multi-column footer
│   │   │   ├── ThemeContext.tsx     # Dark/Light mode context
│   │   │   └── NoiseOverlay.tsx     # Film grain noise texture
│   │   ├── home/
│   │   │   ├── HomeGrid.tsx         # Asymmetric bento grid
│   │   │   ├── ToolStack.tsx        # Tool stack app icons
│   │   │   └── ResumeCard.tsx       # Resume link card
│   │   ├── about/
│   │   │   ├── AboutBio.tsx         # Scroll-reveal text and portrait
│   │   │   ├── QuoteGrid.tsx        # 5-item testimonial grid
│   │   │   ├── ExperienceTimeline.tsx # Career history table
│   │   │   └── ClosingHeading.tsx   # Display typography
│   │   ├── portfolio/
│   │   │   ├── PortfolioGrid.tsx    # 2-1-2 project grid
│   │   │   ├── ProjectCard.tsx      # Individual project card
│   │   │   └── ProjectDetail.tsx    # Case study template
│   │   └── contact/
│   │       └── ContactForm.tsx      # Interactive contact form
│   ├── content/
│   │   ├── site.ts                  # Identity, title, location, timezone, tools
│   │   ├── about.ts                 # About heading, bio narrative, portrait
│   │   ├── projects.ts              # Array of project case studies
│   │   ├── experience.ts            # Career timeline entries
│   │   ├── testimonials.ts          # Testimonial quotes and authors
│   │   └── contact.ts               # Contact details, budget ranges, inquiry types
│   └── lib/
│       └── types.ts                 # TypeScript interfaces
```

---

## ✏️ How to Personalize the Template

All editable values are clearly documented in `src/content/`:

1. **Personal Identity & Location**:
   Edit `src/content/site.ts`:
   ```typescript
   export const siteContent = {
     personName: "Your Name",
     professionalTitle: "Your Professional Title",
     location: "Your City",
     timezone: "Your/Timezone", // e.g. "America/New_York", "Europe/London"
     resumeUrl: "/your-resume.pdf",
   };
   ```

2. **About Bio & Timeline**:
   - Edit narrative in `src/content/about.ts`.
   - Add/edit job positions in `src/content/experience.ts`.
   - Update testimonials in `src/content/testimonials.ts`.

3. **Projects**:
   - Edit or add items in `src/content/projects.ts`.
   - Place mockup images inside `public/images/projects/`.
   - The `/portfolio` grid and all `/portfolio/[slug]` detail routes update automatically.

4. **Contact Details**:
   - Update email, phone, and social handles in `src/content/contact.ts`.
