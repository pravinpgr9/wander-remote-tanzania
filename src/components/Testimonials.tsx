
import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const testimonials = [
    {
      name: "James Anderson",
      location: "London, UK",
      text: "Our safari experience exceeded all expectations. The guides were incredibly knowledgeable, and we were fortunate enough to see all of the Big Five. The accommodations were luxurious yet authentic. A truly unforgettable adventure!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Maria Rodriguez",
      location: "Barcelona, Spain",
      text: "Climbing Kilimanjaro was the challenge of a lifetime, but our guides made it achievable. They were patient, supportive, and ensured our safety every step of the way. Reaching the summit was an emotional moment I'll treasure forever.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "David Chen",
      location: "Toronto, Canada",
      text: "Zanzibar was the perfect conclusion to our Tanzania adventure. The beaches were pristine, the history was fascinating, and the seafood was incredible. Our guide showed us hidden gems we would never have discovered on our own.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-tanzania-savanna relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-tanzania-acacia/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-tanzania-earth/5 rounded-full translate-x-1/4 translate-y-1/4" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-tanzania-safari mb-3 font-medium">Happy Travelers</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6 text-tanzania-kilimanjaro">
            What Our Guests Say
          </h3>
          <p className="text-lg text-gray-700">
            Don't just take our word for it. Read what travelers from around the world have to say about their unforgettable experiences in Tanzania.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="overflow-hidden"
            ref={testimonialRef}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-2 border-tanzania-earth"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={18} className="fill-tanzania-acacia text-tanzania-acacia" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                        <div>
                          <h5 className="font-bold text-tanzania-kilimanjaro">{testimonial.name}</h5>
                          <p className="text-sm text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-tanzania-earth hover:bg-tanzania-earth hover:text-white transition-colors z-10"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-tanzania-earth hover:bg-tanzania-earth hover:text-white transition-colors z-10"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-tanzania-sunset w-8' : 'bg-tanzania-earth/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
