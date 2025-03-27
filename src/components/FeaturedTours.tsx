
import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin } from 'lucide-react';

const FeaturedTours = () => {
  const [hoveredTour, setHoveredTour] = useState<number | null>(null);
  
  const tours = [
    {
      title: 'Classic Safari Adventure',
      description: 'Experience the thrill of spotting the Big Five on this unforgettable safari through Tanzania\'s most famous national parks.',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      days: 7,
      location: 'Serengeti & Ngorongoro',
      groupSize: '2-12',
      price: 2499
    },
    {
      title: 'Kilimanjaro Trek - Machame Route',
      description: 'Conquer Africa\'s highest peak via the scenic Machame Route, also known as the "Whiskey Route."',
      image: 'https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      days: 8,
      location: 'Mount Kilimanjaro',
      groupSize: '2-10',
      price: 2899
    },
    {
      title: 'Zanzibar Beach & Culture',
      description: 'Relax on pristine beaches and explore the rich cultural heritage of Zanzibar, the Spice Island.',
      image: 'https://images.unsplash.com/photo-1519046004799-5210220d9c90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      days: 6,
      location: 'Zanzibar',
      groupSize: '2-14',
      price: 1899
    }
  ];

  return (
    <section id="tours" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-tanzania-safari mb-3 font-medium">Explore Tanzania</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6 text-tanzania-kilimanjaro">
            Our Featured Tours
          </h3>
          <p className="text-lg text-gray-700">
            Discover our most popular experiences, carefully crafted to showcase the best of Tanzania.
            Each tour is thoughtfully designed to create memories that will last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 ease-out"
              onMouseEnter={() => setHoveredTour(index)}
              onMouseLeave={() => setHoveredTour(null)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                    hoveredTour === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute top-4 right-4 bg-tanzania-sunset text-white px-4 py-1 rounded-full text-sm font-medium">
                  From ${tour.price}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold font-playfair mb-3 text-tanzania-kilimanjaro">{tour.title}</h4>
                <p className="text-gray-600 mb-5 text-sm">{tour.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2 text-tanzania-safari" />
                    <span>{tour.days} days</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users size={16} className="mr-2 text-tanzania-safari" />
                    <span>{tour.groupSize} people</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 col-span-2">
                    <MapPin size={16} className="mr-2 text-tanzania-safari" />
                    <span>{tour.location}</span>
                  </div>
                </div>
                
                <a 
                  href="#book" 
                  className="block text-center w-full py-3 bg-tanzania-earth text-white rounded-md font-medium transition-all duration-300 hover:bg-tanzania-safari transform hover:-translate-y-1"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#all-tours" 
            className="inline-flex items-center text-tanzania-earth font-medium hover:text-tanzania-safari transition-colors"
          >
            View All Tours
            <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
