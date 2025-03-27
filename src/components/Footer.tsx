
import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tanzania-kilimanjaro text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold font-playfair mb-6">
              <span className="text-tanzania-sunset">Wander</span>Tanzania
            </h3>
            <p className="text-gray-300 mb-6">
              Crafting unforgettable Tanzania experiences with passion, expertise, and a commitment to sustainable tourism.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-tanzania-sunset transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tanzania-sunset transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tanzania-sunset transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-tanzania-sunset transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors hover-lift inline-block">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors hover-lift inline-block">About Us</a>
              </li>
              <li>
                <a href="#tours" className="text-gray-300 hover:text-white transition-colors hover-lift inline-block">Our Tours</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors hover-lift inline-block">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors hover-lift inline-block">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Tours */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Our Tours</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover-lift inline-block">Safari Adventures</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover-lift inline-block">Kilimanjaro Treks</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover-lift inline-block">Zanzibar Getaways</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover-lift inline-block">Cultural Experiences</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover-lift inline-block">Custom Tours</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone size={18} className="mr-3 text-tanzania-sunset flex-shrink-0 mt-1" />
                <span className="text-gray-300">+255 123 456 789</span>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mr-3 text-tanzania-sunset flex-shrink-0 mt-1" />
                <span className="text-gray-300">info@wandertanzania.com</span>
              </div>
              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-tanzania-sunset text-white rounded-md inline-block hover:bg-white hover:text-tanzania-sunset transition-all duration-300 font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} WanderTanzania. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
