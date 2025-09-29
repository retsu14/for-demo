import {
  ArrowRightIcon,
  WindIcon,
  DropletIcon,
  AlertCircleIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
export function FeaturedStorm() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          alt="Typhoon Malakas satellite image"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <div className="flex items-center">
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded mr-2">
              BREAKING
            </span>
            <h2 className="text-white text-2xl font-bold">
              Typhoon Malakas Intensifies to Category 4
            </h2>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Block 1: Description */}
        <div className="mb-6">
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>

        {/* Block 2: Image with adjacent text */}
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <img
              src="https://od2-image-api.abs-cbn.com/prod/editorImage/1758685377905G1lNB4eagAAnGT9.jfif"
              alt="Typhoon Malakas radar"
              className="w-full h-56 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Current Situation
              </h3>
              <p className="text-gray-700 mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>

        {/* Block 3: Highlights */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-sky-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <WindIcon className="h-5 w-5 text-sky-500 mr-2" />
              <h4 className="font-medium text-gray-800">Wind Speed</h4>
            </div>
            <p className="text-2xl font-bold text-sky-700">130 mph</p>
            <p className="text-xs text-sky-600 mt-1">Gusts up to 155 mph</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <DropletIcon className="h-5 w-5 text-blue-500 mr-2" />
              <h4 className="font-medium text-gray-800">Rainfall</h4>
            </div>
            <p className="text-2xl font-bold text-blue-700">15–20 in</p>
            <p className="text-xs text-blue-600 mt-1">
              Severe flooding expected
            </p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <AlertCircleIcon className="h-5 w-5 text-amber-500 mr-2" />
              <h4 className="font-medium text-gray-800">Storm Surge</h4>
            </div>
            <p className="text-2xl font-bold text-amber-700">10–15 ft</p>
            <p className="text-xs text-amber-600 mt-1">
              Coastal evacuation ordered
            </p>
          </div>
        </div> */}

        <Link
          to="/article/typhoon-malakas-path"
          className="inline-flex items-center text-sky-600 font-medium hover:text-sky-800"
        >
          Read full storm report
          <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
