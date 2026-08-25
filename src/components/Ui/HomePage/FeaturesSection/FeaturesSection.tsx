import { Activity, Leaf, PiggyBank, Settings, ShieldCheck, Zap } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { KEY_FEATURES } from "@/src/utils/data/energy";

const ICONS = {
  zap: Zap,
  activity: Activity,
  "piggy-bank": PiggyBank,
  leaf: Leaf,
  "shield-check": ShieldCheck,
  settings: Settings,
} as const;

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Key Features
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
            Powerful Features That Make A Difference
          </h2>
        </SlideUp>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {KEY_FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon as keyof typeof ICONS];
            return (
              <SlideUp key={feature.title} delay={(i % 3) + 1}>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-bold text-brand-950">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-900/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
