import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact – Soren Weil",
  description: "Get in touch with Soren Weil for product design, design engineering, and creative direction.",
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
