import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { IMAGES } from "@/src/utils/data/energy";

const POINTS = [
  "Reduce energy costs",
  "Increase energy independence",
  "Make a positive impact",
];

const CtaBannerSection = () => {
  return (
    <section className="px-5 py-16 md:px-20 md:py-24">
      <SlideUp>
        <div className="container relative isolate overflow-hidden rounded-[28px] px-0">
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
            <Image
              src={IMAGES.sunsetSolar}
              alt="Solar panels at sunset"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-brand-950/85 via-brand-950/55 to-brand-950/20" />

            <div className="relative flex h-full min-h-[420px] flex-col justify-center px-8 py-16 sm:px-14 sm:py-20">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
                Ready To Go Green?
              </span>
              <h2 className="mt-4 max-w-lg font-display text-3xl leading-tight text-white sm:text-4xl">
                Let&apos;s Build A Sustainable Future Together
              </h2>

              <ul className="mt-6 space-y-2.5">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/85">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/40 text-white">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default CtaBannerSection;
