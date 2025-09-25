import React from 'react';
import { CloudSunIcon, CloudRainIcon, ThermometerIcon, DropletIcon, WindIcon } from 'lucide-react';
export function CurrentWeather() {
  return <div className="bg-white rounded-xl shadow-md p-6 h-full">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-medium text-gray-700 mb-4">
          Current Weather
        </h3>
        <div className="flex items-center justify-center mb-4">
          <CloudSunIcon className="h-20 w-20 text-yellow-500" />
        </div>
        <div className="text-5xl font-bold text-gray-800 mb-2">72°F</div>
        <div className="text-lg text-gray-600 mb-4">Partly Cloudy</div>
        <div className="w-full border-t border-gray-200 my-4"></div>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex items-center">
            <ThermometerIcon className="h-5 w-5 text-orange-500 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Feels like</div>
              <div className="font-medium">75°F</div>
            </div>
          </div>
          <div className="flex items-center">
            <DropletIcon className="h-5 w-5 text-blue-500 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Humidity</div>
              <div className="font-medium">65%</div>
            </div>
          </div>
          <div className="flex items-center">
            <WindIcon className="h-5 w-5 text-sky-500 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Wind</div>
              <div className="font-medium">8 mph</div>
            </div>
          </div>
          <div className="flex items-center">
            <CloudRainIcon className="h-5 w-5 text-indigo-500 mr-2" />
            <div>
              <div className="text-sm text-gray-500">Precipitation</div>
              <div className="font-medium">15%</div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}