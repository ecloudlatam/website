import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { PhilosophyStack } from "@/components/PhilosophyStack";
import { CreatorSpotlight } from "@/components/CreatorSpotlight";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsGrid />
        <PhilosophyStack />
        <CreatorSpotlight />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

