"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, MapPin } from "lucide-react";
import { contactContent } from "@/content/contact";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contactContent.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const getGmailUrl = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${selectedTypes.join(", ") || "Engineering Collaboration"} – ${fullName || "Portfolio Inquiry"}`
    );
    const body = encodeURIComponent(
      `Hi Rugved,\n\nName: ${fullName}\nEmail: ${email}\nProject Type: ${
        selectedTypes.join(", ") || "Not specified"
      }\nBudget Range: ${selectedBudget || "Not specified"}\n\nProject Details:\n${details}\n`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${contactContent.email}&su=${subject}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${selectedTypes.join(", ") || "Engineering Collaboration"} – ${fullName || "Portfolio Inquiry"}`
    );
    const body = encodeURIComponent(
      `Hi Rugved,\n\nName: ${fullName}\nEmail: ${email}\nProject Type: ${
        selectedTypes.join(", ") || "Not specified"
      }\nBudget Range: ${selectedBudget || "Not specified"}\n\nProject Details:\n${details}\n`
    );
    return `mailto:${contactContent.email}?subject=${subject}&body=${body}`;
  };

  const [copiedMessage, setCopiedMessage] = useState(false);

  const copyFormattedMessage = async () => {
    const text = `To: ${contactContent.email}\nSubject: Project Inquiry: ${selectedTypes.join(", ") || "Engineering Collaboration"} – ${fullName}\n\nHi Rugved,\n\nName: ${fullName}\nEmail: ${email}\nProject Type: ${selectedTypes.join(", ") || "Not specified"}\nBudget: ${selectedBudget || "Not specified"}\n\nDetails:\n${details}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      // Fallback
    }
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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 pt-8 sm:pt-14 pb-20 text-black dark:text-white transition-colors">
      {/* Left Column: Structured Heading, Bio Context & Direct Contacts */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-10">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-500 dark:text-zinc-400 font-semibold mb-3 block">
            GET IN TOUCH
          </span>

          <h1 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.12] mb-4 text-black dark:text-white">
            {contactContent.headline}
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed mb-8 sm:mb-10 max-w-lg">
            {contactContent.subheading}
          </p>

          {/* Direct Email Card with One-Click Copy */}
          <div className="p-5 sm:p-6 rounded-[24px] glass-panel border border-black/8 dark:border-white/10 flex flex-col gap-3 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium">
                Direct Email
              </span>
              <button
                type="button"
                onClick={copyToClipboard}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactContent.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl font-medium text-black dark:text-white hover:opacity-75 transition-opacity flex items-center justify-between group"
              title="Open in Gmail Web"
            >
              <span className="break-all">{contactContent.email}</span>
              <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              Click to compose in Gmail Web · or use Copy
            </span>
          </div>

          {/* Location & Timezone Indicator */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono mb-8 px-1">
            <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
            <span>Kolhapur / Pune, India · IST (UTC+5:30)</span>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-medium">
              Profiles &amp; Code
            </span>
            <div className="flex flex-wrap gap-2.5">
              {contactContent.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-panel border border-black/8 dark:border-white/10 text-xs sm:text-sm font-medium text-black dark:text-white hover:glass-panel-hovered transition-all group"
                >
                  <span>{social.label}</span>
                  <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs">
                    {social.handle}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Live Availability Status */}
        {contactContent.availabilityNotice && (
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-normal pt-4 border-t border-black/5 dark:border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>{contactContent.availabilityNotice}</span>
          </div>
        )}
      </div>

      {/* Right Column: Contact Form Card */}
      <div className="lg:col-span-7">
        <div className="w-full rounded-[28px] sm:rounded-[36px] glass-panel p-6 sm:p-10 md:p-12 border border-black/8 dark:border-white/10">
          {submitted ? (
            <div className="py-12 sm:py-16 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-3 text-black dark:text-white">
                Message Ready to Send
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mb-8 leading-relaxed">
                Thank you, <span className="font-semibold text-black dark:text-white">{fullName}</span>! Click below to send directly via Gmail Web, or copy your pre-formatted inquiry.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-6">
                <a
                  href={getGmailUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-85 transition-opacity shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Gmail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={copyFormattedMessage}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-black/15 dark:border-white/15 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                >
                  {copiedMessage ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-500">Message Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Secondary Alternatives */}
              <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400 pt-2 border-t border-black/5 dark:border-white/10">
                <a
                  href={getMailtoUrl()}
                  className="hover:underline flex items-center gap-1"
                  title="Open system default mail app (Outlook, Apple Mail, etc.)"
                >
                  <span>Other mail app</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFullName("");
                    setEmail("");
                    setDetails("");
                    setSelectedTypes([]);
                    setSelectedBudget("");
                  }}
                  className="hover:underline cursor-pointer"
                >
                  Reset Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-7">
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
                  className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-black/5 dark:bg-white/5 border ${
                    errors.fullName
                      ? "border-red-500"
                      : "border-black/8 dark:border-white/10"
                  } focus:outline-none focus:border-black dark:focus:border-white text-base transition-colors`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-500 mt-1.5">{errors.fullName}</p>
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
                  className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-black/5 dark:bg-white/5 border ${
                    errors.email
                      ? "border-red-500"
                      : "border-black/8 dark:border-white/10"
                  } focus:outline-none focus:border-black dark:focus:border-white text-base transition-colors`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <span className="block text-sm font-medium mb-3 text-zinc-700 dark:text-zinc-300">
                  What&apos;s Your Project About?
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {contactContent.projectTypes.map((type) => {
                    const active = selectedTypes.includes(type);
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => toggleType(type)}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                          active
                            ? "bg-black dark:bg-white text-white dark:text-black border-transparent shadow-xs"
                            : "bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:border-black/20 dark:hover:border-white/25"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Budget in Rupees */}
              <div>
                <span className="block text-sm font-medium mb-3 text-zinc-700 dark:text-zinc-300">
                  Estimated Budget
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {contactContent.budgetRanges.map((budget) => {
                    const active = selectedBudget === budget;
                    return (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setSelectedBudget(active ? "" : budget)}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium transition-all cursor-pointer ${
                          active
                            ? "bg-black dark:bg-white text-white dark:text-black border-transparent shadow-xs"
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
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/8 dark:border-white/10 focus:outline-none focus:border-black dark:focus:border-white text-base transition-colors resize-y"
                />
              </div>

              {/* Submit & Status Indicator */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm sm:text-base font-medium hover:opacity-85 transition-opacity disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>

                <span className="text-xs text-zinc-500 font-mono">
                  No spam · Direct to Rugved
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
