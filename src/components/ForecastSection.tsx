import React from 'react';
import { CloudIcon, CloudSunIcon, SunIcon, CloudRainIcon, CloudLightningIcon } from 'lucide-react';
export function ForecastSection() {
  const forecasts = [{
    day: 'Today',
    icon: <CloudSunIcon className="h-8 w-8" />,
    high: '72°',
    low: '58°',
    precipitation: '15%'
  }, {
    day: 'Wed',
    icon: <SunIcon className="h-8 w-8" />,
    high: '75°',
    low: '60°',
    precipitation: '0%'
  }, {
    day: 'Thu',
    icon: <CloudIcon className="h-8 w-8" />,
    high: '71°',
    low: '59°',
    precipitation: '10%'
  }, {
    day: 'Fri',
    icon: <CloudRainIcon className="h-8 w-8" />,
    high: '68°',
    low: '57°',
    precipitation: '60%'
  }, {
    day: 'Sat',
    icon: <CloudLightningIcon className="h-8 w-8" />,
    high: '65°',
    low: '54°',
    precipitation: '75%'
  }, {
    day: 'Sun',
    icon: <CloudRainIcon className="h-8 w-8" />,
    high: '67°',
    low: '55°',
    precipitation: '45%'
  }, {
    day: 'Mon',
    icon: <CloudSunIcon className="h-8 w-8" />,
    high: '70°',
    low: '58°',
    precipitation: '20%'
  }];
  return <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-medium text-gray-700 mb-4">7-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
        {forecasts.map((forecast, index) => <div key={index} className={`flex flex-col items-center p-3 rounded-lg ${index === 0 ? 'bg-sky-50 border border-sky-100' : ''}`}>
            <div className="text-sm font-medium mb-2">{forecast.day}</div>
            <div className={`${forecast.day === 'Today' ? 'text-sky-500' : forecast.icon.type === SunIcon ? 'text-yellow-500' : forecast.icon.type === CloudRainIcon || forecast.icon.type === CloudLightningIcon ? 'text-indigo-500' : 'text-gray-500'}`}>
              {forecast.icon}
            </div>
            <div className="flex items-center justify-between w-full mt-2">
              <span className="font-medium text-gray-800">{forecast.high}</span>
              <span className="text-sm text-gray-500">{forecast.low}</span>
            </div>
            <div className="text-xs text-blue-500 mt-1">
              {forecast.precipitation}
            </div>
          </div>)}
      </div>
    </div>;
}