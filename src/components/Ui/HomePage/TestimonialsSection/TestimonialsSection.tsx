"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { TESTIMONIALS } from "@/src/utils/data/energy";

const PAGE_SIZE = 3;
const PAGE_COUNT = Math.ceil(TESTIMONIALS.length / PAGE_SIZE);

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const visible = TESTIMONIALS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id="testimonials" className="scroll-mt-24 bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
            What Our Clients Say
          </h2>
        </SlideUp>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <AnimatePresence mode="wait">
            {visible.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.1 } }}
                exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
                className="rounded-2xl border border-brand-900/10 bg-white p-7"
              >
                <Quote size={22} className="text-brand-200" />
                <p className="mt-4 text-sm leading-relaxed text-brand-900/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-brand-900/10 pt-5">
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill sizes="40px" className="object-cover" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-900">{t.name}</p>
                    <p className="text-xs text-brand-900/50">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {PAGE_COUNT > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: PAGE_COUNT }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Show testimonials page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all ${
                  page === i ? "w-6 bg-brand-600" : "w-2 bg-brand-200"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
