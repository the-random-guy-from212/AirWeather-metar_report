export interface WeatherData {
  current: {
    time: string;
    temperature_2m: number;
    wind_speed_10m: number;
  };
  hourly: {
    time: string[];
    wind_speed_10m: number[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
  };
}

export interface Airport {
  id: string;
  name: string;
  icao: string;
  iata: string;
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface MetarReport {
  raw: string;
  explanation: string;
  timestamp: string;
}