import axios from 'axios';
import { WeatherData } from '../types';

export const fetchWeatherData = async (latitude: number, longitude: number): Promise<WeatherData> => {
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
};

// Mock METAR data generation based on weather data
export const generateMetarReport = (icao: string, weatherData: WeatherData): string => {
  const current = weatherData.current;
  const date = new Date(current.time);
  
  // Format date as METAR date format (day, hour, minute)
  const day = date.getUTCDate().toString().padStart(2, '0');
  const hour = date.getUTCHours().toString().padStart(2, '0');
  const minute = date.getUTCMinutes().toString().padStart(2, '0');
  
  // Get wind direction (mock value between 0-360)
  const windDirection = Math.floor(Math.random() * 360).toString().padStart(3, '0');
  
  // Convert wind speed from km/h to knots (approximate)
  const windSpeedKnots = Math.round(current.wind_speed_10m * 0.539957);
  
  // Get visibility (mock value)
  const visibility = Math.floor(Math.random() * 5 + 5); // 5-10 km
  
  // Get cloud coverage (mock value)
  const cloudCoverage = ['FEW020', 'SCT030', 'BKN040', 'OVC050'][Math.floor(Math.random() * 4)];
  
  // Get temperature in Celsius (rounded)
  const temperature = Math.round(current.temperature_2m);
  
  // Get dew point (mock value based on temperature)
  const dewPoint = Math.round(temperature - Math.random() * 5);
  
  // Get QNH (atmospheric pressure at sea level) (mock value)
  const qnh = Math.floor(1013 + (Math.random() * 30 - 15));
  
  // Construct METAR string
  return `${icao} ${day}${hour}${minute}Z ${windDirection}${windSpeedKnots.toString().padStart(2, '0')}KT ${visibility.toString().padStart(4, '0')}M ${cloudCoverage} ${temperature.toString().padStart(2, '0')}/${dewPoint.toString().padStart(2, '0')} Q${qnh}`;
};

export const explainMetarReport = (metar: string): string => {
  const parts = metar.split(' ');
  
  if (parts.length < 7) {
    return 'Invalid METAR format';
  }
  
  const icao = parts[0];
  const timeStamp = parts[1];
  const wind = parts[2];
  const visibility = parts[3];
  const clouds = parts[4];
  const temperature = parts[5];
  const pressure = parts[6];
  
  // Extract day, hour, minute from timestamp
  const day = timeStamp.substring(0, 2);
  const hour = timeStamp.substring(2, 4);
  const minute = timeStamp.substring(4, 6);
  
  // Extract wind direction and speed
  const windDirection = wind.substring(0, 3);
  const windSpeed = wind.substring(3, 5);
  const windUnit = wind.substring(5);
  
  // Extract temperature and dew point
  const [temp, dewPoint] = temperature.split('/');
  
  // Extract QNH
  const qnh = pressure.substring(1);
  
  return `This is a METAR report for ${icao} airport, issued on day ${day} at ${hour}:${minute} UTC.
  
Wind conditions: Wind is coming from ${windDirection} degrees at ${windSpeed} ${windUnit} (knots).
Visibility: ${visibility.replace('M', ' meters')}.
Cloud conditions: ${explainClouds(clouds)}.
Temperature: ${temp}°C, with a dew point of ${dewPoint}°C.
Atmospheric pressure (QNH): ${qnh} hectopascals (hPa).

Overall, this indicates ${getWeatherSummary(clouds, windSpeed, visibility)}.`;
};

const explainClouds = (cloudCode: string): string => {
  const coverage = cloudCode.substring(0, 3);
  const height = cloudCode.substring(3);
  
  const coverageExplanations: Record<string, string> = {
    'FEW': 'Few clouds',
    'SCT': 'Scattered clouds',
    'BKN': 'Broken clouds',
    'OVC': 'Overcast'
  };
  
  const coverageText = coverageExplanations[coverage] || coverage;
  const heightInFeet = parseInt(height) * 100;
  
  return `${coverageText} at ${heightInFeet} feet above ground level`;
};

const getWeatherSummary = (clouds: string, windSpeed: string, visibility: string): string => {
  const windSpeedNum = parseInt(windSpeed);
  const visibilityNum = parseInt(visibility);
  
  if (clouds.startsWith('OVC') && visibilityNum < 5000) {
    return 'poor flying conditions with low visibility and overcast skies';
  } else if (windSpeedNum > 20) {
    return 'challenging conditions due to strong winds';
  } else if (clouds.startsWith('FEW') && visibilityNum > 8000) {
    return 'good flying conditions with good visibility and minimal cloud coverage';
  } else {
    return 'moderate flying conditions';
  }
};