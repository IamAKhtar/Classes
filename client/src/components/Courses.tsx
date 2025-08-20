import { GraduationCap, BookOpen, Trophy } from "lucide-react";

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4" data-testid="text-courses-title">
            Courses Offered
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto" data-testid="text-courses-subtitle">
            Comprehensive coaching programs designed to help students excel in their academic journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* SSC Coaching */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-testid="card-ssc">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">SSC Coaching</h3>
              <p className="text-gray-600 mb-4">Comprehensive preparation for SSC board examinations</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Mathematics</li>
                <li>• Science</li>
                <li>• Social Studies</li>
                <li>• English & Hindi</li>
              </ul>
            </div>
          </div>
          
          {/* HSC Coaching */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-testid="card-hsc">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-secondary text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">HSC Coaching</h3>
              <p className="text-gray-600 mb-4">Advanced preparation for HSC board examinations</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Physics, Chemistry, Biology</li>
                <li>• Mathematics</li>
                <li>• Commerce Subjects</li>
                <li>• Arts Subjects</li>
              </ul>
            </div>
          </div>
          
          {/* JEE/NEET Coaching */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow" data-testid="card-jee-neet">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-accent text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">JEE/NEET Coaching</h3>
              <p className="text-gray-600 mb-4">Specialized coaching for competitive examinations</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• JEE Main & Advanced</li>
                <li>• NEET Preparation</li>
                <li>• State CET Exams</li>
                <li>• Foundation Courses</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="bg-white p-8 rounded-xl shadow-lg" data-testid="features-section">
          <h3 className="text-2xl font-bold text-dark mb-8 text-center" data-testid="text-features-title">
            Why Choose Genius Classes?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center" data-testid="feature-small-batches">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-users text-primary"></i>
              </div>
              <h4 className="font-semibold text-dark mb-2">Small Batches</h4>
              <p className="text-sm text-gray-600">Limited students per batch for personalized attention</p>
            </div>
            <div className="text-center" data-testid="feature-regular-tests">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-clipboard-list text-secondary"></i>
              </div>
              <h4 className="font-semibold text-dark mb-2">Regular Tests</h4>
              <p className="text-sm text-gray-600">Weekly assessments and mock examinations</p>
            </div>
            <div className="text-center" data-testid="feature-expert-faculty">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-chalkboard-teacher text-purple-600"></i>
              </div>
              <h4 className="font-semibold text-dark mb-2">Expert Faculty</h4>
              <p className="text-sm text-gray-600">Experienced and qualified teaching staff</p>
            </div>
            <div className="text-center" data-testid="feature-proven-results">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-medal text-yellow-600"></i>
              </div>
              <h4 className="font-semibold text-dark mb-2">Proven Results</h4>
              <p className="text-sm text-gray-600">Track record of student success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
