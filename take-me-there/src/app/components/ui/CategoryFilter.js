'use client'

import { useState } from 'react'

export default function CategoryFilter({ onFilterChange }) {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Destinations', count: 284 },
    { id: 'temples', name: 'Temples & Culture', count: 45 },
    { id: 'beaches', name: 'Beach Paradise', count: 67 },
    { id: 'mountains', name: 'Mountain Adventures', count: 39 },
    { id: 'cities', name: 'City Breaks', count: 56 },
    { id: 'islands', name: 'Tropical Islands', count: 42 },
    { id: 'wildlife', name: 'Wildlife & Safari', count: 35 }
  ]

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId)
    onFilterChange(categoryId)
  }

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 font-playfair">
            Discover Amazing Places
          </h2>
          <div className="text-sm text-gray-500">
            {categories.find(cat => cat.id === activeCategory)?.count} destinations
          </div>
        </div>
        
        <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 flex-shrink-0
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }
              `}
            >
              <span className="font-medium">{category.name}</span>
              <span className={`
                text-xs px-2 py-1 rounded-full
                ${activeCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-600'
                }
              `}>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}