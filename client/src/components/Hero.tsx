import { contactInfo } from "@/config/contacts";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Welcome to {contactInfo.businessName}
          </h1>
          <p className="text-xl md:text-2xl mb-4" data-testid="text-hero-subtitle">
            Excellence in Education {contactInfo.tagline}
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-description">
            Your trusted coaching center in Mumbai providing high-quality academic coaching 
            with personalized attention and result-driven methods to help students achieve their academic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              data-testid="button-admission"
            >
              Contact for Admission
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              data-testid="button-demo"
            >
              Book a Free Demo Class
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
