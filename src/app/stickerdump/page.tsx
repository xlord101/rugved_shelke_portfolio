import { StickerDumpNav } from "@/components/stickerdump/StickerDumpNav";
import { StickerDumpHero } from "@/components/stickerdump/StickerDumpHero";
import { PricingOrdering } from "@/components/stickerdump/PricingOrdering";
import { NfcShowcase } from "@/components/stickerdump/NfcShowcase";
import { BehindTheBrand } from "@/components/stickerdump/BehindTheBrand";
import { StickerDumpCTA } from "@/components/stickerdump/StickerDumpCTA";
import { StickerDumpFooter } from "@/components/stickerdump/StickerDumpFooter";

export const metadata = {
  title: "StickerDump.exe – Playful Stickers & Personalized NFC Cards",
  description:
    "Playful sticker designs, weatherproof vinyl prints, and personalized NFC business & portfolio cards co-founded by Rugved & Nupur.",
};

export default function StickerDumpPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between overflow-x-hidden bg-[var(--bg-page)] text-[var(--text-primary)] transition-colors duration-500">
      <StickerDumpNav />
      <div className="flex-1 flex flex-col w-full">
        <StickerDumpHero />
        <PricingOrdering />
        <NfcShowcase />
        <BehindTheBrand />
        <StickerDumpCTA />
      </div>
      <StickerDumpFooter />
    </main>
  );
}
