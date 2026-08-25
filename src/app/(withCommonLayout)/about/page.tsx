import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import StatsBand from "@/src/components/Shared/StatsBand/StatsBand";
import OurStory from "@/src/components/Ui/AboutPage/OurStory";
import MissionVision from "@/src/components/Ui/AboutPage/MissionVision";
import WhyChooseUsSection from "@/src/components/Ui/HomePage/WhyChooseUsSection/WhyChooseUsSection";
import TeamSection from "@/src/components/Ui/HomePage/TeamSection/TeamSection";
import CtaBannerSection from "@/src/components/Ui/HomePage/CtaBannerSection/CtaBannerSection";
import { IMAGES } from "@/src/utils/data/energy";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about EcoVolt Energy — our story, mission, and the team building a cleaner, more sustainable energy future.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Powering A Sustainable Future, Together"
        subtitle="EcoVolt Energy is a team of engineers, technicians, and clean-energy advocates on a mission to make renewable power the easy choice."
        image={IMAGES.windTurbineSky}
        alt="Wind turbine against a bright sky"
      />

      <StatsBand />

      <OurStory />
      <MissionVision />
      <WhyChooseUsSection />
      <TeamSection />
      <CtaBannerSection />
    </>
  );
}
