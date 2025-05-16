import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plane, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { airports } from '../data/airports';
import { Airport } from '../types';

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Airport[]>([]);
  
  useEffect(() => {
    if (searchTerm.length < 2) {
      setSearchResults([]);
      return;
    }
    
    const filteredAirports = airports.filter(airport => 
      airport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.icao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.iata.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(filteredAirports);
  }, [searchTerm]);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Search Airports</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Search for airports by name, ICAO code, IATA code, city, or country to view weather and METAR reports.
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search airports..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        </motion.div>
        
        {searchTerm.length < 2 ? (
          <div className="text-center text-gray-500">
            Enter at least 2 characters to search
          </div>
        ) : searchResults.length === 0 ? (
          <div className="text-center text-gray-500">
            No airports found matching "{searchTerm}"
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {searchResults.map((airport, index) => (
                <motion.li 
                  key={airport.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    to={`/airport/${airport.icao}`}
                    className="block hover:bg-gray-50 transition-colors"
                  >
                    <div className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Plane className="h-5 w-5 text-blue-600 mr-3" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{airport.name}</p>
                            <div className="flex items-center mt-1">
                              <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded mr-2">
                                {airport.icao}
                              </span>
                              {airport.iata && (
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                                  {airport.iata}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{airport.city}, {airport.country}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}