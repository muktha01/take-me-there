"use client"
import Link from 'next/link';
import { Home, MapPin, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-rose-400 to-red-500 rounded-full mx-auto opacity-20"></div>
          <MapPin className="w-16 h-16 text-rose-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Destination Not Found</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Oops! It looks like this travel destination doesn't exist on our map. 
          Let's get you back to exploring amazing places around the world.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-red-500 text-white font-semibold rounded-full hover:from-rose-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="mt-6">
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>Lost? Try searching for your dream destination from our homepage.</p>
        </div>
      </div>
    </div>
  );
}