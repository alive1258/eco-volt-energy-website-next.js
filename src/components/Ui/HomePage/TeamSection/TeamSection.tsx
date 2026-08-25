import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { TEAM } from "@/src/utils/data/energy";

const TeamSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Our Team
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-brand-950 sm:text-4xl">
            Meet Our Experts
          </h2>
        </SlideUp>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <SlideUp key={member.name} delay={i + 1}>
              <div className="group text-center">
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-2 bg-linear-to-t from-brand-950/70 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-700">
                      <Linkedin size={14} />
                    </span>
                  </div>
                </div>
                <h3 className="mt-4 font-bold text-brand-950">{member.name}</h3>
                <p className="mt-0.5 text-sm text-brand-900/50">{member.role}</p>
              </div>
            </SlideUp>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            View All Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
