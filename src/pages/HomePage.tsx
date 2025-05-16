import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Plane, Wind, ThermometerSun, Search, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Airplane flying through clouds" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="flex items-center mb-6">
                <Cloud className="h-10 w-10 text-blue-300 mr-3" />
                <h1 className="text-4xl md:text-5xl font-bold">AirWeather</h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Real-time Aviation Weather & METAR Reports
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get comprehensive weather data and METAR reports for airports worldwide. 
                Specialized in Moroccan airports with detailed forecasts for pilots and aviation enthusiasts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/morocco" 
                  className="px-6 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  Moroccan Airports
                </Link>
                <Link 
                  to="/search" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-500 transition-colors border border-blue-400 flex items-center justify-center"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search Airports
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Airplane dashboard" 
                  className="rounded-lg shadow-2xl"
                />
                <img 
                  src="https://media.istockphoto.com/id/468526566/photo/severe-weather-map-forecast.webp?a=1&b=1&s=612x612&w=0&k=20&c=Pq3iesi6I8B1o52-UHC8ASG1cdToN2nmzKwB035vYFQ=" 
                  alt="Weather radar" 
                  className="absolute -bottom-10 -left-10 w-64 rounded-lg shadow-2xl border-4 border-white"
                />
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-2">
                    <ThermometerSun className="h-6 w-6 text-orange-500" />
                    <span className="text-2xl font-bold">23°C</span>
                  </div>
                  <div className="text-sm text-gray-500">Current Temperature</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#f9fafb" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Featured Airports Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Airports</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore real-time weather conditions at these major airports in Morocco and around the world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAirports.map((airport, index) => (
              <motion.div
                key={airport.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={airport.image} 
                    alt={airport.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-bold">{airport.name}</span>
                      <div className="flex items-center gap-1">
                        <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">{airport.icao}</span>
                        {airport.iata && (
                          <span className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">{airport.iata}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm text-gray-600">{airport.city}, {airport.country}</span>
                    </div>
                    <div className="flex items-center">
                      <ThermometerSun className="h-4 w-4 text-orange-500 mr-1" />
                      <span className="text-sm font-medium">{airport.temperature}°C</span>
                    </div>
                  </div>
                  <Link 
                    to={`/airport/${airport.icao}`}
                    className="block w-full text-center py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Weather & METAR
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/morocco" 
              className="inline-flex items-center px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors mr-4"
            >
              View All Moroccan Airports
            </Link>
            <Link 
              to="/international" 
              className="inline-flex items-center px-6 py-3 bg-white border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              View International Airports
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform provides comprehensive weather information for pilots, aviation enthusiasts, and travelers.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Plane className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">METAR Reports</h3>
              <p className="text-gray-600 mb-4">
                Access detailed METAR reports for airports with explanations of weather conditions for pilots and aviation personnel.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-600">Detailed weather codes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-600">Plain language explanations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-600">Regular updates</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <ThermometerSun className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Weather Forecasts</h3>
              <p className="text-gray-600 mb-4">
                View detailed 24-hour forecasts with temperature, humidity, and wind speed data visualized in interactive charts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-600">Interactive charts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-600">Hourly predictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-600">Multiple weather parameters</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Volume2 className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Audio Reports</h3>
              <p className="text-gray-600 mb-4">
                Listen to METAR reports with our text-to-speech feature, making it easier to get information while on the go.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-600">Clear voice narration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-600">Hands-free operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-600">Accessibility support</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Pilots Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from aviation professionals who rely on our weather data for their flights.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Airplane wing over clouds" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Check Airport Weather?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Get started by searching for an airport or browsing our collection of Moroccan and international airports.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/morocco" 
              className="px-8 py-4 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Moroccan Airports
            </Link>
            <Link 
              to="/international" 
              className="px-8 py-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-500 transition-colors border border-blue-400"
            >
              International Airports
            </Link>
            <Link 
              to="/search" 
              className="px-8 py-4 bg-transparent text-white rounded-md font-medium hover:bg-blue-800/50 transition-colors border border-white"
            >
              Search Airports
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

// Missing imports
import { Volume2, MapPin } from 'lucide-react';

// Sample data for featured airports
const featuredAirports = [
  {
    id: '1',
    name: 'Mohammed V International Airport',
    icao: 'GMMN',
    iata: 'CMN',
    city: 'Casablanca',
    country: 'Morocco',
    temperature: 24,
    image: 'https://bit.ly/4iAccDx'
  },
  {
    id: '5',
    name: 'Tangier Ibn Battouta Airport',
    icao: 'GMTT',
    iata: 'TNG',
    city: 'Tangier',
    country: 'Morocco',
    temperature: 22,
    image: 'https://cdn.jetphotos.com/640/5/1148251_1687818816.jpg'
  },
  {
    id: '8',
    name: 'Heathrow Airport',
    icao: 'EGLL',
    iata: 'LHR',
    city: 'London',
    country: 'United Kingdom',
    temperature: 18,
    image: 'https://bit.ly/41xJtt9'
  }
];

// Sample testimonials
const testimonials = [
  {
    name: 'Ahmed Benali',
    role: 'Commercial Pilot, Royal Air Maroc',
    quote: 'AirWeather has become an essential tool in my pre-flight routine. The METAR reports are accurate and the explanations help me make quick decisions.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Sarah Johnson',
    role: 'Flight Instructor',
    quote: 'I recommend AirWeather to all my students. The clear visualizations and audio reports make learning about weather patterns much easier.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Aviation Enthusiast',
    quote: 'Even as a non-pilot, I find the weather data fascinating. The interface is intuitive and I love tracking conditions at different airports worldwide.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];