import React from 'react';
import { Cloud, Volume2, AlertCircle, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface MetarDisplayProps {
  metar: string;
  explanation: string;
  onSpeak: () => void;
  onStop: () => void;
  isLoading: boolean;
  isSpeaking: boolean;
  lastUpdate: string;
}

export function MetarDisplay({ 
  metar, 
  explanation, 
  onSpeak, 
  onStop, 
  isLoading, 
  isSpeaking,
  lastUpdate 
}: MetarDisplayProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Cloud className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">METAR Report</h2>
        </div>
        <div className="flex gap-2">
          {isSpeaking ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStop}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <VolumeX className="h-5 w-5" />
              Stop Audio
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSpeak}
              disabled={isLoading || !metar}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Volume2 className="h-5 w-5" />
              Listen to Report
            </motion.button>
          )}
        </div>
      </div>
      
      <div className="space-y-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 p-4 rounded-md"
        >
          <h3 className="font-semibold text-gray-700 mb-2">Raw METAR</h3>
          <div className="font-mono text-sm bg-white p-3 rounded border border-gray-200">
            {isLoading ? 'Loading METAR data...' : metar}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 p-4 rounded-md"
        >
          <h3 className="font-semibold text-gray-700 mb-2">Explanation</h3>
          <p className="text-gray-600 leading-relaxed">
            {isLoading ? 'Generating explanation...' : explanation}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-start gap-3 p-4 bg-blue-50 rounded-md"
        >
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-700">
            This report is updated every 30 minutes or when significant changes occur.
            Last update: {lastUpdate}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}