'use client'

import { useState, useEffect } from 'react'
import DestinationCard from '../cards/DestinationCard'
import { destinations } from '@/lib/data/destinations'

export default function MasonryGrid({ activeCategory }) {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    
    // Simulate loading delay for smooth transition
    const timer = setTimeout(() => {
      if (activeCategory === 'all') {
        setFilteredDestinations(destinations)
      } else {
        const filtered = destinations.filter(dest => 
          dest.category === activeCategory
        )
        setFilteredDestinations(filtered)
      }
      setLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [activeCategory])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="masonry-grid">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="masonry-item">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-64 bg-gray-200 animate-pulse" />
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="masonry-grid">
        {filteredDestinations.map((destination) => (
          <DestinationCard 
            key={destination.id} 
            destination={destination} 
          />
        ))}
      </div>
      
      {filteredDestinations.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 text-6xl mb-4">🌍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No destinations found
          </h3>
          <p className="text-gray-500">
            Try selecting a different category to explore more destinations.
          </p>
        </div>
      )}
      
      {/* Load More Button */}
      {filteredDestinations.length > 0 && (
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full font-medium hover:from-pink-600 hover:to-red-600 transition-all hover:scale-105 shadow-lg">
            Load More Destinations
          </button>
        </div>
      )}
    </div>
  )
}