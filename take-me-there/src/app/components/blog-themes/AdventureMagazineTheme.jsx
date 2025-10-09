"use client";
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Star, 
  Camera, 
  Compass,
  Mountain,
  Coffee,
  Utensils,
  Quote,
  Tag,
  TrendingUp,
  Users,
  ThermometerSun,
  Navigation2,
  Bookmark,
  Share2,
  Heart,
  Filter
} from 'lucide-react';

const AdventureMagazineTheme = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPin, setSelectedPin] = useState(null);

  const categories = [
    { id: 'all', name: 'All', color: 'bg-gray-500' },
    { id: 'nature', name: 'Nature', color: 'bg-green-500' },
    { id: 'heritage', name: 'Heritage', color: 'bg-orange-500' },
    { id: 'adventure', name: 'Adventure', color: 'bg-red-500' },
    { id: 'food', name: 'Food', color: 'bg-yellow-500' }
  ];

  const filteredAttractions = activeCategory === 'all' 
    ? data.attractions 
    : data.attractions.filter(attraction => 
        attraction.category.toLowerCase().includes(activeCategory) ||
        attraction.highlights.some(h => h.toLowerCase().includes(activeCategory))
      );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Magazine Header */}
      <header className="bg-white border-b-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 text-white px-4 py-2 font-bold text-xl transform -skew-x-12">
                ADVENTURE
              </div>
              <div className="text-2xl font-bold text-gray-900">MAGAZINE</div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-green-500 transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner - Magazine Style */}
      <section className="relative h-screen overflow-hidden">
        <img 
          src={data.hero.mainImage} 
          alt={data.location.name}
          className="w-full h-full object-cover"
        />
        
        {/* Overlapping Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />
        
        {/* Main Headline */}
        <div className="absolute top-1/4 left-8 right-8 max-w-4xl">
          <div className="bg-red-500 text-white px-6 py-2 inline-block transform -skew-x-12 mb-4">
            <span className="block transform skew-x-12 font-bold text-sm tracking-wide">
              EXCLUSIVE TRAVEL GUIDE
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none mb-6 transform">
            {data.location.name.toUpperCase()}
          </h1>
          
          <div className="bg-white/90 backdrop-blur-sm p-6 max-w-lg transform skew-y-1">
            <p className="text-gray-900 text-lg font-medium transform -skew-y-1">
              {data.hero.subtitle}
            </p>
          </div>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="absolute top-1/4 right-8 bg-white/95 backdrop-blur-sm p-6 transform rotate-2 shadow-2xl">
          <h3 className="font-bold text-gray-900 mb-4 transform -rotate-2">QUICK STATS</h3>
          <div className="space-y-3 transform -rotate-2">
            <div className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-red-500" />
              <span className="text-sm">{data.location.elevation} elevation</span>
            </div>
            <div className="flex items-center gap-2">
              <ThermometerSun className="w-4 h-4 text-orange-500" />
              <span className="text-sm">{data.overview.climate.summer}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{data.overview.duration.recommended}</span>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{new Date(data.meta.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{data.meta.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span className="text-sm">Photo: {data.meta.author}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {data.meta.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="bg-red-500 px-2 py-1 text-xs rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Magazine Layout Grid */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8">
            
            {/* Featured Quote */}
            <div className="bg-red-500 text-white p-8 mb-8 transform -skew-y-1">
              <div className="transform skew-y-1">
                <Quote className="w-8 h-8 mb-4" />
                <p className="text-2xl font-bold leading-tight">
                  "{data.hero.tagline}"
                </p>
                <p className="text-red-100 mt-4">- Travel Expert</p>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="font-bold text-lg">EXPLORE BY CATEGORY</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                      activeCategory === category.id
                        ? `${category.color} text-white shadow-lg`
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Attractions Grid */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-8 relative">
                TOP DESTINATIONS
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-red-500"></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAttractions.slice(0, 4).map((attraction, index) => (
                  <div 
                    key={attraction.id}
                    className={`relative overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                      index === 0 ? 'md:col-span-2 h-80' : 'h-64'
                    }`}
                  >
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Diagonal Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/70" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-500 px-2 py-1 text-xs font-bold rounded">
                          {attraction.category.toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm">{attraction.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className={`font-bold mb-2 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                        {attraction.name}
                      </h3>
                      
                      <p className="text-white/90 text-sm line-clamp-2 mb-3">
                        {attraction.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs">
                        <span>⏱️ {attraction.duration}</span>
                        <span>💰 {attraction.entryFee}</span>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Map Section */}
            <div className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Compass className="w-6 h-6" />
                  INTERACTIVE MAP
                </h3>
              </div>
              
              <div className="p-6">
                <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Simplified Map Representation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
                    {data.attractions.slice(0, 6).map((attraction, index) => (
                      <button
                        key={attraction.id}
                        onClick={() => setSelectedPin(attraction)}
                        className={`absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg transform transition-all hover:scale-150 ${
                          selectedPin?.id === attraction.id ? 'scale-150 bg-red-700' : ''
                        }`}
                        style={{
                          left: `${20 + (index * 12)}%`,
                          top: `${30 + (index % 3) * 20}%`
                        }}
                        title={attraction.name}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive map view</p>
                    <p className="text-sm text-gray-500">Click pins to explore</p>
                  </div>
                </div>
                
                {selectedPin && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold text-lg">{selectedPin.name}</h4>
                    <p className="text-gray-600 text-sm">{selectedPin.description}</p>
                    <div className="mt-2 text-xs text-gray-500">
                      Duration: {selectedPin.duration} | Entry: {selectedPin.entryFee}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Food Section - Magazine Style */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-8 relative">
                CULINARY ADVENTURES
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-orange-500"></div>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.food.categories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4">
                      <h3 className="font-bold flex items-center gap-2">
                        <Utensils className="w-5 h-5" />
                        {category.name}
                      </h3>
                    </div>
                    
                    <div className="p-4 space-y-4">
                      {category.items.slice(0, 2).map((item, itemIndex) => (
                        <div key={itemIndex} className="flex gap-3">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{item.name}</h4>
                            <p className="text-gray-600 text-xs line-clamp-2">{item.description}</p>
                            <div className="flex justify-between text-xs mt-1">
                              <span className="text-green-600 font-semibold">{item.price}</span>
                              {item.mustTry && (
                                <span className="bg-red-100 text-red-600 px-1 rounded">Must Try</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            
            {/* Quick Facts Panel */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transform rotate-1">
              <div className="transform -rotate-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  QUICK FACTS
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Elevation:</span>
                    <span className="font-semibold">{data.location.elevation}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Best Time:</span>
                    <span className="font-semibold">{data.overview.bestTime.peak}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{data.overview.duration.recommended}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Climate:</span>
                    <span className="font-semibold">{data.overview.climate.summer}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <ThermometerSun className="w-5 h-5" />
                WEATHER TODAY
              </h3>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">22°C</div>
                <div className="text-blue-100 mb-4">Pleasant & Cool</div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-blue-100">High</div>
                    <div className="font-semibold">25°C</div>
                  </div>
                  <div>
                    <div className="text-blue-100">Low</div>
                    <div className="font-semibold">18°C</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-blue-500" />
                TRENDING TAGS
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {data.meta.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-700 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
                {data.social.hashtags.slice(0, 5).map((tag, index) => (
                  <span 
                    key={`social-${index}`}
                    className="bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-700 px-3 py-1 rounded-full text-sm transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Destinations */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Navigation2 className="w-5 h-5 text-green-500" />
                SIMILAR DESTINATIONS
              </h3>
              
              <div className="space-y-3">
                {data.relatedDestinations.map((dest, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div>
                      <div className="font-medium text-gray-900">{dest.name}</div>
                      <div className="text-gray-600 text-sm">{dest.state}</div>
                    </div>
                    <div className="text-blue-600 text-sm font-medium">
                      {dest.distance}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureMagazineTheme;