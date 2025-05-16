import React from 'react';
import { Github, Linkedin, Mail, User, Code, Server } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4">About AirWeather</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn more about the AirWeather platform and its developer.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Project</h2>
            <p className="text-gray-600 mb-4">
              AirWeather is a comprehensive platform designed to provide real-time weather data and METAR reports for airports worldwide, with a special focus on Moroccan airports. The platform aims to serve pilots, aviation enthusiasts, travelers, and anyone interested in airport weather conditions.
            </p>
            <p className="text-gray-600 mb-4">
              The application fetches weather data from the Open-Meteo API and generates METAR reports based on this data. Users can view detailed weather information, including temperature, wind speed, humidity, and more, presented in an easy-to-understand format with interactive charts.
            </p>
            <p className="text-gray-600 mb-4">
              Key features of AirWeather include:
            </p>
            <ul className="list-disc pl-5 text-gray-600 mb-4">
              <li>Real-time weather data for airports worldwide</li>
              <li>METAR reports with detailed explanations</li>
              <li>Text-to-speech functionality for METAR reports</li>
              <li>Interactive weather charts showing 24-hour forecasts</li>
              <li>Comprehensive database of Moroccan and international airports</li>
              <li>Mobile-responsive design for access on any device</li>
            </ul>
            <p className="text-gray-600">
              The platform is continuously updated to ensure accuracy and reliability of the weather data provided.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center mb-6">
              <User className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Developer</h2>
            </div>
            <div className="text-center mb-6">
              <img 
                src="src/images/personal_image.jpg"
                alt="Ilyass Basbassi" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">Ilyass Basbassi</h3>
              <p className="text-gray-600 mb-4"> digital infrastructure specialist</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://github.com/ilyassbasbassi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/ilyassbasbassi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:ilyass.basbassi@example.com" 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Ilyass Basbassi is a passionate digital infrastructure specialist with expertise in web development and a special interest in aviation. With a background in computer science and years of experience in building web applications, Ilyass created AirWeather to combine his technical skills with his love for aviation and weather forecasting.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-800">Technologies Used</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                React.js for the user interface
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                TypeScript for type safety
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                Tailwind CSS for styling
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                Chart.js for interactive data visualization
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                Framer Motion for animations
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                React Router for navigation
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                Axios for API requests
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                Lucide React for icons
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-800">Data Sources</h2>
            </div>
            <p className="text-gray-600 mb-4">
              AirWeather uses the following data sources to provide accurate and up-to-date information:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                <a 
                  href="https://open-meteo.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Open-Meteo API
                </a> - For weather forecast data
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                Custom airport database - For airport information
              </li>
              <li className="flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                Web Speech API - For text-to-speech functionality
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              The weather data is updated every 30 minutes to ensure that users have access to the most current information available.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}