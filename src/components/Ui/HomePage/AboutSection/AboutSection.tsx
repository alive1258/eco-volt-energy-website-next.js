import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";
import { IMAGES } from "@/src/utils/data/energy";

const POINTS = [
  "Sustainable & Reliable Energy Solutions",
  "Cutting-Edge Renewable Technologies",
  "Reduce Carbon Footprint",
  "Cost-Effective & Efficient Systems",
];

const AboutSection = () => {
  return (
    <section className="bg-white pb-16 pt-40 md:pb-24 md:pt-36">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <SlideLeft>
          <div className="relative">
            <ZoomIn className="relative aspect-4/5 overflow-hidden rounded-[28px] sm:aspect-square lg:aspect-4/5">
              <Image
                src={IMAGES.solarFarmAerial}
                alt="Aerial view of a solar farm beside green fields"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </ZoomIn>

            <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-brand-600 px-5 py-4 text-white shadow-xl sm:-right-8">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="font-display text-xl leading-none">100%</p>
                <p className="mt-1 text-xs text-white/80">
                  Clean &amp; Renewable
                </p>
              </div>
            </div>
          </div>
        </SlideLeft>

        <SlideRight>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            About Us
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
            Building A Greener Future With Clean Energy
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-900/60">
            At EcoVolt Energy, we are committed to creating a sustainable
            future through advanced renewable energy solutions. Our mission
            is to reduce carbon emissions and drive the world towards a
            cleaner, healthier tomorrow.
          </p>

          <ul className="mt-6 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-brand-900/80">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Learn More About Us
            <ArrowRight size={16} />
          </Link>
        </SlideRight>
      </div>
    </section>
  );
};

export default AboutSection;
