import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cloud, Home, Info, Menu, X, Globe, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Cloud className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">AirWeather</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </div>
            </Link>
            
            <Link 
              to="/morocco" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/morocco') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>Moroccan Airports</span>
              </div>
            </Link>
            
            <Link 
              to="/international" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/international') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>International Airports</span>
              </div>
            </Link>
            
            <Link 
              to="/search" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/search') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center gap-1">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </div>
            </Link>
            
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/about') 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                <span>About</span>
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </div>
              </Link>
              
              <Link 
                to="/morocco" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/morocco') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span>Moroccan Airports</span>
                </div>
              </Link>
              
              <Link 
                to="/international" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/international') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span>International Airports</span>
                </div>
              </Link>
              
              <Link 
                to="/search" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/search') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </div>
              </Link>
              
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/about') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  <span>About</span>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}