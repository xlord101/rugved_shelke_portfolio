import Link from "next/link";
import { Header } from "@/components/layout/Header";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Header />
      <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-8 w-full flex items-center justify-center py-12">
        <div className="w-full rounded-[28px] sm:rounded-[36px] backdrop-blur-xl bg-[#e2e2e2]/75 dark:bg-[#141414]/70 border border-black/8 dark:border-white/10 p-12 sm:p-20 text-center flex flex-col items-center">
          <h1 className="text-8xl sm:text-9xl md:text-[13rem] font-medium tracking-tighter text-black dark:text-white leading-none select-none mb-6">
            404
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-2 font-normal">
            It seems like this page doesn&apos;t exist, or it&apos;s gone.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-10 font-normal">
            But don&apos;t worry! I&apos;ll get you back on track :)
          </p>
          <Link
            href="/"
            className="text-lg sm:text-xl font-medium text-black dark:text-white hover:opacity-70 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
