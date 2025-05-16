import React from 'react';
import { getInternationalAirports } from '../data/airports';
import { AirportCard } from '../components/AirportCard';
import { motion } from 'framer-motion';

export function InternationalAirportsPage() {
  const airports = getInternationalAirports();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">International Airports</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse weather and METAR reports for major international airports around the world.
            Select an airport to view detailed weather information.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {airports.map((airport, index) => (
            <AirportCard key={airport.id} airport={airport} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}