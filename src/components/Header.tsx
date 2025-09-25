import React from 'react';
import { CloudSunIcon, SearchIcon, MapPinIcon, MenuIcon } from 'lucide-react';
export function Header() {
  return <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <CloudSunIcon className="h-8 w-8 text-sky-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">WeatherWatch</h1>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-sky-600 font-medium">
            Home
          </a>
          <a href="#" className="hover:text-sky-600">
            Typhoon Tracker
          </a>
          <a href="#" className="hover:text-sky-600">
            Forecasts
          </a>
          <a href="#" className="hover:text-sky-600">
            Weather Alerts
          </a>
          <a href="#" className="hover:text-sky-600">
            Climate News
          </a>
        </div>
        <div className="relative w-full md:w-64">
          <input type="text" placeholder="Search articles..." className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent" />
          <SearchIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="md:hidden mt-4 flex justify-center w-full">
          <button className="flex items-center px-3 py-2 border rounded text-sky-500 border-sky-500">
            <MenuIcon className="h-5 w-5" />
            <span className="ml-1">Menu</span>
          </button>
        </div>
      </div>
    </header>;
}