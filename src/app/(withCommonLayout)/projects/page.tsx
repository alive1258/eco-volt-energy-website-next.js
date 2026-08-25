import type { Metadata } from "next";
import PageHero from "@/src/components/Shared/PageHero/PageHero";
import StatsBand from "@/src/components/Shared/StatsBand/StatsBand";
import ProjectsGrid from "@/src/components/Ui/ProjectsPage/ProjectsGrid";
import CtaBannerSection from "@/src/components/Ui/HomePage/CtaBannerSection/CtaBannerSection";
import { IMAGES } from "@/src/utils/data/energy";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse EcoVolt Energy's portfolio of solar, wind, and energy storage projects delivered across the United States.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Our Recent Projects"
        subtitle="From residential rooftops to utility-scale wind farms, take a look at the clean energy systems we've delivered."
        image={IMAGES.industrialSolar}
        alt="Industrial solar installation from above"
      />

      <StatsBand />
      <ProjectsGrid />
      <CtaBannerSection />
    </>
  );
}
