import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact – Rugved Shelke",
  description:
    "Get in touch with Rugved Shelke for software engineering, full-stack systems, AI applications, and freelance product development.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Header />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 w-full">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
