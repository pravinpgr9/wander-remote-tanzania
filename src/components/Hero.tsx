
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      heroRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      heroRef.current.style.opacity = `${1 - scrollPosition / 700}`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-[120%] bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)',
            transform: 'translateZ(0)',
          }}
          ref={heroRef}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
        <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair tracking-tight mb-4 max-w-4xl">
            Experience the Wonder of <span className="text-tanzania-sunset">Tanzania</span>
          </h1>
        </div>
        <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <p className="text-lg md:text-xl font-light mb-8 max-w-2xl text-white/90">
            Discover breathtaking landscapes, incredible wildlife, and rich cultural experiences
            in one of Africa's most beautiful destinations.
          </p>
        </div>
        <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="#tours"
              className="px-8 py-3 bg-tanzania-sunset text-white font-medium rounded-md hover:bg-tanzania-earth transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Tours
            </a>
            <a
              href="#about"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-medium rounded-md hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
