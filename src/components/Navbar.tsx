import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-2xl font-serif font-bold text-gray-800">Verdant Farms</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-green-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-800 hover:text-green-600 transition-colors">About</a>
            <a href="#products" className="text-gray-800 hover:text-green-600 transition-colors">Products</a>
            <a href="#team" className="text-gray-800 hover:text-green-600 transition-colors">Team</a>
            <a href="#testimonials" className="text-gray-800 hover:text-green-600 transition-colors">Testimonials</a>
            <a href="#blog" className="text-gray-800 hover:text-green-600 transition-colors">Blog</a>
            <a href="#contact" className="text-gray-800 hover:text-green-600 transition-colors">Contact</a>
          </div>
          
          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 pb-4">
              <a 
                href="#home" 
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#products" 
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a 
                href="#team" 
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Team
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#blog" 
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <a 
                href="#contact" 
                className="text-gray-800 hover:text-green-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;