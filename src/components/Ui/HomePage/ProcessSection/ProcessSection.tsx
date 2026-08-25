import Link from "next/link";
import { ArrowRight, LifeBuoy, MessageCircle, Ruler, Wrench } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { PROCESS_STEPS } from "@/src/utils/data/energy";

const ICONS = {
  "message-circle": MessageCircle,
  ruler: Ruler,
  wrench: Wrench,
  "life-buoy": LifeBuoy,
} as const;

const ProcessSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Our Process
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
            How We Work
          </h2>
        </SlideUp>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute inset-x-0 top-8 hidden border-t-2 border-dashed border-brand-200 lg:block" />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS];
            return (
              <SlideUp key={step.number} delay={i + 1}>
                <div className="relative text-center">
                  <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-600 bg-white text-brand-600">
                    <Icon size={22} />
                  </span>
                  <p className="mt-5 text-xs font-bold tracking-widest text-brand-300">
                    {step.number}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-brand-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-900/60">
                    {step.description}
                  </p>
                </div>
              </SlideUp>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
