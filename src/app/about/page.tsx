import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutBio } from "@/components/about/AboutBio";
import { QuoteGrid } from "@/components/about/QuoteGrid";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { ClosingHeading } from "@/components/about/ClosingHeading";

export const metadata = {
  title: "About – Rugved Shelke",
  description: "Learn more about Rugved Shelke, engineering principles, experience, and projects.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 w-full">
        <AboutBio />
        <QuoteGrid />
        <ExperienceTimeline />
        <ClosingHeading />
      </div>
      <Footer />
    </main>
  );
}
