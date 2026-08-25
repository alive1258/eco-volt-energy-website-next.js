import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import ConsultationForm from "@/src/components/Ui/ContactPage/ConsultationForm";
import FaqAccordion from "@/src/components/Ui/ContactPage/FaqAccordion";
import { COMPANY, IMAGES } from "@/src/utils/data/energy";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with EcoVolt Energy to schedule a free consultation for solar, wind, storage, or EV charging solutions.",
};

const INFO_ITEMS = [
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}` },
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: "Office", value: COMPANY.address },
  { icon: Clock, label: "Hours", value: COMPANY.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule A Free Consultation"
        subtitle="Questions about solar, wind, storage, or EV charging? Reach out and we'll get back to you within one business day."
        image={IMAGES.heroWindSolar}
        alt="Wind turbines and solar panels in a green field"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <SlideLeft>
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                Get In Touch
              </span>
              <h2 className="mt-3 font-display text-3xl text-brand-950">
                We&apos;re Here To Help
              </h2>
            </div>

            <ul className="mt-8 space-y-5">
              {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-900/50">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-brand-900 hover:text-brand-600 transition"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-brand-900">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-brand-900/10">
              <iframe
                title="EcoVolt Energy office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-97.76%2C30.25%2C-97.72%2C30.29&layer=mapnik&marker=30.27%2C-97.74"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </SlideLeft>

          <SlideRight delay={2}>
            <ConsultationForm />
          </SlideRight>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-brand-50/40 py-16 md:py-24">
        <div className="container max-w-3xl">
          <SlideUp className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              FAQs
            </span>
            <h2 className="mt-3 font-display text-3xl text-brand-950">
              Frequently Asked Questions
            </h2>
          </SlideUp>

          <div className="mt-10">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
