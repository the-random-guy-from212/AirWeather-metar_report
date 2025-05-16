import React from 'react';
import { Cloud, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Cloud className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-xl font-bold">AirWeather</span>
            </div>
            <p className="text-gray-300 text-sm">
              Providing real-time weather and METAR reports for airports worldwide.
              Stay updated with the latest aviation weather conditions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/morocco" className="hover:text-blue-400 transition-colors">Moroccan Airports</a></li>
              <li><a href="/international" className="hover:text-blue-400 transition-colors">International Airports</a></li>
              <li><a href="/search" className="hover:text-blue-400 transition-colors">Search</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Developer</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a href="basbassi.ilyass@protonmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                basbassi.ilyass@protonmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Github className="h-5 w-5 text-blue-400 mr-2" />
                <a href="https://github.com/the-random-guy-from212" className="text-gray-300 hover:text-blue-400 transition-colors">
                  github.com/ilyassbasbassi
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-blue-400 mr-2" />
                <a href="https://linkedin.com/in/ilyassbasbassi" className="text-gray-300 hover:text-blue-400 transition-colors">
                  linkedin.com/in/ilyassbasbassi
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} AirWeather. Developed by Ilyass Basbassi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}