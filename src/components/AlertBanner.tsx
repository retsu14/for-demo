import React, { useState } from "react";
import { AlertTriangleIcon, XIcon } from "lucide-react";
export function AlertBanner() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-6">
      <div className="flex items-start">
        <AlertTriangleIcon className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
        <div className="flex-grow">
          <h3 className="text-red-800 font-medium">
            URGENT: Typhoon Opong Warning
          </h3>
          <p className="text-sm text-red-700 mt-1">
            Typhoon Opong has intensified to a Category 4 storm and is expected
            to make landfall in Eastern coastal regions within 24-36 hours.
            Residents in affected areas should follow evacuation orders and
            safety protocols.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          <XIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
