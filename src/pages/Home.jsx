import { 
  Navbar, 
  HeroSection, 
  AboutSection, 
  SkillsSection, 
  ProjectsSection, 
  ContactSection, 
  Footer 
} from "@/components";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
