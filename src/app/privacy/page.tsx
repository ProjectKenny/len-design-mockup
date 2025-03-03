'use client';

import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const PrivacyPolicy = () => {
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
            <a href="/about-us" className="text-gray-700 hover:text-blue-600">About Us</a>
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
              <a href="/about-us" className="text-gray-700 hover:text-blue-600 py-2 px-4">About Us</a>
              <a href="/contact-us" className="text-gray-700 hover:text-blue-600 py-2 px-4">Contact</a>
              <a href="/privacy" className="text-blue-600 font-medium py-2 px-4">Privacy Policy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 py-2 px-4">Terms & Conditions</a>
            </nav>
          </div>
        </div>
      )}

      {/* Page Header */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <div className="flex items-center justify-center text-blue-100">
            <a href="/" className="hover:text-white">Home</a>
            <ChevronRight size={16} className="mx-2" />
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy Policy for Spectacle & Lens</h2>
              
              <p className="text-gray-600 mb-4">Last Updated: March 1, 2025</p>
              
              <p className="text-gray-600 mb-6">
                At Spectacle & Lens, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h3>
              
              <p className="text-gray-600 mb-4">We collect information that you provide directly to us, such as:</p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li className="mb-2">Personal identifying information (name, email address, phone number, etc.) when you create an account, make a purchase, or contact us.</li>
                <li className="mb-2">Health information related to your vision, prescription details, and eye health history.</li>
                <li className="mb-2">Payment information when you make a purchase.</li>
                <li className="mb-2">Communication history when you interact with our customer service team.</li>
                <li>Feedback and survey responses you provide to us.</li>
              </ul>
              
              <p className="text-gray-600 mb-4">We also automatically collect certain information when you visit our website:</p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li className="mb-2">Usage data such as pages visited, time spent on pages, and other statistics.</li>
                <li className="mb-2">Device information including IP address, browser type, and operating system.</li>
                <li>Cookies and similar tracking technologies to enhance your browsing experience.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">How We Use Your Information</h3>
              
              <p className="text-gray-600 mb-4">We use the information we collect for various purposes, including:</p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li className="mb-2">To provide and maintain our services, including processing transactions and managing your account.</li>
                <li className="mb-2">To improve our website, products, and customer service.</li>
                <li className="mb-2">To communicate with you about orders, promotions, and updates.</li>
                <li className="mb-2">To personalize your experience and deliver content relevant to your interests.</li>
                <li className="mb-2">To process and fulfill your orders for eyewear and contact lenses.</li>
                <li>To comply with legal obligations and enforce our policies.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Information Sharing and Disclosure</h3>
              
              <p className="text-gray-600 mb-4">We may share your information in the following circumstances:</p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li className="mb-2">With service providers who perform services on our behalf, such as payment processing, data analysis, and customer service.</li>
                <li className="mb-2">With business partners, such as frame manufacturers or lens suppliers, to fulfill your orders.</li>
                <li className="mb-2">With healthcare providers when necessary for your eye care needs.</li>
                <li className="mb-2">When required by law or to respond to legal process.</li>
                <li className="mb-2">To protect our rights, privacy, safety, or property.</li>
                <li>In connection with a business transaction, such as a merger, acquisition, or sale of assets.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Data Security</h3>
              
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Your Choices</h3>
              
              <p className="text-gray-600 mb-4">You have certain rights regarding your personal information:</p>
              
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li className="mb-2">Access and update your account information through your account settings.</li>
                <li className="mb-2">Opt-out of marketing communications by following the unsubscribe instructions in our emails.</li>
                <li className="mb-2">Request deletion of your personal information, subject to certain exceptions.</li>
                <li>Disable cookies through your browser settings, although this may affect your experience on our website.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Children's Privacy</h3>
              
              <p className="text-gray-600 mb-6">
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Changes to This Privacy Policy</h3>
              
              <p className="text-gray-600 mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h3>
              
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              
              <p className="text-gray-600">
                Spectacle & Lens<br />
                123 Main Street, Suite 101<br />
                Metropolis, NY 10001<br />
                Email: privacy@spectaclelens.com<br />
                Phone: (212) 555-1234
              </p>
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

export default PrivacyPolicy;