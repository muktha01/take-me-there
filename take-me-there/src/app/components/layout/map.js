"use client";

import { useEffect } from "react";

export default function MapComponent() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "/maps/mapdata.js";
    script1.async = false;

    const script2 = document.createElement("script");
    script2.src = "/maps/countrymap.js";
    script2.async = false;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      // Clean up scripts when component unmounts
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Interactive India Map</h1>
      
      {/* Container with controlled dimensions */}
      <div className="w-full h-full max-w-5xl px-4">
        <div
          id="map"
          className="relative w-full  border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden"
          style={{
            // Ensure the map stays within bounds
        
          }}
        ></div>
      </div>
      
      {/* Optional: Add some description text */}
      <p className="mt-4 text-sm text-gray-600 text-center max-w-2xl">
        Click on any state to view detailed information. The map will redirect you to the respective state's page.
      </p>
    </div>
  );
}