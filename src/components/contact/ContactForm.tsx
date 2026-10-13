"use client";

import React, { useState } from "react";
import { contactContent } from "@/content/contact";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate submission state for demonstration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 pt-8 sm:pt-16 pb-20 text-black dark:text-white transition-colors">
      {/* Left Column: Headline and Direct Contacts */}
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-12 sm:mb-16">
            {contactContent.headline}
          </h1>

          <div className="flex flex-col gap-8 sm:gap-10">
            <div>
              <span className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
                Phone
              </span>
              <a
                href={`tel:${contactContent.phone.replace(/[^0-9+]/g, "")}`}
                className="text-2xl sm:text-3xl font-medium hover:opacity-70 transition-opacity"
              >
                {contactContent.phone}
              </a>
            </div>

            <div>
              <span className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
                Email
              </span>
              <a
                href={`mailto:${contactContent.email}`}
                className="text-2xl sm:text-3xl font-medium hover:opacity-70 transition-opacity"
              >
                {contactContent.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form Card */}
      <div className="lg:col-span-7">
        <div className="w-full rounded-[28px] sm:rounded-[36px] glass-panel p-6 sm:p-10 md:p-12">
          {submitted ? (
            <div className="py-16 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center mb-6">
                <span className="text-2xl">✓</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3">
                Message Sent (Demo State)
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-md mb-8">
                Thank you for your message! This template form is functioning locally. Connect your email service (e.g. Resend, Formspree) to receive submissions.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFullName("");
                  setEmail("");
                  setDetails("");
                  setSelectedTypes([]);
                  setSelectedBudget("");
                }}
                className="px-6 py-3 rounded-full border border-black/20 dark:border-white/20 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="ex. John Smith"
                  className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-black/5 dark:bg-white/5 border ${
                    errors.fullName
                      ? "border-red-500"
                      : "border-black/8 dark:border-white/10"
                  } focus:outline-none focus:border-black dark:focus:border-white text-base transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@website.com"
                  className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-black/5 dark:bg-white/5 border ${
                    errors.email
                      ? "border-red-500"
                      : "border-black/8 dark:border-white/10"
                  } focus:outline-none focus:border-black dark:focus:border-white text-base transition-colors`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <span className="block text-sm font-medium mb-3 text-zinc-700 dark:text-zinc-300">
                  What&apos;s Your Project About?
                </span>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {contactContent.projectTypes.map((type) => {
                    const active = selectedTypes.includes(type);
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => toggleType(type)}
                        className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                          active
                            ? "bg-black dark:bg-white text-white dark:text-black border-transparent"
                            : "bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-black/20 dark:hover:border-white/25"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Budget */}
              <div>
                <span className="block text-sm font-medium mb-3 text-zinc-700 dark:text-zinc-300">
                  Project Budget
                </span>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {contactContent.budgetRanges.map((budget) => {
                    const active = selectedBudget === budget;
                    return (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setSelectedBudget(active ? "" : budget)}
                        className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                          active
                            ? "bg-black dark:bg-white text-white dark:text-black border-transparent"
                            : "bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-black/20 dark:hover:border-white/25"
                        }`}
                      >
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Details Textarea */}
              <div>
                <label
                  htmlFor="details"
                  className="block text-sm font-medium mb-2 text-zinc-700 dark:text-zinc-300"
                >
                  Share More Details
                </label>
                <textarea
                  id="details"
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="About your project..."
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 focus:outline-none focus:border-black dark:focus:border-white text-base transition-colors resize-y"
                />
              </div>

              {/* Submit & Status Indicator */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-base font-medium hover:opacity-85 transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{contactContent.availabilityNotice}</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
