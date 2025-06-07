import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-green-50 via-white to-blue-50 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
        {/* Main Footer Content */}
        <div className="text-center space-y-4">

          {/* Copyright & Developer Info */}
          <div className="space-y-2 text-sm text-gray-600">
            <p>© {currentYear} Hari Om Store. All rights reserved.</p>
            <p className="flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-current animate-pulse" />
              <span>by</span>
              <span className="text-green-600 font-semibold">Mr. Sarthak Sandip Lad</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;