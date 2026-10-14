import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata = {
  title: "Portfolio – Rugved Shelke",
  description:
    "Selected engineering systems, AI-native applications, and bespoke client platforms built by Rugved Shelke.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Header />
      <div className="flex-1 max-w-[1240px] mx-auto px-4 sm:px-8 md:px-12 w-full pt-6 sm:pt-10 pb-16">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-black dark:text-white leading-[1.12] max-w-4xl mb-8 sm:mb-12">
          Selected engineering systems, AI-native applications &amp; bespoke client platforms
        </h1>
        <PortfolioGrid />
      </div>
      <Footer />
    </main>
  );
}
