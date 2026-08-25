import Image from "next/image";
import { Cpu, HardHat, Headset, Recycle } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { IMAGES, WHY_CHOOSE_US } from "@/src/utils/data/energy";

const ICONS = { recycle: Recycle, "hard-hat": HardHat, cpu: Cpu, headset: Headset } as const;

const WhyChooseUsSection = () => {
  return (
    <section className="overflow-hidden bg-brand-950 py-16 text-white md:py-24">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <SlideLeft>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Why We Are Your Best Energy Partner
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = ICONS[item.icon as keyof typeof ICONS];
              return (
                <SlideUp key={item.title} delay={i + 1}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-brand-300">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {item.description}
                  </p>
                </SlideUp>
              );
            })}
          </div>
        </SlideLeft>

        <SlideUp delay={2}>
          <div className="relative aspect-4/5 overflow-hidden rounded-[28px] sm:aspect-video lg:aspect-4/5">
            <Image
              src={IMAGES.windTurbineSky}
              alt="Wind turbine against a bright sky"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-brand-950/40 via-transparent to-transparent" />
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
