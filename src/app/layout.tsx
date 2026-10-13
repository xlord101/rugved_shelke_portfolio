import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeContext";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { siteContent } from "@/content/site";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteContent.personName} – ${siteContent.professionalTitle}`,
  description: siteContent.bioShort,
  keywords: ["Design Engineer", "Portfolio", "Template", "Minimal", "Framer", "Next.js"],
  authors: [{ name: siteContent.personName }],
  openGraph: {
    title: `${siteContent.personName} – ${siteContent.professionalTitle}`,
    description: siteContent.bioShort,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${fontSans.variable} dark`} suppressHydrationWarning>
      <body className="font-sans min-h-screen relative antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <ThemeProvider>
          <SmoothScroll>
            <NoiseOverlay />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
