'use client'

import { useState } from 'react'
import { Heart, Bookmark, MapPin, Star, Users, Calendar } from 'lucide-react'

export default function DestinationCard({ destination }) {
  const [isLiked, setIsLiked] = useState(destination.isLiked || false)
  const [isSaved, setIsSaved] = useState(destination.isSaved || false)
  const [likeCount, setLikeCount] = useState(destination.likes || 0)

  const handleLike = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const handleSave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsSaved(!isSaved)
  }

  function getCardHeight(id) {
  const heights = ['h-64', 'h-80', 'h-96'];
  const index = parseInt(id, 10) % heights.length;
  return heights[index];
}


  return (
    <div className={`masonry-item group cursor-pointer`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        {/* Image Container */}
        <div className={`relative ${getCardHeight()} overflow-hidden`}>
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleLike}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                isLiked 
                  ? 'bg-red-500 text-white scale-110' 
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:scale-110'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleSave}
              className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                isSaved 
                  ? 'bg-blue-500 text-white scale-110' 
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:scale-110'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Badge */}
          {destination.badge && (
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {destination.badge}
              </span>
            </div>
          )}

          {/* Bottom overlay with title */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="font-bold text-lg mb-1 line-clamp-2">
              {destination.title}
            </h3>
            <div className="flex items-center space-x-1 text-sm">
              <MapPin className="w-3 h-3" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-sm line-clamp-2 mb-1 group-hover:text-pink-600 transition-colors">
                {destination.title}
              </h3>
              <div className="flex items-center space-x-1 text-gray-500 text-xs mb-2">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{destination.location}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Heart className="w-3 h-3" />
                <span>{likeCount.toLocaleString()}</span>
              </div>
              {destination.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span>{destination.rating}</span>
                </div>
              )}
              {destination.visitors && (
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{destination.visitors}</span>
                </div>
              )}
            </div>
            {destination.duration && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{destination.duration}</span>
              </div>
            )}
          </div>

          {/* Price */}
          {destination.price && (
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <span className="text-gray-500">Starting from</span>
                  <div className="font-bold text-pink-600">{destination.price}</div>
                </div>
                <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:from-pink-600 hover:to-red-600 transition-all hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}