import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HomeGrid } from "@/components/home/HomeGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Header />
      <div className="flex-1 flex flex-col justify-center">
        <HomeGrid />
      </div>
      <Footer />
    </main>
  );
}
