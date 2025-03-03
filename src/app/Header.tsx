'use client';

// components/shared/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if the link is active
  const isLinkActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mr-4 text-gray-700 focus:outline-none lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Spectacle & Lens
          </Link>
        </div>
        
        <div className="hidden lg:flex space-x-6">
          <Link 
            href="/" 
            className={`${isLinkActive('/') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
          >
            Home
          </Link>
          <Link 
            href="/spectacles" 
            className={`${isLinkActive('/spectacles') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
          >
            Spectacles
          </Link>
          <Link 
            href="/contact-lenses" 
            className={`${isLinkActive('/contact-lenses') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
          >
            Contact Lenses
          </Link>
          <Link 
            href="/virtual-try-on" 
            className={`${isLinkActive('/virtual-try-on') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
          >
            Virtual Try-On
          </Link>
          <Link 
            href="/about-us" 
            className={`${isLinkActive('/about-us') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
          >
            About Us
          </Link>
          <Link 
            href="/contact-us" 
            className={`${isLinkActive('/contact-us') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
          >
            Contact
          </Link>
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
          <Link href="/account" className="text-gray-700 hover:text-blue-600">
            <User size={24} />
            <span className="sr-only">Account</span>
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-blue-600">
            <ShoppingCart size={24} />
            <span className="sr-only">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="bg-white h-full w-64 shadow-lg p-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-blue-600">Menu</h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`${isLinkActive('/') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-2 px-4`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/spectacles" 
                className={`${isLinkActive('/spectacles') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-2 px-4`}
                onClick={() => setIsMenuOpen(false)}
              >
                Spectacles
              </Link>
              <Link 
                href="/contact-lenses" 
                className={`${isLinkActive('/contact-lenses') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-2 px-4`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Lenses
              </Link>
              <Link 
                href="/virtual-try-on" 
                className={`${isLinkActive('/virtual-try-on') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-2 px-4`}
                onClick={() => setIsMenuOpen(false)}
              >
                Virtual Try-On
              </Link>
              <Link 
                href="/about-us" 
                className={`${isLinkActive('/about-us') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-2 px-4`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact-us" 
                className={`${isLinkActive('/contact-us') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-2 px-4`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/privacy" 
                className={`${isLinkActive('/privacy') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-2 px-4`}
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className={`${isLinkActive('/terms') ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'} py-2 px-4`}
                onClick={() => setIsMenuOpen(false)}
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;