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
        title="Building Contractor & Welding Services | Subrat Sarkar"
        description="Kanishka Constructions Pvt. Ltd. led by Subrat Sarkar is a premier construction contractor in Maharashtra, providing residential & commercial building, certified welding, structural steel, and turnkey project execution."
        keywords="Kanishka Constructions, Subrat Sarkar, Subrat Sarkar contractor, construction company Gadchiroli, builders in Ashti Chamorshi, contractor Nagpur, welding services Maharashtra, structural steel fabrication, PEB industrial sheds, civil works Maharashtra"
        canonical="/"
        image="/project_photos/owner/owner.jpeg"
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
