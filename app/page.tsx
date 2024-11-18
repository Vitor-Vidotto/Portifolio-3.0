import dynamic from "next/dynamic";
import AboutSection from "./components/AboutSection";
import ContatoSection from "./components/ContatoSection";
import FrontPage from "./components/FrontPage";
import ProjectsSection from "./components/ProjectsSection";
import ThreeDScene from "./components/ThreeDScene";
import ServicesSection from "./components/ServicesSection";
import ServicesPriceSection from "./components/ServicesPriceSection";
const Timeline = dynamic(() => import('./components/TimeLine'), {
  ssr: false,
});


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
<FrontPage />
<a
        href="https://www.linkedin.com/in/vitor-vidotto"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 rounded-full flex items-center justify-center text-sm sm:text-base"
        title="Entrar em contato"
      >
        <ThreeDScene />
      </a>
          <div className="container mt-24 mx-auto px-12 py-4">
      <AboutSection />
      <Timeline />
      <ProjectsSection />
      <ServicesSection />
      <ServicesPriceSection />
      <ContatoSection />
      </div>
    </main>
  );
}
