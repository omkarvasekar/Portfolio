import './index.css';
import SmoothScroll from './components/layout/SmoothScroll';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import TechStackSection from './components/sections/TechStackSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import AchievementsSection from './components/sections/AchievementsSection';
import ResearchSection from './components/sections/ResearchSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  return (
    <SmoothScroll>
      {/* Scroll progress bar */}
      <div id="scroll-progress" />

      {/* Custom cursor (desktop only) */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ResearchSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </SmoothScroll>
  );
}
