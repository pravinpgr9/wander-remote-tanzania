
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Tours', href: '#tours' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'glassmorphism py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <h1 className="text-2xl font-bold font-playfair text-tanzania-earth">
                <span className="text-tanzania-sunset">Wander</span>Tanzania
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 hover-lift px-1 ${
                  isScrolled ? 'text-tanzania-earth' : 'text-white'
                }`}
              >
                {link.title}
              </a>
            ))}
            <a
              href="#book"
              className="px-5 py-2.5 rounded-md bg-tanzania-sunset text-white text-sm font-medium transition-all duration-300 hover:bg-tanzania-earth shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${
                isScrolled ? 'text-tanzania-earth' : 'text-white'
              }`}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-white w-full h-screen z-50 transform transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col p-6 space-y-6">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center">
              <h1 className="text-2xl font-bold font-playfair text-tanzania-earth">
                <span className="text-tanzania-sunset">Wander</span>Tanzania
              </h1>
            </a>
            <button
              type="button"
              className="p-2 text-tanzania-earth"
              onClick={toggleMobileMenu}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6 pt-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg font-medium text-tanzania-earth hover:text-tanzania-sunset transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                {link.title}
              </a>
            ))}
            <a
              href="#book"
              className="px-5 py-3 rounded-md bg-tanzania-sunset text-white text-lg font-medium text-center transition-all duration-300 hover:bg-tanzania-earth"
              onClick={toggleMobileMenu}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
