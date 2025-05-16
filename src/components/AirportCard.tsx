import React from 'react';
import { Plane, MapPin, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Airport } from '../types';

interface AirportCardProps {
  airport: Airport;
  index: number;
}

export function AirportCard({ airport, index }: AirportCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Plane className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-bold text-blue-600">{airport.icao}</span>
            {airport.iata && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">{airport.iata}</span>
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{airport.country}</span>
          </div>
        </div>
        
        <h3 className="font-bold text-gray-800 mb-1">{airport.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{airport.city}, {airport.country}</p>
        
        <div className="flex items-center text-xs text-gray-500 mb-4">
          <Navigation className="h-3 w-3 mr-1" />
          <span>{airport.latitude.toFixed(4)}, {airport.longitude.toFixed(4)}</span>
        </div>
        
        <Link 
          to={`/airport/${airport.icao}`}
          className="block w-full text-center py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          View Weather & METAR
        </Link>
      </div>
    </motion.div>
  );
}