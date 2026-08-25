import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { STATS } from "@/src/utils/data/energy";

const StatsBand = () => {
  return (
    <section className="bg-brand-950 py-12 md:py-14">
      <div className="container grid grid-cols-2 gap-8 divide-brand-800 sm:grid-cols-4 sm:divide-x">
        {STATS.map((stat, i) => (
          <SlideUp key={stat.label} delay={i + 1} className="text-center sm:px-4">
            <p className="font-display text-3xl text-white sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1.5 text-xs text-white/50 sm:text-sm">{stat.label}</p>
          </SlideUp>
        ))}
      </div>
    </section>
  );
};

export default StatsBand;
