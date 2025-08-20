import { useState } from "react";
import { Menu, X } from "lucide-react";
import { contactInfo } from "@/config/contacts";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" data-testid="header-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary" data-testid="text-logo">
                {contactInfo.businessName}
              </h1>
              <p className="text-xs text-gray-600">{contactInfo.tagline}</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-primary hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-courses"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-results"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-contact"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                data-testid="link-location"
              >
                Location
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-courses"
              >
                Courses
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-results"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-contact"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
                data-testid="link-mobile-location"
              >
                Location
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
