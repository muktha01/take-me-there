import { useState } from 'react';
import { Heart, Bookmark, MapPin, Star, Eye, Clock } from 'lucide-react';
import Image from 'next/image';

export default function DestinationCard({ destination }) {
  const [isLiked, setIsLiked] = useState(destination.isLiked);
  const [isSaved, setIsSaved] = useState(destination.isSaved);

  const heightClasses = {
    short: 'h-64',
    medium: 'h-80', 
    tall: 'h-96'
  };

  return (
    <div className="masonry-item">
      <div className={`relative group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden card-hover ${heightClasses[destination.height]}`}>
        {/* Image */}
        <div className="relative h-full overflow-hidden">
       <Image
  src={destination.image}
  alt={destination.title}
  width={800}   // pick an appropriate width
  height={600}  // pick an appropriate height
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Top Actions */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
              {destination.category}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                  isLiked 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white'
                }`}
              >
                <Heart className="w-4 h-4" fill={isLiked ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                  isSaved 
                    ? 'bg-pink-500 text-white' 
                    : 'bg-white/90 text-gray-700 hover:bg-pink-500 hover:text-white'
                }`}
              >
                <Bookmark className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center text-white/80 text-sm mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{destination.location}, {destination.country}</span>
            </div>
            <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
              {destination.title}
            </h3>
            <p className="text-white/80 text-sm mb-3 line-clamp-2">
              {destination.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-white/80 text-xs">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  <span>{destination.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{(destination.views / 1000).toFixed(1)}k</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Bookmark className="w-4 h-4" />
                  <span>{destination.saves}</span>
                </div>
              </div>
              <span className="text-white font-bold">{destination.price}</span>
            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-pink-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{destination.duration}</span>
            </div>
            <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}