import React from 'react';
import { GithubIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-white shadow-inner mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} WeatherCast. All rights
              reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Weather data provided for demonstration purposes only.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <GithubIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
}