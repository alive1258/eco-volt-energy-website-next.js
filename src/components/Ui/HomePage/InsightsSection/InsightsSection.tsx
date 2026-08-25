import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { BLOG_POSTS } from "@/src/utils/data/energy";

const InsightsSection = () => {
  return (
    <section id="insights" className="scroll-mt-24 bg-brand-50/40 py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Latest News
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
            Insights &amp; News
          </h2>
        </SlideUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <SlideUp key={post.slug} delay={i + 1}>
              <article className="group h-full overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:shadow-xl">
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="flex items-center gap-1.5 text-xs text-brand-900/50">
                    <CalendarDays size={13} />
                    {post.date}
                  </span>
                  <h3 className="mt-2 font-bold leading-snug text-brand-950 transition-colors group-hover:text-brand-600">
                    {post.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Read More
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            </SlideUp>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            View All Articles
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
