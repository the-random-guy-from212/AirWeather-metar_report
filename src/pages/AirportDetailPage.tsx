import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Plane, ThermometerSun, Wind, Droplets, Clock, ArrowLeft, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAirportByIcao } from '../data/airports';
import { fetchWeatherData, generateMetarReport, explainMetarReport } from '../services/weatherService';
import { MetarDisplay } from '../components/MetarDisplay';
import { WeatherChart } from '../components/WeatherChart';
import { WeatherData } from '../types';

// Let's assume these UI components are not available through the path alias
// and we'll create simplified versions directly in this component instead
// or use regular HTML elements with appropriate classes

const REFRESH_INTERVAL = 30 * 60 * 1000; // 30 minutes

export function AirportDetailPage() {
  const { icao } = useParams<{ icao: string }>();
  const navigate = useNavigate();
  
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [metar, setMetar] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastUpdate, setLastUpdate] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);
  const [speechUtterance, setSpeechUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  
  const airport = icao ? getAirportByIcao(icao) : undefined;
  
  const fetchData = useCallback(async () => {
    if (!airport) {
      setIsLoading(false);
      return;
    }
    
    try {
      setIsLoading(true);
      setError(null);
      
      const data = await fetchWeatherData(airport.latitude, airport.longitude);
      setWeatherData(data);
      
      // Generate METAR report
      const metarReport = generateMetarReport(airport.icao, data);
      setMetar(metarReport);
      
      // Generate explanation
      const metarExplanation = explainMetarReport(metarReport);
      setExplanation(metarExplanation);
      
      // Set last update time
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch weather data. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [airport]);
  
  useEffect(() => {
    // Initialize speech synthesis
    if (typeof window !== 'undefined') {
      setSpeechSynthesis(window.speechSynthesis);
    }
    
    fetchData();
    
    // Refresh data periodically
    const intervalId = setInterval(fetchData, REFRESH_INTERVAL);
    
    return () => {
      clearInterval(intervalId);
      if (speechSynthesis) {
        speechSynthesis.cancel();
      }
    };
  }, [fetchData, speechSynthesis]);
  
  const handleManualRefresh = () => {
    fetchData();
  };

  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleSpeak = () => {
    if (!speechSynthesis || !explanation) return;
    
    const utterance = new SpeechSynthesisUtterance(explanation);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
    setSpeechUtterance(utterance);
  };
  
  const handleStopSpeaking = () => {
    if (speechSynthesis) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };
  
  if (!airport) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-gray-800">Airport Not Found</h1>
              <p className="text-gray-600">
                The airport with ICAO code "{icao}" could not be found.
              </p>
              <button 
                onClick={handleGoBack}
                className="mt-4 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md flex items-center justify-center transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center">
          <button 
            onClick={handleGoBack}
            className="mr-2 p-2 rounded-md hover:bg-gray-100 transition-colors flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Airport Weather</h1>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <Plane className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-800">{airport.name}</h2>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{airport.city}, {airport.country}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    ICAO: {airport.icao}
                  </span>
                  {airport.iata && (
                    <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
                      IATA: {airport.iata}
                    </span>
                  )}
                </div>
              </div>
              
              {isLoading ? (
                <div className="bg-blue-50 p-4 rounded-lg w-full md:w-64">
                  <div className="h-4 w-32 mb-4 bg-gray-200 animate-pulse rounded"></div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-16 w-full bg-gray-200 animate-pulse rounded"></div>
                    <div className="h-16 w-full bg-gray-200 animate-pulse rounded"></div>
                    <div className="h-16 w-full bg-gray-200 animate-pulse rounded"></div>
                  </div>
                </div>
              ) : error ? (
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700">{error}</p>
                  <button 
                    onClick={handleManualRefresh} 
                    className="mt-2 px-3 py-1 text-sm bg-white border border-gray-300 rounded-md flex items-center hover:bg-gray-50 transition-colors"
                  >
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Retry
                  </button>
                </div>
              ) : weatherData && weatherData.current ? (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 inline mr-1 text-blue-600" />
                      Last updated: {new Date(weatherData.current.time).toLocaleString()}
                    </span>
                    <button 
                      onClick={handleManualRefresh} 
                      className="h-8 w-8 p-0 rounded-full hover:bg-blue-100 transition-colors flex items-center justify-center"
                      aria-label="Refresh data"
                    >
                      <RefreshCw className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <ThermometerSun className="h-6 w-6 mx-auto text-orange-500 mb-1" />
                      <div className="text-xl font-bold">{weatherData.current.temperature_2m}°C</div>
                      <div className="text-xs text-gray-600">Temperature</div>
                    </div>
                    <div className="text-center">
                      <Wind className="h-6 w-6 mx-auto text-blue-500 mb-1" />
                      <div className="text-xl font-bold">{weatherData.current.wind_speed_10m} km/h</div>
                      <div className="text-xs text-gray-600">Wind Speed</div>
                    </div>
                    <div className="text-center">
                      <Droplets className="h-6 w-6 mx-auto text-blue-500 mb-1" />
                      <div className="text-xl font-bold">
                        {weatherData.hourly.relative_humidity_2m[0]}%
                      </div>
                      <div className="text-xs text-gray-600">Humidity</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <MetarDisplay 
              metar={metar}
              explanation={explanation}
              onSpeak={handleSpeak}
              onStop={handleStopSpeaking}
              isLoading={isLoading}
              isSpeaking={isSpeaking}
              lastUpdate={lastUpdate}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <WeatherChart 
              weatherData={weatherData}
              isLoading={isLoading}
            />
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Airport Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
                <p className="text-gray-600 mb-4">
                  {airport.city}, {airport.country}
                </p>
                <h3 className="font-semibold text-gray-700 mb-2">Coordinates</h3>
                <p className="text-gray-600">
                  Latitude: {airport.latitude.toFixed(4)}<br />
                  Longitude: {airport.longitude.toFixed(4)}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Codes</h3>
                <p className="text-gray-600 mb-4">
                  ICAO: {airport.icao}<br />
                  IATA: {airport.iata || 'N/A'}
                </p>
                <h3 className="font-semibold text-gray-700 mb-2">Weather Data Source</h3>
                <p className="text-gray-600">
                  Open-Meteo API<br />
                  Updates every {REFRESH_INTERVAL / (60 * 1000)} minutes
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}