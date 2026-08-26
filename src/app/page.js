import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top" className="flex min-h-screen flex-col">
      <Navbar />
      <div className="mx-auto w-full max-w-page flex-1 px-6 lg:px-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <div className="mx-auto w-full max-w-page px-6 lg:px-10">
        <Footer />
      </div>
    </main>
  );
}
