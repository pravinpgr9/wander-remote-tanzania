
import React, { useEffect, useRef } from 'react';

const AboutTanzania = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = featuresRef.current?.children;
    if (childElements) {
      Array.from(childElements).forEach((child) => {
        child.classList.add('opacity-0');
        observer.observe(child);
      });
    }

    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay was prevented:', err);
      });
    }

    return () => {
      if (childElements) {
        Array.from(childElements).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  const features = [
    {
      title: "Serengeti National Park",
      description: "Home to the Great Migration, one of the most spectacular wildlife events on Earth.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2VyZW5nZXRpfHx8fHx8MTY4MDEyMzQ1Mw&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Mount Kilimanjaro",
      description: "Africa's highest peak and one of the world's most climbable high mountains.",
      image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8a2lsaW1hbmphcm98fHx8fHwxNjgwMTIzNTAw&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Zanzibar Beaches",
      description: "Crystal clear waters, white sand beaches, and a rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8emFuemliYXJ8fHx8fHwxNjgwMTIzNTQy&ixlib=rb-4.0.3&q=80&w=1080"
    },
    {
      title: "Ngorongoro Crater",
      description: "The world's largest intact volcanic caldera and a natural wonder.",
      image: "https://images.unsplash.com/photo-1565369728672-972124931da2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bmNvcm9uZ29yb3x8fHx8fDE2ODAxMjM2MzQ&ixlib=rb-4.0.3&q=80&w=1080"
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          className="absolute object-cover w-full h-full opacity-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-wild-zebras-in-the-savanna-4559-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-1"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-tanzania-earth mb-3 font-medium">Discover Tanzania</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6 text-tanzania-kilimanjaro">
            A Land of Natural Wonders
          </h3>
          <p className="text-lg text-gray-700">
            Tanzania is a country of incredible diversity, featuring some of Africa's most iconic landscapes and wildlife experiences.
            From the vast plains of the Serengeti to the pristine beaches of Zanzibar, Tanzania offers unforgettable adventures for every traveler.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14" 
          ref={featuresRef}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative group perspective"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden rounded-xl shadow-md hover-lift">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white mb-2 font-playfair">{feature.title}</h4>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#tours" 
            className="inline-block px-8 py-3 bg-tanzania-earth text-white font-medium rounded-md hover:bg-tanzania-safari transition-all duration-300 shadow hover:shadow-lg"
          >
            View Our Tours
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutTanzania;
