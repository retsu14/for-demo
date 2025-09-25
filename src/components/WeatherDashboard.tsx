import React, { useEffect, useState } from 'react';
import { CurrentWeather } from './CurrentWeather';
import { ForecastSection } from './ForecastSection';
import { WeatherMap } from './WeatherMap';
import { WeatherHighlights } from './WeatherHighlights';
import { RefreshCwIcon } from 'lucide-react';
export function WeatherDashboard() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const handleRefresh = () => {
    setLoading(true);
    // Simulate data fetching
    setTimeout(() => {
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  };
  // Auto refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      handleRefresh();
    }, 300000);
    return () => clearInterval(interval);
  }, []);
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Weather Dashboard
        </h2>
        <div className="flex items-center text-sm text-gray-500">
          <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
          <button onClick={handleRefresh} className="ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors" disabled={loading}>
            <RefreshCwIcon className={`h-5 w-5 text-sky-500 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <CurrentWeather />
        </div>
        <div className="lg:col-span-2">
          <WeatherHighlights />
        </div>
      </div>
      <ForecastSection />
      <WeatherMap />
    </div>;
}