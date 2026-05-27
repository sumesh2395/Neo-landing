import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { About } from "@/components/layout/About";
import { Standards } from "@/components/layout/Standards";
import { WhyChooseUs } from "@/components/layout/WhyChooseUs";
import { Reviews } from "@/components/layout/Reviews";
import { CTA } from "@/components/layout/CTA";
import { Footer } from "@/components/layout/Footer";
import Faculty from "@/components/layout/Faculty";
import { Gallery } from "@/components/layout/Gallery";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Standards />
      <Faculty />
      <Gallery />
      <Reviews />
      <CTA />
      <Footer />

      {/* Placeholder for other sections */}
      <div className="flex-1" />
    </main>
  );
}
