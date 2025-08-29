'use client'

import { useState, useEffect } from 'react'
import { Search, X, MapPin, Clock } from 'lucide-react'

export default function SearchOverlay({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [recentSearches] = useState([
    'Bali, Indonesia',
    'Tokyo, Japan', 
    'Paris, France',
    'Santorini, Greece'
  ])
  
  const [popularDestinations] = useState([
    { name: 'Maldives', searches: '2.3M' },
    { name: 'Switzerland', searches: '1.8M' },
    { name: 'Iceland', searches: '1.5M' },
    { name: 'New Zealand', searches: '1.2M' },
    { name: 'Norway', searches: '980K' },
    { name: 'Thailand', searches: '856K' }
  ])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="border-b border-gray-200 px-4 py-4">
          <div className="max-w-4xl mx-auto flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                autoFocus
              />
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Recent Searches */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-5 h-5 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900">Recent Searches</h3>
              </div>
              <div className="space-y-3">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    <div className="p-2 bg-gray-100 rounded-full group-hover:bg-pink-100 transition-colors">
                      <MapPin className="w-4 h-4 text-gray-600 group-hover:text-pink-600" />
                    </div>
                    <span className="text-gray-900 group-hover:text-pink-600 transition-colors">
                      {search}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Destinations */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Popular Destinations</h3>
              <div className="space-y-3">
                {popularDestinations.map((destination, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-pink-100 to-red-100 rounded-full">
                        <MapPin className="w-4 h-4 text-pink-600" />
                      </div>
                      <span className="text-gray-900 group-hover:text-pink-600 transition-colors font-medium">
                        {destination.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 group-hover:text-pink-500 transition-colors">
                      {destination.searches}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Suggestions */}
          {searchQuery && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Search results for {searchQuery}
              </h3>
              <div className="text-gray-500">
                Start typing to see destination suggestions...
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}