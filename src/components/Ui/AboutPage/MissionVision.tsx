import { Eye, Target } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";

const CARDS = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To accelerate the shift to clean energy by delivering solar, wind, storage, and EV charging systems that are efficient, affordable, and built to last.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where every home, business, and community runs on renewable power — reducing carbon footprints without compromising reliability.",
  },
];

const MissionVision = () => {
  return (
    <section className="bg-brand-50/40 py-16 md:py-24">
      <div className="container grid gap-6 md:grid-cols-2">
        {CARDS.map((card, i) => (
          <SlideUp key={card.title} delay={i + 1}>
            <div className="h-full rounded-2xl border border-brand-900/10 bg-white p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <card.icon size={24} />
              </span>
              <h3 className="mt-6 font-display text-2xl text-brand-950">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-900/60">
                {card.description}
              </p>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
