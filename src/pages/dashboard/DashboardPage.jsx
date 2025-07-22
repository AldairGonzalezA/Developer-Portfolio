import { HeroSection } from "../../components/Dashboard/Proyects";
import { AboutSection } from "../../components/Dashboard/AboutMe";
import { PersonalInfo } from "../../components/Dashboard/PersonalInfo";
import { SkillsSection } from "../../components/Skills/Skills";
import { EducationSection } from "../../components/Dashboard/Education";
import { ImageCarousel } from "../../components/Dashboard/CarouselImages";
import { ContactSection } from "../../components/Dashboard/Contact";

export const DashboardPage = () => {
    return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <AboutSection />
      <PersonalInfo />
      <SkillsSection />
      <EducationSection />
      <ImageCarousel />
      <ContactSection />
    </div>
  );
}