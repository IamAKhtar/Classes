import { Facebook, Instagram, Youtube } from "lucide-react";
import { contactInfo } from "@/config/contacts";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2" data-testid="footer-about">
            <h3 className="text-2xl font-bold mb-4">{contactInfo.businessName}</h3>
            <p className="text-gray-300 mb-4">
              Providing quality education and personalized coaching in Mumbai. 
              Join us to achieve your academic goals with expert guidance from Husain Sir.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactInfo.social.facebook} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href={contactInfo.social.instagram} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href={contactInfo.social.youtube} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                data-testid="link-youtube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div data-testid="footer-links">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('courses')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-courses"
                >
                  Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('results')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-results"
                >
                  Results
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-contact">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                {contactInfo.address.full.split(', ').slice(0, 2).join(', ')}<br />
                {contactInfo.address.short}
              </p>
              <p className="text-gray-300 text-sm">
                <a 
                  href={`tel:${contactInfo.phone.link}`} 
                  className="hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  <i className="fas fa-phone mr-2"></i>{contactInfo.phone.display}
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center" data-testid="footer-copyright">
          <p className="text-gray-300 text-sm">
            © 2024 {contactInfo.businessName}. All rights reserved. | Designed for academic excellence in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
