import AboutSection from "../AboutSection/AboutSection";
import ContactSection from "../ContactSection/ContactSection";
import CtaBannerSection from "../CtaBannerSection/CtaBannerSection";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import HeroSection from "../HeroSection/HeroSection";
import InsightsSection from "../InsightsSection/InsightsSection";
import PricingSection from "../PricingSection/PricingSection";
import ProcessSection from "../ProcessSection/ProcessSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import TeamSection from "../TeamSection/TeamSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import WhyChooseUsSection from "../WhyChooseUsSection/WhyChooseUsSection";

const RootHomePage = () => {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CtaBannerSection />
      <PricingSection />
      <TestimonialsSection />
      <FeaturesSection />
      <ProjectsSection />
      <TeamSection />
      <InsightsSection />
      <ContactSection />
    </>
  );
};

export default RootHomePage;
