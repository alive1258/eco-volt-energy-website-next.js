import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import ServicesList from "@/src/components/Ui/ServicesPage/ServicesList";
import ProcessSection from "@/src/components/Ui/HomePage/ProcessSection/ProcessSection";
import PricingSection from "@/src/components/Ui/HomePage/PricingSection/PricingSection";
import CtaBannerSection from "@/src/components/Ui/HomePage/CtaBannerSection/CtaBannerSection";
import { IMAGES } from "@/src/utils/data/energy";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore EcoVolt Energy's solar, wind, energy storage, and EV charging solutions for homes, businesses, and enterprise-scale projects.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive Renewable Energy Solutions"
        subtitle="From rooftop solar to utility-scale wind, we design and install energy systems engineered for performance and built to last."
        image={IMAGES.solarRooftop}
        alt="Solar panels installed on a rooftop"
      />

      <ServicesList />
      <ProcessSection />
      <PricingSection />
      <CtaBannerSection />
    </>
  );
}
