import React from 'react';
import { SunriseIcon, SunsetIcon, UmbrellaIcon, GaugeIcon, EyeIcon, CloudIcon } from 'lucide-react';
export function WeatherHighlights() {
  return <div className="bg-white rounded-xl shadow-md p-6 h-full">
      <h3 className="text-xl font-medium text-gray-700 mb-4">
        Today's Highlights
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <HighlightCard icon={<UmbrellaIcon className="h-6 w-6 text-blue-500" />} title="UV Index" value="5" description="Moderate" />
        <HighlightCard icon={<SunriseIcon className="h-6 w-6 text-orange-500" />} title="Sunrise" value="6:23 AM" description="Sunset: 8:15 PM" />
        <HighlightCard icon={<GaugeIcon className="h-6 w-6 text-red-500" />} title="Pressure" value="1015 hPa" description="Normal" />
        <HighlightCard icon={<EyeIcon className="h-6 w-6 text-purple-500" />} title="Visibility" value="9.7 mi" description="Excellent" />
        <HighlightCard icon={<CloudIcon className="h-6 w-6 text-gray-500" />} title="Cloud Cover" value="25%" description="Partly cloudy" />
        <HighlightCard icon={<SunsetIcon className="h-6 w-6 text-amber-500" />} title="Day Length" value="13h 52m" description="Decreasing: -2m" />
      </div>
    </div>;
}
function HighlightCard({
  icon,
  title,
  value,
  description
}) {
  return <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-medium text-gray-500">{title}</h4>
        {icon}
      </div>
      <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
      <div className="text-xs text-gray-500">{description}</div>
    </div>;
}