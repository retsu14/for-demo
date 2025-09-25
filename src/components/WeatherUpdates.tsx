import React from 'react';
import { FeaturedStorm } from './FeaturedStorm';
import { WeatherArticleList } from './WeatherArticleList';
import { AlertBanner } from './AlertBanner';
export function WeatherUpdates() {
  return <div className="space-y-8">
      <AlertBanner />
      <FeaturedStorm />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Latest Weather Updates
          </h2>
          <WeatherArticleList />
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Weather Alerts
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-3 py-2">
                <p className="font-medium text-gray-800">Typhoon Warning</p>
                <p className="text-sm text-gray-600">Eastern Coastal Regions</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-3 py-2">
                <p className="font-medium text-gray-800">Flood Advisory</p>
                <p className="text-sm text-gray-600">Central Valley Areas</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <p className="font-medium text-gray-800">Heavy Rainfall</p>
                <p className="text-sm text-gray-600">Northwestern Mountains</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Storm Tracking
            </h3>
            <div className="aspect-square relative bg-gray-100 rounded-lg mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1611928482473-7b27d24eab80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Storm tracking map" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-medium text-gray-800">Current Active Storms</h4>
            <ul className="mt-2 space-y-2">
              <li className="flex justify-between text-sm">
                <span>Typhoon Malakas</span>
                <span className="font-medium text-red-500">Category 4</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Tropical Storm Nuri</span>
                <span className="font-medium text-amber-500">Category 1</span>
              </li>
              <li className="flex justify-between text-sm">
                <span>Depression 08W</span>
                <span className="font-medium text-blue-500">Developing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
}