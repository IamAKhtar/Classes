import { images } from "@/config/images";

export default function Gallery() {

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4" data-testid="text-gallery-title">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto" data-testid="text-gallery-subtitle">
            A glimpse into our modern coaching environment and academic activities
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {images.gallery.map((image, index) => (
            <img 
              key={index}
              src={image.src} 
              alt={image.alt} 
              className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform cursor-pointer"
              data-testid={`gallery-img-${index + 1}`}
              onClick={() => window.open(image.src, '_blank')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
