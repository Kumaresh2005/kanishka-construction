import SEO from "../components/ui/SEO";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ProcessSection from "../components/home/ProcessSection";
import OwnerSpotlight from "../components/home/OwnerSpotlight";
import CareersPreview from "../components/home/CareersPreview";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <SEO
        title="Premium Construction Company in Nagpur"
        description="Kanishka Constructions Pvt. Ltd. delivers premium residential, commercial, industrial and infrastructure construction projects across Nagpur and Maharashtra. Get a free consultation today."
      />
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <Stats />
      <WhyChooseUs />
      <ProcessSection />
      <OwnerSpotlight />
      <CareersPreview />
      <FinalCTA />
    </>
  );
}
