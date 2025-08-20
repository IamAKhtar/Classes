import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Results from "@/components/Results";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Results />
      <Gallery />
      <Contact />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
