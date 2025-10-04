'use client'

import { useState } from 'react'
import { Heart, Bookmark, MapPin, Star, Users, Calendar } from 'lucide-react'
import Image from 'next/image'

export default function DestinationCard({ 
  destination, 
  isLiked = false, 
  isSaved = false, 
  onLike, 
  onSave 
}) {
  const [likeCount, setLikeCount] = useState(destination.likes || 0)

  const handleLike = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (onLike) {
      onLike(destination.id)
      setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
    }
  }

  const handleSave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (onSave) {
      onSave(destination.id)
    }
  }

  return (
    <div className="group cursor-pointer">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
        {/* Image Container - Fixed height for consistency */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={destination.image}
            alt={destination.title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Action buttons */}
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
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {destination.badge}
              </span>
            </div>
          )}
        </div>

        {/* Card Content - Flexible height */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-lg line-clamp-2 mb-2 group-hover:text-orange-600 transition-colors">
              {destination.title}
            </h3>
            <div className="flex items-center space-x-1 text-gray-500 text-sm mb-3">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{destination.location}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
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

          {/* Travel Info */}
          {destination.bestTime && (
            <div className="pt-3 border-t border-gray-100">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Best Time</span>
                  <span className="font-medium text-gray-700">{destination.bestTime}</span>
                </div>
                {destination.highlights && destination.highlights.length > 0 && (
                  <div className="space-y-1">
                    <span className="text-gray-500 text-xs">Highlights</span>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 2).map((highlight, index) => (
                        <span key={index} className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 2 && (
                        <span className="text-gray-400 text-xs">+{destination.highlights.length - 2} more</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}