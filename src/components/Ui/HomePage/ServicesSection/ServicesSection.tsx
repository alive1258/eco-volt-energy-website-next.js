import Link from "next/link";
import { ArrowRight, BatteryCharging, Plug, Sun, Wind } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { SERVICES } from "@/src/utils/data/energy";

const ICONS = { sun: Sun, wind: Wind, battery: BatteryCharging, plug: Plug } as const;

const ServicesSection = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
            Comprehensive Renewable Energy Solutions
          </h2>
        </SlideUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            return (
              <SlideUp key={service.title} delay={i + 1}>
                <div className="group h-full rounded-2xl border border-brand-900/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-600/30 hover:shadow-xl">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-brand-950">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-900/60">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:gap-2.5"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </SlideUp>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
