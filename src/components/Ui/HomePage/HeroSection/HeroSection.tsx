import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { STATS } from "@/src/utils/data/energy";

const AVATARS = [
  "https://i.pravatar.cc/60?img=11",
  "https://i.pravatar.cc/60?img=32",
  "https://i.pravatar.cc/60?img=5",
];

const HERO_IMAGE = "/images/banner/green-energy-solutions.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-28 pt-16 md:pb-40 md:pt-24">
      <Image
        src={HERO_IMAGE}
        alt="Wind turbines and solar panels in a green field"
        fill
        priority
        sizes="100vw"
        className=""
      />
      <div className="absolute inset-0 bg-linear-to-r from-white via-white/55 to-white/10" />
      <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />

      <div className="container relative">
        <div className="max-w-xl">
          <SlideUp>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
              Powering A Sustainable Future
            </span>
          </SlideUp>

          <SlideUp delay={2}>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-brand-950 sm:text-5xl lg:text-[56px]">
              Clean Energy
              <br />
              Better Planet
              <br />
              <span className="text-brand-600">Brighter Tomorrow</span>
            </h1>
          </SlideUp>

          <SlideUp delay={3}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-brand-900/60">
              We deliver innovative renewable energy solutions that power homes,
              businesses, and communities sustainably.
            </p>
          </SlideUp>

          <SlideUp delay={4}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-900/15 bg-white px-6 py-3.5 text-sm font-semibold text-brand-900 transition hover:border-brand-600 hover:text-brand-600"
              >
                Our Services
              </Link>
            </div>
          </SlideUp>

          <SlideUp delay={5}>
            <div className="mt-9 flex items-center gap-4">
              <div className="flex -space-x-3">
                {AVATARS.map((src) => (
                  <span
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-white"
                  >
                    <Image
                      src={src}
                      alt="Happy customer"
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-brand-900">
                  Trusted by 5,000+ Customers Worldwide
                </p>
                <div className="mt-0.5 flex items-center gap-1 text-xs text-brand-900/50">
                  <span className="flex items-center text-brand-600">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </span>
                  4.9 (800+ Reviews)
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>

      {/* STATS CARD */}
      <div className="container relative">
        <SlideUp delay={2}>
          <div className="relative z-10 -mb-32 mt-14 grid grid-cols-2 gap-6 rounded-2xl border border-brand-900/5 bg-white p-8 shadow-xl sm:grid-cols-4 md:-mb-24 md:mt-20">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-2xl text-brand-950 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-brand-900/50 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SlideUp>
      </div>
    </section>
  );
};

export default HeroSection;
