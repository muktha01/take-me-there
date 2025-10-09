"use client";
import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Star, 
  Heart, 
  Share2,
  Bookmark,
  Filter,
  Search,
  TrendingUp,
  Navigation,
  Coffee,
  Camera,
  Mountain,
  Utensils,
  Info,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  RotateCcw,
  Zap,
  Award,
  Users
} from 'lucide-react';

const ModernCardTheme = ({ data }) => {
  const [filterCategory, setFilterCategory] = useState('all');
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [likedItems, setLikedItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All', gradient: 'from-purple-400 to-pink-400', icon: TrendingUp },
    { id: 'nature', name: 'Nature', gradient: 'from-green-400 to-blue-500', icon: Mountain },
    { id: 'food', name: 'Food', gradient: 'from-orange-400 to-red-500', icon: Utensils },
    { id: 'heritage', name: 'Heritage', gradient: 'from-yellow-400 to-orange-500', icon: Award },
    { id: 'adventure', name: 'Adventure', gradient: 'from-red-400 to-pink-500', icon: Zap }
  ];

  const toggleCardFlip = (cardId) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(cardId)) {
      newFlipped.delete(cardId);
    } else {
      newFlipped.add(cardId);
    }
    setFlippedCards(newFlipped);
  };

  const toggleLike = (itemId) => {
    const newLiked = new Set(likedItems);
    if (newLiked.has(itemId)) {
      newLiked.delete(itemId);
    } else {
      newLiked.add(itemId);
    }
    setLikedItems(newLiked);
  };

  const filteredAttractions = data.attractions.filter(attraction => {
    const matchesCategory = filterCategory === 'all' || 
      attraction.category.toLowerCase().includes(filterCategory) ||
      attraction.highlights.some(h => h.toLowerCase().includes(filterCategory));
    
    const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attraction.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      
      {/* Glassmorphism Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {data.location.name}
                </h1>
                <p className="text-gray-600 text-sm">{data.location.state}, {data.location.country}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => toggleLike('main')}
                className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                  likedItems.has('main') 
                    ? 'bg-red-500/20 text-red-500' 
                    : 'bg-white/50 text-gray-600 hover:bg-red-500/10 hover:text-red-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${likedItems.has('main') ? 'fill-current' : ''}`} />
              </button>
              
              <button className="p-3 rounded-full bg-white/50 backdrop-blur-sm text-gray-600 hover:bg-blue-500/10 hover:text-blue-500 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              
              <button className="p-3 rounded-full bg-white/50 backdrop-blur-sm text-gray-600 hover:bg-purple-500/10 hover:text-purple-500 transition-all">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
          
          <img 
            src={data.hero.mainImage} 
            alt={data.location.name}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          
          {/* Glassmorphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Floating Elements */}
          <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            <div className="text-white text-center">
              <div className="text-2xl font-bold">{data.overview.climate.summer.split('-')[1]}</div>
              <div className="text-sm opacity-80">Perfect Weather</div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {data.location.name}
              </h1>
              <p className="text-xl text-white/90 mb-6 max-w-2xl">
                {data.hero.subtitle}
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
                  <Mountain className="w-4 h-4" />
                  <span className="text-sm">{data.location.elevation}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{data.overview.duration.recommended}</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm">4.8 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search attractions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-white/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>
        </div>

        {/* Category Filter Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setFilterCategory(category.id)}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  filterCategory === category.id 
                    ? 'scale-105 shadow-xl' 
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
              >
                <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white`}>
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-6 h-6" />
                    <span className="font-semibold">{category.name}</span>
                  </div>
                </div>
                
                {/* Glassmorphism effect on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              </button>
            );
          })}
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Discover Amazing Places
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map((attraction) => (
            <div key={attraction.id} className="group perspective-1000">
              <div 
                className={`relative h-80 transform-style-preserve-3d transition-transform duration-700 ${
                  flippedCards.has(attraction.id) ? 'rotate-y-180' : ''
                }`}
              >
                
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-lg bg-white">
                  <div className="relative h-48">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium">{attraction.rating}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-purple-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-medium text-white">{attraction.category}</span>
                    </div>

                    {/* Like Button */}
                    <button 
                      onClick={() => toggleLike(attraction.id)}
                      className={`absolute bottom-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all ${
                        likedItems.has(attraction.id)
                          ? 'bg-red-500/90 text-white'
                          : 'bg-white/90 text-gray-600 hover:bg-red-500/90 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${likedItems.has(attraction.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {attraction.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {attraction.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{attraction.duration}</span>
                      </div>
                      <div className="text-sm font-medium text-green-600">
                        {attraction.entryFee}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => toggleCardFlip(attraction.id)}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Info className="w-4 h-4" />
                      More Details
                    </button>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{attraction.name}</h3>
                      <button 
                        onClick={() => toggleCardFlip(attraction.id)}
                        className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="space-y-4 flex-1">
                      <div>
                        <h4 className="font-medium mb-2">Highlights</h4>
                        <div className="space-y-1">
                          {attraction.highlights.slice(0, 3).map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-white rounded-full" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Practical Info</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Best Time:</span>
                            <span>{attraction.bestTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Timings:</span>
                            <span>{attraction.timings}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Tips</h4>
                        <div className="text-sm opacity-90">
                          {attraction.tips?.[0] || "Book in advance for better experience"}
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2">
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Food Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Culinary Delights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.food.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.slice(0, 2).map((item, itemIndex) => (
                  <div key={itemIndex} className="group">
                    <div className="flex gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          {item.mustTry && (
                            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                              Must Try
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-green-600 font-medium text-sm">{item.price}</span>
                          <button 
                            onClick={() => toggleLike(`food-${categoryIndex}-${itemIndex}`)}
                            className={`p-1 rounded-full transition-colors ${
                              likedItems.has(`food-${categoryIndex}-${itemIndex}`)
                                ? 'text-red-500'
                                : 'text-gray-400 hover:text-red-500'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${likedItems.has(`food-${categoryIndex}-${itemIndex}`) ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-white/20 z-30">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center justify-around">
            <button className="p-3 text-purple-500">
              <Mountain className="w-5 h-5" />
            </button>
            <button className="p-3 text-gray-400 hover:text-purple-500 transition-colors">
              <Camera className="w-5 h-5" />
            </button>
            <button className="p-3 text-gray-400 hover:text-purple-500 transition-colors">
              <MapPin className="w-5 h-5" />
            </button>
            <button className="p-3 text-gray-400 hover:text-purple-500 transition-colors">
              <Users className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernCardTheme;