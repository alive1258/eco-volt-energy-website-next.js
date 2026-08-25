import Image from "next/image";
import { BatteryCharging, Check, Plug, Sun, Wind } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";
import { SERVICE_DETAILS } from "@/src/utils/data/energy";
import { slugify } from "@/src/utils/slugify";

const ICONS = { sun: Sun, wind: Wind, battery: BatteryCharging, plug: Plug } as const;

const ServicesList = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container space-y-20 md:space-y-28">
        {SERVICE_DETAILS.map((service, i) => {
          const Icon = ICONS[service.icon as keyof typeof ICONS];
          const reversed = i % 2 === 1;

          const Image_ = (
            <SlideLeft key={`img-${service.title}`}>
              <ZoomIn className="relative aspect-4/3 overflow-hidden rounded-[28px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </ZoomIn>
            </SlideLeft>
          );

          const Content = (
            <SlideRight key={`content-${service.title}`}>
              <span
                id={slugify(service.title)}
                className="flex h-14 w-14 scroll-mt-24 items-center justify-center rounded-xl bg-brand-50 text-brand-600"
              >
                <Icon size={24} />
              </span>
              <h2 className="mt-6 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-900/60">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-brand-900/80">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </SlideRight>
          );

          return (
            <div
              key={service.title}
              className="grid items-center gap-12 lg:grid-cols-2"
            >
              {reversed ? (
                <>
                  <div className="lg:order-2">{Image_}</div>
                  <div className="lg:order-1">{Content}</div>
                </>
              ) : (
                <>
                  {Image_}
                  {Content}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesList;
