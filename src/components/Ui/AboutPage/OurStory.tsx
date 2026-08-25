import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import ZoomIn from "@/src/components/Common/Animaation/ZoomIn";
import { IMAGES } from "@/src/utils/data/energy";

const POINTS = [
  "Founded in 2014 with a single-site solar install",
  "Now serving 5,000+ homes and businesses nationwide",
  "8,500+ projects delivered without compromising quality",
  "A team of 60+ certified engineers and technicians",
];

const OurStory = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        <SlideLeft>
          <div className="relative">
            <ZoomIn className="relative aspect-4/5 overflow-hidden rounded-[28px] sm:aspect-square lg:aspect-4/5">
              <Image
                src={IMAGES.windTurbinesField}
                alt="EcoVolt Energy wind turbines in a green field"
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
                <p className="font-display text-xl leading-none">12+</p>
                <p className="mt-1 text-xs text-white/80">Years Of Trust</p>
              </div>
            </div>
          </div>
        </SlideLeft>

        <SlideRight>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Our Story
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
            A Decade Of Powering Cleaner Communities
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-900/60">
            EcoVolt Energy started with a simple belief: clean power should
            be accessible, reliable, and built to last. From a single solar
            installation, we&apos;ve grown into a full-service renewable
            energy partner for homes, businesses, and utilities across the
            country.
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
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </SlideRight>
      </div>
    </section>
  );
};

export default OurStory;
