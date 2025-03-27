
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-widest text-tanzania-safari mb-3 font-medium">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-6 text-tanzania-kilimanjaro">
            Plan Your Tanzania Adventure
          </h3>
          <p className="text-lg text-gray-700">
            Have questions or ready to start planning your dream trip to Tanzania? 
            Our travel experts are here to help you create an unforgettable experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-tanzania-savanna rounded-2xl p-8 shadow-sm">
              <h4 className="text-xl font-bold font-playfair mb-6 text-tanzania-earth">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-tanzania-earth/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Phone size={18} className="text-tanzania-earth" />
                  </div>
                  <div>
                    <h5 className="font-medium text-tanzania-kilimanjaro">Phone</h5>
                    <p className="text-gray-600">+255 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-tanzania-earth/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <Mail size={18} className="text-tanzania-earth" />
                  </div>
                  <div>
                    <h5 className="font-medium text-tanzania-kilimanjaro">Email</h5>
                    <p className="text-gray-600">info@wandertanzania.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-tanzania-earth/10 flex items-center justify-center flex-shrink-0 mr-4">
                    <MapPin size={18} className="text-tanzania-earth" />
                  </div>
                  <div>
                    <h5 className="font-medium text-tanzania-kilimanjaro">Address</h5>
                    <p className="text-gray-600">123 Safari Avenue<br />Arusha, Tanzania</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-tanzania-earth/10">
                <h5 className="font-medium text-tanzania-kilimanjaro mb-4">Office Hours</h5>
                <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-md">
              <h4 className="text-xl font-bold font-playfair mb-6 text-tanzania-kilimanjaro">Send Us a Message</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tanzania-earth/30 focus:border-tanzania-earth/30 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tanzania-earth/30 focus:border-tanzania-earth/30 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tanzania-earth/30 focus:border-tanzania-earth/30 transition-colors"
                  placeholder="Inquiry about safari tours"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tanzania-earth/30 focus:border-tanzania-earth/30 transition-colors resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-tanzania-earth text-white py-3 px-6 rounded-md hover:bg-tanzania-safari transition-colors duration-300 flex items-center justify-center font-medium"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
