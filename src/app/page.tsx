'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User, MessageCircle, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  // Sample data
  const slides = [
    { id: 1, title: "Premium Eyewear Collection", description: "Discover our new range of designer frames", image: "/api/placeholder/1200/500" },
    { id: 2, title: "Monthly Contact Lenses", description: "Comfort that lasts all month long", image: "/api/placeholder/1200/500" },
    { id: 3, title: "Virtual Try-On", description: "See how our frames look on you with AI technology", image: "/api/placeholder/1200/500" }
  ];

  const testimonials = [
    { id: 1, name: "Sarah J.", comment: "The virtual try-on feature saved me so much time! I found my perfect frames without leaving home.", rating: 5, image: "/api/placeholder/80/80" },
    { id: 2, name: "Michael T.", comment: "Their contact lenses are the most comfortable I've ever worn. Great customer service too!", rating: 5, image: "/api/placeholder/80/80" },
    { id: 3, name: "Emma L.", comment: "Love my new glasses! The AI recommendation system suggested styles I wouldn't have tried otherwise.", rating: 4, image: "/api/placeholder/80/80" }
  ];

  const spectacles = [
    { id: 1, name: "Modern Rectangle", price: "$129", image: "/api/placeholder/300/300" },
    { id: 2, name: "Round Vintage", price: "$149", image: "/api/placeholder/300/300" },
    { id: 3, name: "Aviator Classic", price: "$159", image: "/api/placeholder/300/300" }
  ];

  const contactLenses = [
    { id: 1, name: "Daily Comfort", price: "$45/month", image: "/api/placeholder/300/300" },
    { id: 2, name: "Monthly Ultra", price: "$65/month", image: "/api/placeholder/300/300" },
    { id: 3, name: "Color Enhance", price: "$55/month", image: "/api/placeholder/300/300" }
  ];

  const pressFeatures = [
    { id: 1, name: "Fashion Weekly", logo: "/api/placeholder/150/60" },
    { id: 2, name: "Style Today", logo: "/api/placeholder/150/60" },
    { id: 3, name: "Eyewear Magazine", logo: "/api/placeholder/150/60" },
    { id: 4, name: "Optical Review", logo: "/api/placeholder/150/60" }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Next/Prev slide handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Testimonial handlers
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mr-4 text-gray-700 focus:outline-none lg:hidden"
            >
              <Menu size={24} />
            </button>
            <a href="/" className="text-2xl font-bold text-blue-600">Spectacle & Lens</a>
          </div>
          
          <div className="hidden lg:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/spectacles" className="text-gray-700 hover:text-blue-600">Spectacles</a>
            <a href="/contact-lenses" className="text-gray-700 hover:text-blue-600">Contact Lenses</a>
            <a href="/virtual-try-on" className="text-gray-700 hover:text-blue-600">Virtual Try-On</a>
            <a href="/about-us" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="/contact-us" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:border-blue-500"
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            <a href="/account" className="text-gray-700 hover:text-blue-600">
              <User size={24} />
            </a>
            <a href="/cart" className="text-gray-700 hover:text-blue-600">
              <ShoppingCart size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="bg-white h-full w-64 shadow-lg p-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-blue-600">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} className="text-gray-700" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-blue-600 py-2 px-4">Home</a>
              <a href="/spectacles" className="text-gray-700 hover:text-blue-600 py-2 px-4">Spectacles</a>
              <a href="/contact-lenses" className="text-gray-700 hover:text-blue-600 py-2 px-4">Contact Lenses</a>
              <a href="/virtual-try-on" className="text-gray-700 hover:text-blue-600 py-2 px-4">Virtual Try-On</a>
              <a href="/about-us" className="text-gray-700 hover:text-blue-600 py-2 px-4">About Us</a>
              <a href="/contact-us" className="text-gray-700 hover:text-blue-600 py-2 px-4">Contact</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 py-2 px-4">Privacy Policy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 py-2 px-4">Terms & Conditions</a>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Carousel */}
      <div className="relative overflow-hidden h-96">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full h-full relative">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-8">{slide.description}</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-white bg-opacity-50'}`}
            />
          ))}
        </div>
      </div>

      {/* Featured In Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">As Featured In</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {pressFeatures.map((press) => (
              <div key={press.id} className="grayscale hover:grayscale-0 transition duration-300">
                <img src={press.logo} alt={press.name} className="h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Products</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Spectacles Column */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 py-4">
                <h3 className="text-2xl font-bold text-center text-white">Spectacles</h3>
              </div>
              <div className="p-6">
                {spectacles.map((item) => (
                  <div key={item.id} className="flex items-center mb-6 pb-6 border-b border-gray-200 last:border-0 last:pb-0 last:mb-0">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-6" />
                    <div>
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <p className="text-gray-600 mb-2">Starting from {item.price}</p>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
                <div className="text-center mt-6">
                  <a href="/spectacles" className="text-blue-600 hover:text-blue-800 font-semibold">
                    View All Spectacles →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Lenses Column */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-teal-600 py-4">
                <h3 className="text-2xl font-bold text-center text-white">Contact Lenses</h3>
              </div>
              <div className="p-6">
                {contactLenses.map((item) => (
                  <div key={item.id} className="flex items-center mb-6 pb-6 border-b border-gray-200 last:border-0 last:pb-0 last:mb-0">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-6" />
                    <div>
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <p className="text-gray-600 mb-2">{item.price}</p>
                      <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded text-sm transition duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
                <div className="text-center mt-6">
                  <a href="/contact-lenses" className="text-teal-600 hover:text-teal-800 font-semibold">
                    View All Contact Lenses →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Try-On Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Virtual Try-On Experience</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See how our frames look on you with our AI-powered virtual try-on technology.
            No app download required!
          </p>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="relative pt-[56.25%]">
              <img src="/api/placeholder/1000/600" alt="Virtual Try-On Demo" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                  Try It Now
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">How It Works:</h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Turn on your camera or upload a photo</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>Browse our collection and select frames to try</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>See real-time preview with our AI technology</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                  <span>Save your favorites and make a purchase</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full p-6">
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                      <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={20} 
                            className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                      <p className="font-bold">{testimonial.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Bubble */}
      <div className="fixed bottom-6 right-6 z-30">
        <button 
          onClick={() => setShowAIAssistant(!showAIAssistant)}
          className="bg-blue-600 hover:bg-blue-700 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition duration-300"
        >
          <MessageCircle size={28} className="text-white" />
        </button>
        
        {showAIAssistant && (
          <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl w-80 overflow-hidden">
            <div className="bg-blue-600 p-4 text-white">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">AI Eyewear Assistant</h3>
                <button onClick={() => setShowAIAssistant(false)}>
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="p-4 h-80 overflow-y-auto bg-gray-50">
              <div className="bg-blue-100 p-3 rounded-lg rounded-tl-none inline-block mb-4">
                Hello! I'm your AI eyewear assistant. How can I help you find the perfect glasses or contact lenses today?
              </div>
              {/* Chat messages would go here */}
            </div>
            <div className="p-4 border-t">
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Type your question..." 
                  className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white p-2 rounded-r-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Spectacle & Lens</h3>
              <p className="text-gray-400">Your trusted partner for high-quality eyewear and contact lenses.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="/spectacles" className="text-gray-400 hover:text-white">Spectacles</a></li>
                <li><a href="/sunglasses" className="text-gray-400 hover:text-white">Sunglasses</a></li>
                <li><a href="/contact-lenses" className="text-gray-400 hover:text-white">Contact Lenses</a></li>
                <li><a href="/accessories" className="text-gray-400 hover:text-white">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="/about-us" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/contact-us" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="/careers" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Policies</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                <li><a href="/shipping" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
                <li><a href="/returns" className="text-gray-400 hover:text-white">Returns & Refunds</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 Spectacle & Lens. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;