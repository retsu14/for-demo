import React, { useState } from 'react';
import { LayersIcon } from 'lucide-react';
export function WeatherMap() {
  const [mapType, setMapType] = useState('temperature');
  const mapTypes = [{
    id: 'temperature',
    label: 'Temperature'
  }, {
    id: 'precipitation',
    label: 'Precipitation'
  }, {
    id: 'wind',
    label: 'Wind'
  }, {
    id: 'clouds',
    label: 'Clouds'
  }];
  return <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium text-gray-700">Weather Map</h3>
        <div className="flex items-center">
          <LayersIcon className="h-5 w-5 text-gray-500 mr-2" />
          <select value={mapType} onChange={e => setMapType(e.target.value)} className="text-sm border-none bg-transparent text-gray-600 focus:outline-none focus:ring-0">
            {mapTypes.map(type => <option key={type.id} value={type.id}>
                {type.label}
              </option>)}
          </select>
        </div>
      </div>
      <div className="relative w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
        {mapType === 'temperature' && <img src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Temperature map" className="w-full h-full object-cover" />}
        {mapType === 'precipitation' && <img src="https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Precipitation map" className="w-full h-full object-cover" />}
        {mapType === 'wind' && <img src="https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Wind map" className="w-full h-full object-cover" />}
        {mapType === 'clouds' && <img src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Cloud map" className="w-full h-full object-cover" />}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4">
          <div className="text-white font-medium">
            United States Weather Map
          </div>
        </div>
      </div>
    </div>;
}