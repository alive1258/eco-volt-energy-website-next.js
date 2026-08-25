import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

const PageHero = ({ eyebrow, title, subtitle, image, alt }: PageHeroProps) => {
  return (
    <section className="relative flex min-h-[360px] items-center overflow-hidden py-20 md:min-h-[440px]">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-brand-950/75" />
      <div className="absolute inset-0 bg-linear-to-t from-brand-950/60 via-transparent to-transparent" />

      <div className="container relative">
        <div className="flex items-center gap-2 text-xs font-medium text-white/60">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="text-white">{eyebrow}</span>
        </div>

        <h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.1] text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-white/75 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
