import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata = {
  title: "Portfolio – Rugved Shelke",
  description:
    "Explore engineering projects, AI-native applications, and production software systems built by Rugved Shelke.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Header />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 w-full pt-8 sm:pt-16 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black dark:text-white leading-[1.05] max-w-4xl">
            Selected projects, engineering systems &amp; client work
          </h1>
          <a
            href="https://github.com/xlord101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-sm font-medium transition-colors w-fit shrink-0 text-black dark:text-white"
          >
            <span>Explore GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <PortfolioGrid />

        {/* Explore GitHub Banner */}
        <div className="mt-16 sm:mt-24 pt-12 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-medium text-black dark:text-white tracking-tight">
              Looking for more repositories?
            </h3>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-1">
              Browse experimental projects, scripts, and open-source contributions on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/xlord101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-sm font-medium transition-colors text-black dark:text-white shrink-0"
          >
            <span>Explore GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
