import React from 'react';
import { Link } from 'react-router-dom';
export function WeatherArticle({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category
}) {
  return <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img src={image} alt={title} className="h-48 w-full md:w-48 object-cover" />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-2">
            <span className={`
              px-2 py-1 text-xs font-medium rounded mr-2
              ${category === 'Analysis' ? 'bg-purple-100 text-purple-800' : ''}
              ${category === 'Forecast' ? 'bg-blue-100 text-blue-800' : ''}
              ${category === 'Warning' ? 'bg-red-100 text-red-800' : ''}
              ${category === 'Update' ? 'bg-green-100 text-green-800' : ''}
            `}>
              {category}
            </span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">By {author}</p>
            </div>
          </div>
          <Link to={`/article/${id}`} className="mt-3 inline-block text-sky-600 hover:text-sky-800 font-medium">
            Continue reading →
          </Link>
        </div>
      </div>
    </div>;
}