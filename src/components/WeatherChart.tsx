import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { WeatherData } from '../types';
import { motion } from 'framer-motion';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface WeatherChartProps {
  weatherData: WeatherData | null;
  isLoading: boolean;
}

export function WeatherChart({ weatherData, isLoading }: WeatherChartProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 h-80 flex items-center justify-center">
        <p className="text-gray-500">Loading weather data...</p>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 h-80 flex items-center justify-center">
        <p className="text-gray-500">No weather data available</p>
      </div>
    );
  }

  // Format time labels (take only next 24 hours)
  const timeLabels = weatherData.hourly.time.slice(0, 24).map(time => {
    const date = new Date(time);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });

  // Temperature data
  const temperatureData = weatherData.hourly.temperature_2m.slice(0, 24);
  
  // Wind speed data
  const windSpeedData = weatherData.hourly.wind_speed_10m.slice(0, 24);
  
  // Humidity data
  const humidityData = weatherData.hourly.relative_humidity_2m.slice(0, 24);

  const options: ChartOptions<'line'> = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: '24-Hour Weather Forecast',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: 'Wind Speed (km/h)',
        },
      },
      y2: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: 'Humidity (%)',
        },
      },
    },
  };

  const data = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Temperature',
        data: temperatureData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Wind Speed',
        data: windSpeedData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Humidity',
        data: humidityData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        yAxisID: 'y2',
      },
    ],
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <Line options={options} data={data} />
    </motion.div>
  );
}