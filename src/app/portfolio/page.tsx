import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata = {
  title: "Portfolio – Soren Weil",
  description: "Dive into a few projects that represent my most fulfilling design experiences.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Header />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 w-full pt-8 sm:pt-16 pb-20">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-black dark:text-white leading-[1.05] max-w-6xl mb-12 sm:mb-20">
          Dive into a few projects that represent my most fulfilling design experiences
        </h1>
        <PortfolioGrid />
      </div>
      <Footer />
    </main>
  );
}
