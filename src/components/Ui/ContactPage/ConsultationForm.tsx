"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const SERVICE_OPTIONS = [
  "Solar Energy Solutions",
  "Wind Energy Solutions",
  "Energy Storage Systems",
  "EV Charging Solutions",
  "Not sure yet",
];

interface ConsultationFormProps {
  dark?: boolean;
}

// TODO: no backend yet — wire this up to a real inbox/CRM once one exists.
const ConsultationForm = ({ dark = false }: ConsultationFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fieldClass =
    "w-full rounded-lg border px-3.5 py-3 text-sm focus:outline-none transition " +
    (dark
      ? "border-white/15 bg-white/10 text-white placeholder:text-white/40 focus:border-white/40"
      : "border-brand-900/10 bg-brand-50/50 text-brand-900 focus:border-brand-500");

  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-wide " +
    (dark ? "text-white/60" : "text-brand-900/60");

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center gap-3 rounded-2xl px-6 py-16 text-center ${
          dark ? "bg-white/10" : "border border-brand-900/10 bg-brand-50/50"
        }`}
      >
        <CheckCircle2 size={32} className={dark ? "text-white" : "text-brand-600"} />
        <h3 className={`text-lg font-bold ${dark ? "text-white" : "text-brand-900"}`}>
          Thanks — we&apos;ve got your message.
        </h3>
        <p className={`max-w-sm text-sm ${dark ? "text-white/70" : "text-brand-900/60"}`}>
          A member of our team will reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid gap-5 rounded-2xl p-6 sm:p-8 ${
        dark ? "bg-white/10 backdrop-blur-sm" : "border border-brand-900/10 bg-white shadow-sm"
      }`}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelClass}>Full Name</span>
          <input type="text" required className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Email Address</span>
          <input type="email" required className={fieldClass} />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className={labelClass}>Phone Number</span>
          <input type="tel" className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>Select Service</span>
          <select className={fieldClass}>
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className={labelClass}>Message</span>
        <textarea
          required
          rows={4}
          placeholder="Tell us about your project..."
          className={`resize-none ${fieldClass}`}
        />
      </label>

      <button
        type="submit"
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition ${
          dark
            ? "bg-white text-brand-700 hover:bg-brand-50"
            : "bg-brand-600 text-white hover:bg-brand-700"
        }`}
      >
        Send Message
        <Send size={15} />
      </button>
    </form>
  );
};

export default ConsultationForm;
