import { images } from "@/config/images";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4" data-testid="text-about-title">
            About Genius Classes
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={images.hero.teaching} 
              alt={images.hero.alt} 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-teaching"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-dark mb-6" data-testid="text-philosophy-title">
              Our Story & Teaching Philosophy
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed" data-testid="text-story">
              Genius Classes was founded with a vision to provide exceptional academic coaching that goes beyond traditional teaching methods. 
              Under the expert guidance of Husain Sir, we have built a reputation for delivering personalized education that adapts to each student's unique learning style.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed" data-testid="text-philosophy">
              Our teaching philosophy centers on creating an environment where students feel confident to ask questions, explore concepts deeply, 
              and develop critical thinking skills that serve them throughout their academic journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg" data-testid="card-mission">
                <h4 className="text-lg font-semibold text-primary mb-2">Our Mission</h4>
                <p className="text-gray-700 text-sm">
                  To empower students with quality education, personalized attention, and innovative teaching methods that ensure academic success and personal growth.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg" data-testid="card-vision">
                <h4 className="text-lg font-semibold text-secondary mb-2">Our Vision</h4>
                <p className="text-gray-700 text-sm">
                  To be Mumbai's most trusted coaching center, known for producing confident, capable students who excel in their academic pursuits and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
