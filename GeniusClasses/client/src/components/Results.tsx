import { User } from "lucide-react";
import { images } from "@/config/images";

export default function Results() {
  const testimonials = [
    {
      id: 1,
      name: "Mrs. Priya Sharma",
      role: "Parent of SSC Student",
      text: "Husain Sir's teaching method is exceptional. The personalized attention and regular tests helped my daughter improve her grades significantly. Highly recommended!",
      bgColor: "bg-blue-100",
      textColor: "text-primary"
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "HSC Graduate 2023",
      text: "The small batch size and individual attention at Genius Classes made all the difference. I scored 92% in HSC and got admission in my dream college!",
      bgColor: "bg-green-100",
      textColor: "text-secondary"
    },
    {
      id: 3,
      name: "Sneha Gupta",
      role: "JEE Main Qualifier 2023",
      text: "Thanks to Genius Classes, I cracked JEE Main with a good rank. The faculty's dedication and support throughout the preparation was outstanding.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      id: 4,
      name: "Mr. Rajesh Kumar",
      role: "Parent of HSC Student",
      text: "Best coaching center in Antop Hill area. My son's confidence and academic performance improved tremendously under Husain Sir's guidance.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4" data-testid="text-results-title">
            Results & Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        {/* Success Stories */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-xl mb-12" data-testid="success-stats">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Our Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 p-6 rounded-lg" data-testid="stat-ssc">
                <h4 className="text-3xl font-bold mb-2">95%</h4>
                <p className="text-sm opacity-90">SSC Students Above 80%</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg" data-testid="stat-hsc">
                <h4 className="text-3xl font-bold mb-2">87%</h4>
                <p className="text-sm opacity-90">HSC Students Above 75%</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg" data-testid="stat-jee-neet">
                <h4 className="text-3xl font-bold mb-2">25+</h4>
                <p className="text-sm opacity-90">JEE/NEET Selections</p>
              </div>
            </div>
            <p className="mt-6 opacity-90">*Results from previous academic year - Individual results may vary</p>
          </div>
        </div>
        
        {/* Academic success image */}
        <img 
          src={images.results.celebration} 
          alt={images.results.alt} 
          className="rounded-xl shadow-lg w-full h-64 object-cover mb-12"
          data-testid="img-success-celebration"
        />
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl" data-testid={`testimonial-${testimonial.id}`}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center`}>
                    <User className={testimonial.textColor} />
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 mb-4" data-testid={`testimonial-text-${testimonial.id}`}>
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-dark" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600" data-testid={`testimonial-role-${testimonial.id}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
