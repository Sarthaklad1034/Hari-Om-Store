import React, { useState, useEffect } from 'react';
import { Menu, X, Package, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' }
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-green-800 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 93253 54647</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>Ganesh Mandir Road, Velas Agar</span>
            </div>
          </div>
          <div className="text-yellow-300">
            Open: 8:00 AM - 9:00 PM | Fresh groceries Available
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-amber-50 to-green-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex items-center space-x-4">
  <div className="relative">
    {/* Logo container with no border and increased size */}
    <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg">
      <img 
        src="/images/logo.gif" 
        alt="Hari Om Store Logo"
        className="w-full h-full object-cover"
        onError={(e) => {
          // Fallback to text logo if image doesn't load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center" style={{display: 'none'}}>
        <span className="text-white font-bold text-xl">हरि</span>
      </div>
    </div>

    {/* Optional status dot */}
    <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
  </div>

  {/* Store name and slogan */}
  <div>
    <h1 className="text-2xl md:text-3xl font-bold text-green-800 font-serif">
      Hari Om Store
    </h1>
    <p className="text-xs text-green-600 font-medium">
      गावचं दुकान, शहराची सुविधा
    </p>
  </div>
</div>


            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-auto">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Inventory/Products Button & Mobile Menu */}
            <div className="flex items-center space-x-4">

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-green-100 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="border-t border-green-100 pt-4 mt-4">
                <div className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-600">
                  <Phone size={16} />
                  <span>+91 93253 54647</span>
                </div>
                <div className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>Ganesh Mandir Road, Velas Agar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;