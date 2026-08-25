import Link from "next/link";
import { Check } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { PRICING_PLANS } from "@/src/utils/data/energy";

const PricingSection = () => {
  return (
    <section id="pricing" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Pricing Plans
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
            Flexible Plans For Every Need
          </h2>
        </SlideUp>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-center">
          {PRICING_PLANS.map((plan, i) => (
            <SlideUp key={plan.name} delay={i + 1}>
              <div
                className={`relative h-full rounded-2xl border p-8 transition duration-300 hover:-translate-y-1.5 ${
                  plan.popular
                    ? "border-brand-600 bg-white shadow-2xl lg:scale-105"
                    : "border-brand-900/10 bg-white hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                    Popular
                  </span>
                )}

                <p className="text-lg font-bold text-brand-950">{plan.name}</p>
                <p className="mt-1 text-sm text-brand-900/50">{plan.tagline}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl text-brand-950">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="pb-1 text-sm text-brand-900/50">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="mt-7 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-sm text-brand-900/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-brand-600 text-white hover:bg-brand-700"
                      : "border border-brand-900/15 text-brand-900 hover:border-brand-600 hover:text-brand-600"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
