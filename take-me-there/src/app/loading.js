import { Plane } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <Plane className="w-16 h-16 text-rose-500 mx-auto animate-bounce" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-ping"></div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">Take Me There</h2>
        <p className="text-gray-600">Discovering amazing destinations...</p>
        <div className="flex justify-center mt-4">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce delay-0"></div>
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce delay-75"></div>
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
}