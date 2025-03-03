'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

const AboutUs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <a href="/about-us" className="text-gray-700 hover:text-blue-600 font-medium">About Us</a>
            <a href="/contact-us" className="text-gray-700 hover:text-blue-600">Contact</a>
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
              <a href="/about-us" className="text-blue-600 font-medium py-2 px-4">About Us</a>
              <a href="/contact-us" className="text-gray-700 hover:text-blue-600 py-2 px-4">Contact</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 py-2 px-4">Privacy Policy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 py-2 px-4">Terms & Conditions</a>
            </nav>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
          <div className="flex items-center justify-center text-blue-100">
            <a href="/" className="hover:text-white">Home</a>
            <ChevronRight size={16} className="mx-2" />
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Spectacle & Lens began with a simple mission: to make high-quality eyewear accessible to everyone. What started as a small optical shop in downtown has grown into a trusted provider of prescription glasses and contact lenses nationwide.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Dr. Emily Chen, recognized that many people were struggling to find stylish, durable eyewear at reasonable prices. Drawing on her 15 years of experience as an optometrist, she assembled a team of skilled professionals who shared her vision of combining fashion, function, and affordability.
              </p>
              <p className="text-gray-600">
                Today, we continue to uphold the values that guided us from day one: exceptional customer service, cutting-edge technology, and unwavering commitment to helping you see and look your best.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/api/placeholder/600/400" alt="Our store" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products. From the frames to the lenses, we use only the finest materials and the most advanced technology to ensure your eyewear lasts for years to come.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Affordability</h3>
              <p className="text-gray-600">
                We believe everyone deserves access to quality eyewear without breaking the bank. By streamlining our operations and working directly with manufacturers, we pass the savings on to you.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of optical technology. From advanced lens coatings to virtual try-on features, we continuously invest in innovations that enhance your experience and the performance of your eyewear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img src="/api/placeholder/200/200" alt="Dr. Emily Chen" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Dr. Emily Chen</h3>
              <p className="text-blue-600">Founder & Head Optometrist</p>
            </div>

            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img src="/api/placeholder/200/200" alt="Michael Rodriguez" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Michael Rodriguez</h3>
              <p className="text-blue-600">Lead Optician</p>
            </div>

            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img src="/api/placeholder/200/200" alt="Sarah Johnson" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
              <p className="text-blue-600">Contact Lens Specialist</p>
            </div>

            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img src="/api/placeholder/200/200" alt="David Patel" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">David Patel</h3>
              <p className="text-blue-600">Frame Stylist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Locations</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Downtown</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <MapPin size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>123 Main Street, Suite 101<br />Metropolis, NY 10001</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                  <span>(212) 555-1234</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                  <span>downtown@spectaclelens.com</span>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 10:00 AM - 4:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Westside</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <MapPin size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>456 Sunset Boulevard<br />Metropolis, NY 10016</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                  <span>(212) 555-5678</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                  <span>westside@spectaclelens.com</span>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p>Mon-Fri: 10:00 AM - 7:00 PM</p>
                    <p>Sat: 10:00 AM - 5:00 PM</p>
                    <p>Sun: 12:00 PM - 4:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Eastside</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <MapPin size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <span>789 Park Avenue<br />Metropolis, NY 10028</span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                  <span>(212) 555-9012</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-blue-600 mr-2 flex-shrink-0" />
                  <span>eastside@spectaclelens.com</span>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                    <p>Sat: 9:00 AM - 6:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

export default AboutUs;