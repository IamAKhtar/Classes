import { ArrowDownRight, PhoneCall } from "lucide-react";
import { contactInfo } from "@/config/contacts";

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4" data-testid="text-location-title">
            Our Location
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto" data-testid="text-location-subtitle">
            Conveniently located in Antop Hill, Mumbai - Easy to reach by public transport
          </p>
        </div>
        
        {/* Google Maps Embed */}
        <div className="bg-white p-4 rounded-xl shadow-lg" data-testid="maps-container">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src={contactInfo.mapsEmbed}
              width="100%" 
              height="450" 
              style={{border: 0, borderRadius: '0.5rem'}}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`${contactInfo.businessName} Location`}
              data-testid="iframe-maps"
            />
          </div>
          
          {/* Location Details */}
          <div className="mt-6 text-center" data-testid="location-details">
            <h3 className="text-xl font-bold text-dark mb-2">{contactInfo.businessName}</h3>
            <p className="text-gray-700 mb-4">
              {contactInfo.address.full}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={contactInfo.address.googleMapsLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                data-testid="button-get-directions"
              >
                <ArrowDownRight className="mr-2" />
                Get Directions
              </a>
              <a 
                href={`tel:${contactInfo.phone.link}`} 
                className="bg-secondary hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                data-testid="button-call-now"
              >
                <PhoneCall className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
